/*
 * The Violet Sanctuary – community service: comments, prayer wall and Lily Post pen pals
 * Runs on Cloudflare Workers (free tier) with a Cloudflare D1 database.
 *
 * How moderation works
 *   1. Word filter: comments with slurs or profanity are refused before they are saved.
 *   2. AI check (optional): if you add a Workers AI binding named AI, every comment is checked
 *      for hate, harassment, threats and similar. Anything flagged is HELD for you to review.
 *   3. Everything else is published straight away.
 *   4. Visitors can report a comment. After REPORT_THRESHOLD reports it is hidden until you review it.
 *   5. You review held comments in bulk on admin.html.
 *
 * Also: likes (one per visitor), one level of replies, and a "Sanctuary team" badge on comments
 * posted while signed in to admin.html. No visitor accounts are needed.
 *
 * Settings (Worker → Settings → Variables and Secrets / Bindings):
 *   DB               D1 database binding (required)
 *   ADMIN_TOKEN      secret: a long password you type on admin.html (required)
 *   IP_SALT          secret: any long random text, used to scramble IP addresses (required)
 *   ALLOWED_ORIGINS  text: your site address(es), comma-separated, e.g. https://yourname.github.io
 *   AI               Workers AI binding (optional, recommended)
 *   AUTO_APPROVE     text: "false" to hold EVERY new comment for review (default: publish straight away)
 *   TURNSTILE_SECRET secret: optional Cloudflare Turnstile anti-spam key
 *
 * Sign in with Discord (optional):
 *   DISCORD_CLIENT_ID      text: from the Discord Developer Portal
 *   DISCORD_CLIENT_SECRET  secret: from the Discord Developer Portal
 *   SESSION_SECRET         secret: any long random text, used to sign visitors' sign-in sessions
 *   REQUIRE_SIGN_IN        text: "true" to allow comments only from people signed in with Discord
 *
 * Signed-in visitors get a verified name and avatar, can delete their own comments,
 * and can see replies to their comments.
 *
 * Sanctuary Journal (points, badges, certificates):
 *   RULES_URL   text: the address of data/activities.js on your live site, e.g.
 *               https://yourname.github.io/violet-sanctuary/data/activities.js
 *               The service reads point values and badge rules from that file, so they always
 *               match the website. Without it, Journals simply stay in each visitor's browser.
 */

const LIMITS = { name: 60, body: 2000, perIpPer10Min: 4, maxLinks: 2, reportsPerIpPerHour: 10 };
const REPORT_THRESHOLD = 2;

/*
 * BLOCKED WORDS
 * Matched after lower-casing and undoing common disguises (f*ck, sh1t, n1gg@ …).
 * Words that appear in Scripture or traditional prayer (hell, damn, whore, bastard, ass, piss)
 * are deliberately NOT blocked. Add or remove patterns as you like.
 */
const BLOCKED = [
  // profanity
  /f+[u*v]+c+k+/, /\bs+h+i+t+(s|ty|ting|head|e)?\b/, /c+u+n+t+/, /\bb+i+t+c+h+(e+s)?\b/,
  /\ba+s+s+h+o+l+e+s?\b/, /m+o+t+h+e+r+f+/, /\bs+l+u+t+s?\b/, /\bt+w+a+t+s?\b/, /\bw+a+n+k+e+r+s?\b/,
  /\bp+u+s+s+y+\b/, /\bd+i+c+k+h+e+a+d+s?\b/,
  // slurs
  /n+i+g+g+(e+r+|a+h?)s?/, /\bf+a+g+(g+o+t+)?s?\b/, /\br+e+t+a+r+d+(e+d+|s+)?\b/, /\bs+p+i+c+s?\b/,
  /\bc+h+i+n+k+s?\b/, /\bk+i+k+e+s?\b/, /w+e+t+b+a+c+k+/, /\bt+r+a+n+n+(y+|i+e+s+)\b/, /\bd+y+k+e+s?\b/,
  /\bg+o+o+k+s?\b/, /r+a+g+h+e+a+d+/, /t+o+w+e+l+h+e+a+d+/, /\bb+e+a+n+e+r+s?\b/, /\bc+o+o+n+s?\b/, /\bp+a+k+i+s?\b/,
  // telling someone to harm themselves
  /\bk+y+s+\b/, /k+i+l+l+\s*(y+o+u+r+|u+r+)\s*s+e+l+f+/
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = corsHeaders(request.headers.get("Origin") || "", env);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });

    try {
      const p = url.pathname, m = request.method;
      if (p === "/comments" && m === "GET") return await listApproved(url, env, cors, request);
      if (p === "/comments" && m === "POST") return await submit(request, env, cors);
      if (p === "/comments/report" && m === "POST") return await report(request, env, cors);
      if (p === "/comments/like" && m === "POST") return await like(request, env, cors);
      if (p === "/comments/mine/delete" && m === "POST") return await deleteMine(request, env, cors);
      if (p === "/me" && m === "GET") return await me(request, env, cors);
      if (p === "/auth/discord/login" && m === "GET") return await discordLogin(url, env);
      if (p === "/auth/discord/callback" && m === "GET") return await discordCallback(url, env);
      if (p.startsWith("/bible")) {
        const r = await bibleNotes(p, m, request, env, cors, url);
        if (r) return r;
      }
      if (p.startsWith("/progress")) {
        const r = await progress(p, m, request, env, cors, url);
        if (r) return r;
      }
      if (p.startsWith("/prayers") || p.startsWith("/penpals") || p.startsWith("/members")) {
        const r = await community(p, m, request, env, cors, url);
        if (r) return r;
      }
      if (p.startsWith("/admin/")) {
        if (!isAdmin(request, env)) return json({ error: "Not authorised." }, 401, cors);
        if (p.startsWith("/admin/community/")) { const r = await communityAdmin(p, m, request, env, cors); if (r) return r; }
        if (p === "/admin/queue" && m === "GET") return await adminList(env, cors, "status = 'held'", "ASC");
        if (p === "/admin/recent" && m === "GET") return await adminList(env, cors, "status != 'held'", "DESC");
        if (p === "/admin/bulk" && m === "POST") return await bulk(request, env, cors);
      }
      if (p === "/") return json({ ok: true, service: "Violet Sanctuary community", discord: !!env.DISCORD_CLIENT_ID, requireSignIn: env.REQUIRE_SIGN_IN === "true" }, 200, cors);
      return json({ error: "Not found." }, 404, cors);
    } catch (err) {
      return json({ error: "Something went wrong. Please try again later." }, 500, cors);
    }
  }
};

/* ---------- Public ---------- */

async function listApproved(url, env, cors, request) {
  const page = cleanPage(url.searchParams.get("page"));
  if (!page) return json({ error: "Missing page." }, 400, cors);
  const { results } = await env.DB.prepare(
    `SELECT c.id, c.parent_id, c.name, c.body, c.likes, c.is_team, c.user_id, c.avatar, c.created_at,
       CASE WHEN sp.public = 1 THEN sp.title_name END AS title
     FROM comments c LEFT JOIN scholar_profiles sp ON sp.user_id = c.user_id
     WHERE c.page = ? AND c.status = 'approved' ORDER BY c.created_at ASC LIMIT 500`
  ).bind(page).all();
  // Tell the visitor which comments they've already liked.
  const ipHash = await hashIp(request, env);
  const liked = await env.DB.prepare(
    "SELECT l.comment_id FROM likes l JOIN comments c ON c.id = l.comment_id WHERE c.page = ? AND l.ip_hash = ?"
  ).bind(page, ipHash).all();
  return json({ comments: results, liked: liked.results.map((r) => r.comment_id) }, 200, cors);
}

async function submit(request, env, cors) {
  if (!originAllowed(request.headers.get("Origin") || "", env)) return json({ error: "This site can't post comments here." }, 403, cors);
  let data;
  try { data = await request.json(); } catch { return json({ error: "Please send the form again." }, 400, cors); }

  // Honeypot: a hidden field real people never fill in. Pretend it worked.
  if (data.website) return json({ ok: true, status: "held" }, 200, cors);

  const user = await readSession(request, env);
  if (env.REQUIRE_SIGN_IN === "true" && !user && !isAdmin(request, env)) return json({ error: "Please sign in with Discord to comment." }, 401, cors);
  const page = cleanPage(data.page);
  const name = user ? clean(user.name, LIMITS.name) : (clean(data.name, LIMITS.name) || "A fellow pilgrim");
  const body = clean(data.body, LIMITS.body);
  if (!page) return json({ error: "Missing page." }, 400, cors);
  if (body.length < 2) return json({ error: "Please write a comment first." }, 400, cors);
  if ((body.match(/https?:\/\//gi) || []).length > LIMITS.maxLinks) return json({ error: "Please include no more than two links." }, 400, cors);
  if (containsBlocked(name) || containsBlocked(body)) {
    return json({ error: "This comment includes language we don't allow here. Please rephrase it gently and try again." }, 422, cors);
  }

  if (env.TURNSTILE_SECRET && !(await verifyTurnstile(data.turnstileToken, request, env))) {
    return json({ error: "The anti-spam check didn't pass. Please try again." }, 400, cors);
  }

  // Replies: attach to the top-level comment on the same page (one level of nesting).
  let parentId = null;
  if (data.parent_id) {
    const parent = await env.DB.prepare("SELECT id, parent_id, page FROM comments WHERE id = ?").bind(Number(data.parent_id)).first();
    if (!parent || parent.page !== page) return json({ error: "That comment is no longer available to reply to." }, 400, cors);
    parentId = parent.parent_id || parent.id;
  }
  const isTeam = isAdmin(request, env) ? 1 : 0;

  const ipHash = await hashIp(request, env);
  const recent = await env.DB.prepare(
    "SELECT COUNT(*) AS n FROM comments WHERE ip_hash = ? AND created_at > datetime('now', '-10 minutes')"
  ).bind(ipHash).first();
  if (!isTeam && recent && recent.n >= LIMITS.perIpPer10Min) return json({ error: "Thank you! Please wait a few minutes before posting again." }, 429, cors);

  let status = env.AUTO_APPROVE === "false" ? "held" : "approved";
  let reason = status === "held" ? "Manual approval is on" : null;
  if (isTeam) { status = "approved"; reason = null; }
  else if (status === "approved") {
    const ai = await aiCheck(`${name}: ${body}`, env);
    if (ai.flagged) { status = "held"; reason = ai.reason; }
  }

  const row = await env.DB.prepare(
    "INSERT INTO comments (page, parent_id, name, user_id, avatar, body, status, flag_reason, is_team, ip_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id, created_at"
  ).bind(page, parentId, name, user ? user.id : null, user ? user.avatar : null, body, status, reason, isTeam, ipHash).first();

  return json({ ok: true, status, comment: status === "approved"
    ? { id: row.id, parent_id: parentId, name, user_id: user ? user.id : null, avatar: user ? user.avatar : null, body, likes: 0, is_team: isTeam, created_at: row.created_at } : null }, 200, cors);
}

async function report(request, env, cors) {
  if (!originAllowed(request.headers.get("Origin") || "", env)) return json({ error: "Not allowed." }, 403, cors);
  const data = await request.json().catch(() => ({}));
  const id = Number(data.id);
  if (!id) return json({ error: "Missing comment." }, 400, cors);
  const reason = clean(data.reason, 200);
  const ipHash = await hashIp(request, env);

  const recent = await env.DB.prepare(
    "SELECT COUNT(*) AS n FROM reports WHERE ip_hash = ? AND created_at > datetime('now', '-1 hour')"
  ).bind(ipHash).first();
  if (recent && recent.n >= LIMITS.reportsPerIpPerHour) return json({ ok: true }, 200, cors);

  const added = await env.DB.prepare(
    "INSERT OR IGNORE INTO reports (comment_id, ip_hash, reason) VALUES (?, ?, ?)"
  ).bind(id, ipHash, reason).run();
  if (added.meta && added.meta.changes) {
    await env.DB.prepare("UPDATE comments SET reports = reports + 1 WHERE id = ?").bind(id).run();
    await env.DB.prepare(
      "UPDATE comments SET status = 'held', flag_reason = 'Reported by visitors' WHERE id = ? AND status = 'approved' AND reports >= ?"
    ).bind(id, REPORT_THRESHOLD).run();
  }
  return json({ ok: true }, 200, cors);
}

async function like(request, env, cors) {
  if (!originAllowed(request.headers.get("Origin") || "", env)) return json({ error: "Not allowed." }, 403, cors);
  const data = await request.json().catch(() => ({}));
  const id = Number(data.id);
  if (!id) return json({ error: "Missing comment." }, 400, cors);
  const ipHash = await hashIp(request, env);
  const existing = await env.DB.prepare("SELECT 1 AS y FROM likes WHERE comment_id = ? AND ip_hash = ?").bind(id, ipHash).first();
  if (existing) {
    await env.DB.prepare("DELETE FROM likes WHERE comment_id = ? AND ip_hash = ?").bind(id, ipHash).run();
  } else {
    await env.DB.prepare("INSERT OR IGNORE INTO likes (comment_id, ip_hash) VALUES (?, ?)").bind(id, ipHash).run();
  }
  const row = await env.DB.prepare(
    "UPDATE comments SET likes = (SELECT COUNT(*) FROM likes WHERE comment_id = ?) WHERE id = ? RETURNING likes"
  ).bind(id, id).first();
  return json({ ok: true, liked: !existing, likes: row ? row.likes : 0 }, 200, cors);
}

async function deleteMine(request, env, cors) {
  const user = await readSession(request, env);
  if (!user) return json({ error: "Please sign in first." }, 401, cors);
  const { id } = await request.json().catch(() => ({}));
  const res = await env.DB.prepare("DELETE FROM comments WHERE id = ? AND user_id = ?").bind(Number(id), user.id).run();
  if (!res.meta || !res.meta.changes) return json({ error: "You can only delete your own comments." }, 403, cors);
  await env.DB.prepare("UPDATE comments SET parent_id = NULL WHERE parent_id = ?").bind(Number(id)).run();
  return json({ ok: true }, 200, cors);
}

// Who am I, plus recent replies to my comments (a simple notification list).
async function me(request, env, cors) {
  const user = await readSession(request, env);
  if (!user) return json({ user: null }, 200, cors);
  const { results } = await env.DB.prepare(
    `SELECT r.id, r.page, r.name, r.body, r.created_at FROM comments r
     JOIN comments c ON r.parent_id = c.id
     WHERE c.user_id = ? AND (r.user_id IS NULL OR r.user_id != ?) AND r.status = 'approved'
     ORDER BY r.created_at DESC LIMIT 20`
  ).bind(user.id, user.id).all();
  return json({ user, replies: results }, 200, cors);
}

/* ---------- Sign in with Discord ---------- */

async function discordLogin(url, env) {
  if (!env.DISCORD_CLIENT_ID || !env.SESSION_SECRET) return new Response("Discord sign-in isn't set up yet.", { status: 501 });
  const back = url.searchParams.get("return") || "";
  if (!returnAllowed(back, env)) return new Response("That return address isn't allowed.", { status: 400 });
  const state = await sign({ r: back, n: crypto.randomUUID(), exp: Date.now() + 10 * 60 * 1000 }, env.SESSION_SECRET);
  const auth = new URL("https://discord.com/oauth2/authorize");
  auth.searchParams.set("client_id", env.DISCORD_CLIENT_ID);
  auth.searchParams.set("response_type", "code");
  auth.searchParams.set("redirect_uri", url.origin + "/auth/discord/callback");
  auth.searchParams.set("scope", "identify");
  auth.searchParams.set("state", state);
  auth.searchParams.set("prompt", "none");
  return Response.redirect(auth.toString(), 302);
}

async function discordCallback(url, env) {
  const st = await verify(url.searchParams.get("state") || "", env.SESSION_SECRET);
  if (!st || st.exp < Date.now() || !returnAllowed(st.r, env)) return new Response("Sign-in expired. Please go back and try again.", { status: 400 });
  const back = new URL(st.r);
  const fail = (why) => { back.searchParams.set("vs_signin", why); return Response.redirect(back.toString(), 302); };
  const code = url.searchParams.get("code");
  if (!code) return fail("cancelled");

  const tokenRes = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env.DISCORD_CLIENT_ID, client_secret: env.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code", code, redirect_uri: url.origin + "/auth/discord/callback"
    })
  });
  if (!tokenRes.ok) return fail("error");
  const { access_token } = await tokenRes.json();
  const userRes = await fetch("https://discord.com/api/users/@me", { headers: { Authorization: "Bearer " + access_token } });
  if (!userRes.ok) return fail("error");
  const du = await userRes.json();
  const user = {
    id: String(du.id),
    name: clean(du.global_name || du.username, LIMITS.name),
    avatar: du.avatar ? `https://cdn.discordapp.com/avatars/${du.id}/${du.avatar}.png?size=64` : null,
    exp: Date.now() + 30 * 24 * 60 * 60 * 1000
  };
  back.searchParams.set("vs_session", await sign(user, env.SESSION_SECRET));
  return Response.redirect(back.toString(), 302);
}

async function readSession(request, env) {
  if (!env.SESSION_SECRET) return null;
  const token = request.headers.get("X-Session") || "";
  const user = token ? await verify(token, env.SESSION_SECRET) : null;
  return user && user.exp > Date.now() ? user : null;
}

function returnAllowed(back, env) {
  try { return allowedList(env).includes(new URL(back).origin); } catch { return false; }
}

const b64url = (bytes) => btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const fromB64url = (s) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));
async function hmacKey(secret) {
  return crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}
async function sign(obj, secret) {
  const body = b64url(new TextEncoder().encode(JSON.stringify(obj)));
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", await hmacKey(secret), new TextEncoder().encode(body)));
  return body + "." + b64url(sig);
}
async function verify(token, secret) {
  if (!secret) return null;
  const [body, sig] = String(token).split(".");
  if (!body || !sig) return null;
  try {
    const ok = await crypto.subtle.verify("HMAC", await hmacKey(secret), fromB64url(sig), new TextEncoder().encode(body));
    return ok ? JSON.parse(new TextDecoder().decode(fromB64url(body))) : null;
  } catch { return null; }
}

/* =========================================================
   COMMUNITY: PRAYER WALL + LILY POST PEN PALS
   Both need "Sign in with Discord" (DISCORD_CLIENT_ID etc.) for anything personal.
   ========================================================= */

const COMMUNITY_LIMITS = { title: 120, prayer: 2000, note: 1000, intro: 800, interests: 300, region: 60, helpMsg: 600, requestMsg: 500 };
const HELP_KINDS = ["Pray with you on a call", "A listening ear", "A meal", "An errand or ride", "A card or letter", "Something else"];
const CARE_WORDS = /\b(suicid|kill (my|me)self|end (it all|my life)|want to die|self[- ]?harm|hurt(ing)? myself|no reason to live)/i;

async function community(p, m, request, env, cors, url) {
  const user = await readSession(request, env);
  const body = m === "POST" ? await request.json().catch(() => ({})) : {};
  const needUser = () => json({ error: "Please sign in with Discord first." }, 401, cors);
  if (m === "POST" && !originAllowed(request.headers.get("Origin") || "", env)) return json({ error: "Not allowed." }, 403, cors);

  /* ---------- Prayer wall ---------- */
  if (p === "/prayers" && m === "GET") {
    const view = url.searchParams.get("view") === "answered" ? 1 : 0;
    const memberClause = user ? "" : "AND audience = 'everyone'";
    const { results } = await env.DB.prepare(
      `SELECT id, user_id, name, avatar, show_name, audience, category, title, body, prayed, candles, answered, update_note, created_at
       FROM prayers WHERE status = 'approved' AND answered = ? ${memberClause} ORDER BY created_at DESC LIMIT 100`
    ).bind(view).all();
    const actor = user ? user.id : "ip:" + await hashIp(request, env);
    const mine = await env.DB.prepare("SELECT prayer_id, kind FROM prayer_actions WHERE actor = ?").bind(actor).all();
    const did = {}; mine.results.forEach((r) => { (did[r.prayer_id] = did[r.prayer_id] || []).push(r.kind); });
    return json({
      prayers: results.map((r) => ({
        id: r.id, title: r.title, body: r.body, category: r.category, audience: r.audience,
        name: r.show_name ? r.name : "Anonymous", avatar: r.show_name ? r.avatar : null,
        prayed: r.prayed, candles: r.candles, answered: !!r.answered, update_note: r.update_note, created_at: r.created_at,
        mine: !!user && r.user_id === user.id, did: did[r.id] || []
      }))
    }, 200, cors);
  }

  if (p === "/prayers" && m === "POST") {
    if (!user) return needUser();
    const title = clean(body.title, COMMUNITY_LIMITS.title), text = clean(body.body, COMMUNITY_LIMITS.prayer);
    if (title.length < 2 || text.length < 2) return json({ error: "Please add a short title and your request." }, 400, cors);
    if (containsBlocked(title) || containsBlocked(text)) return json({ error: "This includes language we don't allow here. Please rephrase it gently." }, 422, cors);
    const recent = await env.DB.prepare("SELECT COUNT(*) AS n FROM prayers WHERE user_id = ? AND created_at > datetime('now','-1 day')").bind(user.id).first();
    if (recent.n >= 5) return json({ error: "You've shared several requests today. Please come back tomorrow." }, 429, cors);
    let status = "approved", reason = null, care = CARE_WORDS.test(title + " " + text);
    const ai = await aiCheck(title + "\n" + text, env);
    if (ai.flagged) { status = "held"; reason = ai.reason; if (/self-harm/.test(ai.reason)) care = true; }
    if (care) { status = "held"; reason = "May need care: possible self-harm or crisis"; }
    const row = await env.DB.prepare(
      `INSERT INTO prayers (user_id, name, avatar, show_name, audience, category, title, body, status, flag_reason)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id`
    ).bind(user.id, user.name, user.avatar, body.show_name ? 1 : 0, body.audience === "members" ? "members" : "everyone",
      clean(body.category, 40) || null, title, text, status, reason).first();
    return json({ ok: true, id: row.id, status, care }, 200, cors);
  }

  if (p === "/prayers/act" && m === "POST") {
    const id = Number(body.id), kind = body.kind === "candle" ? "candle" : "prayed";
    const actor = user ? user.id : "ip:" + await hashIp(request, env);
    const exists = await env.DB.prepare("SELECT 1 AS y FROM prayer_actions WHERE prayer_id = ? AND actor = ? AND kind = ?").bind(id, actor, kind).first();
    if (!exists) {
      await env.DB.prepare("INSERT INTO prayer_actions (prayer_id, actor, kind) VALUES (?, ?, ?)").bind(id, actor, kind).run();
      await env.DB.prepare(`UPDATE prayers SET ${kind === "candle" ? "candles = candles" : "prayed = prayed"} + 1 WHERE id = ?`).bind(id).run();
    }
    const row = await env.DB.prepare("SELECT prayed, candles FROM prayers WHERE id = ?").bind(id).first();
    return json({ ok: true, prayed: row ? row.prayed : 0, candles: row ? row.candles : 0 }, 200, cors);
  }

  if (p === "/prayers/note" && m === "POST") {
    if (!user) return needUser();
    const text = clean(body.body, COMMUNITY_LIMITS.note);
    if (text.length < 2) return json({ error: "Please write a few words first." }, 400, cors);
    if (containsBlocked(text)) return json({ error: "This includes language we don't allow here. Please rephrase it gently." }, 422, cors);
    const target = await env.DB.prepare("SELECT user_id FROM prayers WHERE id = ? AND status = 'approved'").bind(Number(body.id)).first();
    if (!target) return json({ error: "That request isn't available any more." }, 404, cors);
    if (await isBlocked(env, target.user_id, user.id)) return json({ ok: true }, 200, cors);
    const recent = await env.DB.prepare("SELECT COUNT(*) AS n FROM prayer_notes WHERE user_id = ? AND created_at > datetime('now','-1 hour')").bind(user.id).first();
    if (recent.n >= 20) return json({ error: "Thank you for your kindness! Please wait a little before sending more." }, 429, cors);
    const ai = await aiCheck(text, env);
    await env.DB.prepare("INSERT INTO prayer_notes (prayer_id, user_id, name, body, status, flag_reason) VALUES (?, ?, ?, ?, ?, ?)")
      .bind(Number(body.id), user.id, user.name, text, ai.flagged ? "held" : "approved", ai.flagged ? ai.reason : null).run();
    return json({ ok: true }, 200, cors);
  }

  if (p === "/prayers/help" && m === "POST") {
    if (!user) return needUser();
    if (!body.adult) return json({ error: "Please confirm you're 18 or older to offer help." }, 400, cors);
    const kind = HELP_KINDS.includes(body.kind) ? body.kind : "Something else";
    const msg = clean(body.message, COMMUNITY_LIMITS.helpMsg);
    if (containsBlocked(msg)) return json({ error: "This includes language we don't allow here." }, 422, cors);
    const target = await env.DB.prepare("SELECT user_id FROM prayers WHERE id = ? AND status = 'approved'").bind(Number(body.id)).first();
    if (!target) return json({ error: "That request isn't available any more." }, 404, cors);
    if (target.user_id === user.id) return json({ error: "This is your own request." }, 400, cors);
    if (await isBlocked(env, target.user_id, user.id)) return json({ ok: true }, 200, cors);
    const dup = await env.DB.prepare("SELECT 1 AS y FROM help_offers WHERE prayer_id = ? AND helper_id = ? AND status = 'offered'").bind(Number(body.id), user.id).first();
    if (dup) return json({ error: "You've already offered help here. They'll see it." }, 400, cors);
    await env.DB.prepare("INSERT INTO help_offers (prayer_id, helper_id, helper_name, kind, message) VALUES (?, ?, ?, ?, ?)")
      .bind(Number(body.id), user.id, user.name, kind, msg).run();
    return json({ ok: true }, 200, cors);
  }

  // Everything about MY requests: notes received, offers received, and offers I've made.
  if (p === "/prayers/mine" && m === "GET") {
    if (!user) return needUser();
    const reqs = (await env.DB.prepare(
      "SELECT id, title, body, status, flag_reason, show_name, audience, prayed, candles, answered, update_note, created_at FROM prayers WHERE user_id = ? ORDER BY created_at DESC"
    ).bind(user.id).all()).results;
    const ids = reqs.map((r) => r.id);
    let notes = [], offers = [];
    if (ids.length) {
      const marks = ids.map(() => "?").join(",");
      notes = (await env.DB.prepare(`SELECT id, prayer_id, user_id, name, body, created_at FROM prayer_notes WHERE status = 'approved' AND prayer_id IN (${marks}) ORDER BY created_at DESC`).bind(...ids).all()).results;
      offers = (await env.DB.prepare(`SELECT id, prayer_id, helper_id, helper_name, kind, message, status, created_at FROM help_offers WHERE prayer_id IN (${marks}) AND status != 'declined' ORDER BY created_at DESC`).bind(...ids).all()).results;
    }
    const given = (await env.DB.prepare(
      `SELECT h.id, h.kind, h.status, h.created_at, pr.title, pr.user_id AS owner_id, pr.name AS owner_name, pr.show_name
       FROM help_offers h JOIN prayers pr ON pr.id = h.prayer_id WHERE h.helper_id = ? ORDER BY h.created_at DESC LIMIT 50`
    ).bind(user.id).all()).results;
    const blocked = new Set((await env.DB.prepare("SELECT blocked_id FROM blocks WHERE user_id = ?").bind(user.id).all()).results.map((b) => b.blocked_id));
    const refs = {};
    for (const x of [...notes.map((n) => n.user_id), ...offers.map((o) => o.helper_id)]) if (!refs[x]) refs[x] = await refFor(x, env);
    return json({
      requests: reqs.map((r) => ({
        ...r,
        notes: notes.filter((n) => n.prayer_id === r.id && !blocked.has(n.user_id)).map(({ user_id, ...n }) => ({ ...n, from: refs[user_id] })),
        offers: offers.filter((o) => o.prayer_id === r.id && !blocked.has(o.helper_id)).map((o) => ({
          id: o.id, kind: o.kind, message: o.message, status: o.status, created_at: o.created_at, helper_name: o.helper_name,
          from: refs[o.helper_id], contact: o.status === "accepted" ? discordProfile(o.helper_id) : null
        }))
      })),
      helping: given.map((g) => ({
        id: g.id, kind: g.kind, status: g.status, title: g.title, created_at: g.created_at,
        // Only after they accept do you see who they are and how to reach them.
        with: g.status === "accepted" ? g.owner_name : null,
        contact: g.status === "accepted" ? discordProfile(g.owner_id) : null
      }))
    }, 200, cors);
  }

  if (p === "/prayers/help/respond" && m === "POST") {
    if (!user) return needUser();
    const offer = await env.DB.prepare("SELECT h.id, pr.user_id FROM help_offers h JOIN prayers pr ON pr.id = h.prayer_id WHERE h.id = ?").bind(Number(body.id)).first();
    if (!offer || offer.user_id !== user.id) return json({ error: "Not found." }, 404, cors);
    await env.DB.prepare("UPDATE help_offers SET status = ?, updated_at = datetime('now') WHERE id = ?").bind(body.accept ? "accepted" : "declined", offer.id).run();
    return json({ ok: true }, 200, cors);
  }

  if (p === "/prayers/answered" && m === "POST") {
    if (!user) return needUser();
    const note = clean(body.note, 600);
    if (containsBlocked(note)) return json({ error: "This includes language we don't allow here." }, 422, cors);
    await env.DB.prepare("UPDATE prayers SET answered = ?, update_note = ?, updated_at = datetime('now') WHERE id = ? AND user_id = ?")
      .bind(body.answered === false ? 0 : 1, note || null, Number(body.id), user.id).run();
    return json({ ok: true }, 200, cors);
  }

  if (p === "/prayers/delete" && m === "POST") {
    if (!user) return needUser();
    const id = Number(body.id);
    const res = await env.DB.prepare("DELETE FROM prayers WHERE id = ? AND user_id = ?").bind(id, user.id).run();
    if (!res.meta || !res.meta.changes) return json({ error: "You can only delete your own requests." }, 403, cors);
    for (const t of ["prayer_notes", "help_offers", "prayer_actions", "prayer_reports"]) await env.DB.prepare(`DELETE FROM ${t} WHERE prayer_id = ?`).bind(id).run();
    return json({ ok: true }, 200, cors);
  }

  if (p === "/prayers/report" && m === "POST") {
    const ipHash = await hashIp(request, env);
    const added = await env.DB.prepare("INSERT OR IGNORE INTO prayer_reports (prayer_id, ip_hash, reason) VALUES (?, ?, ?)").bind(Number(body.id), ipHash, clean(body.reason, 200)).run();
    if (added.meta && added.meta.changes) {
      await env.DB.prepare("UPDATE prayers SET reports = reports + 1 WHERE id = ?").bind(Number(body.id)).run();
      const danger = /danger/i.test(body.reason || "");
      await env.DB.prepare(
        "UPDATE prayers SET status = 'held', flag_reason = ? WHERE id = ? AND status = 'approved' AND (reports >= ? OR ?)"
      ).bind(danger ? "Reported: someone may be in danger" : "Reported by visitors", Number(body.id), REPORT_THRESHOLD, danger ? 1 : 0).run();
    }
    return json({ ok: true }, 200, cors);
  }

  /* ---------- Lily Post pen pals ---------- */
  if (p === "/penpals/me" && m === "GET") {
    if (!user) return needUser();
    const profile = await env.DB.prepare("SELECT intro, interests, region, wants, status FROM penpal_profiles WHERE user_id = ?").bind(user.id).first();
    const links = (await env.DB.prepare(
      `SELECT l.id, l.from_id, l.to_id, l.message, l.status, l.created_at,
              pf.name AS from_name, pf.avatar AS from_avatar, pt.name AS to_name, pt.avatar AS to_avatar,
              pf.intro AS from_intro, pf.region AS from_region, pf.wants AS from_wants
       FROM penpal_links l LEFT JOIN penpal_profiles pf ON pf.user_id = l.from_id LEFT JOIN penpal_profiles pt ON pt.user_id = l.to_id
       WHERE (l.from_id = ? OR l.to_id = ?) AND l.status IN ('pending','accepted') ORDER BY l.created_at DESC`
    ).bind(user.id, user.id).all()).results;
    const out = { incoming: [], outgoing: [], matches: [] };
    for (const l of links) {
      const iSent = l.from_id === user.id;
      const other = iSent ? { id: l.to_id, name: l.to_name, avatar: l.to_avatar } : { id: l.from_id, name: l.from_name, avatar: l.from_avatar };
      if (l.status === "accepted") out.matches.push({ id: l.id, name: other.name, avatar: other.avatar, contact: discordProfile(other.id), since: l.created_at });
      else if (iSent) out.outgoing.push({ id: l.id, name: other.name, avatar: other.avatar, created_at: l.created_at });
      else out.incoming.push({ id: l.id, ref: await refFor(other.id, env), name: other.name, avatar: other.avatar, message: l.message, intro: l.from_intro, region: l.from_region, wants: l.from_wants, created_at: l.created_at });
    }
    return json({ user: { name: user.name, avatar: user.avatar }, profile, ...out }, 200, cors);
  }

  if (p === "/penpals/profile" && m === "POST") {
    if (!user) return needUser();
    if (!body.adult || !body.agree) return json({ error: "Please confirm you're 18 or older and agree to the Lily Post guidelines." }, 400, cors);
    const intro = clean(body.intro, COMMUNITY_LIMITS.intro), interests = clean(body.interests, COMMUNITY_LIMITS.interests), region = clean(body.region, COMMUNITY_LIMITS.region);
    if (intro.length < 20) return json({ error: "Please write a short introduction (a sentence or two)." }, 400, cors);
    if ([intro, interests, region].some(containsBlocked)) return json({ error: "This includes language we don't allow here." }, 422, cors);
    if (/\d{3,}.*\b(st|street|ave|avenue|rd|road|lane|ln|dr|drive|blvd|po box)\b/i.test(intro + " " + region) || /@|\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/.test(intro + region + interests)) {
      return json({ error: "Please don't include addresses, emails or phone numbers in your profile. You'll share those privately with a matched pen pal." }, 400, cors);
    }
    const wants = ["letters", "gifts", "both"].includes(body.wants) ? body.wants : "letters";
    // Every new or edited profile waits for the team's approval.
    await env.DB.prepare(
      `INSERT INTO penpal_profiles (user_id, name, avatar, intro, interests, region, wants, status, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', datetime('now'))
       ON CONFLICT(user_id) DO UPDATE SET name = excluded.name, avatar = excluded.avatar, intro = excluded.intro, interests = excluded.interests,
         region = excluded.region, wants = excluded.wants, status = CASE WHEN penpal_profiles.status = 'hidden' THEN 'hidden' ELSE 'pending' END, updated_at = datetime('now')`
    ).bind(user.id, user.name, user.avatar, intro, interests, region, wants).run();
    return json({ ok: true, status: "pending" }, 200, cors);
  }

  if (p === "/penpals/profile/delete" && m === "POST") {
    if (!user) return needUser();
    await env.DB.prepare("DELETE FROM penpal_profiles WHERE user_id = ?").bind(user.id).run();
    await env.DB.prepare("UPDATE penpal_links SET status = 'ended', updated_at = datetime('now') WHERE (from_id = ? OR to_id = ?) AND status IN ('pending','accepted')").bind(user.id, user.id).run();
    return json({ ok: true }, 200, cors);
  }

  if (p === "/penpals/directory" && m === "GET") {
    if (!user) return needUser();
    const me = await env.DB.prepare("SELECT status FROM penpal_profiles WHERE user_id = ?").bind(user.id).first();
    if (!me || me.status !== "approved") return json({ error: "Your profile needs to be approved before you can see other members.", members: [] }, 403, cors);
    const { results } = await env.DB.prepare(
      `SELECT p.user_id, p.name, p.avatar, p.intro, p.interests, p.region, p.wants,
         (SELECT title_name FROM scholar_profiles sp WHERE sp.user_id = p.user_id AND sp.public = 1) AS title
       FROM penpal_profiles p
       WHERE p.status = 'approved' AND p.user_id != ?1
         AND p.user_id NOT IN (SELECT blocked_id FROM blocks WHERE user_id = ?1)
         AND p.user_id NOT IN (SELECT user_id FROM blocks WHERE blocked_id = ?1)
         AND p.user_id NOT IN (SELECT to_id FROM penpal_links WHERE from_id = ?1 AND status IN ('pending','accepted'))
         AND p.user_id NOT IN (SELECT from_id FROM penpal_links WHERE to_id = ?1 AND status IN ('pending','accepted'))
       ORDER BY p.updated_at DESC LIMIT 100`
    ).bind(user.id).all();
    const members = [];
    for (const { user_id, ...r } of results) members.push({ ...r, ref: await refFor(user_id, env) });
    return json({ members }, 200, cors);
  }

  if (p === "/penpals/request" && m === "POST") {
    if (!user) return needUser();
    const to = await fromRef(body.to, env);
    if (!to) return json({ error: "That member isn't available." }, 400, cors);
    const msg = clean(body.message, COMMUNITY_LIMITS.requestMsg);
    if (containsBlocked(msg)) return json({ error: "This includes language we don't allow here." }, 422, cors);
    const both = await env.DB.prepare("SELECT COUNT(*) AS n FROM penpal_profiles WHERE status = 'approved' AND user_id IN (?, ?)").bind(user.id, to).first();
    if (both.n < 2 || to === user.id) return json({ error: "That member isn't available." }, 400, cors);
    if (await isBlocked(env, to, user.id) || await isBlocked(env, user.id, to)) return json({ error: "That member isn't available." }, 400, cors);
    const open = await env.DB.prepare("SELECT COUNT(*) AS n FROM penpal_links WHERE from_id = ? AND status = 'pending'").bind(user.id).first();
    if (open.n >= 5) return json({ error: "You have 5 requests waiting already. Please wait for replies first." }, 429, cors);
    const existing = await env.DB.prepare("SELECT 1 AS y FROM penpal_links WHERE ((from_id = ?1 AND to_id = ?2) OR (from_id = ?2 AND to_id = ?1)) AND status IN ('pending','accepted')").bind(user.id, to).first();
    if (existing) return json({ error: "You already have a request or match with this member." }, 400, cors);
    await env.DB.prepare("INSERT INTO penpal_links (from_id, to_id, message) VALUES (?, ?, ?)").bind(user.id, to, msg).run();
    return json({ ok: true }, 200, cors);
  }

  if (p === "/penpals/respond" && m === "POST") {
    if (!user) return needUser();
    const res = await env.DB.prepare("UPDATE penpal_links SET status = ?, updated_at = datetime('now') WHERE id = ? AND to_id = ? AND status = 'pending'")
      .bind(body.accept ? "accepted" : "declined", Number(body.id), user.id).run();
    if (!res.meta || !res.meta.changes) return json({ error: "That request isn't available." }, 404, cors);
    return json({ ok: true }, 200, cors);
  }

  if (p === "/penpals/end" && m === "POST") {
    if (!user) return needUser();
    const link = await env.DB.prepare("SELECT from_id, to_id FROM penpal_links WHERE id = ? AND (from_id = ? OR to_id = ?)").bind(Number(body.id), user.id, user.id).first();
    if (!link) return json({ error: "Not found." }, 404, cors);
    await env.DB.prepare("UPDATE penpal_links SET status = 'ended', updated_at = datetime('now') WHERE id = ?").bind(Number(body.id)).run();
    const other = link.from_id === user.id ? link.to_id : link.from_id;
    if (body.block) await env.DB.prepare("INSERT OR IGNORE INTO blocks (user_id, blocked_id) VALUES (?, ?)").bind(user.id, other).run();
    if (body.report) await env.DB.prepare("INSERT INTO member_reports (reporter_id, target_id, context, reason) VALUES (?, ?, 'pen pal', ?)").bind(user.id, other, clean(body.reason, 300)).run();
    return json({ ok: true }, 200, cors);
  }

  // Block or report the person behind a note, offer or pen pal request (identified by an opaque reference).
  if (p === "/members/block" && m === "POST") {
    if (!user) return needUser();
    const target = await fromRef(body.ref, env);
    if (!target || target === user.id) return json({ error: "Not found." }, 400, cors);
    await env.DB.prepare("INSERT OR IGNORE INTO blocks (user_id, blocked_id) VALUES (?, ?)").bind(user.id, target).run();
    await env.DB.prepare("UPDATE penpal_links SET status = 'ended' WHERE ((from_id = ?1 AND to_id = ?2) OR (from_id = ?2 AND to_id = ?1)) AND status IN ('pending','accepted')").bind(user.id, target).run();
    if (body.report) await env.DB.prepare("INSERT INTO member_reports (reporter_id, target_id, context, reason) VALUES (?, ?, ?, ?)").bind(user.id, target, clean(body.context, 60), clean(body.reason, 300)).run();
    return json({ ok: true }, 200, cors);
  }

  return null;
}

// Sealed references: let the page say "block this person" without revealing who they are.
/* =====================================================================
   YOUR ILLUMINATED BIBLE: private study notes, synced between a member's devices.
   Only the member can read their items, except a note they explicitly mark as shared.
   ===================================================================== */
const BIBLE_KINDS = ["hl", "bm", "note", "nb", "col"];
async function bibleNotes(p, m, request, env, cors, url) {
  if (p === "/bible/shared" && m === "GET") {
    const id = String(url.searchParams.get("id") || "").slice(0, 120);
    const row = await env.DB.prepare("SELECT user_id, data FROM bible_items WHERE id = ? AND shared = 1 AND deleted = 0 AND kind = 'note' LIMIT 1").bind(id).first();
    if (!row) return json({ note: null }, 200, cors);
    let d = {}; try { d = JSON.parse(row.data); } catch (e) { return json({ note: null }, 200, cors); }
    const prof = await env.DB.prepare("SELECT name FROM scholar_profiles WHERE user_id = ?").bind(row.user_id).first();
    return json({ note: { ref: d.ref, tr: d.tr, text: d.text, name: (prof && prof.name) || "" } }, 200, cors);
  }
  const user = await readSession(request, env);
  if (!user) return json({ error: "Please sign in with Discord first." }, 401, cors);
  if (m === "POST" && !originAllowed(request.headers.get("Origin") || "", env)) return json({ error: "Not allowed." }, 403, cors);
  const uid = String(user.id);
  const body = m === "POST" ? await request.json().catch(() => ({})) : {};

  if (p === "/bible/sync" && m === "POST") {
    const incoming = Array.isArray(body.items) ? body.items.slice(0, 400) : [];
    const total = await env.DB.prepare("SELECT COUNT(*) AS n FROM bible_items WHERE user_id = ?").bind(uid).first();
    let room = 20000 - total.n;
    for (const it of incoming) {
      const id = String((it && it.id) || "");
      if (!/^(hl|bm|note|nb|col)[-:][\w:.-]{1,110}$/.test(id)) continue;
      const up = Math.min(Number(it.up) || 0, Date.now() + 60000);
      if (!up) continue;
      const prev = await env.DB.prepare("SELECT updated_at FROM bible_items WHERE user_id = ? AND id = ?").bind(uid, id).first();
      if (prev && prev.updated_at >= up) continue;          // the copy already here is newer
      if (it.deleted) {
        await env.DB.prepare(
          `INSERT INTO bible_items (user_id, id, kind, data, updated_at, deleted, shared) VALUES (?, ?, ?, NULL, ?, 1, 0)
           ON CONFLICT (user_id, id) DO UPDATE SET data = NULL, updated_at = excluded.updated_at, deleted = 1, shared = 0`
        ).bind(uid, id, id.split(/[-:]/)[0], up).run();
        continue;
      }
      const d = it.data && typeof it.data === "object" ? it.data : null;
      if (!d || !BIBLE_KINDS.includes(d.k)) continue;
      const text = JSON.stringify(d);
      if (text.length > 70000) continue;
      if (!prev && room-- <= 0) continue;
      await env.DB.prepare(
        `INSERT INTO bible_items (user_id, id, kind, data, updated_at, deleted, shared) VALUES (?, ?, ?, ?, ?, 0, ?)
         ON CONFLICT (user_id, id) DO UPDATE SET kind = excluded.kind, data = excluded.data, updated_at = excluded.updated_at, deleted = 0, shared = excluded.shared`
      ).bind(uid, id, d.k, text, up, d.k === "note" && d.shared ? 1 : 0).run();
    }
    const { results } = await env.DB.prepare("SELECT id, data, updated_at, deleted FROM bible_items WHERE user_id = ?").bind(uid).all();
    const items = results.map((r) => (r.deleted ? { id: r.id, deleted: true, up: r.updated_at } : { id: r.id, up: r.updated_at, data: JSON.parse(r.data) }));
    return json({ items }, 200, cors);
  }

  if (p === "/bible/delete-all" && m === "POST") {
    await env.DB.prepare("DELETE FROM bible_items WHERE user_id = ?").bind(uid).run();
    return json({ ok: true }, 200, cors);
  }
  return null;
}

/* =====================================================================
   SANCTUARY JOURNAL: points, badges and Scholarium certificates
   The website records activities in the visitor's browser; signed-in members send them here.
   The server checks every one against the rules in data/activities.js, refuses duplicates and
   anything over its limits, verifies the important ones itself, and keeps the official tally.
   ===================================================================== */
let RULES = null, RULES_AT = 0;
async function loadRules(env) {
  if (RULES && Date.now() - RULES_AT < 10 * 60 * 1000) return RULES;
  if (!env.RULES_URL) return null;
  try {
    const text = await (await fetch(env.RULES_URL, { cf: { cacheTtl: 300 } })).text();
    const jsonText = text.split("/*@ACTIVITIES-JSON*/")[1].split("/*@END*/")[0];
    RULES = JSON.parse(jsonText); RULES_AT = Date.now();
  } catch (e) { /* keep the last good copy */ }
  return RULES;
}
const ruleFor = (R, id) => {
  const a = R.activities.find((x) => x.id === id);
  if (a) return a;
  const f = R.families.find((x) => id.startsWith(x.prefix));
  return f ? Object.assign({ family: true }, f) : null;
};
const dayOf = (iso) => {
  const t = Date.parse(iso || ""), now = Date.now();
  const d = isNaN(t) || t > now + 60000 || t < now - 400 * 864e5 ? new Date() : new Date(t);
  return d.toISOString().slice(0, 10);
};

async function progressState(env, uid) {
  const done = {}, counts = {}, awards = {}, certs = {};
  (await env.DB.prepare("SELECT activity_id, first_at, count FROM progress_done WHERE user_id = ?").bind(uid).all()).results
    .forEach((r) => { done[r.activity_id] = r.first_at; counts[r.activity_id] = r.count; });
  (await env.DB.prepare("SELECT achievement_id, awarded_at FROM achievement_awards WHERE user_id = ?").bind(uid).all()).results
    .forEach((r) => { awards[r.achievement_id] = r.awarded_at; });
  (await env.DB.prepare("SELECT number, course_id, name FROM certificates WHERE user_id = ?").bind(uid).all()).results
    .forEach((r) => { certs[r.course_id] = { number: r.number, name: r.name, verified: true }; });
  const pts = await env.DB.prepare("SELECT COALESCE(SUM(points), 0) AS n FROM point_ledger WHERE user_id = ?").bind(uid).first();
  const prof = await env.DB.prepare("SELECT name, title, public, courses FROM scholar_profiles WHERE user_id = ?").bind(uid).first();
  let courses = null; try { courses = prof && prof.courses ? JSON.parse(prof.courses) : null; } catch (e) { courses = null; }
  return { done, counts, awards, certs, points: pts.n, courses,
    profile: prof ? { name: prof.name || "", title: prof.title || "", public: !!prof.public } : null };
}

/* Events the server can check for itself, rather than taking the browser's word for it. */
async function verifiedEvent(env, uid, id, day, done) {
  if (id === "lily-post-joined")
    return !!(await env.DB.prepare("SELECT 1 FROM penpal_profiles WHERE user_id = ? AND status = 'approved'").bind(uid).first());
  if (id === "pen-pal-matched")
    return !!(await env.DB.prepare("SELECT 1 FROM penpal_links WHERE (from_id = ?1 OR to_id = ?1) AND status IN ('accepted','ended')").bind(uid).first());
  if (id === "comment") {
    const made = await env.DB.prepare("SELECT COUNT(*) AS n FROM comments WHERE user_id = ? AND substr(created_at, 1, 10) = ?").bind(uid, day).first();
    const counted = await env.DB.prepare("SELECT count FROM progress_daily WHERE user_id = ? AND activity_id = 'comment' AND day = ?").bind(uid, day).first();
    return made.n > (counted ? counted.count : 0);
  }
  if (id.startsWith("course:")) {
    // A course only counts once its final assessment has been recorded.
    const c = id.slice(7);
    return Object.keys(done).some((k) => k.startsWith(`assessment:${c}:`));
  }
  return true;
}

/* Combine two saved copies of course progress (e.g. two devices): nothing finished is ever lost. */
function mergeCourses(a, b) {
  const out = Object.assign({}, a || {});
  Object.entries(b || {}).forEach(([id, v]) => {
    const u = out[id];
    if (!v || typeof v !== "object") return;
    if (!u) { out[id] = v; return; }
    const early = (x, y) => (!x ? y : !y ? x : x < y ? x : y);
    const hunt = Object.assign({}, u.hunt || {});
    Object.entries(v.hunt || {}).forEach(([k, n]) => { hunt[k] = Math.max(hunt[k] || 0, Number(n) || 0); });
    const modules = Object.assign({}, v.modules || {});
    Object.entries(u.modules || {}).forEach(([k, t]) => { modules[k] = early(t, modules[k]); });
    const done = [u.completed, v.completed].filter(Boolean).sort((x, y) => (x.at < y.at ? -1 : 1))[0] || null;
    out[id] = { started: early(u.started, v.started), modules, completed: done, hunt };
  });
  return out;
}

async function progress(p, m, request, env, cors, url) {
  if (p === "/progress/verify" && m === "GET") {
    const no = String(url.searchParams.get("no") || "").trim().toUpperCase().slice(0, 40);
    const row = no ? await env.DB.prepare("SELECT number, name, course_title, badge, issued_at FROM certificates WHERE number = ?").bind(no).first() : null;
    return json({ certificate: row || null }, 200, cors);
  }

  const user = await readSession(request, env);
  if (!user) return json({ error: "Please sign in with Discord first." }, 401, cors);
  if (m === "POST" && !originAllowed(request.headers.get("Origin") || "", env)) return json({ error: "Not allowed." }, 403, cors);
  const R = await loadRules(env);
  if (!R) return json({ error: "The Journal service isn't set up yet (RULES_URL)." }, 503, cors);
  const body = m === "POST" ? await request.json().catch(() => ({})) : {};
  const uid = String(user.id);

  if (p === "/progress/sync" && m === "POST") {
    const st = await progressState(env, uid);
    const events = Array.isArray(body.events) ? body.events.slice(0, 500) : [];
    for (const ev of events) {
      const id = String((ev && ev.id) || "");
      if (!/^[a-z0-9:-]{1,120}$/.test(id)) continue;
      const r = ruleFor(R, id);
      if (!r) continue;
      const day = dayOf(ev.at);
      if (r.family) {
        if (st.done[id]) continue;
        if (Object.keys(st.done).filter((k) => k.startsWith(r.prefix)).length >= r.max) continue;
      } else if (r.perDay) {
        const row = await env.DB.prepare("SELECT count FROM progress_daily WHERE user_id = ? AND activity_id = ? AND day = ?").bind(uid, id, day).first();
        if (row && row.count >= r.perDay) continue;
      } else if (st.done[id]) continue;
      if (!(await verifiedEvent(env, uid, id, day, st.done))) continue;

      const at = new Date().toISOString();
      if (r.perDay) await env.DB.prepare(
        "INSERT INTO progress_daily (user_id, activity_id, day, count) VALUES (?, ?, ?, 1) ON CONFLICT (user_id, activity_id, day) DO UPDATE SET count = count + 1"
      ).bind(uid, id, day).run();
      await env.DB.prepare(
        "INSERT INTO progress_done (user_id, activity_id, first_at, count) VALUES (?, ?, ?, 1) ON CONFLICT (user_id, activity_id) DO UPDATE SET count = count + 1"
      ).bind(uid, id, at).run();
      await env.DB.prepare("INSERT INTO point_ledger (user_id, source, points) VALUES (?, ?, ?)").bind(uid, id, r.points).run();
      if (!st.done[id]) st.done[id] = at;
      st.counts[id] = (st.counts[id] || 0) + 1;
    }
    // Badges: awarded once, kept forever.
    const count = (k) => (k.endsWith(":") ? Object.keys(st.done).filter((x) => x.startsWith(k)).length : st.counts[k] || 0);
    for (const a of R.achievements) {
      if (st.awards[a.id]) continue;
      const ok = a.rule.count ? count(a.rule.count) >= a.rule.min : (a.rule.all || []).every((i) => st.done[i]);
      if (!ok) continue;
      await env.DB.prepare("INSERT OR IGNORE INTO achievement_awards (user_id, achievement_id) VALUES (?, ?)").bind(uid, a.id).run();
      if (a.points) await env.DB.prepare("INSERT INTO point_ledger (user_id, source, points) VALUES (?, ?, ?)").bind(uid, "award:" + a.id, a.points).run();
    }
    // Profile: name, chosen title (must be a badge they've earned), and whether others can see it.
    const awards = (await progressState(env, uid)).awards;
    const pf = body.profile || {};
    const title = awards[pf.title] ? String(pf.title) : "";
    const titleName = title ? (R.achievements.find((a) => a.id === title) || {}).name || "" : "";
    let courses = null;
    try {
      const prev = await env.DB.prepare("SELECT courses FROM scholar_profiles WHERE user_id = ?").bind(uid).first();
      const merged = mergeCourses(prev && prev.courses ? JSON.parse(prev.courses) : {}, body.courses && typeof body.courses === "object" ? body.courses : {});
      const s = JSON.stringify(merged); if (s.length < 30000) courses = s;
    } catch (e) { courses = null; }
    await env.DB.prepare(
      `INSERT INTO scholar_profiles (user_id, name, title, title_name, public, courses, updated_at) VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
       ON CONFLICT (user_id) DO UPDATE SET name = excluded.name, title = excluded.title, title_name = excluded.title_name,
         public = excluded.public, courses = COALESCE(excluded.courses, scholar_profiles.courses), updated_at = excluded.updated_at`
    ).bind(uid, clean(pf.name, 40), title, titleName, pf.public ? 1 : 0, courses).run();
    return json(await progressState(env, uid), 200, cors);
  }

  if (p === "/progress/certificate" && m === "POST") {
    const course = String(body.course || "").slice(0, 80);
    const st = await progressState(env, uid);
    if (!st.done["course:" + course]) return json({ error: "That course isn't complete yet." }, 400, cors);
    const ach = R.achievements.find((a) => a.course === course);
    if (!ach) return json({ error: "Unknown course." }, 400, cors);
    const name = clean(body.name, 60) || user.name || "A Friend of the Sanctuary";
    const existing = await env.DB.prepare("SELECT number FROM certificates WHERE user_id = ? AND course_id = ?").bind(uid, course).first();
    if (existing) {
      await env.DB.prepare("UPDATE certificates SET name = ? WHERE number = ?").bind(name, existing.number).run();
      return json({ number: existing.number }, 200, cors);
    }
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    for (let tries = 0; tries < 5; tries++) {
      const rnd = crypto.getRandomValues(new Uint8Array(6));
      const number = `VS-${ach.courseNumber || "000"}-${[...rnd].map((x) => chars[x % chars.length]).join("")}`;
      const r = await env.DB.prepare("INSERT OR IGNORE INTO certificates (number, user_id, name, course_id, course_title, badge) VALUES (?, ?, ?, ?, ?, ?)")
        .bind(number, uid, name, course, ach.courseTitle || course, ach.name).run();
      if (r.meta && r.meta.changes) return json({ number }, 200, cors);
    }
    return json({ error: "Please try again." }, 500, cors);
  }

  if (p === "/progress" && m === "GET") return json(await progressState(env, uid), 200, cors);
  return null;
}

async function refFor(id, env) { return sign({ u: String(id) }, env.SESSION_SECRET); }
async function fromRef(ref, env) { const v = await verify(String(ref || ""), env.SESSION_SECRET); return v && v.u ? String(v.u) : null; }

async function isBlocked(env, ownerId, otherId) {
  return !!(await env.DB.prepare("SELECT 1 AS y FROM blocks WHERE user_id = ? AND blocked_id = ?").bind(ownerId, otherId).first());
}
function discordProfile(id) {
  return { discord: `https://discord.com/users/${id}` };
}

/* ---------- Community moderation (admin.html) ---------- */
async function communityAdmin(p, m, request, env, cors) {
  if (p === "/admin/community/queue" && m === "GET") {
    const prayers = (await env.DB.prepare("SELECT id, name, show_name, title, body, flag_reason, reports, created_at, status FROM prayers WHERE status = 'held' ORDER BY created_at ASC").all()).results;
    const notes = (await env.DB.prepare("SELECT n.id, n.name, n.body, n.flag_reason, n.created_at, p.title FROM prayer_notes n LEFT JOIN prayers p ON p.id = n.prayer_id WHERE n.status = 'held' ORDER BY n.created_at ASC").all()).results;
    const profiles = (await env.DB.prepare("SELECT user_id AS id, name, intro, interests, region, wants, updated_at AS created_at FROM penpal_profiles WHERE status = 'pending' ORDER BY updated_at ASC").all()).results;
    const reports = (await env.DB.prepare(
      `SELECT r.id, r.context, r.reason, r.created_at, r.target_id, COALESCE(pp.name, '(no profile)') AS target_name,
              (SELECT COUNT(*) FROM member_reports x WHERE x.target_id = r.target_id) AS total
       FROM member_reports r LEFT JOIN penpal_profiles pp ON pp.user_id = r.target_id WHERE r.resolved = 0 ORDER BY r.created_at ASC`
    ).all()).results;
    return json({ prayers, notes, profiles, reports }, 200, cors);
  }
  if (p === "/admin/community/act" && m === "POST") {
    const { type, ids, action } = await request.json();
    const list = (Array.isArray(ids) ? ids : []).slice(0, 300);
    if (!list.length) return json({ error: "Nothing selected." }, 400, cors);
    const marks = list.map(() => "?").join(",");
    const table = { prayer: "prayers", note: "prayer_notes", profile: "penpal_profiles", report: "member_reports" }[type];
    const key = type === "profile" ? "user_id" : "id";
    if (!table) return json({ error: "Unknown type." }, 400, cors);
    if (action === "approve") await env.DB.prepare(`UPDATE ${table} SET status = 'approved'${type === "prayer" ? ", reports = 0, flag_reason = NULL" : ""} WHERE ${key} IN (${marks})`).bind(...list).run();
    else if (action === "hide") await env.DB.prepare(`UPDATE ${table} SET status = 'hidden' WHERE ${key} IN (${marks})`).bind(...list).run();
    else if (action === "delete") await env.DB.prepare(`DELETE FROM ${table} WHERE ${key} IN (${marks})`).bind(...list).run();
    else if (action === "resolve" && type === "report") await env.DB.prepare(`UPDATE member_reports SET resolved = 1 WHERE id IN (${marks})`).bind(...list).run();
    else if (action === "suspend" && type === "report") {
      // Hide the reported members' pen pal profiles and end their matches.
      const targets = (await env.DB.prepare(`SELECT DISTINCT target_id FROM member_reports WHERE id IN (${marks})`).bind(...list).all()).results.map((r) => r.target_id);
      for (const t of targets) {
        await env.DB.prepare("UPDATE penpal_profiles SET status = 'hidden' WHERE user_id = ?").bind(t).run();
        await env.DB.prepare("UPDATE penpal_links SET status = 'ended' WHERE (from_id = ?1 OR to_id = ?1) AND status IN ('pending','accepted')").bind(t).run();
      }
      await env.DB.prepare(`UPDATE member_reports SET resolved = 1 WHERE id IN (${marks})`).bind(...list).run();
    } else return json({ error: "Unknown action." }, 400, cors);
    return json({ ok: true, count: list.length }, 200, cors);
  }
  return null;
}


/* ---------- Moderation ---------- */

function isAdmin(request, env) {
  const token = (request.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
  return !!env.ADMIN_TOKEN && token.length > 0 && timingSafeEqual(token, env.ADMIN_TOKEN);
}

async function adminList(env, cors, where, order) {
  const { results } = await env.DB.prepare(
    `SELECT c.id, c.page, c.parent_id, c.name, c.user_id, c.body, c.status, c.reports, c.likes, c.is_team, c.flag_reason, c.created_at,
            (SELECT group_concat(r.reason, ' | ') FROM reports r WHERE r.comment_id = c.id AND r.reason != '') AS report_reasons
     FROM comments c WHERE ${where} ORDER BY c.created_at ${order} LIMIT 300`
  ).all();
  return json({ comments: results }, 200, cors);
}

async function bulk(request, env, cors) {
  const { ids, action } = await request.json();
  const list = (Array.isArray(ids) ? ids : []).map(Number).filter(Boolean).slice(0, 300);
  if (!list.length) return json({ error: "Nothing selected." }, 400, cors);
  const marks = list.map(() => "?").join(",");
  if (action === "approve") {
    await env.DB.prepare(`UPDATE comments SET status = 'approved', reports = 0, flag_reason = NULL WHERE id IN (${marks})`).bind(...list).run();
  } else if (action === "hide") {
    await env.DB.prepare(`UPDATE comments SET status = 'hidden' WHERE id IN (${marks})`).bind(...list).run();
  } else if (action === "delete") {
    await env.DB.prepare(`DELETE FROM comments WHERE id IN (${marks}) OR parent_id IN (${marks})`).bind(...list, ...list).run();
    await env.DB.prepare(`DELETE FROM reports WHERE comment_id IN (${marks})`).bind(...list).run();
    await env.DB.prepare(`DELETE FROM likes WHERE comment_id IN (${marks})`).bind(...list).run();
  } else {
    return json({ error: "Unknown action." }, 400, cors);
  }
  return json({ ok: true, count: list.length }, 200, cors);
}

/* ---------- Filters ---------- */

function normalise(text) {
  return String(text).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/0/g, "o").replace(/[1!|]/g, "i").replace(/3/g, "e").replace(/[4@]/g, "a")
    .replace(/[5$]/g, "s").replace(/7/g, "t").replace(/8/g, "b")
    .replace(/(\w)[._\-]+(?=\w)/g, "$1"); // f.u.c.k → fuck
}
function containsBlocked(text) {
  const t = normalise(text);
  return BLOCKED.some((re) => re.test(t));
}

const AI_LABELS = {
  S1: "violence or threats", S2: "crime", S3: "sexual crime", S4: "child safety", S5: "defamation",
  S6: "risky advice", S7: "privacy (personal details)", S8: "copyright", S9: "weapons", S10: "hate",
  S11: "self-harm (respond with care)", S12: "sexual content", S13: "elections", S14: "misuse"
};
const label = (codes) => [].concat(codes || []).map((c) => AI_LABELS[String(c).trim()] || String(c).trim()).filter(Boolean).join(", ");

// Optional AI moderation with Llama Guard on Workers AI. Never blocks posting if AI is unavailable.
async function aiCheck(text, env) {
  if (!env.AI) return { flagged: false };
  try {
    const out = await env.AI.run("@cf/meta/llama-guard-3-8b", { messages: [{ role: "user", content: text }] });
    const r = out && out.response;
    if (r && typeof r === "object") return { flagged: r.safe === false, reason: "AI check: " + (label(r.categories) || "flagged") };
    if (typeof r === "string" && /unsafe/i.test(r)) return { flagged: true, reason: "AI check: " + (label(r.replace(/unsafe/i, "").split(/[\s,]+/)) || "flagged") };
  } catch (e) { /* fall through */ }
  return { flagged: false };
}

/* ---------- Helpers ---------- */

function allowedList(env) {
  return (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim().replace(/\/$/, "")).filter(Boolean);
}
function originAllowed(origin, env) {
  const list = allowedList(env);
  return list.length === 0 || list.includes(origin);
}
function corsHeaders(origin, env) {
  const list = allowedList(env);
  const allow = list.length === 0 ? "*" : (list.includes(origin) ? origin : list[0]);
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Session",
    "Vary": "Origin"
  };
}
function json(obj, status, headers) {
  return new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json; charset=utf-8", ...headers } });
}
function clean(value, max) {
  return String(value == null ? "" : value).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, max);
}
function cleanPage(value) {
  const v = String(value || "").trim();
  return /^[a-z0-9:_\-\/]{1,120}$/i.test(v) ? v : "";
}
async function hashIp(request, env) {
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const data = new TextEncoder().encode((env.IP_SALT || "") + "|" + ip);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 32);
}
function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}
async function verifyTurnstile(token, request, env) {
  if (!token) return false;
  const form = new FormData();
  form.append("secret", env.TURNSTILE_SECRET);
  form.append("response", token);
  form.append("remoteip", request.headers.get("CF-Connecting-IP") || "");
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: form });
  const out = await res.json();
  return !!out.success;
}

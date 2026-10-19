# Turning on comments, the Prayer Wall and pen pals (about 30 minutes, no coding)

Comments run on **Cloudflare's free plan**. Everything below happens in Cloudflare's website.
Cloudflare sometimes renames menu items. If a name doesn't match exactly, look for the closest one.

What you'll need open:
- `comments-service/worker.js` (the comment service code)
- `comments-service/schema.sql` (sets up the database)
- a password generator (your browser's or a password manager's), for three long random passwords

---

## 1. Create a free Cloudflare account
Go to **dash.cloudflare.com** and sign up. You don't need to add a website or domain.

## 2. Create the database
1. In the left menu, open **Storage & databases → D1 SQL database**.
2. Click **Create**, name it `sanctuary-comments`, and create it.
3. Open the new database and go to its **Console** tab.
4. Open `schema.sql`, copy **everything**, paste it into the console, and click **Execute**.

## 3. Create the comment service (a "Worker")
1. In the left menu, open **Workers & Pages** and click **Create**.
2. Choose **Start with Hello World** (or "Create Worker"), name it `sanctuary-comments`, and click **Deploy**.
3. Click **Edit code**. Delete all the sample code, paste in **all** of `worker.js`, and click **Deploy**.

## 4. Connect the database and the AI checker
In your Worker, go to **Settings → Bindings → Add**:
1. **D1 database**: variable name `DB`, database `sanctuary-comments`.
2. **Workers AI**: variable name `AI`. This is the free AI check that holds hateful or threatening comments for you. Optional, but recommended.

## 5. Add the settings
In your Worker, go to **Settings → Variables and Secrets → Add**:

| Name | Type | Value |
|---|---|---|
| `ADMIN_TOKEN` | Secret | a long random password. **Save it.** You'll type it on the moderation page. |
| `IP_SALT` | Secret | another long random password (you never need it again) |
| `SESSION_SECRET` | Secret | another long random password (you never need it again) |
| `ALLOWED_ORIGINS` | Text | `https://YOUR-USERNAME.github.io` (no slash at the end) |

Click **Deploy** if Cloudflare asks.

## 6. Connect your site
1. On your Worker's overview page, copy its address. It looks like `https://sanctuary-comments.YOUR-NAME.workers.dev`.
2. In your site files, open `js/config.js` and paste it into `commentsApi`:
   ```js
   commentsApi: "https://sanctuary-comments.YOUR-NAME.workers.dev",
   ```
3. Upload the changed `js/config.js` to GitHub.

Open any Library article on your live site and post a test comment.

## 7. Moderating
Go to `https://YOUR-USERNAME.github.io/violet-sanctuary/admin.html` and enter your `ADMIN_TOKEN`.
- **Needs review**: comments the AI held, or that two or more visitors reported. Tick several at once, then **Approve**, **Hide** or **Delete**.
- **Recent**: everything else, in case you want to hide something that slipped through.
- While signed in there, comments you post on the site in the **same browser tab** carry a gold **Sanctuary team** badge.

How the protection works:
1. **Word filter**: slurs and profanity are refused outright, even when disguised (`sh1t`, `f.u.c.k`). Words that appear in Scripture and prayer (*hell, damn, ass, whore, bastard*) are allowed. To edit the list, change `BLOCKED` near the top of `worker.js` and deploy again.
2. **AI check**: if you added the `AI` binding, hateful, threatening, sexual or self-harm content is held for your review.
3. **Reports**: anyone can report a comment. After 2 reports from different people, it hides until you review it.
4. **Spam limits**: a hidden trap catches bots, and each visitor can post at most 4 comments every 10 minutes.

To make every comment wait for your approval instead, add a Text variable `AUTO_APPROVE` = `false`.

---

## 8. Sign in with Discord (optional)
1. Go to **discord.com/developers/applications** and click **New Application**. Name it "The Violet Sanctuary".
2. Open **OAuth2**:
   - Copy the **Client ID**.
   - Click **Reset Secret** and copy the **Client Secret**. Keep it private.
   - Under **Redirects**, add:
     `https://sanctuary-comments.YOUR-NAME.workers.dev/auth/discord/callback`
     and click **Save**.
3. Back in your Cloudflare Worker, under **Variables and Secrets**, add:
   - `DISCORD_CLIENT_ID` (Text): the Client ID
   - `DISCORD_CLIENT_SECRET` (Secret): the Client Secret
4. Deploy. A **Sign in with Discord** button now appears above comments.

Signed-in people get their Discord name and picture with a ✓, can delete their own comments, and see a list of replies to their comments. The site only asks Discord for their name and avatar, never their email, messages or servers.

To allow comments **only** from people signed in with Discord, add a Text variable `REQUIRE_SIGN_IN` = `true`.

---

## 9. Prayer Wall and Lily Post pen pals
These need **Sign in with Discord** (section 8), because members must be able to accept help and contact each other.

**Already set up comments before these existed?** Open your D1 database → **Console**, paste the whole of `schema.sql` again and run it. It only adds the new tables. Your comments stay. Then paste the new `worker.js` into your Worker and **Deploy**.

How the safety works:
- **Prayer requests** go up straight away, unless they contain blocked words (refused) or mention self-harm or danger. Those are held for you, and the person sees crisis resources. A report mentioning danger hides a request immediately.
- **Offers of help** need the helper to confirm they're 18+. Neither person's Discord profile is shown until the requester **accepts**.
- **Lily Post profiles** always wait for your approval, including after every edit. Profiles can't contain addresses, emails or phone numbers. Members can end a match, block or report at any time.

To moderate, open `admin.html` → **Prayer wall & pen pals**. You'll see held prayers, held notes, profiles waiting for approval, and member reports. Tick and **Approve**, **Hide**, **Delete**, or for reports **Resolve** / **Suspend** the member.

**Please read before opening the Lily Post:** you're introducing strangers. Keep it 18+, suggest members use a PO box rather than a home address, and act quickly on reports.

---

## 10. Donations (Sponsor a Kindness)
All three ways are optional. Fill in what you use in `js/config.js` → `donations`. Blank ones are hidden.

**Card: Stripe (now)**
1. Create a Stripe account at **stripe.com**. As an individual, choose **Individual / sole proprietor**.
2. Go to **Payment Links → New**. Choose **Customers choose what to pay** and name it "Sponsor a Kindness".
3. Under **Advanced options → Add custom fields**, add a text field: *"Who would you like this kindness to reach?"* (optional).
4. Create the link and paste it into `cardUrl`. Fees are about 2.9% + 30¢ per gift.

**Card: Zeffy (later)**
Zeffy is free for donors and for you, but it's only for registered nonprofits. Once you have your EIN and 501(c)(3) status, create a donation form on **zeffy.com** and replace `cardUrl` with its link. Then update `legalNote` to say gifts are tax-deductible.

**Cash App**
Use a **Cash App for Business** account (personal accounts aren't meant for receiving donations, and it looks more trustworthy). Put your $cashtag in `cashAppTag`, e.g. `"$VioletSanctuary"`.

**Crypto**
1. Make a **separate wallet** just for the sanctuary, never your personal one.
2. Copy each receiving address and paste it into the matching `crypto` entry. Make sure `network` is exactly right (USDC on Ethereum is different from USDC on Solana or Base). Remove entries you don't use.
3. Test with a tiny amount first.

**Good practice**
- Keep gifts in a separate bank account and write a short monthly note about what they became (cards sent, baskets delivered). The Sponsor page has a spot for it.
- Until you're a registered nonprofit, gifts aren't tax-deductible. The page already says so. If you collect a lot, a quick talk with an accountant about reporting is worth it. *(I'm not a lawyer or accountant.)*

---

## 11. Sanctuary Journal, badges and certificates
This lets signed-in members keep their Journal in their account, makes certificates verifiable, and shows chosen titles on comments and the Lily Post.

1. Run `schema.sql` again in your D1 **Console** (it only adds the new tables), and paste the latest `worker.js` into your Worker.
2. In the Worker's **Variables and Secrets**, add a Text variable:
   `RULES_URL` = `https://YOUR-USERNAME.github.io/violet-sanctuary/data/activities.js`
3. **Deploy.**

The server reads point values and badge rules from that file, so editing `data/activities.js` and publishing your site updates both. Every reward is re-checked on the server: duplicates are refused, daily limits are enforced, and joining the Lily Post, pen-pal matches, comments and course completions are confirmed against the database.

---

## 12. Your Illuminated Bible (private notes)
Nothing extra to set up: once sign-in (section 8) and the latest `schema.sql` and `worker.js` are in place, members' Bible highlights, notes and notebooks are saved privately to their accounts and follow them between devices. Only the member can read them. A note they choose to share gets a link anyone can open, until they unshare it. "Delete everything" in *Your data* erases their account copy.

---

## Optional: Cloudflare Turnstile (extra anti-spam)
If spam gets through, in Cloudflare go to **Turnstile → Add widget** and add your `github.io` address.
- Put the **site key** in `js/config.js` → `turnstileSiteKey`.
- Add the **secret key** to your Worker as Secret `TURNSTILE_SECRET`.

## What it costs
For a small community, nothing. Cloudflare's free plan includes about 100,000 Worker requests a day, a free D1 database with gigabytes of storage, and a free daily allowance of Workers AI. Cloudflare will tell you if you ever get close to a limit.

"""Convert the World English Bible (Catholic) USFM files into per-book JSON for the Scripture Library.
Only markup is removed (Strong's tags etc.); the words of the translation are unchanged.
Usage: python3 -I usfm2json.py <usfm_dir> <out_dir> <meta_js>
"""
import sys, os, re, json, html

src, out, meta_path = sys.argv[1], sys.argv[2], sys.argv[3]
os.makedirs(out, exist_ok=True)

# Display titles (book metadata, not Scripture text)
TITLES = {
    "GEN": "The First Book of Moses, Called Genesis", "EXO": "The Second Book of Moses, Called Exodus",
    "LEV": "The Third Book of Moses, Called Leviticus", "NUM": "The Fourth Book of Moses, Called Numbers",
    "DEU": "The Fifth Book of Moses, Called Deuteronomy", "ECC": "Ecclesiastes, or The Preacher",
}
DEUTERO = {"TOB", "JDT", "ESG", "WIS", "SIR", "BAR", "1MA", "2MA", "DAG"}
GROUPS = [
    ("Pentateuch", "GEN EXO LEV NUM DEU"),
    ("Historical Books", "JOS JDG RUT 1SA 2SA 1KI 2KI 1CH 2CH EZR NEH TOB JDT ESG 1MA 2MA"),
    ("Wisdom Books", "JOB PSA PRO ECC SNG WIS SIR"),
    ("Prophets", "ISA JER LAM BAR EZK DAG HOS JOL AMO OBA JON MIC NAM HAB ZEP HAG ZEC MAL"),
    ("Gospels", "MAT MRK LUK JHN"),
    ("Acts & Letters", "ACT ROM 1CO 2CO GAL EPH PHP COL 1TH 2TH 1TI 2TI TIT PHM HEB JAS 1PE 2PE 1JN 2JN 3JN JUD"),
    ("Revelation", "REV"),
]
ORDER = " ".join(g[1] for g in GROUPS).split()

def inline(text, notes, xrefs, v):
    """USFM inline markup -> small trusted HTML. Footnotes/cross-refs are pulled out."""
    def fn(m):
        body = m.group(1)
        body = re.sub(r"\\fr\s+[^\\]*", "", body)
        body = re.sub(r"\\(ft|fqa|fq|fk|fl|fv)\*?\s?", "", body)
        body = clean_words(body).strip()
        notes.append({"v": v, "t": esc_keep(body)})
        return f"\u0001{len(notes) - 1}\u0002"
    text = re.sub(r"\\f\s+\+\s+(.*?)\\f\*", fn, text)
    def xr(m):
        t = re.sub(r"\\xo\s+[^\\]*", "", m.group(1))
        t = re.sub(r"\\xt\s*", "", t).strip()
        xrefs.setdefault(str(v), []).extend([x.strip() for x in t.split(";") if x.strip()])
        return ""
    text = re.sub(r"\\x\s+\+\s+(.*?)\\x\*", xr, text)
    text = clean_words(text)
    t = esc_keep(text)
    t = re.sub(r"\\wj\s?(.*?)\\wj\*", r'<span class="wj">\1</span>', t, flags=re.S)
    t = re.sub(r"\\qs\s?(.*?)\\qs\*", r'<span class="selah">\1</span>', t, flags=re.S)
    t = re.sub(r"\\\+?bk\s?(.*?)\\\+?bk\*", r"<cite>\1</cite>", t, flags=re.S)
    t = re.sub(r"\\\+?(add|nd|wh|tl|sc|it|em)\s?(.*?)\\\+?\1\*", r"\2", t, flags=re.S)
    t = re.sub("\u0001(\\d+)\u0002", lambda m: f'<sup class="fn" data-fn="{m.group(1)}">{int(m.group(1)) + 1}</sup>', t)
    leftover = re.findall(r"\\[a-z0-9+]+\*?", t)
    if leftover:
        raise SystemExit(f"Unhandled markup {set(leftover)} near: {t[:120]}")
    return re.sub(r"\s+", " ", t).strip()

def clean_words(s):
    # \w word|strong="G1234"\w*  and  \+w ...\+w*  -> word
    s = re.sub(r"\\\+?w\s+([^|\\]*?)(\|[^\\]*?)?\\\+?w\*", r"\1", s)
    return s

def esc_keep(s):
    return html.escape(s, quote=False)

def plain(h):
    h = re.sub(r'<sup class="fn"[^>]*>.*?</sup>', "", h)
    return html.unescape(re.sub(r"<[^>]+>", "", h)).strip()

books_meta, search_lines, total_verses = [], [], 0
files = {re.match(r"\d+-(\w+?)eng", f).group(1): f for f in os.listdir(src) if f.endswith(".usfm")}
for bid in ORDER:
    raw = open(os.path.join(src, files[bid]), encoding="utf-8-sig").read()
    name = re.search(r"^\\toc2 (.*)$", raw, re.M).group(1).strip()
    title = TITLES.get(bid, re.search(r"^\\toc1 (.*)$", raw, re.M).group(1).strip())
    intro, chapters, cur = [], [], None
    block = None
    v = 0

    def new_block(t):
        global block
        block = {"t": t, "s": []}
        cur["blocks"].append(block)

    # Tokenise on paragraph-level markers at line starts
    for line in raw.splitlines():
        line = line.rstrip()
        if not line:
            continue
        m = re.match(r"\\(\w+)\s?(.*)$", line)
        if not m:
            # continuation text
            if block is not None:
                block["s"].append([v, line])
            continue
        tag, rest = m.group(1), m.group(2)
        if tag in ("id", "ide", "h", "toc1", "toc2", "toc3", "mt1", "mt2", "mt3", "cl"):
            continue
        if tag in ("ip", "is1"):
            intro.append(("h" if tag == "is1" else "p", rest))
            continue
        if tag == "c":
            cur = {"n": int(rest.split()[0]), "blocks": [], "notes": [], "xrefs": {}, "verses": []}
            chapters.append(cur)
            block = None
            v = "0"
            continue
        if cur is None:
            continue
        if tag in ("p", "m", "pi1", "mi", "nb", "pc", "li1", "q1", "q2", "q3", "b", "d", "sp", "s1", "ms1"):
            t = {"pi1": "pi", "li1": "li", "mi": "m", "nb": "m", "pc": "p", "s1": "s", "ms1": "ms"}.get(tag, tag)
            new_block(t)
            if rest:
                rest_v = re.split(r"(\\v \S+ ?)", rest)
                for part in rest_v:
                    mv = re.match(r"\\v (\S+) ?", part)
                    if mv:
                        v = mv.group(1); cur["verses"].append(v)
                    elif part.strip():
                        block["s"].append([v, part])
            continue
        if tag == "v":
            if block is None:
                new_block("p")
            for part in re.split(r"(\\v \S+ ?)", "\\v " + rest):
                mv = re.match(r"\\v (\S+) ?", part)
                if mv:
                    v = mv.group(1); cur["verses"].append(v)
                elif part.strip():
                    block["s"].append([v, part])
            continue
        raise SystemExit(f"{bid}: unknown marker {tag}")

    # inline conversion, merge adjacent segments of same verse inside a block
    for ch in chapters:
        notes, xrefs = ch["notes"], ch["xrefs"]
        for b in ch["blocks"]:
            merged = []
            for vv, txt in b["s"]:
                h = inline(txt, notes, xrefs, vv)
                if not h:
                    continue
                if merged and merged[-1][0] == vv:
                    merged[-1][1] += " " + h
                else:
                    merged.append([vv, h])
            b["s"] = merged
        ch["blocks"] = [b for b in ch["blocks"] if b["s"] or b["t"] == "b"]
        # verse plain text for search
        vt = {}
        for b in ch["blocks"]:
            if b["t"] in ("d", "s", "ms", "sp"):
                continue
            for vv, h in b["s"]:
                vt.setdefault(vv, []).append(plain(h))
        seen = []
        for vv in ch["verses"]:
            if vv in seen:
                continue
            seen.append(vv)
            text = " ".join(vt.get(vv, [])).strip()
            search_lines.append(f"{bid} {ch['n']}:{vv}\t{text}")
            total_verses += 1
        ch["verses"] = seen
    data = {
        "id": bid, "name": name, "title": title,
        "intro": [[k, inline(t, [], {}, 0)] for k, t in intro],
        "chapters": [{"n": c["n"], "blocks": c["blocks"], "notes": c["notes"], "xrefs": c["xrefs"]} for c in chapters],
    }
    with open(os.path.join(out, bid + ".json"), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, separators=(",", ":"))
    books_meta.append({
        "id": bid, "name": name, "title": title, "deutero": bid in DEUTERO,
        "nt": ORDER.index(bid) >= ORDER.index("MAT"),
        "group": next(g for g, ids in GROUPS if bid in ids.split()),
        "verses": [len(c["verses"]) for c in chapters],
    })

with open(os.path.join(out, "search.txt"), "w", encoding="utf-8") as f:
    f.write("\n".join(search_lines) + "\n")

meta = {
    "id": "webc", "name": "World English Bible, Catholic Edition", "short": "WEB",
    "license": "Public Domain",
    "attribution": "Scripture quotations are from the World English Bible (Catholic Edition), which is in the public domain. \"World English Bible\" is a trademark of eBible.org.",
    "source": "https://ebible.org/",
    "groups": [g for g, _ in GROUPS],
    "books": books_meta,
}
with open(meta_path, "w", encoding="utf-8") as f:
    f.write("/*\n * THE SCRIPTURE LIBRARY: translations and book list.\n"
            " * Generated from the World English Bible (Catholic Edition) USFM files from eBible.org.\n"
            " * The text itself is in data/bible/webc/ (one file per book) and loads only when needed.\n"
            " * To add a translation later: only one whose licence allows it, in its own folder, with its own entry here.\n */\n"
            "window.VS = window.VS || {};\nVS.bibles = VS.bibles || {};\n")
    f.write("VS.bibles.webc = " + json.dumps(meta, ensure_ascii=False, separators=(",", ":")) + ";\n")
    f.write("VS.bibleDefault = \"webc\";\n")
print(len(books_meta), "books,", sum(len(b["verses"]) for b in books_meta), "chapters,", total_verses, "verses")

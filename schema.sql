-- Run this once in your Cloudflare D1 database console.
CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  page TEXT NOT NULL,                       -- which page, e.g. "article:lectio-divina"
  parent_id INTEGER,                        -- set when this comment is a reply
  name TEXT NOT NULL,
  user_id TEXT,                             -- Discord user id when posted while signed in with Discord
  avatar TEXT,                              -- Discord avatar address, if any
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'approved',  -- approved (visible), held (waiting for you), hidden
  reports INTEGER NOT NULL DEFAULT 0,       -- how many visitors reported it
  likes INTEGER NOT NULL DEFAULT 0,
  is_team INTEGER NOT NULL DEFAULT 0,       -- 1 = posted by the sanctuary team (shows a badge)
  flag_reason TEXT,                         -- why it was held, if it was
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  ip_hash TEXT                              -- scrambled, used only to slow down spam
);
CREATE INDEX IF NOT EXISTS idx_comments_page ON comments (page, status, created_at);
CREATE INDEX IF NOT EXISTS idx_comments_ip ON comments (ip_hash, created_at);
CREATE TABLE IF NOT EXISTS reports (
  comment_id INTEGER NOT NULL,
  ip_hash TEXT NOT NULL,
  reason TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (comment_id, ip_hash)
);
CREATE TABLE IF NOT EXISTS likes (
  comment_id INTEGER NOT NULL,
  ip_hash TEXT NOT NULL,
  PRIMARY KEY (comment_id, ip_hash)
);

-- ===== Lily Post pen pals =====
CREATE TABLE IF NOT EXISTS penpal_profiles (
  user_id TEXT PRIMARY KEY,                 -- Discord user id
  name TEXT NOT NULL,
  avatar TEXT,
  intro TEXT NOT NULL,
  interests TEXT,
  region TEXT,                              -- state or country only, never an address
  wants TEXT NOT NULL DEFAULT 'letters',    -- letters, gifts or both
  status TEXT NOT NULL DEFAULT 'pending',   -- pending (waiting for you), approved, hidden
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT
);
CREATE TABLE IF NOT EXISTS penpal_links (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  from_id TEXT NOT NULL,
  to_id TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',   -- pending, accepted, declined, ended
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_links_to ON penpal_links (to_id, status);
CREATE INDEX IF NOT EXISTS idx_links_from ON penpal_links (from_id, status);
CREATE TABLE IF NOT EXISTS blocks (
  user_id TEXT NOT NULL,
  blocked_id TEXT NOT NULL,
  PRIMARY KEY (user_id, blocked_id)
);
CREATE TABLE IF NOT EXISTS member_reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  reporter_id TEXT NOT NULL,
  target_id TEXT NOT NULL,
  context TEXT,
  reason TEXT,
  resolved INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- ===== Prayer wall =====
CREATE TABLE IF NOT EXISTS prayers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  name TEXT,
  avatar TEXT,
  show_name INTEGER NOT NULL DEFAULT 0,     -- 0 = shown as Anonymous
  audience TEXT NOT NULL DEFAULT 'everyone',-- everyone, or members (signed in only)
  category TEXT,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'approved',  -- approved, held, hidden
  flag_reason TEXT,
  reports INTEGER NOT NULL DEFAULT 0,
  prayed INTEGER NOT NULL DEFAULT 0,
  candles INTEGER NOT NULL DEFAULT 0,
  answered INTEGER NOT NULL DEFAULT 0,
  update_note TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT
);
CREATE TABLE IF NOT EXISTS prayer_actions (
  prayer_id INTEGER NOT NULL,
  actor TEXT NOT NULL,                      -- Discord id, or scrambled IP for visitors
  kind TEXT NOT NULL,                       -- prayed or candle
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (prayer_id, actor, kind)
);
CREATE TABLE IF NOT EXISTS prayer_notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  prayer_id INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'approved',
  flag_reason TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS help_offers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  prayer_id INTEGER NOT NULL,
  helper_id TEXT NOT NULL,
  helper_name TEXT NOT NULL,
  kind TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'offered',   -- offered, accepted, declined
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT
);
CREATE TABLE IF NOT EXISTS prayer_reports (
  prayer_id INTEGER NOT NULL,
  ip_hash TEXT NOT NULL,
  reason TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (prayer_id, ip_hash)
);

-- ---------- Sanctuary Journal: points, badges, Scholarium certificates ----------
CREATE TABLE IF NOT EXISTS scholar_profiles (
  user_id TEXT PRIMARY KEY,
  name TEXT,
  title TEXT,                 -- achievement id chosen as the member's title
  title_name TEXT,            -- its display name, e.g. "Scholar of the Seven Marys"
  public INTEGER NOT NULL DEFAULT 0,
  courses TEXT,               -- saved course positions (JSON)
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS progress_done (
  user_id TEXT NOT NULL,
  activity_id TEXT NOT NULL,
  first_at TEXT NOT NULL,
  count INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (user_id, activity_id)
);
CREATE TABLE IF NOT EXISTS progress_daily (
  user_id TEXT NOT NULL,
  activity_id TEXT NOT NULL,
  day TEXT NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, activity_id, day)
);
CREATE TABLE IF NOT EXISTS point_ledger (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  source TEXT NOT NULL,       -- activity id, or award:<achievement id>
  points INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS point_ledger_user ON point_ledger (user_id);
CREATE TABLE IF NOT EXISTS achievement_awards (
  user_id TEXT NOT NULL,
  achievement_id TEXT NOT NULL,
  awarded_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (user_id, achievement_id)
);
CREATE TABLE IF NOT EXISTS certificates (
  number TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  course_id TEXT NOT NULL,
  course_title TEXT NOT NULL,
  badge TEXT NOT NULL,
  issued_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (user_id, course_id)
);

-- ---------- Your Illuminated Bible: private highlights, bookmarks, notes, notebooks, collections ----------
-- Kept apart from the Bible text. Each item's data records the translation it belongs to.
CREATE TABLE IF NOT EXISTS bible_items (
  user_id TEXT NOT NULL,
  id TEXT NOT NULL,
  kind TEXT NOT NULL,          -- hl, bm, note, nb, col
  data TEXT,                   -- JSON (null when deleted)
  updated_at INTEGER NOT NULL, -- milliseconds
  deleted INTEGER NOT NULL DEFAULT 0,
  shared INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, id)
);
CREATE INDEX IF NOT EXISTS bible_items_shared ON bible_items (id) WHERE shared = 1;

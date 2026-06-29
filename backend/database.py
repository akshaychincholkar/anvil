import sqlite3
import os
from contextlib import contextmanager

DB_PATH = os.environ.get("DB_PATH", os.path.join(os.path.dirname(__file__), "anvil.db"))

@contextmanager
def db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()

def migrate_db():
    with db() as conn:
        def add_col(table, col, definition):
            cols = [r[1] for r in conn.execute(f"PRAGMA table_info({table})").fetchall()]
            if col not in cols:
                conn.execute(f"ALTER TABLE {table} ADD COLUMN {col} {definition}")

        # Soft-delete column across all major tables
        for table in ["task", "goal", "habit", "skill", "scripture", "chapter", "revision_topic", "journal_entry"]:
            add_col(table, "deleted_at", "TEXT")

        # task extras
        add_col("task", "start_datetime", "TEXT")
        add_col("task", "goal_id", "INTEGER")  # optional link to a weekly goal

        # habit type system (item 3)
        add_col("habit", "type", "TEXT NOT NULL DEFAULT 'regular'")
        add_col("habit", "target_count", "INTEGER")
        add_col("habit", "period", "TEXT")
        # weekly habits scheduled on specific weekdays (JSON list, Mon=0..Sun=6)
        add_col("habit", "days", "TEXT")

        # habit_log note (item 4)
        add_col("habit_log", "note", "TEXT")
        # habit_log per-day count for minimum/maximum habits
        add_col("habit_log", "count", "INTEGER")

        # skill stage tracking (item 11)
        add_col("skill", "completed_stages", "TEXT NOT NULL DEFAULT '{}'")
        # wisdom checklist done flag on skill notes
        add_col("skill_note", "done", "INTEGER NOT NULL DEFAULT 0")
        # Data-stage groups: chapters (books) / learnings (video, article).
        # JSON list of {id, label} on the skill; each grouped note carries the group id.
        add_col("skill", "data_groups", "TEXT NOT NULL DEFAULT '[]'")
        add_col("skill_note", "grp", "TEXT")

        # multi-user auth columns
        add_col("user", "email", "TEXT")
        add_col("user", "password_hash", "TEXT")
        add_col("user", "salt", "TEXT")
        # Google Sign-In: stable subject id from the verified ID token
        add_col("user", "google_sub", "TEXT")

        # delight kanban fields (status lane + order) for pre-existing tables
        di_cols = [r[1] for r in conn.execute("PRAGMA table_info(delight_item)").fetchall()]
        if di_cols and "status" not in di_cols:
            conn.execute("ALTER TABLE delight_item ADD COLUMN status TEXT NOT NULL DEFAULT 'todo'")
            conn.execute("UPDATE delight_item SET status='done' WHERE done=1")
        if di_cols:
            add_col("delight_item", "position", "INTEGER NOT NULL DEFAULT 0")

        # Tesla 369 method: per-dream toggle + its own affirmation text.
        add_col("golden_goal", "t369_enabled", "INTEGER NOT NULL DEFAULT 0")
        add_col("golden_goal", "t369_affirmation", "TEXT NOT NULL DEFAULT ''")
        # Migrate any earlier global-369 schema: drop the standalone table and
        # the goal-less log rows so the per-dream model starts clean.
        conn.execute("DROP TABLE IF EXISTS tesla369")
        t369_cols = [r[1] for r in conn.execute("PRAGMA table_info(tesla369_log)").fetchall()]
        if t369_cols and "goal_id" not in t369_cols:
            # Old global logs can't be attributed to a dream — clear them.
            conn.execute("DROP TABLE tesla369_log")
            conn.execute("""
                CREATE TABLE tesla369_log (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_id INTEGER NOT NULL DEFAULT 1,
                    goal_id INTEGER NOT NULL,
                    log_date TEXT NOT NULL,
                    window TEXT NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
        conn.execute("CREATE INDEX IF NOT EXISTS idx_tesla369_log_goal_date ON tesla369_log (goal_id, log_date)")

def init_db():
    with db() as conn:
        conn.executescript("""
        CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL DEFAULT 'Anvil User',
            timezone TEXT NOT NULL DEFAULT 'Asia/Kolkata',
            email TEXT,
            password_hash TEXT,
            salt TEXT
        );
        INSERT OR IGNORE INTO user (id, name) VALUES (1, 'Anvil User');

        CREATE TABLE IF NOT EXISTS focus_session (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            label TEXT,
            tree TEXT NOT NULL DEFAULT 'oak',
            duration_min INTEGER NOT NULL,
            actual_min INTEGER NOT NULL DEFAULT 0,
            completed INTEGER NOT NULL DEFAULT 0,
            started_at TEXT,
            ended_at TEXT,
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS user_setting (
            user_id INTEGER NOT NULL,
            key TEXT NOT NULL,
            value TEXT,
            PRIMARY KEY (user_id, key)
        );

        CREATE TABLE IF NOT EXISTS pillar (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            name TEXT NOT NULL,
            color TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS task (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            pillar_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            quadrant TEXT NOT NULL CHECK(quadrant IN ('Q1','Q2','Q3','Q4')),
            time_estimate_min INTEGER NOT NULL DEFAULT 30,
            gcal_event_id TEXT,
            status TEXT NOT NULL DEFAULT 'active',
            start_datetime TEXT,
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS goal (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            pillar_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            horizon TEXT NOT NULL CHECK(horizon IN ('Yearly','Quarterly','Monthly','Weekly')),
            parent_goal_id INTEGER,
            start_date TEXT NOT NULL,
            end_date TEXT NOT NULL,
            deleted_at TEXT
        );

        CREATE TABLE IF NOT EXISTS habit (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            pillar_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            target_per_week INTEGER NOT NULL DEFAULT 7,
            reminder_time TEXT,
            type TEXT NOT NULL DEFAULT 'regular',
            target_count INTEGER,
            period TEXT,
            deleted_at TEXT
        );

        CREATE TABLE IF NOT EXISTS habit_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            habit_id INTEGER NOT NULL,
            date TEXT NOT NULL,
            done INTEGER NOT NULL DEFAULT 1,
            note TEXT,
            count INTEGER,
            UNIQUE(habit_id, date)
        );

        CREATE TABLE IF NOT EXISTS journal_entry (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            date TEXT NOT NULL,
            mood INTEGER,
            deleted_at TEXT,
            UNIQUE(user_id, date)
        );

        CREATE TABLE IF NOT EXISTS journal_bullet (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            entry_id INTEGER NOT NULL,
            section TEXT NOT NULL CHECK(section IN ('wins','grateful','mattered','letgo','tomorrow')),
            text TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS skill (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            pillar_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            source_type TEXT NOT NULL CHECK(source_type IN ('book','video','article')),
            stage TEXT NOT NULL DEFAULT 'D' CHECK(stage IN ('D','I','K','W')),
            note_d TEXT NOT NULL DEFAULT '',
            note_i TEXT NOT NULL DEFAULT '',
            note_k TEXT NOT NULL DEFAULT '',
            note_w TEXT NOT NULL DEFAULT '',
            completed_stages TEXT NOT NULL DEFAULT '{}',
            deleted_at TEXT
        );

        CREATE TABLE IF NOT EXISTS skill_note (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            skill_id INTEGER NOT NULL,
            stage TEXT NOT NULL CHECK(stage IN ('D','I','K','W')),
            text TEXT NOT NULL,
            done INTEGER NOT NULL DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS scripture (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            name TEXT NOT NULL,
            color TEXT NOT NULL DEFAULT '#8268B0',
            streak INTEGER NOT NULL DEFAULT 0,
            deleted_at TEXT
        );

        CREATE TABLE IF NOT EXISTS chapter (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            scripture_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            read_date TEXT NOT NULL,
            mood INTEGER,
            reflection TEXT NOT NULL DEFAULT '',
            contemplation TEXT NOT NULL DEFAULT '',
            bookmarked INTEGER NOT NULL DEFAULT 0,
            deleted_at TEXT
        );

        CREATE TABLE IF NOT EXISTS chapter_insight (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            chapter_id INTEGER NOT NULL,
            text TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS revision_topic (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            pillar_id INTEGER NOT NULL,
            topic TEXT NOT NULL,
            learned_date TEXT NOT NULL,
            intervals TEXT NOT NULL DEFAULT '[1,3,7,15,30]',
            deleted_at TEXT
        );

        CREATE TABLE IF NOT EXISTS review (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            topic_id INTEGER NOT NULL,
            stage INTEGER NOT NULL,
            due_date TEXT NOT NULL,
            done INTEGER NOT NULL DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS oauth_token (
            id INTEGER PRIMARY KEY,
            user_id INTEGER NOT NULL DEFAULT 1,
            provider TEXT NOT NULL DEFAULT 'google',
            token_json TEXT NOT NULL,
            UNIQUE(user_id, provider)
        );

        CREATE TABLE IF NOT EXISTS affirmation (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            category TEXT NOT NULL DEFAULT 'Motivational',
            text TEXT NOT NULL,
            favorite INTEGER NOT NULL DEFAULT 0,
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS finance_txn (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            kind TEXT NOT NULL CHECK(kind IN ('income','expense')),
            category TEXT NOT NULL DEFAULT 'Other',
            amount REAL NOT NULL DEFAULT 0,
            note TEXT NOT NULL DEFAULT '',
            txn_date TEXT NOT NULL,
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS kickstart_video (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            youtube_id TEXT NOT NULL,
            title TEXT NOT NULL DEFAULT '',
            start_sec INTEGER NOT NULL DEFAULT 0,
            end_sec INTEGER,
            days TEXT NOT NULL DEFAULT '[]',
            pillars TEXT NOT NULL DEFAULT '[]',
            customs TEXT NOT NULL DEFAULT '[]',
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS golden_goal (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            title TEXT NOT NULL DEFAULT '',
            image TEXT NOT NULL DEFAULT '',
            created_date TEXT NOT NULL,
            achieved INTEGER NOT NULL DEFAULT 0,
            achieved_date TEXT,
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS golden_entry (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            goal_id INTEGER NOT NULL,
            entry_date TEXT NOT NULL,
            text TEXT NOT NULL DEFAULT '',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(goal_id, entry_date)
        );

        -- Tesla 369 method is a per-dream mode (see golden_goal.t369_enabled).
        -- One row per individual write; window ('morning'|'noon'|'night') is
        -- derived from the wall-clock time the write was logged. (The goal_id
        -- column + index are ensured in migrate_db so older DBs upgrade cleanly.)
        CREATE TABLE IF NOT EXISTS tesla369_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            goal_id INTEGER NOT NULL,
            log_date TEXT NOT NULL,
            window TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS spiritual_deck (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            title TEXT NOT NULL DEFAULT '',
            type TEXT NOT NULL DEFAULT 'text',
            content TEXT NOT NULL DEFAULT '',
            images TEXT NOT NULL DEFAULT '[]',
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS media_item (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            kind TEXT NOT NULL DEFAULT 'meditation',
            title TEXT NOT NULL DEFAULT '',
            image TEXT NOT NULL DEFAULT '',
            youtube_id TEXT NOT NULL DEFAULT '',
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS screen_time (
            user_id INTEGER NOT NULL DEFAULT 1,
            screen TEXT NOT NULL,
            date TEXT NOT NULL,
            seconds INTEGER NOT NULL DEFAULT 0,
            PRIMARY KEY (user_id, screen, date)
        );

        CREATE TABLE IF NOT EXISTS reward_payout (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            amount REAL NOT NULL DEFAULT 0,
            note TEXT NOT NULL DEFAULT '',
            pay_date TEXT NOT NULL,
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS reward_rate (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            kind TEXT NOT NULL,
            rkey TEXT NOT NULL,
            rate REAL NOT NULL DEFAULT 0,
            eff_date TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(user_id, kind, rkey, eff_date)
        );

        CREATE TABLE IF NOT EXISTS achievement (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            title TEXT NOT NULL,
            note TEXT NOT NULL DEFAULT '',
            ach_date TEXT NOT NULL,
            image TEXT,
            reward REAL NOT NULL DEFAULT 0,
            pillar_id INTEGER,
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        -- Delights: customizable collections of fun things (books, movies, places…)
        CREATE TABLE IF NOT EXISTS delight_collection (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            name TEXT NOT NULL,
            columns TEXT NOT NULL DEFAULT '[]',   -- JSON array of user-named column labels
            position INTEGER NOT NULL DEFAULT 0,
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS delight_item (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            collection_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            fields TEXT NOT NULL DEFAULT '{}',     -- JSON {column: value}
            done INTEGER NOT NULL DEFAULT 0,
            status TEXT NOT NULL DEFAULT 'todo',   -- kanban lane: todo | doing | done
            position INTEGER NOT NULL DEFAULT 0,   -- order within its lane
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        -- Expenses: user-customizable icon categories (veggies, grocery, movie…) + daily logs.
        CREATE TABLE IF NOT EXISTS expense_category (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            name TEXT NOT NULL,
            icon TEXT NOT NULL DEFAULT 'ShoppingBag',
            color TEXT NOT NULL DEFAULT '#C9772E',
            position INTEGER NOT NULL DEFAULT 0,
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS expense_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            category_id INTEGER NOT NULL,
            amount REAL NOT NULL DEFAULT 0,
            note TEXT NOT NULL DEFAULT '',
            log_date TEXT NOT NULL,
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        -- Wallet: investment holdings (asset generation) — invested vs current value.
        CREATE TABLE IF NOT EXISTS investment (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            name TEXT NOT NULL,
            kind TEXT NOT NULL DEFAULT 'Other',
            invested REAL NOT NULL DEFAULT 0,
            current_value REAL NOT NULL DEFAULT 0,
            note TEXT NOT NULL DEFAULT '',
            start_date TEXT NOT NULL,
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        -- Wallet/Expenses: recurring "fixed" items (EMI, rent, SIP…) that auto-post
        -- a real expense_log / investment row at the start of every billing cycle.
        CREATE TABLE IF NOT EXISTS fixed_item (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL DEFAULT 1,
            kind TEXT NOT NULL CHECK(kind IN ('expense','investment')),
            name TEXT NOT NULL,
            amount REAL NOT NULL DEFAULT 0,
            category_id INTEGER,            -- expense_category id, when kind='expense'
            invest_kind TEXT,                -- investment "kind" label, when kind='investment'
            note TEXT NOT NULL DEFAULT '',
            active INTEGER NOT NULL DEFAULT 1,
            deleted_at TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        -- One row per fixed_item per billing cycle it has already posted into —
        -- prevents double-posting and lets the actual log/investment be freely edited or deleted.
        CREATE TABLE IF NOT EXISTS fixed_posting (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fixed_item_id INTEGER NOT NULL,
            cycle_start TEXT NOT NULL,
            expense_log_id INTEGER,
            investment_id INTEGER,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(fixed_item_id, cycle_start)
        );
        """)

        migrate_db()

        # Seed the 5 pillars if not present
        count = conn.execute("SELECT COUNT(*) FROM pillar WHERE user_id=1").fetchone()[0]
        if count == 0:
            conn.executemany(
                "INSERT INTO pillar (user_id, name, color) VALUES (1, ?, ?)",
                [
                    ("Financial",    "#C9A227"),
                    ("Academic",     "#3A7CA5"),
                    ("Relationship", "#C2536B"),
                    ("Health",       "#4C9A6B"),
                    ("Spiritual",    "#8268B0"),
                ]
            )

        # Seed starter expense categories if none exist
        ecount = conn.execute("SELECT COUNT(*) FROM expense_category WHERE user_id=1").fetchone()[0]
        if ecount == 0:
            conn.executemany(
                "INSERT INTO expense_category (user_id, name, icon, color, position) VALUES (1, ?, ?, ?, ?)",
                [
                    ("Vegetables",   "Carrot",        "#4C9A6B", 0),
                    ("Grocery",      "ShoppingCart",  "#C9A227", 1),
                    ("Movie",        "Clapperboard",  "#8268B0", 2),
                    ("Shopping",     "ShoppingBag",   "#C2536B", 3),
                    ("Petrol",       "Fuel",          "#C2773B", 4),
                    ("Cosmetics",    "Sparkles",      "#D1556E", 5),
                    ("Clothing",     "Shirt",         "#3A7CA5", 6),
                    ("Laundry",      "WashingMachine","#5B7C99", 7),
                    ("Electricity",  "Zap",           "#C9772E", 8),
                    ("DishTV",       "Tv",            "#A23E57", 9),
                    ("Water bill",   "Droplet",       "#3A7CA5", 10),
                ]
            )

        # Seed starter affirmations if none exist
        acount = conn.execute("SELECT COUNT(*) FROM affirmation WHERE user_id=1").fetchone()[0]
        if acount == 0:
            conn.executemany(
                "INSERT INTO affirmation (user_id, category, text) VALUES (1, ?, ?)",
                [
                    ("Motivational",  "I am capable of achieving everything I set my mind to."),
                    ("Motivational",  "Every day I grow stronger, wiser, and more disciplined."),
                    ("Habits",        "Small consistent actions compound into remarkable results."),
                    ("Habits",        "I show up for myself every single day, no excuses."),
                    ("Gratitude",     "I am grateful for this moment and all that I have."),
                    ("Gratitude",     "My life is full of blessings I often overlook."),
                    ("Health",        "My body is strong, healthy, and full of energy."),
                    ("Health",        "I nourish my mind and body with care each day."),
                    ("Abundance",     "Opportunities and abundance flow to me effortlessly."),
                    ("Abundance",     "I deserve success and welcome it into my life."),
                    ("Relationships", "I attract loving, supportive, and genuine people."),
                    ("Relationships", "I give and receive love freely and openly."),
                ]
            )

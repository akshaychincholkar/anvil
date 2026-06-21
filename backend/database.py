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

        # habit_log note (item 4)
        add_col("habit_log", "note", "TEXT")
        # habit_log per-day count for minimum/maximum habits
        add_col("habit_log", "count", "INTEGER")

        # skill stage tracking (item 11)
        add_col("skill", "completed_stages", "TEXT NOT NULL DEFAULT '{}'")
        # wisdom checklist done flag on skill notes
        add_col("skill_note", "done", "INTEGER NOT NULL DEFAULT 0")

        # multi-user auth columns
        add_col("user", "email", "TEXT")
        add_col("user", "password_hash", "TEXT")
        add_col("user", "salt", "TEXT")

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

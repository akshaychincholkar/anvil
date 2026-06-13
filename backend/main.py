from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import Optional, List
import json
import os
from datetime import date, timedelta

from database import db, init_db

DIST = os.path.join(os.path.dirname(__file__), "..", "frontend", "dist")

app = FastAPI(title="BRTN Anvil API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup():
    init_db()


# ── Helpers ─────────────────────────────────────────────────────────────────

def row_dict(row) -> dict:
    return dict(row) if row else {}

def pillar_id(conn, name: str) -> int:
    row = conn.execute(
        "SELECT id FROM pillar WHERE user_id=1 AND name=?", (name,)
    ).fetchone()
    if not row:
        raise HTTPException(400, f"Unknown pillar: {name}")
    return row[0]


# ── Pillars ──────────────────────────────────────────────────────────────────

@app.get("/api/pillars")
def get_pillars():
    with db() as conn:
        rows = conn.execute("SELECT id, name, color FROM pillar WHERE user_id=1").fetchall()
        return [row_dict(r) for r in rows]


# ── Tasks (Screen 1) ─────────────────────────────────────────────────────────

class TaskCreate(BaseModel):
    pillar: str
    title: str
    quadrant: str
    time_estimate_min: int = 30

class TaskUpdate(BaseModel):
    pillar: Optional[str] = None
    title: Optional[str] = None
    quadrant: Optional[str] = None
    time_estimate_min: Optional[int] = None
    status: Optional[str] = None
    gcal_event_id: Optional[str] = None

_TASK_SELECT = """
    SELECT t.id, p.name AS pillar, t.title, t.quadrant,
           t.time_estimate_min, t.gcal_event_id, t.status
    FROM task t JOIN pillar p ON t.pillar_id=p.id
    WHERE t.id=? AND t.user_id=1
"""

def _task(conn, task_id: int) -> dict:
    row = conn.execute(_TASK_SELECT, (task_id,)).fetchone()
    if not row:
        raise HTTPException(404, "Task not found")
    return row_dict(row)

@app.get("/api/tasks")
def get_tasks():
    with db() as conn:
        rows = conn.execute("""
            SELECT t.id, p.name AS pillar, t.title, t.quadrant,
                   t.time_estimate_min, t.gcal_event_id, t.status
            FROM task t JOIN pillar p ON t.pillar_id=p.id
            WHERE t.user_id=1 AND t.status='active'
            ORDER BY t.created_at
        """).fetchall()
        return [row_dict(r) for r in rows]

@app.post("/api/tasks", status_code=201)
def create_task(body: TaskCreate):
    with db() as conn:
        pid = pillar_id(conn, body.pillar)
        cur = conn.execute(
            "INSERT INTO task (user_id,pillar_id,title,quadrant,time_estimate_min) VALUES (1,?,?,?,?)",
            (pid, body.title, body.quadrant, body.time_estimate_min)
        )
        return _task(conn, cur.lastrowid)

@app.put("/api/tasks/{task_id}")
def update_task(task_id: int, body: TaskUpdate):
    with db() as conn:
        if not conn.execute("SELECT id FROM task WHERE id=? AND user_id=1", (task_id,)).fetchone():
            raise HTTPException(404, "Task not found")
        updates = {k: v for k, v in body.dict().items() if v is not None}
        if "pillar" in updates:
            updates["pillar_id"] = pillar_id(conn, updates.pop("pillar"))
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE task SET {sets} WHERE id=?", (*updates.values(), task_id))
        return _task(conn, task_id)

@app.delete("/api/tasks/{task_id}", status_code=204)
def delete_task(task_id: int):
    with db() as conn:
        conn.execute("DELETE FROM task WHERE id=? AND user_id=1", (task_id,))

@app.put("/api/tasks/{task_id}/schedule")
def schedule_task(task_id: int):
    with db() as conn:
        conn.execute(
            "UPDATE task SET gcal_event_id='pending' WHERE id=? AND user_id=1", (task_id,)
        )
        return _task(conn, task_id)


# ── Goals (Screen 2) ─────────────────────────────────────────────────────────

class GoalCreate(BaseModel):
    pillar: str
    title: str
    horizon: str
    parent_goal_id: Optional[int] = None
    start_date: str
    end_date: str

class GoalUpdate(BaseModel):
    title: Optional[str] = None
    start_date: Optional[str] = None
    end_date: Optional[str] = None

_GOAL_SELECT = """
    SELECT g.id, p.name AS pillar, g.title, g.horizon,
           g.parent_goal_id, g.start_date, g.end_date
    FROM goal g JOIN pillar p ON g.pillar_id=p.id
    WHERE g.id=? AND g.user_id=1
"""

def _goal(conn, goal_id: int) -> dict:
    row = conn.execute(_GOAL_SELECT, (goal_id,)).fetchone()
    if not row:
        raise HTTPException(404, "Goal not found")
    return row_dict(row)

@app.get("/api/goals")
def get_goals(pillar: Optional[str] = None):
    with db() as conn:
        if pillar:
            rows = conn.execute("""
                SELECT g.id, p.name AS pillar, g.title, g.horizon,
                       g.parent_goal_id, g.start_date, g.end_date
                FROM goal g JOIN pillar p ON g.pillar_id=p.id
                WHERE g.user_id=1 AND p.name=? ORDER BY g.start_date
            """, (pillar,)).fetchall()
        else:
            rows = conn.execute("""
                SELECT g.id, p.name AS pillar, g.title, g.horizon,
                       g.parent_goal_id, g.start_date, g.end_date
                FROM goal g JOIN pillar p ON g.pillar_id=p.id
                WHERE g.user_id=1 ORDER BY g.start_date
            """).fetchall()
        return [row_dict(r) for r in rows]

@app.post("/api/goals", status_code=201)
def create_goal(body: GoalCreate):
    with db() as conn:
        pid = pillar_id(conn, body.pillar)
        cur = conn.execute(
            "INSERT INTO goal (user_id,pillar_id,title,horizon,parent_goal_id,start_date,end_date) VALUES (1,?,?,?,?,?,?)",
            (pid, body.title, body.horizon, body.parent_goal_id, body.start_date, body.end_date)
        )
        return _goal(conn, cur.lastrowid)

@app.put("/api/goals/{goal_id}")
def update_goal(goal_id: int, body: GoalUpdate):
    with db() as conn:
        updates = {k: v for k, v in body.dict().items() if v is not None}
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE goal SET {sets} WHERE id=? AND user_id=1", (*updates.values(), goal_id))
        return _goal(conn, goal_id)

@app.delete("/api/goals/{goal_id}", status_code=204)
def delete_goal(goal_id: int):
    with db() as conn:
        conn.execute("DELETE FROM goal WHERE id=? AND user_id=1", (goal_id,))


# ── Habits (Screen 3) ─────────────────────────────────────────────────────────

class HabitCreate(BaseModel):
    pillar: str
    name: str
    target_per_week: int = 7

class HabitUpdate(BaseModel):
    name: Optional[str] = None
    target_per_week: Optional[int] = None
    reminder_time: Optional[str] = None

def _streak(logs: list) -> int:
    if not logs:
        return 0
    today = date.today()
    log_set = set(logs)
    s, d = 0, today
    while str(d) in log_set:
        s += 1
        d -= timedelta(days=1)
    return s

def _habit_full(conn, habit_id: int) -> dict:
    h = conn.execute("""
        SELECT h.id, p.name AS pillar, h.name, h.target_per_week, h.reminder_time
        FROM habit h JOIN pillar p ON h.pillar_id=p.id
        WHERE h.id=? AND h.user_id=1
    """, (habit_id,)).fetchone()
    if not h:
        raise HTTPException(404, "Habit not found")
    logs = [r[0] for r in conn.execute(
        "SELECT date FROM habit_log WHERE habit_id=? AND done=1 ORDER BY date", (habit_id,)
    ).fetchall()]
    d = row_dict(h)
    d["logs"] = logs
    d["streak"] = _streak(logs)
    return d

@app.get("/api/habits")
def get_habits():
    with db() as conn:
        habits = conn.execute("""
            SELECT h.id FROM habit h WHERE h.user_id=1 ORDER BY h.id
        """).fetchall()
        return [_habit_full(conn, h["id"]) for h in habits]

@app.post("/api/habits", status_code=201)
def create_habit(body: HabitCreate):
    with db() as conn:
        pid = pillar_id(conn, body.pillar)
        cur = conn.execute(
            "INSERT INTO habit (user_id,pillar_id,name,target_per_week) VALUES (1,?,?,?)",
            (pid, body.name, body.target_per_week)
        )
        return _habit_full(conn, cur.lastrowid)

@app.put("/api/habits/{habit_id}")
def update_habit(habit_id: int, body: HabitUpdate):
    with db() as conn:
        updates = {k: v for k, v in body.dict().items() if v is not None}
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE habit SET {sets} WHERE id=? AND user_id=1", (*updates.values(), habit_id))
        return _habit_full(conn, habit_id)

@app.delete("/api/habits/{habit_id}", status_code=204)
def delete_habit(habit_id: int):
    with db() as conn:
        conn.execute("DELETE FROM habit_log WHERE habit_id=?", (habit_id,))
        conn.execute("DELETE FROM habit WHERE id=? AND user_id=1", (habit_id,))

@app.post("/api/habits/{habit_id}/log/{log_date}")
def toggle_habit_log(habit_id: int, log_date: str):
    with db() as conn:
        existing = conn.execute(
            "SELECT id, done FROM habit_log WHERE habit_id=? AND date=?", (habit_id, log_date)
        ).fetchone()
        if existing:
            conn.execute("UPDATE habit_log SET done=? WHERE id=?", (0 if existing["done"] else 1, existing["id"]))
        else:
            conn.execute("INSERT INTO habit_log (habit_id,date,done) VALUES (?,?,1)", (habit_id, log_date))
        return _habit_full(conn, habit_id)


# ── Journal (Screen 4) ────────────────────────────────────────────────────────

class MoodUpdate(BaseModel):
    mood: int

class BulletCreate(BaseModel):
    section: str
    text: str

def _journal_full(conn, entry_date: str) -> dict:
    entry = conn.execute(
        "SELECT id, date, mood FROM journal_entry WHERE user_id=1 AND date=?", (entry_date,)
    ).fetchone()
    if not entry:
        cur = conn.execute("INSERT INTO journal_entry (user_id,date) VALUES (1,?)", (entry_date,))
        entry_id = cur.lastrowid
        mood = None
    else:
        entry_id = entry["id"]
        mood = entry["mood"]

    bullets_raw = conn.execute(
        "SELECT id, section, text FROM journal_bullet WHERE entry_id=? ORDER BY id", (entry_id,)
    ).fetchall()
    sections = {s: [] for s in ["wins", "grateful", "mattered", "letgo", "tomorrow"]}
    for b in bullets_raw:
        sections[b["section"]].append({"id": b["id"], "text": b["text"]})

    return {"id": entry_id, "date": entry_date, "mood": mood, "bullets": sections}

@app.get("/api/journal/history/{year}/{month}")
def get_journal_history(year: int, month: int):
    with db() as conn:
        pattern = f"{year}-{str(month).zfill(2)}-%"
        rows = conn.execute(
            "SELECT date, mood FROM journal_entry WHERE user_id=1 AND date LIKE ? AND mood IS NOT NULL",
            (pattern,)
        ).fetchall()
        return {r["date"]: r["mood"] for r in rows}

@app.get("/api/journal/{entry_date}")
def get_journal_entry(entry_date: str):
    with db() as conn:
        return _journal_full(conn, entry_date)

@app.put("/api/journal/{entry_date}")
def update_journal_mood(entry_date: str, body: MoodUpdate):
    with db() as conn:
        existing = conn.execute(
            "SELECT id FROM journal_entry WHERE user_id=1 AND date=?", (entry_date,)
        ).fetchone()
        if existing:
            conn.execute("UPDATE journal_entry SET mood=? WHERE id=?", (body.mood, existing["id"]))
        else:
            conn.execute("INSERT INTO journal_entry (user_id,date,mood) VALUES (1,?,?)", (entry_date, body.mood))
        return _journal_full(conn, entry_date)

@app.post("/api/journal/{entry_date}/bullets", status_code=201)
def add_bullet(entry_date: str, body: BulletCreate):
    with db() as conn:
        entry = _journal_full(conn, entry_date)
        conn.execute(
            "INSERT INTO journal_bullet (entry_id,section,text) VALUES (?,?,?)",
            (entry["id"], body.section, body.text)
        )
        return _journal_full(conn, entry_date)

@app.delete("/api/journal/bullets/{bullet_id}", status_code=204)
def delete_bullet(bullet_id: int):
    with db() as conn:
        conn.execute("DELETE FROM journal_bullet WHERE id=?", (bullet_id,))


# ── Skills (Screen 5) ─────────────────────────────────────────────────────────

class SkillCreate(BaseModel):
    pillar: str
    title: str
    source_type: str
    note_d: str = ""

class SkillUpdate(BaseModel):
    stage: Optional[str] = None
    note_d: Optional[str] = None
    note_i: Optional[str] = None
    note_k: Optional[str] = None
    note_w: Optional[str] = None

def _skill_full(conn, skill_id: int) -> dict:
    row = conn.execute("""
        SELECT s.id, p.name AS pillar, s.title, s.source_type, s.stage,
               s.note_d, s.note_i, s.note_k, s.note_w
        FROM skill s JOIN pillar p ON s.pillar_id=p.id
        WHERE s.id=? AND s.user_id=1
    """, (skill_id,)).fetchone()
    if not row:
        raise HTTPException(404, "Skill not found")
    d = row_dict(row)
    d["notes"] = {"D": d.pop("note_d"), "I": d.pop("note_i"), "K": d.pop("note_k"), "W": d.pop("note_w")}
    return d

@app.get("/api/skills")
def get_skills():
    with db() as conn:
        rows = conn.execute("SELECT id FROM skill WHERE user_id=1 ORDER BY id").fetchall()
        return [_skill_full(conn, r["id"]) for r in rows]

@app.post("/api/skills", status_code=201)
def create_skill(body: SkillCreate):
    with db() as conn:
        pid = pillar_id(conn, body.pillar)
        cur = conn.execute(
            "INSERT INTO skill (user_id,pillar_id,title,source_type,stage,note_d) VALUES (1,?,?,?,'D',?)",
            (pid, body.title, body.source_type, body.note_d)
        )
        return _skill_full(conn, cur.lastrowid)

@app.put("/api/skills/{skill_id}")
def update_skill(skill_id: int, body: SkillUpdate):
    with db() as conn:
        updates = {k: v for k, v in body.dict().items() if v is not None}
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE skill SET {sets} WHERE id=? AND user_id=1", (*updates.values(), skill_id))
        return _skill_full(conn, skill_id)

@app.delete("/api/skills/{skill_id}", status_code=204)
def delete_skill(skill_id: int):
    with db() as conn:
        conn.execute("DELETE FROM skill WHERE id=? AND user_id=1", (skill_id,))


# ── Spiritual (Screen 6) ──────────────────────────────────────────────────────

class ScriptureCreate(BaseModel):
    name: str
    color: str = "#8268B0"

class ChapterCreate(BaseModel):
    title: str
    mood: Optional[int] = None
    reflection: str = ""
    contemplation: str = ""

class ChapterUpdate(BaseModel):
    mood: Optional[int] = None
    reflection: Optional[str] = None
    contemplation: Optional[str] = None
    bookmarked: Optional[bool] = None

class InsightCreate(BaseModel):
    text: str

def _scripture_full(conn, scripture_id: int) -> dict:
    sc = conn.execute("SELECT * FROM scripture WHERE id=? AND user_id=1", (scripture_id,)).fetchone()
    if not sc:
        raise HTTPException(404, "Scripture not found")
    chapters = conn.execute(
        "SELECT * FROM chapter WHERE scripture_id=? ORDER BY read_date", (scripture_id,)
    ).fetchall()
    chapters_out = []
    for ch in chapters:
        insights = conn.execute(
            "SELECT id, text FROM chapter_insight WHERE chapter_id=? ORDER BY id", (ch["id"],)
        ).fetchall()
        ch_d = row_dict(ch)
        ch_d["bookmarked"] = bool(ch_d["bookmarked"])
        ch_d["insights"] = [row_dict(i) for i in insights]
        chapters_out.append(ch_d)
    sc_d = row_dict(sc)
    sc_d["chapters"] = chapters_out
    return sc_d

@app.get("/api/scriptures")
def get_scriptures():
    with db() as conn:
        ids = conn.execute("SELECT id FROM scripture WHERE user_id=1 ORDER BY id").fetchall()
        return [_scripture_full(conn, r["id"]) for r in ids]

@app.post("/api/scriptures", status_code=201)
def create_scripture(body: ScriptureCreate):
    with db() as conn:
        cur = conn.execute(
            "INSERT INTO scripture (user_id,name,color) VALUES (1,?,?)", (body.name, body.color)
        )
        return _scripture_full(conn, cur.lastrowid)

@app.post("/api/scriptures/{scripture_id}/chapters", status_code=201)
def add_chapter(scripture_id: int, body: ChapterCreate):
    with db() as conn:
        today = str(date.today())
        conn.execute(
            "INSERT INTO chapter (scripture_id,title,read_date,mood,reflection,contemplation) VALUES (?,?,?,?,?,?)",
            (scripture_id, body.title, today, body.mood, body.reflection, body.contemplation)
        )
        return _scripture_full(conn, scripture_id)

@app.put("/api/chapters/{chapter_id}")
def update_chapter(chapter_id: int, body: ChapterUpdate):
    with db() as conn:
        updates = {k: v for k, v in body.dict().items() if v is not None}
        if "bookmarked" in updates:
            updates["bookmarked"] = 1 if updates["bookmarked"] else 0
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE chapter SET {sets} WHERE id=?", (*updates.values(), chapter_id))
        sc = conn.execute("SELECT scripture_id FROM chapter WHERE id=?", (chapter_id,)).fetchone()
        if not sc:
            raise HTTPException(404)
        return _scripture_full(conn, sc["scripture_id"])

@app.post("/api/chapters/{chapter_id}/insights", status_code=201)
def add_insight(chapter_id: int, body: InsightCreate):
    with db() as conn:
        conn.execute("INSERT INTO chapter_insight (chapter_id,text) VALUES (?,?)", (chapter_id, body.text))
        sc = conn.execute("SELECT scripture_id FROM chapter WHERE id=?", (chapter_id,)).fetchone()
        return _scripture_full(conn, sc["scripture_id"])

@app.delete("/api/insights/{insight_id}", status_code=204)
def delete_insight(insight_id: int):
    with db() as conn:
        conn.execute("DELETE FROM chapter_insight WHERE id=?", (insight_id,))


# ── Revision (Screen 7) ───────────────────────────────────────────────────────

class TopicCreate(BaseModel):
    pillar: str
    topic: str
    learned_date: Optional[str] = None
    intervals: List[int] = [1, 3, 7, 15, 30]

def _topic_full(conn, topic_id: int) -> dict:
    t = conn.execute("""
        SELECT rt.id, p.name AS pillar, rt.topic, rt.learned_date, rt.intervals
        FROM revision_topic rt JOIN pillar p ON rt.pillar_id=p.id
        WHERE rt.id=? AND rt.user_id=1
    """, (topic_id,)).fetchone()
    if not t:
        raise HTTPException(404, "Topic not found")
    reviews = conn.execute(
        "SELECT id, stage, due_date, done FROM review WHERE topic_id=? ORDER BY stage", (topic_id,)
    ).fetchall()
    d = row_dict(t)
    d["intervals"] = json.loads(d["intervals"])
    d["reviews"] = [row_dict(r) for r in reviews]
    d["cemented"] = len(d["reviews"]) > 0 and all(r["done"] for r in d["reviews"])
    return d

@app.get("/api/revision/topics")
def get_topics():
    with db() as conn:
        ids = conn.execute(
            "SELECT id FROM revision_topic WHERE user_id=1 ORDER BY learned_date DESC"
        ).fetchall()
        return [_topic_full(conn, r["id"]) for r in ids]

@app.post("/api/revision/topics", status_code=201)
def create_topic(body: TopicCreate):
    with db() as conn:
        pid = pillar_id(conn, body.pillar)
        learned = body.learned_date or str(date.today())
        cur = conn.execute(
            "INSERT INTO revision_topic (user_id,pillar_id,topic,learned_date,intervals) VALUES (1,?,?,?,?)",
            (pid, body.topic, learned, json.dumps(body.intervals))
        )
        topic_id = cur.lastrowid
        base = date.fromisoformat(learned)
        for i, days in enumerate(body.intervals, 1):
            conn.execute(
                "INSERT INTO review (topic_id,stage,due_date) VALUES (?,?,?)",
                (topic_id, i, str(base + timedelta(days=days)))
            )
        return _topic_full(conn, topic_id)

@app.delete("/api/revision/topics/{topic_id}", status_code=204)
def delete_topic(topic_id: int):
    with db() as conn:
        conn.execute("DELETE FROM review WHERE topic_id=?", (topic_id,))
        conn.execute("DELETE FROM revision_topic WHERE id=? AND user_id=1", (topic_id,))

@app.get("/api/revision/due-today")
def get_due_today():
    with db() as conn:
        today = str(date.today())
        rows = conn.execute("""
            SELECT r.id AS review_id, r.topic_id, rt.topic, p.name AS pillar,
                   r.stage, r.due_date, r.done,
                   (SELECT COUNT(*) FROM review r2 WHERE r2.topic_id=r.topic_id) AS total_stages
            FROM review r
            JOIN revision_topic rt ON r.topic_id=rt.id
            JOIN pillar p ON rt.pillar_id=p.id
            WHERE r.done=0 AND r.due_date<=? AND rt.user_id=1
            ORDER BY r.due_date, rt.topic
        """, (today,)).fetchall()
        result = []
        for r in rows:
            d = row_dict(r)
            d["is_missed"] = d["due_date"] < today
            result.append(d)
        return result

@app.get("/api/revision/calendar/{year}/{month}")
def get_revision_calendar(year: int, month: int):
    with db() as conn:
        pattern = f"{year}-{str(month).zfill(2)}-%"
        rows = conn.execute("""
            SELECT r.due_date, COUNT(*) AS count
            FROM review r JOIN revision_topic rt ON r.topic_id=rt.id
            WHERE rt.user_id=1 AND r.due_date LIKE ? AND r.done=0
            GROUP BY r.due_date
        """, (pattern,)).fetchall()
        return {r["due_date"]: r["count"] for r in rows}

@app.put("/api/revision/reviews/{review_id}/done")
def toggle_review_done(review_id: int):
    with db() as conn:
        row = conn.execute("SELECT done, topic_id FROM review WHERE id=?", (review_id,)).fetchone()
        if not row:
            raise HTTPException(404)
        conn.execute("UPDATE review SET done=? WHERE id=?", (0 if row["done"] else 1, review_id))
        return _topic_full(conn, row["topic_id"])


# ── Serve React frontend (must be last) ──────────────────────────────────────

if os.path.isdir(DIST):
    app.mount("/assets", StaticFiles(directory=os.path.join(DIST, "assets")), name="assets")

    @app.get("/{full_path:path}", include_in_schema=False)
    def serve_spa(full_path: str):
        return FileResponse(os.path.join(DIST, "index.html"))

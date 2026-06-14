from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, RedirectResponse
from pydantic import BaseModel
from typing import Optional, List
import json
import os
from datetime import date, timedelta, datetime

from database import db, init_db

# ── Google Calendar config ────────────────────────────────────────────────────
GOOGLE_CLIENT_ID     = os.environ.get("GOOGLE_CLIENT_ID", "")
GOOGLE_CLIENT_SECRET = os.environ.get("GOOGLE_CLIENT_SECRET", "")
BASE_URL             = os.environ.get("BASE_URL", "http://localhost:8000")
GCAL_REDIRECT        = f"{BASE_URL}/api/auth/google/callback"
GCAL_SCOPES          = ["https://www.googleapis.com/auth/calendar.events"]
QUAD_SYMBOL          = {"Q1": "™", "Q2": "©", "Q3": "®", "Q4": "•"}

DIST = os.path.join(os.path.dirname(__file__), "..", "frontend", "dist")

def _gcal_client_config():
    return {"web": {
        "client_id": GOOGLE_CLIENT_ID,
        "client_secret": GOOGLE_CLIENT_SECRET,
        "redirect_uris": [GCAL_REDIRECT],
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
    }}

def _get_gcal_service():
    if not GOOGLE_CLIENT_ID:
        return None
    try:
        from google.oauth2.credentials import Credentials
        from googleapiclient.discovery import build
        from google.auth.transport.requests import Request
    except ImportError:
        return None
    with db() as conn:
        row = conn.execute(
            "SELECT token_json FROM oauth_token WHERE user_id=1 AND provider='google'"
        ).fetchone()
    if not row:
        return None
    creds = Credentials.from_authorized_user_info(json.loads(row["token_json"]), GCAL_SCOPES)
    if creds.expired and creds.refresh_token:
        creds.refresh(Request())
        with db() as conn:
            conn.execute(
                "UPDATE oauth_token SET token_json=? WHERE user_id=1 AND provider='google'",
                (creds.to_json(),)
            )
    return build("calendar", "v3", credentials=creds)

app = FastAPI(title="Anvil API")

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
    row = conn.execute("SELECT id FROM pillar WHERE user_id=1 AND name=?", (name,)).fetchone()
    if not row:
        raise HTTPException(400, f"Unknown pillar: {name}")
    return row[0]

def _now_iso() -> str:
    return datetime.utcnow().isoformat()

def _soft_delete(conn, table: str, id_val: int, id_col: str = "id"):
    conn.execute(f"UPDATE {table} SET deleted_at=? WHERE {id_col}=?", (_now_iso(), id_val))

def _restore(conn, table: str, id_val: int, id_col: str = "id"):
    conn.execute(f"UPDATE {table} SET deleted_at=NULL WHERE {id_col}=?", (id_val,))


# ── Pillars ──────────────────────────────────────────────────────────────────

@app.get("/api/pillars")
def get_pillars():
    with db() as conn:
        rows = conn.execute("SELECT id, name, color FROM pillar WHERE user_id=1").fetchall()
        return [row_dict(r) for r in rows]


# ── Google Calendar Auth ──────────────────────────────────────────────────────

@app.get("/api/auth/google/status")
def google_status():
    with db() as conn:
        row = conn.execute(
            "SELECT id FROM oauth_token WHERE user_id=1 AND provider='google'"
        ).fetchone()
    return {"connected": row is not None, "configured": bool(GOOGLE_CLIENT_ID)}

@app.get("/api/auth/google")
def google_auth():
    from google_auth_oauthlib.flow import Flow
    flow = Flow.from_client_config(_gcal_client_config(), scopes=GCAL_SCOPES)
    flow.redirect_uri = GCAL_REDIRECT
    auth_url, _ = flow.authorization_url(access_type="offline", prompt="consent")
    return RedirectResponse(auth_url)

@app.get("/api/auth/google/callback")
def google_callback(code: str, state: Optional[str] = None, error: Optional[str] = None):
    if error:
        return RedirectResponse("/?gcal=error")
    from google_auth_oauthlib.flow import Flow
    flow = Flow.from_client_config(_gcal_client_config(), scopes=GCAL_SCOPES)
    flow.redirect_uri = GCAL_REDIRECT
    flow.fetch_token(code=code)
    creds = flow.credentials
    with db() as conn:
        conn.execute(
            "INSERT OR REPLACE INTO oauth_token (user_id, provider, token_json) VALUES (1, 'google', ?)",
            (creds.to_json(),)
        )
    return RedirectResponse("/?gcal=connected")

@app.delete("/api/auth/google", status_code=204)
def google_disconnect():
    with db() as conn:
        conn.execute("DELETE FROM oauth_token WHERE user_id=1 AND provider='google'")


# ── Tasks (Screen 1) ─────────────────────────────────────────────────────────

class TaskCreate(BaseModel):
    pillar: str
    title: str
    quadrant: str
    time_estimate_min: int = 30
    start_datetime: Optional[str] = None

class TaskUpdate(BaseModel):
    pillar: Optional[str] = None
    title: Optional[str] = None
    quadrant: Optional[str] = None
    time_estimate_min: Optional[int] = None
    status: Optional[str] = None
    gcal_event_id: Optional[str] = None

_TASK_SELECT = """
    SELECT t.id, p.name AS pillar, t.title, t.quadrant,
           t.time_estimate_min, t.gcal_event_id, t.status, t.start_datetime
    FROM task t JOIN pillar p ON t.pillar_id=p.id
    WHERE t.id=? AND t.user_id=1 AND t.deleted_at IS NULL
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
                   t.time_estimate_min, t.gcal_event_id, t.status, t.start_datetime
            FROM task t JOIN pillar p ON t.pillar_id=p.id
            WHERE t.user_id=1 AND t.status='active' AND t.deleted_at IS NULL
            ORDER BY t.created_at
        """).fetchall()
        return [row_dict(r) for r in rows]

@app.post("/api/tasks", status_code=201)
def create_task(body: TaskCreate):
    gcal_event_id = None
    if body.start_datetime:
        service = _get_gcal_service()
        if service:
            try:
                symbol = QUAD_SYMBOL.get(body.quadrant, "")
                start_dt = datetime.fromisoformat(body.start_datetime)
                end_dt = start_dt + timedelta(minutes=body.time_estimate_min)
                event = {
                    "summary": f"{symbol} {body.title}",
                    "start": {"dateTime": start_dt.isoformat(), "timeZone": "Asia/Kolkata"},
                    "end":   {"dateTime": end_dt.isoformat(),   "timeZone": "Asia/Kolkata"},
                }
                created = service.events().insert(calendarId="primary", body=event).execute()
                gcal_event_id = created["id"]
            except Exception:
                pass
    with db() as conn:
        pid = pillar_id(conn, body.pillar)
        cur = conn.execute(
            "INSERT INTO task (user_id,pillar_id,title,quadrant,time_estimate_min,start_datetime,gcal_event_id) VALUES (1,?,?,?,?,?,?)",
            (pid, body.title, body.quadrant, body.time_estimate_min, body.start_datetime, gcal_event_id)
        )
        return _task(conn, cur.lastrowid)

@app.put("/api/tasks/{task_id}")
def update_task(task_id: int, body: TaskUpdate):
    with db() as conn:
        if not conn.execute("SELECT id FROM task WHERE id=? AND user_id=1 AND deleted_at IS NULL", (task_id,)).fetchone():
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
        _soft_delete(conn, "task", task_id)

@app.post("/api/tasks/{task_id}/restore")
def restore_task(task_id: int):
    with db() as conn:
        _restore(conn, "task", task_id)
        return _task(conn, task_id)

@app.put("/api/tasks/{task_id}/schedule")
def schedule_task(task_id: int):
    with db() as conn:
        conn.execute("UPDATE task SET gcal_event_id='pending' WHERE id=? AND user_id=1", (task_id,))
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
    pillar: Optional[str] = None
    title: Optional[str] = None
    start_date: Optional[str] = None
    end_date: Optional[str] = None

_GOAL_SELECT = """
    SELECT g.id, p.name AS pillar, g.title, g.horizon,
           g.parent_goal_id, g.start_date, g.end_date
    FROM goal g JOIN pillar p ON g.pillar_id=p.id
    WHERE g.id=? AND g.user_id=1 AND g.deleted_at IS NULL
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
                WHERE g.user_id=1 AND p.name=? AND g.deleted_at IS NULL ORDER BY g.start_date
            """, (pillar,)).fetchall()
        else:
            rows = conn.execute("""
                SELECT g.id, p.name AS pillar, g.title, g.horizon,
                       g.parent_goal_id, g.start_date, g.end_date
                FROM goal g JOIN pillar p ON g.pillar_id=p.id
                WHERE g.user_id=1 AND g.deleted_at IS NULL ORDER BY g.start_date
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
        updates = {}
        if body.pillar:
            updates["pillar_id"] = pillar_id(conn, body.pillar)
        if body.title is not None:
            updates["title"] = body.title
        if body.start_date is not None:
            updates["start_date"] = body.start_date
        if body.end_date is not None:
            updates["end_date"] = body.end_date
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE goal SET {sets} WHERE id=? AND user_id=1", (*updates.values(), goal_id))
        return _goal(conn, goal_id)

@app.delete("/api/goals/{goal_id}", status_code=204)
def delete_goal(goal_id: int):
    with db() as conn:
        _soft_delete(conn, "goal", goal_id)
        # Also soft-delete all descendants
        to_delete = [goal_id]
        while to_delete:
            children = conn.execute(
                f"SELECT id FROM goal WHERE parent_goal_id IN ({','.join('?' * len(to_delete))}) AND deleted_at IS NULL",
                to_delete
            ).fetchall()
            to_delete = [r["id"] for r in children]
            for cid in to_delete:
                _soft_delete(conn, "goal", cid)

@app.post("/api/goals/{goal_id}/restore")
def restore_goal(goal_id: int):
    with db() as conn:
        _restore(conn, "goal", goal_id)
        return _goal(conn, goal_id)


# ── Habits (Screen 3) ─────────────────────────────────────────────────────────

class HabitCreate(BaseModel):
    pillar: str
    name: str
    target_per_week: int = 7
    type: str = "regular"
    target_count: Optional[int] = None
    period: Optional[str] = None

class HabitUpdate(BaseModel):
    name: Optional[str] = None
    target_per_week: Optional[int] = None
    reminder_time: Optional[str] = None
    type: Optional[str] = None
    target_count: Optional[int] = None
    period: Optional[str] = None

class HabitLogNote(BaseModel):
    note: str

class HabitLogCount(BaseModel):
    count: int
    note: Optional[str] = None

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
        SELECT h.id, p.name AS pillar, h.name, h.target_per_week, h.reminder_time,
               h.type, h.target_count, h.period
        FROM habit h JOIN pillar p ON h.pillar_id=p.id
        WHERE h.id=? AND h.user_id=1 AND h.deleted_at IS NULL
    """, (habit_id,)).fetchone()
    if not h:
        raise HTTPException(404, "Habit not found")
    logs = [r[0] for r in conn.execute(
        "SELECT date FROM habit_log WHERE habit_id=? AND done=1 ORDER BY date", (habit_id,)
    ).fetchall()]
    log_notes = {r["date"]: r["note"] for r in conn.execute(
        "SELECT date, note FROM habit_log WHERE habit_id=? AND note IS NOT NULL", (habit_id,)
    ).fetchall()}
    log_counts = {r["date"]: r["count"] for r in conn.execute(
        "SELECT date, count FROM habit_log WHERE habit_id=? AND count IS NOT NULL", (habit_id,)
    ).fetchall()}
    d = row_dict(h)
    d["logs"] = logs
    d["log_notes"] = log_notes
    d["log_counts"] = log_counts
    d["streak"] = _streak(logs)
    return d

@app.get("/api/habits")
def get_habits():
    with db() as conn:
        habits = conn.execute(
            "SELECT h.id FROM habit h WHERE h.user_id=1 AND h.deleted_at IS NULL ORDER BY h.id"
        ).fetchall()
        return [_habit_full(conn, h["id"]) for h in habits]

@app.post("/api/habits", status_code=201)
def create_habit(body: HabitCreate):
    with db() as conn:
        pid = pillar_id(conn, body.pillar)
        cur = conn.execute(
            "INSERT INTO habit (user_id,pillar_id,name,target_per_week,type,target_count,period) VALUES (1,?,?,?,?,?,?)",
            (pid, body.name, body.target_per_week, body.type, body.target_count, body.period)
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
        _soft_delete(conn, "habit", habit_id)

@app.post("/api/habits/{habit_id}/restore")
def restore_habit(habit_id: int):
    with db() as conn:
        _restore(conn, "habit", habit_id)
        return _habit_full(conn, habit_id)

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

@app.put("/api/habits/{habit_id}/log/{log_date}/note")
def set_habit_log_note(habit_id: int, log_date: str, body: HabitLogNote):
    with db() as conn:
        existing = conn.execute(
            "SELECT id FROM habit_log WHERE habit_id=? AND date=?", (habit_id, log_date)
        ).fetchone()
        if existing:
            conn.execute("UPDATE habit_log SET note=? WHERE id=?", (body.note, existing["id"]))
        else:
            conn.execute("INSERT INTO habit_log (habit_id,date,done,note) VALUES (?,?,0,?)", (habit_id, log_date, body.note))
        return _habit_full(conn, habit_id)

@app.put("/api/habits/{habit_id}/log/{log_date}/count")
def set_habit_log_count(habit_id: int, log_date: str, body: HabitLogCount):
    """Set a per-day count for minimum/maximum habits. `done` is derived from the rule:
    minimum → done when count >= target; maximum → done when 0 < count <= target."""
    with db() as conn:
        h = conn.execute(
            "SELECT type, target_count FROM habit WHERE id=? AND user_id=1", (habit_id,)
        ).fetchone()
        if not h:
            raise HTTPException(404, "Habit not found")
        target = h["target_count"] or 0
        count = body.count
        if h["type"] == "minimum":
            done = 1 if count >= target else 0
        elif h["type"] == "maximum":
            done = 1 if 0 < count <= target else 0
        else:
            done = 1 if count > 0 else 0
        existing = conn.execute(
            "SELECT id FROM habit_log WHERE habit_id=? AND date=?", (habit_id, log_date)
        ).fetchone()
        if existing:
            conn.execute(
                "UPDATE habit_log SET count=?, done=?, note=? WHERE id=?",
                (count, done, body.note, existing["id"])
            )
        else:
            conn.execute(
                "INSERT INTO habit_log (habit_id,date,done,count,note) VALUES (?,?,?,?,?)",
                (habit_id, log_date, done, count, body.note)
            )
        return _habit_full(conn, habit_id)

@app.delete("/api/habits/{habit_id}/log/{log_date}")
def clear_habit_log(habit_id: int, log_date: str):
    """Remove a day's entry entirely (count, note, done)."""
    with db() as conn:
        conn.execute("DELETE FROM habit_log WHERE habit_id=? AND date=?", (habit_id, log_date))
        return _habit_full(conn, habit_id)

@app.get("/api/habits/yearly/{year}")
def get_habits_yearly(year: int):
    """Returns per-habit per-month completion counts for the bar chart."""
    with db() as conn:
        habits = conn.execute(
            "SELECT h.id, h.name, h.target_per_week, h.type, h.target_count, h.period "
            "FROM habit h WHERE h.user_id=1 AND h.deleted_at IS NULL ORDER BY h.id"
        ).fetchall()
        result = []
        for h in habits:
            monthly = {}
            for m in range(1, 13):
                pattern = f"{year}-{str(m).zfill(2)}-%"
                done = conn.execute(
                    "SELECT COUNT(*) FROM habit_log WHERE habit_id=? AND date LIKE ? AND done=1",
                    (h["id"], pattern)
                ).fetchone()[0]
                import calendar
                days_in_month = calendar.monthrange(year, m)[1]
                monthly[m] = {"done": done, "days": days_in_month}
            result.append({"id": h["id"], "name": h["name"], "monthly": monthly})
        return result


# ── Journal (Screen 4) ────────────────────────────────────────────────────────

class MoodUpdate(BaseModel):
    mood: int

class BulletCreate(BaseModel):
    section: str
    text: str

def _journal_full(conn, entry_date: str) -> dict:
    entry = conn.execute(
        "SELECT id, date, mood FROM journal_entry WHERE user_id=1 AND date=? AND deleted_at IS NULL",
        (entry_date,)
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
            "SELECT date, mood FROM journal_entry WHERE user_id=1 AND date LIKE ? AND mood IS NOT NULL AND deleted_at IS NULL",
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
            "SELECT id FROM journal_entry WHERE user_id=1 AND date=? AND deleted_at IS NULL", (entry_date,)
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

STAGE_ORDER = ["D", "I", "K", "W"]

class SkillCreate(BaseModel):
    pillar: str
    title: str
    source_type: str

class SkillNoteCreate(BaseModel):
    text: str
    stage: str

class StageComplete(BaseModel):
    stage: str

def _skill_full(conn, skill_id: int) -> dict:
    row = conn.execute("""
        SELECT s.id, p.name AS pillar, s.title, s.source_type, s.stage, s.completed_stages
        FROM skill s JOIN pillar p ON s.pillar_id=p.id
        WHERE s.id=? AND s.user_id=1 AND s.deleted_at IS NULL
    """, (skill_id,)).fetchone()
    if not row:
        raise HTTPException(404, "Skill not found")
    notes_raw = conn.execute(
        "SELECT id, stage, text, created_at FROM skill_note WHERE skill_id=? ORDER BY stage, id",
        (skill_id,)
    ).fetchall()
    d = row_dict(row)
    try:
        d["completed_stages"] = json.loads(d["completed_stages"] or "{}")
    except Exception:
        d["completed_stages"] = {}
    notes_by_stage = {s: [] for s in STAGE_ORDER}
    for n in notes_raw:
        notes_by_stage[n["stage"]].append({"id": n["id"], "text": n["text"]})
    d["notes"] = notes_by_stage
    return d

@app.get("/api/skills")
def get_skills():
    with db() as conn:
        rows = conn.execute(
            "SELECT id FROM skill WHERE user_id=1 AND deleted_at IS NULL ORDER BY id"
        ).fetchall()
        return [_skill_full(conn, r["id"]) for r in rows]

@app.post("/api/skills", status_code=201)
def create_skill(body: SkillCreate):
    with db() as conn:
        pid = pillar_id(conn, body.pillar)
        cur = conn.execute(
            "INSERT INTO skill (user_id,pillar_id,title,source_type,stage,completed_stages) VALUES (1,?,?,?,'D','{}')",
            (pid, body.title, body.source_type)
        )
        return _skill_full(conn, cur.lastrowid)

@app.put("/api/skills/{skill_id}")
def update_skill(skill_id: int, body: dict):
    with db() as conn:
        if "stage" in body:
            conn.execute("UPDATE skill SET stage=? WHERE id=? AND user_id=1", (body["stage"], skill_id))
        return _skill_full(conn, skill_id)

@app.delete("/api/skills/{skill_id}", status_code=204)
def delete_skill(skill_id: int):
    with db() as conn:
        _soft_delete(conn, "skill", skill_id)

@app.post("/api/skills/{skill_id}/restore")
def restore_skill(skill_id: int):
    with db() as conn:
        _restore(conn, "skill", skill_id)
        return _skill_full(conn, skill_id)

@app.post("/api/skills/{skill_id}/notes", status_code=201)
def add_skill_note(skill_id: int, body: SkillNoteCreate):
    with db() as conn:
        conn.execute(
            "INSERT INTO skill_note (skill_id, stage, text) VALUES (?,?,?)",
            (skill_id, body.stage, body.text)
        )
        return _skill_full(conn, skill_id)

@app.delete("/api/skill-notes/{note_id}", status_code=204)
def delete_skill_note(note_id: int):
    with db() as conn:
        conn.execute("DELETE FROM skill_note WHERE id=?", (note_id,))

@app.post("/api/skills/{skill_id}/complete-stage")
def complete_skill_stage(skill_id: int, body: StageComplete):
    with db() as conn:
        row = conn.execute(
            "SELECT stage, completed_stages FROM skill WHERE id=? AND user_id=1 AND deleted_at IS NULL",
            (skill_id,)
        ).fetchone()
        if not row:
            raise HTTPException(404)
        try:
            completed = json.loads(row["completed_stages"] or "{}")
        except Exception:
            completed = {}
        completed[body.stage] = True
        # Advance to next stage if completing current
        cur_idx = STAGE_ORDER.index(row["stage"]) if row["stage"] in STAGE_ORDER else 0
        stage_idx = STAGE_ORDER.index(body.stage) if body.stage in STAGE_ORDER else 0
        new_stage = row["stage"]
        if stage_idx == cur_idx and cur_idx < len(STAGE_ORDER) - 1:
            new_stage = STAGE_ORDER[cur_idx + 1]
        conn.execute(
            "UPDATE skill SET completed_stages=?, stage=? WHERE id=? AND user_id=1",
            (json.dumps(completed), new_stage, skill_id)
        )
        return _skill_full(conn, skill_id)


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
    sc = conn.execute(
        "SELECT * FROM scripture WHERE id=? AND user_id=1 AND deleted_at IS NULL", (scripture_id,)
    ).fetchone()
    if not sc:
        raise HTTPException(404, "Scripture not found")
    chapters = conn.execute(
        "SELECT * FROM chapter WHERE scripture_id=? AND deleted_at IS NULL ORDER BY read_date",
        (scripture_id,)
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
        ids = conn.execute(
            "SELECT id FROM scripture WHERE user_id=1 AND deleted_at IS NULL ORDER BY id"
        ).fetchall()
        return [_scripture_full(conn, r["id"]) for r in ids]

@app.post("/api/scriptures", status_code=201)
def create_scripture(body: ScriptureCreate):
    with db() as conn:
        cur = conn.execute(
            "INSERT INTO scripture (user_id,name,color) VALUES (1,?,?)", (body.name, body.color)
        )
        return _scripture_full(conn, cur.lastrowid)

@app.delete("/api/scriptures/{scripture_id}", status_code=204)
def delete_scripture(scripture_id: int):
    with db() as conn:
        _soft_delete(conn, "scripture", scripture_id)

@app.post("/api/scriptures/{scripture_id}/restore")
def restore_scripture(scripture_id: int):
    with db() as conn:
        _restore(conn, "scripture", scripture_id)
        return _scripture_full(conn, scripture_id)

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

@app.delete("/api/chapters/{chapter_id}", status_code=204)
def delete_chapter(chapter_id: int):
    with db() as conn:
        _soft_delete(conn, "chapter", chapter_id)

@app.post("/api/chapters/{chapter_id}/restore")
def restore_chapter(chapter_id: int):
    with db() as conn:
        _restore(conn, "chapter", chapter_id)
        sc = conn.execute("SELECT scripture_id FROM chapter WHERE id=?", (chapter_id,)).fetchone()
        return _scripture_full(conn, sc[0]) if sc else {}

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
        WHERE rt.id=? AND rt.user_id=1 AND rt.deleted_at IS NULL
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
            "SELECT id FROM revision_topic WHERE user_id=1 AND deleted_at IS NULL ORDER BY learned_date DESC"
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
        _soft_delete(conn, "revision_topic", topic_id)

@app.post("/api/revision/topics/{topic_id}/restore")
def restore_topic(topic_id: int):
    with db() as conn:
        _restore(conn, "revision_topic", topic_id)
        return _topic_full(conn, topic_id)

@app.get("/api/revision/due-today")
def get_due_today():
    with db() as conn:
        today = str(date.today())
        rows = conn.execute("""
            SELECT r.id AS review_id, r.topic_id, rt.topic, p.name AS pillar,
                   r.stage, r.due_date, r.done,
                   (SELECT COUNT(*) FROM review r2 WHERE r2.topic_id=r.topic_id) AS total_stages
            FROM review r
            JOIN revision_topic rt ON r.topic_id=rt.id AND rt.deleted_at IS NULL
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
            FROM review r JOIN revision_topic rt ON r.topic_id=rt.id AND rt.deleted_at IS NULL
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

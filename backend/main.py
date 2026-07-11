from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, RedirectResponse, JSONResponse
from pydantic import BaseModel
from typing import Optional, List
import json
import os
import hmac
import hashlib
import base64
import time
import calendar
from contextvars import ContextVar
from datetime import date, timedelta, datetime, timezone

from database import db, init_db

# ── Auth (multi-user) ─────────────────────────────────────────────────────────
SECRET_KEY = os.environ.get("ANVIL_SECRET", "anvil-dev-secret-change-in-production")
TOKEN_TTL  = 60 * 60 * 24 * 30  # 30 days

_UID: ContextVar[int] = ContextVar("uid", default=0)

def cu() -> int:
    """Current authenticated user id for this request (0 if unauthenticated)."""
    return _UID.get()

def _b64e(b: bytes) -> str:
    return base64.urlsafe_b64encode(b).decode().rstrip("=")

def _b64d(s: str) -> bytes:
    return base64.urlsafe_b64decode(s + "=" * (-len(s) % 4))

def make_token(uid: int) -> str:
    payload = _b64e(json.dumps({"uid": uid, "exp": int(time.time()) + TOKEN_TTL}).encode())
    sig = _b64e(hmac.new(SECRET_KEY.encode(), payload.encode(), hashlib.sha256).digest())
    return f"{payload}.{sig}"

def verify_token(token: str) -> Optional[int]:
    try:
        payload, sig = token.split(".")
        expected = _b64e(hmac.new(SECRET_KEY.encode(), payload.encode(), hashlib.sha256).digest())
        if not hmac.compare_digest(sig, expected):
            return None
        data = json.loads(_b64d(payload))
        if data.get("exp", 0) < int(time.time()):
            return None
        return int(data["uid"])
    except Exception:
        return None

def _bearer(request: Request) -> str:
    auth = request.headers.get("authorization", "")
    return auth[7:] if auth.lower().startswith("bearer ") else ""

# Paths that do not require authentication.
_PUBLIC_API = set()

async def auth_dependency(request: Request):
    """Global dependency: authenticate every /api route and stash the uid in a ContextVar."""
    path = request.url.path
    if not path.startswith("/api/"):
        return  # SPA / static assets
    if path in _PUBLIC_API or path.startswith("/api/auth/google"):
        return  # public or browser-redirect OAuth (handled separately)
    uid = verify_token(_bearer(request))
    if not uid:
        raise HTTPException(401, "Not authenticated")
    _UID.set(uid)

# ── Google Calendar config ────────────────────────────────────────────────────
GOOGLE_CLIENT_ID     = os.environ.get("GOOGLE_CLIENT_ID", "")
GOOGLE_CLIENT_SECRET = os.environ.get("GOOGLE_CLIENT_SECRET", "")
BASE_URL             = os.environ.get("BASE_URL", "http://localhost:8000")
GCAL_REDIRECT        = f"{BASE_URL}/api/auth/google/callback"

GCAL_SCOPES          = [
    "openid",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
]

DIST = os.path.join(os.path.dirname(__file__), "..", "frontend", "dist")

def _gcal_client_config():
    return {"web": {
        "client_id": GOOGLE_CLIENT_ID,
        "client_secret": GOOGLE_CLIENT_SECRET,
        "redirect_uris": [GCAL_REDIRECT],
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
    }}

app = FastAPI(title="Anvil API", dependencies=[Depends(auth_dependency)])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup():
    init_db()


# ── Auth endpoints ────────────────────────────────────────────────────────────

PILLAR_SEED = [
    ("Financial", "#C9A227"), ("Academic", "#3A7CA5"), ("Relationship", "#C2536B"),
    ("Health", "#4C9A6B"), ("Spiritual", "#8268B0"),
]

def _seed_pillars(conn, uid: int):
    if not conn.execute("SELECT 1 FROM pillar WHERE user_id=? LIMIT 1", (uid,)).fetchone():
        conn.executemany("INSERT INTO pillar (user_id, name, color) VALUES (?, ?, ?)",
                         [(uid, n, c) for n, c in PILLAR_SEED])

def _user_public(row) -> dict:
    return {"id": row["id"], "name": row["name"], "email": row["email"]}

@app.get("/api/auth/me")
def auth_me():
    with db() as conn:
        row = conn.execute("SELECT id, name, email FROM user WHERE id=?", (cu(),)).fetchone()
        if not row:
            raise HTTPException(404)
        return _user_public(row)


# ── Helpers ─────────────────────────────────────────────────────────────────

def row_dict(row) -> dict:
    return dict(row) if row else {}

def pillar_id(conn, name: str) -> int:
    row = conn.execute(f"SELECT id FROM pillar WHERE user_id={cu()} AND name=?", (name,)).fetchone()
    if not row:
        raise HTTPException(400, f"Unknown pillar: {name}")
    return row[0]

def _now_iso() -> str:
    return datetime.utcnow().isoformat()

def _soft_delete(conn, table: str, id_val: int, id_col: str = "id"):
    conn.execute(f"UPDATE {table} SET deleted_at=? WHERE {id_col}=?", (_now_iso(), id_val))

def _restore(conn, table: str, id_val: int, id_col: str = "id"):
    conn.execute(f"UPDATE {table} SET deleted_at=NULL WHERE {id_col}=?", (id_val,))

def _get_month_start_day(conn) -> int:
    row = conn.execute(f"SELECT value FROM user_setting WHERE user_id={cu()} AND key='month_start_day'").fetchone()
    try:
        d = int(json.loads(row["value"])) if row and row["value"] else 1
    except (ValueError, TypeError):
        d = 1
    return min(28, max(1, d))

def _cycle_start(d: date, start_day: int) -> date:
    """The ISO start date of the billing cycle that `d` falls in, given the configured start-of-month day."""
    if d.day >= start_day:
        y, m = d.year, d.month
    else:
        y, m = (d.year - 1, 12) if d.month == 1 else (d.year, d.month - 1)
    return date(y, m, start_day)


# ── Pillars ──────────────────────────────────────────────────────────────────

@app.get("/api/pillars")
def get_pillars():
    with db() as conn:
        rows = conn.execute(f"SELECT id, name, color FROM pillar WHERE user_id={cu()}").fetchall()
        return [row_dict(r) for r in rows]


# ── Google Sign-In ───────────────────────────────────────────────────────────

@app.get("/api/auth/google")
def google_auth():
    # No app token needed — this is the sign-in entry point itself.
    from google_auth_oauthlib.flow import Flow
    flow = Flow.from_client_config(_gcal_client_config(), scopes=GCAL_SCOPES)
    flow.redirect_uri = GCAL_REDIRECT
    auth_url, _ = flow.authorization_url(access_type="offline", prompt="consent")
    return RedirectResponse(auth_url)

@app.get("/api/auth/google/callback")
def google_callback(code: str = "", error: Optional[str] = None):
    if error or not code:
        return RedirectResponse("/?auth=error")
    from google_auth_oauthlib.flow import Flow
    from google.oauth2 import id_token as g_id_token
    from google.auth.transport import requests as g_requests
    flow = Flow.from_client_config(_gcal_client_config(), scopes=GCAL_SCOPES)
    flow.redirect_uri = GCAL_REDIRECT
    try:
        flow.fetch_token(code=code)
    except Exception:
        return RedirectResponse("/?auth=error")
    creds = flow.credentials
    info = g_id_token.verify_oauth2_token(creds.id_token, g_requests.Request(), GOOGLE_CLIENT_ID)
    sub = info["sub"]
    email = (info.get("email") or "").strip().lower()
    name = info.get("name") or "Anvil User"
    with db() as conn:
        row = conn.execute("SELECT id FROM user WHERE google_sub=?", (sub,)).fetchone()
        if not row:
            # First sign-in for this Google account — link to an existing account by
            # email if one exists (covers the pre-Google-SSO password-based users),
            # otherwise claim the legacy single-user row, otherwise create a new user.
            row = conn.execute("SELECT id FROM user WHERE lower(email)=?", (email,)).fetchone() if email else None
            if row:
                conn.execute("UPDATE user SET google_sub=?, name=? WHERE id=?", (sub, name, row["id"]))
                uid = row["id"]
            else:
                legacy = conn.execute("SELECT id FROM user WHERE id=1 AND email IS NULL").fetchone()
                if legacy:
                    conn.execute("UPDATE user SET google_sub=?, name=?, email=? WHERE id=1", (sub, name, email))
                    uid = 1
                else:
                    cur = conn.execute("INSERT INTO user (name, email, google_sub) VALUES (?,?,?)", (name, email, sub))
                    uid = cur.lastrowid
                _seed_pillars(conn, uid)
        else:
            uid = row["id"]
        conn.execute(
            "INSERT OR REPLACE INTO oauth_token (user_id, provider, token_json) VALUES (?, 'google', ?)",
            (uid, creds.to_json())
        )
    return RedirectResponse(f"/?login={make_token(uid)}")


# ── Tasks (Screen 1) ─────────────────────────────────────────────────────────

class TaskCreate(BaseModel):
    pillar: str
    title: str
    quadrant: str
    time_estimate_min: int = 30
    start_datetime: Optional[str] = None
    goal_id: Optional[int] = None

class TaskUpdate(BaseModel):
    pillar: Optional[str] = None
    title: Optional[str] = None
    quadrant: Optional[str] = None
    time_estimate_min: Optional[int] = None
    status: Optional[str] = None
    gcal_event_id: Optional[str] = None
    goal_id: Optional[int] = None
    start_datetime: Optional[str] = None

def _task_sql():
    return f"""
    SELECT t.id, p.name AS pillar, t.title, t.quadrant,
           t.time_estimate_min, t.gcal_event_id, t.status, t.start_datetime, t.goal_id
    FROM task t JOIN pillar p ON t.pillar_id=p.id
    WHERE t.id=? AND t.user_id={cu()} AND t.deleted_at IS NULL
"""

def _task(conn, task_id: int) -> dict:
    row = conn.execute(_task_sql(), (task_id,)).fetchone()
    if not row:
        raise HTTPException(404, "Task not found")
    return row_dict(row)

@app.get("/api/tasks")
def get_tasks():
    with db() as conn:
        rows = conn.execute(f"""
            SELECT t.id, p.name AS pillar, t.title, t.quadrant,
                   t.time_estimate_min, t.gcal_event_id, t.status, t.start_datetime, t.goal_id
            FROM task t JOIN pillar p ON t.pillar_id=p.id
            WHERE t.user_id={cu()} AND t.status='active' AND t.deleted_at IS NULL
            ORDER BY t.created_at
        """).fetchall()
        return [row_dict(r) for r in rows]

@app.post("/api/tasks", status_code=201)
def create_task(body: TaskCreate):
    gcal_event_id = None
    with db() as conn:
        pid = pillar_id(conn, body.pillar)
        cur = conn.execute(
            f"INSERT INTO task (user_id,pillar_id,title,quadrant,time_estimate_min,start_datetime,gcal_event_id,goal_id) VALUES ({cu()},?,?,?,?,?,?,?)",
            (pid, body.title, body.quadrant, body.time_estimate_min, body.start_datetime, gcal_event_id, body.goal_id)
        )
        return _task(conn, cur.lastrowid)

@app.put("/api/tasks/{task_id}")
def update_task(task_id: int, body: TaskUpdate):
    with db() as conn:
        if not conn.execute(f"SELECT id FROM task WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (task_id,)).fetchone():
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
        conn.execute(f"UPDATE task SET gcal_event_id='pending' WHERE id=? AND user_id={cu()}", (task_id,))
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

def _goal_sql():
    return f"""
    SELECT g.id, p.name AS pillar, g.title, g.horizon,
           g.parent_goal_id, g.start_date, g.end_date
    FROM goal g JOIN pillar p ON g.pillar_id=p.id
    WHERE g.id=? AND g.user_id={cu()} AND g.deleted_at IS NULL
"""

def _goal(conn, goal_id: int) -> dict:
    row = conn.execute(_goal_sql(), (goal_id,)).fetchone()
    if not row:
        raise HTTPException(404, "Goal not found")
    return row_dict(row)

@app.get("/api/goals")
def get_goals(pillar: Optional[str] = None):
    with db() as conn:
        if pillar:
            rows = conn.execute(f"""
                SELECT g.id, p.name AS pillar, g.title, g.horizon,
                       g.parent_goal_id, g.start_date, g.end_date
                FROM goal g JOIN pillar p ON g.pillar_id=p.id
                WHERE g.user_id={cu()} AND p.name=? AND g.deleted_at IS NULL ORDER BY g.start_date
            """, (pillar,)).fetchall()
        else:
            rows = conn.execute(f"""
                SELECT g.id, p.name AS pillar, g.title, g.horizon,
                       g.parent_goal_id, g.start_date, g.end_date
                FROM goal g JOIN pillar p ON g.pillar_id=p.id
                WHERE g.user_id={cu()} AND g.deleted_at IS NULL ORDER BY g.start_date
            """).fetchall()
        return [row_dict(r) for r in rows]

@app.post("/api/goals", status_code=201)
def create_goal(body: GoalCreate):
    with db() as conn:
        pid = pillar_id(conn, body.pillar)
        cur = conn.execute(
            f"INSERT INTO goal (user_id,pillar_id,title,horizon,parent_goal_id,start_date,end_date) VALUES ({cu()},?,?,?,?,?,?)",
            (pid, body.title, body.horizon, body.parent_goal_id, body.start_date, body.end_date)
        )
        return _goal(conn, cur.lastrowid)

# ── Goal cascade helpers ──────────────────────────────────────────────────────

def _month_range(year, month):
    last = calendar.monthrange(year, month)[1]
    return (f"{year}-{month:02d}-01", f"{year}-{month:02d}-{last:02d}")

# Ordered sub-period slots a parent's children should occupy, by parent horizon.
def _child_slots(parent_horizon, start_date):
    d = date.fromisoformat(start_date)
    y = d.year
    if parent_horizon == "Yearly":          # children = Quarterly → 4 quarters
        return [( f"{y}-{q*3+1:02d}-01", _month_range(y, q*3+3)[1]) for q in range(4)]
    if parent_horizon == "Quarterly":       # children = Monthly → 3 months
        return [_month_range(y, d.month + i) for i in range(3)]
    if parent_horizon == "Monthly":         # children = Weekly → 4 weeks
        last = calendar.monthrange(y, d.month)[1]
        slots = []
        for w in range(4):
            sd = w * 7 + 1
            ed = min(sd + 6, last)
            slots.append((f"{y}-{d.month:02d}-{sd:02d}", f"{y}-{d.month:02d}-{ed:02d}"))
        return slots
    return []  # Weekly → leaf

# Re-slot a goal's children into its (new) period, in order, then recurse.
def _reslot_children(conn, parent_id):
    parent = conn.execute(
        f"SELECT horizon, start_date FROM goal WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (parent_id,)
    ).fetchone()
    if not parent:
        return
    slots = _child_slots(parent["horizon"], parent["start_date"])
    if not slots:
        return
    children = conn.execute(
        f"SELECT id FROM goal WHERE parent_goal_id=? AND user_id={cu()} AND deleted_at IS NULL ORDER BY start_date, id",
        (parent_id,)
    ).fetchall()
    for i, ch in enumerate(children):
        sd, ed = slots[min(i, len(slots) - 1)]
        conn.execute(f"UPDATE goal SET start_date=?, end_date=? WHERE id=? AND user_id={cu()}", (sd, ed, ch["id"]))
        _reslot_children(conn, ch["id"])  # grandchildren follow the child's new period

# Propagate a pillar change to every descendant.
def _cascade_pillar(conn, goal_id, pid):
    stack = [goal_id]
    while stack:
        cur_id = stack.pop()
        kids = conn.execute(
            f"SELECT id FROM goal WHERE parent_goal_id=? AND user_id={cu()} AND deleted_at IS NULL", (cur_id,)
        ).fetchall()
        for k in kids:
            conn.execute(f"UPDATE goal SET pillar_id=? WHERE id=? AND user_id={cu()}", (pid, k["id"]))
            stack.append(k["id"])

@app.put("/api/goals/{goal_id}")
def update_goal(goal_id: int, body: GoalUpdate):
    with db() as conn:
        old = _goal(conn, goal_id)
        updates = {}
        pid = None
        if body.pillar:
            pid = pillar_id(conn, body.pillar)
            updates["pillar_id"] = pid
        if body.title is not None:
            updates["title"] = body.title
        if body.start_date is not None:
            updates["start_date"] = body.start_date
        if body.end_date is not None:
            updates["end_date"] = body.end_date
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE goal SET {sets} WHERE id=? AND user_id={cu()}", (*updates.values(), goal_id))
        # Cascade pillar to all descendants.
        if pid is not None:
            _cascade_pillar(conn, goal_id, pid)
        # If the timeline shifted, re-slot children (and their descendants) into the new period.
        if body.start_date is not None and body.start_date != old["start_date"]:
            _reslot_children(conn, goal_id)
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
    days: Optional[list] = None  # weekly habits: scheduled weekdays (Mon=0..Sun=6)
    min_interval_min: int = 0

class HabitUpdate(BaseModel):
    name: Optional[str] = None
    pillar: Optional[str] = None
    target_per_week: Optional[int] = None
    reminder_time: Optional[str] = None
    type: Optional[str] = None
    target_count: Optional[int] = None
    period: Optional[str] = None
    days: Optional[list] = None
    min_interval_min: Optional[int] = None
    active: Optional[bool] = None

class HabitLogNote(BaseModel):
    note: str

class HabitLogCount(BaseModel):
    count: int
    note: Optional[str] = None

def _streaks(logs: list):
    """Returns (current, max): current = latest consecutive run, max = longest ever."""
    days = sorted({x for x in logs if x and len(x) >= 10})
    parsed = []
    for x in days:
        try: parsed.append(date.fromisoformat(x[:10]))
        except ValueError: pass
    if not parsed:
        return 0, 0
    best = run = 1
    for i in range(1, len(parsed)):
        run = run + 1 if (parsed[i] - parsed[i - 1]).days == 1 else 1
        if run > best:
            best = run
    cur = 1  # run ending at the most recent log
    for i in range(len(parsed) - 1, 0, -1):
        if (parsed[i] - parsed[i - 1]).days == 1:
            cur += 1
        else:
            break
    return cur, best

def _scheduled_streaks(logs: list, weekdays: list):
    """Streaks for habits scheduled on specific weekdays (Mon=0..Sun=6): a chain is
    consecutive *scheduled* occurrences all completed — non-scheduled days are ignored,
    and today (if scheduled) is given grace until done."""
    wset = {int(w) for w in (weekdays or []) if 0 <= int(w) <= 6}
    if not wset:
        return 0, 0
    done = set()
    for x in logs:
        if x and len(x) >= 10:
            try: done.add(date.fromisoformat(x[:10]))
            except ValueError: pass
    today = date.today()
    if done:
        today = max(today, max(done))
    # Current chain: walk back from the anchor over scheduled days.
    cur = 0
    d = today
    for _ in range(800):
        if d.weekday() in wset:
            if d in done:
                cur += 1
            elif d == today:
                pass  # not done yet today — don't break the chain
            else:
                break
        d -= timedelta(days=1)
    # Best chain: scan forward from the earliest completion.
    best = run = 0
    if done:
        d = min(done)
        while d <= today:
            if d.weekday() in wset:
                run = run + 1 if d in done else 0
                best = max(best, run)
            d += timedelta(days=1)
    return cur, best

def _habit_full(conn, habit_id: int) -> dict:
    h = conn.execute(f"""
        SELECT h.id, p.name AS pillar, h.name, h.target_per_week, h.reminder_time,
               h.type, h.target_count, h.period, h.days, h.min_interval_min, h.active
        FROM habit h JOIN pillar p ON h.pillar_id=p.id
        WHERE h.id=? AND h.user_id={cu()} AND h.deleted_at IS NULL
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
    log_count_times = {r["date"]: r["last_count_at"] for r in conn.execute(
        "SELECT date, last_count_at FROM habit_log WHERE habit_id=? AND last_count_at IS NOT NULL", (habit_id,)
    ).fetchall()}
    d = row_dict(h)
    try:
        d["days"] = json.loads(d["days"]) if d.get("days") else []
    except Exception:
        d["days"] = []
    d["active"] = bool(d.get("active", 1))
    d["logs"] = logs
    d["log_notes"] = log_notes
    d["log_counts"] = log_counts
    d["log_count_times"] = log_count_times
    if d["type"] == "weekly" and d["days"]:
        cur, mx = _scheduled_streaks(logs, d["days"])
    else:
        cur, mx = _streaks(logs)
    d["streak"] = cur
    d["max_streak"] = mx
    return d

@app.get("/api/habits")
def get_habits():
    with db() as conn:
        habits = conn.execute(
            f"SELECT h.id FROM habit h WHERE h.user_id={cu()} AND h.deleted_at IS NULL ORDER BY h.id"
        ).fetchall()
        return [_habit_full(conn, h["id"]) for h in habits]

@app.post("/api/habits", status_code=201)
def create_habit(body: HabitCreate):
    with db() as conn:
        pid = pillar_id(conn, body.pillar)
        days = json.dumps(body.days) if body.days else None
        cur = conn.execute(
            f"INSERT INTO habit (user_id,pillar_id,name,target_per_week,type,target_count,period,days,min_interval_min) VALUES ({cu()},?,?,?,?,?,?,?,?)",
            (pid, body.name, body.target_per_week, body.type, body.target_count, body.period, days, max(0, body.min_interval_min or 0))
        )
        return _habit_full(conn, cur.lastrowid)

@app.put("/api/habits/{habit_id}")
def update_habit(habit_id: int, body: HabitUpdate):
    with db() as conn:
        updates = {k: v for k, v in body.dict().items() if v is not None}
        if "pillar" in updates:  # resolve the pillar name to its id column
            updates["pillar_id"] = pillar_id(conn, updates.pop("pillar"))
        if "days" in updates:  # store the weekday list as JSON
            updates["days"] = json.dumps(updates["days"])
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE habit SET {sets} WHERE id=? AND user_id={cu()}", (*updates.values(), habit_id))
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
    minimum → done when count >= target; maximum → done when 0 < count <= target.

    For interval-gated habits (min_interval_min > 0) the count is NOT settable here —
    it can only change through /increment so the spacing rule can't be bypassed.
    Note-only updates (count unchanged) are still allowed."""
    with db() as conn:
        h = conn.execute(
            f"SELECT type, target_count, min_interval_min FROM habit WHERE id=? AND user_id={cu()}", (habit_id,)
        ).fetchone()
        if not h:
            raise HTTPException(404, "Habit not found")
        existing = conn.execute(
            "SELECT id, count, last_count_at FROM habit_log WHERE habit_id=? AND date=?", (habit_id, log_date)
        ).fetchone()
        interval = h["min_interval_min"] or 0
        cur_count = (existing["count"] if existing and existing["count"] is not None else 0)
        target = h["target_count"] or 0
        count = body.count
        # Interval gating applies only to TODAY's live logging. Past days are freely
        # editable (to correct history). For a gated habit today:
        #   • decreasing or keeping the count is always allowed (a correction);
        #   • increasing is allowed at most by +1 and only when out of cooldown,
        #     and it stamps last_count_at so the next gap is enforced.
        # All times use the USER's wall clock (_user_now) — production runs in
        # UTC, so naive date.today()/datetime.now() would misclassify "today"
        # and record stamps the (local-time) frontend countdown misreads.
        now = _user_now()
        is_today = log_date == now.date().isoformat()
        stamp = None
        if interval > 0 and is_today and count > cur_count:
            if count - cur_count > 1:
                raise HTTPException(409, "Timed habits add one entry at a time — wait for the gap, then add the next.")
            last_at = existing["last_count_at"] if existing else None
            if last_at:
                try:
                    nxt = datetime.fromisoformat(last_at) + timedelta(minutes=interval)
                    wait = (nxt - now).total_seconds()
                    if wait > 0:
                        raise HTTPException(429, f"Wait {int(wait // 60)}m {int(wait % 60)}s before the next entry.")
                except ValueError:
                    pass
            stamp = now.isoformat(timespec="seconds")
        if h["type"] == "minimum":
            done = 1 if count >= target else 0
        elif h["type"] == "maximum":
            done = 1 if 0 < count <= target else 0
        else:
            done = 1 if count > 0 else 0
        if existing:
            if stamp:
                conn.execute("UPDATE habit_log SET count=?, done=?, note=?, last_count_at=? WHERE id=?",
                             (count, done, body.note, stamp, existing["id"]))
            else:
                conn.execute("UPDATE habit_log SET count=?, done=?, note=? WHERE id=?",
                             (count, done, body.note, existing["id"]))
        else:
            conn.execute(
                "INSERT INTO habit_log (habit_id,date,done,count,note,last_count_at) VALUES (?,?,?,?,?,?)",
                (habit_id, log_date, done, count, body.note, stamp)
            )
        return _habit_full(conn, habit_id)

@app.post("/api/habits/{habit_id}/log/{log_date}/increment")
def increment_habit_log(habit_id: int, log_date: str):
    """Add one to a per-day count, enforcing the habit's min interval between
    increments. Stamps last_count_at = now. 429 if you're inside the cooldown."""
    with db() as conn:
        h = conn.execute(
            f"SELECT type, target_count, min_interval_min FROM habit WHERE id=? AND user_id={cu()}", (habit_id,)
        ).fetchone()
        if not h:
            raise HTTPException(404, "Habit not found")
        existing = conn.execute(
            "SELECT id, count, last_count_at FROM habit_log WHERE habit_id=? AND date=?", (habit_id, log_date)
        ).fetchone()
        interval = h["min_interval_min"] or 0
        now = _user_now()  # user wall clock — see set_habit_log_count
        if interval > 0 and existing and existing["last_count_at"]:
            try:
                last = datetime.fromisoformat(existing["last_count_at"])
                wait = (last + timedelta(minutes=interval) - now).total_seconds()
                if wait > 0:
                    raise HTTPException(429, f"Wait {int(wait // 60)}m {int(wait % 60)}s before the next entry.")
            except ValueError:
                pass
        count = (existing["count"] if existing and existing["count"] is not None else 0) + 1
        target = h["target_count"] or 0
        if h["type"] == "minimum":
            done = 1 if count >= target else 0
        elif h["type"] == "maximum":
            done = 1 if 0 < count <= target else 0
        else:
            done = 1 if count > 0 else 0
        stamp = now.isoformat(timespec="seconds")
        if existing:
            conn.execute(
                "UPDATE habit_log SET count=?, done=?, last_count_at=? WHERE id=?",
                (count, done, stamp, existing["id"])
            )
        else:
            conn.execute(
                "INSERT INTO habit_log (habit_id,date,done,count,last_count_at) VALUES (?,?,?,?,?)",
                (habit_id, log_date, done, count, stamp)
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
            f"FROM habit h WHERE h.user_id={cu()} AND h.deleted_at IS NULL AND h.active=1 ORDER BY h.id"
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
        f"SELECT id, date, mood FROM journal_entry WHERE user_id={cu()} AND date=? AND deleted_at IS NULL",
        (entry_date,)
    ).fetchone()
    if not entry:
        cur = conn.execute(f"INSERT INTO journal_entry (user_id,date) VALUES ({cu()},?)", (entry_date,))
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
            f"SELECT date, mood FROM journal_entry WHERE user_id={cu()} AND date LIKE ? AND mood IS NOT NULL AND deleted_at IS NULL",
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
            f"SELECT id FROM journal_entry WHERE user_id={cu()} AND date=? AND deleted_at IS NULL", (entry_date,)
        ).fetchone()
        if existing:
            conn.execute("UPDATE journal_entry SET mood=? WHERE id=?", (body.mood, existing["id"]))
        else:
            conn.execute(f"INSERT INTO journal_entry (user_id,date,mood) VALUES ({cu()},?,?)", (entry_date, body.mood))
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
    link: str = ""

class SkillNoteCreate(BaseModel):
    text: str
    stage: str
    grp: Optional[str] = None  # Data-stage group id (chapter / learning); None otherwise

class SkillGroupsSet(BaseModel):
    groups: list  # ordered list of {id, label} for the Data stage

class StageComplete(BaseModel):
    stage: str

def _skill_full(conn, skill_id: int) -> dict:
    row = conn.execute(f"""
        SELECT s.id, p.name AS pillar, s.title, s.source_type, s.stage, s.completed_stages, s.data_groups, s.link
        FROM skill s JOIN pillar p ON s.pillar_id=p.id
        WHERE s.id=? AND s.user_id={cu()} AND s.deleted_at IS NULL
    """, (skill_id,)).fetchone()
    if not row:
        raise HTTPException(404, "Skill not found")
    notes_raw = conn.execute(
        "SELECT id, stage, text, done, grp, created_at FROM skill_note WHERE skill_id=? ORDER BY stage, id",
        (skill_id,)
    ).fetchall()
    d = row_dict(row)
    try:
        d["completed_stages"] = json.loads(d["completed_stages"] or "{}")
    except Exception:
        d["completed_stages"] = {}
    try:
        d["data_groups"] = json.loads(d["data_groups"] or "[]")
    except Exception:
        d["data_groups"] = []
    notes_by_stage = {s: [] for s in STAGE_ORDER}
    for n in notes_raw:
        notes_by_stage[n["stage"]].append({"id": n["id"], "text": n["text"], "done": bool(n["done"]), "grp": n["grp"], "created_at": n["created_at"]})
    d["notes"] = notes_by_stage
    return d

@app.get("/api/skills")
def get_skills():
    with db() as conn:
        rows = conn.execute(
            f"SELECT id FROM skill WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY id"
        ).fetchall()
        return [_skill_full(conn, r["id"]) for r in rows]

@app.post("/api/skills", status_code=201)
def create_skill(body: SkillCreate):
    with db() as conn:
        pid = pillar_id(conn, body.pillar)
        cur = conn.execute(
            f"INSERT INTO skill (user_id,pillar_id,title,source_type,stage,completed_stages,link) VALUES ({cu()},?,?,?,'D','{{}}',?)",
            (pid, body.title, body.source_type, (body.link or "").strip())
        )
        return _skill_full(conn, cur.lastrowid)

@app.put("/api/skills/{skill_id}")
def update_skill(skill_id: int, body: dict):
    with db() as conn:
        if "stage" in body:
            conn.execute(f"UPDATE skill SET stage=? WHERE id=? AND user_id={cu()}", (body["stage"], skill_id))
        if "title" in body:
            title = (body["title"] or "").strip()
            if title:
                conn.execute(f"UPDATE skill SET title=? WHERE id=? AND user_id={cu()}", (title, skill_id))
        if "link" in body:
            conn.execute(f"UPDATE skill SET link=? WHERE id=? AND user_id={cu()}", ((body["link"] or "").strip(), skill_id))
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
            "INSERT INTO skill_note (skill_id, stage, text, grp) VALUES (?,?,?,?)",
            (skill_id, body.stage, body.text, body.grp)
        )
        return _skill_full(conn, skill_id)

@app.put("/api/skills/{skill_id}/groups")
def set_skill_groups(skill_id: int, body: SkillGroupsSet):
    """Replace the Data-stage groups (chapters/learnings). Notes whose group was
    removed are deleted so no orphaned points linger."""
    with db() as conn:
        owned = conn.execute(
            f"SELECT id FROM skill WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (skill_id,)
        ).fetchone()
        if not owned:
            raise HTTPException(404, "Skill not found")
        groups = [{"id": str(g.get("id")), "label": (g.get("label") or "").strip()} for g in body.groups if g.get("id")]
        keep_ids = {g["id"] for g in groups}
        conn.execute(f"UPDATE skill SET data_groups=? WHERE id=? AND user_id={cu()}", (json.dumps(groups), skill_id))
        # Drop Data-stage points belonging to removed groups.
        rows = conn.execute("SELECT id, grp FROM skill_note WHERE skill_id=? AND stage='D' AND grp IS NOT NULL", (skill_id,)).fetchall()
        for r in rows:
            if r["grp"] not in keep_ids:
                conn.execute("DELETE FROM skill_note WHERE id=?", (r["id"],))
        return _skill_full(conn, skill_id)

@app.delete("/api/skill-notes/{note_id}", status_code=204)
def delete_skill_note(note_id: int):
    with db() as conn:
        conn.execute("DELETE FROM skill_note WHERE id=?", (note_id,))

@app.put("/api/skill-notes/{note_id}")
def update_skill_note(note_id: int, body: dict):
    text = (body.get("text") or "").strip()
    if not text:
        raise HTTPException(400, "text required")
    with db() as conn:
        row = conn.execute("SELECT skill_id FROM skill_note WHERE id=?", (note_id,)).fetchone()
        if not row:
            raise HTTPException(404, "Note not found")
        conn.execute("UPDATE skill_note SET text=? WHERE id=?", (text, note_id))
        return _skill_full(conn, row["skill_id"])

@app.put("/api/skill-notes/{note_id}/toggle")
def toggle_skill_note(note_id: int):
    """Flip a checklist item's done state (used for the Wisdom checklist)."""
    with db() as conn:
        row = conn.execute("SELECT skill_id, done FROM skill_note WHERE id=?", (note_id,)).fetchone()
        if not row:
            raise HTTPException(404, "Note not found")
        conn.execute("UPDATE skill_note SET done=? WHERE id=?", (0 if row["done"] else 1, note_id))
        return _skill_full(conn, row["skill_id"])

@app.post("/api/skills/{skill_id}/complete-stage")
def complete_skill_stage(skill_id: int, body: StageComplete):
    with db() as conn:
        row = conn.execute(
            f"SELECT stage, completed_stages FROM skill WHERE id=? AND user_id={cu()} AND deleted_at IS NULL",
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
            f"UPDATE skill SET completed_stages=?, stage=? WHERE id=? AND user_id={cu()}",
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
        f"SELECT * FROM scripture WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (scripture_id,)
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
            f"SELECT id FROM scripture WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY id"
        ).fetchall()
        return [_scripture_full(conn, r["id"]) for r in ids]

@app.post("/api/scriptures", status_code=201)
def create_scripture(body: ScriptureCreate):
    with db() as conn:
        cur = conn.execute(
            f"INSERT INTO scripture (user_id,name,color) VALUES ({cu()},?,?)", (body.name, body.color)
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
    t = conn.execute(f"""
        SELECT rt.id, p.name AS pillar, rt.topic, rt.learned_date, rt.intervals
        FROM revision_topic rt JOIN pillar p ON rt.pillar_id=p.id
        WHERE rt.id=? AND rt.user_id={cu()} AND rt.deleted_at IS NULL
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
            f"SELECT id FROM revision_topic WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY learned_date DESC"
        ).fetchall()
        return [_topic_full(conn, r["id"]) for r in ids]

@app.post("/api/revision/topics", status_code=201)
def create_topic(body: TopicCreate):
    with db() as conn:
        pid = pillar_id(conn, body.pillar)
        learned = body.learned_date or str(date.today())
        cur = conn.execute(
            f"INSERT INTO revision_topic (user_id,pillar_id,topic,learned_date,intervals) VALUES ({cu()},?,?,?,?)",
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

class TopicUpdate(BaseModel):
    pillar: Optional[str] = None
    topic: Optional[str] = None
    learned_date: Optional[str] = None
    intervals: Optional[List[int]] = None

@app.put("/api/revision/topics/{topic_id}")
def update_topic(topic_id: int, body: TopicUpdate):
    if body.intervals is not None and len(body.intervals) == 0:
        raise HTTPException(400, "intervals cannot be empty")
    with db() as conn:
        row = conn.execute(
            f"SELECT learned_date, intervals FROM revision_topic WHERE id=? AND user_id={cu()} AND deleted_at IS NULL",
            (topic_id,)
        ).fetchone()
        if not row:
            raise HTTPException(404, "Topic not found")

        new_learned = body.learned_date if body.learned_date is not None else row["learned_date"]
        new_intervals = body.intervals if body.intervals is not None else json.loads(row["intervals"])
        schedule_changed = (
            (body.learned_date is not None and body.learned_date != row["learned_date"]) or
            (body.intervals is not None)
        )

        sets, vals = [], []
        if body.pillar is not None:
            sets.append("pillar_id=?"); vals.append(pillar_id(conn, body.pillar))
        if body.topic is not None:
            sets.append("topic=?"); vals.append(body.topic.strip())
        if body.learned_date is not None:
            sets.append("learned_date=?"); vals.append(new_learned)
        if body.intervals is not None:
            sets.append("intervals=?"); vals.append(json.dumps(new_intervals))
        if sets:
            conn.execute(f"UPDATE revision_topic SET {', '.join(sets)} WHERE id=? AND user_id={cu()}", (*vals, topic_id))

        # Regenerate the review schedule, preserving each stage's done flag where it still exists.
        if schedule_changed:
            done_by_stage = {r["stage"]: r["done"] for r in
                             conn.execute("SELECT stage, done FROM review WHERE topic_id=?", (topic_id,)).fetchall()}
            conn.execute("DELETE FROM review WHERE topic_id=?", (topic_id,))
            base = date.fromisoformat(new_learned)
            for i, days in enumerate(new_intervals, 1):
                conn.execute(
                    "INSERT INTO review (topic_id,stage,due_date,done) VALUES (?,?,?,?)",
                    (topic_id, i, str(base + timedelta(days=days)), done_by_stage.get(i, 0))
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
        rows = conn.execute(f"""
            SELECT r.id AS review_id, r.topic_id, rt.topic, p.name AS pillar,
                   r.stage, r.due_date, r.done,
                   (SELECT COUNT(*) FROM review r2 WHERE r2.topic_id=r.topic_id) AS total_stages
            FROM review r
            JOIN revision_topic rt ON r.topic_id=rt.id AND rt.deleted_at IS NULL
            JOIN pillar p ON rt.pillar_id=p.id
            WHERE r.done=0 AND r.due_date<=? AND rt.user_id={cu()}
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
        rows = conn.execute(f"""
            SELECT r.due_date, COUNT(*) AS count
            FROM review r JOIN revision_topic rt ON r.topic_id=rt.id AND rt.deleted_at IS NULL
            WHERE rt.user_id={cu()} AND r.due_date LIKE ? AND r.done=0
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


# ── Affirmations (Screen 8) ───────────────────────────────────────────────────

class AffirmationCreate(BaseModel):
    text: str
    category: str = "Motivational"

class AffirmationUpdate(BaseModel):
    text: Optional[str] = None
    category: Optional[str] = None
    favorite: Optional[bool] = None

@app.get("/api/affirmations")
def get_affirmations():
    with db() as conn:
        rows = conn.execute(
            "SELECT id, category, text, favorite FROM affirmation "
            f"WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY category, id"
        ).fetchall()
        return [{"id": r["id"], "category": r["category"], "text": r["text"], "favorite": bool(r["favorite"])} for r in rows]

@app.post("/api/affirmations", status_code=201)
def create_affirmation(body: AffirmationCreate):
    with db() as conn:
        cur = conn.execute(
            f"INSERT INTO affirmation (user_id, category, text) VALUES ({cu()}, ?, ?)",
            (body.category, body.text)
        )
        r = conn.execute("SELECT id, category, text, favorite FROM affirmation WHERE id=?", (cur.lastrowid,)).fetchone()
        return {"id": r["id"], "category": r["category"], "text": r["text"], "favorite": bool(r["favorite"])}

@app.put("/api/affirmations/{aff_id}")
def update_affirmation(aff_id: int, body: AffirmationUpdate):
    with db() as conn:
        updates = {k: v for k, v in body.dict().items() if v is not None}
        if "favorite" in updates:
            updates["favorite"] = 1 if updates["favorite"] else 0
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE affirmation SET {sets} WHERE id=? AND user_id={cu()}", (*updates.values(), aff_id))
        r = conn.execute("SELECT id, category, text, favorite FROM affirmation WHERE id=?", (aff_id,)).fetchone()
        if not r:
            raise HTTPException(404)
        return {"id": r["id"], "category": r["category"], "text": r["text"], "favorite": bool(r["favorite"])}

@app.delete("/api/affirmations/{aff_id}", status_code=204)
def delete_affirmation(aff_id: int):
    with db() as conn:
        _soft_delete(conn, "affirmation", aff_id)

@app.post("/api/affirmations/{aff_id}/restore")
def restore_affirmation(aff_id: int):
    with db() as conn:
        _restore(conn, "affirmation", aff_id)
        r = conn.execute("SELECT id, category, text, favorite FROM affirmation WHERE id=?", (aff_id,)).fetchone()
        return {"id": r["id"], "category": r["category"], "text": r["text"], "favorite": bool(r["favorite"])} if r else {}


# ── Vault (Finance / expenses, income) ───────────────────────────────────────

class TxnCreate(BaseModel):
    kind: str               # 'income' | 'expense'
    category: str = "Other"
    amount: float = 0
    note: str = ""
    date: Optional[str] = None   # YYYY-MM-DD

class TxnUpdate(BaseModel):
    kind: Optional[str] = None
    category: Optional[str] = None
    amount: Optional[float] = None
    note: Optional[str] = None
    date: Optional[str] = None

def _txn_row(r):
    return {"id": r["id"], "kind": r["kind"], "category": r["category"],
            "amount": r["amount"], "note": r["note"], "date": r["txn_date"]}

@app.get("/api/finance/txns")
def get_txns():
    with db() as conn:
        rows = conn.execute(
            "SELECT id, kind, category, amount, note, txn_date FROM finance_txn "
            f"WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY txn_date DESC, id DESC"
        ).fetchall()
        return [_txn_row(r) for r in rows]

@app.post("/api/finance/txns", status_code=201)
def create_txn(body: TxnCreate):
    if body.kind not in ("income", "expense"):
        raise HTTPException(400, "kind must be income or expense")
    d = body.date or date.today().isoformat()
    with db() as conn:
        cur = conn.execute(
            f"INSERT INTO finance_txn (user_id, kind, category, amount, note, txn_date) VALUES ({cu()}, ?, ?, ?, ?, ?)",
            (body.kind, body.category or "Other", abs(body.amount or 0), body.note or "", d)
        )
        r = conn.execute("SELECT id, kind, category, amount, note, txn_date FROM finance_txn WHERE id=?", (cur.lastrowid,)).fetchone()
        return _txn_row(r)

@app.put("/api/finance/txns/{txn_id}")
def update_txn(txn_id: int, body: TxnUpdate):
    updates = {k: v for k, v in body.dict().items() if v is not None}
    if "kind" in updates and updates["kind"] not in ("income", "expense"):
        raise HTTPException(400, "kind must be income or expense")
    if "date" in updates:
        updates["txn_date"] = updates.pop("date")
    if "amount" in updates:
        updates["amount"] = abs(updates["amount"])
    with db() as conn:
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE finance_txn SET {sets} WHERE id=? AND user_id={cu()}", (*updates.values(), txn_id))
        r = conn.execute("SELECT id, kind, category, amount, note, txn_date FROM finance_txn WHERE id=?", (txn_id,)).fetchone()
        if not r:
            raise HTTPException(404)
        return _txn_row(r)

@app.delete("/api/finance/txns/{txn_id}", status_code=204)
def delete_txn(txn_id: int):
    with db() as conn:
        _soft_delete(conn, "finance_txn", txn_id)

@app.post("/api/finance/txns/{txn_id}/restore")
def restore_txn(txn_id: int):
    with db() as conn:
        _restore(conn, "finance_txn", txn_id)
        r = conn.execute("SELECT id, kind, category, amount, note, txn_date FROM finance_txn WHERE id=?", (txn_id,)).fetchone()
        return _txn_row(r) if r else {}


# ── Wallet investments (asset generation: invested vs current value) ────────

class InvestmentCreate(BaseModel):
    name: str
    kind: str = "Other"
    invested: float = 0
    current_value: float = 0
    note: str = ""
    date: Optional[str] = None   # YYYY-MM-DD

class InvestmentUpdate(BaseModel):
    name: Optional[str] = None
    kind: Optional[str] = None
    invested: Optional[float] = None
    current_value: Optional[float] = None
    note: Optional[str] = None
    date: Optional[str] = None

def _investment_row(r):
    return {"id": r["id"], "name": r["name"], "kind": r["kind"], "invested": r["invested"],
            "current_value": r["current_value"], "note": r["note"], "date": r["start_date"]}

@app.get("/api/finance/investments")
def get_investments():
    with db() as conn:
        _post_fixed_items(conn)
        rows = conn.execute(
            "SELECT id, name, kind, invested, current_value, note, start_date FROM investment "
            f"WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY start_date DESC, id DESC"
        ).fetchall()
        return [_investment_row(r) for r in rows]

@app.post("/api/finance/investments", status_code=201)
def create_investment(body: InvestmentCreate):
    d = body.date or date.today().isoformat()
    with db() as conn:
        cur = conn.execute(
            f"INSERT INTO investment (user_id, name, kind, invested, current_value, note, start_date) VALUES ({cu()}, ?, ?, ?, ?, ?, ?)",
            (body.name.strip(), body.kind or "Other", abs(body.invested or 0), abs(body.current_value or 0), body.note or "", d)
        )
        r = conn.execute("SELECT id, name, kind, invested, current_value, note, start_date FROM investment WHERE id=?", (cur.lastrowid,)).fetchone()
        return _investment_row(r)

@app.put("/api/finance/investments/{inv_id}")
def update_investment(inv_id: int, body: InvestmentUpdate):
    updates = {k: v for k, v in body.dict().items() if v is not None}
    if "date" in updates:
        updates["start_date"] = updates.pop("date")
    if "invested" in updates:
        updates["invested"] = abs(updates["invested"])
    if "current_value" in updates:
        updates["current_value"] = abs(updates["current_value"])
    if "name" in updates:
        updates["name"] = updates["name"].strip()
    with db() as conn:
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE investment SET {sets} WHERE id=? AND user_id={cu()}", (*updates.values(), inv_id))
        r = conn.execute("SELECT id, name, kind, invested, current_value, note, start_date FROM investment WHERE id=?", (inv_id,)).fetchone()
        if not r:
            raise HTTPException(404)
        return _investment_row(r)

@app.delete("/api/finance/investments/{inv_id}", status_code=204)
def delete_investment(inv_id: int):
    with db() as conn:
        _soft_delete(conn, "investment", inv_id)

@app.post("/api/finance/investments/{inv_id}/restore")
def restore_investment(inv_id: int):
    with db() as conn:
        _restore(conn, "investment", inv_id)
        r = conn.execute("SELECT id, name, kind, invested, current_value, note, start_date FROM investment WHERE id=?", (inv_id,)).fetchone()
        return _investment_row(r) if r else {}


# ── Fixed items (recurring monthly EMI/rent/SIP — auto-post each billing cycle) ──

class FixedItemCreate(BaseModel):
    kind: str                       # 'expense' | 'investment'
    name: str
    amount: float = 0
    category_id: Optional[int] = None   # required when kind='expense'
    invest_kind: Optional[str] = None   # used when kind='investment'
    note: str = ""

class FixedItemUpdate(BaseModel):
    name: Optional[str] = None
    amount: Optional[float] = None
    category_id: Optional[int] = None
    invest_kind: Optional[str] = None
    note: Optional[str] = None
    active: Optional[bool] = None

def _fixed_item_row(r):
    return {"id": r["id"], "kind": r["kind"], "name": r["name"], "amount": r["amount"],
            "category_id": r["category_id"], "invest_kind": r["invest_kind"], "note": r["note"],
            "active": bool(r["active"])}

@app.get("/api/finance/fixed-items")
def get_fixed_items():
    with db() as conn:
        rows = conn.execute(
            f"SELECT id, kind, name, amount, category_id, invest_kind, note, active FROM fixed_item "
            f"WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY id"
        ).fetchall()
        return [_fixed_item_row(r) for r in rows]

@app.post("/api/finance/fixed-items", status_code=201)
def create_fixed_item(body: FixedItemCreate):
    if body.kind not in ("expense", "investment"):
        raise HTTPException(400, "kind must be expense or investment")
    if body.kind == "expense" and not body.category_id:
        raise HTTPException(400, "category_id is required for a fixed expense")
    with db() as conn:
        cur = conn.execute(
            f"INSERT INTO fixed_item (user_id, kind, name, amount, category_id, invest_kind, note) "
            f"VALUES ({cu()}, ?, ?, ?, ?, ?, ?)",
            (body.kind, body.name.strip(), abs(body.amount or 0), body.category_id, body.invest_kind, body.note or "")
        )
        r = conn.execute("SELECT id, kind, name, amount, category_id, invest_kind, note, active FROM fixed_item WHERE id=?", (cur.lastrowid,)).fetchone()
        _post_fixed_items(conn, only_id=cur.lastrowid)  # post immediately for the current cycle
        return _fixed_item_row(r)

@app.put("/api/finance/fixed-items/{fid}")
def update_fixed_item(fid: int, body: FixedItemUpdate):
    updates = {k: v for k, v in body.dict().items() if v is not None}
    if "amount" in updates:
        updates["amount"] = abs(updates["amount"])
    if "name" in updates:
        updates["name"] = updates["name"].strip()
    if "active" in updates:
        updates["active"] = 1 if updates["active"] else 0
    with db() as conn:
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE fixed_item SET {sets} WHERE id=? AND user_id={cu()}", (*updates.values(), fid))
        r = conn.execute("SELECT id, kind, name, amount, category_id, invest_kind, note, active FROM fixed_item WHERE id=?", (fid,)).fetchone()
        if not r:
            raise HTTPException(404)
        return _fixed_item_row(r)

@app.delete("/api/finance/fixed-items/{fid}", status_code=204)
def delete_fixed_item(fid: int):
    with db() as conn:
        _soft_delete(conn, "fixed_item", fid)

def _post_fixed_items(conn, only_id: int = None):
    """Auto-create the actual expense_log / investment row for the current
    billing cycle for every active fixed_item that hasn't posted yet this cycle."""
    start_day = _get_month_start_day(conn)
    cycle_start = _cycle_start(date.today(), start_day).isoformat()
    q = f"SELECT * FROM fixed_item WHERE user_id={cu()} AND active=1 AND deleted_at IS NULL"
    if only_id:
        q += f" AND id={only_id}"
    items = conn.execute(q).fetchall()
    for it in items:
        already = conn.execute(
            "SELECT id FROM fixed_posting WHERE fixed_item_id=? AND cycle_start=?", (it["id"], cycle_start)
        ).fetchone()
        if already:
            continue
        if it["kind"] == "expense":
            cat = conn.execute(
                f"SELECT id FROM expense_category WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (it["category_id"],)
            ).fetchone()
            if not cat:
                continue
            cur = conn.execute(
                f"INSERT INTO expense_log (user_id, category_id, amount, note, log_date) VALUES ({cu()}, ?, ?, ?, ?)",
                (it["category_id"], it["amount"], it["note"] or f"Fixed: {it['name']}", cycle_start)
            )
            conn.execute(
                "INSERT INTO fixed_posting (fixed_item_id, cycle_start, expense_log_id) VALUES (?, ?, ?)",
                (it["id"], cycle_start, cur.lastrowid)
            )
        else:
            cur = conn.execute(
                f"INSERT INTO investment (user_id, name, kind, invested, current_value, note, start_date) "
                f"VALUES ({cu()}, ?, ?, ?, ?, ?, ?)",
                (it["name"], it["invest_kind"] or "Other", it["amount"], it["amount"], it["note"] or f"Fixed: {it['name']}", cycle_start)
            )
            conn.execute(
                "INSERT INTO fixed_posting (fixed_item_id, cycle_start, investment_id) VALUES (?, ?, ?)",
                (it["id"], cycle_start, cur.lastrowid)
            )


# ── Expenses (icon-based daily spend tracker) ────────────────────────────────

class ExpenseCategoryCreate(BaseModel):
    name: str
    icon: str = "ShoppingBag"
    color: str = "#C9772E"

class ExpenseCategoryUpdate(BaseModel):
    name: Optional[str] = None
    icon: Optional[str] = None
    color: Optional[str] = None

class ExpenseLogCreate(BaseModel):
    category_id: int
    amount: float = 0
    note: str = ""
    date: Optional[str] = None   # YYYY-MM-DD

class ExpenseLogUpdate(BaseModel):
    category_id: Optional[int] = None
    amount: Optional[float] = None
    note: Optional[str] = None
    date: Optional[str] = None

def _own_expense_category(conn, cid):
    row = conn.execute(
        f"SELECT id FROM expense_category WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (cid,)
    ).fetchone()
    if not row:
        raise HTTPException(404, "Category not found")

@app.get("/api/expenses")
def get_expenses():
    with db() as conn:
        _post_fixed_items(conn)
        cats = conn.execute(
            f"SELECT id, name, icon, color, position FROM expense_category WHERE user_id={cu()} AND deleted_at IS NULL "
            "ORDER BY position, id"
        ).fetchall()
        logs = conn.execute(
            f"SELECT id, category_id, amount, note, log_date FROM expense_log WHERE user_id={cu()} AND deleted_at IS NULL "
            "ORDER BY log_date DESC, id DESC"
        ).fetchall()
        return {
            "categories": [{"id": c["id"], "name": c["name"], "icon": c["icon"], "color": c["color"], "position": c["position"]} for c in cats],
            "logs": [{"id": l["id"], "category_id": l["category_id"], "amount": l["amount"], "note": l["note"], "date": l["log_date"]} for l in logs],
        }

class ExpenseCategoryArrange(BaseModel):
    order: list  # ordered list of category ids

# NOTE: declared before the `/{cid}` routes so "arrange" isn't captured as {cid}.
@app.put("/api/expenses/categories/arrange")
def arrange_expense_categories(body: ExpenseCategoryArrange):
    """Persist a new left-to-right ordering of the user's expense categories."""
    with db() as conn:
        owned = {r["id"] for r in conn.execute(
            f"SELECT id FROM expense_category WHERE user_id={cu()} AND deleted_at IS NULL"
        ).fetchall()}
        pos = 0
        for cid in (body.order or []):
            try:
                cid = int(cid)
            except (TypeError, ValueError):
                continue
            if cid in owned:
                conn.execute(
                    f"UPDATE expense_category SET position=? WHERE id=? AND user_id={cu()}", (pos, cid)
                )
                pos += 1
        return {"ok": True}

@app.post("/api/expenses/categories", status_code=201)
def create_expense_category(body: ExpenseCategoryCreate):
    name = body.name.strip()
    if not name:
        raise HTTPException(400, "Name is required")
    with db() as conn:
        pos = conn.execute(f"SELECT COALESCE(MAX(position),-1)+1 p FROM expense_category WHERE user_id={cu()}").fetchone()["p"]
        cur = conn.execute(
            f"INSERT INTO expense_category (user_id, name, icon, color, position) VALUES ({cu()}, ?, ?, ?, ?)",
            (name, body.icon or "ShoppingBag", body.color or "#C9772E", pos)
        )
        r = conn.execute("SELECT id, name, icon, color, position FROM expense_category WHERE id=?", (cur.lastrowid,)).fetchone()
        return dict(r)

@app.put("/api/expenses/categories/{cid}")
def update_expense_category(cid: int, body: ExpenseCategoryUpdate):
    with db() as conn:
        _own_expense_category(conn, cid)
        updates = {k: v for k, v in body.dict().items() if v is not None}
        if "name" in updates:
            updates["name"] = updates["name"].strip()
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE expense_category SET {sets} WHERE id=?", (*updates.values(), cid))
        r = conn.execute("SELECT id, name, icon, color, position FROM expense_category WHERE id=?", (cid,)).fetchone()
        return dict(r)

@app.delete("/api/expenses/categories/{cid}", status_code=204)
def delete_expense_category(cid: int):
    with db() as conn:
        _own_expense_category(conn, cid)
        # Reassign any logged expenses to an "Other" category (created if absent)
        # so transactions are never orphaned.
        has_logs = conn.execute(
            f"SELECT 1 FROM expense_log WHERE category_id=? AND user_id={cu()} AND deleted_at IS NULL LIMIT 1", (cid,)
        ).fetchone()
        if has_logs:
            other = conn.execute(
                f"SELECT id FROM expense_category WHERE user_id={cu()} AND deleted_at IS NULL "
                "AND lower(name)='other' AND id<>? ORDER BY id LIMIT 1", (cid,)
            ).fetchone()
            if other:
                other_id = other["id"]
            else:
                pos = conn.execute(f"SELECT COALESCE(MAX(position),-1)+1 p FROM expense_category WHERE user_id={cu()}").fetchone()["p"]
                cur = conn.execute(
                    f"INSERT INTO expense_category (user_id, name, icon, color, position) VALUES ({cu()}, 'Other', 'ShoppingBag', '#9A968C', ?)",
                    (pos,)
                )
                other_id = cur.lastrowid
            conn.execute(
                f"UPDATE expense_log SET category_id=? WHERE category_id=? AND user_id={cu()}", (other_id, cid)
            )
        _soft_delete(conn, "expense_category", cid)

def _exp_log_row(r):
    return {"id": r["id"], "category_id": r["category_id"], "amount": r["amount"], "note": r["note"], "date": r["log_date"]}

@app.post("/api/expenses/logs", status_code=201)
def create_expense_log(body: ExpenseLogCreate):
    with db() as conn:
        _own_expense_category(conn, body.category_id)
        d = body.date or date.today().isoformat()
        cur = conn.execute(
            f"INSERT INTO expense_log (user_id, category_id, amount, note, log_date) VALUES ({cu()}, ?, ?, ?, ?)",
            (body.category_id, abs(body.amount or 0), body.note or "", d)
        )
        r = conn.execute("SELECT id, category_id, amount, note, log_date FROM expense_log WHERE id=?", (cur.lastrowid,)).fetchone()
        return _exp_log_row(r)

@app.put("/api/expenses/logs/{lid}")
def update_expense_log(lid: int, body: ExpenseLogUpdate):
    updates = {k: v for k, v in body.dict().items() if v is not None}
    if "category_id" in updates:
        with db() as conn:
            _own_expense_category(conn, updates["category_id"])
    if "date" in updates:
        updates["log_date"] = updates.pop("date")
    if "amount" in updates:
        updates["amount"] = abs(updates["amount"])
    with db() as conn:
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE expense_log SET {sets} WHERE id=? AND user_id={cu()}", (*updates.values(), lid))
        r = conn.execute("SELECT id, category_id, amount, note, log_date FROM expense_log WHERE id=?", (lid,)).fetchone()
        if not r:
            raise HTTPException(404)
        return _exp_log_row(r)

@app.delete("/api/expenses/logs/{lid}", status_code=204)
def delete_expense_log(lid: int):
    with db() as conn:
        _soft_delete(conn, "expense_log", lid)

@app.post("/api/expenses/logs/{lid}/restore")
def restore_expense_log(lid: int):
    with db() as conn:
        _restore(conn, "expense_log", lid)
        r = conn.execute("SELECT id, category_id, amount, note, log_date FROM expense_log WHERE id=?", (lid,)).fetchone()
        return _exp_log_row(r) if r else {}


# ── Trading Journal ──────────────────────────────────────────────────────────
# Per-day learning + individual trades (swing | fno | intraday) each with its
# own P/L and SL/TGT. A day with no trades can still hold a learning note.

TRADE_KINDS = ("swing", "fno", "intraday")
TRADE_DIRECTIONS = ("long", "short")
# Short selling is only offered for FnO / Intraday; swing is always long.
SHORTABLE_KINDS = ("fno", "intraday")

def _norm_direction(kind: str, direction: Optional[str]) -> str:
    d = direction if direction in TRADE_DIRECTIONS else "long"
    return d if kind in SHORTABLE_KINDS else "long"

# Full column set (new price/qty model + legacy sl/tgt text kept for old rows).
_TE_COLS = ("id, trade_date, kind, instrument, pl, sl, tgt, note, status, "
            "purchase_date, entry_price, sl_price, tgt_price, qty, outcome, direction")

class TradeOpenCreate(BaseModel):
    """Open a new trade — no outcome yet. P/L is computed on booking."""
    kind: str = "swing"
    direction: str = "long"
    instrument: str = ""
    purchase_date: str
    entry_price: float = 0
    sl_price: float = 0
    tgt_price: float = 0
    qty: float = 0
    note: str = ""

class TradeOpenUpdate(BaseModel):
    kind: Optional[str] = None
    direction: Optional[str] = None
    instrument: Optional[str] = None
    purchase_date: Optional[str] = None
    entry_price: Optional[float] = None
    sl_price: Optional[float] = None
    tgt_price: Optional[float] = None
    qty: Optional[float] = None
    note: Optional[str] = None

class TradeBookBody(BaseModel):
    outcome: str          # 'profit' | 'loss'
    date: str             # outcome date (colours that calendar day)

class TradeLearningBody(BaseModel):
    date: str
    learning: str = ""

def _computed_pl(entry: float, sl: float, tgt: float, qty: float, outcome: str,
                 direction: str = "long") -> float:
    """Realized P/L from prices × qty.
      • long:  target is above entry, SL below → profit=(TGT−entry)·qty,
               loss=(SL−entry)·qty (negative).
      • short: target is below entry, SL above → profit=(entry−TGT)·qty,
               loss=(entry−SL)·qty (negative).
    abs() keeps profit ≥0 / loss ≤0 regardless of how the prices were typed."""
    q = qty or 0
    if outcome == "profit":
        return abs((tgt or 0) - (entry or 0)) * q
    if outcome == "loss":
        return -abs((sl or 0) - (entry or 0)) * q
    return 0.0

def _setting_float(conn, key: str, default: float = 0.0) -> float:
    row = conn.execute(f"SELECT value FROM user_setting WHERE user_id={cu()} AND key=?", (key,)).fetchone()
    if row and row["value"]:
        try:
            return float(json.loads(row["value"]))
        except (ValueError, TypeError):
            return default
    return default

def _trading_rules(conn) -> dict:
    """Discipline rules from settings: capital, risk %, r:R, and per-section
    diversification (max open trades / position-size divisor)."""
    capital = _setting_float(conn, "trading_capital", 0.0)
    risk_pct = _setting_float(conn, "trading_risk_pct", 0.0)
    rr = _setting_float(conn, "trading_rr", 0.0)
    div = {"swing": 0, "fno": 0, "intraday": 0}
    row = conn.execute(f"SELECT value FROM user_setting WHERE user_id={cu()} AND key='trading_diversification'").fetchone()
    if row and row["value"]:
        try:
            d = json.loads(row["value"]) or {}
            for k in div:
                div[k] = int(float(d.get(k) or 0))
        except (ValueError, TypeError):
            pass
    return {"capital": capital, "risk_pct": risk_pct, "rr": rr, "diversification": div}

def _validate_trade(conn, kind: str, entry: float, sl: float, tgt: float, qty: float,
                    direction: str = "long", exclude_id: Optional[int] = None):
    """Enforce trading discipline before opening/editing a trade. Raises 400 with
    a human message on the first rule violated. Rules that need a setting are
    skipped when that setting is unset (0)."""
    entry = entry or 0
    sl = sl or 0
    tgt = tgt or 0
    qty = qty or 0
    if sl <= 0 or entry <= 0 or tgt <= 0 or qty <= 0:
        raise HTTPException(400, "Entry, SL, target and quantity must all be greater than zero.")
    # 1. SL / target position relative to entry (CMP) depends on the direction.
    if direction == "short":
        # Betting on a fall: SL sits above CMP, target below.
        if sl <= entry:
            raise HTTPException(400, "For a short, stop loss must be greater than the entry price (CMP).")
        if tgt >= entry:
            raise HTTPException(400, "For a short, target must be less than the entry price (CMP).")
    else:
        if sl >= entry:
            raise HTTPException(400, "Stop loss must be less than the entry price (CMP).")
        if tgt <= entry:
            raise HTTPException(400, "Target must be greater than the entry price (CMP).")

    rules = _trading_rules(conn)
    capital = rules["capital"]
    # Distances are magnitudes so the risk/reward maths is direction-agnostic.
    risk_per_share = abs(entry - sl)
    reward_per_share = abs(tgt - entry)

    # 3. Risk : Reward ratio — reward per share ≥ RR × risk per share.
    if rules["rr"] > 0 and reward_per_share < rules["rr"] * risk_per_share - 1e-9:
        needed_reward = rules["rr"] * risk_per_share
        need = round(entry - needed_reward if direction == "short" else entry + needed_reward, 2)
        cmp_rel = "≤" if direction == "short" else "≥"
        raise HTTPException(
            400,
            f"Risk:reward must be at least 1:{rules['rr']:g}. With SL {sl:g} "
            f"(risk {risk_per_share:g}/share), target must be {cmp_rel} {need:g}."
        )

    # 5. Risk cap — max rupee loss ≤ capital × risk%.
    if rules["risk_pct"] > 0 and capital > 0:
        max_loss = capital * rules["risk_pct"] / 100.0
        loss = risk_per_share * qty
        if loss > max_loss + 1e-9:
            raise HTTPException(
                400,
                f"This risks {loss:g} but your limit is {max_loss:g} "
                f"({rules['risk_pct']:g}% of {capital:g}). Reduce quantity or tighten SL."
            )

    # 4 & 6. Diversification — position-size cap + max open trades per section.
    n = rules["diversification"].get(kind, 0)
    if n > 0:
        if capital > 0:
            max_value = capital / n
            value = entry * qty
            if value > max_value + 1e-9:
                raise HTTPException(
                    400,
                    f"Position value {value:g} exceeds the diversification cap {max_value:g} "
                    f"(capital {capital:g} ÷ {n}). Reduce quantity."
                )
        q = f"SELECT COUNT(*) c FROM trade_entry WHERE user_id={cu()} AND deleted_at IS NULL AND status='open' AND kind=?"
        params = [kind]
        if exclude_id is not None:
            q += " AND id<>?"
            params.append(exclude_id)
        open_count = conn.execute(q, params).fetchone()["c"]
        if open_count >= n:
            raise HTTPException(
                400,
                f"You already have {open_count} open {kind} trade(s); diversification allows {n}. "
                "Book or close one first."
            )

def _trade_entry_row(r) -> dict:
    return {
        "id": r["id"], "date": r["trade_date"], "kind": r["kind"], "instrument": r["instrument"],
        "pl": r["pl"], "sl": r["sl"], "tgt": r["tgt"], "note": r["note"],
        "status": r["status"] or "booked",
        "purchase_date": r["purchase_date"], "entry_price": r["entry_price"],
        "sl_price": r["sl_price"], "tgt_price": r["tgt_price"], "qty": r["qty"],
        "outcome": r["outcome"], "direction": r["direction"] or "long",
    }

@app.get("/api/trades")
def get_trades():
    with db() as conn:
        entries = conn.execute(
            f"SELECT {_TE_COLS} FROM trade_entry "
            f"WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY trade_date DESC, id ASC"
        ).fetchall()
        days = conn.execute(
            f"SELECT trade_date, learning FROM trade_day WHERE user_id={cu()} AND deleted_at IS NULL"
        ).fetchall()
        # Net P/L counts only booked trades; open trades carry no realized P/L.
        net = conn.execute(
            f"SELECT COALESCE(SUM(pl),0) s FROM trade_entry WHERE user_id={cu()} AND deleted_at IS NULL AND status='booked'"
        ).fetchone()["s"]
        cap_row = conn.execute(f"SELECT value FROM user_setting WHERE user_id={cu()} AND key='trading_capital'").fetchone()
        capital = 0.0
        if cap_row and cap_row["value"]:
            try:
                # user_setting stores values JSON-encoded (see put_setting).
                capital = float(json.loads(cap_row["value"]))
            except (ValueError, TypeError):
                capital = 0.0
        return {
            "entries": [_trade_entry_row(e) for e in entries],
            "learnings": {d["trade_date"]: d["learning"] for d in days},
            "capital": capital,
            "net_pl": net,
            "current": capital + net,
            "rules": _trading_rules(conn),
        }

@app.post("/api/trades/entries", status_code=201)
def create_trade_entry(body: TradeOpenCreate):
    """Create an OPEN trade. trade_date is initially the purchase date (so it
    stays grouped sensibly); it moves to the outcome date when booked."""
    kind = body.kind if body.kind in TRADE_KINDS else "swing"
    direction = _norm_direction(kind, body.direction)
    with db() as conn:
        _validate_trade(conn, kind, body.entry_price, body.sl_price, body.tgt_price, body.qty, direction)
        cur = conn.execute(
            f"INSERT INTO trade_entry (user_id, trade_date, kind, instrument, pl, sl, tgt, note, "
            f"status, purchase_date, entry_price, sl_price, tgt_price, qty, outcome, direction) "
            f"VALUES ({cu()}, ?, ?, ?, 0, '', '', ?, 'open', ?, ?, ?, ?, ?, NULL, ?)",
            (body.purchase_date, kind, body.instrument.strip().upper(), body.note.strip(),
             body.purchase_date, body.entry_price or 0, body.sl_price or 0, body.tgt_price or 0, body.qty or 0,
             direction)
        )
        r = conn.execute(f"SELECT {_TE_COLS} FROM trade_entry WHERE id=?", (cur.lastrowid,)).fetchone()
        return _trade_entry_row(r)

@app.put("/api/trades/entries/{eid}")
def update_trade_entry(eid: int, body: TradeOpenUpdate):
    """Edit an open trade's details. If already booked, re-derives P/L from the
    new prices/qty using its existing outcome."""
    with db() as conn:
        own = conn.execute(
            f"SELECT {_TE_COLS} FROM trade_entry WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (eid,)
        ).fetchone()
        if not own:
            raise HTTPException(404, "Trade not found")
        data = {k: v for k, v in body.dict().items() if v is not None}
        if "kind" in data and data["kind"] not in TRADE_KINDS:
            data["kind"] = "swing"
        if "instrument" in data:
            data["instrument"] = data["instrument"].strip().upper()
        if "note" in data:
            data["note"] = data["note"].strip()
        # Normalise direction against the (possibly new) kind — swing is long-only.
        if "direction" in data or "kind" in data:
            merged_kind = data.get("kind", own["kind"])
            data["direction"] = _norm_direction(merged_kind, data.get("direction", own["direction"]))
        # Re-validate discipline rules for OPEN trades using the merged values
        # (booked trades are history — only their P/L is recomputed below).
        if (own["status"] or "booked") == "open":
            merged = {
                "kind": data.get("kind", own["kind"]),
                "direction": data.get("direction", own["direction"] or "long"),
                "entry_price": data.get("entry_price", own["entry_price"]),
                "sl_price": data.get("sl_price", own["sl_price"]),
                "tgt_price": data.get("tgt_price", own["tgt_price"]),
                "qty": data.get("qty", own["qty"]),
            }
            _validate_trade(conn, merged["kind"], merged["entry_price"], merged["sl_price"],
                            merged["tgt_price"], merged["qty"], merged["direction"], exclude_id=eid)
        if data:
            sets = ", ".join(f"{k}=?" for k in data)
            conn.execute(f"UPDATE trade_entry SET {sets} WHERE id=?", (*data.values(), eid))
        # Keep a booked trade's P/L consistent with any edited prices/qty.
        cur = conn.execute(f"SELECT {_TE_COLS} FROM trade_entry WHERE id=?", (eid,)).fetchone()
        if (cur["status"] or "booked") == "booked" and cur["outcome"] in ("profit", "loss"):
            pl = _computed_pl(cur["entry_price"], cur["sl_price"], cur["tgt_price"], cur["qty"],
                              cur["outcome"], cur["direction"] or "long")
            conn.execute("UPDATE trade_entry SET pl=? WHERE id=?", (pl, eid))
            cur = conn.execute(f"SELECT {_TE_COLS} FROM trade_entry WHERE id=?", (eid,)).fetchone()
        return _trade_entry_row(cur)

@app.post("/api/trades/entries/{eid}/book")
def book_trade_entry(eid: int, body: TradeBookBody):
    """Close an open trade as profit/loss on a chosen date. Auto-computes P/L
    and moves the trade onto the outcome date (which is coloured green/red)."""
    if body.outcome not in ("profit", "loss"):
        raise HTTPException(400, "outcome must be 'profit' or 'loss'")
    with db() as conn:
        r = conn.execute(
            f"SELECT {_TE_COLS} FROM trade_entry WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (eid,)
        ).fetchone()
        if not r:
            raise HTTPException(404, "Trade not found")
        # Intraday trades must be squared off the same day they were bought.
        if r["kind"] == "intraday" and r["purchase_date"] and body.date != r["purchase_date"]:
            raise HTTPException(400, "Intraday trades must be booked on their purchase day.")
        pl = _computed_pl(r["entry_price"], r["sl_price"], r["tgt_price"], r["qty"],
                          body.outcome, r["direction"] or "long")
        conn.execute(
            "UPDATE trade_entry SET status='booked', outcome=?, pl=?, trade_date=? WHERE id=?",
            (body.outcome, pl, body.date, eid)
        )
        cur = conn.execute(f"SELECT {_TE_COLS} FROM trade_entry WHERE id=?", (eid,)).fetchone()
        return _trade_entry_row(cur)

@app.post("/api/trades/entries/{eid}/reopen")
def reopen_trade_entry(eid: int):
    """Undo a booking — return the trade to open (clears realized P/L, re-anchors
    trade_date to the purchase date)."""
    with db() as conn:
        r = conn.execute(
            f"SELECT purchase_date FROM trade_entry WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (eid,)
        ).fetchone()
        if not r:
            raise HTTPException(404, "Trade not found")
        conn.execute(
            "UPDATE trade_entry SET status='open', outcome=NULL, pl=0, trade_date=COALESCE(purchase_date, trade_date) WHERE id=?",
            (eid,)
        )
        cur = conn.execute(f"SELECT {_TE_COLS} FROM trade_entry WHERE id=?", (eid,)).fetchone()
        return _trade_entry_row(cur)

@app.delete("/api/trades/entries/{eid}", status_code=204)
def delete_trade_entry(eid: int):
    with db() as conn:
        own = conn.execute(f"SELECT id FROM trade_entry WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (eid,)).fetchone()
        if not own:
            raise HTTPException(404, "Trade not found")
        _soft_delete(conn, "trade_entry", eid)

@app.put("/api/trades/learning")
def set_trade_learning(body: TradeLearningBody):
    """Upsert the learning note for a day (created even if there are no trades)."""
    with db() as conn:
        conn.execute(
            f"INSERT INTO trade_day (user_id, trade_date, learning) VALUES ({cu()}, ?, ?) "
            f"ON CONFLICT(user_id, trade_date) DO UPDATE SET learning=excluded.learning, deleted_at=NULL",
            (body.date, body.learning.strip())
        )
        return {"date": body.date, "learning": body.learning.strip()}


# ── Kickstart (motivation video hub) ─────────────────────────────────────────

KICKSTART_PLATFORMS = ("youtube", "instagram")

class KickstartCreate(BaseModel):
    youtube_id: str          # generic video id: YouTube id or Instagram shortcode
    platform: str = "youtube"
    title: str = ""
    start_sec: int = 0
    end_sec: Optional[int] = None
    days: List[str] = []
    pillars: List[str] = []
    customs: List[str] = []

class KickstartUpdate(BaseModel):
    youtube_id: Optional[str] = None
    platform: Optional[str] = None
    title: Optional[str] = None
    start_sec: Optional[int] = None
    end_sec: Optional[int] = None
    days: Optional[List[str]] = None
    pillars: Optional[List[str]] = None
    customs: Optional[List[str]] = None

def _ks_row(r):
    return {
        "id": r["id"], "youtube_id": r["youtube_id"], "platform": r["platform"] or "youtube",
        "title": r["title"],
        "start_sec": r["start_sec"], "end_sec": r["end_sec"],
        "days": json.loads(r["days"]), "pillars": json.loads(r["pillars"]),
        "customs": json.loads(r["customs"]),
    }

_KS_COLS = "id, youtube_id, platform, title, start_sec, end_sec, days, pillars, customs"

@app.get("/api/kickstart/videos")
def get_kickstart():
    with db() as conn:
        rows = conn.execute(
            f"SELECT {_KS_COLS} FROM kickstart_video "
            f"WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY id DESC"
        ).fetchall()
        return [_ks_row(r) for r in rows]

@app.post("/api/kickstart/videos", status_code=201)
def create_kickstart(body: KickstartCreate):
    if not body.youtube_id.strip():
        raise HTTPException(400, "video id required")
    if body.platform not in KICKSTART_PLATFORMS:
        raise HTTPException(400, "platform must be youtube or instagram")
    if not body.days:
        raise HTTPException(400, "at least one day tag is required")
    with db() as conn:
        cur = conn.execute(
            f"INSERT INTO kickstart_video (user_id, youtube_id, platform, title, start_sec, end_sec, days, pillars, customs) "
            f"VALUES ({cu()}, ?, ?, ?, ?, ?, ?, ?, ?)",
            (body.youtube_id.strip(), body.platform, body.title.strip(), max(0, body.start_sec), body.end_sec,
             json.dumps(body.days), json.dumps(body.pillars), json.dumps(body.customs))
        )
        r = conn.execute(f"SELECT {_KS_COLS} FROM kickstart_video WHERE id=?", (cur.lastrowid,)).fetchone()
        return _ks_row(r)

@app.put("/api/kickstart/videos/{vid}")
def update_kickstart(vid: int, body: KickstartUpdate):
    data = body.dict(exclude_unset=True)  # only fields the client actually sent
    if "days" in data and not data["days"]:
        raise HTTPException(400, "at least one day tag is required")
    if "platform" in data and data["platform"] not in KICKSTART_PLATFORMS:
        raise HTTPException(400, "platform must be youtube or instagram")
    updates = {}
    for k in ("youtube_id", "platform", "title", "start_sec", "end_sec"):
        if k in data:
            updates[k] = data[k]   # end_sec=None is allowed → clears the trim end
    for k in ("days", "pillars", "customs"):
        if k in data:
            updates[k] = json.dumps(data[k])
    with db() as conn:
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE kickstart_video SET {sets} WHERE id=? AND user_id={cu()}", (*updates.values(), vid))
        r = conn.execute(f"SELECT {_KS_COLS} FROM kickstart_video WHERE id=?", (vid,)).fetchone()
        if not r:
            raise HTTPException(404)
        return _ks_row(r)

@app.delete("/api/kickstart/videos/{vid}", status_code=204)
def delete_kickstart(vid: int):
    with db() as conn:
        _soft_delete(conn, "kickstart_video", vid)

@app.post("/api/kickstart/videos/{vid}/restore")
def restore_kickstart(vid: int):
    with db() as conn:
        _restore(conn, "kickstart_video", vid)
        r = conn.execute(f"SELECT {_KS_COLS} FROM kickstart_video WHERE id=?", (vid,)).fetchone()
        return _ks_row(r) if r else {}


# ── Golden Book (manifestation journal) ──────────────────────────────────────

class GoldenCreate(BaseModel):
    title: str
    image: str = ""
    created_date: Optional[str] = None

class GoldenUpdate(BaseModel):
    title: Optional[str] = None
    image: Optional[str] = None
    t369_enabled: Optional[bool] = None
    t369_affirmation: Optional[str] = None

class GoldenEntryBody(BaseModel):
    date: Optional[str] = None
    text: str = ""

def _golden_streak(conn, goal_id: int) -> int:
    rows = conn.execute(
        "SELECT entry_date FROM golden_entry WHERE goal_id=? AND text<>'' ", (goal_id,)
    ).fetchall()
    dates = {r["entry_date"] for r in rows}
    if not dates:
        return 0
    today = date.today()
    if today.isoformat() in dates:
        cur = today
    elif (today - timedelta(days=1)).isoformat() in dates:
        cur = today - timedelta(days=1)
    else:
        return 0
    streak = 0
    while cur.isoformat() in dates:
        streak += 1
        cur = cur - timedelta(days=1)
    return streak

def _golden_summary(conn, r) -> dict:
    gid = r["id"]
    total = conn.execute("SELECT COUNT(*) FROM golden_entry WHERE goal_id=? AND text<>''", (gid,)).fetchone()[0]
    days_to = None
    if r["achieved"] and r["achieved_date"]:
        try:
            days_to = (date.fromisoformat(r["achieved_date"]) - date.fromisoformat(r["created_date"])).days
        except Exception:
            days_to = None
    t369_on = bool(r["t369_enabled"])
    out = {
        "id": gid, "title": r["title"], "image": r["image"], "created_date": r["created_date"],
        "achieved": bool(r["achieved"]), "achieved_date": r["achieved_date"],
        "streak": _golden_streak(conn, gid), "total_days": total, "days_to_manifest": days_to,
        "t369_enabled": t369_on, "t369_affirmation": r["t369_affirmation"] or "",
    }
    if t369_on:
        out["t369"] = _t369_summary(conn, gid)
    return out

def _golden_get(conn, gid):
    return conn.execute(
        f"SELECT id, title, image, created_date, achieved, achieved_date, t369_enabled, t369_affirmation "
        f"FROM golden_goal WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (gid,)
    ).fetchone()

def _golden_detail(conn, gid):
    r = _golden_get(conn, gid)
    if not r:
        raise HTTPException(404)
    d = _golden_summary(conn, r)
    entries = conn.execute(
        "SELECT entry_date AS date, text FROM golden_entry WHERE goal_id=? ORDER BY entry_date DESC", (gid,)
    ).fetchall()
    d["entries"] = [{"date": e["date"], "text": e["text"]} for e in entries]
    return d

@app.get("/api/golden/goals")
def get_golden_goals():
    with db() as conn:
        rows = conn.execute(
            f"SELECT id, title, image, created_date, achieved, achieved_date, t369_enabled, t369_affirmation "
            f"FROM golden_goal WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY achieved ASC, id DESC"
        ).fetchall()
        return [_golden_summary(conn, r) for r in rows]

@app.get("/api/golden/goals/{gid}")
def get_golden_goal(gid: int):
    with db() as conn:
        return _golden_detail(conn, gid)

@app.post("/api/golden/goals", status_code=201)
def create_golden(body: GoldenCreate):
    if not body.title.strip():
        raise HTTPException(400, "title required")
    cdate = body.created_date or str(date.today())
    with db() as conn:
        cur = conn.execute(
            f"INSERT INTO golden_goal (user_id, title, image, created_date) VALUES ({cu()}, ?, ?, ?)",
            (body.title.strip(), body.image or "", cdate)
        )
        return _golden_summary(conn, _golden_get(conn, cur.lastrowid))

@app.put("/api/golden/goals/{gid}")
def update_golden(gid: int, body: GoldenUpdate):
    data = body.dict(exclude_unset=True)
    with db() as conn:
        if not _golden_get(conn, gid):
            raise HTTPException(404)
        sets, vals = [], []
        if "title" in data and data["title"] is not None:
            sets.append("title=?"); vals.append(data["title"].strip())
        if "image" in data and data["image"] is not None:
            sets.append("image=?"); vals.append(data["image"])
        if "t369_enabled" in data and data["t369_enabled"] is not None:
            sets.append("t369_enabled=?"); vals.append(1 if data["t369_enabled"] else 0)
        if "t369_affirmation" in data and data["t369_affirmation"] is not None:
            sets.append("t369_affirmation=?"); vals.append(data["t369_affirmation"].strip())
        if sets:
            conn.execute(f"UPDATE golden_goal SET {', '.join(sets)} WHERE id=? AND user_id={cu()}", (*vals, gid))
        return _golden_summary(conn, _golden_get(conn, gid))

@app.post("/api/golden/goals/{gid}/achieve")
def achieve_golden(gid: int):
    with db() as conn:
        if not _golden_get(conn, gid):
            raise HTTPException(404)
        conn.execute(
            f"UPDATE golden_goal SET achieved=1, achieved_date=? WHERE id=? AND user_id={cu()}",
            (str(date.today()), gid)
        )
        return _golden_summary(conn, _golden_get(conn, gid))

@app.post("/api/golden/goals/{gid}/unachieve")
def unachieve_golden(gid: int):
    with db() as conn:
        if not _golden_get(conn, gid):
            raise HTTPException(404)
        conn.execute(f"UPDATE golden_goal SET achieved=0, achieved_date=NULL WHERE id=? AND user_id={cu()}", (gid,))
        return _golden_summary(conn, _golden_get(conn, gid))

@app.put("/api/golden/goals/{gid}/entry")
def upsert_golden_entry(gid: int, body: GoldenEntryBody):
    d = body.date or str(date.today())
    with db() as conn:
        if not _golden_get(conn, gid):
            raise HTTPException(404)
        conn.execute(
            "INSERT INTO golden_entry (goal_id, entry_date, text) VALUES (?,?,?) "
            "ON CONFLICT(goal_id, entry_date) DO UPDATE SET text=excluded.text",
            (gid, d, body.text)
        )
        return _golden_detail(conn, gid)

@app.delete("/api/golden/goals/{gid}", status_code=204)
def delete_golden(gid: int):
    with db() as conn:
        _soft_delete(conn, "golden_goal", gid)

@app.post("/api/golden/goals/{gid}/restore")
def restore_golden(gid: int):
    with db() as conn:
        _restore(conn, "golden_goal", gid)
        r = _golden_get(conn, gid)
        return _golden_summary(conn, r) if r else {}


# ── Tesla 369 method (per-dream mode) ────────────────────────────────────────
# When a dream has t369_enabled, you write its 369 affirmation 3x in the morning
# (06:00–12:00), 6x at noon (12:00–18:00), and 9x at night (18:00–02:00). A day
# counts toward the streak only when all 18 writes are logged. Minimum mandatory
# streak is 21 days; it keeps extending until the dream manifests.

TESLA_TARGETS = {"morning": 3, "noon": 6, "night": 9}
TESLA_TOTAL = sum(TESLA_TARGETS.values())  # 18
TESLA_MIN_STREAK = 21

# Default IST offset, used when the tz database isn't available (e.g. Windows
# without `tzdata`). The 369 windows must follow the *user's* wall clock, not the
# server's — production runs in UTC, so naive datetime.now() would misclassify.
_DEFAULT_TZ = os.environ.get("ANVIL_TZ", "Asia/Kolkata")
_FALLBACK_OFFSET = timedelta(hours=5, minutes=30)  # IST

def _user_now() -> datetime:
    """Current wall-clock time in the user's timezone (naive datetime)."""
    try:
        from zoneinfo import ZoneInfo
        return datetime.now(ZoneInfo(_DEFAULT_TZ)).replace(tzinfo=None)
    except Exception:
        # tz database unavailable — fall back to a fixed offset from UTC.
        return (datetime.now(timezone.utc) + _FALLBACK_OFFSET).replace(tzinfo=None)

def _tesla_window(now: Optional[datetime] = None) -> Optional[str]:
    """Map a wall-clock time to its 369 window, or None if outside all windows.
    Night spans 18:00–02:00, so 00:00–02:00 belongs to the *previous* day's night."""
    h = (now or _user_now()).hour
    if 6 <= h < 12:
        return "morning"
    if 12 <= h < 18:
        return "noon"
    if h >= 18 or h < 2:
        return "night"
    return None  # 02:00–06:00 dead zone

def _tesla_log_date(now: Optional[datetime] = None) -> str:
    """The date a write belongs to. 00:00–02:00 counts toward the night that
    began the previous evening, so it rolls back a day."""
    now = now or _user_now()
    if now.hour < 2:
        return (now.date() - timedelta(days=1)).isoformat()
    return now.date().isoformat()

def _tesla_day_counts(conn, gid: int, d: str) -> dict:
    rows = conn.execute(
        "SELECT window, COUNT(*) AS n FROM tesla369_log WHERE goal_id=? AND log_date=? GROUP BY window",
        (gid, d),
    ).fetchall()
    counts = {"morning": 0, "noon": 0, "night": 0}
    for r in rows:
        if r["window"] in counts:
            counts[r["window"]] = r["n"]
    return counts

def _tesla_day_complete(counts: dict) -> bool:
    return all(counts.get(w, 0) >= t for w, t in TESLA_TARGETS.items())

def _tesla_complete_dates(conn, gid: int) -> set:
    """All log_dates for this dream where the full 3/6/9 was met."""
    rows = conn.execute(
        "SELECT log_date, window, COUNT(*) AS n FROM tesla369_log WHERE goal_id=? GROUP BY log_date, window",
        (gid,),
    ).fetchall()
    by_date = {}
    for r in rows:
        by_date.setdefault(r["log_date"], {})[r["window"]] = r["n"]
    return {d for d, c in by_date.items() if _tesla_day_complete(c)}

def _tesla_current_streak(complete: set, today_str: str) -> int:
    if not complete:
        return 0
    today = date.fromisoformat(today_str)
    if today_str in complete:
        cur = today
    elif (today - timedelta(days=1)).isoformat() in complete:
        cur = today - timedelta(days=1)  # today still in progress; count from yesterday
    else:
        return 0
    streak = 0
    while cur.isoformat() in complete:
        streak += 1
        cur -= timedelta(days=1)
    return streak

def _tesla_best_streak(complete: set) -> int:
    if not complete:
        return 0
    best = run = 1
    prev = None
    for d in sorted(date.fromisoformat(x) for x in complete):
        if prev is not None and (d - prev).days == 1:
            run += 1
        else:
            run = 1
        best = max(best, run)
        prev = d
    return best

def _t369_summary(conn, gid: int) -> dict:
    """369 tracking payload for one dream (called from _golden_summary when on)."""
    today = _tesla_log_date()
    counts = _tesla_day_counts(conn, gid, today)
    complete = _tesla_complete_dates(conn, gid)
    current = _tesla_current_streak(complete, today)
    return {
        "today": today,
        "window": _tesla_window(),
        "targets": TESLA_TARGETS,
        "counts": counts,
        "day_complete": _tesla_day_complete(counts),
        "current_streak": current,
        "best_streak": _tesla_best_streak(complete),
        "min_streak": TESLA_MIN_STREAK,
        "min_reached": current >= TESLA_MIN_STREAK,
    }

@app.post("/api/golden/goals/{gid}/369/log")
def log_tesla369(gid: int):
    """Record one 369 write for this dream into the current time window."""
    window = _tesla_window()
    if window is None:
        raise HTTPException(400, "Outside the 369 writing windows (02:00–06:00).")
    d = _tesla_log_date()
    with db() as conn:
        g = _golden_get(conn, gid)
        if not g:
            raise HTTPException(404)
        if not g["t369_enabled"]:
            raise HTTPException(400, "369 mode is off for this dream.")
        counts = _tesla_day_counts(conn, gid, d)
        if counts.get(window, 0) >= TESLA_TARGETS[window]:
            raise HTTPException(400, f"{window.capitalize()} target already complete.")
        conn.execute(
            "INSERT INTO tesla369_log (user_id, goal_id, log_date, window) VALUES (?, ?, ?, ?)",
            (cu(), gid, d, window),
        )
        return _golden_detail(conn, gid)

@app.delete("/api/golden/goals/{gid}/369/log")
def undo_tesla369(gid: int):
    """Undo the most recent 369 write in the current window (mis-tap correction)."""
    window = _tesla_window()
    if window is None:
        raise HTTPException(400, "Outside the 369 writing windows.")
    d = _tesla_log_date()
    with db() as conn:
        if not _golden_get(conn, gid):
            raise HTTPException(404)
        row = conn.execute(
            "SELECT id FROM tesla369_log WHERE goal_id=? AND log_date=? AND window=? "
            "ORDER BY id DESC LIMIT 1", (gid, d, window),
        ).fetchone()
        if row:
            conn.execute("DELETE FROM tesla369_log WHERE id=?", (row["id"],))
        return _golden_detail(conn, gid)


# ── Rewards (screen-time tracking + payout ledger) ───────────────────────────

class ScreenTimeAdd(BaseModel):
    screen: str
    seconds: int = 0

@app.post("/api/screentime", status_code=204)
def add_screentime(body: ScreenTimeAdd):
    if not body.screen or body.seconds <= 0:
        return
    d = str(date.today())
    with db() as conn:
        conn.execute(
            "INSERT INTO screen_time (user_id, screen, date, seconds) VALUES (?,?,?,?) "
            "ON CONFLICT(user_id, screen, date) DO UPDATE SET seconds = seconds + excluded.seconds",
            (cu(), body.screen, d, int(body.seconds))
        )

@app.get("/api/screentime")
def get_screentime():
    with db() as conn:
        rows = conn.execute(
            f"SELECT screen, date, seconds FROM screen_time WHERE user_id={cu()}"
        ).fetchall()
        return [{"screen": r["screen"], "date": r["date"], "seconds": r["seconds"]} for r in rows]

# ── Reward rate history (date-effective; old time keeps old rate) ──
class RateSet(BaseModel):
    kind: str        # 'focus' | 'usage'
    rkey: str        # pillar name or screen id
    rate: float = 0

@app.get("/api/rewards/rates")
def get_reward_rates():
    with db() as conn:
        rows = conn.execute(
            f"SELECT kind, rkey, rate, eff_date FROM reward_rate WHERE user_id={cu()} ORDER BY eff_date"
        ).fetchall()
        return [{"kind": r["kind"], "rkey": r["rkey"], "rate": r["rate"], "eff_date": r["eff_date"]} for r in rows]

@app.post("/api/rewards/rates")
def set_reward_rate(body: RateSet):
    if body.kind not in ("focus", "usage"):
        raise HTTPException(400, "kind must be focus or usage")
    eff = str(date.today())
    with db() as conn:
        conn.execute(
            "INSERT INTO reward_rate (user_id, kind, rkey, rate, eff_date) VALUES (?,?,?,?,?) "
            "ON CONFLICT(user_id, kind, rkey, eff_date) DO UPDATE SET rate=excluded.rate",
            (cu(), body.kind, body.rkey, max(0, body.rate), eff)
        )
        return {"ok": True}

class PayoutCreate(BaseModel):
    amount: float
    note: str = ""
    date: Optional[str] = None

def _payout_row(r):
    return {"id": r["id"], "amount": r["amount"], "note": r["note"], "date": r["pay_date"]}

@app.get("/api/rewards/payouts")
def get_payouts():
    with db() as conn:
        rows = conn.execute(
            f"SELECT id, amount, note, pay_date FROM reward_payout WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY pay_date DESC, id DESC"
        ).fetchall()
        return [_payout_row(r) for r in rows]

@app.post("/api/rewards/payouts", status_code=201)
def create_payout(body: PayoutCreate):
    d = body.date or str(date.today())
    with db() as conn:
        cur = conn.execute(
            f"INSERT INTO reward_payout (user_id, amount, note, pay_date) VALUES ({cu()}, ?, ?, ?)",
            (abs(body.amount or 0), body.note or "", d)
        )
        r = conn.execute("SELECT id, amount, note, pay_date FROM reward_payout WHERE id=?", (cur.lastrowid,)).fetchone()
        return _payout_row(r)

@app.delete("/api/rewards/payouts/{pid}", status_code=204)
def delete_payout(pid: int):
    with db() as conn:
        _soft_delete(conn, "reward_payout", pid)


# ── Achievements (timeline of wins) ─────────────────────────────────────────

class AchievementCreate(BaseModel):
    title: str
    note: str = ""
    date: str                       # mandatory YYYY-MM-DD — anchors the timeline
    image: Optional[str] = None     # optional base64 data URL
    reward: float = 0               # optional manual appreciation reward
    pillar: Optional[str] = None    # optional pillar (for colour)

class AchievementUpdate(BaseModel):
    title: Optional[str] = None
    note: Optional[str] = None
    date: Optional[str] = None
    image: Optional[str] = None
    reward: Optional[float] = None
    pillar: Optional[str] = None

_ACH_COLS = "id, title, note, ach_date, image, reward, pillar_id"

def _achievement_row(conn, r):
    pillar = None
    if r["pillar_id"]:
        p = conn.execute("SELECT name FROM pillar WHERE id=?", (r["pillar_id"],)).fetchone()
        pillar = p["name"] if p else None
    return {"id": r["id"], "title": r["title"], "note": r["note"], "date": r["ach_date"],
            "image": r["image"], "reward": r["reward"], "pillar": pillar}

@app.get("/api/achievements")
def get_achievements():
    with db() as conn:
        rows = conn.execute(
            f"SELECT {_ACH_COLS} FROM achievement WHERE user_id={cu()} AND deleted_at IS NULL "
            "ORDER BY ach_date ASC, id ASC"
        ).fetchall()
        return [_achievement_row(conn, r) for r in rows]

@app.post("/api/achievements", status_code=201)
def create_achievement(body: AchievementCreate):
    if not (body.title or "").strip():
        raise HTTPException(400, "title required")
    if not (body.date or "").strip():
        raise HTTPException(400, "date required")
    with db() as conn:
        pid = pillar_id(conn, body.pillar) if body.pillar else None
        cur = conn.execute(
            f"INSERT INTO achievement (user_id, title, note, ach_date, image, reward, pillar_id) "
            f"VALUES ({cu()}, ?, ?, ?, ?, ?, ?)",
            (body.title.strip(), body.note or "", body.date.strip(), body.image, max(0, body.reward or 0), pid)
        )
        r = conn.execute(f"SELECT {_ACH_COLS} FROM achievement WHERE id=?", (cur.lastrowid,)).fetchone()
        return _achievement_row(conn, r)

@app.put("/api/achievements/{aid}")
def update_achievement(aid: int, body: AchievementUpdate):
    with db() as conn:
        owned = conn.execute(
            f"SELECT id FROM achievement WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (aid,)
        ).fetchone()
        if not owned:
            raise HTTPException(404, "Achievement not found")
        if body.title is not None and body.title.strip():
            conn.execute("UPDATE achievement SET title=? WHERE id=?", (body.title.strip(), aid))
        if body.note is not None:
            conn.execute("UPDATE achievement SET note=? WHERE id=?", (body.note, aid))
        if body.date is not None and body.date.strip():
            conn.execute("UPDATE achievement SET ach_date=? WHERE id=?", (body.date.strip(), aid))
        if body.image is not None:
            conn.execute("UPDATE achievement SET image=? WHERE id=?", (body.image, aid))
        if body.reward is not None:
            conn.execute("UPDATE achievement SET reward=? WHERE id=?", (max(0, body.reward), aid))
        if body.pillar is not None:
            pid = pillar_id(conn, body.pillar) if body.pillar else None
            conn.execute("UPDATE achievement SET pillar_id=? WHERE id=?", (pid, aid))
        r = conn.execute(f"SELECT {_ACH_COLS} FROM achievement WHERE id=?", (aid,)).fetchone()
        return _achievement_row(conn, r)

@app.delete("/api/achievements/{aid}", status_code=204)
def delete_achievement(aid: int):
    with db() as conn:
        _soft_delete(conn, "achievement", aid)

@app.post("/api/achievements/{aid}/restore")
def restore_achievement(aid: int):
    with db() as conn:
        _restore(conn, "achievement", aid)
        r = conn.execute(f"SELECT {_ACH_COLS} FROM achievement WHERE id=?", (aid,)).fetchone()
        return _achievement_row(conn, r)


# ── Delights (customizable collections: books, movies, places…) ─────────────────

# Starter collections seeded the first time a user opens the section.
DELIGHT_SEED = [
    ("Books", [{"name": "Author", "type": "text"}, {"name": "Tag", "type": "text"}]),
    ("Movies", [{"name": "Director", "type": "text"}, {"name": "Tag", "type": "text"}]),
    ("Places to visit", [{"name": "Speciality", "type": "text"}, {"name": "Distance", "type": "text"}, {"name": "Tag", "type": "text"}]),
    ("Restaurants", [{"name": "Cuisine", "type": "text"}, {"name": "Location", "type": "text"}, {"name": "Tag", "type": "text"}]),
]

DELIGHT_COL_TYPES = ("text", "number", "link")

class CollectionCreate(BaseModel):
    name: str
    columns: list = []

class CollectionUpdate(BaseModel):
    name: Optional[str] = None
    columns: Optional[list] = None

DELIGHT_STATUSES = ("todo", "doing", "done")

class DelightItemCreate(BaseModel):
    name: str
    fields: dict = {}
    status: str = "todo"
    completed_date: Optional[str] = None
    completion_note: Optional[str] = None

class DelightItemUpdate(BaseModel):
    name: Optional[str] = None
    fields: Optional[dict] = None
    status: Optional[str] = None
    completed_date: Optional[str] = None
    completion_note: Optional[str] = None

class ArrangeBody(BaseModel):
    order: list  # [{id, status, position}] — the full desired arrangement for one collection

def _clean_columns(cols) -> list:
    out, seen = [], set()
    for c in (cols or []):
        if isinstance(c, dict):
            label = str(c.get("name", "")).strip()
            ctype = str(c.get("type", "text")).strip().lower()
        else:
            label = str(c).strip()
            ctype = "text"
        if ctype not in DELIGHT_COL_TYPES:
            ctype = "text"
        if label and label.lower() not in seen:
            seen.add(label.lower())
            out.append({"name": label, "type": ctype})
    return out[:6]  # keep it sane

def _delight_payload(conn):
    cols = conn.execute(
        f"SELECT id, name, columns, position FROM delight_collection WHERE user_id={cu()} AND deleted_at IS NULL "
        "ORDER BY position, id"
    ).fetchall()
    result = []
    for c in cols:
        try: columns = json.loads(c["columns"] or "[]")
        except Exception: columns = []
        # Back-compat: older collections stored columns as plain strings.
        columns = [
            {"name": col, "type": "text"} if isinstance(col, str) else
            {"name": col.get("name", ""), "type": col.get("type", "text")}
            for col in columns
        ]
        items = conn.execute(
            "SELECT id, name, fields, done, status, position, completed_date, completion_note "
            "FROM delight_item WHERE collection_id=? AND deleted_at IS NULL ORDER BY position, id",
            (c["id"],)
        ).fetchall()
        item_list = []
        for it in items:
            try: fields = json.loads(it["fields"] or "{}")
            except Exception: fields = {}
            status = it["status"] if it["status"] in DELIGHT_STATUSES else "todo"
            item_list.append({"id": it["id"], "name": it["name"], "fields": fields, "done": bool(it["done"]),
                              "status": status, "position": it["position"],
                              "completed_date": it["completed_date"], "completion_note": it["completion_note"]})
        result.append({"id": c["id"], "name": c["name"], "columns": columns, "items": item_list})
    return result

def _own_collection(conn, cid):
    row = conn.execute(
        f"SELECT id FROM delight_collection WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (cid,)
    ).fetchone()
    if not row:
        raise HTTPException(404, "Collection not found")

@app.get("/api/delight")
def get_delight():
    with db() as conn:
        # Seed the starter set the very first time (only when the user has no rows at all,
        # so deleting them won't bring them back).
        ever = conn.execute(f"SELECT COUNT(*) c FROM delight_collection WHERE user_id={cu()}").fetchone()["c"]
        if ever == 0:
            for i, (name, columns) in enumerate(DELIGHT_SEED):
                conn.execute(
                    f"INSERT INTO delight_collection (user_id, name, columns, position) VALUES ({cu()}, ?, ?, ?)",
                    (name, json.dumps(columns), i)
                )
        return _delight_payload(conn)

@app.post("/api/delight/collections", status_code=201)
def create_collection(body: CollectionCreate):
    name = (body.name or "").strip()
    if not name:
        raise HTTPException(400, "Name is required")
    with db() as conn:
        pos = conn.execute(f"SELECT COALESCE(MAX(position),-1)+1 p FROM delight_collection WHERE user_id={cu()}").fetchone()["p"]
        conn.execute(
            f"INSERT INTO delight_collection (user_id, name, columns, position) VALUES ({cu()}, ?, ?, ?)",
            (name, json.dumps(_clean_columns(body.columns)), pos)
        )
        return _delight_payload(conn)

@app.put("/api/delight/collections/{cid}")
def update_collection(cid: int, body: CollectionUpdate):
    with db() as conn:
        _own_collection(conn, cid)
        if body.name is not None and body.name.strip():
            conn.execute("UPDATE delight_collection SET name=? WHERE id=?", (body.name.strip(), cid))
        if body.columns is not None:
            conn.execute("UPDATE delight_collection SET columns=? WHERE id=?", (json.dumps(_clean_columns(body.columns)), cid))
        return _delight_payload(conn)

@app.delete("/api/delight/collections/{cid}", status_code=204)
def delete_collection(cid: int):
    with db() as conn:
        _soft_delete(conn, "delight_collection", cid)

@app.post("/api/delight/collections/{cid}/restore")
def restore_collection(cid: int):
    with db() as conn:
        _restore(conn, "delight_collection", cid)
        return _delight_payload(conn)

@app.post("/api/delight/collections/{cid}/items", status_code=201)
def create_delight_item(cid: int, body: DelightItemCreate):
    if not (body.name or "").strip():
        raise HTTPException(400, "Name is required")
    status = body.status if body.status in DELIGHT_STATUSES else "todo"
    with db() as conn:
        _own_collection(conn, cid)
        pos = conn.execute(
            "SELECT COALESCE(MAX(position),-1)+1 p FROM delight_item WHERE collection_id=? AND status=? AND deleted_at IS NULL",
            (cid, status)
        ).fetchone()["p"]
        comp_date = (body.completed_date or date.today().isoformat()) if status == "done" else None
        comp_note = body.completion_note if status == "done" else None
        conn.execute(
            "INSERT INTO delight_item (collection_id, name, fields, done, status, position, completed_date, completion_note) "
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            (cid, body.name.strip(), json.dumps(body.fields or {}), 1 if status == "done" else 0, status, pos, comp_date, comp_note)
        )
        return _delight_payload(conn)

def _own_item(conn, iid):
    row = conn.execute(
        f"""SELECT i.id FROM delight_item i JOIN delight_collection c ON i.collection_id=c.id
            WHERE i.id=? AND c.user_id={cu()}""", (iid,)
    ).fetchone()
    if not row:
        raise HTTPException(404, "Item not found")

@app.put("/api/delight/items/{iid}")
def update_delight_item(iid: int, body: DelightItemUpdate):
    with db() as conn:
        _own_item(conn, iid)
        if body.name is not None and body.name.strip():
            conn.execute("UPDATE delight_item SET name=? WHERE id=?", (body.name.strip(), iid))
        if body.fields is not None:
            conn.execute("UPDATE delight_item SET fields=? WHERE id=?", (json.dumps(body.fields), iid))
        if body.status is not None and body.status in DELIGHT_STATUSES:
            prev = conn.execute("SELECT status FROM delight_item WHERE id=?", (iid,)).fetchone()
            was_done = prev and prev["status"] == "done"
            now_done = body.status == "done"
            conn.execute("UPDATE delight_item SET status=?, done=? WHERE id=?",
                         (body.status, 1 if now_done else 0, iid))
            if now_done:
                # Entering or staying done: set completion date (today unless given);
                # don't overwrite an existing date on a stay-done edit unless provided.
                if not was_done or body.completed_date is not None:
                    conn.execute("UPDATE delight_item SET completed_date=? WHERE id=?",
                                 (body.completed_date or date.today().isoformat(), iid))
                if body.completion_note is not None or not was_done:
                    conn.execute("UPDATE delight_item SET completion_note=? WHERE id=?",
                                 (body.completion_note, iid))
            else:
                # Left the done lane — clear completion metadata.
                conn.execute("UPDATE delight_item SET completed_date=NULL, completion_note=NULL WHERE id=?", (iid,))
        elif body.completed_date is not None or body.completion_note is not None:
            # Editing completion details without changing status.
            if body.completed_date is not None:
                conn.execute("UPDATE delight_item SET completed_date=? WHERE id=?", (body.completed_date, iid))
            if body.completion_note is not None:
                conn.execute("UPDATE delight_item SET completion_note=? WHERE id=?", (body.completion_note, iid))
        return _delight_payload(conn)

@app.put("/api/delight/collections/{cid}/arrange")
def arrange_delight(cid: int, body: ArrangeBody):
    """Persist the full kanban arrangement (lane + order) after a drag-and-drop."""
    with db() as conn:
        _own_collection(conn, cid)
        for o in (body.order or []):
            try:
                iid = int(o.get("id"))
                pos = int(o.get("position", 0))
            except (TypeError, ValueError):
                continue
            status = o.get("status") if o.get("status") in DELIGHT_STATUSES else "todo"
            conn.execute(
                "UPDATE delight_item SET status=?, position=?, done=? WHERE id=? AND collection_id=?",
                (status, pos, 1 if status == "done" else 0, iid, cid)
            )
            if status == "done":
                # Stamp a completion date when first dragged into Satisfied (keep any existing).
                conn.execute(
                    "UPDATE delight_item SET completed_date=? WHERE id=? AND collection_id=? AND completed_date IS NULL",
                    (date.today().isoformat(), iid, cid)
                )
            else:
                conn.execute(
                    "UPDATE delight_item SET completed_date=NULL, completion_note=NULL WHERE id=? AND collection_id=?",
                    (iid, cid)
                )
        return _delight_payload(conn)

@app.delete("/api/delight/items/{iid}", status_code=204)
def delete_delight_item(iid: int):
    with db() as conn:
        _own_item(conn, iid)
        _soft_delete(conn, "delight_item", iid)

@app.post("/api/delight/items/{iid}/restore")
def restore_delight_item(iid: int):
    with db() as conn:
        _restore(conn, "delight_item", iid)
        return _delight_payload(conn)


# ── Mindscape (audio-only media: Meditation Hub + Visualization) ─────────────

class MediaCreate(BaseModel):
    kind: str = "meditation"        # 'meditation' | 'visualization'
    title: str
    image: str = ""
    youtube_id: str = ""

class MediaUpdate(BaseModel):
    kind: Optional[str] = None
    title: Optional[str] = None
    image: Optional[str] = None
    youtube_id: Optional[str] = None

def _media_row(r):
    return {"id": r["id"], "kind": r["kind"], "title": r["title"], "image": r["image"], "youtube_id": r["youtube_id"]}

_MEDIA_COLS = "id, kind, title, image, youtube_id"

def _validate_media(kind, title, image, youtube_id, *, partial=False):
    if kind is not None and kind not in ("meditation", "visualization"):
        raise HTTPException(400, "kind must be meditation or visualization")
    if not partial:
        if not (title or "").strip():
            raise HTTPException(400, "title required")
        if not (image or "").strip():
            raise HTTPException(400, "image required")
        if not (youtube_id or "").strip():
            raise HTTPException(400, "youtube link required")

@app.get("/api/media")
def get_media():
    with db() as conn:
        rows = conn.execute(
            f"SELECT {_MEDIA_COLS} FROM media_item WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY id DESC"
        ).fetchall()
        return [_media_row(r) for r in rows]

@app.post("/api/media", status_code=201)
def create_media(body: MediaCreate):
    _validate_media(body.kind, body.title, body.image, body.youtube_id)
    with db() as conn:
        cur = conn.execute(
            f"INSERT INTO media_item (user_id, kind, title, image, youtube_id) VALUES ({cu()}, ?, ?, ?, ?)",
            (body.kind, body.title.strip(), body.image, body.youtube_id.strip())
        )
        r = conn.execute(f"SELECT {_MEDIA_COLS} FROM media_item WHERE id=?", (cur.lastrowid,)).fetchone()
        return _media_row(r)

@app.put("/api/media/{mid}")
def update_media(mid: int, body: MediaUpdate):
    data = body.dict(exclude_unset=True)
    _validate_media(data.get("kind"), data.get("title"), data.get("image"), data.get("youtube_id"), partial=True)
    updates = {}
    for k in ("kind", "title", "image", "youtube_id"):
        if k in data and data[k] is not None:
            updates[k] = data[k].strip() if k in ("title", "youtube_id") else data[k]
    with db() as conn:
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE media_item SET {sets} WHERE id=? AND user_id={cu()}", (*updates.values(), mid))
        r = conn.execute(f"SELECT {_MEDIA_COLS} FROM media_item WHERE id=?", (mid,)).fetchone()
        if not r:
            raise HTTPException(404)
        return _media_row(r)

@app.delete("/api/media/{mid}", status_code=204)
def delete_media(mid: int):
    with db() as conn:
        _soft_delete(conn, "media_item", mid)

@app.post("/api/media/{mid}/restore")
def restore_media(mid: int):
    with db() as conn:
        _restore(conn, "media_item", mid)
        r = conn.execute(f"SELECT {_MEDIA_COLS} FROM media_item WHERE id=?", (mid,)).fetchone()
        return _media_row(r) if r else {}


# ── Spiritual decks (user-created text/image collections) ────────────────────

class DeckCreate(BaseModel):
    title: str
    type: str = "text"          # 'text' | 'images'
    content: str = ""
    images: List[str] = []

def _deck_row(r):
    return {"id": r["id"], "title": r["title"], "type": r["type"],
            "content": r["content"], "images": json.loads(r["images"])}

@app.get("/api/spiritual/decks")
def get_decks():
    with db() as conn:
        rows = conn.execute(
            f"SELECT id, title, type, content, images FROM spiritual_deck "
            f"WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY id DESC"
        ).fetchall()
        return [_deck_row(r) for r in rows]

@app.post("/api/spiritual/decks", status_code=201)
def create_deck(body: DeckCreate):
    if not body.title.strip():
        raise HTTPException(400, "title required")
    if body.type not in ("text", "images"):
        raise HTTPException(400, "type must be text or images")
    if body.type == "text" and not body.content.strip():
        raise HTTPException(400, "content required for a text deck")
    if body.type == "images" and not body.images:
        raise HTTPException(400, "at least one image required")
    with db() as conn:
        cur = conn.execute(
            f"INSERT INTO spiritual_deck (user_id, title, type, content, images) VALUES ({cu()}, ?, ?, ?, ?)",
            (body.title.strip(), body.type, body.content, json.dumps(body.images))
        )
        r = conn.execute("SELECT id, title, type, content, images FROM spiritual_deck WHERE id=?", (cur.lastrowid,)).fetchone()
        return _deck_row(r)

@app.delete("/api/spiritual/decks/{deck_id}", status_code=204)
def delete_deck(deck_id: int):
    with db() as conn:
        _soft_delete(conn, "spiritual_deck", deck_id)

@app.post("/api/spiritual/decks/{deck_id}/restore")
def restore_deck(deck_id: int):
    with db() as conn:
        _restore(conn, "spiritual_deck", deck_id)
        r = conn.execute("SELECT id, title, type, content, images FROM spiritual_deck WHERE id=?", (deck_id,)).fetchone()
        return _deck_row(r) if r else {}


# ── Grove (Focus / Pomodoro) ──────────────────────────────────────────────────

class FocusCreate(BaseModel):
    label: Optional[str] = None
    tree: str = "oak"
    duration_min: int
    actual_min: int = 0
    completed: bool = False
    started_at: Optional[str] = None
    ended_at: Optional[str] = None

def _focus_row(r) -> dict:
    return {
        "id": r["id"], "label": r["label"], "tree": r["tree"],
        "duration_min": r["duration_min"], "actual_min": r["actual_min"],
        "completed": bool(r["completed"]), "started_at": r["started_at"],
        "ended_at": r["ended_at"], "created_at": r["created_at"],
    }

@app.get("/api/focus")
def get_focus():
    with db() as conn:
        rows = [_focus_row(r) for r in conn.execute(
            f"""SELECT id, label, tree, duration_min, actual_min, completed, started_at, ended_at, created_at
                FROM focus_session WHERE user_id={cu()} AND deleted_at IS NULL
                ORDER BY COALESCE(started_at, created_at) DESC""").fetchall()]

    def day_of(s):
        return (s["started_at"] or s["created_at"] or "")[:10]

    completed = [s for s in rows if s["completed"]]
    today = str(date.today())
    today_min = sum(s["actual_min"] for s in completed if day_of(s) == today)
    days = {day_of(s) for s in completed if day_of(s)}
    # streak: consecutive days ending today (or yesterday) with a completed session
    streak, d = 0, date.today()
    if str(d) not in days:
        d -= timedelta(days=1)
    while str(d) in days:
        streak += 1
        d -= timedelta(days=1)

    stats = {
        "trees": len(completed),
        "total_minutes": sum(s["actual_min"] for s in completed),
        "today_minutes": today_min,
        "today_trees": len([s for s in completed if day_of(s) == today]),
        "total_sessions": len(rows),
        "success_rate": round(100 * len(completed) / len(rows)) if rows else 0,
        "streak": streak,
    }
    return {"sessions": rows, "stats": stats}

@app.post("/api/focus", status_code=201)
def create_focus(body: FocusCreate):
    with db() as conn:
        cur = conn.execute(
            f"""INSERT INTO focus_session (user_id, label, tree, duration_min, actual_min, completed, started_at, ended_at)
                VALUES ({cu()}, ?, ?, ?, ?, ?, ?, ?)""",
            (body.label, body.tree, body.duration_min, body.actual_min,
             1 if body.completed else 0, body.started_at, body.ended_at)
        )
        r = conn.execute(
            """SELECT id, label, tree, duration_min, actual_min, completed, started_at, ended_at, created_at
               FROM focus_session WHERE id=?""", (cur.lastrowid,)).fetchone()
        return _focus_row(r)

@app.delete("/api/focus/{session_id}", status_code=204)
def delete_focus(session_id: int):
    with db() as conn:
        conn.execute(f"UPDATE focus_session SET deleted_at=? WHERE id=? AND user_id={cu()}",
                     (_now_iso(), session_id))


# ── Challenges (small money-goal steps toward success) ───────────────────────
# Each challenge tracks completed vs a target amount. Reaching the target on or
# before its end_date completes it and banks reward_cost into the "Challenge
# Rewards" reward type (see /api/challenges/rewards). allow_negative permits a
# running loss (e.g. a trading challenge showing -35000 in red).

class ChallengeCreate(BaseModel):
    name: str
    completed: float = 0
    target: float = 0
    end_date: Optional[str] = None
    reward: str = ""
    reward_cost: float = 0
    comment: str = ""
    allow_negative: bool = False

class ChallengeUpdate(BaseModel):
    name: Optional[str] = None
    completed: Optional[float] = None
    target: Optional[float] = None
    end_date: Optional[str] = None
    reward: Optional[str] = None
    reward_cost: Optional[float] = None
    comment: Optional[str] = None
    allow_negative: Optional[bool] = None

_CH_COLS = ("id, name, completed, target, end_date, reward, reward_cost, "
            "comment, allow_negative, position")

def _challenge_status(r) -> str:
    """done → target reached; failed → past end_date without reaching target;
    active → still in progress."""
    if r["completed"] >= r["target"] and r["target"] > 0:
        return "done"
    if r["end_date"] and r["end_date"] < date.today().isoformat():
        return "failed"
    return "active"

def _challenge_row(r) -> dict:
    status = _challenge_status(r)
    return {
        "id": r["id"], "name": r["name"], "completed": r["completed"], "target": r["target"],
        "remaining": max(0.0, (r["target"] or 0) - (r["completed"] or 0)),
        "end_date": r["end_date"], "reward": r["reward"], "reward_cost": r["reward_cost"],
        "comment": r["comment"], "allow_negative": bool(r["allow_negative"]),
        "position": r["position"], "status": status,
        # reward is banked only when the target is actually reached (not on failure)
        "reward_earned": r["reward_cost"] if status == "done" else 0,
    }

@app.get("/api/challenges")
def get_challenges():
    with db() as conn:
        rows = conn.execute(
            f"SELECT {_CH_COLS} FROM challenge WHERE user_id={cu()} AND deleted_at IS NULL "
            "ORDER BY position, id"
        ).fetchall()
        return [_challenge_row(r) for r in rows]

@app.post("/api/challenges", status_code=201)
def create_challenge(body: ChallengeCreate):
    name = (body.name or "").strip()
    if not name:
        raise HTTPException(400, "name required")
    with db() as conn:
        pos = conn.execute(
            f"SELECT COALESCE(MAX(position),-1)+1 p FROM challenge WHERE user_id={cu()}"
        ).fetchone()["p"]
        cur = conn.execute(
            f"INSERT INTO challenge (user_id, name, completed, target, end_date, reward, "
            f"reward_cost, comment, allow_negative, position) VALUES ({cu()},?,?,?,?,?,?,?,?,?)",
            (name, body.completed or 0, body.target or 0, body.end_date,
             (body.reward or "").strip(), max(0, body.reward_cost or 0), (body.comment or "").strip(),
             1 if body.allow_negative else 0, pos)
        )
        r = conn.execute(f"SELECT {_CH_COLS} FROM challenge WHERE id=?", (cur.lastrowid,)).fetchone()
        return _challenge_row(r)

@app.put("/api/challenges/{cid}")
def update_challenge(cid: int, body: ChallengeUpdate):
    with db() as conn:
        owned = conn.execute(
            f"SELECT id FROM challenge WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (cid,)
        ).fetchone()
        if not owned:
            raise HTTPException(404, "Challenge not found")
        updates = {}
        if body.name is not None and body.name.strip():
            updates["name"] = body.name.strip()
        if body.completed is not None:
            updates["completed"] = body.completed
        if body.target is not None:
            updates["target"] = max(0, body.target)
        if body.end_date is not None:
            updates["end_date"] = body.end_date or None
        if body.reward is not None:
            updates["reward"] = body.reward.strip()
        if body.reward_cost is not None:
            updates["reward_cost"] = max(0, body.reward_cost)
        if body.comment is not None:
            updates["comment"] = body.comment.strip()
        if body.allow_negative is not None:
            updates["allow_negative"] = 1 if body.allow_negative else 0
        # Progress can't dip below zero unless the challenge allows it.
        allow_neg = updates.get("allow_negative",
                                conn.execute("SELECT allow_negative FROM challenge WHERE id=?", (cid,)).fetchone()[0])
        if "completed" in updates and not allow_neg and updates["completed"] < 0:
            updates["completed"] = 0
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE challenge SET {sets} WHERE id=?", (*updates.values(), cid))
        r = conn.execute(f"SELECT {_CH_COLS} FROM challenge WHERE id=?", (cid,)).fetchone()
        return _challenge_row(r)

@app.delete("/api/challenges/{cid}", status_code=204)
def delete_challenge(cid: int):
    with db() as conn:
        _soft_delete(conn, "challenge", cid)

@app.post("/api/challenges/{cid}/restore")
def restore_challenge(cid: int):
    with db() as conn:
        _restore(conn, "challenge", cid)
        r = conn.execute(f"SELECT {_CH_COLS} FROM challenge WHERE id=?", (cid,)).fetchone()
        return _challenge_row(r) if r else {}


# ── Bucket List (materialistic wishes, ordered by priority) ──────────────────
# Wishes can be fulfilled from the Rewards "Take" flow, which deducts the wish's
# cost as a payout and marks it fulfilled.

class BucketWishCreate(BaseModel):
    wish: str
    cost: float = 0
    note: str = ""
    link: str = ""

class BucketWishUpdate(BaseModel):
    wish: Optional[str] = None
    cost: Optional[float] = None
    note: Optional[str] = None
    link: Optional[str] = None
    fulfilled: Optional[bool] = None

class BucketArrange(BaseModel):
    order: list  # ordered list of wish ids, top = highest priority

_BW_COLS = "id, wish, cost, note, link, fulfilled, fulfilled_date, position"

def _bucket_row(r) -> dict:
    return {
        "id": r["id"], "wish": r["wish"], "cost": r["cost"], "note": r["note"],
        "link": r["link"], "fulfilled": bool(r["fulfilled"]),
        "fulfilled_date": r["fulfilled_date"], "position": r["position"],
    }

@app.get("/api/bucket")
def get_bucket():
    with db() as conn:
        rows = conn.execute(
            f"SELECT {_BW_COLS} FROM bucket_wish WHERE user_id={cu()} AND deleted_at IS NULL "
            "ORDER BY position, id"
        ).fetchall()
        return [_bucket_row(r) for r in rows]

# NOTE: declared before the `/{wid}` routes so "arrange" isn't captured as {wid}.
@app.put("/api/bucket/arrange")
def arrange_bucket(body: BucketArrange):
    """Persist a new priority ordering of the user's wishes (top = highest)."""
    with db() as conn:
        owned = {r["id"] for r in conn.execute(
            f"SELECT id FROM bucket_wish WHERE user_id={cu()} AND deleted_at IS NULL"
        ).fetchall()}
        pos = 0
        for wid in (body.order or []):
            try:
                wid = int(wid)
            except (TypeError, ValueError):
                continue
            if wid in owned:
                conn.execute(f"UPDATE bucket_wish SET position=? WHERE id=? AND user_id={cu()}", (pos, wid))
                pos += 1
        return {"ok": True}

@app.post("/api/bucket", status_code=201)
def create_bucket(body: BucketWishCreate):
    wish = (body.wish or "").strip()
    if not wish:
        raise HTTPException(400, "wish required")
    with db() as conn:
        pos = conn.execute(
            f"SELECT COALESCE(MAX(position),-1)+1 p FROM bucket_wish WHERE user_id={cu()}"
        ).fetchone()["p"]
        cur = conn.execute(
            f"INSERT INTO bucket_wish (user_id, wish, cost, note, link, position) VALUES ({cu()},?,?,?,?,?)",
            (wish, max(0, body.cost or 0), (body.note or "").strip(), (body.link or "").strip(), pos)
        )
        r = conn.execute(f"SELECT {_BW_COLS} FROM bucket_wish WHERE id=?", (cur.lastrowid,)).fetchone()
        return _bucket_row(r)

@app.put("/api/bucket/{wid}")
def update_bucket(wid: int, body: BucketWishUpdate):
    with db() as conn:
        owned = conn.execute(
            f"SELECT id FROM bucket_wish WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (wid,)
        ).fetchone()
        if not owned:
            raise HTTPException(404, "Wish not found")
        updates = {}
        if body.wish is not None and body.wish.strip():
            updates["wish"] = body.wish.strip()
        if body.cost is not None:
            updates["cost"] = max(0, body.cost)
        if body.note is not None:
            updates["note"] = body.note.strip()
        if body.link is not None:
            updates["link"] = body.link.strip()
        if body.fulfilled is not None:
            updates["fulfilled"] = 1 if body.fulfilled else 0
            # Toggling fulfilled on/off stamps or clears the date accordingly.
            updates["fulfilled_date"] = date.today().isoformat() if body.fulfilled else None
        if updates:
            sets = ", ".join(f"{k}=?" for k in updates)
            conn.execute(f"UPDATE bucket_wish SET {sets} WHERE id=?", (*updates.values(), wid))
        r = conn.execute(f"SELECT {_BW_COLS} FROM bucket_wish WHERE id=?", (wid,)).fetchone()
        return _bucket_row(r)

@app.post("/api/bucket/{wid}/fulfill")
def fulfill_bucket(wid: int):
    """Mark a wish fulfilled and record a reward payout equal to its cost. Returns
    the created payout so the Rewards screen can refresh its ledger."""
    with db() as conn:
        r = conn.execute(
            f"SELECT {_BW_COLS} FROM bucket_wish WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (wid,)
        ).fetchone()
        if not r:
            raise HTTPException(404, "Wish not found")
        if r["fulfilled"]:
            raise HTTPException(400, "Wish already fulfilled")
        today = str(date.today())
        conn.execute(
            "UPDATE bucket_wish SET fulfilled=1, fulfilled_date=? WHERE id=?", (today, wid)
        )
        pay = conn.execute(
            f"INSERT INTO reward_payout (user_id, amount, note, pay_date) VALUES ({cu()}, ?, ?, ?)",
            (max(0, r["cost"] or 0), r["wish"], today)
        )
        prow = conn.execute("SELECT id, amount, note, pay_date FROM reward_payout WHERE id=?", (pay.lastrowid,)).fetchone()
        wrow = conn.execute(f"SELECT {_BW_COLS} FROM bucket_wish WHERE id=?", (wid,)).fetchone()
        return {"wish": _bucket_row(wrow), "payout": _payout_row(prow)}

@app.delete("/api/bucket/{wid}", status_code=204)
def delete_bucket(wid: int):
    with db() as conn:
        _soft_delete(conn, "bucket_wish", wid)

@app.post("/api/bucket/{wid}/restore")
def restore_bucket(wid: int):
    with db() as conn:
        _restore(conn, "bucket_wish", wid)
        r = conn.execute(f"SELECT {_BW_COLS} FROM bucket_wish WHERE id=?", (wid,)).fetchone()
        return _bucket_row(r) if r else {}


# ── Per-user settings (key/value JSON) ────────────────────────────────────────

class SettingBody(BaseModel):
    value: object = None

@app.get("/api/settings/{key}")
def get_setting(key: str):
    with db() as conn:
        row = conn.execute(
            f"SELECT value FROM user_setting WHERE user_id={cu()} AND key=?", (key,)
        ).fetchone()
    val = json.loads(row["value"]) if row and row["value"] else None
    return {"key": key, "value": val}

@app.put("/api/settings/{key}")
def put_setting(key: str, body: SettingBody):
    with db() as conn:
        conn.execute(
            f"INSERT OR REPLACE INTO user_setting (user_id, key, value) VALUES ({cu()}, ?, ?)",
            (key, json.dumps(body.value)),
        )
    return {"key": key, "value": body.value}


# ── Serve React frontend (must be last) ──────────────────────────────────────

if os.path.isdir(DIST):
    app.mount("/assets", StaticFiles(directory=os.path.join(DIST, "assets")), name="assets")

    @app.get("/{full_path:path}", include_in_schema=False)
    def serve_spa(full_path: str):
        # Serve real static files copied from Vite's public/ (images, etc.);
        # fall back to index.html for client-side SPA routes.
        if full_path:
            candidate = os.path.normpath(os.path.join(DIST, full_path))
            if candidate.startswith(os.path.normpath(DIST)) and os.path.isfile(candidate):
                return FileResponse(candidate)
        return FileResponse(os.path.join(DIST, "index.html"))

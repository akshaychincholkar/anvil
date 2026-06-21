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
import secrets
import time
import calendar
from contextvars import ContextVar
from datetime import date, timedelta, datetime

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

def hash_password(password: str, salt: str) -> str:
    return hashlib.pbkdf2_hmac("sha256", password.encode(), salt.encode(), 120_000).hex()

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
_PUBLIC_API = {"/api/auth/login", "/api/auth/register"}

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

def _get_gcal_service(uid: int):
    if not GOOGLE_CLIENT_ID or not uid:
        return None
    try:
        from google.oauth2.credentials import Credentials
        from googleapiclient.discovery import build
        from google.auth.transport.requests import Request
    except ImportError:
        return None
    with db() as conn:
        row = conn.execute(
            "SELECT token_json FROM oauth_token WHERE user_id=? AND provider='google'", (uid,)
        ).fetchone()
    if not row:
        return None
    creds = Credentials.from_authorized_user_info(json.loads(row["token_json"]), GCAL_SCOPES)
    if creds.expired and creds.refresh_token:
        creds.refresh(Request())
        with db() as conn:
            conn.execute(
                "UPDATE oauth_token SET token_json=? WHERE user_id=? AND provider='google'",
                (creds.to_json(), uid)
            )
    return build("calendar", "v3", credentials=creds)

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

class RegisterBody(BaseModel):
    name: str
    email: str
    password: str

class LoginBody(BaseModel):
    email: str
    password: str

def _user_public(row) -> dict:
    return {"id": row["id"], "name": row["name"], "email": row["email"]}

@app.post("/api/auth/register", status_code=201)
def register(body: RegisterBody):
    email = body.email.strip().lower()
    if not email or not body.password:
        raise HTTPException(400, "Email and password are required")
    with db() as conn:
        if conn.execute("SELECT 1 FROM user WHERE lower(email)=?", (email,)).fetchone():
            raise HTTPException(409, "An account with this email already exists")
        salt = secrets.token_hex(16)
        pwhash = hash_password(body.password, salt)
        # First account claims the legacy single-user data (user 1 has no email yet).
        legacy = conn.execute("SELECT id FROM user WHERE id=1 AND email IS NULL").fetchone()
        if legacy:
            conn.execute("UPDATE user SET name=?, email=?, password_hash=?, salt=? WHERE id=1",
                         (body.name.strip() or "Anvil User", email, pwhash, salt))
            uid = 1
        else:
            cur = conn.execute("INSERT INTO user (name, email, password_hash, salt) VALUES (?,?,?,?)",
                               (body.name.strip() or "Anvil User", email, pwhash, salt))
            uid = cur.lastrowid
        _seed_pillars(conn, uid)
        row = conn.execute("SELECT id, name, email FROM user WHERE id=?", (uid,)).fetchone()
        return {"token": make_token(uid), "user": _user_public(row)}

@app.post("/api/auth/login")
def login(body: LoginBody):
    email = body.email.strip().lower()
    with db() as conn:
        row = conn.execute("SELECT id, name, email, password_hash, salt FROM user WHERE lower(email)=?", (email,)).fetchone()
        if not row or not row["password_hash"]:
            raise HTTPException(401, "Invalid email or password")
        if not hmac.compare_digest(hash_password(body.password, row["salt"]), row["password_hash"]):
            raise HTTPException(401, "Invalid email or password")
        return {"token": make_token(row["id"]), "user": _user_public(row)}

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


# ── Pillars ──────────────────────────────────────────────────────────────────

@app.get("/api/pillars")
def get_pillars():
    with db() as conn:
        rows = conn.execute(f"SELECT id, name, color FROM pillar WHERE user_id={cu()}").fetchall()
        return [row_dict(r) for r in rows]


# ── Google Calendar Auth ──────────────────────────────────────────────────────

@app.get("/api/auth/google/status")
def google_status():
    with db() as conn:
        row = conn.execute(
            "SELECT id FROM oauth_token WHERE user_id=? AND provider='google'", (cu(),)
        ).fetchone()
    return {"connected": row is not None, "configured": bool(GOOGLE_CLIENT_ID)}

@app.get("/api/auth/google")
def google_auth(token: str = ""):
    # Browser navigation (no Authorization header) → carry the app token in the query,
    # then embed the verified uid in the OAuth `state` so the callback knows the user.
    uid = verify_token(token)
    if not uid:
        raise HTTPException(401, "Not authenticated")
    from google_auth_oauthlib.flow import Flow
    flow = Flow.from_client_config(_gcal_client_config(), scopes=GCAL_SCOPES)
    flow.redirect_uri = GCAL_REDIRECT
    auth_url, _ = flow.authorization_url(access_type="offline", prompt="consent", state=make_token(uid))
    return RedirectResponse(auth_url)

@app.get("/api/auth/google/callback")
def google_callback(code: str, state: Optional[str] = None, error: Optional[str] = None):
    if error:
        return RedirectResponse("/?gcal=error")
    uid = verify_token(state or "")
    if not uid:
        return RedirectResponse("/?gcal=error")
    from google_auth_oauthlib.flow import Flow
    flow = Flow.from_client_config(_gcal_client_config(), scopes=GCAL_SCOPES)
    flow.redirect_uri = GCAL_REDIRECT
    flow.fetch_token(code=code)
    creds = flow.credentials
    with db() as conn:
        conn.execute(
            "INSERT OR REPLACE INTO oauth_token (user_id, provider, token_json) VALUES (?, 'google', ?)",
            (uid, creds.to_json())
        )
    return RedirectResponse("/?gcal=connected")

@app.delete("/api/auth/google", status_code=204)
def google_disconnect():
    with db() as conn:
        conn.execute("DELETE FROM oauth_token WHERE user_id=? AND provider='google'", (cu(),))


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
    if body.start_datetime:
        service = _get_gcal_service(cu())
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

def _habit_full(conn, habit_id: int) -> dict:
    h = conn.execute(f"""
        SELECT h.id, p.name AS pillar, h.name, h.target_per_week, h.reminder_time,
               h.type, h.target_count, h.period
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
    d = row_dict(h)
    d["logs"] = logs
    d["log_notes"] = log_notes
    d["log_counts"] = log_counts
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
        cur = conn.execute(
            f"INSERT INTO habit (user_id,pillar_id,name,target_per_week,type,target_count,period) VALUES ({cu()},?,?,?,?,?,?)",
            (pid, body.name, body.target_per_week, body.type, body.target_count, body.period)
        )
        return _habit_full(conn, cur.lastrowid)

@app.put("/api/habits/{habit_id}")
def update_habit(habit_id: int, body: HabitUpdate):
    with db() as conn:
        updates = {k: v for k, v in body.dict().items() if v is not None}
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
    minimum → done when count >= target; maximum → done when 0 < count <= target."""
    with db() as conn:
        h = conn.execute(
            f"SELECT type, target_count FROM habit WHERE id=? AND user_id={cu()}", (habit_id,)
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
            f"FROM habit h WHERE h.user_id={cu()} AND h.deleted_at IS NULL ORDER BY h.id"
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

class SkillNoteCreate(BaseModel):
    text: str
    stage: str

class StageComplete(BaseModel):
    stage: str

def _skill_full(conn, skill_id: int) -> dict:
    row = conn.execute(f"""
        SELECT s.id, p.name AS pillar, s.title, s.source_type, s.stage, s.completed_stages
        FROM skill s JOIN pillar p ON s.pillar_id=p.id
        WHERE s.id=? AND s.user_id={cu()} AND s.deleted_at IS NULL
    """, (skill_id,)).fetchone()
    if not row:
        raise HTTPException(404, "Skill not found")
    notes_raw = conn.execute(
        "SELECT id, stage, text, done, created_at FROM skill_note WHERE skill_id=? ORDER BY stage, id",
        (skill_id,)
    ).fetchall()
    d = row_dict(row)
    try:
        d["completed_stages"] = json.loads(d["completed_stages"] or "{}")
    except Exception:
        d["completed_stages"] = {}
    notes_by_stage = {s: [] for s in STAGE_ORDER}
    for n in notes_raw:
        notes_by_stage[n["stage"]].append({"id": n["id"], "text": n["text"], "done": bool(n["done"])})
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
            f"INSERT INTO skill (user_id,pillar_id,title,source_type,stage,completed_stages) VALUES ({cu()},?,?,?,'D','{{}}')",
            (pid, body.title, body.source_type)
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


# ── Kickstart (motivation video hub) ─────────────────────────────────────────

class KickstartCreate(BaseModel):
    youtube_id: str
    title: str = ""
    start_sec: int = 0
    end_sec: Optional[int] = None
    days: List[str] = []
    pillars: List[str] = []
    customs: List[str] = []

class KickstartUpdate(BaseModel):
    youtube_id: Optional[str] = None
    title: Optional[str] = None
    start_sec: Optional[int] = None
    end_sec: Optional[int] = None
    days: Optional[List[str]] = None
    pillars: Optional[List[str]] = None
    customs: Optional[List[str]] = None

def _ks_row(r):
    return {
        "id": r["id"], "youtube_id": r["youtube_id"], "title": r["title"],
        "start_sec": r["start_sec"], "end_sec": r["end_sec"],
        "days": json.loads(r["days"]), "pillars": json.loads(r["pillars"]),
        "customs": json.loads(r["customs"]),
    }

_KS_COLS = "id, youtube_id, title, start_sec, end_sec, days, pillars, customs"

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
        raise HTTPException(400, "youtube_id required")
    if not body.days:
        raise HTTPException(400, "at least one day tag is required")
    with db() as conn:
        cur = conn.execute(
            f"INSERT INTO kickstart_video (user_id, youtube_id, title, start_sec, end_sec, days, pillars, customs) "
            f"VALUES ({cu()}, ?, ?, ?, ?, ?, ?, ?)",
            (body.youtube_id.strip(), body.title.strip(), max(0, body.start_sec), body.end_sec,
             json.dumps(body.days), json.dumps(body.pillars), json.dumps(body.customs))
        )
        r = conn.execute(f"SELECT {_KS_COLS} FROM kickstart_video WHERE id=?", (cur.lastrowid,)).fetchone()
        return _ks_row(r)

@app.put("/api/kickstart/videos/{vid}")
def update_kickstart(vid: int, body: KickstartUpdate):
    data = body.dict(exclude_unset=True)  # only fields the client actually sent
    if "days" in data and not data["days"]:
        raise HTTPException(400, "at least one day tag is required")
    updates = {}
    for k in ("youtube_id", "title", "start_sec", "end_sec"):
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
    return {
        "id": gid, "title": r["title"], "image": r["image"], "created_date": r["created_date"],
        "achieved": bool(r["achieved"]), "achieved_date": r["achieved_date"],
        "streak": _golden_streak(conn, gid), "total_days": total, "days_to_manifest": days_to,
    }

def _golden_get(conn, gid):
    return conn.execute(
        f"SELECT id, title, image, created_date, achieved, achieved_date FROM golden_goal "
        f"WHERE id=? AND user_id={cu()} AND deleted_at IS NULL", (gid,)
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
            f"SELECT id, title, image, created_date, achieved, achieved_date FROM golden_goal "
            f"WHERE user_id={cu()} AND deleted_at IS NULL ORDER BY achieved ASC, id DESC"
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

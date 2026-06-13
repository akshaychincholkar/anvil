# Anvil

A single-user personal life-management web app built around five life pillars: **Financial**, **Academic**, **Relationship**, **Health**, and **Spiritual**.

Seven screens replace seven separate apps:

| # | Screen | What it does |
|---|--------|--------------|
| 1 | Quadrant View | Eisenhower matrix for tasks — Important/Urgent sorting with pillar colour coding |
| 2 | Goals + Gantt | Yearly → Quarterly → Monthly → Weekly goal tree with a 12-month Gantt chart |
| 3 | Habit Tracker | Weekly check-off grid, monthly calendar view, streaks, and reminders |
| 4 | Journal | Daily mood + five micro-prompt bullet sections, mood-history calendar |
| 5 | Skills (DIKW) | Track learning through Data → Information → Knowledge → Wisdom stages |
| 6 | Spiritual | Annotated scripture library with insights, reflection, and read streaks |
| 7 | Revision | Spaced-repetition reviews at 1, 3, 7, 15, 30 days — missed reviews roll to today |

## Tech stack

- **Frontend:** React 18 + Vite, inline styles, lucide-react icons
- **Backend:** FastAPI (Python 3.11), SQLite with WAL mode
- **Fonts:** Fraunces (headings) + Inter (body) via Google Fonts
- **Deploy:** Fly.io (single container, persistent SQLite volume)

## Local development

### Prerequisites

- Python 3.11+
- Node.js 18+

### Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate        # Windows
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Or just double-click `start-backend.bat`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Or just double-click `start-frontend.bat`.

Frontend runs at `http://localhost:5173` and proxies `/api` calls to the backend on port 8000.

## Deploy to Fly.io

### One-time setup

```bash
# Install flyctl
iwr https://fly.io/install.ps1 -useb | iex

# Log in (or sign up)
flyctl auth login

# From the project root — configure the app (no deploy yet)
flyctl launch --no-deploy

# Create a 1 GB persistent volume for the SQLite database
flyctl volumes create anvil_data --region sin --size 1
```

### Deploy

```bash
flyctl deploy
```

The Dockerfile does a multi-stage build: Node builds the React app, then Python serves both the API and the built frontend on a single port (8080). The SQLite database lives at `/data/anvil.db` on the persistent volume.

### Open in browser

```bash
flyctl open
```

### Subsequent deploys

```bash
flyctl deploy
```

Data persists across deploys via the mounted volume.

## Project structure

```
anvil/
├── backend/
│   ├── main.py          # FastAPI app — all REST endpoints
│   ├── database.py      # SQLite schema, migrations, seed data
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── App.jsx              # Nav sidebar + screen routing
│   │   ├── api.js               # API client (all fetch calls)
│   │   └── screens/
│   │       ├── QuadrantView.jsx
│   │       ├── GoalsWithGantt.jsx
│   │       ├── HabitTracker.jsx
│   │       ├── JournalScreen.jsx
│   │       ├── SkillsScreen.jsx
│   │       ├── SpiritualScreen.jsx
│   │       └── RevisionScreen.jsx
│   ├── index.html
│   └── vite.config.js
├── Dockerfile
├── fly.toml
├── start-backend.bat
└── start-frontend.bat
```

## Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DB_PATH` | `backend/anvil.db` | Path to the SQLite database file |

Set automatically to `/data/anvil.db` in the Fly.io container via `fly.toml`.

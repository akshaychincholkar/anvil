# CLAUDE.md — BRTN Personal System

> Project instructions for Claude Code. Read this fully before scaffolding or editing.

## What this is

A **single-user** personal life-management web app called **BRTN** (BitTools Reference Time Norms). It consolidates seven screens so the owner doesn't switch between apps. It is organised around **five life pillars** that recur across every screen:

| Pillar | Hex |
|---|---|
| Financial | `#C9A227` |
| Academic | `#3A7CA5` |
| Relationship | `#C2536B` |
| Health | `#4C9A6B` |
| Spiritual | `#8268B0` |

Shared visual language (already established in the prototype JSX files — match it):
- Background `#F7F6F3`, cards white with `borderRadius: 12` and a soft shadow, text `#26241F`.
- Display font **Fraunces** (serif) for headings; **Inter** for body.
- Pillar colour-coding everywhere (dots, bars, tags).
- Mood scale reused across Journal + Spiritual: Rough 😣 `#C2536B` · Low 🙁 `#C2773B` · Okay 😐 `#C9A227` · Good 🙂 `#4C9A6B` · Great 😄 `#3A7CA5`.

## Core build decisions (do not relitigate)

1. **Single-user first.** No auth, no multi-tenancy. But every table carries a `user_id` column so multi-user is a later migration, not a rewrite. Do **not** build login/accounts now.
2. **Stack:** React frontend (the prototypes are plain React + inline styles + `lucide-react`), Node backend, **SQLite** for now (Postgres only if/when deployed to a server). No Next.js.
3. **Persistence is the real work.** The 7 prototype JSX files use in-memory `useState` seed arrays. The job is to replace those seeds with real fetches/saves against the backend. Keep the UI; swap the data layer.
4. **Google Calendar sync** is currently a stub. Implement it as a real OAuth + Calendar API call only after the core CRUD works.
5. **Storage:** never use `localStorage`/`sessionStorage`. Real persistence goes through the backend API.
6. **Scope discipline.** Seven screens is the ceiling. Get core CRUD working per screen before polishing. Wire the highest-value screens first (see Build Order).

## Data model (SQLite; every table has `user_id`)

```
User            id, name, timezone (default 'Asia/Kolkata')

Pillar          id, user_id, name, color
                — seed the 5 pillars above

-- Screen 1: Quadrant View (tasks)
Task            id, user_id, pillar_id, title,
                quadrant (Q1|Q2|Q3|Q4), time_estimate_min,
                gcal_event_id (nullable), status, created_at
                -- quadrant symbols: Q1=™ Q2=© Q3=® Q4=•

-- Screen 2: Goals + Gantt
Goal            id, user_id, pillar_id, title,
                horizon (Yearly|Quarterly|Monthly|Weekly),
                parent_goal_id (nullable, self-ref),
                start_date, end_date   -- real dates; derive period label + Gantt span from these
                -- child horizon is always one level below its parent

-- Screen 3: Habits
Habit           id, user_id, pillar_id, name, target_per_week,
                reminder_time (nullable)
HabitLog        id, habit_id, date, done (bool)

-- Screen 4: Journal
JournalEntry    id, user_id, date (unique per user), mood (1-5)
JournalBullet   id, entry_id, section (wins|grateful|mattered|letgo|tomorrow), text

-- Screen 5: Skills (DIKW)
Skill           id, user_id, pillar_id, title,
                source_type (book|video|article),
                stage (D|I|K|W),
                note_D, note_I, note_K, note_W   -- text per stage

-- Screen 6: Spiritual
Scripture       id, user_id, name, color, streak
Chapter         id, scripture_id, title, read_date, mood (1-5),
                reflection, contemplation, bookmarked (bool)
ChapterInsight  id, chapter_id, text

-- Screen 7: Revision (spaced repetition)
RevisionTopic   id, user_id, pillar_id, topic, learned_date,
                intervals (json, default [1,3,7,15,30])
Review          id, topic_id, stage, of, due_date, done (bool)
                -- missed (past, undone) reviews roll to today via query logic, NOT by rewriting due_date
```

## The seven screens (prototype files exist; match their UI)

Each entry below is a self-contained prompt. The corresponding `.jsx` prototype is the source of truth for layout and interactions — read it, then wire it to the backend.

### Screen 1 — `QuadrantView.jsx`
Eisenhower matrix for **tasks**. Four quadrants with symbols ™ (Important+Urgent), © (Important+NotUrgent), ® (NotImportant+Urgent), • (NotImportant+NotUrgent). Each task: pillar colour, time estimate, per-quadrant time total. A calendar button routes the task to Google Calendar with the **quadrant symbol prefixed to the event title** (e.g. "© Design data model"). Wire: Task CRUD; calendar button → Calendar API creating an event, store returned `gcal_event_id`.

### Screen 2 — `GoalsWithGantt.jsx`
Single-pillar **drill-down** goal tree, nesting Yearly → Quarterly → Monthly → Weekly via `parent_goal_id`. Child horizon is auto-assigned one level below parent; Weekly is the leaf. Each goal shows a period tag (e.g. "Q1 2026", "Jun 2026", "Jun W1") **derived from start/end dates**. Below the tree: a **12-month Gantt** showing **weekly goals only**, across a **multi-select** set of pillars (independent of the tree's single-pillar selector), bars coloured per pillar. Wire: Goal CRUD with parent linkage; derive labels + Gantt bars from dates.

### Screen 3 — `HabitTracker.jsx`
**Collapsible sidebar** (docked on desktop ≥720px, slide-in overlay on mobile). Sidebar: "All Habits" + each habit with pillar dot and streak. All Habits view = weekly check-off grid with streaks. Single habit view = monthly calendar + stat strip + four action buttons (Edit=rename, Add=log today, Modify=change target, Remind=set reminder time). Wire: Habit CRUD, HabitLog toggle per day, streak = consecutive done days back from today.

### Screen 4 — `JournalScreen.jsx`
Daily entry: tap 1 of 5 moods (logging mood = the streak trigger) + five **bulleted** micro-prompt sections (Wins, Grateful for, What mattered, Letting go of, Tomorrow's one thing). Plus a **mood-history calendar** for the month (each day shows its mood emoji/colour). Flame streak top-right. Wire: one JournalEntry per date, JournalBullet rows per section, streak = consecutive logged days.

### Screen 5 — `SkillsScreen.jsx`
**DIKW** philosophy: each skill progresses Data → Information → Knowledge → Wisdom, sequentially (can't skip). Cards show a D→I→K→W progress track; detail panel has a text block per unlocked stage; "Mark as next stage" advances; reaching **Wisdom triggers a celebration overlay** (the win). Source type book/video/article, pillar tag, Wisdom counter. Wire: Skill CRUD, stage advance writes the stage + note fields.

### Screen 6 — `SpiritualScreen.jsx`
Personal annotated scripture library. **Collapsible flat sidebar** (same responsive pattern as Habits) listing scriptures (add freely, colour picker), each expandable into chapters/shlokas. Main view per chapter: **Key Insights** (bulleted, add/remove), **Personal Reflection** (free text), **Contemplation** (how it applies to life — tinted). Per-chapter mood + bookmark toggle; per-scripture read streak. Wire: Scripture + Chapter + ChapterInsight CRUD.

### Screen 7 — `RevisionScreen.jsx`
**Spaced repetition.** "Learned something" → auto-generates 5 reviews at **1, 3, 7, 15, 30 days** (default, editable per topic). **Due Today** section at top (checkboxes, stage tag "Review 3/5"). **Monthly calendar** with a count badge per day; tap a day to list its reviews. **Missed reviews roll to today** (query-side: treat past undone reviews as due today; keep the rest of the schedule unchanged — do not mutate stored due_dates). Topics graduate to a "Cemented" list when all 5 reviews are done. Wire: RevisionTopic + Review CRUD, mark-done, roll-over query logic.

## Build order (highest daily value first)

1. **Backend skeleton** — Node server, SQLite, migrations for all tables, seed the 5 pillars.
2. **Screen 1 (Quadrant)** + **Screen 2 (Goals)** — the core planning loop.
3. **Screen 3 (Habits)** + **Screen 7 (Revision)** — daily recurring value.
4. **Screen 4 (Journal)** + **Screen 5 (Skills)** + **Screen 6 (Spiritual)**.
5. **Google Calendar OAuth + sync** for Screen 1.
6. Only then: polish, deploy (SQLite → Postgres), optional multi-user.

## Conventions

- Keep the existing inline-style design system from the prototypes; don't introduce a CSS framework unless asked.
- API: REST, JSON, one resource per screen's main entity.
- Derive computed values (period labels, Gantt spans, streaks, roll-over) on read; store only source-of-truth fields (dates, done flags).
- Timezone: Asia/Kolkata (IST).
- Ask before adding an eighth screen or any multi-user/account work — both are out of current scope.
```

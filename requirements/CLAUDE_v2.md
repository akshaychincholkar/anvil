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

---

# Change Spec — Round 1

> Apply these to the prototypes/backend. Each item names the screen, the behaviour, and any schema impact. Items marked **[cross-cutting]** affect multiple screens — build a reusable piece, don't copy-paste.

## 1. Undo-on-delete (7s) — [cross-cutting: Quadrant, Habits, Goals, Skills, all delete actions]
On any delete, do **not** hard-delete immediately. Show a toast/snackbar "Deleted — Undo" that stays for **7 seconds**; if Undo is tapped, fully restore the item **and its nested data** (e.g. a deleted skill restores all D/I/K/W notes; a deleted goal restores its children). Implement as a soft-delete: mark `deleted_at` (timestamp), filter it out of queries, and run a hard-delete sweep for rows whose `deleted_at` is older than the undo window. Build **one** reusable `useUndoableDelete` hook + a `<UndoToast>` component and use it everywhere. (This also covers item 12.)
- Schema: add `deleted_at` (nullable timestamp) to Task, Goal, Habit, Skill, Scripture, Chapter, RevisionTopic, JournalEntry.

## 2. Revision — custom date is ignored, still uses today (BUG)
In `RevisionScreen`, when the user sets a **custom learned date**, the 5 reviews must be generated from **that date**, not from today. Currently `buildReviews` is always called with `TODAY`. Fix: add a date picker to the "Learned something" form (default = today, editable), and generate reviews from the chosen `learned_date`. Roll-over logic (past undone → today) still applies on read.
- Schema: `RevisionTopic.learned_date` already exists — just honour it.

## 3. Habits — three habit types
A habit must be one of three types:
- **Regular** — yes/no per period (the current behaviour).
- **Minimum** — "at least N times per day/week/month/year". Completion = reaching N. Show progress (e.g. "3 / 5 this week").
- **Maximum** — "no more than N times per day/week/month/year". This is a *limit* habit (e.g. limit junk food). Success = staying at or under N; warn/flag when exceeded.
- Schema: add to Habit: `type` (regular|minimum|maximum), `target_count` (int, nullable for regular), `period` (day|week|month|year, nullable for regular). HabitLog stays a per-date log; min/max are computed by counting logs in the active period.
- UI: the Add/Edit habit form picks the type, then reveals the count + period inputs for minimum/maximum.

## 4. Habits — per-day note
User can attach a short note to a habit on a specific day (e.g. "skipped — travelling").
- Schema: add `note` (text, nullable) to HabitLog.
- UI: surfaced via the long-press menu (see item 8) and visible on that day's cell/detail.

## 5. Goals — no edit option (MISSING)
Add edit (and delete, via item 1) for goals at **every** horizon (Yearly, Quarterly, Monthly, Weekly). Editable fields: title, pillar, start/end dates (which drive the period tag and Gantt), and — for weekly — the week-of-month (item 7). An inline edit (pencil icon on each tree row) is preferred over a modal.

## 6. Goals (mobile) — Gantt multi-select buttons overflow the screen (BUG)
On mobile the pillar multi-select chips run off-screen. Make the chip row **wrap to the next line** (`flex-wrap: wrap`) and ensure the whole Goals screen + Gantt is horizontally contained on a ~380px viewport. Verify the tree indentation and period tags don't force horizontal scroll either.

## 7. Goals — pick which week for weekly goals (MISSING)
Weekly goals need a week selector: **Week 1 / Week 2 / Week 3 / Week 4** of their parent month. This sets the goal's start/end dates to that week and positions its Gantt bar correctly.
- Schema: derive from `start_date`/`end_date`; the selector just sets those to the chosen week's range. The period tag becomes e.g. "Jun W2".

## 8. Habits — long-press menu on the monthly view
When viewing a single habit (monthly view), a **long-press** (and a visible "⋯" affordance for desktop/accessibility) opens a menu with: **Edit**, **Delete** (with 7s undo per item 1), **Add note** (item 4), **Remind**. The four top action buttons can remain, but this menu must exist for touch.

## 9. Habits — yearly completion bar chart
At the bottom of the Habits screen, show a **bar chart**: one bar per month (Jan–Dec of the current year), height = **% of habit completions achieved that month** (completed ÷ expected, where expected accounts for each habit's type/target). Use the existing pillar palette or a single accent; keep it lightweight (no heavy chart lib needed — simple divs are fine, consistent with the prototype style).

## 10. Journal — view previous entries by date
The mood-history calendar already exists; make each day **clickable** to load that date's full journal entry (mood + all bullet sections) in read mode, with an option to edit if it's today or a past day. Today stays editable by default.
- Schema: JournalEntry is already keyed by date — just fetch by selected date.

## 11. DIKW Skills — multi-point notes + stage gating
Replace each stage's single text block with a **bulleted list** (add multiple points, like the Journal/Spiritual screens). Stage rules:
- A stage must be **explicitly marked complete** before the next unlocks. You **cannot** proceed to Information until Data is marked done, etc.
- User **can go back** to an earlier completed stage and add/edit points — **except** once the skill reaches **Wisdom**, all stages lock (no going back, no edits). Wisdom is final.
- Schema: replace `note_D/I/K/W` text columns with a `SkillNote` table: `id, skill_id, stage (D|I|K|W), text, created_at`. Add `stage_completed` tracking per skill (e.g. `completed_stages` json or a boolean per stage) so completion is explicit and separate from "has notes".

## 12. DIKW Skills — undo delete (7s) retaining data
Covered by the cross-cutting item 1: deleting a skill (or a skill note) is soft-delete with a 7-second undo that restores the skill **and all its DIKW points** intact.

## Build order for this round
1. Item 1 (undo/soft-delete) **first** — it's the foundation items 5, 8, 11, 12 depend on. Add `deleted_at` everywhere + the reusable hook/toast.
2. Item 2 (revision date bug) — quick, isolated fix.
3. Items 5, 6, 7 (Goals: edit, mobile wrap, week selector) together — they touch the same screen.
4. Items 3, 4, 8, 9 (Habits: types, notes, long-press menu, bar chart) together.
5. Item 11 (DIKW gating + multi-point notes) — the biggest single change.
6. Item 10 (Journal past entries) — small, isolated.


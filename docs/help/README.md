# Anvil — In-App Help System

This folder is the source of truth for the **Help** button that appears on every
screen in Anvil (top-right corner, next to the screen title). It's how a
first-time user learns what a section is *for*, not just how its buttons work.

## Why this exists

Anvil has grown into a dense app — Habits, Expenses, Golden Book, Grove, Rewards,
Revision, and more. A new user (or a returning one who forgot a feature) shouldn't
have to guess. Each section's Help panel answers three questions, in this order:

1. **What is this, in one sentence?**
2. **How do I actually use it?** (concrete steps, not abstract description)
3. **Why does this matter?** — the behavior-change intention behind the feature,
   and how consistent use of it is meant to shape the user over weeks/months.
   Anvil isn't a neutral tracker; every section is designed to nudge a specific
   habit of mind. The help content should say so plainly.

## Folder layout

```
docs/help/
  README.md                 ← this file — conventions, not shown in-app
  habits.md                 ← content for the Habits section
  <section>.md              ← one file per screen, same pattern

frontend/public/help/
  habits/01.jpg              ← screenshots actually served to the app
  habits/02.png
  <section>/01.jpg …
```

## Adding screenshots — the only part you'll do repeatedly

This is deliberately dead simple, because screenshots get added from a phone,
after the fact, by drag-and-drop — not by a developer coordinating filenames
with code:

1. Take a screenshot on any device.
2. Drop it into `frontend/public/help/<section>/`, named just `01.jpg` (or
   `.png`/`.jpeg`/`.webp`) — `02.jpg`, `03.jpg`, etc. for more than one.
   **The number is the only thing that matters — and it controls where the
   image appears, not just whether it does:**
   - `01` renders under **"What it is"** (the intro).
   - `02` renders under How-to-use **step 1**, `03` under step 2, `04`
     under step 3, and so on — each screenshot sits right below the step
     it's demonstrating, instead of all piling up in one block at the top.
   - No filename text needs to match anything in the `.js` file — position
     is everything. Skip a number and everything after it just shifts up
     one step early, so keep the numbering contiguous (01, 02, 03…) if you
     want a screenshot to land on a specific step.
3. Either restart the backend (it falls back to serving straight out of
   `frontend/public/help/` for any image not yet in a built `dist/`, so this
   alone is enough to go live — handy from mobile, no build required), or
   run `npm run build` in `frontend/` first if you want it baked into the
   production bundle.

Section ids (the folder name under `frontend/public/help/`) are listed in the
table below. Use `docs/help/screenshots/<section>/` as an optional mirror for
reviewers browsing the docs repo on GitHub — it isn't served by the app.

## Adding a whole new section (text + wiring)

1. Create `docs/help/<section>.md` following the structure in `habits.md`
   (What / How to use / Why it matters).
2. Copy the markdown's prose into `frontend/src/help/content/<section>.js` as
   a plain JS object: `{ title, tagline, what, howTo: [{heading, body, list?}], why }`
   — no `screenshot` field needed anymore, images are auto-discovered (see
   above). **The `.md` file is the authored/reviewed source; the `.js` file
   is its in-app copy.** Keep them in sync.
3. Register it in `frontend/src/components/HelpButton.jsx`'s `REGISTRY` map:
   `"<section>": () => import("../help/content/<section>.js")`.
4. Add `<HelpButton id="<section>" />` next to the screen's `<h1>` title,
   same placement as `HabitTracker.jsx`.
5. Create `frontend/public/help/<section>/` (can be empty until screenshots
   arrive) and, optionally, `docs/help/screenshots/<section>/` to mirror it.

## Sections covered so far

| Section          | id (HelpButton)   | Doc                                          | Screenshots |
|-------------------|--------------------|-----------------------------------------------|-------------|
| Habits            | `habits`           | [habits.md](habits.md)                       | pending |
| Dashboard         | `dashboard`        | [dashboard.md](dashboard.md)                 | pending |
| Expenses          | `expenses`         | [expenses.md](expenses.md)                   | pending |
| Golden Book       | `golden-book`      | [golden-book.md](golden-book.md)             | pending |
| Grove             | `grove`            | [grove.md](grove.md)                         | pending |
| Achievements      | `achievements`     | [achievements.md](achievements.md)           | pending |
| Journal           | `journal`          | [journal.md](journal.md)                     | pending |
| Revision          | `revision`         | [revision.md](revision.md)                   | pending |
| Spiritual         | `spiritual`        | [spiritual.md](spiritual.md)                 | pending |
| Kickstart         | `kickstart`        | [kickstart.md](kickstart.md)                 | pending |
| Affirmations      | `affirmations`     | [affirmations.md](affirmations.md)           | pending |
| Challenges        | `challenges`       | [challenges.md](challenges.md)               | pending |
| Wallet (Finance)  | `finance`          | [finance.md](finance.md)                     | pending |
| Rewards (Worth)   | `worth`            | [worth.md](worth.md)                         | pending |
| Trading Journal   | `trading-journal`  | [trading-journal.md](trading-journal.md)     | pending |
| Mindscape         | `mindscape`        | [mindscape.md](mindscape.md)                 | pending |
| Bucket List       | `bucket-list`      | [bucket-list.md](bucket-list.md)             | pending |
| Goals             | `goals`            | [goals.md](goals.md)                         | pending |
| Skills            | `skills`           | [skills.md](skills.md)                       | pending |
| Delights          | `delight`          | [delight.md](delight.md)                     | pending |

All 20 sections are text-complete and wired to a Help button on their screen.
Every section is waiting on screenshots — drop numbered PNGs into
`frontend/public/help/<id>/` (see that folder's `README.txt` for exact
expected filenames) and they'll appear automatically, no code changes
needed. Not yet covered: Settings, Auth, Weekly Routing (QuadrantView), and
Grove's Insights sub-view.

Update this table whenever a section's screenshots land or its content changes.

## Screenshot capture tips

- Crop to just the relevant card/panel where possible, not the whole screen.
- Any resolution works — the modal scales images to fit its width.
- Redact or use placeholder data for anything personal (real expense amounts,
  journal text, etc.) before saving the screenshot into this repo.
- Up to 12 numbered images per section are picked up (`01`–`12`); that's far
  more than any section needs, so don't worry about running out of slots.

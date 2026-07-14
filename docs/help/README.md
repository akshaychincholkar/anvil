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
  screenshots/
    habits/                 ← screenshots referenced by habits.md
      01-weekly-grid.png
      02-log-count.png
    <section>/               ← one subfolder per screen, matching the .md name
```

**Naming rule:** the markdown file's basename (`habits.md`) must match its
screenshot subfolder (`screenshots/habits/`) and the `id` passed to `<HelpButton>`
in the screen's JSX (e.g. `<HelpButton id="habits" />`). Keep all three in sync
when adding a new section.

## Adding help for a new section

1. Create `docs/help/<section>.md` following the structure in `habits.md`
   (What / How to use / Why it matters — see that file for the exact headings
   the in-app renderer expects).
2. Create `docs/help/screenshots/<section>/` and drop numbered PNGs/JPGs in it
   (`01-*.png`, `02-*.png`, …) as you capture them. Screenshots are optional at
   first — ship the text, add images later — but keep the numbering so the
   order in the doc and the order in the folder match.
3. Copy the markdown's prose into `frontend/src/help/content/<section>.js` as a
   plain JS object (title, intro, steps, why) — the in-app `HelpModal` reads
   from that JS file, not the markdown directly, since the frontend doesn't
   ship a markdown parser. **The `.md` file is the authored/reviewed source;
   the `.js` file is its in-app copy.** Keep them word-for-word in sync.
4. If you have screenshots, copy them into
   `frontend/public/help/<section>/` (this is what actually gets served —
   `docs/help/screenshots/` is the documentation-repo copy for reviewers
   browsing GitHub) and reference them by filename in the `.js` entry.
5. Add `<HelpButton id="<section>" />` next to the screen's `<h1>` title, same
   placement as `HabitTracker.jsx`.

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

- Crop to just the relevant card/panel, not the whole browser window.
- Use the Sandstone (default) theme for consistency across screenshots.
- PNG, ~1200px wide is plenty — these render inside a modal, not full-bleed.
- Redact or use placeholder data for anything personal (real expense amounts,
  journal text, etc.) before saving the screenshot into this repo.

# Goals — Help

*Screenshot folder: `docs/help/screenshots/goals/` — see numbering convention in [README.md](README.md).*

## What it is

Goals is where big ambitions get broken down into a timeline you can actually
see — Yearly goals cascade into Quarterly, Monthly, and Weekly ones, all laid
out on a Gantt chart so you can trace a straight line from "what I want this
year" to "what I'm doing this week."

## How to use it

1. **Add a goal.** Click **Add new goal**, pick a pillar (Financial,
   Academic, Relationship, Health, Spiritual), a horizon (Yearly, Quarterly,
   Monthly, or Weekly), and the specific period it covers. Yearly goals can
   even span multiple calendar years.
   ![Add a goal](../../frontend/public/help/goals/01-add-goal.png)
2. **Break it into sub-goals.** Any goal can have children one level down —
   a Yearly goal can have Quarterly children, which can have Monthly
   children, which can have Weekly children. Sub-goals inherit their
   parent's pillar and are automatically kept inside the parent's date
   range.
3. **See it all on the Gantt chart.** Switch between Day and Month zoom.
   Yearly and Quarterly bars are hidden by default (toggle them on with the
   eye icon) so the chart isn't overwhelming; Monthly and Weekly bars show
   automatically since those are what you act on day to day.
   ![Gantt timeline](../../frontend/public/help/goals/02-gantt-view.png)
3. **Drag to reschedule, resize to extend.** Drag any bar to shift its dates
   — Anvil keeps it inside its parent goal's range and warns you if a move
   would break that. Monthly and Weekly bars can also be resized by dragging
   their tail, up to 1.5× their original length.
4. **Filter by pillar.** Use the pillar chip row to focus the chart on just
   one area of life at a time, or "All Goals" to see everything.
5. **A Weekly goal is your "this week" goal.** There's no separate "current
   week" view — a Weekly-horizon goal created for the current week's number
   *is* what shows up as this week's priority, both here and on the
   Dashboard.

## Why it matters

The reason most yearly goals evaporate by February isn't lack of ambition —
it's that "this year" and "today" never actually get connected. Anvil's
Goals section exists to force that connection to be visible, not assumed.

- **The cascade makes the thread explicit.** A Yearly goal with no
  Quarterly, Monthly, or Weekly children under it is just a wish with a
  deadline. Building the hierarchy forces you to answer "what does this
  actually require me to do this month, this week?" — the question ambition
  alone never answers.
- **A Gantt chart makes overcommitment visible before it becomes failure.**
  When every active goal is laid out on one timeline, overlapping bars and
  gaps are obvious at a glance in a way a list of goals never shows. You see
  the collision coming instead of discovering it mid-quarter.
- **Dragging and resizing keep the plan honest, not aspirational.** Plans
  drift — that's normal. What matters is whether your *system* reflects
  reality or keeps quietly diverging from it. Being able to reschedule a bar
  in two seconds means there's no friction stopping you from keeping the
  chart true, instead of letting the whole plan go stale and get ignored.

Used consistently, this section is meant to make "this week's work" feel
like it's obviously in service of something larger — not a disconnected to-do
list, but the visible, current slice of a plan you can trace all the way up
to the year.

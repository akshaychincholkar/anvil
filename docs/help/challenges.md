# Challenges — Help

*Screenshot folder: `docs/help/screenshots/challenges/` — see numbering convention in [README.md](README.md).*

## What it is

Challenges tracks multi-day, target-based personal goals — a savings number,
a trade count, a weight target, anything measurable — with a visible
progress bar and an optional reward that gets "banked" once you hit the
target. Unlike Habits, it isn't about daily repetition; it's about a single
number moving toward a finish line over days or weeks.

## How to use it

1. **Create a challenge.** Click **New challenge** and set a Name, a
   Completed value (your starting progress), and a Target (the goal number).
   Optionally add an End date, a Reward (free-text label, e.g. "New
   headphones") and its Reward cost, a Comment, and check **Allow negative
   progress** if you're tracking something that can go backward — a running
   trading loss, for example, instead of only ever accumulating upward.
   ![New challenge form](../../frontend/public/help/challenges/01-new-challenge.png)
2. **Read a challenge card.** Each card shows the name, comment, a status
   badge, a progress bar (completed/target, capped at 100%), and chips for
   Remaining X, the end date, the reward label/cost, and "± negative
   allowed" if that option is on.
   ![Challenge card with progress bar and chips](../../frontend/public/help/challenges/02-challenge-card.png)
3. **Update progress.** Use **Update progress** to either add/subtract a
   delta (+/-) or set the total outright (overwrite). Negative totals are
   blocked unless the challenge has "allow negative progress" enabled — for
   those, the bar renders red and grows from zero with a down-trend icon
   instead of the normal fill.
   ![Update progress dialog](../../frontend/public/help/challenges/03-update-progress.png)
4. **Edit or delete.** Both are available per card; deleting is a soft
   delete with an undo toast, and asks for confirmation first.
5. **Read the status.** Status is computed, not stored: **done** (completed
   ≥ target — green badge) once you cross the line; **failed** (past the end
   date without reaching target — red badge, card dimmed, reads "Missed")
   if time runs out first; otherwise **active** (blue badge, the default).
   On completion, reward_earned equals the reward cost and shows as
   "earned" — this is a display field that rolls into the summary row and
   the Dashboard's earnings breakdown, but it is not written to any wallet
   ledger automatically.
6. **Check the summary row** for an Active count, Completed count, Missed
   count, and total Reward earned across every challenge. The Dashboard also
   shows up to 3 active challenges with mini progress bars.
   ![Summary row and Dashboard mini bars](../../frontend/public/help/challenges/04-summary-dashboard.png)

## Why it matters

A bare number rarely motivates on its own — a visible target paired with a
concrete reward, and an honest accounting of when things go badly, does most
of the work:

- **Pairing a visible target with a named reward makes the goal feel real
  before it's reached.** "Save ₹20,000" is abstract; "Save ₹20,000 → New
  headphones, ₹4,000" gives the brain something specific to anticipate,
  which is a stronger pull than the underlying number alone. Anvil keeps the
  reward as a label and cost you define yourself, so it stays personally
  meaningful instead of generic.
- **A progress bar capped at 100% keeps attention on "how close," not just
  "how much."** Percentage-to-goal is a much more motivating frame near the
  finish line than a raw count, because the visual gap left to close is what
  actually drives the final push — this is the same mechanic behind why a
  99%-full progress bar feels more urgent than an isolated large number
  does.
- **Allowing negative progress is a deliberate refusal to hide bad news.**
  Most trackers only know how to go up, which quietly biases you toward only
  tracking things that are going well. Letting a challenge run negative — a
  trading account down for the month, weight moving the wrong way — means
  the app can hold an honest losing trend instead of forcing you to either
  fudge the number or stop tracking the moment things turn bad. Seeing the
  red, downward bar is uncomfortable by design; that discomfort is what
  makes you address it instead of quietly abandoning the challenge.
- **A computed "failed" status with no other penalty keeps the sting
  proportional.** Missing a target dims the card and says "Missed" — a
  clear, visible consequence — but nothing else happens automatically. The
  goal is honest feedback, not punishment; a challenge you fail should still
  be information, not something that costs you more than the missed reward
  itself.
- **Reward earned rolling into a summary stat, without ever touching the
  wallet automatically, keeps the incentive symbolic where it needs to be.**
  It gives you a running total of "what I've earned by finishing things,"
  which is motivating to watch climb, without pretending to be an
  accounting system — you decide separately whether and how to actually
  claim it.

Used consistently, Challenges is meant to make a distant goal feel close
enough to keep working on, and — just as importantly — to make an honest
losing streak visible enough that you actually change course instead of
looking away from it.

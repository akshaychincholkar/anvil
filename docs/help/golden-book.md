# Golden Book — Help

*Screenshot folder: `docs/help/screenshots/golden-book/` — see numbering convention in [README.md](README.md).*

## What it is

The Golden Book is a dream/vision journal where you write each goal down
daily — either freeform or through Tesla's "369 method" — until you mark it
"manifested." It's less a to-do list than a repetition tool: the same
affirmation, written by your own hand, over and over, until it either comes
true or you stop believing it needs to.

## How to use it

1. **Create a dream.** Give it a title written as an affirmation — "I am...",
   not "I want..." — and optionally attach a photo. Each dream tracks its own
   streak (days), total entry count, created date, achieved status, and, once
   achieved, days_to_manifest.
   ![Creating a dream](../../frontend/public/help/golden-book/01-create-dream.png)
2. **Write in Normal mode (the default).** One text entry per day. Use the
   date-nav (‹ Today ›) to browse and read past days — those are read-only,
   so only today is ever editable, via **Save today's entry**.
3. **Or switch a dream to 369 mode.** Set one fixed "369 affirmation" line,
   then the day splits into three windows: Morning (6AM-12PM, write it 3x),
   Noon (12-6PM, 6x), Night (6PM-2AM, 9x) — 18 writes total per day. You must
   type the affirmation exactly each time; paste and drag-drop are blocked.
   An Undo button removes the last logged write if you make a mistake, and
   you can turn on optional browser-notification reminders per window.
   ![369 mode writing windows](../../frontend/public/help/golden-book/02-369-mode.png)
4. **Watch day_complete and your streak.** Once all 18 writes are logged for
   the day, day_complete flips true — you'll see "Today: X/Y written" climb
   to "All 18 done today!" In 369 mode, Anvil also tracks current_streak and
   best_streak in days; if the dream has a min_streak threshold set, you'll
   see "Day N of min_streak minimum" until you clear it, then "✓ minimum met
   — keep going until it manifests."
   ![Streak and completion status](../../frontend/public/help/golden-book/03-streak-progress.png)
5. **Turn on Soft tunes if you want ambient audio while you write.** It's a
   shared YouTube-audio track configured globally in Settings → General,
   toggled on/off per session — your on/off choice persists as you set it.
   It plays audio-only with no visual player, and browser autoplay rules
   mean you have to start it manually each time.
6. **Mark a dream as manifested** once it's actually happened. This opens a
   celebration overlay ("It's happening!", "Manifested in N days") and moves
   the dream from the "Manifesting" section (sparkle icon) into "Manifested"
   (trophy icon). If you marked it too early, **Undo manifested** brings it
   back. You can also edit the title, replace the image, or delete a dream
   entirely — list-view deletes show an undo toast.

## Why it matters

Repetition is the actual mechanism behind visualization practices, not magic
— writing the same specific, present-tense statement dozens of times trains
attention and primes noticing, and the Golden Book's mechanics are built to
protect that mechanism rather than let it get diluted into empty gesture:

- **The 369 method's fixed affirmation and escalating counts (3/6/9) exist to
  build genuine repetition, not just check a box.** Eighteen writes a day is
  deliberately more than a quick glance-and-tap habit — it forces the
  statement to actually pass through your attention that many times, which
  is the entire theory behind why the method is believed to work: repeated,
  effortful encoding shapes what you notice and act on during the rest of
  the day.
- **Requiring you to type the affirmation — and blocking paste and
  drag-drop — is the single most important guardrail in the feature.** A
  pasted affirmation costs nothing and changes nothing; typing it out,
  eighteen times, forces a small act of attention each time. Removing that
  friction would turn the practice into theater. Keeping it is what makes
  the 18 writes mean something more than 18 database rows.
- **Read-only past days keep the journal honest as a record, not a
  scratchpad.** If you could edit yesterday's entry today, the Golden Book
  would slowly turn into a polished narrative you write in hindsight instead
  of an honest log of what you actually believed and wrote on a given day.
  Locking history in place preserves it as a real timeline of repetition,
  not a retouched one.
- **The min_streak threshold and "keep going until it manifests" framing
  separate the finish line from the streak.** Most goal trackers stop
  mattering the moment you hit a number; Golden Book explicitly tells you
  the minimum is a floor, not a destination, which keeps the habit alive
  past the point where a lesser tracker would let you feel "done."
- **Marking something "manifested" is a deliberate, celebratory, undoable
  act.** Making it a distinct step — rather than quietly archiving a dream
  once its streak gets long — gives the moment weight, and making it
  undoable means you're not punished for premature optimism.

Used consistently, this section is meant to turn a wish ("I hope this
happens") into a daily, physically-typed rehearsal of the identity or outcome
you're aiming for — on the theory that what you repeat with attention is
what your brain starts treating as already true, and starts acting to make
actually true.

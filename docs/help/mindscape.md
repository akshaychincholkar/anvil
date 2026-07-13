# Mindscape — Help

*Screenshot folder: `docs/help/screenshots/mindscape/` — see numbering convention in [README.md](README.md).*

## What it is

Mindscape is a small personal library of YouTube-audio tracks for guided
meditation and visualization, played as background audio. It has no timer, no
daily requirement, and no completion checkbox — it's simply two shelves of
audio you built yourself, there when you want them.

## How to use it

1. **Browse the two categories.** Meditation Hub and Visualization are each a
   list of tracks you've added — there's no built-in content, and no pressure
   to fill either one out; it grows only as you add things you actually want
   to come back to.
   ![Meditation Hub and Visualization tabs](../../frontend/public/help/mindscape/01-categories.png)
2. **Add a track.** Paste a YouTube link — the video ID is extracted
   automatically for audio-only playback — then give it a required Title and
   a required cover image (uploaded, auto-compressed so the library stays
   light).
   ![Add track form](../../frontend/public/help/mindscape/02-add-track.png)
3. **Play it.** Click a track's cover to start it through a hidden YouTube
   iframe — audio only, autoplaying, with no visible video or player controls
   cluttering the screen. The active card shows a "Playing" badge; click the
   cover again to pause.
   ![Playing card with badge](../../frontend/public/help/mindscape/03-playing.png)
4. **Know what counts toward Rewards.** Usage Reward credit on the Rewards
   screen accrues only while audio is actively playing, in 10-second ticks
   that pause automatically if the tab is hidden — simply having the
   Mindscape screen open earns nothing. The reward is for the practice, not
   for the tab being on screen.

## Why it matters

Almost every other section of Anvil is built to measure something — a streak,
a total, a percentage. Mindscape deliberately isn't, and that omission is the
whole point:

- **Not tracking "completion" here is a considered choice, not a missing
  feature.** The moment meditation gets a streak counter or a daily
  checkbox, it quietly turns into one more thing to complete rather than a
  space to actually be in — and the harder you try to "complete" stillness,
  the less available it becomes. Anvil has plenty of sections built around
  streaks precisely because that pressure is useful for exercise or reading.
  It is not useful here, so it's absent on purpose.
- **A self-built library instead of a curated content catalog keeps the
  practice yours.** Adding your own tracks — the specific voice, the specific
  visualization — means the library reflects what actually works for you,
  not what a content team decided was generically calming. Ownership over
  the material is part of what makes it easier to return to.
- **Audio-only, hidden-player playback removes the one distraction a video
  meditation always carries.** A visible video invites watching instead of
  listening — checking the timestamp, seeing the scrubber, glancing at
  related-video thumbnails. Stripping the interface down to a cover image
  and a "Playing" badge keeps the screen out of the way of the practice.
- **Usage-reward credit tied to actual playback time, not screen-open time,
  is the one piece of measurement that survives — and it's measuring the
  right thing.** It doesn't ask "did you meditate today," which would turn
  this back into a metric. It only ever answers "were you actually listening
  just now," ticking quietly in the background without ever surfacing as a
  goal to hit.

Used consistently, Mindscape is meant to be the one corner of Anvil that
doesn't ask anything of you — no streak to protect, no target to hit, nothing
to report back. That absence of measurement is what lets it actually function
as rest.

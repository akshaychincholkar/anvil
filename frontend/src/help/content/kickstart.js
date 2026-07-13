// In-app copy of docs/help/kickstart.md — keep these word-for-word in sync.
// Screenshots referenced here live in frontend/public/help/kickstart/.
export default {
  title: "Kickstart",
  tagline: "Thirty seconds that's actually relevant to today.",
  what:
    "Kickstart is a library of short motivational video clips — YouTube or Instagram — that " +
    "you tag by day of the week and life pillar, built for a quick daily hit of motivation " +
    "instead of an endless scroll. Add a handful of clips that actually move you, tag them, " +
    "and let the filters surface the right one on the right day.",
  screenshot: "/help/kickstart/03-filter-grid.png",
  howTo: [
    {
      heading: "Add a video",
      body:
        "Click Add video and paste a YouTube or Instagram link — the type is auto-detected. " +
        "A Title is required. For YouTube clips you can optionally set a Start/End time " +
        "(m:ss) to trim it, so only that clipped range plays instead of the full video. " +
        "Instagram embeds always play in full and can't be trimmed.",
      screenshot: "/help/kickstart/01-add-video.png",
    },
    {
      heading: "Tag it",
      body:
        "Choose at least one day of the week (this determines which days the clip is " +
        "eligible to show), and optionally one or more pillars (Financial, Academic, " +
        "Relationship, Health, Spiritual) and custom tags (up to 21, which you manage " +
        "yourself).",
      screenshot: "/help/kickstart/02-tagging.png",
    },
    {
      heading: "Filter the grid",
      body:
        "Use the filter bar — All, each day of the week (today is highlighted), each " +
        "pillar, or a custom tag — to narrow the grid down to what's relevant right now. " +
        "Each thumbnail shows a play overlay and, if trimmed, a range badge like " +
        "\"0:30-1:15.\" Edit and Delete icons sit on each card.",
      screenshot: "/help/kickstart/03-filter-grid.png",
    },
    {
      heading: "Watch",
      body:
        "Click a thumbnail to play it inline. While playing, Anvil pings the backend every " +
        "10 seconds with your elapsed watch time (capped at the clip's length, and paused if " +
        "you switch tabs), accumulating as \"seconds watched today\" — visible on the " +
        "Dashboard, e.g. \"Watched 4m.\" There's no fixed daily video-count requirement; " +
        "it's accumulated watch time, not a checklist.",
    },
  ],
  why:
    "Generic motivational content is easy to find and easy to ignore — the algorithm doesn't " +
    "know your day or what you're actually working toward. Kickstart is built around a " +
    "narrower idea:\n\n" +
    "• Day-of-week tagging makes a clip feel timed for you, not just available to you. A " +
    "clip tagged for Monday hitting your feed on Monday reads differently than the same clip " +
    "sitting in an untagged pile of forty videos — it feels chosen for right now, which is " +
    "closer to how a coach or a friend would use timing than how a content platform does.\n\n" +
    "• Pillar tagging ties motivation to a specific part of your life instead of " +
    "motivation-in-general. \"Feeling motivated\" in the abstract fades in minutes. A clip " +
    "filed under Financial that you watch right before opening your budget, or one filed " +
    "under Health right before a workout, links the emotional spike to the specific action " +
    "it's meant to fuel — which is the difference between inspiration and just noise.\n\n" +
    "• A small, self-curated library beats an infinite one. Anvil doesn't recommend or " +
    "auto-populate clips; you add the ones that have actually worked on you before. That " +
    "constraint is deliberate — a library of twelve clips you chose because they work is " +
    "more reliably motivating than an algorithmic feed optimized for watch time, not for " +
    "you.\n\n" +
    "• Trimming removes the parts that don't earn their seconds. Most motivational videos " +
    "have a slow intro or an outro pitch. Clipping to just the charged 45 seconds means every " +
    "rewatch delivers the payload immediately, instead of training you to skip through your " +
    "own library.\n\n" +
    "• Accumulated watch time, not a video-count quota, matches how motivation actually gets " +
    "used. Some days you need ten seconds to reset; other days you want three full clips back " +
    "to back. Measuring seconds watched instead of \"did you hit today's video\" respects that " +
    "the right dose varies, while still giving the Dashboard something honest to show you.\n\n" +
    "Used consistently, Kickstart is meant to be a fast, specific nudge — thirty seconds " +
    "that's actually relevant to today and to what you're about to do next, not a scroll that " +
    "eats twenty minutes and leaves you no more motivated than before.",
};

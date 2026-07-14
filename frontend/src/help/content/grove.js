// In-app copy of docs/help/grove.md — keep these word-for-word in sync.
// Screenshots referenced here live in frontend/public/help/grove/.
export default {
  title: "Grove",
  tagline: "A focus timer where every finished session plants a tree.",
  what:
    "Grove is a Pomodoro-style focus timer, themed as growing a personal forest. " +
    "Every session you complete plants a permanent tree; give up early and the tree " +
    "withers instead. Over time the forest becomes a literal, visual record of the " +
    "hours you actually sat still and focused — and a separate Insights view charts " +
    "that history so the pattern is never just a vague feeling.",
  howTo: [
    {
      heading: "Pick a duration and (optionally) a label",
      body:
        "Choose a preset — 15, 30, 45, 60, or 90 minutes — or select Custom for any " +
        "length from 1 to 600 minutes. You can also fill in \"What are you focusing " +
        "on?\" so the session is tied to something specific instead of just a block " +
        "of time.",
    },
    {
      heading: "Choose a tree species",
      body:
        "Five species are tied to the five life pillars — Financial (gold), Academic " +
        "(blue pine), Relationship (red), Spiritual (purple, tall), and Health (green, " +
        "the default). The choice is purely cosmetic and categorical; it doesn't " +
        "change how the timer behaves, only which kind of tree gets planted and which " +
        "pillar the session is filed under.",
    },
    {
      heading: "Plant the tree",
      body:
        "Tapping Plant tree starts the countdown — a ring fills and the tree SVG " +
        "visibly grows as time passes, so progress is always visible at a glance, not " +
        "just a number ticking down.",
    },
    {
      heading: "Decide how strict to be with Deep Focus",
      body:
        "Deep Focus is ON by default: if you switch tabs or apps at any point during " +
        "the session, it fails immediately — \"You left before the timer finished\" — " +
        "with no grace period. Turn it OFF for Relaxed mode, where switching tabs has " +
        "no effect and only tapping Give up ends the session early (which also fails " +
        "it, with \"Your tree withered\").",
    },
    {
      heading: "Check your stats strip",
      body:
        "Today's focused minutes, total trees planted, current streak (consecutive " +
        "days with at least one completed session), and success rate. Completed " +
        "sessions land in the forest list below, grouped by day — double-click or tap " +
        "a tree there if you ever want to delete it.",
    },
    {
      heading: "Open Grove Insights",
      body:
        "Toggle the range between Day / Week / Month / Year, and read the headline " +
        "totals, a \"Forest scene\" planting visual, a \"Focus distribution\" bar " +
        "chart (minutes per hour of day), a \"Pillar distribution\" donut, and a " +
        "\"Focus trend\" that compares the current period to the previous one with a " +
        "% change badge.",
    },
  ],
  why:
    "A countdown timer alone doesn't make anyone focus — it just measures time, " +
    "willing or not. Grove is built around a few deliberate ideas meant to make the " +
    "cost of quitting and the reward of finishing both feel real:\n\n" +
    "• A withering tree is a visible loss, not just a missing reward. Most timers " +
    "treat an abandoned session as neutral — you just don't get credit. Grove treats " +
    "it as a small, visible loss: a tree that started growing and then died. Loss " +
    "aversion is a stronger motivator than the promise of a future gain, so framing " +
    "\"give up\" as destroying something already in progress — rather than merely " +
    "forfeiting a future checkmark — recruits that bias in your favor, right at the " +
    "moment your attention is trying to wander.\n\n" +
    "• Deep Focus's zero-grace-period is the whole point, not a harsh edge case. A " +
    "single-tab-switch penalty sounds strict, but any grace period at all reopens the " +
    "exact loophole distraction-resistance tools exist to close: \"just a quick " +
    "check\" of a notification. The moment a grace period exists, your brain will " +
    "negotiate with it. Making the rule absolute — leave once, and the session is " +
    "already over — removes the negotiation entirely, which is what makes it actually " +
    "work against real-world distraction instead of just against laziness.\n\n" +
    "• A permanent, plantable forest turns abstract hours into a landscape you can " +
    "look at. \"I focused for 40 hours this month\" is a number you forget by " +
    "lunchtime. A forest with forty visible trees in it, grouped by day, is a place " +
    "— and places are what memory actually holds onto. That's also why deleting a " +
    "tree is a deliberate double-tap, not a stray-click accident: the forest is " +
    "meant to be a record, not a scratchpad.\n\n" +
    "• Pillar-tagged species connect a single session to the bigger life categories " +
    "it serves. Focusing isn't valuable in the abstract — it's valuable for something " +
    "(your finances, your studies, a relationship, your health, your spiritual " +
    "practice). Tying tree species to pillars, and then rolling that up into the " +
    "Insights donut, keeps the timer honest about what all this focused time is " +
    "actually being spent on.\n\n" +
    "Used consistently, Grove is meant to make deep, uninterrupted attention feel " +
    "like a thing you build — tree by tree, in a forest you can walk back through — " +
    "rather than an abstract virtue you're vaguely supposed to have more of.",
};

// In-app copy of docs/help/dashboard.md — keep these word-for-word in sync.
// Screenshots referenced here live in frontend/public/help/dashboard/.
export default {
  title: "Dashboard",
  tagline: "How am I doing today? One screen, one glance.",
  what:
    "The Dashboard is a read-only daily overview that pulls today's (or this cycle's) " +
    "key numbers from every other section into one screen. It doesn't let you log or " +
    "edit anything itself — every card and tile is clickable and simply jumps you to " +
    "the section it summarizes. It exists so \"how am I doing today?\" has a one-glance " +
    "answer instead of a seven-tab tour.",
  screenshot: "/help/dashboard/01-stat-tiles.png",
  howTo: [
    {
      heading: "Scan the top stat tiles first",
      body:
        "Habits done (X/Y), Grove (today's focus minutes + tree count), Spent today, " +
        "and Rewards pending give you the four numbers most worth knowing before you " +
        "open anything else.",
      screenshot: "/help/dashboard/01-stat-tiles.png",
    },
    {
      heading: "Check the Habits and Expenses cards",
      body:
        "Habits shows a 3-day comparison bar and three progress rings — Today / Week / " +
        "Month % — across all your habits combined. Expenses shows a 3-day spend " +
        "comparison and a category donut for the current billing cycle — the same " +
        "numbers you'd find on the Expenses screen, just condensed. Tap either to jump " +
        "straight into that screen.",
      screenshot: "/help/dashboard/02-habits-expenses-cards.png",
    },
    {
      heading: "Check the remaining section cards",
      body:
        "Rewards shows a pending total plus a Focus/Usage/Achievement/Challenges " +
        "earnings donut; Revision lists up to 6 topics due today (red dot = missed, " +
        "gold = due, with Stage N label); Golden Book shows \"X/Y written\" today plus " +
        "up to 5 active dreams with Done/Pending badges; Challenges shows " +
        "active/done/missed counts with progress bars for up to 3 active ones; Goals " +
        "this week lists goals whose horizon is Weekly and whose date range includes " +
        "today; Journal shows whether you've journaled today plus your mood emoji if " +
        "you have; Spiritual shows total chapters read all-time, chapters read today, " +
        "and a chip row of all scriptures with their counts.",
      screenshot: "/help/dashboard/03-remaining-cards.png",
    },
    {
      heading: "Glance at the mini-card grid",
      body:
        "Kickstart (\"Watched Xm\"), Affirmations (\"Read for Xm\"), " +
        "Meditation/Visualization/Mindscape (\"Practiced Xm\"), and Revision (\"N " +
        "topics due\") — the smaller, lower-frequency practices that still deserve a " +
        "visible number.",
    },
    {
      heading: "Tap any card to act on it",
      body:
        "The Dashboard itself never edits data — if a number looks wrong or incomplete, " +
        "tapping the card takes you to the section where you can actually log " +
        "something.",
    },
  ],
  why:
    "The single biggest reason people stop checking in on a tracking app isn't that " +
    "they stop caring — it's that checking in becomes effortful, so it gets skipped, " +
    "and skipped check-ins compound into full disengagement. The Dashboard exists to " +
    "keep that friction as close to zero as possible:\n\n" +
    "• One glanceable screen lowers the activation energy for a daily check-in. If " +
    "knowing \"how am I doing\" requires opening seven different screens, most days you " +
    "simply won't do it. A single aggregated view means the question can be answered " +
    "in the ten seconds you actually have, not the five minutes you don't.\n\n" +
    "• Read-only by design keeps the Dashboard honest and fast. The moment a summary " +
    "screen also lets you edit data, it has to reconcile state and re-render on every " +
    "interaction, and it stops being a clean snapshot of \"where things stand.\" Making " +
    "every card a link instead of an editor keeps the Dashboard doing one job — " +
    "orientation — and lets each source section keep doing the job of actually " +
    "recording things.\n\n" +
    "• Surfacing gaps, not just wins, is what makes it useful. A missed Revision topic " +
    "in red, a \"Not yet\" on Journal, or an \"Overspent\" signal bleeding through from " +
    "Expenses are exactly the kind of quietly-avoided facts a person is least likely to " +
    "go looking for on their own. Putting them on the first screen you see removes the " +
    "choice to not know.\n\n" +
    "• Cross-section aggregation turns isolated habits into a single daily identity " +
    "check. Seeing Habits, Grove, Expenses, and Journal side by side — instead of as " +
    "unrelated apps-within-an-app — reinforces that they're all facets of the same day, " +
    "and a good day usually means most of these tiles are green at once, not just one " +
    "of them.\n\n" +
    "Used consistently, the Dashboard is meant to be the first and last thing you open " +
    "each day — a two-minute ritual that either confirms you're on track or tells you " +
    "exactly which section needs five more minutes of your attention.",
};

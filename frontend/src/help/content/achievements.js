// In-app copy of docs/help/achievements.md — keep these word-for-word in sync.
// Screenshots referenced here live in frontend/public/help/achievements/.
export default {
  title: "Achievements",
  tagline: "A timeline of life wins, not a rewards ledger.",
  what:
    "Achievements is a personal timeline of life wins and milestones, styled as a " +
    "vertical tree-trunk with each entry branching off as a card. It isn't a " +
    "points-and-rewards system — it's a deliberate record of the things you've " +
    "actually accomplished, so the year doesn't blur into an undifferentiated memory " +
    "of just getting by.",
  screenshot: "/help/achievements/02-timeline.png",
  howTo: [
    {
      heading: "Add an achievement",
      body:
        "Click Add achievement and fill in a Title and Date (both required). " +
        "Everything else is optional: a Pillar (Financial / Academic / Relationship / " +
        "Health / Spiritual — color-coded on the timeline), a Reward — an optional " +
        "monetary amount described as a gesture of appreciation, not a points system " +
        "— a Photo (with a pan/zoom cropper to frame it), and a Note.",
      screenshot: "/help/achievements/01-add-achievement.png",
    },
    {
      heading: "Read the timeline",
      body:
        "Entries alternate left and right on desktop and stack into a single column " +
        "on mobile, grouped under year-divider chips with the newest achievement at " +
        "the top. Each card carries its pillar color, photo (if you added one), and " +
        "reward amount (if you set one).",
      screenshot: "/help/achievements/02-timeline.png",
    },
    {
      heading: "Edit or delete a card",
      body:
        "Every card has a pencil icon to edit it in place and an X to delete it — " +
        "deletes are soft, with an undo toast, so a mis-tap doesn't erase a real " +
        "memory.",
      screenshot: "/help/achievements/03-edit-delete.png",
    },
    {
      heading: "Check the running total",
      body:
        "If you've set a reward on any entries, the header shows a badge — " +
        "\"{sum of rewards} earned\" — tallying all of them at a glance. This figure " +
        "also feeds into the Dashboard's aggregate \"earned\" total, alongside Grove " +
        "focus time, screen-time usage, and Challenges — together implying a " +
        "self-directed, real-money allowance you pay yourself for real " +
        "accomplishments, not an in-app currency.",
    },
  ],
  why:
    "Most tracking tools in Anvil — and in life — are tuned to catch what's going " +
    "wrong: missed habits, overspending, skipped reviews. Achievements is the " +
    "deliberate counterweight, and that's not a small detail:\n\n" +
    "• Logging wins explicitly counters negativity bias. People remember failures and " +
    "friction far more readily than successes — it's a well-documented asymmetry in " +
    "how memory and attention work, not a character flaw. Without a dedicated place " +
    "to record the good, the good quietly loses the memory competition to every " +
    "overdue bill and broken streak. Achievements exists specifically to give wins " +
    "equal, durable footing.\n\n" +
    "• A timeline, not a list, makes the shape of a life visible. Sorting by year and " +
    "letting entries branch off a trunk borrows the visual grammar of growth on " +
    "purpose — it's meant to read less like a log file and more like something you'd " +
    "actually want to scroll back through on a hard day, to remember that hard days " +
    "aren't the whole story.\n\n" +
    "• A reward being \"an optional gesture of appreciation\" — not points — keeps " +
    "the incentive real. Points can be inflated, gamed, or ignored because they cost " +
    "nothing. A real, self-directed amount of money tied to a real accomplishment " +
    "asks you to actually value the win enough to back it with something, which is a " +
    "very different (and more honest) kind of motivation than a badge.\n\n" +
    "• Soft-delete with undo protects an irreplaceable record. A habit's history " +
    "rebuilds itself day by day if you make a mistake logging it, but an achievement " +
    "is a one-time memory — losing one to a stray tap is a worse loss than almost any " +
    "other accidental deletion in the app. The undo toast reflects that asymmetry.\n\n" +
    "Used consistently, Achievements is meant to be the place you go not to plan " +
    "what's next, but to see — plainly, in your own words and your own dates — what " +
    "you've already done. That record is the antidote to the feeling of having \"not " +
    "accomplished anything this year,\" which is almost always a memory problem, not " +
    "a fact.",
};

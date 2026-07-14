// In-app copy of docs/help/bucket-list.md — keep these word-for-word in sync.
// Screenshots referenced here live in frontend/public/help/bucket-list/.
export default {
  title: "Bucket List",
  tagline: "A wishlist with a price tag on it, not a vague someday.",
  what:
    "The Bucket List is a wishlist with a price tag on it. Every wish you add has a name " +
    "and a cost — not a vague \"someday I'd like to,\" but a number you can actually work " +
    "toward, funded straight out of the reward money you earn elsewhere in Anvil.",
  screenshot: "/help/bucket-list/01-new-wish.png",
  howTo: [
    {
      heading: "Add a wish",
      body:
        "Click New wish and give it a name (required), a cost, and optionally a link (to " +
        "the exact product/experience) and a note.",
      screenshot: "/help/bucket-list/01-new-wish.png",
    },
    {
      heading: "Reorder by priority",
      body:
        "There's no category or tag — priority is purely ordinal. Use the up/down arrows " +
        "on each item to rank what you want most at the top.",
    },
    {
      heading: "Mark it fulfilled",
      body:
        "Tap the Fulfilled pill once you've actually gotten or done the thing — it stamps " +
        "today's date (\"Fulfilled · [date]\") and moves it out of your active wishlist. " +
        "Tap Undo if you tapped it by mistake.",
      screenshot: "/help/bucket-list/02-fulfilled.png",
    },
    {
      heading: "Or let Rewards pay for it",
      body:
        "Over on the Rewards screen, flip on Fulfil from bucket list, then when you " +
        "\"Take\" your pending reward money, pick a wish instead of a free amount — Anvil " +
        "deducts its exact cost and marks it fulfilled automatically.",
    },
    {
      heading: "Watch the totals",
      body:
        "The header shows Total wishes, Fulfilled count, and \"Still wished\" — the sum of " +
        "everything you haven't gotten yet, in real currency.",
    },
  ],
  why:
    "Most wishlists die of vagueness — \"I want to travel more,\" \"I'd love a good camera " +
    "someday\" — floating goals with no path from here to there. Anvil's Bucket List is " +
    "deliberately boring and concrete about one thing: a price.\n\n" +
    "• A number turns a wish into a target. \"Someday\" has no finish line; \"₹45,000, " +
    "currently ₹12,000 earned toward it\" does. Attaching a real cost is what makes a wish " +
    "plannable instead of just felt.\n\n" +
    "• Funding it from earned reward money closes the loop. The Rewards screen converts " +
    "your actual focused hours and disciplined app usage into money; spending that money " +
    "on a wish means the things you want are being paid for by the version of you that's " +
    "already showing up and doing the work — not by wishful thinking.\n\n" +
    "• Ordinal ranking, not categories, forces an honest choice. Most wishlist apps let " +
    "everything sit as equally important, which is another way of saying nothing is " +
    "prioritized. Ranking wishes against each other makes you decide, even loosely, what " +
    "actually matters most right now.\n\n" +
    "Used consistently, the Bucket List is meant to convert \"wanting things\" from a " +
    "source of low-grade dissatisfaction into a visible progress bar — proof that the " +
    "effort you're putting in elsewhere in your life is actually buying you something you " +
    "chose on purpose.",
};

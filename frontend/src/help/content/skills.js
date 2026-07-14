// In-app copy of docs/help/skills.md — keep these word-for-word in sync.
// Screenshots referenced here live in frontend/public/help/skills/.
export default {
  title: "Skills",
  tagline: "\"I read a book about it\" isn't the same as \"I changed because of it.\"",
  what:
    "Skills turns \"I read a book about it\" into \"I actually changed because of it.\" " +
    "Every book, video, or article you log moves through four gated stages — Data → " +
    "Information → Knowledge → Wisdom — and you can't skip ahead until you've done the " +
    "work of each one.",
  howTo: [
    {
      heading: "Add a skill",
      body:
        "Click Add skill, give it a title, pick a source type (Book, Video, or Article) " +
        "and a pillar, and optionally attach a link. It starts at the first stage: Data.",
    },
    {
      heading: "Data — \"What did you read/watch?\"",
      body:
        "Capture the raw material. For a book, organize points into Chapters; for a video " +
        "or article, into Learnings. Ungrouped points are fine too — this stage is just " +
        "about getting the content down.",
    },
    {
      heading: "Information — \"What did you actually understand from it, in your own words?\"",
      body:
        "Rewrite it in your own language. If you can't, you haven't understood it yet — " +
        "this stage exists to catch that.",
    },
    {
      heading: "Knowledge — \"How will this specifically improve your life?\"",
      body: "Get concrete about the application, not the abstract idea.",
    },
    {
      heading: "Wisdom — \"How have you implemented it?\"",
      body:
        "This stage is a checklist, not notes — every item needs to be checked off before " +
        "you can complete it. Checking the last one triggers a small celebration; it means " +
        "you actually did the thing, not just understood it.",
    },
    {
      heading: "Track your Wisdoms",
      body:
        "The top badge counts how many skills you've carried all the way to Wisdom — the " +
        "number that actually matters, more than how many books you've \"read.\"",
    },
  ],
  why:
    "There's a well-known trap in self-improvement: reading twenty books a year and " +
    "feeling like you're growing, while nothing in your actual life changes. Anvil's " +
    "Skills section is built directly against that trap, using the DIKW model (Data → " +
    "Information → Knowledge → Wisdom) as a forcing function.\n\n" +
    "• Sequential gating stops you from mistaking consumption for growth. You cannot jump " +
    "straight from \"I read it\" to \"I'm wise about it\" — every intermediate stage has to " +
    "be filled in first. That friction is intentional: real understanding and real " +
    "application both take deliberate work, and skipping straight to a Wisdom entry with " +
    "nothing behind it isn't possible.\n\n" +
    "• Wisdom as a checklist, not a paragraph, demands proof. It would be easy to write " +
    "one vague sentence like \"I've been applying this.\" A checklist of specific " +
    "implemented items is much harder to fake — each checked box is a small, concrete " +
    "claim about something you actually did differently.\n\n" +
    "• The \"N Wisdoms\" counter redefines what counts as progress. Most reading trackers " +
    "reward volume — books finished, pages read. Anvil rewards the one number that " +
    "correlates with actually becoming a different person: how many things you've " +
    "learned that changed what you do.\n\n" +
    "Used consistently, this section is meant to shift your relationship with content " +
    "from passive intake to active transformation — so that a year from now, the measure " +
    "of what you've learned isn't a shelf of finished books, but a list of things you can " +
    "point to and say \"I do this differently now because of that.\"",
};

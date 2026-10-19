/*
 * COURSE TEMPLATE: copy this file to start a new Scholarium course.
 *
 * 1. Copy this file and rename it, e.g. data/courses/sacred-symbols.js
 * 2. Change `id` to match the course's id in data/scholarium.js → catalogue
 *    (and delete `status: "preparing"` and the title/summary/badge lines there).
 * 3. Add a line to index.html, next to the other courses:
 *      <script src="data/courses/sacred-symbols.js"></script>
 * 4. In data/activities.js, check the course's badge achievement exists ("course-<id>").
 *
 * Every module needs a unique `id`. Never rename an id once people have started the course,
 * because their progress is saved against it.
 *
 * Section tags: scripture, tradition, history, interpretation, practice.
 * This file isn't loaded by the site, so it's safe to keep as a reference.
 */
window.VS = window.VS || {};
VS.courses = VS.courses || [];

VS.courses.push({
  id: "my-course",
  title: "Course Title",
  subject: "Subject",
  summary: "One or two sentences that make someone curious.",
  hours: "About 2 hours, at your own pace",
  level: "Introductory. No background needed.",
  badge: { name: "Name of the Badge", emblem: "book", motto: "Optional Latin motto" },
  objectives: ["What learners will be able to do…", "…and another."],

  version: 1,
  requirements: { 1: ["intro", "compare-1", "sort-1", "timeline-1", "match-1", "hunt-1", "final"] },

  modules: [
    { id: "intro", type: "lesson", title: "Lesson title", minutes: 8,
      sections: [
        { heading: "A heading", tag: "history", html: `<p>Lesson text. You can use <strong>bold</strong>, lists and <blockquote>quotations<cite>Reference</cite></blockquote>.</p>` }
      ],
      refs: ["John 1:1–14"] },

    { id: "compare-1", type: "compare", title: "Investigation: …", minutes: 10,
      intro: "What the learner should do.",
      passages: [{ ref: "Mark 1:1", text: "Passage text…" }, { ref: "John 1:1", text: "Passage text…" }],
      questions: [{ q: "A question?", options: ["A", "B", "C"], answer: 0, explain: "Why A is right." }] },

    { id: "sort-1", type: "sort", title: "Evidence board", minutes: 8, intro: "…",
      bins: [{ id: "scripture", name: "Scripture says it" }, { id: "tradition", name: "Later tradition" }],
      items: [{ text: "A claim…", bin: "scripture", explain: "Where it comes from." }] },

    { id: "timeline-1", type: "timeline", title: "Timeline", minutes: 6, intro: "…",
      items: [{ text: "First event", ref: "Genesis 1" }, { text: "Second event", ref: "Exodus 14" }] },   // list in the CORRECT order; the site shuffles it

    { id: "match-1", type: "match", title: "Matching", minutes: 5, intro: "…",
      pairs: [{ left: "Person", right: "What they're known for" }] },

    { id: "hunt-1", type: "hunt", title: "Scripture scavenger hunt", minutes: 15, intro: "…",
      clues: [{ clue: "A riddle pointing to a chapter…", answer: ["john 3"], hint: "A gentle hint.", found: "John 3:16, …" }] },

    { id: "final", type: "final", title: "Final assessment", minutes: 10, passMark: 0.8, intro: "…",
      questions: [{ q: "A question?", options: ["A", "B", "C"], answer: 1 }] }
  ],

  sources: ["Book or source, author"]
});

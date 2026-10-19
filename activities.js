/*
 * SANCTUARY POINTS, LEVELS & ACHIEVEMENTS
 *
 * Everything between the two @ markers below is plain JSON. The comment service reads this
 * same file from your live site, so the server and the website always agree on point values.
 * Keep it valid JSON: double quotes, no comments, no trailing commas.
 * (Paste it into jsonlint.com to check, if in doubt.)
 *
 * ACTIVITIES
 *   families: rewards for a whole kind of thing, matched by the start of the activity id.
 *     e.g. "visit:" covers visit:cathedral, visit:garden… Each unique id pays once.
 *     "max" caps how many different ids in that family can ever pay (stops spam).
 *   activities: single named activities. "perDay" lets one be repeated, up to that many times a day.
 *
 * ACHIEVEMENTS (badges): never taken away once earned, even if the rules change later.
 *   "rule": { "count": "visit:", "min": 3 }   at least 3 different ids starting with visit:
 *           { "count": "letter-sent", "min": 10 }   a repeatable activity done 10 times
 *           { "all": ["course:seven-marys"] }   every listed id done
 *
 * By design there are NO points for prayer, candles, the Rosary, reflections, the prayer wall,
 * donations or purchases. Devotion and generosity aren't things to score.
 */
window.VS = window.VS || {};

VS.activityRules = /*@ACTIVITIES-JSON*/{
  "version": 1,

  "levels": [
    { "min": 0, "title": "Visitor" },
    { "min": 40, "title": "Pilgrim" },
    { "min": 120, "title": "Reader" },
    { "min": 250, "title": "Copyist" },
    { "min": 400, "title": "Rubricator" },
    { "min": 600, "title": "Illuminator" },
    { "min": 850, "title": "Scholar" },
    { "min": 1150, "title": "Archivist" },
    { "min": 1500, "title": "Keeper of the Library" },
    { "min": 2000, "title": "Lamp of the Sanctuary" }
  ],

  "categories": [
    { "id": "explorer", "name": "Explorer", "emblem": "lantern" },
    { "id": "scholar", "name": "Scholar", "emblem": "book" },
    { "id": "historian", "name": "Historian", "emblem": "quill" },
    { "id": "saint-collector", "name": "Saint Collector", "emblem": "crown" },
    { "id": "symbolist", "name": "Symbolist", "emblem": "triquetra" },
    { "id": "scribe", "name": "Scribe", "emblem": "dove" },
    { "id": "gardener", "name": "Gardener", "emblem": "rose" },
    { "id": "community", "name": "Community Contributor", "emblem": "bread" }
  ],

  "families": [
    { "prefix": "visit:", "category": "explorer", "points": 5, "max": 60, "label": "Explored a new room" },
    { "prefix": "discover:", "category": "explorer", "points": 3, "max": 200, "label": "Discovered an exhibit" },
    { "prefix": "read:", "category": "scholar", "points": 5, "max": 1000, "label": "Read a Library article" },
    { "prefix": "plan-day:", "category": "scholar", "points": 2, "max": 2000, "label": "Read a day of a reading plan" },
    { "prefix": "plan:", "category": "scholar", "points": 25, "max": 100, "label": "Finished a reading plan" },
    { "prefix": "lesson:", "category": "scholar", "points": 10, "max": 1000, "label": "Completed a Scholarium lesson" },
    { "prefix": "investigation:", "category": "historian", "points": 15, "max": 300, "label": "Solved an investigation" },
    { "prefix": "timeline:", "category": "historian", "points": 15, "max": 300, "label": "Assembled a timeline" },
    { "prefix": "match:", "category": "historian", "points": 10, "max": 300, "label": "Completed a matching study" },
    { "prefix": "hunt:", "category": "historian", "points": 20, "max": 300, "label": "Completed a Scripture scavenger hunt" },
    { "prefix": "hunt-clue:", "category": "historian", "points": 3, "max": 3000, "label": "Found a Scripture clue" },
    { "prefix": "assessment:", "category": "scholar", "points": 25, "max": 200, "label": "Passed a final assessment" },
    { "prefix": "course:", "category": "scholar", "points": 100, "max": 200, "label": "Completed a Scholarium course" },
    { "prefix": "saint:", "category": "saint-collector", "points": 5, "max": 500, "label": "Collected a new saint card" },
    { "prefix": "symbol:", "category": "symbolist", "points": 2, "max": 500, "label": "Studied a sacred symbol" },
    { "prefix": "virtue:", "category": "gardener", "points": 2, "max": 50, "label": "Learned a garden virtue" }
  ],

  "activities": [
    { "id": "letter-sent", "category": "scribe", "area": "gilded-lily", "points": 10, "perDay": 1, "label": "Sent a handwritten letter" },
    { "id": "comment", "category": "community", "area": "library", "points": 3, "perDay": 3, "label": "Joined a discussion" },
    { "id": "lily-post-joined", "category": "scribe", "area": "gilded-lily", "points": 20, "label": "Joined the Lily Post" },
    { "id": "pen-pal-matched", "category": "scribe", "area": "gilded-lily", "points": 25, "label": "Found a pen pal" }
  ],

  "achievements": [
    { "id": "first-steps", "category": "explorer", "name": "First Steps", "emblem": "lantern", "points": 10,
      "text": "Explored three rooms of the Sanctuary.", "rule": { "count": "visit:", "min": 3 } },
    { "id": "pilgrim-of-the-grounds", "category": "explorer", "name": "Pilgrim of the Grounds", "emblem": "lantern", "points": 30,
      "text": "Walked through every room on the Sanctuary map.", "rule": { "count": "visit:", "min": 12 } },
    { "id": "seeker-of-hidden-things", "category": "explorer", "name": "Seeker of Hidden Things", "emblem": "lamp", "points": 20,
      "text": "Discovered ten exhibits hidden around the grounds.", "rule": { "count": "discover:", "min": 10 } },
    { "id": "cartographer", "category": "explorer", "name": "Cartographer of the Sanctuary", "emblem": "rose-window", "points": 50,
      "text": "Discovered thirty exhibits across the Sanctuary.", "rule": { "count": "discover:", "min": 30 } },

    { "id": "first-lesson", "category": "scholar", "name": "First Lesson", "emblem": "book", "points": 10,
      "text": "Completed a first Scholarium lesson.", "rule": { "count": "lesson:", "min": 1 } },
    { "id": "reader-of-the-stacks", "category": "scholar", "name": "Reader of the Stacks", "emblem": "book", "points": 15,
      "text": "Read five articles in the Sacred Library.", "rule": { "count": "read:", "min": 5 } },
    { "id": "friend-of-the-library", "category": "scholar", "name": "Friend of the Library", "emblem": "book", "points": 40,
      "text": "Read fifteen articles in the Sacred Library.", "rule": { "count": "read:", "min": 15 } },
    { "id": "faithful-reader", "category": "scholar", "name": "Faithful Reader", "emblem": "lamp", "points": 20,
      "text": "Finished a whole Bible reading plan.", "rule": { "count": "plan:", "min": 1 } },

    { "id": "course-seven-marys", "category": "scholar", "name": "Scholar of the Seven Marys", "emblem": "seven-stars", "points": 0, "course": "seven-marys", "courseNumber": "001", "courseTitle": "The Seven Marys",
      "text": "Completed Scholarium Course 001, The Seven Marys.", "rule": { "all": ["course:seven-marys"] } },
    { "id": "course-sacred-symbols", "category": "symbolist", "name": "Keeper of the Symbolarium", "emblem": "triquetra", "points": 0, "course": "sacred-symbols", "courseNumber": "002", "courseTitle": "The Language of Sacred Symbols",
      "text": "Completed Scholarium Course 002, The Language of Sacred Symbols.", "rule": { "all": ["course:sacred-symbols"] } },
    { "id": "course-saints-mystics", "category": "historian", "name": "Chronicler of the Saints", "emblem": "crown", "points": 0, "course": "saints-mystics", "courseNumber": "003", "courseTitle": "Saints, Mystics & Visionaries",
      "text": "Completed Scholarium Course 003, Saints, Mystics & Visionaries.", "rule": { "all": ["course:saints-mystics"] } },
    { "id": "course-ancient-manuscripts", "category": "historian", "name": "Guardian of the Manuscripts", "emblem": "quill", "points": 0, "course": "ancient-manuscripts", "courseNumber": "004", "courseTitle": "Ancient Biblical Manuscripts",
      "text": "Completed Scholarium Course 004, Ancient Biblical Manuscripts.", "rule": { "all": ["course:ancient-manuscripts"] } },
    { "id": "course-architecture-of-the-sacred", "category": "symbolist", "name": "Keeper of the Cathedral", "emblem": "rose-window", "points": 0, "course": "architecture-of-the-sacred", "courseNumber": "005", "courseTitle": "The Architecture of the Sacred",
      "text": "Completed Scholarium Course 005, The Architecture of the Sacred.", "rule": { "all": ["course:architecture-of-the-sacred"] } },
    { "id": "course-early-christian-world", "category": "historian", "name": "Historian of the Early Church", "emblem": "ichthys", "points": 0, "course": "early-christian-world", "courseNumber": "006", "courseTitle": "The Early Christian World",
      "text": "Completed Scholarium Course 006, The Early Christian World.", "rule": { "all": ["course:early-christian-world"] } },

    { "id": "collection-biblical-scholarship", "category": "scholar", "name": "Doctor of Holy Writ", "emblem": "book", "points": 100, "advanced": true,
      "text": "Completed every course in the Biblical Scholarship collection.", "rule": { "all": ["course:seven-marys", "course:ancient-manuscripts"] } },
    { "id": "collection-sacred-art", "category": "symbolist", "name": "Master of the Illuminated Arts", "emblem": "rose-window", "points": 100, "advanced": true,
      "text": "Completed every course in the Sacred Art & Symbolism collection.", "rule": { "all": ["course:sacred-symbols", "course:architecture-of-the-sacred"] } },
    { "id": "collection-church-history", "category": "historian", "name": "Archivist of the Ages", "emblem": "chi-rho", "points": 100, "advanced": true,
      "text": "Completed every course in the Church History collection.", "rule": { "all": ["course:saints-mystics", "course:early-christian-world"] } },

    { "id": "biblical-detective", "category": "historian", "name": "Biblical Detective", "emblem": "quill", "points": 15,
      "text": "Solved a first Scholarium investigation.", "rule": { "count": "investigation:", "min": 1 } },
    { "id": "keeper-of-timelines", "category": "historian", "name": "Keeper of Timelines", "emblem": "wheel", "points": 15,
      "text": "Assembled a Scripture timeline in the right order.", "rule": { "count": "timeline:", "min": 1 } },
    { "id": "hunter-of-scripture", "category": "historian", "name": "Hunter of Scripture", "emblem": "lantern", "points": 15,
      "text": "Completed a Scripture scavenger hunt.", "rule": { "count": "hunt:", "min": 1 } },
    { "id": "pathfinder-of-the-word", "category": "historian", "name": "Pathfinder of the Word", "emblem": "lantern", "points": 40,
      "text": "Found twenty Scripture clues.", "rule": { "count": "hunt-clue:", "min": 20 } },

    { "id": "first-saint-card", "category": "saint-collector", "name": "First Saint Card", "emblem": "crown", "points": 5,
      "text": "Drew a first card from the Reliquary of Saints.", "rule": { "count": "saint:", "min": 1 } },
    { "id": "cloud-of-witnesses", "category": "saint-collector", "name": "A Cloud of Witnesses", "emblem": "crown", "points": 30,
      "text": "Collected ten saint cards. \"Seeing we also are compassed about with so great a cloud of witnesses\" (Hebrews 12:1).", "rule": { "count": "saint:", "min": 10 } },
    { "id": "communion-of-saints", "category": "saint-collector", "name": "Communion of Saints", "emblem": "crown", "points": 60, "advanced": true,
      "text": "Collected twenty-five saint cards.", "rule": { "count": "saint:", "min": 25 } },

    { "id": "student-of-signs", "category": "symbolist", "name": "Student of Signs", "emblem": "triquetra", "points": 10,
      "text": "Studied five sacred symbols.", "rule": { "count": "symbol:", "min": 5 } },
    { "id": "reader-of-symbols", "category": "symbolist", "name": "Reader of Symbols", "emblem": "triquetra", "points": 25,
      "text": "Studied every symbol in the Library's first collection.", "rule": { "count": "symbol:", "min": 13 } },

    { "id": "first-letter", "category": "scribe", "name": "First Letter", "emblem": "dove", "points": 10,
      "text": "Sent a first handwritten letter of kindness.", "rule": { "count": "letter-sent", "min": 1 } },
    { "id": "faithful-correspondent", "category": "scribe", "name": "Faithful Correspondent", "emblem": "dove", "points": 40,
      "text": "Sent ten handwritten letters of kindness.", "rule": { "count": "letter-sent", "min": 10 } },
    { "id": "lily-post-member", "category": "scribe", "name": "Member of the Lily Post", "emblem": "lily", "points": 10,
      "text": "Joined the Lily Post pen-pal circle.", "rule": { "all": ["lily-post-joined"] } },
    { "id": "kindred-pen", "category": "scribe", "name": "Kindred Pen", "emblem": "dove", "points": 15,
      "text": "Found a pen pal through the Lily Post.", "rule": { "all": ["pen-pal-matched"] } },

    { "id": "walker-in-the-garden", "category": "gardener", "name": "Walker in the Garden", "emblem": "rose", "points": 10,
      "text": "Explored the Cloister Garden and its reading bench.", "rule": { "all": ["visit:garden", "discover:garden-reading"] } },
    { "id": "student-of-the-virtues", "category": "gardener", "name": "Student of the Seven Virtues", "emblem": "rose", "points": 20,
      "text": "Learned all seven virtues on the garden path.", "rule": { "count": "virtue:", "min": 7 } },

    { "id": "first-word", "category": "community", "name": "First Word", "emblem": "bread", "points": 5,
      "text": "Joined a first discussion in the Library.", "rule": { "count": "comment", "min": 1 } },
    { "id": "voice-in-the-chapter-house", "category": "community", "name": "A Voice in the Chapter House", "emblem": "bell", "points": 30,
      "text": "Took part in fifteen discussions.", "rule": { "count": "comment", "min": 15 } }
  ]
}/*@END*/;

/*
 * Exhibits that do NOT count as "discoveries": prayer, devotion and private reflection.
 * (Website-only setting: these never send anything, so the server doesn't need it.)
 */
VS.noPointPanels = ["candles", "candles-quiet", "silence", "reflection", "rosary", "prayer-garden", "stillness", "notes", "holy-water"];

/*
 * Sanctuary areas, for the exploration percentages in the Journal.
 * `rooms` are place ids from data/places.js. Extra activity ids can be added to `extra`.
 */
VS.sanctuaryAreas = [
  { id: "grounds", name: "The Grounds & Gatehouse", rooms: ["map", "gatehouse"] },
  { id: "cathedral", name: "The Violet Cathedral", rooms: ["cathedral", "quiet-chapel", "marian-chapel"] },
  { id: "library", name: "The Sacred Library", rooms: ["library", "scriptorium", "chapter-house"], articles: true, symbols: true },
  { id: "scholarium", name: "The Scholarium", scholarium: true, saints: true },
  { id: "garden", name: "The Cloister Garden", rooms: ["garden"], virtues: true },
  { id: "monastery", name: "The Monastery", rooms: ["monastery"] },
  { id: "gilded-lily", name: "The Gilded Lily", rooms: ["gilded-lily"] },
  { id: "reliquary", name: "The Little Reliquary", rooms: ["reliquary"] }
];

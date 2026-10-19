/*
 * ROOMS AND HOTSPOTS
 *
 * Each room has:
 *   title, kicker   – heading shown over the art
 *   art             – image file in assets/scenes/ (jpg, png, webp or svg)
 *   ratio           – the image's width ÷ height (e.g. 1600/900). Keeps hotspots lined up.
 *   alt             – a description of the picture for screen readers
 *   intro           – one or two sentences shown under the art
 *   parent          – where the "back" button goes
 *   hotspots        – clickable spots. x and y are percentages across and down the image.
 *                     Leave out x/y to show an item only in the list under the art.
 *                     Each spot does ONE of:  go: "room-id"   panel: "panel-id"   href: "#/some/page"
 *
 * To swap art: drop the new image into assets/scenes/, change `art` and `ratio`,
 * then nudge each hotspot's x/y until the glow sits on the right object.
 * Tip: open the room and add ?grid to the address (e.g. index.html?grid#/cathedral)
 * to show a percentage grid over the art while you adjust.
 */
window.VS = window.VS || {};

VS.places = {
  map: {
    title: "The Sanctuary Grounds",
    kicker: "Map",
    art: "assets/scenes/map.jpg",
    ratio: 1277 / 866,
    alt: "A lantern-lit night view of the sanctuary grounds on a wooded hillside under a crescent moon: the Violet Cathedral with a glowing rose window at the top, a Gothic library on the left, a monastery with a bell tower on the right, a garden of wisteria arches around a white statue, a cottage called the Gilded Lily, a gatehouse with violet banners, and a small chapel-like reliquary, joined by stone paths around a central fountain.",
    intro: "Every path leads somewhere quiet. Choose a place to see a preview, or use the list below.",
    bakedLabels: true, // the place names are painted into this image
    hotspots: [
      { label: "The Gatehouse", x: 41.7, y: 70.9, preview: "gatehouse" },
      { label: "The Violet Cathedral", x: 41.7, y: 21.1, preview: "cathedral" },
      { label: "The Sacred Library", x: 11.0, y: 32.1, preview: "library" },
      { label: "The Sacred Garden", x: 75.7, y: 46.4, preview: "garden" },
      { label: "The Gilded Lily", x: 8.8, y: 72.5, preview: "gilded-lily" },
      { label: "The Monastery", x: 79.6, y: 21.6, preview: "monastery", note: "Preview" },
      { label: "The Little Reliquary", x: 71.4, y: 77.5, preview: "reliquary", note: "Preview" }
    ]
  },

  gatehouse: {
    teaser: "Welcome and orientation. A map, visitor questions, and a gentle place to begin.",
    title: "The Gatehouse",
    kicker: "Welcome",
    art: "assets/scenes/gatehouse.jpg",
    ratio: 1672 / 941,
    bakedLabels: true, // labels are painted into this image
    alt: "A sunlit Gothic welcome hall with violet crescent-moon banners, a large painted map of the sanctuary on the left wall, a carved wooden desk with an open guest book, a noticeboard of upcoming gatherings, a tall arched doorway opening onto a fountain and distant spires, and a wooden door on the right.",
    intro: "You're welcome to look around before deciding anything. Nothing here needs an account, and nothing asks you to believe, join or buy.",
    parent: "map",
    hotspots: [
      { label: "What brings you here?", x: 22.8, y: 59.4, panel: "paths" },
      { label: "Sanctuary Map", x: 15.9, y: 35.3, go: "map" },
      { label: "Our Principles", x: 39, y: 45.2, panel: "principles" },
      { label: "Upcoming Gatherings", x: 73.5, y: 51.9, panel: "gatherings" },
      { label: "The Community Door", x: 90, y: 56.1, panel: "community" },
      { label: "Visitor Questions", panel: "faq" }
    ]
  },

  cathedral: {
    teaser: "Worship and prayer beneath violet glass. Today's reading, candles, and the side chapels.",
    title: "The Violet Cathedral",
    kicker: "Worship & Prayer",
    art: "assets/scenes/cathedral.jpg",
    ratio: 1400 / 1127,
    alt: "A soaring Gothic nave lit through tall blue and violet stained-glass windows, with wooden pews on either side and light falling from the vault onto a polished floor.",
    intro: "Sit for a while. Read today's passage, light a candle, or wander into the side chapels.",
    parent: "map",
    hotspots: [
      { label: "Today's Reading", x: 48, y: 47, panel: "todays-reading" },
      { label: "Gatherings & Prayer", x: 48, y: 69, panel: "cathedral-gatherings" },
      { label: "Sacred Music", x: 48.5, y: 20, panel: "sacred-music" },
      { label: "The Quiet Chapel", x: 22, y: 50, go: "quiet-chapel" },
      { label: "The Marian Chapel", x: 84, y: 42, go: "marian-chapel" },
      { label: "Holy Water Font", x: 6, y: 66, panel: "holy-water" },
      { label: "Light a Candle", x: 92, y: 61, panel: "candles" },
      { label: "To the Sacred Library", x: 70, y: 64, go: "library" },
      { label: "The Prayer Wall", href: "#/prayer-wall" }
    ]
  },

  "quiet-chapel": {
    title: "The Quiet Chapel",
    kicker: "Rest & Silence",
    art: "assets/scenes/quiet-chapel.jpg",
    ratio: 896 / 1152,
    alt: "A small, dark Gothic chapel painted in watercolour. Rows of candles glow beneath a narrow stained-glass window, and warm light falls across the stone floor between two tables.",
    intro: "A small room for grief, prayer, or simply sitting. Nothing here is recorded or shared.",
    parent: "cathedral",
    hotspots: [
      { label: "Light a Candle", x: 40, y: 56, panel: "candles-quiet" },
      { label: "Sit in Silence", x: 72, y: 70, panel: "silence" },
      { label: "A Short Reflection", x: 50, y: 37, panel: "reflection" },
      { label: "Return to the Cathedral", x: 50, y: 88, go: "cathedral" }
    ]
  },

  "marian-chapel": {
    title: "The Marian Chapel",
    kicker: "The Rosary",
    art: "assets/scenes/marian-chapel.jpg",
    ratio: 1600 / 900,
    alt: "A blue chapel with a starry vault. In a glowing alcove stands a simple robed figure crowned with twelve stars, with white lilies and votive candles below. A rosary hangs over a wooden kneeler.",
    intro: "Learn to pray the Rosary one bead at a time, or read about Mary in Scripture and tradition. Everything here is free.",
    parent: "cathedral",
    hotspots: [
      { label: "Pray the Rosary", x: 27.5, y: 71, panel: "rosary" },
      { label: "The Mysteries", x: 50, y: 37, panel: "mysteries" },
      { label: "Mary in Scripture", x: 73, y: 68, panel: "marian-scripture" },
      { label: "Rosary Gatherings", x: 50, y: 78, panel: "rosary-gatherings" },
      { label: "Return to the Cathedral", x: 6.3, y: 67, go: "cathedral" }
    ]
  },

  library: {
    teaser: "Symbolism, Scripture, saints, and sacred study.",
    title: "The Sacred Library",
    kicker: "Knowledge & Learning",
    art: "assets/scenes/library.jpg",
    ratio: 1,
    alt: "A violet Gothic library beneath a rose window with a crescent moon at its heart. Candlelit bookshelves rise on both sides, and a round carved table sits on a patterned rug.",
    intro: "Articles on Scripture, symbols, saints and mysticism, written for beginners and the curious alike.",
    parent: "map",
    hotspots: [
      { label: "Christian Symbols", x: 8, y: 45, href: "#/library/symbols" },
      { label: "The Rosary Companion", x: 12, y: 80, panel: "ed-rosary" },
      { label: "Marian Studies", x: 93, y: 45, href: "#/library/articles/marian-studies" },
      { label: "Angels & Angelology", x: 50, y: 21, href: "#/library/article/nine-choirs-of-angels" },
      { label: "Saint Cards", x: 88, y: 80, panel: "ed-saints" },
      { label: "The Scriptorium", x: 52, y: 75, go: "scriptorium" },
      { label: "The Chapter House", x: 35, y: 62, go: "chapter-house" },
      { label: "The Catalogue", x: 72, y: 70, href: "#/library/articles" },
      { label: "The Scholarium", x: 30, y: 33, href: "#/scholarium" },
      { label: "The Scripture Library", x: 50, y: 52, href: "#/bible" },
      { label: "Bible Studies & Reading Plans", x: 78, y: 26, href: "#/library/articles/bible-studies" },
      { label: "The Bible & Literature", href: "#/library/articles/literature" },
      { label: "The Illuminated Editions", panel: "editions" }
    ]
  },

  scriptorium: {
    title: "The Scriptorium",
    kicker: "Private Study",
    art: "assets/scenes/scriptorium.jpg",
    ratio: 1280 / 718,
    alt: "A quiet study at night. A wooden desk holds parchment, quills, ink and an old book beneath a tall Gothic window with a bright crescent moon. Candles and fireflies glow in the violet room.",
    intro: "A private desk for reading Scripture at your own pace. Your notes stay on this device.",
    parent: "library",
    hotspots: [
      { label: "Study Plans", x: 52, y: 76, panel: "study-plans" },
      { label: "Lectio Divina", x: 45, y: 30, href: "#/library/article/lectio-divina" },
      { label: "Your Notes", x: 37, y: 72, panel: "notes" },
      { label: "Study Guides", x: 75, y: 76, panel: "study-guides" }
    ]
  },

  "chapter-house": {
    title: "The Chapter House",
    kicker: "Gathering Room",
    art: "assets/scenes/chapter-house.jpg",
    ratio: 1,
    alt: "A round, book-lined room beneath an open dome of pink and violet starry sky. Candles stand on a round table at the centre, with books scattered on the floor.",
    intro: "Where group studies, reading circles and guest talks will meet. For now, gatherings happen on Discord.",
    parent: "library",
    hotspots: [
      { label: "Study Circles", x: 50, y: 64, panel: "chapter-schedule" },
      { label: "This Season's Book", x: 20, y: 45, panel: "book-club" },
      { label: "Join on Discord", x: 48, y: 40, panel: "community" },
      { label: "Guest Speakers", x: 64, y: 84, panel: "guest-speakers" }
    ]
  },

  "gilded-lily": {
    teaser: "Letters, paper goods, and little acts of kindness.",
    title: "The Gilded Lily",
    kicker: "Letters, paper goods, and little acts of kindness",
    art: "assets/scenes/gilded-lily.jpg",
    ratio: 1672 / 941,
    alt: "A sunlit cottage stationery shop with a violet Gilded Lily sign over the open door. Racks of lavender greeting cards, a wall of pigeonhole mail slots, a violet postbox, a writing desk with a brass lamp and pens, a table of printables, stacks of ribbon-tied parcels beside brass scales, and a cat asleep on the counter.",
    intro: "Printable stationery, cards and journaling pages. Some are free to download today.",
    bakedLabels: true, // the signs are painted into this image
    hotspots: [
      { label: "Letters & Cards", x: 30, y: 36.7, href: "#/gilded-lily/shop/cards" },
      { label: "The Lily Post (pen pals)", x: 74.8, y: 17, href: "#/gilded-lily/lily-post" },
      { label: "Printables (free)", x: 63.7, y: 54.9, panel: "free-printables" },
      { label: "The Letter Writing Desk", x: 36.5, y: 68.7, href: "#/gilded-lily/writing-desk" },
      { label: "Parcels & Stationery Shop", x: 91.7, y: 64.5, href: "#/gilded-lily/shop" },
      { label: "Sponsor a Kindness", href: "#/gilded-lily/sponsor" },
      { label: "About the Gilded Lily", panel: "lily-about" }
    ]
  },

  garden: {
    teaser: "Still water, flowers, and quiet. A place to rest and pray.",
    title: "The Sacred Garden",
    kicker: "Rest & Renewal",
    art: "assets/scenes/garden.jpg",
    ratio: 1000 / 800,
    alt: "A sunlit glass greenhouse overflowing with flowers. A still pond with lily pads fills the foreground, a white lily blooms at the water's edge, and a stone path leads to an archway draped in blossoms.",
    intro: "Sit by the water, plant a flower for someone you love, or spend a moment with a virtue.",
    parent: "map",
    hotspots: [
      { label: "Pool of Stillness", x: 40, y: 80, panel: "stillness" },
      { label: "The Prayer Garden", x: 64, y: 45, panel: "prayer-garden" },
      { label: "Garden of Virtues", x: 10, y: 80, panel: "virtues" },
      { label: "A Verse Among the Flowers", x: 40, y: 36, panel: "garden-reading" },
      { label: "The Prayer Wall", href: "#/prayer-wall" }
    ]
  },

  monastery: {
    teaser: "Community, crafts, and conversation. Coming soon.",
    title: "The Monastery",
    kicker: "Community & Creativity · Preview",
    art: "assets/scenes/monastery.jpg",
    ratio: 1672 / 941,
    bakedLabels: true, // labels are painted into this image
    alt: "A lantern-lit cloister at sunset: stone arches wrapped in jasmine and wisteria around a courtyard fountain, a candlelit dining hall on the left, a book-lined chapter house across the garden, an artist’s studio with easels on the right, and the cathedral rising beyond the roofs.",
    intro: "The Monastery will hold the community's everyday life: introductions, crafts and conversation. These rooms are still being prepared.",
    parent: "map",
    preview: true,
    hotspots: [
      { label: "The Common Table", x: 8.4, y: 37.3, panel: "common-table" },
      { label: "The Chapter House", x: 65.6, y: 41.4, go: "chapter-house" },
      { label: "The Atelier", x: 86, y: 36.1, panel: "atelier" },
      { label: "Garden Walk", x: 61.7, y: 69.1, go: "garden" },
      { label: "The Cloister", panel: "cloister" },
      { label: "Join the Community", panel: "community" }
    ]
  },

  reliquary: {
    teaser: "Rosaries, candles, and sacred gifts. A preview of the shop.",
    title: "The Little Reliquary",
    kicker: "Gift Shop · Preview",
    art: "assets/scenes/reliquary.jpg",
    ratio: 1,
    alt: "A watercolour of a small church gift shop full of candles, icons, crosses and rosaries, with a tall stained-glass window at the back and an open Bible on the table in front.",
    intro: "A preview of the gift shop. Every item shown is an example. Nothing is for sale yet.",
    parent: "map",
    preview: true,
    hotspots: [
      { label: "Rosaries", x: 40, y: 88, href: "#/reliquary/shop/rosaries" },
      { label: "Candles", x: 25, y: 75, href: "#/reliquary/shop/candles" },
      { label: "Bibles & Books", x: 68, y: 85, href: "#/reliquary/shop/books" },
      { label: "Christian Art", x: 63, y: 74, href: "#/reliquary/shop/art" },
      { label: "Crosses & Medals", x: 85, y: 35, href: "#/reliquary/shop/jewelry" },
      { label: "About the Reliquary", x: 50, y: 30, panel: "reliquary-about" }
    ]
  }
};

// Order of places in the menu.
VS.menu = [
  { group: "Arrive", items: [["", "The Entrance"], ["gatehouse", "The Gatehouse"], ["map", "Sanctuary Map"]] },
  { group: "Pray", items: [["cathedral", "The Violet Cathedral"], ["quiet-chapel", "The Quiet Chapel"], ["marian-chapel", "The Marian Chapel"], ["prayer-wall", "The Prayer Wall"]] },
  { group: "Learn", items: [["library", "The Sacred Library"], ["bible", "The Scripture Library"], ["bible/my", "Your Illuminated Bible"], ["library/articles", "Article Catalogue"], ["library/symbols", "Christian Symbols"], ["scholarium", "The Scholarium"], ["scholarium/reliquary", "Reliquary of Saints"], ["scriptorium", "The Scriptorium"], ["chapter-house", "The Chapter House"]] },
  { group: "Your Journal", items: [["journal", "Your Sanctuary Journal"]] },
  { group: "Rest", items: [["garden", "The Sacred Garden"]] },
  { group: "Shops & Community", items: [["gilded-lily", "The Gilded Lily"], ["gilded-lily/shop", "Stationery Catalogue"], ["gilded-lily/writing-desk", "Letter Writing Desk"], ["gilded-lily/lily-post", "The Lily Post (pen pals)"], ["gilded-lily/sponsor", "Sponsor a Kindness"], ["reliquary", "The Little Reliquary"], ["monastery", "The Monastery"]] }
];

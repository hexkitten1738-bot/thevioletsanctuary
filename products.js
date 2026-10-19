/*
 * SHOP PRODUCTS
 * Every item here is an EXAMPLE. Nothing is for sale and no payments are taken.
 *
 *   shop      – "gilded-lily" or "reliquary"
 *   group     – used for filtering (rosaries, candles, books, art, jewelry, stationery, cards, journals...)
 *   format    – how it will be delivered: "Digital download", "Print-on-demand", "Partner retailer"
 *   price     – shown exactly as written. Use "Free" for free items.
 *   icon      – picture drawn on the card: letter, card, bookmark, journal, postcard, candle, rosary, cross, book, art, seal
 *   tint      – background colour of the card picture
 *   download  – for free items, the file in assets/downloads/ that people can download now
 *   buyUrl    – later, paste your Payhip / Printify / retailer link here and a real "View" button appears
 */
window.VS = window.VS || {};

VS.products = [
  /* ---------- The Gilded Lily ---------- */
  { id: "lavender-letter-paper", shop: "gilded-lily", group: "stationery", name: "Lavender Lily Letter Paper", format: "Digital download", price: "Free", icon: "letter", tint: "#D9C4F0", description: "A single printable letter sheet with a soft lavender border and a lily in the corner. US Letter size.", download: "assets/downloads/lavender-letter-paper.svg" },
  { id: "be-still-bookmark", shop: "gilded-lily", group: "stationery", name: "\"Be Still\" Bookmarks", format: "Digital download", price: "Free", icon: "bookmark", tint: "#B8A4D1", description: "Three printable bookmarks with Psalm 46:10, a crescent moon and stars. Print on card stock and cut.", download: "assets/downloads/be-still-bookmarks.svg" },
  { id: "gratitude-page", shop: "gilded-lily", group: "journals", name: "Evening Gratitude Page", format: "Digital download", price: "Free", icon: "journal", tint: "#F3DDA8", description: "A printable journaling page with gentle prompts for the end of the day.", download: "assets/downloads/evening-gratitude-page.svg" },
  { id: "violet-writing-set", shop: "gilded-lily", group: "stationery", name: "Violet Hour Writing Set", format: "Digital download", price: "Example price · $6", icon: "letter", tint: "#77609B", description: "Ten coordinated letter sheets, envelope templates and matching postcards in violet and antique gold." },
  { id: "saints-greeting-cards", shop: "gilded-lily", group: "cards", name: "Feast Day Greeting Cards", format: "Digital download", price: "Example price · $8", icon: "card", tint: "#E9C6CF", description: "Twelve printable folded cards for saints' feast days, baptisms and name days." },
  { id: "sympathy-cards", shop: "gilded-lily", group: "cards", name: "Cards for Grief & Comfort", format: "Digital download", price: "Example price · $5", icon: "card", tint: "#C8D2F0", description: "Six gentle sympathy cards with Psalms and blank interiors for your own words." },
  { id: "pen-pal-kit", shop: "gilded-lily", group: "stationery", name: "Pen-Pal Starter Kit", format: "Digital download", price: "Example price · $7", icon: "seal", tint: "#D0AB75", description: "Introduction letter template, \"about me\" card, envelope liners and stickers to print." },
  { id: "advent-postcards", shop: "gilded-lily", group: "cards", name: "Advent Postcards", format: "Print-on-demand", price: "Example price · $14", icon: "postcard", tint: "#5A3E86", description: "A printed set of eight postcards, one for each week of Advent and Christmas." },
  { id: "lectio-journal", shop: "gilded-lily", group: "journals", name: "Lectio Divina Journal", format: "Print-on-demand", price: "Example price · $18", icon: "journal", tint: "#627762", description: "A 120-page printed journal with space to read, reflect, respond and rest each day." },

  /* ---------- The Little Reliquary ---------- */
  { id: "wooden-rosary", shop: "reliquary", group: "rosaries", name: "Olive Wood Rosary", format: "Partner retailer", price: "Example price · $24", icon: "rosary", tint: "#C9B8A6", description: "A simple five-decade rosary of olive wood beads with a wooden crucifix." },
  { id: "amethyst-rosary", shop: "reliquary", group: "rosaries", name: "Amethyst Glass Rosary", format: "Partner retailer", price: "Example price · $32", icon: "rosary", tint: "#B8A4D1", description: "Violet glass beads, silver-tone chain and a Miraculous Medal centrepiece." },
  { id: "votive-candles", shop: "reliquary", group: "candles", name: "Beeswax Votive Candles", format: "Partner retailer", price: "Example price · $16", icon: "candle", tint: "#F3DDA8", description: "A box of twelve unscented beeswax votives for home prayer corners." },
  { id: "advent-candles", shop: "reliquary", group: "candles", name: "Advent Wreath Candles", format: "Partner retailer", price: "Example price · $20", icon: "candle", tint: "#77609B", description: "Three violet candles and one rose candle for the four Sundays of Advent." },
  { id: "pocket-cross", shop: "reliquary", group: "jewelry", name: "Pewter Pocket Cross", format: "Partner retailer", price: "Example price · $9", icon: "cross", tint: "#C8D2F0", description: "A small smooth cross to carry in a pocket, with a printed prayer card." },
  { id: "saint-medal", shop: "reliquary", group: "jewelry", name: "Saint Benedict Medal Necklace", format: "Partner retailer", price: "Example price · $28", icon: "cross", tint: "#D0AB75", description: "A traditional Saint Benedict medal on an 18-inch chain." },
  { id: "devotional-bible", shop: "reliquary", group: "books", name: "Catholic Study Bible", format: "Partner retailer", price: "Example price · $45", icon: "book", tint: "#5A3E86", description: "A study edition with introductions, maps and notes. Example listing only." },
  { id: "prayer-journal", shop: "reliquary", group: "books", name: "The Violet Prayer Journal", format: "Print-on-demand", price: "Example price · $18", icon: "journal", tint: "#B8A4D1", description: "A printed journal with a prayer for each week of the liturgical year." },
  { id: "icon-print", shop: "reliquary", group: "art", name: "Rose Window Art Print", format: "Print-on-demand", price: "Example price · $22", icon: "art", tint: "#342545", description: "An 8 × 10 inch print of a violet rose window with a crescent moon." }
];

VS.shops = {
  "gilded-lily": {
    title: "The Gilded Lily",
    kicker: "Stationery Catalogue",
    banner: "assets/scenes/gilded-lily.jpg",
    intro: "Letters, paper goods, and little acts of kindness. Free printables can be downloaded today. Everything else is an example of what's planned.",
    back: "gilded-lily"
  },
  reliquary: {
    title: "The Little Reliquary",
    kicker: "Gift Shop Preview",
    banner: "assets/scenes/reliquary.jpg",
    intro: "A preview of the gift shop. Every item is an example. Nothing is for sale yet, and no payments are taken on this site.",
    back: "reliquary"
  }
};

VS.groupLabels = {
  stationery: "Stationery", cards: "Cards", journals: "Journals",
  rosaries: "Rosaries", candles: "Candles", jewelry: "Crosses & Medals", books: "Bibles & Books", art: "Christian Art"
};

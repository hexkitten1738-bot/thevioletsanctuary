/*
 * THE SCHOLARIUM: settings, collections, the course catalogue, and the Reliquary of Saints.
 *
 * Full courses live in their own files in data/courses/ (see data/courses/_TEMPLATE.js).
 * A course listed here with `status: "preparing"` shows in the catalogue as "In preparation"
 * until its file is added.
 */
window.VS = window.VS || {};

VS.scholarium = {
  name: "The Scholarium",
  // Shown on every certificate. Please keep it: these are not accredited qualifications.
  certificateNote: "A certificate of informal personal study. Not an accredited academic qualification.",

  collections: [
    { id: "biblical-scholarship", name: "Biblical Scholarship", badge: "Doctor of Holy Writ", emblem: "book",
      text: "Gospel investigations, biblical women, Scripture and its history." },
    { id: "sacred-art", name: "Sacred Art & Symbolism", badge: "Master of the Illuminated Arts", emblem: "rose-window",
      text: "Christian iconography, sacred architecture, manuscripts and botanical symbolism." },
    { id: "church-history", name: "Church History", badge: "Archivist of the Ages", emblem: "chi-rho",
      text: "Early and medieval Christianity, the councils, and the saints." }
  ],

  // The catalogue. Full courses (from data/courses/) are merged in by id.
  catalogue: [
    { id: "seven-marys", number: "001", collection: "biblical-scholarship" },
    { id: "sacred-symbols", number: "002", collection: "sacred-art", status: "preparing",
      title: "The Language of Sacred Symbols", subject: "Christian Art & Iconography",
      summary: "The pelican, the lamb, the fish, the serpent, the lily, the rose, the dove, and the colours of the Church: learn to read the hidden language of sacred art.",
      badge: { name: "Keeper of the Symbolarium", emblem: "triquetra" } },
    { id: "saints-mystics", number: "003", collection: "church-history", status: "preparing",
      title: "Saints, Mystics & Visionaries", subject: "Christian History",
      summary: "The lives, worlds, writings and images of the saints, from the desert mothers to the modern age.",
      badge: { name: "Chronicler of the Saints", emblem: "crown" } },
    { id: "ancient-manuscripts", number: "004", collection: "biblical-scholarship", status: "preparing",
      title: "Ancient Biblical Manuscripts", subject: "Textual History",
      summary: "The Dead Sea Scrolls, the great codices, scribes and copyists, and how the Bible reached us in English.",
      badge: { name: "Guardian of the Manuscripts", emblem: "quill" } },
    { id: "architecture-of-the-sacred", number: "005", collection: "sacred-art", status: "preparing",
      title: "The Architecture of the Sacred", subject: "Sacred Architecture",
      summary: "Gothic cathedrals, stained glass, sacred geometry and the monastery: how stone was made to pray.",
      badge: { name: "Keeper of the Cathedral", emblem: "rose-window" } },
    { id: "early-christian-world", number: "006", collection: "church-history", status: "preparing",
      title: "The Early Christian World", subject: "Church History",
      summary: "The first Christians in the Roman Empire: communities, persecutions, writings, and the great debates.",
      badge: { name: "Historian of the Early Church", emblem: "ichthys" } }
  ]
};

/*
 * Extra emblems (48 × 48, drawn with lines). Symbols from data/symbols.js
 * (lily, triquetra, keys, dove, flame, ichthys, chi-rho…) can be used by id too.
 */
VS.emblems = {
  book: '<path d="M24 12c-5-4-12-4-17-2v26c5-2 12-2 17 2 5-4 12-4 17-2V10c-5-2-12-2-17 2z"/><path d="M24 12v26"/>',
  quill: '<path d="M38 6C24 10 14 22 12 38"/><path d="M38 6c-2 12-10 20-22 24"/><path d="M12 38l-3 4"/><path d="M20 24l6 2"/>',
  crown: '<path d="M8 34l-2-18 10 8 8-14 8 14 10-8-2 18z"/><path d="M10 40h28"/>',
  "rose-window": '<circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="5"/><path d="M24 8v11M24 29v11M8 24h11M29 24h11M12.7 12.7l7.8 7.8M27.5 27.5l7.8 7.8M35.3 12.7l-7.8 7.8M20.5 27.5l-7.8 7.8"/>',
  "seven-stars": '<circle cx="24" cy="24" r="4"/><path d="M24 6l1.5 3.5L29 10l-3 2 1 3.5-3-2-3 2 1-3.5-3-2 3.5-.5zM38.5 13l1 3 3 .4-2.4 1.8.8 3-2.4-1.8-2.4 1.8.8-3L33.5 16.4l3-.4zM38.5 29l1 3 3 .4-2.4 1.8.8 3-2.4-1.8-2.4 1.8.8-3-2.4-1.8 3-.4zM24 35l1.5 3.5L29 39l-3 2 1 3.5-3-2-3 2 1-3.5-3-2 3.5-.5zM9.5 29l1 3 3 .4-2.4 1.8.8 3-2.4-1.8-2.4 1.8.8-3L4.5 32.4l3-.4zM9.5 13l1 3 3 .4-2.4 1.8.8 3-2.4-1.8-2.4 1.8.8-3L4.5 16.4l3-.4z"/>',
  sword: '<path d="M24 4v30M17 34h14M24 34v8"/><path d="M21 8l3-4 3 4"/>',
  wheel: '<circle cx="24" cy="24" r="15"/><circle cx="24" cy="24" r="4"/><path d="M24 9v11M24 28v11M9 24h11M28 24h11"/>',
  heart: '<path d="M24 40C10 30 6 22 10 15c4-6 11-5 14 1 3-6 10-7 14-1 4 7 0 15-14 25z"/><path d="M24 4v6M20 7h8"/>',
  rose: '<circle cx="24" cy="18" r="9"/><path d="M24 12c-3 2-3 6 0 8 3-2 3-6 0-8z"/><path d="M24 27v15M24 34c-4-3-8-2-10 1M24 36c4-3 8-2 10 1"/>',
  lamp: '<path d="M10 30c4-6 24-6 28 0-4 4-24 4-28 0z"/><path d="M38 30l5-3M24 24c-2-4 0-8 0-12 2 4 4 8 0 12z"/><path d="M18 34v6h12v-6"/>',
  shamrock: '<circle cx="24" cy="15" r="6"/><circle cx="16" cy="25" r="6"/><circle cx="32" cy="25" r="6"/><path d="M24 26v16"/>',
  ox: '<path d="M10 14c0 6 4 8 8 8M38 14c0 6-4 8-8 8"/><path d="M18 22c0 10 2 18 6 18s6-8 6-18c0-4-12-4-12 0z"/><circle cx="21" cy="28" r="1" fill="currentColor"/><circle cx="27" cy="28" r="1" fill="currentColor"/>',
  bell: '<path d="M12 34c3-3 3-8 3-14a9 9 0 0 1 18 0c0 6 0 11 3 14z"/><path d="M10 34h28M21 38a3 3 0 0 0 6 0M24 6v5"/>',
  harp: '<path d="M14 40V8c10 2 18 10 22 22l-22 10z"/><path d="M19 14v22M24 17v17M29 21v11"/>',
  lantern: '<path d="M18 12h12l3 6v16l-3 4H18l-3-4V18z"/><path d="M20 8h8M24 4v4M24 22c-2 3-2 6 0 8 2-2 2-5 0-8z"/>',
  bread: '<path d="M8 28c0-8 7-14 16-14s16 6 16 14v6H8z"/><path d="M16 20l3 6M24 18v7M32 20l-3 6"/>',
  wings: '<path d="M24 14v26"/><path d="M24 18C16 8 6 10 4 16c6 0 10 2 12 6-5 0-9 2-10 6 7-2 13 0 18 2"/><path d="M24 18c8-10 18-8 20-2-6 0-10 2-12 6 5 0 9 2 10 6-7-2-13 0-18 2"/>'
};

/*
 * THE RELIQUARY OF SAINTS: an illustrated card deck.
 * feast: "MM-DD" (Roman calendar unless noted). emblem: an id from VS.emblems or VS.symbols.
 * Add a card by copying one. Collected cards are kept even if a card's text changes later.
 */
VS.saints = [
  { id: "mary-magdalene", name: "Saint Mary Magdalene", dates: "1st century", feast: "07-22", emblem: "lamp",
    patron: "Contemplatives, converts, perfumers", symbols: "Alabaster jar of ointment, long hair, red cloak, egg",
    bio: "A follower of Jesus from Galilee, healed of \"seven devils\" (Luke 8:2), who stood by the cross and was the first to meet the risen Christ in John's Gospel.",
    fact: "Since the early centuries she has been called \"the apostle to the apostles\", because she carried the news of the resurrection to the disciples." },
  { id: "francis", name: "Saint Francis of Assisi", dates: "c. 1181–1226", feast: "10-04", emblem: "wings",
    patron: "Animals, ecology, Italy", symbols: "Brown habit, birds, wolf, the wounds of Christ",
    bio: "A wealthy merchant's son who gave up everything to live in joyful poverty, founding the Franciscan friars and preaching peace.",
    fact: "His Canticle of the Creatures is one of the earliest surviving poems in the Italian language." },
  { id: "clare", name: "Saint Clare of Assisi", dates: "1194–1253", feast: "08-11", emblem: "lantern",
    patron: "Television, eye disease, embroiderers", symbols: "Monstrance, lamp, abbess's staff",
    bio: "A young noblewoman who ran away to join Francis, and founded the order of contemplative nuns now called the Poor Clares.",
    fact: "In 1958 she was named patron saint of television, because when she was too ill to attend Mass, she was said to have seen and heard it on her wall." },
  { id: "joan-of-arc", name: "Saint Joan of Arc", dates: "c. 1412–1431", feast: "05-30", emblem: "sword",
    patron: "France, soldiers, those ridiculed for their faith", symbols: "Armour, banner, sword",
    bio: "A peasant girl who believed God called her to help the French in the Hundred Years' War. She led an army at seventeen and was burned at nineteen.",
    fact: "A later Church court overturned her conviction in 1456. She was canonised in 1920." },
  { id: "therese", name: "Saint Thérèse of Lisieux", dates: "1873–1897", feast: "10-01", emblem: "rose",
    patron: "Missionaries, florists, France", symbols: "Roses, crucifix, Carmelite habit",
    bio: "A young Carmelite nun who taught the \"little way\": doing small things with great love. She died of tuberculosis at twenty-four.",
    fact: "Her memoir, The Story of a Soul, became one of the most widely read spiritual books of the twentieth century. She was named a Doctor of the Church in 1997." },
  { id: "teresa-of-avila", name: "Saint Teresa of Ávila", dates: "1515–1582", feast: "10-15", emblem: "heart",
    patron: "Writers, those in religious life, headache sufferers", symbols: "Pierced heart, dove, book and quill",
    bio: "A Spanish Carmelite mystic and reformer who wrote The Interior Castle, picturing the soul as a crystal castle with many rooms.",
    fact: "In 1970 she became one of the first two women named Doctors of the Church, together with Catherine of Siena." },
  { id: "augustine", name: "Saint Augustine of Hippo", dates: "354–430", feast: "08-28", emblem: "heart",
    patron: "Theologians, printers, brewers", symbols: "Flaming heart, book, bishop's mitre",
    bio: "A brilliant, restless teacher who became a Christian in his thirties and a bishop in North Africa. His Confessions is the first great autobiography in the Western world.",
    fact: "He wrote to God in the Confessions, \"Late have I loved you, beauty so ancient and so new.\"" },
  { id: "patrick", name: "Saint Patrick", dates: "5th century", feast: "03-17", emblem: "shamrock",
    patron: "Ireland, engineers", symbols: "Shamrock, snakes, bishop's staff",
    bio: "Kidnapped from Britain as a teenager and enslaved in Ireland, he escaped, then returned years later to preach to the people who had held him captive.",
    fact: "His own Confession survives. The story of him explaining the Trinity with a shamrock appears much later, in the 1700s." },
  { id: "brigid", name: "Saint Brigid of Kildare", dates: "c. 451–525", feast: "02-01", emblem: "flame",
    patron: "Ireland, dairy workers, poets", symbols: "Brigid's cross of rushes, cow, flame",
    bio: "An Irish abbess who founded a great monastery at Kildare, remembered for her boundless generosity to the poor.",
    fact: "Woven Brigid's crosses are still made from rushes and hung in Irish homes on her feast day." },
  { id: "hildegard", name: "Saint Hildegard of Bingen", dates: "1098–1179", feast: "09-17", emblem: "flame",
    patron: "Musicians, writers", symbols: "Abbess with a book, tongues of flame",
    bio: "A German abbess, visionary, composer, writer on medicine and nature, and adviser to emperors and popes.",
    fact: "More of her music survives than that of almost any other named medieval composer. She was named a Doctor of the Church in 2012." },
  { id: "aquinas", name: "Saint Thomas Aquinas", dates: "1225–1274", feast: "01-28", emblem: "book",
    patron: "Students, scholars, universities", symbols: "Sun on his chest, book, dove",
    bio: "A Dominican friar whose Summa Theologiae brought together faith and reason, and still shapes Catholic thought.",
    fact: "Classmates nicknamed the quiet, heavy-set student \"the dumb ox\". Near the end of his life, after a deep experience in prayer, he said all he had written seemed \"like straw\"." },
  { id: "benedict", name: "Saint Benedict of Nursia", dates: "c. 480–547", feast: "07-11", emblem: "book",
    patron: "Europe, monks, students", symbols: "Black habit, Rule book, raven, broken cup",
    bio: "He left the noise of Rome to pray in a cave, and later wrote a Rule for monks whose balance of prayer, work and rest still guides monasteries today.",
    fact: "His Rule asks that every guest be received \"as Christ\"." },
  { id: "catherine-of-siena", name: "Saint Catherine of Siena", dates: "1347–1380", feast: "04-29", emblem: "lily",
    patron: "Europe, Italy, nurses", symbols: "Lily, crown of thorns, Dominican habit",
    bio: "A Dominican laywoman, mystic and fearless letter-writer who cared for the sick during plague and urged the pope to return from Avignon to Rome.",
    fact: "She dictated hundreds of letters, to popes, kings and ordinary people. She was named a Doctor of the Church in 1970." },
  { id: "julian-of-norwich", name: "Julian of Norwich", dates: "c. 1343–after 1416", feast: "05-08", emblem: "seven-stars",
    patron: "Honoured in Anglican, Lutheran and Catholic devotion", symbols: "Cat, hazelnut, book",
    bio: "An English anchoress who lived enclosed beside a church and wrote Revelations of Divine Love, the first book in English known to be by a woman.",
    fact: "She was never formally canonised, but is widely honoured. 8 May is her day in the Anglican calendar." },
  { id: "nicholas", name: "Saint Nicholas of Myra", dates: "4th century", feast: "12-06", emblem: "bread",
    patron: "Children, sailors, the falsely accused", symbols: "Three golden balls, bishop's robes",
    bio: "A bishop in what is now Turkey, famous for secret generosity. In a well-loved legend, he threw gold through a window at night to save three poor sisters.",
    fact: "Dutch settlers' \"Sinterklaas\" helped give us the name Santa Claus." },
  { id: "lucy", name: "Saint Lucy", dates: "died 304", feast: "12-13", emblem: "lantern",
    patron: "The blind, eye trouble, writers", symbols: "Lamp, eyes on a dish, palm of martyrdom",
    bio: "A young martyr of Syracuse in Sicily, killed in the persecution under Diocletian. Her name comes from the Latin for light.",
    fact: "In Sweden, girls in white with crowns of candles celebrate Lucia on her feast, in the darkest weeks of the year." },
  { id: "cecilia", name: "Saint Cecilia", dates: "early Roman martyr", feast: "11-22", emblem: "harp",
    patron: "Music and musicians", symbols: "Organ, harp, roses",
    bio: "An early Roman martyr whose legend says she sang to God in her heart on her wedding day. Little is known for certain of her life.",
    fact: "Her name is one of the few women's names in the ancient Roman Canon of the Mass." },
  { id: "michael", name: "Saint Michael the Archangel", dates: "Archangel", feast: "09-29", emblem: "sword",
    patron: "Police, soldiers, the sick", symbols: "Sword, scales, armour, dragon underfoot",
    bio: "An archangel, not a human saint. Scripture names him in Daniel, Jude and Revelation, where he leads the angels against the dragon.",
    fact: "His name is a question in Hebrew: \"Who is like God?\"" },
  { id: "joseph", name: "Saint Joseph", dates: "1st century", feast: "03-19", emblem: "lily",
    patron: "Workers, fathers, the universal Church", symbols: "Carpenter's tools, lily, staff",
    bio: "The husband of Mary and foster father of Jesus, a quiet, faithful craftsman who never speaks a single word in the Gospels.",
    fact: "In 1870 Pope Pius IX declared him patron of the universal Church." },
  { id: "kateri", name: "Saint Kateri Tekakwitha", dates: "1656–1680", feast: "07-14", emblem: "lily",
    patron: "Ecology, Indigenous peoples", symbols: "Lily, cross, tortoise",
    bio: "A Mohawk-Algonquin woman, scarred by smallpox in childhood, who became a Christian and lived a life of prayer near Montreal.",
    fact: "Called \"the Lily of the Mohawks\", she was canonised in 2012, the first Indigenous saint of North America. Her feast is 14 July in the United States." },
  { id: "martin-de-porres", name: "Saint Martin de Porres", dates: "1579–1639", feast: "11-03", emblem: "bread",
    patron: "Social justice, mixed-race people, barbers", symbols: "Broom, dog, cat and mouse eating together",
    bio: "The son of a Spanish nobleman and a freed woman of African and Indigenous descent in Lima, Peru. As a Dominican brother he cared for the sick and the poor.",
    fact: "Stories say he fed a dog, a cat and a mouse from one bowl in peace." },
  { id: "anthony-of-padua", name: "Saint Anthony of Padua", dates: "1195–1231", feast: "06-13", emblem: "lily",
    patron: "Lost things, the poor, travellers", symbols: "Christ Child, lily, book",
    bio: "A Portuguese Franciscan friar and a famous preacher, born in Lisbon, who spent his last years in Padua, Italy.",
    fact: "People still pray \"Saint Anthony, please come around, something is lost and must be found.\" He was named a Doctor of the Church in 1946." },
  { id: "elizabeth-ann-seton", name: "Saint Elizabeth Ann Seton", dates: "1774–1821", feast: "01-04", emblem: "book",
    patron: "Catholic schools, widows, grieving parents", symbols: "Bonnet, book",
    bio: "A New York widow and mother of five who became Catholic, founded the Sisters of Charity, and opened one of the first Catholic schools in the United States.",
    fact: "In 1975 she became the first person born in the United States to be canonised." },
  { id: "luke", name: "Saint Luke the Evangelist", dates: "1st century", feast: "10-18", emblem: "ox",
    patron: "Doctors, artists, surgeons", symbols: "Winged ox, book, painter's brush",
    bio: "The traditional author of the Gospel of Luke and the Acts of the Apostles, called \"the beloved physician\" by Paul (Colossians 4:14).",
    fact: "Luke's Gospel gives us the Annunciation, the Magnificat, the Good Samaritan and the Prodigal Son. A legend says he painted the first icon of Mary." },
  { id: "peter", name: "Saint Peter", dates: "died c. 64–68", feast: "06-29", emblem: "keys",
    patron: "Fishermen, popes", symbols: "Keys, upside-down cross, rooster",
    bio: "A Galilean fisherman who became the leader of the apostles: impulsive, loving, and the one who denied Jesus three times, then was forgiven.",
    fact: "Early tradition says he was crucified upside down in Rome, feeling unworthy to die as Jesus did." }
];

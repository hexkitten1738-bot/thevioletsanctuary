/*
 * SACRED LIBRARY ARTICLES
 *
 * Each section carries a `tag` so readers can tell what kind of claim they are reading:
 *   scripture       – what the Bible itself says
 *   tradition       – teaching or practice handed down in the Church
 *   history         – what historians can show from evidence
 *   interpretation  – a reading, theory or popular story that people hold differently
 *   practice        – how-to guidance
 *
 * To add an article: copy one of the objects below, give it a new unique `slug`,
 * and pick categories from VS.categories.
 *
 * Optional extras:
 *   format: "study" | "plan"   – shows a "Bible study" or "Reading plan" badge
 *   discuss: [ "question", … ] – a parchment box of reflection / discussion questions
 *   plan: [ { read: "Mark 1", note: "…" }, … ] – a tick-off reading plan (progress saved in the visitor's browser)
 */
window.VS = window.VS || {};

VS.categories = [
  { slug: "christianity-for-beginners", name: "Christianity for Beginners" },
  { slug: "bible-studies", name: "Bible Studies & Reading Plans" },
  { slug: "scripture", name: "Scripture & Biblical Mysteries" },
  { slug: "christian-symbols", name: "Christian Symbols" },
  { slug: "marian-studies", name: "Marian Studies" },
  { slug: "angels", name: "Angels & Angelology" },
  { slug: "saints-history", name: "Saints & Christian History" },
  { slug: "mysticism", name: "Christian Mysticism" },
  { slug: "philosophy", name: "Religious Philosophy" },
  { slug: "sacred-art", name: "Sacred Art & Architecture" },
  { slug: "catholic-traditions", name: "Catholic Traditions" },
  { slug: "literature", name: "The Bible & Literature" }
];

VS.tagLabels = {
  scripture: "Scripture",
  tradition: "Tradition",
  history: "History",
  interpretation: "Interpretation",
  practice: "Practice"
};

VS.articles = [
  {
    slug: "where-to-start-reading",
    title: "Where Should I Start Reading the Bible?",
    categories: ["christianity-for-beginners", "scripture"],
    summary: "The Bible is a library, not a single book. Here is a gentle way in for first-time readers, believers and the simply curious.",
    minutes: 6,
    sections: [
      {
        heading: "A library, not a novel",
        tag: "history",
        html: `<p>The Bible is a collection of books written over many centuries, in Hebrew, Aramaic and Greek, by many authors. It holds poetry, law, history, letters, proverbs, visions and stories. Most Protestant Bibles contain 66 books. Catholic Bibles contain 73, including books such as Tobit, Judith, Wisdom and Sirach, and some Orthodox Bibles include a few more.</p>
        <p>Because it is a library, you don't have to start at page one. Genesis is a fine place to begin. Leviticus, a few weeks later, can stop new readers in their tracks.</p>`
      },
      {
        heading: "Four good doors in",
        tag: "practice",
        html: `<ol>
          <li><strong>The Gospel of Mark.</strong> The shortest of the four Gospels, at sixteen chapters. It moves quickly and can be read in an evening.</li>
          <li><strong>The Gospel of Luke.</strong> Fuller and warmer, with the nativity story and the parables of the Good Samaritan and the Prodigal Son.</li>
          <li><strong>The Psalms.</strong> 150 prayers and songs covering joy, rage, grief, doubt and praise. Try Psalms 1, 23, 42 and 139.</li>
          <li><strong>Ruth.</strong> A four-chapter story of loyalty, loss and kindness between two widows.</li>
        </ol>`
      },
      {
        heading: "Why many scholars think Mark came first",
        tag: "interpretation",
        html: `<p>Most modern biblical scholars think Mark was the earliest Gospel written, probably around AD 65–75, and that Matthew and Luke drew on it. This is a widely held scholarly view rather than something the texts state, and some scholars argue otherwise. Either way, Mark's brevity makes it a natural first read.</p>`
      },
      {
        heading: "Choosing a translation",
        tag: "practice",
        html: `<p>Translations balance word-for-word accuracy against natural English. Some common choices:</p>
        <ul>
          <li><strong>NRSV</strong>: widely used in universities, readable and careful.</li>
          <li><strong>NABRE</strong>: the translation used in Catholic churches in the United States.</li>
          <li><strong>ESV or NIV</strong>: popular in many Protestant churches.</li>
          <li><strong>King James Version</strong> or <strong>Douay-Rheims</strong>: older translations with beautiful, archaic language.</li>
        </ul>
        <p>A "study Bible" adds notes on history and language, which helps with confusing passages.</p>`
      },
      {
        heading: "How to read",
        tag: "practice",
        html: `<p>Read a little at a time. Notice what surprises or troubles you, and write it down. Questions are part of reading, not a sign you are doing it wrong. Many readers find that coming back to a single passage slowly over a week teaches more than racing through chapters.</p>`
      }
    ],
    sources: ["The Bible (various translations)", "Bart D. Ehrman, The New Testament: A Historical Introduction to the Early Christian Writings", "Raymond E. Brown, An Introduction to the New Testament"],
    related: ["lectio-divina", "chi-rho-and-ichthys"]
  },

  {
    slug: "chi-rho-and-ichthys",
    title: "The Chi-Rho, the Fish and the Alpha-Omega: Early Christian Symbols",
    categories: ["christian-symbols", "saints-history"],
    summary: "Long before the crucifix became common in art, early Christians marked their faith with letters and simple pictures. Here is what those symbols mean and what we actually know about them.",
    minutes: 7,
    sections: [
      {
        heading: "The Ichthys (fish)",
        tag: "history",
        html: `<p><em>Ichthys</em> is Greek for "fish." Its five Greek letters, ΙΧΘΥΣ, form an acrostic: <strong>I</strong>ēsous <strong>Ch</strong>ristos <strong>Th</strong>eou <strong>Y</strong>ios <strong>S</strong>ōtēr, meaning "Jesus Christ, Son of God, Saviour." Fish appear in early Christian tomb art, and around AD 200 the writer Tertullian called Christians "little fishes," born in the water of baptism after the example of Jesus, the great Ichthys.</p>`
      },
      {
        heading: "The fish in the Gospels",
        tag: "scripture",
        html: `<p>The symbol echoes the Gospels: fishermen called to be "fishers of men" (Mark 1:17), the loaves and fishes (Mark 6:30–44), and the risen Jesus cooking fish on the shore for his disciples (John 21:9–13).</p>`
      },
      {
        heading: "The secret-sign story",
        tag: "interpretation",
        html: `<p>A popular story says persecuted Christians identified one another by drawing half a fish in the sand, waiting for the other person to complete it. It is a lovely image, but there is little direct ancient evidence for it. Treat it as a later retelling rather than established history.</p>`
      },
      {
        heading: "The Chi-Rho",
        tag: "history",
        html: `<p>The Chi-Rho overlays the first two Greek letters of <em>Christos</em>, Χ (chi) and Ρ (rho). The monogram existed before Christianity as a scribal abbreviation, but Christians made it their own. The early writer Lactantius records that before the Battle of the Milvian Bridge in AD 312, the emperor Constantine had his soldiers mark a sign of Christ on their shields. The Chi-Rho later appeared on Constantine's military standard, the <em>labarum</em>, on coins and on countless tombs.</p>`
      },
      {
        heading: "Alpha and Omega",
        tag: "scripture",
        html: `<p>Alpha (Α) and Omega (Ω) are the first and last letters of the Greek alphabet. In the Book of Revelation, God says, "I am Alpha and Omega, the beginning and the ending" (Revelation 1:8; see also 21:6 and 22:13). The letters often flank a Chi-Rho or cross, and are traced on the Easter candle in many churches.</p>`
      }
    ],
    sources: ["Tertullian, On Baptism, ch. 1", "Lactantius, On the Deaths of the Persecutors, ch. 44", "Eusebius, Life of Constantine, Book I", "Robin M. Jensen, Understanding Early Christian Art"],
    related: ["why-gothic-cathedrals-are-full-of-light", "where-to-start-reading"]
  },

  {
    slug: "what-is-the-rosary",
    title: "What Is the Rosary? A Beginner's Guide",
    categories: ["catholic-traditions", "marian-studies"],
    summary: "A string of beads, a handful of prayers, and twenty moments from the Gospels. How the Rosary works, where it came from, and how to begin.",
    minutes: 7,
    sections: [
      {
        heading: "The shape of the prayer",
        tag: "practice",
        html: `<p>A rosary is a loop of beads with a short pendant and a cross. The loop holds five "decades," each a group of ten small beads separated by a single larger bead. On each small bead you pray a Hail Mary, and on the larger beads an Our Father. While your fingers move along the beads, your mind rests on a scene from the life of Jesus and Mary, called a <em>mystery</em>.</p>
        <p>The repetition is not meant to be mechanical. Many people describe it as a kind of background rhythm, like waves, that lets the mind settle on the scene being contemplated.</p>`
      },
      {
        heading: "Where it came from",
        tag: "history",
        html: `<p>Prayer beads are far older than the Rosary and appear in many religions. In medieval Europe, monks prayed all 150 Psalms. Lay people who could not read often prayed 150 Our Fathers instead, counting them on a cord. Over the following centuries the Hail Mary (whose first half is drawn from Luke 1:28 and 1:42) took the place of many of those prayers. In 1569, Pope Pius V issued a formal document describing the Rosary with fifteen mysteries, and that form spread across the Catholic world.</p>`
      },
      {
        heading: "Saint Dominic and the Rosary",
        tag: "tradition",
        html: `<p>A much-loved tradition holds that the Virgin Mary gave the Rosary to Saint Dominic in the early 1200s. Historians generally see the Rosary as growing gradually over several centuries, with Dominican friars such as Alan de la Roche in the 1400s playing a large part in spreading it. Both the tradition and the history are part of the Rosary's story.</p>`
      },
      {
        heading: "The four sets of mysteries",
        tag: "tradition",
        html: `<p>The <strong>Joyful</strong> mysteries follow Jesus's conception, birth and childhood. The <strong>Sorrowful</strong> mysteries follow his suffering and death. The <strong>Glorious</strong> mysteries follow the resurrection and what came after. In 2002, Pope John Paul II added the <strong>Luminous</strong> mysteries, which follow Jesus's public ministry.</p>
        <p>Most of the mysteries are scenes narrated in the Gospels and Acts. Two of the Glorious mysteries, Mary's Assumption and Coronation, come from Church tradition rather than a biblical account.</p>`
      },
      {
        heading: "How to begin",
        tag: "practice",
        html: `<p>You don't need to pray all five decades. One decade, said slowly, is a complete prayer. You don't need a rosary either; your fingers will do. The interactive Rosary in the <a href="#/marian-chapel">Marian Chapel</a> walks you through each bead with the words on screen.</p>`
      }
    ],
    sources: ["Pope Pius V, Consueverunt Romani Pontifices (1569)", "Pope John Paul II, Rosarium Virginis Mariae (2002)", "Anne Winston-Allen, Stories of the Rose: The Making of the Rosary in the Middle Ages"],
    related: ["lectio-divina", "nine-choirs-of-angels"]
  },

  {
    slug: "nine-choirs-of-angels",
    title: "The Nine Choirs of Angels: What Scripture Says and What Tradition Adds",
    categories: ["angels", "scripture"],
    summary: "Seraphim, cherubim, thrones and powers. The Bible names many kinds of heavenly beings, but the famous nine-fold ladder comes from a sixth-century mystic.",
    minutes: 8,
    sections: [
      {
        heading: "Angels in the Bible",
        tag: "scripture",
        html: `<p>The word <em>angel</em> comes from the Greek <em>angelos</em>, "messenger." In Scripture, angels announce, guard, guide and worship. Gabriel announces the births of John the Baptist and Jesus (Luke 1:19, 1:26). Michael is called an archangel (Jude 9). The Book of Tobit, found in Catholic and Orthodox Bibles, introduces Raphael as "one of the seven holy angels" (Tobit 12:15).</p>`
      },
      {
        heading: "The named orders",
        tag: "scripture",
        html: `<p>Several passages name different kinds of heavenly beings:</p>
        <ul>
          <li><strong>Seraphim</strong>, with six wings, crying "Holy, holy, holy" (Isaiah 6:2–3).</li>
          <li><strong>Cherubim</strong>, guarding the way to the tree of life (Genesis 3:24) and appearing in Ezekiel's visions (Ezekiel 10).</li>
          <li><strong>Thrones, dominions, principalities and powers</strong> (Colossians 1:16).</li>
          <li><strong>Principality, power, might and dominion</strong> (Ephesians 1:21).</li>
          <li><strong>Archangels</strong> (1 Thessalonians 4:16; Jude 9).</li>
        </ul>
        <p>Scripture names these groups but never arranges them into a ranked system.</p>`
      },
      {
        heading: "Dionysius and the celestial hierarchy",
        tag: "history",
        html: `<p>Around the late fifth or early sixth century, a Christian writer who took the name of Dionysius the Areopagite (Acts 17:34) wrote <em>The Celestial Hierarchy</em>. Scholars call him Pseudo-Dionysius, because he was not the first-century convert he claimed to be. He arranged the biblical names into three groups of three:</p>
        <ol>
          <li><strong>Seraphim, Cherubim, Thrones</strong>: nearest to God, absorbed in contemplation.</li>
          <li><strong>Dominions, Virtues, Powers</strong>: governing the order of creation.</li>
          <li><strong>Principalities, Archangels, Angels</strong>: closest to the human world.</li>
        </ol>
        <p>"Virtues" comes from the Latin translation of the Greek <em>dynamis</em>, rendered "might" in Ephesians 1:21.</p>`
      },
      {
        heading: "How the scheme spread",
        tag: "tradition",
        html: `<p>Pope Gregory the Great used a slightly different ordering. Thomas Aquinas discussed Dionysius's arrangement in detail in the <em>Summa Theologiae</em>, and Dante built it into the heavens of his <em>Paradiso</em>. Through these writers, the nine choirs became a standard image in Western art and devotion.</p>`
      },
      {
        heading: "Holding it lightly",
        tag: "interpretation",
        html: `<p>The nine choirs are a beautiful theological meditation, not a teaching found directly in Scripture. Many Christians treat them as a poetic map of heavenly praise rather than a precise chart. The Catholic Church teaches that angels exist, but it has not defined the nine-fold hierarchy as doctrine.</p>`
      }
    ],
    sources: ["Pseudo-Dionysius, The Celestial Hierarchy", "Gregory the Great, Homilies on the Gospels, 34", "Thomas Aquinas, Summa Theologiae I, q. 108", "Catechism of the Catholic Church, §§328–336"],
    related: ["what-is-the-rosary", "why-gothic-cathedrals-are-full-of-light"]
  },

  {
    slug: "lectio-divina",
    title: "Lectio Divina: Reading Scripture Slowly",
    categories: ["mysticism", "scripture"],
    summary: "An ancient monastic way of reading that trades speed for attention. Four simple movements you can try today with a single verse.",
    minutes: 6,
    sections: [
      {
        heading: "An old practice",
        tag: "history",
        html: `<p><em>Lectio divina</em> is Latin for "divine reading." Early Christian teachers such as Origen encouraged slow, prayerful reading of Scripture, and the sixth-century <em>Rule of Saint Benedict</em> set aside daily hours for it (chapter 48). In the twelfth century, a Carthusian monk named Guigo II described the practice as a ladder with four rungs in his letter <em>The Ladder of Monks</em>.</p>`
      },
      {
        heading: "The four movements",
        tag: "practice",
        html: `<ol>
          <li><strong>Lectio (read).</strong> Read a short passage slowly, perhaps aloud. Read it again.</li>
          <li><strong>Meditatio (reflect).</strong> Notice a word or phrase that catches you. Turn it over gently, as you might hold a stone in your hand.</li>
          <li><strong>Oratio (respond).</strong> Speak to God about what you noticed: gratitude, a question, a complaint, a request.</li>
          <li><strong>Contemplatio (rest).</strong> Let the words go quiet. Simply rest in God's presence without needing to think or say anything.</li>
        </ol>
        <p>Guigo compared it to eating: reading puts food in the mouth, meditation chews it, prayer tastes it, and contemplation is the sweetness that refreshes.</p>`
      },
      {
        heading: "Try it now",
        tag: "practice",
        html: `<p>Choose one short passage, such as Psalm 23:1–3, Matthew 11:28–30 or John 15:4–5. Give it ten minutes. If your mind wanders, return to the word that caught you. There is no way to fail at this.</p>
        <p>The <a href="#/scriptorium">Scriptorium</a> has a private notes page if you'd like to write down what you notice.</p>`
      },
      {
        heading: "Why it matters",
        tag: "interpretation",
        html: `<p>Many people today read quickly, scanning for information. Lectio divina invites the opposite: reading to be changed rather than to be informed. Readers from many Christian traditions, Catholic, Orthodox and Protestant, have taken it up, and some people with no faith at all use its rhythm for slow, attentive reading of poetry.</p>`
      }
    ],
    sources: ["Guigo II, The Ladder of Monks (Scala Claustralium)", "The Rule of Saint Benedict, ch. 48", "Michael Casey, Sacred Reading: The Ancient Art of Lectio Divina"],
    related: ["where-to-start-reading", "what-is-the-rosary"]
  },

  {
    slug: "why-gothic-cathedrals-are-full-of-light",
    title: "Why Are Gothic Cathedrals So Full of Light?",
    categories: ["sacred-art", "saints-history"],
    summary: "Pointed arches, ribbed vaults and flying buttresses let medieval builders replace walls with glass. Here is how it worked and what they believed light could mean.",
    minutes: 7,
    sections: [
      {
        heading: "A new kind of building",
        tag: "history",
        html: `<p>In the 1140s, Abbot Suger rebuilt the choir of the Abbey of Saint-Denis, near Paris, and it was consecrated in 1144. Historians often call it the first Gothic building. Its walls seemed to dissolve into tall windows of coloured glass. Within a century the style had spread across Europe, from Chartres to Canterbury to Cologne.</p>`
      },
      {
        heading: "Three inventions working together",
        tag: "history",
        html: `<ul>
          <li><strong>Pointed arches</strong> push their weight downward more steeply than round arches, so they can rise higher.</li>
          <li><strong>Ribbed vaults</strong> gather the weight of the ceiling into a few strong lines instead of spreading it across the whole wall.</li>
          <li><strong>Flying buttresses</strong>, the stone arms outside the walls, carry that weight away from the building.</li>
        </ul>
        <p>With the weight carried by a stone skeleton, the walls between the columns no longer had to hold the roof up, so they could be filled with glass.</p>`
      },
      {
        heading: "Light as a sign of God",
        tag: "scripture",
        html: `<p>Scripture is full of light: "God is light, and in him is no darkness at all" (1 John 1:5); Jesus says, "I am the light of the world" (John 8:12); the heavenly city has no need of the sun, "for the glory of God did lighten it" (Revelation 21:23).</p>`
      },
      {
        heading: "Did theology shape the architecture?",
        tag: "interpretation",
        html: `<p>Suger wrote that beautiful, material things could lift a dull mind toward spiritual truth. In the twentieth century, the art historian Erwin Panofsky argued that Suger was inspired by the light mysticism of Pseudo-Dionysius, whom medieval monks at Saint-Denis confused with their patron saint. Later historians have debated how direct that influence really was. Some see the windows mainly as teaching tools and displays of wealth and craftsmanship. Most would agree that light carried deep spiritual meaning for the builders.</p>`
      },
      {
        heading: "Two places to visit",
        tag: "history",
        html: `<p><strong>Sainte-Chapelle</strong> in Paris, consecrated in 1248, was built by King Louis IX to house relics he believed to include the Crown of Thorns. Its upper chapel is almost entirely glass. <strong>Chartres Cathedral</strong>, largely rebuilt after a fire in 1194, keeps one of the most complete collections of medieval stained glass in the world, known for its deep "Chartres blue."</p>`
      }
    ],
    sources: ["Abbot Suger, On the Abbey Church of St.-Denis and Its Art Treasures, ed. Erwin Panofsky", "Otto von Simson, The Gothic Cathedral", "Robert A. Scott, The Gothic Enterprise"],
    related: ["chi-rho-and-ichthys", "nine-choirs-of-angels"]
  },

  /* =====================  BIBLE STUDIES & READING PLANS  ===================== */

  {
    slug: "parables-four-week-study",
    title: "The Parables of Jesus: A Four-Week Study",
    format: "study",
    categories: ["bible-studies", "scripture"],
    summary: "Four short stories Jesus told, one a week: the Sower, the Good Samaritan, the Prodigal Son, and the Mustard Seed. For study groups, quiet readers, and anyone who has ever been told a story that wouldn't leave them alone.",
    minutes: 12,
    sections: [
      {
        heading: "How to use this study",
        tag: "practice",
        html: `<p>Take one parable a week. Read it aloud twice, a day or two apart. The second time, read more slowly and notice which character you find yourself standing beside. Then take the questions at the end of this page and live with them for a few days.</p>
        <p>You can do this alone, with a friend, or in a group. Nobody needs to be an expert. Parables were told to fishermen, farmers and housewives, not to scholars.</p>`
      },
      {
        heading: "What is a parable?",
        tag: "history",
        html: `<p>The Greek word <em>parabolē</em> means something "thrown alongside": an ordinary picture set next to a deeper truth so the two shed light on each other. Jesus' parables appear in Matthew, Mark and Luke. John's Gospel has figurative sayings, like the Good Shepherd, but not story-parables of the same kind. Depending on how you count, there are somewhere between thirty and forty.</p>
        <p>The scholar C. H. Dodd famously described a parable as a picture drawn from nature or common life, "arresting the hearer by its vividness or strangeness, and leaving the mind in sufficient doubt about its precise application to tease it into active thought." In other words, parables are meant to be puzzled over.</p>`
      },
      {
        heading: "Week one: The Sower (Mark 4:1–20)",
        tag: "scripture",
        html: `<p>A farmer scatters seed. Some falls on the path and birds eat it. Some falls on rocky ground and withers. Some is choked by thorns. Some falls on good soil and yields thirty, sixty and a hundredfold. Unusually, Mark includes an explanation: the seed is the word, and the soils are the different ways people hear it.</p>
        <p>Notice how generous the sower is. He throws seed everywhere, even where it seems wasted.</p>`
      },
      {
        heading: "Week two: The Good Samaritan (Luke 10:25–37)",
        tag: "scripture",
        html: `<p>A lawyer asks Jesus, "And who is my neighbour?" Jesus answers with a story: a man is beaten and left half dead on the road from Jerusalem to Jericho. A priest passes by on the other side, then a Levite. A Samaritan stops, binds his wounds, brings him to an inn, and pays for his care.</p>
        <p>At the end, Jesus turns the question around. Not "who is my neighbour?" but "which of these was a neighbour to the man?"</p>`
      },
      {
        heading: "Week three: The Prodigal Son (Luke 15:11–32)",
        tag: "scripture",
        html: `<p>A younger son asks for his inheritance early, spends it, and ends up feeding pigs. He goes home rehearsing an apology, but his father sees him "a great way off", runs to him and throws a feast. The elder son, who stayed and worked, refuses to come in.</p>
        <p>The story ends with the father pleading with the elder son. We are never told whether he goes inside.</p>`
      },
      {
        heading: "Week four: The Mustard Seed and the Leaven (Matthew 13:31–33)",
        tag: "scripture",
        html: `<p>Two tiny parables, told together. The kingdom of heaven is like a mustard seed, "the least of all seeds", that grows into a plant where birds can shelter. And it is like leaven (yeast) that a woman hides in three measures of flour "till the whole was leavened".</p>
        <p>Both are about small, hidden beginnings that end up changing everything.</p>`
      },
      {
        heading: "Some background",
        tag: "history",
        html: `<ul>
          <li><strong>Samaritans</strong> and Judeans had a long-standing rivalry, partly over where God should be worshipped: Mount Gerizim or Jerusalem. John 4:9 notes that "the Jews have no dealings with the Samaritans." Making a Samaritan the hero would have startled Jesus' first listeners.</li>
          <li><strong>Pigs</strong> were unclean under Jewish law. A young Jewish man feeding them, and longing to eat their food, has hit the very bottom.</li>
          <li><strong>Leaven</strong> often stood for corruption in Scripture (Mark 8:15; 1 Corinthians 5:6–8). Using it as a picture of God's kingdom was a surprise. Three measures of flour is also an enormous amount, enough bread for well over a hundred people.</li>
        </ul>`
      },
      {
        heading: "Ways of reading parables",
        tag: "interpretation",
        html: `<p>Early and medieval Christians often read parables as allegories, where every detail stands for something. Saint Augustine read the Good Samaritan this way: the wounded man is Adam, the robbers are the devil and his angels, the Samaritan is Christ, and the inn is the Church.</p>
        <p>In the nineteenth century, the German scholar Adolf Jülicher argued that each parable makes just one main point. Many readers today take a middle path: a parable has a centre, but its details can still open further meanings. Christians have long held that a story can be read on more than one level at once.</p>`
      }
    ],
    discuss: [
      "The Sower: Which kind of soil does your life feel like right now? What might the 'thorns' be?",
      "The Good Samaritan: Who would be the surprising 'Samaritan' in your world today, someone you'd least expect to be the hero?",
      "The Good Samaritan: Why do you think the priest and the Levite walked past? Have you ever walked past?",
      "The Prodigal Son: Are you more like the younger son, the elder son, or the father? Has that changed over your life?",
      "The Prodigal Son: The story doesn't tell us whether the elder brother went in. How would you end it?",
      "The Mustard Seed: What small thing, a habit, a kindness or a word, has grown larger than you expected?"
    ],
    sources: [
      "The Bible (King James Version and modern translations)",
      "C. H. Dodd, The Parables of the Kingdom",
      "Amy-Jill Levine, Short Stories by Jesus: The Enigmatic Parables of a Controversial Rabbi",
      "Klyne Snodgrass, Stories with Intent: A Comprehensive Guide to the Parables of Jesus",
      "Augustine, Questions on the Gospels (Quaestiones Evangeliorum) 2.19"
    ],
    related: ["mark-in-sixteen-days", "lectio-divina"]
  },

  {
    slug: "mark-in-sixteen-days",
    title: "Read the Gospel of Mark in Sixteen Days",
    format: "plan",
    categories: ["bible-studies", "christianity-for-beginners"],
    summary: "One chapter a day, about ten minutes each. By the end you'll have read a whole Gospel, the earliest and shortest of the four, from beginning to end.",
    minutes: 5,
    sections: [
      {
        heading: "Why Mark?",
        tag: "history",
        html: `<p>Mark is the shortest Gospel, at sixteen chapters, and most scholars think it was the first to be written, probably around AD 65–75. Christian tradition, going back to the early bishop Papias, links it to the memories of the apostle Peter. It reads quickly, almost breathlessly, and it's a wonderful first full book of the Bible.</p>`
      },
      {
        heading: "How to use this plan",
        tag: "practice",
        html: `<p>Read one chapter a day and tick it off below. Your progress is saved in this browser. If you miss a day, don't start over. Just carry on. If one passage catches you, stop and stay with it. You might try <a href="#/library/article/lectio-divina">Lectio Divina</a> with it, or write a line in <a href="#/scriptorium">the Scriptorium</a>.</p>`
      },
      {
        heading: "Three things to watch for",
        tag: "interpretation",
        html: `<ul>
          <li><strong>"Immediately."</strong> Mark uses the Greek word <em>euthys</em> ("immediately", "straightway") dozens of times. The story keeps moving.</li>
          <li><strong>The "Messianic secret."</strong> Jesus often tells people not to say who he is. In 1901 the scholar William Wrede called this the Messianic secret, and readers still debate why Mark tells the story this way.</li>
          <li><strong>Sandwich stories.</strong> Mark often begins one story, interrupts it with another, then finishes the first, so the two explain each other. Watch for it in chapter 5 (Jairus's daughter and the woman who touches Jesus' cloak) and chapter 11 (the fig tree and the Temple).</li>
        </ul>`
      },
      {
        heading: "A note on the ending",
        tag: "history",
        html: `<p>The oldest complete manuscripts of Mark, from the fourth century, end at 16:8, with the women running from the empty tomb "for they were afraid." Most Bibles include verses 9–20, usually with a note that they were probably added later. The Catholic Church and many other churches accept them as part of Scripture. Either way, it's worth pausing at verse 8 and noticing how abruptly the story stops.</p>`
      }
    ],
    plan: [
      { read: "Mark 1", note: "John the Baptist, Jesus' baptism, the first disciples, the first healings." },
      { read: "Mark 2", note: "A paralysed man is lowered through a roof. Levi the tax collector is called." },
      { read: "Mark 3", note: "The Twelve are chosen. \"Who is my mother, or my brethren?\"" },
      { read: "Mark 4", note: "The Sower, the mustard seed, and a storm stilled at sea." },
      { read: "Mark 5", note: "The man called Legion. Jairus's daughter, and the woman who touches Jesus' cloak." },
      { read: "Mark 6", note: "Rejected at Nazareth. John the Baptist's death. Five thousand fed. Walking on water." },
      { read: "Mark 7", note: "What makes a person clean, and the Syrophoenician woman's quick reply." },
      { read: "Mark 8", note: "Four thousand fed. \"But whom say ye that I am?\"" },
      { read: "Mark 9", note: "The Transfiguration. \"Lord, I believe; help thou mine unbelief.\"" },
      { read: "Mark 10", note: "Jesus welcomes children. The rich young man. Blind Bartimaeus." },
      { read: "Mark 11", note: "Palm Sunday. The fig tree and the Temple." },
      { read: "Mark 12", note: "Questions in the Temple, the greatest commandment, the widow's two coins." },
      { read: "Mark 13", note: "Jesus speaks on the Mount of Olives about the end of the age. \"Watch.\"" },
      { read: "Mark 14", note: "The anointing at Bethany, the Last Supper, Gethsemane, Peter's denial." },
      { read: "Mark 15", note: "Pilate, the crucifixion, and the burial." },
      { read: "Mark 16", note: "The empty tomb. Stop at verse 8 for a moment before reading on." }
    ],
    discuss: [
      "Which moment in Mark surprised you most?",
      "Mark's disciples often misunderstand Jesus. Did that make them easier or harder to relate to?",
      "Jesus asks, \"Whom say ye that I am?\" (Mark 8:29). How would you answer today, even if your answer is \"I don't know yet\"?",
      "How did it feel to stop at 16:8, with the women afraid and silent?"
    ],
    sources: [
      "The Gospel according to Mark",
      "Morna D. Hooker, The Gospel According to Saint Mark (Black's New Testament Commentary)",
      "Richard Bauckham, Jesus and the Eyewitnesses",
      "William Wrede, The Messianic Secret"
    ],
    related: ["where-to-start-reading", "parables-four-week-study"]
  },

  {
    slug: "psalms-of-lament",
    title: "The Psalms of Lament: Praying When It Hurts",
    format: "study",
    categories: ["bible-studies", "scripture"],
    summary: "The Bible's own prayer book is full of complaint, grief and honest anger at God. A gentle study of the lament psalms, and how to write one of your own.",
    minutes: 9,
    sections: [
      {
        heading: "Permission to be honest",
        tag: "history",
        html: `<p>Many people assume prayer has to be polite. The Psalms disagree. Lament is the most common type of psalm, around a third of the Psalter by most counts. These are prayers of people who are frightened, sick, betrayed, grieving or furious, and they say so to God's face. The German scholar Hermann Gunkel, who first sorted the Psalms into types in the early twentieth century, called them "individual" and "communal" laments.</p>`
      },
      {
        heading: "The shape of a lament: Psalm 13",
        tag: "scripture",
        html: `<p>Psalm 13 is only six verses long, and it holds the whole pattern. It begins with a cry:</p>
        <blockquote>How long wilt thou forget me, O LORD? for ever? how long wilt thou hide thy face from me?<cite>Psalm 13:1 (KJV)</cite></blockquote>
        <p>Then comes a plea ("Consider and hear me"), and then, almost without warning, a turn toward trust: "But I have trusted in thy mercy." It ends: "I will sing unto the LORD, because he hath dealt bountifully with me."</p>
        <p>Most laments move through the same steps: <strong>address</strong> (calling on God), <strong>complaint</strong> (what is wrong), <strong>petition</strong> (what you're asking for), <strong>trust</strong> (remembering who God has been), and often <strong>praise</strong>.</p>`
      },
      {
        heading: "Psalm 22: the cry from the cross",
        tag: "scripture",
        html: `<blockquote>My God, my God, why hast thou forsaken me?<cite>Psalm 22:1 (KJV)</cite></blockquote>
        <p>In Mark and Matthew, Jesus prays these words from the cross (Mark 15:34; Matthew 27:46). Christians have found deep comfort here: the Son of God himself prayed a lament. Psalm 22 begins in abandonment but ends with a vision of all the families of the earth turning to God.</p>`
      },
      {
        heading: "Psalm 88: when the light doesn't come",
        tag: "scripture",
        html: `<p>Psalm 88 is the darkest prayer in the Bible. It never turns toward praise. Its last words are "lover and friend hast thou put far from me, and mine acquaintance into darkness."</p>
        <p>It matters that this psalm is in the Bible at all. It means that a prayer can be unfinished, and still be a prayer. Some seasons feel like Psalm 88, and faith has room for them.</p>`
      },
      {
        heading: "Why lament matters",
        tag: "interpretation",
        html: `<p>The Old Testament scholar Walter Brueggemann argued that the Psalms move through seasons of <strong>orientation</strong> (life feels secure), <strong>disorientation</strong> (everything falls apart), and <strong>new orientation</strong> (a changed, deeper trust). On this reading, lament isn't a lack of faith. It's what faith sounds like in the middle season. Others read the laments more simply as models of honest prayer. Both readings agree that God can be spoken to about anything.</p>`
      },
      {
        heading: "Write your own lament",
        tag: "practice",
        html: `<ol>
          <li><strong>Address:</strong> Begin with a name for God that feels true today: "Lord", "Father", "you who seem so far away".</li>
          <li><strong>Complaint:</strong> Say plainly what hurts. Don't tidy it up.</li>
          <li><strong>Petition:</strong> Ask for what you need, even if it feels too big or too small.</li>
          <li><strong>Trust:</strong> If you can, name one time you weren't abandoned. If you can't, it's all right to stop at petition. Psalm 88 does.</li>
        </ol>
        <p>You might write it in <a href="#/scriptorium">the Scriptorium</a>, where it stays private in your browser, or <button type="button" class="link-btn" data-panel="candles">light a candle</button> as you finish.</p>
        <p class="hint">If your grief or pain feels like more than you can carry right now, please <button type="button" class="link-btn" data-panel="crisis">reach out to someone today</button>. You don't have to carry it alone.</p>`
      }
    ],
    discuss: [
      "Were you ever taught that it was wrong to complain to God? How does Psalm 13 sit with that?",
      "What do you make of Jesus praying Psalm 22 from the cross?",
      "Why do you think Psalm 88, a prayer with no happy ending, was kept in the Bible?",
      "Brueggemann's seasons are orientation, disorientation and new orientation. Which season are you in?"
    ],
    sources: [
      "The Book of Psalms",
      "Walter Brueggemann, The Message of the Psalms",
      "Hermann Gunkel, Introduction to Psalms: The Genres of the Religious Lyric of Israel",
      "Ellen F. Davis, Getting Involved with God: Rediscovering the Old Testament"
    ],
    related: ["lectio-divina", "problem-of-evil"]
  },

  /* =====================  MARIAN STUDIES  ===================== */

  {
    slug: "mary-in-scripture",
    title: "Mary in Scripture: What the Gospels Say, and What Tradition Adds",
    categories: ["marian-studies", "scripture"],
    summary: "Mary appears in only a handful of Bible passages, yet she has shaped two thousand years of prayer, art and argument. Here is what the texts say, and how different churches have understood her.",
    minutes: 9,
    sections: [
      {
        heading: "Where Mary appears",
        tag: "scripture",
        html: `<ul>
          <li><strong>The Annunciation</strong> (Luke 1:26–38): the angel Gabriel greets her, and she answers, "be it unto me according to thy word."</li>
          <li><strong>The Visitation</strong> (Luke 1:39–56): she visits her cousin Elizabeth and sings the Magnificat.</li>
          <li><strong>The Nativity</strong> (Matthew 1–2; Luke 2:1–20): "Mary kept all these things, and pondered them in her heart."</li>
          <li><strong>The Presentation</strong> (Luke 2:22–38): the old man Simeon tells her that "a sword shall pierce through thy own soul also."</li>
          <li><strong>The boy Jesus in the Temple</strong> (Luke 2:41–52).</li>
          <li><strong>The wedding at Cana</strong> (John 2:1–11): "Whatsoever he saith unto you, do it."</li>
          <li><strong>Looking for Jesus</strong> (Mark 3:31–35).</li>
          <li><strong>At the cross</strong> (John 19:25–27): Jesus entrusts her to the beloved disciple: "Behold thy mother!"</li>
          <li><strong>With the disciples at prayer</strong> after the Ascension (Acts 1:14).</li>
        </ul>`
      },
      {
        heading: "The Magnificat",
        tag: "scripture",
        html: `<blockquote>My soul doth magnify the Lord, and my spirit hath rejoiced in God my Saviour.<cite>Luke 1:46–47 (KJV)</cite></blockquote>
        <p>Mary's song is one of the most radical passages in the Bible: God "hath put down the mighty from their seats, and exalted them of low degree. He hath filled the hungry with good things; and the rich he hath sent empty away." It echoes the song of Hannah in 1 Samuel 2, and it is sung or prayed every evening in Catholic, Anglican and Lutheran evening prayer.</p>`
      },
      {
        heading: "What tradition adds",
        tag: "tradition",
        html: `<p>Over the centuries the Church reflected on Mary's role and defined several teachings about her. The Catholic Church holds four Marian dogmas:</p>
        <ul>
          <li><strong>Mother of God</strong> (<em>Theotokos</em>, "God-bearer"), affirmed at the Council of Ephesus in 431. It is really a statement about Jesus: the child she bore was truly God.</li>
          <li><strong>Perpetual virginity</strong>: Mary remained a virgin throughout her life.</li>
          <li><strong>The Immaculate Conception</strong>: Mary was preserved from original sin from the first moment of her existence, defined by Pope Pius IX in 1854.</li>
          <li><strong>The Assumption</strong>: at the end of her life Mary was taken body and soul into heaven, defined by Pope Pius XII in 1950.</li>
        </ul>
        <p>The Orthodox churches share deep devotion to Mary, honour her as Theotokos, and celebrate her Dormition ("falling asleep"), though they don't define the Immaculate Conception in the same way.</p>`
      },
      {
        heading: "How other Christians see her",
        tag: "interpretation",
        html: `<p>Most Protestant churches honour Mary as a model of faith and obedience, the first disciple, but don't hold the later dogmas, because they look for teaching grounded directly in Scripture. Interestingly, the early Reformers, including Martin Luther, kept a high regard for Mary, and Luther wrote a whole commentary on the Magnificat. Ecumenical dialogues in recent decades have found more common ground than many people expect.</p>`
      },
      {
        heading: "The \"brothers of Jesus\"",
        tag: "interpretation",
        html: `<p>Mark 6:3 names James, Joses, Juda and Simon as Jesus' "brethren", and mentions sisters too. Christians have read this in three main ways:</p>
        <ul>
          <li>They were <strong>children of Mary and Joseph</strong>, born after Jesus. This is a common Protestant view.</li>
          <li>They were <strong>Joseph's children from an earlier marriage</strong>. This view goes back to the second-century <em>Protevangelium of James</em> and is common in Orthodox tradition.</li>
          <li>They were <strong>cousins or close relatives</strong>, since the Hebrew and Aramaic words for "brother" covered wider family. Saint Jerome argued this, and it's the most common Catholic view.</li>
        </ul>`
      },
      {
        heading: "The woman clothed with the sun",
        tag: "interpretation",
        html: `<p>Revelation 12 describes "a woman clothed with the sun, and the moon under her feet, and upon her head a crown of twelve stars," who gives birth to a child. Readers have seen in her Mary, the people of Israel, the Church, or all three at once. This is the image behind the many paintings of Mary standing on a crescent moon, crowned with stars.</p>`
      }
    ],
    discuss: [
      "Mary \"pondered\" things in her heart instead of understanding them all at once. What are you pondering at the moment?",
      "The Magnificat praises a God who lifts up the lowly. Does that surprise you coming from Mary?",
      "Why do you think Mary has meant so much to so many people, even people who aren't sure what they believe?"
    ],
    sources: [
      "Raymond E. Brown, Karl P. Donfried, Joseph A. Fitzmyer and John Reumann (eds.), Mary in the New Testament (an ecumenical study by Catholic and Protestant scholars)",
      "Jaroslav Pelikan, Mary Through the Centuries: Her Place in the History of Culture",
      "Catechism of the Catholic Church, paragraphs 484–511 and 963–975",
      "Martin Luther, The Magnificat"
    ],
    related: ["what-is-the-rosary", "chi-rho-and-ichthys"]
  },

  /* =====================  SAINTS, MYSTICS & PHILOSOPHY  ===================== */

  {
    slug: "saint-francis-of-assisi",
    title: "Who Was Saint Francis of Assisi?",
    categories: ["saints-history"],
    summary: "A rich merchant's son who gave away everything, preached to birds, met a sultan in the middle of a crusade, and wrote one of the first great poems in Italian. The man behind the garden statues.",
    minutes: 8,
    sections: [
      {
        heading: "From party-giver to beggar",
        tag: "history",
        html: `<p>Francis was born around 1181 in Assisi, in central Italy, the son of Pietro di Bernardone, a wealthy cloth merchant. As a young man he was popular, generous and fond of fine clothes. He went to war against the nearby city of Perugia, was captured, and spent about a year as a prisoner. Afterwards a long illness and a slow change of heart followed.</p>
        <p>In a famous scene before the bishop of Assisi, around 1206, Francis gave back to his angry father everything he owned, even the clothes he was wearing, and chose a life of poverty.</p>`
      },
      {
        heading: "\"Go and repair my house\"",
        tag: "tradition",
        html: `<p>According to his early biographers, Francis was praying before a painted crucifix in the crumbling church of San Damiano when he heard Christ say, "Francis, go and repair my house, which, as you see, is falling into ruin." At first he took it literally and began rebuilding churches stone by stone. Later he understood it as a call to renew the whole Church. The San Damiano Cross still hangs in Assisi's Basilica of Saint Clare.</p>`
      },
      {
        heading: "Brothers, sisters and a sultan",
        tag: "history",
        html: `<ul>
          <li>Around 1209 Pope Innocent III approved Francis's simple way of life for his growing band of brothers, who became the Order of Friars Minor, the Franciscans.</li>
          <li>In 1212 a young noblewoman, Clare of Assisi, joined him. She founded the community now called the Poor Clares.</li>
          <li>In 1219, during the Fifth Crusade, Francis crossed the battle lines at Damietta in Egypt to meet Sultan al-Kamil. The sources agree the sultan received him with courtesy. What exactly passed between them is still debated.</li>
          <li>At Christmas 1223, at Greccio, Francis set up a manger with a live ox and donkey, often remembered as the first nativity scene.</li>
          <li>He died on 3 October 1226 and was declared a saint just two years later. His feast day is 4 October.</li>
        </ul>`
      },
      {
        heading: "The Canticle of the Creatures",
        tag: "history",
        html: `<p>Near the end of his life, nearly blind and in great pain, Francis wrote a hymn praising God through "Brother Sun", "Sister Moon and the stars", "Brother Wind", "Sister Water" and "Brother Fire". It's one of the earliest surviving poems in the Italian language. Shortly before he died, he added a final verse welcoming "Sister Bodily Death".</p>`
      },
      {
        heading: "The stories and the legends",
        tag: "interpretation",
        html: `<p>Many of the best-loved stories about Francis, such as preaching to the birds or taming the wolf of Gubbio, come from <em>The Little Flowers of Saint Francis</em>, a collection put together more than a century after his death. Historians treat them as legends that may hold real memories, especially of his gentleness with animals. Many Christians read them as true in spirit, whether or not every detail happened.</p>`
      },
      {
        heading: "A prayer he didn't write",
        tag: "history",
        html: `<p>The beloved "Peace Prayer" ("Lord, make me an instrument of your peace") is almost always credited to Francis, but it first appeared in 1912, in a small French magazine called <em>La Clochette</em>. It is very much in his spirit, but he didn't write it.</p>`
      },
      {
        heading: "Patron of animals and creation",
        tag: "tradition",
        html: `<p>In 1979 Pope John Paul II named Francis the patron saint of ecology. Many churches hold a Blessing of the Animals near his feast day. In 2013 Cardinal Jorge Bergoglio took the name Francis when he became pope, and in 2015 he titled his letter on care for creation <em>Laudato si'</em> ("Praise be to you"), the refrain of the Canticle.</p>`
      }
    ],
    discuss: [
      "Francis gave up wealth completely. What's one thing you own that sometimes owns you?",
      "Why do you think his meeting with the sultan still matters to people today?",
      "The Canticle calls the sun, the wind and even death \"brother\" and \"sister\". What would it change to see the world that way?"
    ],
    sources: [
      "Thomas of Celano, The Life of Saint Francis",
      "Bonaventure, The Major Legend of Saint Francis",
      "Augustine Thompson, Francis of Assisi: A New Biography",
      "The Little Flowers of Saint Francis",
      "Pope Francis, Laudato si' (2015)"
    ],
    related: ["julian-of-norwich", "liturgical-year"]
  },

  {
    slug: "julian-of-norwich",
    title: "Julian of Norwich: \"All Shall Be Well\"",
    categories: ["mysticism", "saints-history"],
    summary: "A woman who lived walled into a small room beside a church, saw the whole universe as a hazelnut in her palm, and wrote the first book in English known to be by a woman.",
    minutes: 7,
    sections: [
      {
        heading: "The anchoress",
        tag: "history",
        html: `<p>We don't know her real name. "Julian" probably comes from the Church of St Julian in Norwich, England, where she lived as an <em>anchoress</em>: a woman who chose to live enclosed in a small cell attached to a church, devoted to prayer. A window opened into the church so she could join in worship, and another opened to the street, so people could come to her for counsel.</p>
        <p>She was born around 1343 and was still alive in 1416. She lived through the Black Death, which swept through Norwich more than once.</p>`
      },
      {
        heading: "The showings",
        tag: "history",
        html: `<p>In May 1373, when she was thirty and a half, Julian became so ill that a priest was called to give her the last rites. As he held a crucifix before her, she received a series of sixteen visions, which she called "showings". She recovered, wrote them down in a short version, and spent the next twenty years or so reflecting on them in a much longer one. Her <em>Revelations of Divine Love</em> is the earliest surviving book in English known to have been written by a woman.</p>`
      },
      {
        heading: "The hazelnut",
        tag: "tradition",
        html: `<p>In one showing, Julian sees "a little thing, the quantity of an hazel-nut," lying in the palm of her hand, round as a ball. She wonders what it could be, and the answer comes: "It is all that is made." She marvels that something so small doesn't simply fall into nothing, and understands that it lasts, and always will, because God loves it.</p>`
      },
      {
        heading: "All shall be well",
        tag: "tradition",
        html: `<blockquote>Sin is behovely, but all shall be well, and all shall be well, and all manner of thing shall be well.<cite>Revelations of Divine Love, chapter 27</cite></blockquote>
        <p>"Behovely" means something like "fitting" or "necessary". Julian struggled with why God allowed sin and suffering at all. She received no tidy explanation, only this promise. It isn't a cheerful dismissal of pain. It's a hope spoken by someone who had lived through plague, and nearly died herself.</p>`
      },
      {
        heading: "God as Mother",
        tag: "interpretation",
        html: `<p>Julian wrote that "as truly as God is our Father, so truly is God our Mother," and spoke of "Jesus our Mother", who gives us birth, feeds us and holds us. She wasn't the first. Saint Anselm and others used motherly images for Christ, drawing on passages like Matthew 23:37, where Jesus longs to gather Jerusalem "as a hen gathereth her chickens under her wings." Readers today differ on how far to take this language. Almost all find it tender.</p>`
      },
      {
        heading: "Her place today",
        tag: "history",
        html: `<p>Julian has never been formally canonised, but she is honoured in Anglican, Lutheran and Catholic devotion, often around 8 May. T. S. Eliot drew on her words in his poem <em>Little Gidding</em>. Her cell was destroyed in the Second World War, but a reconstructed one stands at St Julian's Church in Norwich, and visitors still come to sit in it.</p>`
      },
      {
        heading: "Try the hazelnut meditation",
        tag: "practice",
        html: `<p>Hold something small in your palm: a nut, a pebble, a button. Look at it for a full minute. Then say, slowly, Julian's three words: <em>God made it. God loves it. God keeps it.</em> Let them be true of the small thing, and then of yourself.</p>`
      }
    ],
    discuss: [
      "Julian lived enclosed in one room, but people came to her window for advice. What does that say about solitude and community?",
      "How does \"all shall be well\" sound to you right now: comforting, hard to believe, or both?",
      "Does picturing God or Christ as a mother open anything up for you?"
    ],
    sources: [
      "Julian of Norwich, Revelations of Divine Love, trans. Elizabeth Spearing (Penguin Classics)",
      "Julian of Norwich, Revelations of Divine Love, ed. Grace Warrack (1901; public domain)",
      "Janina Ramirez, Julian of Norwich: A Very Brief History",
      "Denys Turner, Julian of Norwich, Theologian"
    ],
    related: ["lectio-divina", "problem-of-evil"]
  },

  {
    slug: "problem-of-evil",
    title: "If God Is Good, Why Is There Suffering?",
    categories: ["philosophy", "christianity-for-beginners"],
    summary: "The oldest and hardest question in religion. How Scripture, philosophers and saints have wrestled with it, and why honest doubt has always had a place in faith.",
    minutes: 9,
    sections: [
      {
        heading: "The question",
        tag: "history",
        html: `<p>In its sharpest form the question goes like this: if God is all-good, God would want to prevent suffering. If God is all-powerful, God could prevent it. Yet suffering exists. How can all three be true?</p>
        <p>Versions of this puzzle are often credited to the Greek philosopher Epicurus, though the attribution comes from much later writers. The Scottish philosopher David Hume put it memorably in his <em>Dialogues Concerning Natural Religion</em> (1779). But believers were asking it long before the philosophers. Much of the Bible asks it too.</p>`
      },
      {
        heading: "Job: the friends were wrong",
        tag: "scripture",
        html: `<p>The Book of Job tells of a good man who loses his children, his wealth and his health. His friends insist he must have sinned to deserve it. Job refuses to accept this. He protests, argues and demands an answer from God.</p>
        <p>When God finally speaks "out of the whirlwind" (Job 38), he gives no explanation, only a vast vision of creation. But at the end God says the friends "have not spoken of me the thing that is right, as my servant Job hath" (Job 42:7). The Bible itself rejects the idea that suffering is always punishment.</p>
        <p>Jesus says the same. Asked whether a man was born blind because of his own sin or his parents', he answers, "Neither" (John 9:1–3).</p>`
      },
      {
        heading: "Augustine: evil as an absence",
        tag: "interpretation",
        html: `<p>Saint Augustine (354–430) argued that evil isn't a "thing" God created. Everything God made is good. Evil is a <em>privation</em>, a lack or twisting of good, the way blindness is an absence of sight. Much of it comes from creatures misusing the gift of free will. This view became central in Western Christian thought.</p>`
      },
      {
        heading: "Irenaeus: a world for growing souls",
        tag: "interpretation",
        html: `<p>The second-century bishop Irenaeus suggested that humans were created immature and meant to grow into the likeness of God over time. In the twentieth century the philosopher John Hick built on this in <em>Evil and the God of Love</em> (1966). He argued that a world with real challenges, risk and pain may be necessary for courage, compassion and love to grow. Critics answer that some suffering, especially of children and animals, seems far beyond anything that could be called "soul-making".</p>`
      },
      {
        heading: "The free-will defence",
        tag: "interpretation",
        html: `<p>The philosopher Alvin Plantinga, in <em>God, Freedom, and Evil</em> (1974), argued that it isn't logically contradictory for a good, all-powerful God to allow evil, if creatures with real freedom are worth more than robots that always do right. Many philosophers, believers and not, now agree that this answers the strict logical form of the problem.</p>
        <p>But the <strong>evidential</strong> problem remains. William Rowe and others argued that the sheer amount of seemingly pointless suffering, such as a fawn dying slowly in a forest fire with no one to see, still makes God's existence less likely. That debate continues.</p>`
      },
      {
        heading: "A God who suffers with us",
        tag: "tradition",
        html: `<p>Many Christians say the deepest answer isn't an argument at all, but the cross: God doesn't stand outside suffering, but enters it in Jesus. Writing from a Nazi prison in 1944, months before his execution, the pastor Dietrich Bonhoeffer put it in six words: "Only the suffering God can help."</p>`
      },
      {
        heading: "If you're wrestling with this",
        tag: "practice",
        html: `<p>You're in good company: Job, the psalmists, Julian of Norwich and countless others asked this question with their whole hearts. You don't have to resolve it before you're welcome here. Read the <a href="#/library/article/psalms-of-lament">psalms of lament</a>, bring your questions to the conversation below, or just sit with them in <a href="#/quiet-chapel">the Quiet Chapel</a>.</p>
        <p class="hint">If the question is pressing because of something you're living through right now, please <button type="button" class="link-btn" data-panel="crisis">reach out to someone</button>. Talking to a real person helps.</p>`
      }
    ],
    discuss: [
      "Job's friends thought suffering must be deserved. Where do you still hear that idea today?",
      "Which answer, Augustine's, Irenaeus's, Plantinga's, or the 'suffering God', helps you most? Which seems weakest?",
      "Can someone keep faith and still not have an answer to this question? What would that look like?"
    ],
    sources: [
      "The Book of Job",
      "Augustine, Confessions (Book VII) and Enchiridion",
      "John Hick, Evil and the God of Love",
      "Alvin Plantinga, God, Freedom, and Evil",
      "William L. Rowe, \"The Problem of Evil and Some Varieties of Atheism\" (1979)",
      "Dietrich Bonhoeffer, Letters and Papers from Prison",
      "C. S. Lewis, The Problem of Pain and A Grief Observed"
    ],
    related: ["psalms-of-lament", "julian-of-norwich"]
  },

  /* =====================  TRADITIONS  ===================== */

  {
    slug: "liturgical-year",
    title: "The Church Year: Seasons, Colours and Why the Sanctuary Is Violet",
    categories: ["catholic-traditions", "christianity-for-beginners"],
    summary: "Christians don't only count time in months. They walk through the life of Christ every year, season by season, each with its own colour and mood. A guide to the circle of the liturgical year.",
    minutes: 7,
    sections: [
      {
        heading: "A year that tells a story",
        tag: "tradition",
        html: `<p>The liturgical year retells the story of Jesus every year, from waiting for his birth, through his death and resurrection, to the life of the Church. The priest's vestments and the altar cloths change colour with the seasons, so you can tell the season at a glance. What follows is the calendar of the Roman Catholic Church. Anglican, Lutheran, Methodist and other churches keep a very similar one.</p>`
      },
      {
        heading: "The seasons and their colours",
        tag: "tradition",
        html: `<ul>
          <li><strong>Advent</strong> (violet): the four Sundays before Christmas. A season of waiting and hope. The third Sunday, <em>Gaudete</em> ("Rejoice"), may use rose.</li>
          <li><strong>Christmas</strong> (white or gold): from Christmas Day to the Baptism of the Lord in January.</li>
          <li><strong>Ordinary Time</strong> (green): not "ordinary" as in dull, but from the Latin <em>ordinalis</em>, "counted", since the Sundays are numbered. Green is the colour of growth.</li>
          <li><strong>Lent</strong> (violet): forty days from Ash Wednesday, a season of prayer, fasting and giving. The fourth Sunday, <em>Laetare</em>, may use rose.</li>
          <li><strong>The Triduum</strong>: the "three days" from Holy Thursday evening through Good Friday (red) to the Easter Vigil, the heart of the whole year.</li>
          <li><strong>Easter</strong> (white or gold): fifty days of celebration, ending at <strong>Pentecost</strong> (red, for the fire of the Holy Spirit).</li>
          <li><strong>Ordinary Time</strong> again (green), until the feast of <strong>Christ the King</strong> closes the year and Advent begins it again.</li>
        </ul>
        <p>Red is also worn for the feasts of martyrs, and white for feasts of Mary and of saints who weren't martyrs.</p>`
      },
      {
        heading: "Why violet?",
        tag: "interpretation",
        html: `<p>Violet is the colour of the two great seasons of preparation, Advent and Lent. It suggests waiting, repentance, longing and quiet hope: the colour of the sky just before dawn. That's part of why this sanctuary is violet. It's meant to be a place for people who are waiting, wondering or on their way, not people who have already arrived.</p>`
      },
      {
        heading: "Where the Advent wreath came from",
        tag: "history",
        html: `<p>The Advent wreath, with its evergreen circle and four candles (often three violet and one rose), is younger than many people think. It is usually traced to Johann Hinrich Wichern, a Lutheran pastor in Hamburg, who in 1839 made a large wheel with candles to help children at his mission school count the days to Christmas. The custom spread through Germany and then around the world, and today Catholics and Protestants alike light one more candle each Sunday.</p>`
      },
      {
        heading: "Other calendars",
        tag: "history",
        html: `<p>Orthodox churches keep their own rich cycle, with a Nativity Fast before Christmas and Great Lent before Pascha (Easter). Many calculate Easter using the older Julian calendar, so their Easter often falls on a different date from the Western one.</p>`
      },
      {
        heading: "Keeping the seasons at home",
        tag: "practice",
        html: `<ul>
          <li>Put a small cloth in the season's colour on a shelf or table, with a candle.</li>
          <li>In Advent, light one more candle each Sunday and read a few verses of Isaiah or Luke 1.</li>
          <li>In Lent, choose one thing to give up and one thing to give.</li>
          <li>In Easter, keep celebrating for the full fifty days, not just one Sunday.</li>
        </ul>`
      }
    ],
    discuss: [
      "Which season of the church year feels most like your life right now?",
      "What would change if you marked time by seasons of waiting, celebration and growth, not just by months?",
      "Did your family keep any seasonal traditions growing up, religious or not?"
    ],
    sources: [
      "General Norms for the Liturgical Year and the Calendar (1969)",
      "General Instruction of the Roman Missal, paragraph 346 (liturgical colours)",
      "Joan Chittister, The Liturgical Year: The Spiraling Adventure of the Spiritual Life",
      "Adolf Adam, The Liturgical Year: Its History and Its Meaning After the Reform of the Liturgy"
    ],
    related: ["what-is-the-rosary", "saint-francis-of-assisi"]
  },

  /* =====================  THE BIBLE & LITERATURE  ===================== */

  {
    slug: "dantes-divine-comedy",
    title: "Dante's Divine Comedy: A First Guide",
    categories: ["literature", "mysticism"],
    summary: "Hell, Purgatory and Paradise in one hundred cantos. A beginner's map to the greatest Christian poem ever written, and how to start reading it without getting lost in the dark wood.",
    minutes: 8,
    sections: [
      {
        heading: "The poet and the poem",
        tag: "history",
        html: `<p>Dante Alighieri (1265–1321) was a poet and politician from Florence. In 1302, after losing a bitter political struggle, he was exiled and never returned home. In exile he wrote the <em>Commedia</em>, finishing it shortly before he died in Ravenna.</p>
        <p>He called it a "comedy" because it begins in sorrow and ends in joy. The word "Divine" was added by admirers later, beginning with Boccaccio. Remarkably, he wrote it in Italian, the language of ordinary people, not Latin, and it helped shape the Italian language itself.</p>`
      },
      {
        heading: "The shape of the journey",
        tag: "history",
        html: `<p>The poem has three parts, <em>Inferno</em>, <em>Purgatorio</em> and <em>Paradiso</em>, with thirty-three cantos each, plus an opening canto, a hundred in all. It's written in <em>terza rima</em>, interlocking three-line stanzas that Dante invented.</p>
        <ul>
          <li>On the night before Good Friday in the year 1300, Dante finds himself "in a dark wood", having lost the straight path.</li>
          <li>The Roman poet <strong>Virgil</strong> guides him down through the nine circles of <strong>Hell</strong>.</li>
          <li>They climb the mountain of <strong>Purgatory</strong>, whose seven terraces cleanse the seven deadly sins.</li>
          <li>At the top, <strong>Beatrice</strong>, the woman Dante loved and who died young, leads him up through the heavens of <strong>Paradise</strong>.</li>
          <li>At the end, guided by Saint Bernard, Dante glimpses God: "the love that moves the sun and the other stars."</li>
        </ul>`
      },
      {
        heading: "What the poem believes",
        tag: "tradition",
        html: `<p>Dante's vision is built on medieval Catholic theology, especially Saint Thomas Aquinas. Sin is love gone wrong: love aimed at the wrong things, or too much or too little. In Purgatory, souls are being healed rather than punished, and they sing as they climb. The whole poem is moved by the hope that love can be set right.</p>`
      },
      {
        heading: "A poet's vision, not a map of the afterlife",
        tag: "interpretation",
        html: `<p>Dante placed real people, including his political enemies and even several popes, in Hell. These are a poet's judgements, not Church teaching. The Catholic Church has never declared that any particular person is in Hell. Readers have long debated how far Dante meant his vision literally. Most see it as an imaginative journey of a soul's conversion: Dante's, and potentially the reader's.</p>`
      },
      {
        heading: "How to start reading",
        tag: "practice",
        html: `<ul>
          <li><strong>Choose a translation with notes.</strong> Good choices include Dorothy L. Sayers (lively, with excellent notes), John Ciardi, Mark Musa, Robin Kirkpatrick, or Robert and Jean Hollander. Henry Wadsworth Longfellow's 1867 translation is free online and in the public domain.</li>
          <li><strong>Read a canto a day.</strong> Each takes about ten to fifteen minutes. A hundred days, and you've read the whole thing.</li>
          <li><strong>Don't stop after Hell.</strong> Most readers stop after <em>Inferno</em>, but many find <em>Purgatorio</em> the most moving and human of the three.</li>
          <li><strong>Read aloud.</strong> It was written to be heard.</li>
        </ul>`
      }
    ],
    discuss: [
      "Dante begins \"in a dark wood\", lost in the middle of his life. Have you ever felt that way?",
      "Dante sees sin as love aimed at the wrong things. Is that a helpful way to think about it?",
      "Why do you think so many readers prefer Purgatory to Hell or Paradise?"
    ],
    sources: [
      "Dante Alighieri, The Divine Comedy, trans. Dorothy L. Sayers (Penguin), or trans. Henry Wadsworth Longfellow (1867, public domain)",
      "Prue Shaw, Reading Dante: From Here to Eternity",
      "Barbara Reynolds, Dante: The Poet, the Political Thinker, the Man",
      "Dorothy L. Sayers, Introductory Papers on Dante"
    ],
    related: ["lucifer-and-the-morning-star", "everyday-phrases-from-the-bible"]
  },

  {
    slug: "everyday-phrases-from-the-bible",
    title: "Everyday Phrases That Come From the Bible (and Some That Don't)",
    categories: ["literature", "scripture"],
    summary: "\"The writing on the wall\", \"a drop in the bucket\", \"by the skin of your teeth\": you've probably quoted the Bible this week without knowing it. Plus a few famous \"Bible verses\" that aren't in the Bible at all.",
    minutes: 6,
    sections: [
      {
        heading: "The book that shaped English",
        tag: "history",
        html: `<p>The King James Version of 1611 was read aloud in English churches for centuries, and its phrases sank into everyday speech. Much of its wording, especially in the New Testament, comes from William Tyndale, who translated the Bible into English in the 1520s and 1530s and was executed for it in 1536. Tyndale coined words still in use, including "scapegoat" and "Passover".</p>`
      },
      {
        heading: "You're already quoting Scripture",
        tag: "scripture",
        html: `<ul>
          <li><strong>"Let there be light"</strong>: Genesis 1:3</li>
          <li><strong>"Am I my brother's keeper?"</strong>: Genesis 4:9, Cain's answer when God asks where Abel is</li>
          <li><strong>"By the skin of my teeth"</strong>: Job 19:20</li>
          <li><strong>"Pride goeth before destruction"</strong>, usually remembered as "pride comes before a fall": Proverbs 16:18</li>
          <li><strong>"There is no new thing under the sun"</strong>: Ecclesiastes 1:9</li>
          <li><strong>"A drop of a bucket"</strong>: Isaiah 40:15</li>
          <li><strong>"A leopard can't change its spots"</strong>: from Jeremiah 13:23, "Can the Ethiopian change his skin, or the leopard his spots?"</li>
          <li><strong>"The writing on the wall"</strong>: Daniel 5, where a hand appears and writes on the wall of King Belshazzar's palace</li>
          <li><strong>"The salt of the earth"</strong>: Matthew 5:13</li>
          <li><strong>"Go the extra mile"</strong>: from Matthew 5:41, "whosoever shall compel thee to go a mile, go with him twain"</li>
          <li><strong>"The blind leading the blind"</strong>: Matthew 15:14</li>
          <li><strong>"A house divided against itself cannot stand"</strong>: Mark 3:25</li>
          <li><strong>"Eat, drink, and be merry"</strong>: Luke 12:19, and Ecclesiastes 8:15</li>
          <li><strong>"A law unto themselves"</strong>: Romans 2:14</li>
          <li><strong>"Through a glass, darkly"</strong>: 1 Corinthians 13:12</li>
          <li><strong>"Fight the good fight"</strong>: 1 Timothy 6:12</li>
        </ul>`
      },
      {
        heading: "Famous \"verses\" that aren't in the Bible",
        tag: "history",
        html: `<ul>
          <li><strong>"God helps those who help themselves."</strong> Not in the Bible. It has roots in ancient Greek sayings and was made famous by Benjamin Franklin's <em>Poor Richard's Almanack</em>.</li>
          <li><strong>"Cleanliness is next to godliness."</strong> Popularised by John Wesley in one of his sermons in the 1700s, but not Scripture.</li>
          <li><strong>"Money is the root of all evil."</strong> A misquote. 1 Timothy 6:10 says "the <em>love</em> of money is the root of all evil."</li>
          <li><strong>"Spare the rod, spoil the child."</strong> This exact wording comes from Samuel Butler's seventeenth-century poem <em>Hudibras</em>, though Proverbs 13:24 says something similar.</li>
          <li><strong>"This too shall pass."</strong> From Persian and Jewish folklore, not the Bible.</li>
        </ul>`
      },
      {
        heading: "Make a game of it",
        tag: "practice",
        html: `<p>For a week, listen for Bible phrases in news headlines, songs and conversation. Look each one up and read the chapter it comes from. The original setting is often surprising. "The writing on the wall", for example, comes from a story about a king who drinks from the sacred vessels taken from the Temple in Jerusalem at a drunken feast.</p>`
      }
    ],
    discuss: [
      "Which phrase surprised you most to find in the Bible?",
      "Why do you think \"God helps those who help themselves\" is so often mistaken for Scripture?",
      "Pick one phrase and read its whole chapter. Does knowing the original setting change what it means to you?"
    ],
    sources: [
      "The Holy Bible, King James Version (1611)",
      "David Crystal, Begat: The King James Bible and the English Language",
      "Alister McGrath, In the Beginning: The Story of the King James Bible",
      "David Daniell, William Tyndale: A Biography"
    ],
    related: ["where-to-start-reading", "dantes-divine-comedy"]
  },

  {
    slug: "lucifer-and-the-morning-star",
    title: "Lucifer and the Morning Star: Where the Name Comes From",
    categories: ["scripture", "angels", "literature"],
    summary: "\"Lucifer\" appears only once in most English Bibles, and in context it's about a king of Babylon. How a Hebrew name for the morning star became the name of the devil, and why the same word is also used for Christ.",
    minutes: 7,
    sections: [
      {
        heading: "One verse in Isaiah",
        tag: "scripture",
        html: `<blockquote>How art thou fallen from heaven, O Lucifer, son of the morning!<cite>Isaiah 14:12 (KJV)</cite></blockquote>
        <p>Isaiah 14 is a mocking song against the king of Babylon (Isaiah 14:4), a tyrant who said in his heart, "I will ascend into heaven, I will exalt my throne above the stars of God", and was brought down to the grave.</p>`
      },
      {
        heading: "From Hebrew to Latin to English",
        tag: "history",
        html: `<p>The Hebrew words are <em>hêlēl ben-šāḥar</em>, "shining one, son of the dawn": the morning star, which we now know is the planet Venus. When Saint Jerome translated the Bible into Latin in the late fourth century, he used <em>lucifer</em>, the ordinary Latin word for the morning star, meaning "light-bringer". The King James translators kept the Latin word and capitalised it as a name.</p>
        <p>Most modern translations translate it instead: "Day Star, son of Dawn" (NRSV) or "morning star, son of the dawn" (NIV).</p>`
      },
      {
        heading: "How it became the devil's name",
        tag: "interpretation",
        html: `<p>Early Christian writers, including Origen and Tertullian, read Isaiah 14 alongside other passages and saw in it the fall of Satan:</p>
        <ul>
          <li>Ezekiel 28, a lament over the king of Tyre, who was "in Eden the garden of God" and "the anointed cherub", until iniquity was found in him.</li>
          <li>Luke 10:18: "I beheld Satan as lightning fall from heaven."</li>
          <li>Revelation 12:7–9, the war in heaven, where "that old serpent, called the Devil, and Satan" is cast out.</li>
        </ul>
        <p>Many modern scholars read Isaiah 14 and Ezekiel 28 as being, first of all, about human kings who tried to make themselves gods. Many Christians read them on two levels at once: the proud king, and behind him the original rebellion of pride.</p>`
      },
      {
        heading: "The twist: Christ is the morning star too",
        tag: "scripture",
        html: `<p>The same image is used for Jesus. In Revelation 22:16 he says, "I am the root and the offspring of David, and the bright and morning star." 2 Peter 1:19 speaks of the "day star" arising in believers' hearts.</p>
        <p>At the Easter Vigil, the Latin hymn called the <em>Exsultet</em> prays that the Easter candle will still be burning when "the morning star" rises, and the Latin word it uses is <em>lucifer</em>, meaning Christ, "who came back from the dead". There was even a fourth-century saint named Lucifer, Bishop of Cagliari in Sardinia.</p>`
      },
      {
        heading: "The Lucifer of literature",
        tag: "history",
        html: `<p>Much of the popular picture of Lucifer comes from poets more than from Scripture. In Dante's <em>Inferno</em>, he sits frozen in ice at the very bottom of Hell, weeping. In John Milton's <em>Paradise Lost</em> (1667), Satan is a tragic, magnetic rebel who declares it "Better to reign in Hell, than serve in Heav'n", a portrait so vivid that some later readers, including William Blake, wondered whose side Milton was really on.</p>`
      }
    ],
    discuss: [
      "Were you surprised that \"Lucifer\" appears only once, and about a human king?",
      "What do you make of the same image, the morning star, being used for both Satan and Christ?",
      "Why do you think Milton's Satan has fascinated readers for so long?"
    ],
    sources: [
      "The Book of Isaiah, chapter 14; Ezekiel 28; Revelation 12 and 22",
      "Elaine Pagels, The Origin of Satan",
      "Jeffrey Burton Russell, Satan: The Early Christian Tradition",
      "John Milton, Paradise Lost (1667)",
      "The Exsultet (Easter Proclamation), Roman Missal"
    ],
    related: ["nine-choirs-of-angels", "dantes-divine-comedy"]
  },

  /* =====================  BEGINNERS  ===================== */

  {
    slug: "joining-a-bible-discussion",
    title: "How to Join a Bible Discussion (Even If You're Shy or Not Sure What You Believe)",
    categories: ["christianity-for-beginners", "bible-studies"],
    summary: "You don't need to know the Bible, believe all of it, or be good at talking in groups. A friendly guide to taking part, with a simple method anyone can use.",
    minutes: 5,
    sections: [
      {
        heading: "You belong here",
        tag: "practice",
        html: `<p>Bible discussions in this sanctuary are open to believers, doubters, seekers, readers who love the Bible as literature, and people who aren't sure what they think. Nobody will test you. You won't be asked to pray aloud. "I'm new to this" is one of the best things anyone can say in a group, because it gives everyone else permission to ask questions too.</p>`
      },
      {
        heading: "A simple method: light, question, arrow",
        tag: "practice",
        html: `<p>This method, sometimes called the Swedish method, is used in small groups around the world. Read the passage, then note three things:</p>
        <ul>
          <li>💡 <strong>A light</strong>: something that stood out, or that you hadn't noticed before.</li>
          <li>❓ <strong>A question</strong>: something confusing, troubling or curious.</li>
          <li>➡️ <strong>An arrow</strong>: something that points at your own life.</li>
        </ul>
        <p>Bring just one of each. That's plenty for a whole conversation.</p>`
      },
      {
        heading: "If speaking up is hard",
        tag: "practice",
        html: `<ul>
          <li>Try a starter: <em>"I noticed…"</em>, <em>"I wondered why…"</em>, <em>"This reminded me of…"</em></li>
          <li>Write your thought in the comments below an article instead. Plenty of people prefer to think in writing.</li>
          <li>In our Discord, you can join a live study and just listen, or use the text channel instead of your voice. Cameras are never required.</li>
          <li>It's always fine to pass.</li>
        </ul>`
      },
      {
        heading: "Disagreeing kindly",
        tag: "practice",
        html: `<ul>
          <li>Speak for yourself: <em>"I read it as…"</em> rather than <em>"It obviously means…"</em></li>
          <li>Notice what kind of claim you're making. Our articles mark sections as Scripture, tradition, history or interpretation for exactly this reason.</li>
          <li>Ask before you answer: <em>"What makes you read it that way?"</em></li>
          <li>Remember the goal is understanding, not winning. Christians have disagreed about many of these passages for two thousand years.</li>
        </ul>
        <p>See our <button type="button" class="link-btn" data-panel="principles">community principles</button> for the full picture.</p>`
      },
      {
        heading: "Where to begin",
        tag: "practice",
        html: `<p>Try the <a href="#/library/article/parables-four-week-study">four-week parables study</a>, or <a href="#/library/article/mark-in-sixteen-days">read Mark in sixteen days</a>, and bring your light, question and arrow to the conversation.</p>`
      }
    ],
    discuss: [
      "What has made you nervous about joining a religious discussion before?",
      "What would make a discussion feel safe for you?",
      "Try the method on Psalm 23: what's your light, your question and your arrow?"
    ],
    sources: [
      "The Bible",
      "The Violet Sanctuary community principles",
      "Dietrich Bonhoeffer, Life Together"
    ],
    related: ["where-to-start-reading", "parables-four-week-study"]
  }
];

/*
 * COURSE 001: THE SEVEN MARYS
 * Scripture quotations are from the King James Version (public domain).
 *
 * `version` and `requirements` keep certificates safe: anyone who completes version 1
 * keeps their badge forever, even if you add lessons later. If you add a new required
 * module, add version 2 with its own list. People who already finished stay finished.
 */
window.VS = window.VS || {};
VS.courses = VS.courses || [];

VS.courses.push({
  id: "seven-marys",
  title: "The Seven Marys",
  subject: "Biblical Studies",
  summary: "Seven women named Mary walk through the pages of the New Testament. Who were they, how are they connected, and which famous stories about them come from Scripture, and which from later tradition?",
  hours: "About 2–3 hours, at your own pace",
  level: "Introductory. No background needed.",
  badge: { name: "Scholar of the Seven Marys", emblem: "seven-stars", motto: "Quae conservabat in corde" },

  objectives: [
    "Identify the seven women named Mary in the New Testament and where each appears.",
    "Compare parallel Gospel passages and notice where they agree and differ.",
    "Distinguish what Scripture says from later tradition, legend, and modern speculation.",
    "Explain how and why some of the Marys came to be confused with each other.",
    "Place the Marys' stories in order across the Gospels, Acts and Paul's letters."
  ],

  version: 1,
  requirements: {
    1: ["why-mary", "nazareth", "magdalene", "bethany", "cross-and-tomb", "early-church", "witnesses", "evidence", "timeline", "matching", "hunt", "final"]
  },

  modules: [
    /* ---------------- LESSONS ---------------- */
    {
      id: "why-mary", type: "lesson", title: "Why So Many Marys?", minutes: 8,
      sections: [
        { heading: "A very common name", tag: "history",
          html: `<p>"Mary" comes from the Hebrew <em>Miryam</em>, written in Greek as <em>Mariam</em> or <em>Maria</em>. In Jesus' time it was the most popular name for Jewish women in the land of Israel. Studies of names found in inscriptions, ossuaries (bone boxes) and ancient texts suggest that roughly one woman in five was called Mary. Salome was nearly as common.</p>
          <p>Part of the reason was Miriam, the sister of Moses, who led the women of Israel in song after the crossing of the Red Sea (Exodus 15:20–21). Historians also point to Mariamne, a princess of the royal Hasmonean family and wife of King Herod, whose name may have made it even more fashionable.</p>` },
        { heading: "How the Gospels tell them apart", tag: "scripture",
          html: `<p>With so many Marys, the Gospel writers had to add a detail to say which one they meant: a <strong>town</strong> (Mary Magdalene, from Magdala), a <strong>husband</strong> (Mary the wife of Cleophas), or a <strong>son</strong> (Mary the mother of James and Joses). Sometimes Matthew simply says "the other Mary" (Matthew 27:61; 28:1).</p>` },
        { heading: "Meet the seven", tag: "scripture",
          html: `<ol>
            <li><strong>Mary of Nazareth</strong>, the mother of Jesus.</li>
            <li><strong>Mary Magdalene</strong>, a disciple from Galilee and the first witness of the resurrection in John's Gospel.</li>
            <li><strong>Mary of Bethany</strong>, sister of Martha and Lazarus.</li>
            <li><strong>Mary the mother of James and Joses</strong>, who watched at the cross and went to the tomb.</li>
            <li><strong>Mary the wife of Cleophas</strong> (Clopas), who stood by the cross in John's Gospel.</li>
            <li><strong>Mary the mother of John Mark</strong>, whose house in Jerusalem was a meeting place for the first Christians.</li>
            <li><strong>Mary of Rome</strong>, greeted by Paul in his letter to the Romans.</li>
          </ol>` },
        { heading: "Seven, or fewer?", tag: "interpretation",
          html: `<p>Not everyone counts seven. Some scholars think Mary the mother of James and Joses and Mary the wife of Cleophas were the same woman. For centuries, Western Christians also believed that Mary Magdalene and Mary of Bethany were one person. This course is an investigation: you'll weigh the evidence and decide for yourself.</p>` }
      ],
      refs: ["Exodus 15:20–21", "Matthew 27:61; 28:1"]
    },

    {
      id: "nazareth", type: "lesson", title: "Mary of Nazareth, Mother of Jesus", minutes: 8,
      sections: [
        { heading: "Her story in brief", tag: "scripture",
          html: `<p>Mary appears at the beginning and the end of Jesus' life: the angel's visit and her answer, "be it unto me according to thy word" (Luke 1:38); her song, the Magnificat (Luke 1:46–55); the birth in Bethlehem; the wedding at Cana, where she tells the servants, "Whatsoever he saith unto you, do it" (John 2:5); and the cross, where Jesus gives her into the care of the beloved disciple (John 19:25–27).</p>
          <p>Her last appearance is in Acts, praying with the disciples after the Ascension: "These all continued with one accord in prayer and supplication, with the women, and Mary the mother of Jesus" (Acts 1:14).</p>` },
        { heading: "A woman who pondered", tag: "scripture",
          html: `<p>Twice Luke tells us Mary did not understand everything at once, but kept it and thought it over: "But Mary kept all these things, and pondered them in her heart" (Luke 2:19; see also 2:51). This course's motto, <em>Quae conservabat in corde</em>, "which she kept in her heart", comes from the Latin of that verse.</p>` },
        { heading: "Tradition and teaching", tag: "tradition",
          html: `<p>Christian tradition has said a great deal more about Mary than the Gospels do, including Catholic teachings on her Immaculate Conception and Assumption, and the Orthodox feast of her Dormition. The second-century <em>Protevangelium of James</em>, which is not in the Bible, gives her parents' names as Joachim and Anne. For a fuller look, read <a href="#/library/article/mary-in-scripture">Mary in Scripture</a> in the Sacred Library.</p>` }
      ],
      refs: ["Luke 1–2", "John 2:1–11", "John 19:25–27", "Acts 1:14"]
    },

    {
      id: "magdalene", type: "lesson", title: "Mary Magdalene: Disciple and Witness", minutes: 12,
      sections: [
        { heading: "What the Gospels say", tag: "scripture",
          html: `<p>Luke introduces her among the women who travelled with Jesus and supported his work:</p>
          <blockquote>And certain women, which had been healed of evil spirits and infirmities, Mary called Magdalene, out of whom went seven devils, And Joanna the wife of Chuza Herod's steward, and Susanna, and many others, which ministered unto him of their substance.<cite>Luke 8:2–3 (KJV)</cite></blockquote>
          <p>All four Gospels place her at the crucifixion or the empty tomb. Matthew and Mark say she saw where Jesus was buried. In John's Gospel she comes to the tomb while it is still dark, and is the first person to meet the risen Jesus. She thinks he is the gardener, until he says her name:</p>
          <blockquote>Jesus saith unto her, Mary. She turned herself, and saith unto him, Rabboni; which is to say, Master.<cite>John 20:16 (KJV)</cite></blockquote>
          <p>Then "Mary Magdalene came and told the disciples that she had seen the Lord" (John 20:18).</p>` },
        { heading: "Where was Magdala?", tag: "history",
          html: `<p>"Magdalene" almost certainly means "from Magdala", a fishing town on the western shore of the Sea of Galilee. Its Hebrew name, <em>Migdal</em>, means "tower". Archaeologists excavating there since 2009 have found a first-century synagogue, with a carved stone, the Magdala Stone, decorated with one of the earliest known images of the Temple's menorah.</p>` },
        { heading: "The \"repentant sinner\": where it came from", tag: "tradition",
          html: `<p>Scripture never says Mary Magdalene was a prostitute. The idea came from an influential sermon by Pope Gregory the Great in 591, who joined three women into one: Mary Magdalene, Mary of Bethany, and the unnamed "woman in the city, which was a sinner" who anoints Jesus' feet in Luke 7:36–50. Gregory said, "She whom Luke calls the sinful woman, whom John calls Mary, we believe to be the Mary from whom seven devils were ejected."</p>
          <p>That combined figure, the weeping penitent with long hair and a jar of ointment, shaped Western art and preaching for well over a thousand years. The Eastern churches never made the connection, and honour her as a "myrrh-bearer" and "equal to the apostles". In 1969 the Roman Catholic calendar was revised so that her feast on 22 July no longer presents her as a penitent sinner, and in 2016 Pope Francis raised that day to a full feast, calling her the "apostle of the apostles".</p>` },
        { heading: "Modern speculation", tag: "interpretation",
          html: `<p>Some later texts outside the Bible give Mary Magdalene a large role. The <em>Gospel of Mary</em>, probably from the second century, survives only in fragments and shows her teaching the disciples. The third-century <em>Gospel of Philip</em> says Jesus loved her more than the other disciples, in a passage so damaged that key words are missing.</p>
          <p>Popular novels have used these to claim she was Jesus' wife. There is no historical evidence for this, and the texts were written long after her lifetime. Scholars across a wide range of views agree on this. What the Gospels do show is remarkable enough: a woman whose witness was trusted with the news of the resurrection.</p>` }
      ],
      refs: ["Luke 8:1–3", "Mark 15:40–16:8", "Matthew 27:55–28:10", "John 20:1–18", "Luke 7:36–50"]
    },

    {
      id: "bethany", type: "lesson", title: "Mary of Bethany: The One Who Listened", minutes: 10,
      sections: [
        { heading: "At Jesus' feet", tag: "scripture",
          html: `<p>Bethany was a village just outside Jerusalem, on the Mount of Olives. Jesus stayed there with friends: Martha, her sister Mary, and their brother Lazarus. When Jesus visits, Martha rushes to serve, while Mary "sat at Jesus' feet, and heard his word" (Luke 10:39). When Martha complains, Jesus answers:</p>
          <blockquote>Martha, Martha, thou art careful and troubled about many things: But one thing is needful: and Mary hath chosen that good part, which shall not be taken away from her.<cite>Luke 10:41–42 (KJV)</cite></blockquote>` },
        { heading: "Grief and anointing", tag: "scripture",
          html: `<p>When Lazarus dies, Mary falls at Jesus' feet and says, "Lord, if thou hadst been here, my brother had not died" (John 11:32), the same words Martha used earlier. Seeing her weep, "Jesus wept" (John 11:35), and then he raises Lazarus from the tomb.</p>
          <p>Six days before the Passover, at a dinner in Bethany:</p>
          <blockquote>Then took Mary a pound of ointment of spikenard, very costly, and anointed the feet of Jesus, and wiped his feet with her hair: and the house was filled with the odour of the ointment.<cite>John 12:3 (KJV)</cite></blockquote>` },
        { heading: "Three anointings, or one?", tag: "interpretation",
          html: `<p>Mark 14:3–9 and Matthew 26:6–13 also describe a woman anointing Jesus at Bethany, in the house of Simon the leper. There, she is unnamed, and pours the ointment on his <em>head</em>. Jesus says that "wheresoever this gospel shall be preached throughout the whole world, this also that she hath done shall be spoken of for a memorial of her" (Mark 14:9).</p>
          <p>Luke 7 has a different scene: a woman known as "a sinner", in a Pharisee's house in Galilee, earlier in Jesus' ministry, who washes his feet with her tears.</p>
          <p>Most scholars think Mark, Matthew and John describe the same Bethany event, with John naming the woman as Mary. Luke's story is usually seen as a separate event, though some think the traditions influenced each other. It was the similarity of these scenes that led to the different women being blended into one.</p>` }
      ],
      refs: ["Luke 10:38–42", "John 11:1–45", "John 12:1–8", "Mark 14:3–9", "Luke 7:36–50"]
    },

    {
      id: "cross-and-tomb", type: "lesson", title: "The Marys at the Cross and the Tomb", minutes: 10,
      sections: [
        { heading: "Mary the mother of James and Joses", tag: "scripture",
          html: `<p>Mark names her three times: at the cross, as "Mary the mother of James the less and of Joses" (Mark 15:40); at the burial, where she and Mary Magdalene "beheld where he was laid" (15:47); and at dawn on the first day of the week, bringing spices (16:1). Matthew calls her "the other Mary" (27:61; 28:1), and Luke lists "Mary the mother of James" among the women who told the apostles the tomb was empty (Luke 24:10).</p>` },
        { heading: "Mary the wife of Cleophas", tag: "scripture",
          html: `<blockquote>Now there stood by the cross of Jesus his mother, and his mother's sister, Mary the wife of Cleophas, and Mary Magdalene.<cite>John 19:25 (KJV)</cite></blockquote>
          <p>This is the only place she appears by that name. The Greek name is <em>Klopas</em>. He may or may not be the same man as Cleopas, one of the two disciples on the road to Emmaus (Luke 24:18).</p>` },
        { heading: "Were they the same woman?", tag: "interpretation",
          html: `<p>Many scholars think Mary the mother of James and Joses and Mary the wife of Clopas could be one woman, called by her son's name in Mark and her husband's in John. Others think they were two different women. The texts don't settle it, and that's why, in this course, we count them separately.</p>` },
        { heading: "What later tradition said", tag: "tradition",
          html: `<p>The second-century historian Hegesippus, quoted by Eusebius, wrote that Clopas was the brother of Joseph, which would make his wife Mary the sister-in-law of the mother of Jesus. Their son Simeon, Hegesippus says, became the second leader of the church in Jerusalem.</p>
          <p>A much later legend from Provence in France tells that Mary the wife of Clopas and Mary Salome sailed across the Mediterranean with Mary Magdalene, Martha and Lazarus, landing at the town now called Saintes-Maries-de-la-Mer, "the Holy Marys of the Sea". This is a medieval legend, not history, but a pilgrimage there is still held every year.</p>` }
      ],
      refs: ["Mark 15:40–16:8", "Matthew 27:55–61", "Luke 24:10", "John 19:25"]
    },

    {
      id: "early-church", type: "lesson", title: "The Marys of the Early Church", minutes: 7,
      sections: [
        { heading: "Mary, mother of John Mark", tag: "scripture",
          html: `<p>When Peter is freed from prison by an angel, he goes straight to a house he knows:</p>
          <blockquote>He came to the house of Mary the mother of John, whose surname was Mark; where many were gathered together praying.<cite>Acts 12:12 (KJV)</cite></blockquote>
          <p>A servant girl named Rhoda comes to the gate, and is so overjoyed to hear Peter's voice that she runs back inside without letting him in (Acts 12:13–16). Mary's house was clearly a place where the early church gathered. Her son John Mark later travelled with Paul and Barnabas, and Colossians 4:10 calls him Barnabas's cousin.</p>` },
        { heading: "Mary of Rome", tag: "scripture",
          html: `<p>At the end of his letter to the Romans, Paul greets many people by name. Among them: "Greet Mary, who bestowed much labour on us" (Romans 16:6). We know nothing else about her. She stands with many other women in that chapter, including Phoebe, a deacon who carried the letter (16:1–2), Priscilla (16:3) and Junia, "of note among the apostles" (16:7).</p>` },
        { heading: "Why the minor Marys matter", tag: "interpretation",
          html: `<p>Historians notice that women appear throughout the early church as hosts, workers, patrons and witnesses. A woman whose house was a church, and a woman Paul remembered for her hard work, are small details, but they suggest how much of the first generation's life depended on women like them.</p>` }
      ],
      refs: ["Acts 12:1–17", "Colossians 4:10", "Romans 16:1–16"]
    },

    /* ---------------- ACTIVITIES ---------------- */
    {
      id: "witnesses", type: "compare", title: "Investigation: Who Stood at the Cross?", minutes: 10,
      intro: "Four Gospels, four lists of witnesses. Read them side by side, like a detective comparing statements, then answer the questions.",
      passages: [
        { ref: "Mark 15:40", text: "There were also women looking on afar off: among whom was Mary Magdalene, and Mary the mother of James the less and of Joses, and Salome;" },
        { ref: "Matthew 27:55–56", text: "And many women were there beholding afar off, which followed Jesus from Galilee, ministering unto him: Among which was Mary Magdalene, and Mary the mother of James and Joses, and the mother of Zebedee's children." },
        { ref: "Luke 23:49", text: "And all his acquaintance, and the women that followed him from Galilee, stood afar off, beholding these things." },
        { ref: "John 19:25", text: "Now there stood by the cross of Jesus his mother, and his mother's sister, Mary the wife of Cleophas, and Mary Magdalene." }
      ],
      questions: [
        { q: "Which woman is named in Mark, Matthew and John?", options: ["Mary the mother of Jesus", "Mary Magdalene", "Salome", "Mary the wife of Cleophas"], answer: 1,
          explain: "Mary Magdalene is the one witness all three name. Luke names no one at the cross, but names her at the empty tomb (Luke 24:10)." },
        { q: "Which Gospel places the mother of Jesus at the cross?", options: ["Mark", "Matthew", "Luke", "John"], answer: 3,
          explain: "Only John does. It's also John who records Jesus entrusting her to the beloved disciple." },
        { q: "Look at where the women stand. What do you notice?", options: ["All four say the women stood right beside the cross", "Mark, Matthew and Luke say \"afar off\"; John says \"by the cross\"", "None of them say where the women stood"], answer: 1,
          explain: "Good detective work. The first three Gospels place the women at a distance; John brings his small group close. Readers suggest different reasons: different moments, a different focus, or John's theological interest in the scene." },
        { q: "Mark's third woman is Salome. In the same place in his list, what does Matthew have?", options: ["Mary of Bethany", "Joanna", "The mother of Zebedee's children", "Martha"], answer: 2,
          explain: "Because she sits in the same place in the list, many readers think Salome may be the mother of James and John, the sons of Zebedee. It's possible, but the texts never say so directly." },
        { q: "In John 19:25, how many women are standing by the cross?", options: ["Definitely three", "Definitely four", "It can be read as three or four"], answer: 2,
          explain: "If \"his mother's sister\" and \"Mary the wife of Cleophas\" are the same person, there are three women. If they are different people, there are four. Two sisters both named Mary seems unlikely to many readers, so many prefer four. Ancient Greek has no punctuation to settle it." }
      ]
    },

    {
      id: "evidence", type: "sort", title: "Evidence Board: Scripture, Tradition or Speculation?", minutes: 8,
      intro: "A good scholar always asks where a claim comes from. Sort each statement into the right drawer. You can change your answers before checking.",
      bins: [
        { id: "scripture", name: "Scripture says it" },
        { id: "tradition", name: "Later tradition or legend" },
        { id: "debate", name: "Debated or speculative" }
      ],
      items: [
        { text: "Seven devils had gone out of Mary Magdalene.", bin: "scripture", explain: "Luke 8:2." },
        { text: "Mary Magdalene was a repentant prostitute.", bin: "tradition", explain: "Not in Scripture. It comes from Pope Gregory the Great's sermon of 591." },
        { text: "Mary Magdalene was the first to meet the risen Jesus.", bin: "scripture", explain: "John 20:11–18." },
        { text: "Mary Magdalene was secretly married to Jesus.", bin: "debate", explain: "A modern speculation with no historical evidence. Even the late texts it draws on don't say so." },
        { text: "Mary of Bethany anointed Jesus' feet with costly spikenard.", bin: "scripture", explain: "John 12:3." },
        { text: "Mary of Bethany and Mary Magdalene were the same woman.", bin: "tradition", explain: "A long Western tradition, but the Gospels present them as different women, from different towns." },
        { text: "Clopas was the brother of Joseph.", bin: "tradition", explain: "From the second-century writer Hegesippus, quoted by Eusebius. Not in the Bible." },
        { text: "Mary the wife of Clopas and Mary the mother of James were the same person.", bin: "debate", explain: "A reasonable theory that many scholars hold, but the texts don't settle it." },
        { text: "Three Marys sailed to Provence after the resurrection.", bin: "tradition", explain: "A medieval French legend, still celebrated at Saintes-Maries-de-la-Mer." },
        { text: "Many people gathered to pray at the house of Mary, mother of John Mark.", bin: "scripture", explain: "Acts 12:12." }
      ]
    },

    {
      id: "timeline", type: "timeline", title: "Timeline: The Marys in Order", minutes: 6,
      intro: "Put these moments in the order the New Testament tells them. Use the arrows to move a card up or down, then check your timeline.",
      note: "The Gospels don't always tell events in strict date order, but these follow the clear shape of the story: Jesus' birth, his ministry, his death and resurrection, and the early church.",
      items: [
        { text: "The angel Gabriel visits Mary of Nazareth", ref: "Luke 1" },
        { text: "Mary Magdalene travels with Jesus in Galilee", ref: "Luke 8" },
        { text: "Mary of Bethany sits at Jesus' feet while Martha serves", ref: "Luke 10" },
        { text: "Mary of Bethany weeps for her brother Lazarus", ref: "John 11" },
        { text: "Mary of Bethany anoints Jesus with spikenard", ref: "John 12" },
        { text: "The Marys stand at the cross", ref: "Mark 15; John 19" },
        { text: "Mary Magdalene meets the risen Jesus in the garden", ref: "John 20" },
        { text: "Mary the mother of Jesus prays with the disciples", ref: "Acts 1" },
        { text: "Peter knocks at the gate of Mary's house", ref: "Acts 12" },
        { text: "Paul sends greetings to Mary in Rome", ref: "Romans 16" }
      ]
    },

    {
      id: "matching", type: "match", title: "Who Am I? Match Each Mary", minutes: 5,
      intro: "Each Mary is remembered for something. Match each woman to the words or detail that belongs to her.",
      pairs: [
        { left: "Mary of Nazareth", right: "\"Kept all these things, and pondered them in her heart\"" },
        { left: "Mary Magdalene", right: "\"Out of whom went seven devils\"" },
        { left: "Mary of Bethany", right: "\"Hath chosen that good part\"" },
        { left: "Mary the mother of Joses", right: "\"Beheld where he was laid\"" },
        { left: "Mary the wife of Cleophas", right: "Named with her husband, standing by the cross" },
        { left: "Mary the mother of John Mark", right: "\"Many were gathered together praying\" at her house" },
        { left: "Mary of Rome", right: "\"Bestowed much labour on us\"" }
      ]
    },

    {
      id: "hunt", type: "hunt", title: "Scripture Scavenger Hunt", minutes: 15,
      intro: "Follow the clues through the New Testament. Each answer is a book and chapter, like \"Luke 2\". Finding one unlocks the next. Use any Bible, printed or online.",
      clues: [
        { clue: "Find the song a young mother sang when she visited her cousin, whose baby leapt for joy.", answer: ["luke 1"], hint: "It's in the Gospel that begins with a promise to Zechariah.",
          found: "Luke 1:46–55, the Magnificat: \"My soul doth magnify the Lord.\"" },
        { clue: "Find the kitchen where one sister was busy and the other sat and listened.", answer: ["luke 10"], hint: "Same Gospel, about ten chapters later, just after the Good Samaritan.",
          found: "Luke 10:38–42, Martha and Mary." },
        { clue: "Find the dinner where a whole house filled with the scent of spikenard.", answer: ["john 12"], hint: "The fourth Gospel, the chapter after Lazarus is raised.",
          found: "John 12:1–8, Mary of Bethany anoints Jesus." },
        { clue: "Find the garden where a weeping woman mistook the risen Jesus for the gardener.", answer: ["john 20"], hint: "Same Gospel, a little further on.",
          found: "John 20:11–18, \"Rabboni.\"" },
        { clue: "Find the night a servant girl was so happy to hear a voice at the gate that she forgot to open it.", answer: ["acts 12"], hint: "The book right after John. An angel opens a prison.",
          found: "Acts 12:12–16, Rhoda, Peter, and Mary's house." },
        { clue: "Find the long list of greetings where Paul remembers a hard-working Mary.", answer: ["romans 16"], hint: "Paul's letter to the church in the empire's capital, its very last chapter.",
          found: "Romans 16:6, \"Greet Mary, who bestowed much labour on us.\"" }
      ]
    },

    {
      id: "final", type: "final", title: "Final Assessment", minutes: 10, passMark: 0.8,
      intro: "Eleven questions on everything you've studied. You need 9 correct to complete the course. You can retake it as many times as you like, and nothing is timed.",
      questions: [
        { q: "Why was \"Mary\" such a common name in Jesus' day?", options: ["It was required by Roman law", "It honoured Miriam, the sister of Moses, and was a royal Hasmonean name", "It was the name of a Greek goddess", "It meant \"daughter of Galilee\""], answer: 1 },
        { q: "What does \"Magdalene\" most likely mean?", options: ["\"The weeping one\"", "\"The penitent\"", "\"From Magdala\", a town on the Sea of Galilee", "\"Tower of ivory\""], answer: 2 },
        { q: "Which Gospel says seven devils had gone out of Mary Magdalene?", options: ["Luke", "John", "Matthew", "Acts"], answer: 0 },
        { q: "In John 20, what does Mary Magdalene call Jesus when she recognises him?", options: ["Lord of Glory", "Rabboni", "Son of David", "Emmanuel"], answer: 1 },
        { q: "Who first taught, in an influential sermon of 591, that Mary Magdalene, Mary of Bethany and the sinful woman of Luke 7 were one person?", options: ["Saint Augustine", "Pope Gregory the Great", "Saint Jerome", "Thomas Aquinas"], answer: 1 },
        { q: "Who anoints Jesus' feet in John 12?", options: ["Mary Magdalene", "Mary of Bethany", "Mary the mother of Jesus", "An unnamed woman of Galilee"], answer: 1 },
        { q: "Is there historical evidence that Mary Magdalene was married to Jesus?", options: ["Yes, in the Gospel of John", "Yes, in the letters of Paul", "No. It's modern speculation based loosely on much later texts"], answer: 2 },
        { q: "Which Gospel alone places the mother of Jesus at the cross?", options: ["Mark", "Matthew", "Luke", "John"], answer: 3 },
        { q: "Mark 15:40 names Mary Magdalene, Mary the mother of James the less and of Joses, and…", options: ["Martha", "Salome", "Joanna", "Mary of Bethany"], answer: 1 },
        { q: "Whose house in Jerusalem was a gathering place where many prayed for Peter?", options: ["Mary the mother of John Mark", "Mary of Bethany", "Mary the wife of Cleophas", "Mary of Rome"], answer: 0 },
        { q: "Which statement is the best example of later tradition rather than Scripture?", options: ["Mary of Bethany sat at Jesus' feet", "Clopas was the brother of Joseph", "Mary Magdalene saw where Jesus was buried", "Paul greeted a Mary in Rome"], answer: 1 }
      ]
    }
  ],

  sources: [
    "The Holy Bible, King James Version (1611)",
    "Richard Bauckham, Gospel Women: Studies of the Named Women in the Gospels",
    "Richard Bauckham, Jesus and the Eyewitnesses (chapter on names in first-century Palestine)",
    "Tal Ilan, Lexicon of Jewish Names in Late Antiquity, Part I",
    "Gregory the Great, Homily 33 on the Gospels (AD 591)",
    "Eusebius, Ecclesiastical History 3.11 (quoting Hegesippus)",
    "Esther de Boer, Mary Magdalene: Beyond the Myth",
    "Bart D. Ehrman, Peter, Paul, and Mary Magdalene",
    "Raymond E. Brown et al. (eds.), Mary in the New Testament"
  ]
});

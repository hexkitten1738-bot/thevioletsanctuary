/*
 * CHRISTIAN SYMBOLS SHOWCASE
 * `svg` is drawn inside a 48 × 48 box using lines (stroke) in the current text colour.
 * Replace with your own illustrations by changing `svg` to an <image> tag, or
 * put an image path in `img` (e.g. "assets/symbols/chi-rho.png") and it will be used instead.
 */
window.VS = window.VS || {};

VS.symbols = [
  {
    id: "cross", name: "The Cross",
    svg: '<path d="M24 5v38M13 15h22"/>',
    meaning: "The central sign of Christianity, recalling Jesus's death and resurrection.",
    detail: "Early Christians were slow to depict the cross openly, since crucifixion was still a shameful public execution. It became widespread in art after the fourth century. A cross without a figure is common in Protestant churches; a crucifix, showing the body of Christ, is common in Catholic and Orthodox ones.",
    tag: "history", refs: "1 Corinthians 1:18; Galatians 6:14"
  },
  {
    id: "chi-rho", name: "Chi-Rho",
    svg: '<path d="M24 6v36"/><path d="M24 6h7a6.5 6.5 0 0 1 0 13h-7"/><path d="M13 17l22 22M35 17L13 39"/>',
    meaning: "The first two Greek letters of Christos (Christ), laid over each other.",
    detail: "Associated with the emperor Constantine in the early 300s, it appeared on shields, coins, standards and tombs.",
    tag: "history", refs: "See the Library article on early Christian symbols."
  },
  {
    id: "ichthys", name: "Ichthys",
    svg: '<path d="M5 33C15 13 33 13 43 24C33 35 15 35 5 15"/><circle cx="36" cy="22" r="1.4" fill="currentColor"/>',
    meaning: "The fish, whose Greek letters spell \"Jesus Christ, Son of God, Saviour.\"",
    detail: "Found in early Christian art and writing. The story that it was a secret password drawn in the sand is popular but not well documented.",
    tag: "history", refs: "Mark 1:17; John 21:9–13"
  },
  {
    id: "alpha-omega", name: "Alpha & Omega",
    svg: '<text x="7" y="32" font-family="Georgia, serif" font-size="20" fill="currentColor" stroke="none">Α</text><text x="24" y="32" font-family="Georgia, serif" font-size="20" fill="currentColor" stroke="none">Ω</text>',
    meaning: "The first and last letters of the Greek alphabet: God as beginning and end.",
    detail: "Often painted on either side of a cross or Chi-Rho, and traced on the Easter candle.",
    tag: "scripture", refs: "Revelation 1:8; 21:6; 22:13"
  },
  {
    id: "ihs", name: "IHS",
    svg: '<text x="5" y="31" font-family="Georgia, serif" font-size="17" letter-spacing="1" fill="currentColor" stroke="none">IHS</text><path d="M24 8v8M20 12h8"/>',
    meaning: "The first three letters of the name Jesus in Greek (ΙΗΣ), written in Latin letters.",
    detail: "Popularised in the 1400s by the preacher Bernardino of Siena and later used by the Jesuits. Later readings such as \"Iesus Hominum Salvator\" (Jesus, Saviour of Mankind) are devotional interpretations of the letters.",
    tag: "history", refs: "Philippians 2:9–10"
  },
  {
    id: "anchor", name: "Anchor",
    svg: '<circle cx="24" cy="9" r="4"/><path d="M24 13v29M16 20h16M9 30c2 8 8 12 15 12s13-4 15-12M9 30l-3 3M39 30l3 3"/>',
    meaning: "Hope that holds steady in storms.",
    detail: "One of the earliest Christian symbols, found in the Roman catacombs. Its crossbar quietly echoes the cross.",
    tag: "scripture", refs: "Hebrews 6:19"
  },
  {
    id: "dove", name: "Dove",
    svg: '<path d="M8 28c7 5 19 6 27-2l7 1-5-5c-1-4-6-5-9-2L19 10c-3 8-1 14 6 17"/><path d="M8 28l-3 6 8-3"/><circle cx="33" cy="22" r="1" fill="currentColor"/>',
    meaning: "The Holy Spirit, and peace.",
    detail: "At Jesus's baptism the Spirit descends \"like a dove.\" A dove with an olive branch recalls Noah and the end of the flood.",
    tag: "scripture", refs: "Matthew 3:16; Genesis 8:11"
  },
  {
    id: "flame", name: "Flame",
    svg: '<path d="M24 42c-8 0-12-6-12-12 0-8 8-12 8-22 6 4 14 12 14 22 0 6-4 12-10 12z"/><path d="M24 42c-4 0-6-3-6-6 0-4 4-6 6-10 2 4 6 6 6 10 0 3-2 6-6 6z"/>',
    meaning: "The Holy Spirit as fire, warmth and courage.",
    detail: "At Pentecost, \"tongues like as of fire\" rested on the disciples. Candles in churches draw on this imagery as well as on Christ as light.",
    tag: "scripture", refs: "Acts 2:1–4"
  },
  {
    id: "lily", name: "Lily",
    svg: '<path d="M24 42V22"/><path d="M24 22c-4-6-4-12 0-16 4 4 4 10 0 16z"/><path d="M24 24c-6-2-12 0-14 6 6 2 11 0 14-6zM24 24c6-2 12 0 14 6-6 2-11 0-14-6z"/>',
    meaning: "Purity, new life and trust.",
    detail: "In art, the angel Gabriel often holds a lily when he visits Mary, and lilies are a traditional Easter flower. Jesus pointed to the lilies of the field as a lesson in trust.",
    tag: "tradition", refs: "Matthew 6:28–29"
  },
  {
    id: "crown-of-stars", name: "Crown of Twelve Stars",
    svg: '<g fill="currentColor" stroke="none"><circle cx="24" cy="8" r="2"/><circle cx="32" cy="10" r="2"/><circle cx="38" cy="16" r="2"/><circle cx="40" cy="24" r="2"/><circle cx="38" cy="32" r="2"/><circle cx="32" cy="38" r="2"/><circle cx="24" cy="40" r="2"/><circle cx="16" cy="38" r="2"/><circle cx="10" cy="32" r="2"/><circle cx="8" cy="24" r="2"/><circle cx="10" cy="16" r="2"/><circle cx="16" cy="10" r="2"/></g>',
    meaning: "A sign associated with Mary in Catholic art.",
    detail: "Drawn from the vision of \"a woman clothed with the sun\" with a crown of twelve stars. Catholic tradition reads this woman as Mary; others read her as Israel or the Church, and many hold several meanings together.",
    tag: "interpretation", refs: "Revelation 12:1"
  },
  {
    id: "scallop", name: "Scallop Shell",
    svg: '<path d="M7 22c0-8 8-14 17-14s17 6 17 14L24 41z"/><path d="M24 41L15 10M24 41V8M24 41l9-31M24 41L9 16M24 41l15-25"/>',
    meaning: "Baptism and pilgrimage.",
    detail: "Shells are often used to pour baptismal water. The scallop is also the badge of pilgrims to the shrine of Saint James at Santiago de Compostela in Spain.",
    tag: "tradition", refs: "Matthew 28:19"
  },
  {
    id: "keys", name: "Crossed Keys",
    svg: '<circle cx="12" cy="12" r="5"/><path d="M15.5 15.5L39 39M33 39l3-3M37 35l3 3"/><circle cx="36" cy="12" r="5"/><path d="M32.5 15.5L9 39M15 39l-3-3M11 35l-3 3"/>',
    meaning: "The keys of the kingdom, the traditional emblem of Saint Peter.",
    detail: "Based on Jesus's words to Peter. Peter is shown holding keys in countless paintings, and crossed keys appear on the papal coat of arms.",
    tag: "scripture", refs: "Matthew 16:19"
  },
  {
    id: "triquetra", name: "Triquetra",
    svg: '<path d="M24 8C14 19 16 33 31 36M24 8C34 19 32 33 17 36M10 31C19 22 29 22 38 31"/><circle cx="24" cy="26" r="9"/>',
    meaning: "Three interlocking arcs, often used today as a symbol of the Trinity.",
    detail: "The knot appears in early medieval Celtic and Norse art, and its earliest meaning is uncertain. Christian artists used it in illuminated manuscripts, and its link with the Trinity is a later, devotional reading.",
    tag: "interpretation", refs: "Matthew 28:19"
  }
];

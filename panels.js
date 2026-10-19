/*
 * PANELS
 * The windows that slide open when someone clicks a hotspot.
 *
 *   kicker, title  – small label and heading
 *   type           – "html" (just text) or an interactive type:
 *                    reading, candles, timer, reflection, rosary, paths, downloads,
 *                    prayer-garden, virtues, notes, community
 *   object         – how it appears: "book" (illuminated open book), "parchment" (default for text),
 *                    "card" (small parchment) or "dark" (candlelit window, default for interactive tools)
 *   body           – HTML text. Links to rooms use href="#/room-id".
 *                    A button with data-panel="id" opens another panel.
 *
 * Text marked "Sample" is placeholder content. Replace it before launch.
 */
window.VS = window.VS || {};

VS.panels = {
  /* ---------- Gatehouse ---------- */
  paths: {
    kicker: "The Gatehouse",
    title: "What brings you here today?",
    type: "paths",
    intro: "Choose whichever feels closest. You can wander anywhere afterwards.",
    paths: [
      {
        title: "I'm seeking or exploring faith",
        text: "Gentle beginnings and honest answers, with no pressure.",
        links: [["#/library/article/where-to-start-reading", "Where to start reading the Bible"], ["#/cathedral", "Sit in the Cathedral"], ["#/library/articles/christianity-for-beginners", "Christianity for beginners"]]
      },
      {
        title: "I'm interested in the Bible, history, and ideas",
        text: "Scripture, symbols, saints and history. No faith assumed.",
        links: [["#/library", "Visit the Sacred Library"], ["#/library/articles", "Browse the catalogue"], ["#/library/symbols", "Christian symbols"]]
      },
      {
        title: "I just want somewhere peaceful",
        text: "Candlelight, still water and a few quiet minutes.",
        links: [["#/garden", "The Sacred Garden"], ["#/quiet-chapel", "The Quiet Chapel"]]
      },
      {
        title: "I'm here to pray and grow spiritually",
        text: "Daily Scripture, the Rosary and contemplative prayer.",
        links: [["#/cathedral", "The Violet Cathedral"], ["#/marian-chapel", "Pray the Rosary"], ["#/library/article/lectio-divina", "Learn Lectio Divina"]]
      }
    ]
  },

  gatherings: {
    kicker: "Noticeboard",
    title: "Upcoming gatherings",
    type: "html",
    body: `
      <p class="note">Sample schedule. These times are placeholders until the community opens.</p>
      <ul class="schedule">
        <li><span class="schedule__when">Sundays · 7 pm</span><span class="schedule__what">Evening prayer and Scripture reading</span></li>
        <li><span class="schedule__when">Tuesdays · 8 pm</span><span class="schedule__what">Rosary together (all welcome to listen)</span></li>
        <li><span class="schedule__when">Thursdays · 7 pm</span><span class="schedule__what">Deeper Bible study in the Chapter House</span></li>
        <li><span class="schedule__when">First Saturday</span><span class="schedule__what">Coffee hour at the Common Table</span></li>
      </ul>
      <p>Gatherings take place on our Discord server. You're welcome to come and just listen.</p>
      <p><button type="button" class="btn btn--small" data-panel="community">How to join</button></p>`
  },

  faq: {
    kicker: "Visitor Questions",
    title: "Things people often ask",
    type: "html",
    body: `
      <details><summary>Do I have to be Christian to visit?</summary><p>No. Believers, seekers, doubters, scholars and people who just like candlelight are all welcome. Nothing here asks you to convert.</p></details>
      <details><summary>Is this the Catholic Church?</summary><p>No. The sanctuary draws inspiration from Catholic prayer, art and tradition, but it is independent and not affiliated with or endorsed by the Roman Catholic Church or any denomination.</p></details>
      <details><summary>Are there real priests or ministers here?</summary><p>Not yet. The sanctuary is run by lay people. If qualified clergy or theologians join as guests in the future, we will say so clearly. We will never present anyone as ordained who isn't.</p></details>
      <details><summary>Do I need an account?</summary><p>No. Everything on this site works without signing up. Community conversation happens on Discord, which you can join if and when you like.</p></details>
      <details><summary>Is anything I type saved?</summary><p>Candle intentions, reflections and Scriptorium notes stay in your own browser. Only things you choose to share, like a comment or a prayer request, are sent to us. See <button type="button" class="link-btn" data-panel="privacy">Privacy</button>.</p></details>
      <details><summary>Is there an AI I can talk to?</summary><p>Not yet. A gentle AI study companion may come later. It will always be clearly labelled as an AI, and it will never pretend to be a priest, counsellor or confessor.</p></details>
      <details><summary>How is the sanctuary funded?</summary><p>Eventually, through voluntary donations and optional digital products such as printable stationery and illustrated guides. Basic prayer and community will always be free.</p></details>`
  },

  principles: {
    kicker: "How we live together",
    title: "Community principles",
    type: "html",
    body: `
      <ul class="principles">
        <li><strong>Questions are welcome.</strong> Sincere inquiry is a form of prayer.</li>
        <li><strong>No pressure.</strong> No one is pushed to convert, participate, donate or buy.</li>
        <li><strong>No spiritual coercion.</strong> No guilt, threats or manipulation, ever.</li>
        <li><strong>Prayer is free.</strong> Basic prayer, the Rosary and community gatherings cost nothing.</li>
        <li><strong>Honest about money.</strong> Products and prices are shown plainly.</li>
        <li><strong>Many perspectives.</strong> We respect different theological views and say clearly when something is interpretation.</li>
        <li><strong>AI is a tool, not clergy.</strong> Any AI feature will be labelled and will point people to real humans.</li>
        <li><strong>Privacy and boundaries.</strong> What you share in private stays private.</li>
      </ul>`
  },

  community: {
    kicker: "Fellowship",
    title: "Join the community",
    type: "community"
  },

  privacy: {
    kicker: "Privacy",
    title: "What this site keeps",
    type: "html",
    body: `
      <p>The sanctuary has no passwords and no tracking. Most of what you do here stays in your own browser.</p>
      <ul>
        <li>Intentions you type when lighting a candle or planting a flower are <strong>not saved anywhere</strong>. They disappear when you close the window.</li>
        <li>Your Scriptorium notes are saved only in <strong>this browser on this device</strong>. Clearing your browser data deletes them.</li>
        <li>The site remembers a few small preferences in your browser, such as whether sound is on.</li>
        <li><strong>Comments</strong> are public. We store the name you choose, your comment, and a scrambled code made from your internet address, used only to stop spam. That code can't be turned back into your address.</li>
        <li><strong>Sign in with Discord</strong> shares only your Discord name and picture with us, never your email, messages or servers.</li>
        <li><strong>Prayer requests</strong> you share are stored so others can pray for you. You choose whether your name shows and whether everyone or only members can see it. Encouragement notes are private to you. You can delete a request at any time.</li>
        <li><strong>Lily Post</strong> pen-pal profiles store your intro, interests and region (never your address) and are seen only by approved members. Your Discord profile is shown to someone only after you both agree to be pen pals, or after you accept their offer of help. Delete your profile at any time.</li>
        <li><strong>Your Sanctuary Journal</strong> (points, badges, course progress and certificates) is kept in this browser. If you sign in with Discord, it's also saved to your account so it works on other devices. It records rooms explored, lessons and activities completed, and badges. It never records prayer, candles, reflections or gifts. Your title and badges are shown to others only if you turn that on. You can download or erase your Journal from its settings.</li>
        <li><strong>Your Illuminated Bible</strong> (highlights, bookmarks, notes, notebooks and collections) is private. It's kept in this browser and, if you sign in, privately in your account. Nobody else can read it. The only exception is a note you choose to share by link, and you can unshare it at any time. Bible reading is never tracked or scored. You can download or delete everything from <em>Your Illuminated Bible → Your data</em>.</li>
        <li><strong>Certificates</strong> you make verifiable store the name you chose, the course and the date, so anyone with the certificate number can check it.</li>
        <li><strong>Gifts</strong> are handled by the payment service you choose (card checkout, Cash App or a crypto wallet). We never see or store card details.</li>
      </ul>
      <p>The page loads fonts from Google Fonts. Nothing else is sent to anyone.</p>`
  },

  crisis: {
    kicker: "You are not alone",
    title: "Need help right now?",
    type: "html",
    body: `
      <p>If you are in danger or thinking about harming yourself, please reach out to a real person now.</p>
      <ul class="crisis">
        <li><strong>United States:</strong> call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline).</li>
        <li><strong>United States:</strong> text <strong>HOME</strong> to <strong>741741</strong> (Crisis Text Line).</li>
        <li><strong>Elsewhere:</strong> find a free local helpline at <a href="https://findahelpline.com" target="_blank" rel="noopener">findahelpline.com</a>.</li>
        <li>In an emergency, call your local emergency number.</li>
      </ul>
      <p>This sanctuary is a place of prayer and rest, not a crisis service. You deserve care from people trained to give it.</p>`
  },

  /* ---------- Cathedral ---------- */
  "todays-reading": {
    object: "book",
    kicker: "The Lectern",
    title: "Today's reading",
    type: "reading"
  },

  "cathedral-gatherings": {
    kicker: "The Altar",
    title: "Gathering for prayer",
    type: "html",
    body: `
      <p>The community prays together online. Anyone may join, listen quietly, or simply know that others are praying.</p>
      <p class="note">Sample schedule. Times are placeholders.</p>
      <ul class="schedule">
        <li><span class="schedule__when">Daily · 8 am</span><span class="schedule__what">Morning prayer (Psalms and a short reading)</span></li>
        <li><span class="schedule__when">Daily · 9 pm</span><span class="schedule__what">Night prayer: a few quiet minutes before sleep</span></li>
        <li><span class="schedule__when">Sundays · 7 pm</span><span class="schedule__what">Evening gathering with Scripture and reflection</span></li>
      </ul>
      <p class="note">These are prayer gatherings led by lay members, not Mass or sacraments.</p>
      <p><button type="button" class="btn btn--small" data-panel="community">How to join</button></p>`
  },

  "sacred-music": {
    kicker: "The Vault",
    title: "Sacred music",
    type: "html",
    body: `
      <p>For more than a thousand years, Christians have sung the Psalms in plainchant: a single, unaccompanied line of melody that rises and falls with the words. Gregorian chant grew from this tradition in medieval Western Europe.</p>
      <p>The sanctuary has a soft ambient sound of still air and distant water. It's off by default.</p>
      <p><button type="button" class="btn btn--small" data-action="sound-toggle">Turn ambient sound on or off</button></p>
      <p class="note">Recorded chant and hymns will be added once properly licensed recordings are chosen.</p>`
  },

  "holy-water": {
    kicker: "By the Entrance",
    title: "The holy water font",
    type: "html",
    body: `
      <p>In many churches, a stone basin of holy water stands by the door. People dip their fingers and make the Sign of the Cross as they enter. The gesture recalls baptism, when a person is washed with water and welcomed into the Christian life.</p>
      <h3>Water in Scripture</h3>
      <ul>
        <li>The Spirit of God moving over the waters at creation (Genesis 1:2).</li>
        <li>Israel passing through the sea to freedom (Exodus 14).</li>
        <li>Jesus baptised in the Jordan (Matthew 3:13–17).</li>
        <li>"Living water" offered to the woman at the well (John 4:10–14).</li>
      </ul>
      <p class="note"><strong>Please note:</strong> this is a symbol and a teaching, not a sacrament. Clicking here does not bless you or replace baptism or the use of blessed water in a church.</p>`
  },

  candles: {
    kicker: "Votive Stand",
    title: "Light a candle",
    type: "candles",
    count: 24
  },

  /* ---------- Quiet Chapel ---------- */
  "candles-quiet": {
    kicker: "The Quiet Chapel",
    title: "Light a candle",
    type: "candles",
    count: 18
  },

  silence: {
    kicker: "The Quiet Chapel",
    title: "Sit in silence",
    type: "timer",
    options: [2, 5, 10],
    verse: { text: "Be still, and know that I am God.", ref: "Psalm 46:10" },
    prompt: "Breathe slowly. When thoughts come, let them pass like candle smoke."
  },

  reflection: {
    kicker: "The Quiet Chapel",
    title: "A short reflection",
    type: "reflection",
    verse: { text: "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.", ref: "Psalm 34:18 (KJV)" },
    prompts: [
      "What are you carrying today?",
      "Where did you notice kindness this week?",
      "What would you like to set down, even for a moment?",
      "Who would you like to hold in prayer?"
    ]
  },

  /* ---------- Marian Chapel ---------- */
  rosary: {
    object: "book",
    kicker: "The Marian Chapel",
    title: "Pray the Rosary",
    type: "rosary",
    wide: true
  },

  mysteries: {
    object: "book",
    kicker: "The Marian Chapel",
    title: "The mysteries of the Rosary",
    type: "html",
    body: `
      <p>Each decade of the Rosary is prayed while reflecting on a moment, or "mystery," in the life of Jesus and Mary. There are four sets of five.</p>
      <div data-mysteries></div>
      <p class="note">The Luminous Mysteries were added by Pope John Paul II in 2002. Traditionally the Joyful are prayed on Monday and Saturday, the Sorrowful on Tuesday and Friday, the Glorious on Wednesday and Sunday, and the Luminous on Thursday.</p>`
  },

  "marian-scripture": {
    object: "book",
    kicker: "The Book Stand",
    title: "Mary in Scripture",
    type: "html",
    body: `
      <p>Mary appears at key moments in the Gospels and Acts. These passages are a good place to begin:</p>
      <ul>
        <li><strong>The Annunciation</strong> – Luke 1:26–38</li>
        <li><strong>The Visitation and the Magnificat</strong> – Luke 1:39–56</li>
        <li><strong>The birth of Jesus</strong> – Luke 2:1–20; Matthew 1:18–25</li>
        <li><strong>The finding in the Temple</strong> – Luke 2:41–52</li>
        <li><strong>The wedding at Cana</strong> – John 2:1–11</li>
        <li><strong>At the foot of the Cross</strong> – John 19:25–27</li>
        <li><strong>With the disciples at Pentecost</strong> – Acts 1:14</li>
      </ul>
      <p class="tag-line"><span class="tag tag--scripture">Scripture</span> These events are narrated in the Bible.</p>
      <p class="tag-line"><span class="tag tag--tradition">Tradition</span> Beliefs such as Mary's Assumption come from Church tradition rather than a Gospel account. Christians of different churches hold different views on them.</p>
      <p><a class="btn btn--small" href="#/library/articles/marian-studies">More in the Library</a></p>`
  },

  "rosary-gatherings": {
    kicker: "Votive Candles",
    title: "Praying the Rosary together",
    type: "html",
    body: `
      <p>Praying the Rosary with others can feel like a gentle current carrying you along, even if you lose your place.</p>
      <p class="note">Sample schedule. Times are placeholders.</p>
      <ul class="schedule">
        <li><span class="schedule__when">Tuesdays · 8 pm</span><span class="schedule__what">Community Rosary (voice channel, cameras off)</span></li>
        <li><span class="schedule__when">Saturdays · 10 am</span><span class="schedule__what">Rosary for beginners, with each prayer explained</span></li>
      </ul>
      <p><button type="button" class="btn btn--small" data-panel="community">How to join</button></p>`
  },

  /* ---------- Library ---------- */
  "ed-rosary": {
    object: "book",
    kicker: "Illuminated Editions",
    title: "The Rosary Companion",
    type: "html",
    body: `
      <p>A visual prayer guide: every bead, prayer and mystery on its own illustrated page, with Scripture and a short reflection for each decade.</p>
      <p><strong>Free today:</strong> the interactive Rosary in the Marian Chapel.</p>
      <p><a class="btn btn--small" href="#/marian-chapel">Visit the Marian Chapel</a></p>
      <p class="note">The printable and premium editions are in preparation and not for sale yet.</p>`
  },

  "ed-saints": {
    object: "book",
    kicker: "Illuminated Editions",
    title: "Saints & Symbols cards",
    type: "html",
    body: `
      <p>Collectible educational cards, each with a saint's story, their traditional symbols, and the Scripture or writing they're remembered for.</p>
      <p>The first series is planned around the saints whose symbols appear most often in sacred art: Peter's keys, Catherine's wheel, Lucy's lamp, Francis's birds, Thérèse's roses.</p>
      <p><a class="btn btn--small" href="#/library/symbols">Browse Christian symbols</a></p>
      <p class="note">In preparation. Not for sale yet.</p>`
  },

  editions: {
    object: "book",
    kicker: "Publishing",
    title: "The Illuminated Editions",
    type: "html",
    body: `
      <p>A small collection of illustrated books and guides that grow out of the Library. Some introductory material will always be free.</p>
      <ol class="editions">
        <li><strong>The Language of the Sacred</strong>: an illustrated encyclopedia of Christian symbols.</li>
        <li><strong>The Rosary Companion</strong>: a visual prayer and reflection guide.</li>
        <li><strong>Mary: Scripture, Symbol &amp; Tradition</strong>: an illustrated Marian reference.</li>
        <li><strong>The Celestial Orders</strong>: angels in Scripture and Christian tradition.</li>
        <li><strong>Saints &amp; Symbols</strong>: collectible educational saint cards.</li>
      </ol>
      <p class="note">All editions are in preparation. Nothing is for sale yet.</p>`
  },

  /* ---------- Scriptorium ---------- */
  "study-plans": {
    object: "book",
    kicker: "The Scriptorium",
    title: "Study plans",
    type: "html",
    body: `
      <p>Self-paced paths through Scripture. Read one passage a day, at whatever speed suits you.</p>
      <h3>Seven days with the Gospel of Mark</h3>
      <ol class="plan">
        <li>Mark 1: A voice in the wilderness</li>
        <li>Mark 2: Friends who lower a man through a roof</li>
        <li>Mark 4: Parables of seeds and storms</li>
        <li>Mark 6: Loaves, fish and walking on water</li>
        <li>Mark 9:14–29: "Help thou mine unbelief"</li>
        <li>Mark 14: The last supper and the garden</li>
        <li>Mark 15–16: The cross and the empty tomb</li>
      </ol>
      <h3>Five days in the Psalms</h3>
      <ol class="plan"><li>Psalm 1</li><li>Psalm 23</li><li>Psalm 42</li><li>Psalm 51</li><li>Psalm 139</li></ol>
      <p><button type="button" class="btn btn--small" data-panel="notes">Open your notes</button></p>`
  },

  notes: {
    kicker: "The Scriptorium",
    title: "Your study notes",
    type: "notes"
  },

  "study-guides": {
    kicker: "The Scriptorium",
    title: "Downloadable study guides",
    type: "html",
    body: `
      <p>Printable guides with readings, questions and space to write are in preparation:</p>
      <ul>
        <li>The Gospel of Mark in seven sittings</li>
        <li>Lectio Divina: a four-week practice journal</li>
        <li>Reading the Psalms as poetry</li>
      </ul>
      <p>Meanwhile, free printable journaling pages are available at the Gilded Lily.</p>
      <p><a class="btn btn--small" href="#/gilded-lily">Visit the Gilded Lily</a></p>`
  },

  /* ---------- Chapter House ---------- */
  "chapter-schedule": {
    kicker: "The Chapter House",
    title: "Study circles",
    type: "html",
    body: `
      <p>Small groups that read slowly and talk honestly. Questions and disagreement are welcome. Kindness is required.</p>
      <p class="note">Sample schedule. Times are placeholders.</p>
      <ul class="schedule">
        <li><span class="schedule__when">Thursdays · 7 pm</span><span class="schedule__what">Deeper Bible study: the Gospel of John</span></li>
        <li><span class="schedule__when">Alternate Mondays</span><span class="schedule__what">The Hard Passages: texts most studies skip</span></li>
        <li><span class="schedule__when">Monthly</span><span class="schedule__what">Scripture as literature: no faith assumed</span></li>
      </ul>
      <p><button type="button" class="btn btn--small" data-panel="community">How to join</button></p>`
  },

  "book-club": {
    object: "book",
    kicker: "The Chapter House",
    title: "This season's book",
    type: "html",
    body: `
      <p class="note">Sample selection.</p>
      <h3>Revelations of Divine Love, by Julian of Norwich</h3>
      <p>Written by an English anchoress in the late 1300s, it is believed to be the earliest surviving book in English written by a woman. It is the source of her famous line, "All shall be well, and all shall be well, and all manner of thing shall be well."</p>
      <p>Older translations are in the public domain, so the book is free to read online.</p>`
  },

  "guest-speakers": {
    kicker: "The Chapter House",
    title: "Guest speakers",
    type: "html",
    body: `
      <p>In time, the Chapter House will host theologians, ministers, historians and artists for talks and conversations.</p>
      <p>Guests will always be introduced with their real background and affiliation, so you know exactly who is speaking and from which tradition.</p>
      <p class="note">No guests are scheduled yet.</p>`
  },

  /* ---------- Gilded Lily ---------- */
  "lily-about": {
    kicker: "The Gilded Lily",
    title: "Letters, paper goods, and little acts of kindness",
    type: "html",
    body: `
      <p>The Gilded Lily is the sanctuary's little post office: a place for printable stationery, greeting cards, bookmarks and journaling pages, and for the old, slow kindness of writing to someone by hand.</p>
      <p>Some printables are free. Others will be sold as digital downloads to help keep the sanctuary running. Prices will always be shown plainly.</p>`
  },

  "free-printables": {
    kicker: "The Paper Shelf",
    title: "Free printables",
    type: "downloads"
  },

  kindness: {
    kicker: "Letters of Kindness",
    title: "Write to someone who needs it",
    type: "html",
    body: `
      <p>Established programs collect handwritten cards and letters and deliver them to children in hospital, older adults, service members, and people facing illness or hard times.</p>
      <p>The Letter Writing Desk explains how to write a good letter, each program's rules, and where to send it.</p>
      <p><a class="btn btn--small" href="#/gilded-lily/writing-desk">Go to the Writing Desk</a></p>`
  },

  "lily-post": {
    kicker: "The Lily Post",
    title: "A pen-pal circle for members",
    type: "html",
    body: `
      <p>The Lily Post connects adult members for handwritten letters, seasonal cards and, if both like, small gifts. Pen pals only happen when both people say yes, and the sanctuary never stores anyone's address.</p>
      <p><a class="btn btn--small" href="#/gilded-lily/lily-post">Visit the Lily Post</a></p>`
  },

  /* ---------- Garden ---------- */
  stillness: {
    kicker: "The Sacred Garden",
    title: "Pool of Stillness",
    type: "timer",
    options: [1, 2, 5],
    water: true,
    verse: { text: "He leadeth me beside the still waters. He restoreth my soul.", ref: "Psalm 23:2–3 (KJV)" },
    prompt: "Watch the water. Breathe in as the circle grows, out as it fades."
  },

  "prayer-garden": {
    kicker: "The Sacred Garden",
    title: "The Prayer Garden",
    type: "prayer-garden"
  },

  virtues: {
    kicker: "The Sacred Garden",
    title: "The Garden of Virtues",
    type: "virtues"
  },

  "garden-reading": {
    object: "book",
    kicker: "The Greenhouse Path",
    title: "Consider the lilies",
    type: "html",
    body: `
      <blockquote class="verse">"Consider the lilies of the field, how they grow; they toil not, neither do they spin: And yet I say unto you, That even Solomon in all his glory was not arrayed like one of these."<cite>Matthew 6:28–29 (KJV)</cite></blockquote>
      <p>Jesus points to wildflowers as a lesson in trust. Which worry could you set down beside the lilies today?</p>`
  },

  /* ---------- Monastery (preview) ---------- */
  cloister: {
    kicker: "The Monastery · Coming soon",
    title: "The Cloister",
    type: "html",
    body: `
      <p>The heart of community life: introductions, announcements, weekly activities and everyday fellowship.</p>
      <p>For now, this happens on Discord.</p>
      <p><button type="button" class="btn btn--small" data-panel="community">Join the community</button></p>`
  },

  atelier: {
    kicker: "The Monastery · Coming soon",
    title: "The Atelier",
    type: "html",
    body: `
      <p>A creative workshop for rosary making, calligraphy, illuminated lettering, painting, religious crafts and seasonal projects, with printable instructions and live workshops.</p>
      <p class="note">In preparation.</p>`
  },

  "common-table": {
    kicker: "The Monastery · Coming soon",
    title: "The Common Table",
    type: "html",
    body: `
      <p>A friendly room for casual conversation, virtual coffee hours, games and friendship. No theology required.</p>
      <p class="note">In preparation.</p>`
  },

  /* ---------- Reliquary (preview) ---------- */
  "reliquary-about": {
    kicker: "The Little Reliquary · Preview",
    title: "About the gift shop",
    type: "html",
    body: `
      <p>The Little Reliquary will offer rosaries, candles, crosses, medals, Bibles, prayer journals and Christian art.</p>
      <p>We plan to work with print-on-demand partners, carefully checked suppliers and established religious retailers. Each item will say plainly how it is made and shipped.</p>
      <p class="note">Everything shown is an example. Nothing is for sale yet, and no payments are taken on this site.</p>
      <p><a class="btn btn--small" href="#/reliquary/shop">See the preview catalogue</a></p>`
  }
};

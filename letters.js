/*
 * THE LETTER WRITING DESK (Gilded Lily)
 * Programs that deliver handwritten letters to people who need encouragement.
 *
 * IMPORTANT: Programs change their addresses and rules. Only put an `address` here when the
 * program publishes ONE fixed mailing address on its own website, and update `checked`
 * whenever you re-check. Programs that assign or rotate addresses get a `howToGetAddress` instead.
 */
window.VS = window.VS || {};

VS.letters = {
  checked: "October 2026",

  groups: [
    { id: "children", name: "Children in hospital" },
    { id: "elders", name: "Older adults" },
    { id: "service", name: "Service members & first responders" },
    { id: "illness", name: "Illness & mental health" },
    { id: "hard-times", name: "Anyone going through a hard time" }
  ],

  programs: [
    {
      name: "Cards for Hospitalized Kids",
      group: "children",
      who: "Handmade cards for children and teens in hospitals across the US.",
      address: ["Cards for Hospitalized Kids", "7290 W. Devon", "Chicago, IL 60631"],
      steps: ["Make or decorate a card.", "Write an uplifting message about the child as a whole person.", "Mail it to the address on the card."],
      rules: [
        "No religious messages (for example \"God bless\" or \"I'm praying for you\"). Hospitals serve families of every faith and none.",
        "Don't write \"get well\" or \"feel better\". Some children have long-term or terminal illnesses.",
        "Sign with your first name only. You may add your state or a group name.",
        "No loose glitter or decorations that rub off."
      ],
      link: "https://www.cardsforhospitalizedkids.com/stepsformakingcards.html",
      linkLabel: "Full card-making guidelines"
    },
    {
      name: "Post Pals (United Kingdom)",
      group: "children",
      who: "Cards and small gifts for seriously ill children in the UK, and their brothers and sisters, who often feel overlooked.",
      howToGetAddress: "Choose a child on the \"Find Pals\" page. Each child's page shows where to send post for them.",
      steps: ["Read a child's page to learn what they love.", "Send a card, letter or small gift to the address on that page.", "No registration needed. It costs a stamp and a few minutes."],
      rules: ["Write to the interests on the child's page.", "International post from the US needs a Global Forever stamp or more postage."],
      link: "https://www.postpals.co.uk",
      linkLabel: "Find a Pal"
    },
    {
      name: "Love For Our Elders",
      group: "elders",
      who: "Letters for older adults in care homes and in the community, many of whom rarely receive mail.",
      howToGetAddress: "Each month the website lists several elders with a short story about each and a \"bundle\" address. The addresses change every month, so always use the current list.",
      steps: ["Choose an elder from this month's list.", "Address your envelope first, since addresses expire at the end of the month.", "Write and mail before that month's deadline."],
      rules: [
        "Handwrite in large, clear print.",
        "No glitter.",
        "Avoid religious and controversial topics so your letter can be meaningful to anyone.",
        "Photos, drawings and puzzles are welcome. A return address is optional, but don't expect a reply."
      ],
      link: "https://loveforourelders.org/letters",
      linkLabel: "This month's elders"
    },
    {
      name: "Letters Against Isolation",
      group: "elders",
      who: "Letters for seniors in care facilities in the US, Canada, the UK and Australia.",
      howToGetAddress: "Sign up as a volunteer and you'll receive a link to their portal, which lists partner facilities and how many letters each has requested. It's refreshed every two weeks.",
      steps: ["Sign up (individual, group or educator).", "Pick a facility in the portal and pledge a number of letters.", "Write by hand, mail them, then update your pledge in the portal."],
      rules: ["Handwritten only. No email.", "Upbeat and creative, with no political or religious references.", "Allow two to three weeks for delivery."],
      link: "https://www.lettersagainstisolation.com",
      linkLabel: "Sign up to write"
    },
    {
      name: "Color a Smile",
      group: "elders",
      who: "Cheerful drawings sent each month to seniors, troops overseas, veterans' homes and others who could use a smile.",
      address: ["Color A Smile", "PO Box 1516", "Morristown, NJ 07962-1516"],
      steps: ["Print a free coloring page from their website (or draw your own).", "Color it brightly.", "Mail it to the address on the card."],
      rules: ["Read the volunteer instructions on their site for current drawing guidelines."],
      link: "https://www.colorasmile.org",
      linkLabel: "Coloring pages and instructions"
    },
    {
      name: "Operation Gratitude",
      group: "service",
      who: "Handwritten letters tucked into care packages for deployed troops, veterans, first responders, new recruits, and wounded heroes and their caregivers.",
      howToGetAddress: "Their Virtual FOB page has letter templates, toolkits and current instructions for where to send letters.",
      steps: ["Open their letter-writing toolkit.", "Write a warm, personal letter of thanks.", "Send it as their current instructions describe."],
      rules: ["Follow their current letter guidelines, which can change with each campaign."],
      link: "https://www.operationgratitude.com",
      linkLabel: "Letter toolkit"
    },
    {
      name: "Soldiers' Angels",
      group: "service",
      who: "Cards, letters and care packages for deployed US service members, veterans and military families.",
      howToGetAddress: "Register as a volunteer. Letter-writing teams give you current addresses and guidelines.",
      steps: ["Register on their volunteer portal.", "Choose a letter or card-writing team.", "Write and send as your team describes."],
      rules: ["Some volunteer programs ask for a commitment of several letters over a few months."],
      link: "https://soldiersangels.org/volunteer/",
      linkLabel: "Volunteer registration"
    },
    {
      name: "Girls Love Mail",
      group: "illness",
      who: "Handwritten letters of encouragement for women newly diagnosed with breast cancer.",
      howToGetAddress: "Their \"Get Started\" page explains where to send letters, with guidelines and writing tips.",
      steps: ["Read their writing tips.", "Write a hopeful, personal letter.", "Mail it as the Get Started page describes."],
      rules: ["Follow their current guidelines and writing tips."],
      link: "https://www.girlslovemail.com",
      linkLabel: "Get started"
    },
    {
      name: "Letters Against Depression",
      group: "illness",
      who: "Handwritten letters for people living with depression, anxiety and other mental-health struggles, telling them \"You are not alone. You matter.\"",
      howToGetAddress: "Join through their Volunteer Portal, which explains their process and how letters are sent.",
      steps: ["Sign up on the Volunteer Portal.", "Read \"Writing a Letter\" and their expectations.", "Write and send as the portal describes."],
      rules: ["Encourage without trying to diagnose or fix. Never offer medical advice.", "Follow their writing guidelines closely. These letters reach people who may be very vulnerable."],
      link: "https://www.lettersagainst.org",
      linkLabel: "Volunteer portal"
    },
    {
      name: "The World Needs More Love Letters",
      group: "hard-times",
      who: "Bundles of love letters for people nominated by someone who cares about them. The letters go to the nominator, who reads them before passing them on.",
      howToGetAddress: "Read the current month's stories on their Letter Requests page. Each story lists where to send letters for that person.",
      steps: ["Read a story on the Letter Requests page.", "Write directly to that person.", "Mail it to the address in the story before the month ends."],
      rules: ["New stories have appeared less regularly in recent years, so check that the request is for the current month."],
      link: "https://www.moreloveletters.com",
      linkLabel: "Letter requests"
    }
  ],

  // Starters for anyone who doesn't know what to say.
  starters: [
    "I don't know you yet, but I wanted you to know someone was thinking of you today.",
    "Here's something that made me smile this week…",
    "If I could bring you anywhere for an afternoon, I'd take you to…",
    "One small thing I'm grateful for right now is…",
    "The best piece of advice anyone ever gave me was…",
    "Today the sky here looked like…",
    "A song I can't stop humming is…",
    "Here's a little drawing of my favourite place to sit and rest.",
    "I hope you have something warm to drink and a cozy place to read this.",
    "You don't have to write back. I just wanted you to have a letter that was only for you."
  ]
};

/*
 * SPONSOR A KINDNESS
 * Set these to match what supplies and postage really cost you.
 * Optional: give a tier its own `url` (e.g. a Stripe Payment Link for that exact amount).
 */
VS.sponsor = {
  tiers: [
    { amount: "$5", title: "A handwritten card", text: "A card, envelope and stamp, written by the sanctuary team for a child in hospital, an older adult, or someone in a hard season." },
    { amount: "$15", title: "A week of letters", text: "Several cards and stamps sent to a program like Cards for Hospitalized Kids or Love For Our Elders." },
    { amount: "$25", title: "A small care package", text: "A letter with a few comforts: tea, a candle, a prayer card, a bookmark." },
    { amount: "$50", title: "A gift basket", text: "A gift basket for someone in a care home, a family in hospital, or a member of our community going through a hard time." },
    { amount: "Any amount", title: "The postage fund", text: "Stamps and supplies for whatever's needed most this month." }
  ],
  note: "At checkout you can tell us who you'd like your kindness to reach (for example, someone grieving or a child in hospital) and we'll do our best to honour it.",
  transparency: "Each month we'll post a short note here about what your gifts became, such as how many cards and packages were sent and where. Gifts are kept in a separate account and used only for the sanctuary's work."
};

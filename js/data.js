/* ===========================================================
   Fake data – swap for Supabase later (Phase 1).
   All prices and events are examples for the preview only.
   =========================================================== */

const EVENTS = [
  {
    id: "happy-place",
    name: "Happy Place Festival",
    venue: "Tatton Park, Knutsford, Cheshire",
    city: "Cheshire",
    when: "Summer 2027 · [DATES TBC]",
    tags: ["Wellbeing", "Talks & workshops", "Family friendly"],
    type: "Festival",
    colour: "pink",
    intro: "A weekend of talks, workshops, movement, music and good food, all built around feeling better. Exhibitor stands now open for wellbeing, food and lifestyle brands.",
    about: [
      "Happy Place is a wellbeing festival in the grounds of Tatton Park, mixing big-name conversations with hands-on workshops, yoga and mindfulness sessions, live music and a food village. Visitors come for the whole day, often with family, and spend time browsing between sessions.",
      "That makes it a strong fit for brands that want time with an engaged, like-minded crowd rather than a passing glance."
    ],
    exhibitors: ["Wellness & self-care", "Food & drink", "Books & stationery", "Fitness & movement", "Beauty", "Charities", "Kids & family"],
    visitors: "[TBC]",
    deadline: "[DATE]",
    bookable: true
  },
  {
    id: "northern-makers",
    name: "Northern Makers Market",
    venue: "Victoria Warehouse, Manchester",
    city: "Manchester",
    when: "Spring 2027 · [DATES TBC]",
    tags: ["Crafts", "Independent brands"],
    type: "Market",
    colour: "teal",
    intro: "Two days of handmade goods, small-batch food and live demos from independent makers across the north.",
    about: ["Example event for the preview."],
    exhibitors: ["Crafts", "Food & drink", "Homeware", "Art & print"],
    visitors: "[TBC]",
    deadline: "[DATE]",
    stands: { left: 31, total: 60, from: 180 }
  },
  {
    id: "bake-brew",
    name: "Bake & Brew Show",
    venue: "[Venue TBC], Birmingham",
    city: "Birmingham",
    when: "Autumn 2027 · [DATES TBC]",
    tags: ["Food & drink", "Demos"],
    type: "Trade show",
    colour: "yellow",
    intro: "Bakers, roasters and brewers under one roof, with live stage demos and tastings all day.",
    about: ["Example event for the preview."],
    exhibitors: ["Bakery", "Coffee & tea", "Craft beer", "Equipment"],
    visitors: "[TBC]",
    deadline: "[DATE]",
    stands: { left: 12, total: 45, from: 350 }
  },
  {
    id: "little-explorers",
    name: "Little Explorers Family Fair",
    venue: "[Venue TBC], Leeds",
    city: "Leeds",
    when: "Summer 2027 · [DATES TBC]",
    tags: ["Family friendly", "Kids"],
    type: "Fair",
    colour: "violet",
    intro: "Hands-on activities, family brands and play zones for parents with children under ten.",
    about: ["Example event for the preview."],
    exhibitors: ["Kids & family", "Education", "Toys", "Days out"],
    visitors: "[TBC]",
    deadline: "[DATE]",
    stands: { left: 20, total: 32, from: 220 }
  }
];

/* Zones and stands for Happy Place (40 stands, 16 booked) */
const ZONES = [
  { id: "sponsor",   name: "Sponsor pavilions", filter: "Sponsor",   size: "9m × 6m", price: 2500, colour: "#be6cff", soft: "#f3e6ff",
    stands: ["S1","S2","S3","S4"], booked: ["S1","S3"] },
  { id: "wellbeing", name: "Wellbeing Garden",  filter: "Wellbeing", size: "6m × 3m", price: 900,  colour: "#ff00b1", soft: "#ffe1f3",
    stands: ["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10"], booked: ["W2","W5","W6","W9"] },
  { id: "market",    name: "Market Avenue",     filter: "Market",    size: "3m × 3m", price: 450,  colour: "#3cb6ba", soft: "#e0f4f4",
    stands: ["M1","M2","M3","M4","M5","M6","M7","M8","M9","M10","M11","M12","M13","M14","M15","M16"], booked: ["M2","M3","M7","M8","M11","M14"] },
  { id: "food",      name: "Food Village",      filter: "Food",      size: "4m × 3m", price: 650,  colour: "#fbc500", soft: "#fff2c4",
    stands: ["F1","F2","F3","F4","F5","F6","F7","F8","F9","F10"], booked: ["F1","F4","F5","F9"] }
];

const PACKAGES = [
  { name: "Market stall", price: 450, style: "", btn: "btn--teal", cta: "Choose a pitch", zone: "Market",
    desc: "3m × 3m pitch on Market Avenue. Gazebo space, 1 table, 2 exhibitor passes." },
  { name: "Feature stand · most popular", price: 900, style: "package--pink", btn: "btn--pink", cta: "Choose a stand", zone: "Wellbeing",
    desc: "6m × 3m in the Wellbeing Garden, next to the workshop tents. Power included, 4 passes, listing in the festival app." },
  { name: "Sponsor pavilion", price: 2500, style: "package--violet", btn: "btn--violet", cta: "Enquire", zone: "Sponsor",
    desc: "9m × 6m by the main stage. Logo on site signage, social mentions and a hosted session slot." }
];

const EXTRAS = [
  { id: "power", name: "Power supply", price: 75 },
  { id: "table", name: "Extra table & 2 chairs", price: 40 }
];

const BOOSTS = [
  { id: "none",      name: "No boost",          desc: "Standard listing on the event page.", price: 0 },
  { id: "spotlight", name: "Spotlight",         desc: "Featured in visitor emails and the festival app.", price: 120 },
  { id: "social",    name: "Spotlight + social", desc: "Everything in Spotlight plus targeted social ads.", price: 250 }
];

const BOOKING_FEE = 0.04;

const EXHIBITOR_TASKS = [
  { id: "t1", title: "Upload public liability insurance", meta: "PDF, minimum £5m cover", due: "[DATE]", state: "soon" },
  { id: "t2", title: "Send your risk assessment", meta: "Use the organiser's template", due: "[DATE]", state: "soon" },
  { id: "t3", title: "Add your logo and listing text", meta: "Shown on the event page and festival app", due: "Done", state: "done", done: true },
  { id: "t4", title: "Confirm vehicle and arrival time", meta: "Setup opens the day before", due: "[DATE]", state: "later" },
  { id: "t5", title: "Name your exhibitor pass holders", meta: "4 passes included", due: "[DATE]", state: "later" }
];

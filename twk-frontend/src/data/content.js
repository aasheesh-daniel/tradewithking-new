// ALL TEXT AND LINKS OF THE WEBSITE LIVE HERE , to change anything later just edit this file

// yellow moving line on the home page
export const tickerText = "Live streams are hosted on our YouTube channel, KingFX. Notifications will be posted on our community groups whenever a new live session is scheduled.";

export const links = {
  discord: "https://discord.gg/D3zECtaPf",
  telegram: "https://t.me/TWKINNG",
  email: "twking.info@gmail.com",
};

// nav links , href is the id of the section we scroll to
export const navLinks = [
  { name: "Home", to: "/" },
  { name: "Program", to: "/program" },
  { name: "Performance", to: "/performance" },
  { name: "About Us", to: "/about" },
  { name: "Contact", to: "/contact" },
];

// IMAGE SLOTS : put the photo inside the public folder and write its path here , empty "" = nice colour artwork is shown instead
// hero image  : wide cinematic photo (London skyline at dusk OR gold bars) , size about 1600x1200 , dark with teal + red light
export const heroImage = "/hero.jpg";

// 4 blocks at the bottom of the hero (icon = name of the drawing in Icon.jsx)
export const features = [
  { icon: "clock", title: "Session Based Trading", text: "Plan your trades around the London, NYSE and Gold sessions." },
  { icon: "cap", title: "Structured Learning", text: "Step-by-step lessons that make complex markets simple." },
  { icon: "people", title: "Active Community", text: "Learn with traders who share ideas and live discussion." },
  { icon: "growth", title: "Consistent Growth", text: "Build the discipline and risk habits that support steady progress." },
];

// image: "" means (london.jpg , newyork.jpg , gold.jpg = 1200x1400 portrait-ish photos)
// image: "" means no photo yet , put a photo path like "/london.jpg" (file inside public folder) and it shows automatically
export const markets = [
  { id: "london", slug: "london", title: "London Session", text: "Understand how price behaves when London opens and where high-probability setups appear.", image: "/london.jpg", pos: "center 15%", alt: "Big Ben and the Houses of Parliament in London at sunset" },
  { id: "newyork", slug: "newyork", title: "NYSE Open", text: "Learn to read the volatility of the New York open with clear structure and risk control.", image: "/newyork.jpg", pos: "center 45%", alt: "New York skyline at sunset with the Statue of Liberty" },
  { id: "gold", slug: "gold", title: "Gold Trade", text: "Explore gold market structure, price action and disciplined trading strategies.", image: "/gold.jpg", pos: "center 40%", alt: "Golden GOLD lettering with a rising arrow over a world map" },
];

// the one active program , benefits are written by the client , each benefit is [name , detail]
export const programs = [
  { id: "one-on-one", name: "One-on-One Mentorship", price: "$199", period: "one-time payment", tagline: "Exclusive Personalised Training", text: "Dedicated individual mentorship with personalised attention and a structured learning approach.",
    benefits: [["Lifetime Premium Signals Group", "Free lifetime access to the premium signals group"], ["Trading Bible", "Complete access to the educational guide"], ["One Free Funded Account", "Included free with the program"], ["Priority Support", "Direct access for doubts and queries"], ["Market Analysis", "Understanding price action and market structure"], ["One-on-One Doubt Clearing Sessions", "Personal sessions to clear your doubts"], ["Strategy Development", "Understanding and building trading strategies"]] },
];

export const whyChoose = [
  { icon: "medal", title: "4+ Years of Experience", text: "Built on years of market learning and practical trading experience." },
  { icon: "layers", title: "Structured Education", text: "Learning resources designed to simplify complex market concepts." },
  { icon: "candles", title: "Live Market Exposure", text: "Educational sessions featuring real-time market analysis." },
  { icon: "book", title: "Exclusive Trading Bible", text: "A comprehensive resource developed from accumulated market knowledge." },
  { icon: "people", title: "Community Support", text: "A growing community focused on learning, discipline and improvement." },
  { icon: "branch", title: "Personal Mentorship", text: "One-on-one mentorship with a lifetime premium signals group included." },
];

export const faq = [
  { q: "What is Trade With King?", a: "A trading mentorship and market insights platform offering structured educational programs, personalised mentorship, live market sessions and premium trading signals." },
  { q: "Which markets do you focus on?", a: "The London Session, the NYSE Open and Gold trades, with a focus on precision, discipline and consistency." },
  { q: "How much does the program cost?", a: "The One-on-One Mentorship program is a one-time payment of $199." },
  { q: "How can I ask for a quote?", a: "Click Ask for a quote on this website or email us at twking.info@gmail.com." },
  { q: "How can I join the community?", a: "Click Join the Community on this page to open our free Discord and Telegram groups." },
  { q: "Does trading involve financial risk?", a: "Yes. Losses are possible and no results are guaranteed. That is why we teach risk management first." },
];


// ===== MARKET PAGES (opened when a market card on the home page is clicked) =====
// facts were checked against BIS , LBMA and exchange information. images = the 3 photos in the public folder
export const marketDetails = {
  london: {
    title: "London Session", image: "/london-hero.jpg", pos: "center 35%", alt: "Big Ben and the River Thames in London at sunset",
    lead: "The London session is where the foreign exchange market finds its pace. As Europe's trading day begins, banks, funds and corporates enter the market together, and price can move from quiet to decisive within minutes.",
    paragraphs: [
      "London is the largest foreign exchange centre in the world, with around 38% of global turnover traded in the United Kingdom according to the Bank for International Settlements 2025 survey. That depth of participation is why so many traders build their daily routine around this session.",
      "At Trade With King, the London session is taught as a structured routine instead of a guessing game: understanding what the market did before the open, how price reacts as Europe arrives, and where patient, rules-based setups may form.",
      "Every lesson comes back to the same foundation. Define your risk first, respect your plan, and let discipline lead.",
    ],
    facts: [["Typical hours", "Roughly 08:00 to 17:00 London time"], ["Global FX turnover", "About 38% is traded in the UK"], ["Overlap", "Shares the afternoon with New York"]],
    learn: ["How price behaves around the London open", "Where high-probability setups can appear", "How to frame risk before every trade", "How London connects with the Asian and New York sessions"],
  },
  newyork: {
    title: "NYSE Open", image: "/newyork-hero.jpg", pos: "center 40%", alt: "New York skyline glowing at sunset",
    lead: "When New York opens, the world's largest economy takes the stage. Liquidity deepens, scheduled data arrives, and volatility often rises as traders react to the news of the day.",
    paragraphs: [
      "The New York session runs alongside the opening of the New York Stock Exchange, whose core trading hours are 9:30 a.m. to 4:00 p.m. Eastern Time. Major US economic reports, such as employment and inflation figures, are typically released at 8:30 a.m., shortly before the equity open.",
      "The hours when London and New York are open together are generally among the most active of the trading day, with participants from both sides of the Atlantic in the market at once.",
      "Our approach to the NYSE open is built on structure and risk control, so that a fast market is met with a clear plan instead of emotion.",
    ],
    facts: [["NYSE core hours", "9:30 to 16:00 Eastern Time"], ["Key US data", "Typically released at 8:30 Eastern Time"], ["Overlap", "Roughly 8:00 to 12:00 Eastern with London"]],
    learn: ["How to read the volatility of the New York open", "How scheduled news can change market structure", "Planning entries, stop-loss and targets in fast markets", "Managing emotions when the market moves quickly"],
  },
  gold: {
    title: "Gold Trade", image: "/gold-hero.jpg", pos: "center 45%", alt: "Stacked bars of fine gold under warm light",
    lead: "Gold has been a store of value for centuries, and today it remains one of the most closely watched instruments in global trading.",
    paragraphs: [
      "Gold is quoted in US dollars per troy ounce (XAU/USD) and trades nearly 24 hours a day on weekdays across Asia, Europe and North America. London sets the benchmark LBMA Gold Price in auctions held at 10:30 and 15:00 London time.",
      "Its price is shaped by the US dollar, real interest rates, inflation expectations, central bank buying and geopolitical events, which is why gold rewards traders who read the wider market and not only the chart.",
      "We teach gold with the same discipline as every market: understand market structure, read price action, and manage risk before every decision.",
    ],
    facts: [["Quoted as", "XAU/USD, in US dollars per ounce"], ["Trading hours", "Nearly 24 hours, five days a week"], ["Benchmark", "LBMA Gold Price at 10:30 and 15:00 London time"]],
    learn: ["Gold market structure", "Price action around key levels", "How the US dollar and interest rates influence gold", "Disciplined, risk-first trade planning"],
  },
};

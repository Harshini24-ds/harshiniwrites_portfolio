/* ============================================================
   CONTENT DATA — Harshini's copywriting portfolio samples
   (headline samples, hooks, CTAs, landing pages, email, sales page)
   ============================================================ */

// Rotating hero role words
const ROTATOR_WORDS = ["Email Copy", "Landing Pages", "Sales Page Copy", "Ad Copy"];

// Before/after line edits for the hero signature widget (real, from HEADLINE_SAMPLES)
const EDIT_PAIRS = [
  { bad: "Our productivity app helps manage tasks.", good: "Stop managing tasks — let your system handle them." },
  { bad: "This sleep app improves your sleep quality.", good: "Wind down with less noise. Wake up feeling more rested." },
  { bad: "Email automation tool for sending emails automatically.", good: "Set the reminders. Let the system send automatically." },
  { bad: "Comfortable sanitary pads available now.", good: "Stay comfortable without constantly checking." },
  { bad: "Online course to learn copywriting skills.", good: "Turn skills into income — not just knowledge." },
  { bad: "Fitness app for tracking workouts.", good: "Track workouts automatically. Focus on progress." },
  { bad: "Resume builder tool for creating resumes.", good: "Build an ATS-friendly resume without starting from scratch." },
  { bad: "Noise cancelling headphones for better sound.", good: "Cut out the outside noise. Stay with your sound." },
  { bad: "Skincare product for healthy skin.", good: "A gentler approach to skincare, without the harsh feel." }
];

// Headline collection (bad -> good, from HEADLINE_SAMPLES.pdf)
const HEADLINES = EDIT_PAIRS;

// Hook collection (from HOOKS_SAMPLES.pdf) — top-5 marked
const HOOKS = {
  "Email Automation Tool": [
    { text: "Still managing emails manually? There’s a smarter way.", best: true },
    { text: "Spending hours sending emails one by one?", best: true },
    { text: "Need personalized emails without sending each one manually?", best: true },
    { text: "What if tracking your email performance took less effort?", best: true },
    { text: "Still overthinking when to schedule every email?", best: true },
    { text: "Tired of writing and fixing email automation?" },
    { text: "Set the reminder. Let the emails send themselves." },
    { text: "A user signs up. The email goes out automatically." },
    { text: "Tired of tracking email stats manually?" }
  ],
  "Period Care Product": [
    { text: "Tired of checking for leaks throughout the day?", best: true },
    { text: "Tired of period products that feel thick and noticeable?", best: true },
    { text: "Looking for a pad you barely notice you’re wearing?", best: true },
    { text: "Prefer period care without heavy fragrance?", best: true },
    { text: "Never sure which pad size to choose?", best: true },
    { text: "Looking for more comfort during your period?" },
    { text: "Less bulk. More comfort. More confidence." },
    { text: "Checking for leaks at 2 a.m.?" },
    { text: "Need more options when it comes to pad size?" }
  ]
};

// CTA collection (from CTA_WRITING.pdf)
const CTAS = {
  soft: [
    "Get the details",
    "Take a closer look",
    "See how it works",
    "Explore the features",
    "See what’s included",
    "Learn more",
    "See the benefits",
    "Find out if it fits",
    "Preview the offer",
    "Explore your options"
  ],
  direct: [
    "Start your free trial",
    "Claim your offer",
    "Sign up today",
    "Book your spot",
    "Get started",
    "Download now",
    "Reserve your seat",
    "Join today",
    "Shop now",
    "Start now"
  ]
};

// Featured project case studies (from Landing_Pages, Email, FB_IG_Ads, SALES_PAGE)
const PROJECTS = [
  {
    id: "email-automation-lp",
    tag: "Landing Page",
    category: "Landing Page Copy",
    title: "Email Automation Landing Page",
    desc: "A product landing page for an email automation tool, built to turn manual-email frustration into free trial signups.",
    goal: "Increase free trial signups",
    audience: "Small business owners",
    framework: "Problem → Solution → Benefits → CTA",
    challenge: "The raw draft explained the tool's features but never named the reader's actual frustration — repetitive sending, inconsistent timing, and time lost to routine work. It read like a spec sheet, not a pitch.",
    solution: "Rebuilt around the pain first: still sending emails manually and spending too much time on repetitive work. Only after that does the tool appear as the smarter way, followed by clear benefits and one strong CTA.",
    skills: ["Landing page structure", "Problem framing", "Benefit writing", "Form microcopy"],
    sample: "HERO\nStill sending emails manually every day?\nSave time and stay consistent with automated emails.\nSet them up once — let automation handle the rest.\n→ Start Free Trial\n\nBENEFITS\n✔ Automate repetitive emails — no more manual sending\n✔ Send at the right time — even when you're busy\n✔ Personalize emails easily — without starting from scratch\n✔ Simple setup — no coding required\n\nCTA\nStop spending time on repetitive emails. Let automation handle the routine.\n→ Start Your Free Trial"
  },
  {
    id: "welcome-email",
    tag: "Email",
    category: "Email Copywriting",
    title: "Welcome Email",
    desc: "A first-touch email for a copywriting brand, designed to make a new subscriber feel seen before asking anything of them.",
    goal: "Build trust",
    audience: "New subscribers, curious about copywriting",
    framework: "Welcome → Expectations → CTA",
    challenge: "The first draft was warm but rambling — the actual next step got buried under the backstory.",
    solution: "Kept the warmth, tightened the structure: acknowledge why they're here, introduce what they'll learn, then one clear CTA to start.",
    skills: ["Tone of voice", "Trust-building copy", "Email structure"],
    sample: "Subject: Welcome to Copytweet ✨\n\nHi [Name],\n\nWelcome to Copytweet! I'm really glad you're here.\n\nIf you're here, you're probably curious about copywriting and ready to explore it further.\n\nI'm Harshini — and I'll be here to help you grow, learn, and improve step by step.\n\nHere you'll learn how to write ads, sales pages, landing pages, and emails.\n\n→ Start Learning"
  },
  {
    id: "email-sequence",
    tag: "Email",
    category: "Email Copywriting",
    title: "3-Part Email Sequence",
    desc: "A lead-nurturing sequence for a copywriting course, moving a subscriber from cold interest to a first purchase decision.",
    goal: "Lead nurturing",
    audience: "Aspiring copywriters unsure where to start",
    framework: "Value → Story → Offer",
    challenge: "Each email needed a distinct job — teach, connect, then sell — without repeating the same pitch three times.",
    solution: "Email 1 reframes what copywriting actually is (psychology, not typing speed). Email 2 earns trust with a personal story about staying connected to a passion. Email 3 makes the offer, with tiered pricing for people who've already tried the free content.",
    skills: ["Sequence architecture", "Storytelling", "Offer structuring"],
    sample: "EMAIL 1 — VALUE\nMost beginners think copywriting is about writing more. It's not — it's about understanding people.\nThe better you understand what people want, fear, and care about, the easier it becomes to write copy that connects.\n→ Take the next step\n\nEMAIL 2 — STORY\nI've always been interested in English — words, slogans, idioms, and the way a few lines can change how something feels. I chose a different path at first, but I stayed connected to what I enjoyed. Eventually, that led me to copywriting.\n\nEMAIL 3 — OFFER\nThat's why I created Copytweet — for people who want to learn copywriting but keep wondering where to begin.\nStart with the fundamentals, build the skills, and grow from there.\n→ Explore Copytweet"
  },
  {
    id: "social-scheduler-ads",
    tag: "Ads",
    category: "Ad Copy",
    title: "Social Media Scheduler Ads",
    desc: "Ad copy for a social media scheduling tool, aimed at creators tired of manual posting.",
    goal: "Increase free trial signups",
    audience: "Content creators and small social accounts",
    framework: "Hook → Body → CTA",
    challenge: "The first hook (\"here's an easy way to schedule\") stated a fact instead of naming a frustration.",
    solution: "Rewrote the hook to open with the actual daily annoyance, then let the two clearest benefits — time saved and never missing a post — carry the body.",
    skills: ["Short-form ad copy", "Hook writing", "Feed-native tone"],
    sample: "Hook: Tired of scheduling posts every day?\nHere's an easier way.\n\nBody: Our social media scheduler —\n– Less time spent on manual scheduling\n– Smart reminders so you stay on track\n\nCTA: Start your 5-day free trial."
  },
  {
    id: "data-science-training-ad",
    tag: "Ads",
    category: "Ad Copy",
    title: "Data Science Training Ad",
    desc: "Ad copy for a data science training program, targeting learners stuck in theory-only courses.",
    goal: "Increase enrollments",
    audience: "Self-taught learners stuck at the theory stage",
    framework: "Hook → Body → CTA",
    challenge: "The original draft read as a list of features (\"best way to enhance yourself\") without a clear reader pain to open with.",
    solution: "Opened with the specific stuck point — video-only learning, no practical experience — before positioning the training as the fix, closing with urgency around limited slots.",
    skills: ["Pain-point research", "Feature-to-benefit translation", "Urgency CTAs"],
    sample: "Hook: Still learning data science through videos but getting little practical experience?\n\nBody: Take your learning beyond theory with training designed to help you build practical data skills.\n– Apply what you learn\n– Build hands-on experience\n– Grow confidence with in-demand skills\n\nCTA: Limited slots — secure your seat and start building practical experience."
  },
  {
    id: "hustlehub-sales-page",
    tag: "Sales Page",
    category: "Sales Page Copy",
    title: "HustleHub Sales Page",
    featured: true,
    desc: "A full sales page for HustleHub, a SaaS tool that helps student freelancers manage clients, deadlines, and payments in one place. The strongest piece in this portfolio — built on a complete Problem–Agitate–Solution–Benefits–Offer–CTA structure.",
    goal: "Drive student sign-ups for a free trial",
    audience: "College students juggling freelance work, clients, and coursework",
    framework: "Problem → Agitate → Solution → Benefits → Offer → CTA",
    challenge: "The raw notes had every idea in them — payments, auto-emails, a chat assistant — but no order, and no acknowledgment of how overwhelming juggling multiple apps actually feels.",
    solution: "Structured the whole page around one throughline: scattered tools create scattered results. Problem names the exact pain (missed deadlines, lost clients, burnout). Agitate shows what stays broken if nothing changes. Solution introduces HustleHub as one dashboard, not another app to manage. Benefits translate each feature into a felt outcome. A student-only free offer closes with a clear, low-friction CTA.",
    skills: ["Full sales page architecture", "Agitation writing", "Risk reversal", "Offer design"],
    sample: "HERO\nStill managing your freelance work across multiple apps?\nBring your tasks, clients, payments, and follow-ups together in one place.\n→ Meet HustleHub — start free today.\n\nPROBLEM\nMissing deadlines. Losing clients. Burnout. Falling behind in college.\nYou're trying hard — but hard work alone doesn't fix a messy system.\n\nAGITATE\nThe more scattered your tools are, the easier it becomes to miss tasks, deadlines, and opportunities. The problem isn't effort — it's having everything spread across different places.\n\nSOLUTION\nOne login. One dashboard. One system — tasks, clients, payments, automated emails, and a smart assistant, all in HustleHub.\n\nOFFER\nFree for students with a valid student ID. No long-term commitment.\n\nCTA\nKeep your freelance work organized without letting college fall behind.\n→ Start Free"
  },
  {
    id: "copy-elements",
    tag: "Collection",
    category: "Copy Elements",
    title: "Headlines, Hooks & CTAs",
    desc: "A collection of short-form copy elements showing how the same message changes depending on the first line, the angle, and the action you want the reader to take.",
    goal: "Strengthen first impressions and next-step clarity",
    audience: "Varies by product and funnel stage",
    framework: "Headline → Hook → CTA",
    challenge: "Short copy has very little room to work. Each line has to be clear enough to understand quickly while still giving the reader a reason to keep going.",
    solution: "Built the collection around three jobs: headlines lead with the outcome, hooks open on a clear tension or pain point, and CTAs match the reader's level of intent.",
    skills: ["Headline writing", "Hook writing", "CTA writing", "Short-form editing"],
    sample: null,
    isGallery: "copy-elements"
  }
];

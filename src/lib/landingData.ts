export interface BentoProblem {
  id: string;
  title: string;
  stat: string;
  statLabel: string;
  badge: string;
  badgeColor: string;
  badgeBg: string;
  cardBg: string;
  description: string;
  bullets: string[];
  visualType: "chart" | "timer" | "dropoff" | "stack";
  ctaText: string;
}

export interface TwoDirectionFeature {
  id: string;
  title: string;
  description: string;
  category: "reach" | "logic" | "security" | "analytics";
  iconName: string;
  avatarBg: string;
}

export interface ThreeStepItem {
  step: string;
  title: string;
  description: string;
  bgClass: string;
  borderColor: string;
  badgeText: string;
  iconType: "account" | "campaign" | "revenue";
}

export interface ComparisonRow {
  feature: string;
  audienceOs: { text: string; status: "yes" | "no" | "partial" };
  coldOutreachBots: { text: string; status: "yes" | "no" | "partial" };
  manualDMs: { text: string; status: "yes" | "no" | "partial" };
  genericAiTools: { text: string; status: "yes" | "no" | "partial" };
}

export interface FunnelStep {
  id: number;
  stepNumber: string;
  badge: string;
  badgeTone: string;
  title: string;
  tagline: string;
  shortDescription: string;
  bullets: Array<{ title: string; desc: string }>;
  metricHighlight: {
    label: string;
    value: string;
    trend: string;
  };
  visualStage: {
    name: string;
    subtext: string;
    accentColor: string;
    bgSubtle: string;
    borderAccent: string;
    conversionRate: string;
    activeNodes: number;
    layerDepth: string;
  };
}

export const FUNNEL_STEPS: FunnelStep[] = [
  {
    id: 1,
    stepNumber: "01",
    badge: "BORROWED REACH ENGINE",
    badgeTone: "indigo",
    title: "Borrow Audience Authority",
    tagline: "Engage where your ideal enterprise buyers are already reading.",
    shortDescription: "Mastreach brings your saved knowledge into the LinkedIn comments you write.",
    bullets: [
      { title: "Creator Radar", desc: "Monitors 50-250 verified high-reach industry authorities." },
      { title: "Golden 15m Window", desc: "Alerts you within minutes of publication for maximum visibility." },
      { title: "Peer-Level Insight", desc: "Drafts contrarian, data-driven frameworks in your voice." },
    ],
    metricHighlight: {
      label: "Reach Multiplier",
      value: "14.2x Impressions",
      trend: "+340%",
    },
    visualStage: {
      name: "Top-of-Feed Authority Engine",
      subtext: "Capturing 2nd-degree impressions from active creator discussions",
      accentColor: "#001AD3",
      bgSubtle: "#E0F3FB",
      borderAccent: "#B0E1F4",
      conversionRate: "63% View Velocity",
      activeNodes: 142,
      layerDepth: "Layer 01: Inbound Discovery",
    },
  },
  {
    id: 2,
    stepNumber: "02",
    badge: "CONTEXT AI DRAFTING",
    badgeTone: "terracotta",
    title: "Draft High-Signal Peer Commentary",
    tagline: "Never sound like a generic bot or sycophant.",
    shortDescription: "Our fine-tuned LLM engine synthesizes your past writings and frameworks to deliver incisive perspectives that earn top comment spots.",
    bullets: [
      { title: "Operator Presets", desc: "Choose between Contrarian, Analytical, Framework, or Case Study styles." },
      { title: "1-Click Dispatch", desc: "Review, refine, and publish from your daily action feed." },
      { title: "Safety Guardrails", desc: "Dedicated cloud IP proxies ensure 100% LinkedIn safety." },
    ],
    metricHighlight: {
      label: "Comment Upvote Rate",
      value: "4.8x Top Badge",
      trend: "+210%",
    },
    visualStage: {
      name: "Authentic Voice Generation",
      subtext: "Synthesizing deep operator frameworks with zero generic fluff",
      accentColor: "#FFF480",
      bgSubtle: "#FFF480",
      borderAccent: "#FFF8AD",
      conversionRate: "28.4% Profile Clickthrough",
      activeNodes: 89,
      layerDepth: "Layer 02: Authority Amplification",
    },
  },
  {
    id: 3,
    stepNumber: "03",
    badge: "INTENT SCORING & CRM",
    badgeTone: "emerald",
    title: "Capture & Qualify Warm Leads",
    tagline: "Identify prospect buying intent before sliding into DMs.",
    shortDescription: "Mastreach drafts thoughtful replies using your voice, your knowledge base, and the current post context.",
    bullets: [
      { title: "Intent Signals", desc: "Scores profile views, comment likes, and title fit." },
      { title: "Prospect Dossier", desc: "Auto-summarizes recent funding, posts, and challenges." },
      { title: "CRM Sync", desc: "Direct handoff to HubSpot, Salesforce, or Slack." },
    ],
    metricHighlight: {
      label: "Warm Reply Rate",
      value: "17% Warm Inbound",
      trend: "4.2x vs Cold Spam",
    },
    visualStage: {
      name: "Conversational Intent Pipeline",
      subtext: "Keeping useful context close to your writing",
      accentColor: "#D2C5FA",
      bgSubtle: "#D2C5FA",
      borderAccent: "#EBE4FD",
      conversionRate: "18.2% Call Booking Rate",
      activeNodes: 45,
      layerDepth: "Layer 03: Opportunity Qualification",
    },
  },
  {
    id: 4,
    stepNumber: "04",
    badge: "REVENUE ACCELERATOR",
    badgeTone: "amber",
    title: "Close $5k–$20k Advisory Retainers",
    tagline: "Turn relationship momentum into predictable recurring revenue.",
    shortDescription: "Conduct discovery calls with well-prepared dossiers and close high-margin consulting contracts with inbound-warmed leaders.",
    bullets: [
      { title: "Meeting Gateway", desc: "Frictionless calendar scheduling directly in conversation." },
      { title: "Deal Velocity", desc: "Shortens enterprise sales cycles from 60 days to 14 days." },
      { title: "Agency Syndicate", desc: "Scale across 10+ profiles from one command center." },
    ],
    metricHighlight: {
      label: "Pipeline Added",
      value: "₹24L ($30k)/Mo",
      trend: "3.2x ROI",
    },
    visualStage: {
      name: "Closed Retainer Engine",
      subtext: "Saving useful pages for future grounding",
      accentColor: "#FECEBF",
      bgSubtle: "#FECEBF",
      borderAccent: "#FDC4B3",
      conversionRate: "34.6% Proposal Close Rate",
      activeNodes: 18,
      layerDepth: "Layer 04: Retainer Realization",
    },
  },
];


export interface StatMetric {
  value: string;
  prefix?: string;
  suffix?: string;
  label: string;
  subtext: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  sizeInfo: string;
  verifiedMetric: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaVariant: "primary" | "secondary" | "outline";
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const HERO_DATA = {
  announcementText: "Mastreach Assistant: thoughtful LinkedIn comments and a knowledge base for the whole web.",
  announcementLinkText: "See how it works »",
  announcementLinkUrl: "#",
  badge: "⚡ YOUR VOICE, GROUNDED IN YOUR KNOWLEDGE",
  headlineMain: "Write with",
  headlineHighlight: "context",
  subheadline:
    "Mastreach Assistant helps you write thoughtful comments on LinkedIn and save valuable articles across the web directly into your knowledge base.",
  primaryCta: "Get Mastreach Assistant",
  secondaryCta: "See how it works",
  demoTriggerTitle: "See Mastreach in action",
  demoTriggerSubtitle: "Draft a comment or save an article in seconds",
  socialProofCount: "Your knowledge, wherever you browse",
  connectionLift: "Grounded in your voice",
  replyLift: "Always review before posting",
  revenueMultiplier: "Your context",
};

export const PARTNER_LOGOS = [
  { name: "BambooHR", category: "HR & Talent" },
  { name: "Paddle", category: "SaaS Billing" },
  { name: "ClickUp", category: "Productivity" },
  { name: "Intercom", category: "Customer Messaging" },
  { name: "Pipedrive", category: "CRM" },
  { name: "Gong", category: "Revenue Intelligence" },
  { name: "Webflow", category: "Design Tech" },
  { name: "HubSpot", category: "Inbound Marketing" },
];

export const BENTO_PROBLEMS: BentoProblem[] = [
  {
    id: "recruiter-velocity",
    title: "Draft thoughtful LinkedIn comments",
    stat: "1",
    statLabel: "small assistant inside every comment box",
    badge: "LinkedIn Comment Assistant",
    badgeColor: "#2F3206",
    badgeBg: "#F2EFE8",
    cardBg: "#F9FBDF", // Lemon pastel
    description: "Open Mastreach from any LinkedIn comment or reply box to get a draft written in your voice and grounded in your knowledge base and the post context.",
    bullets: [
      "Review the draft before it reaches LinkedIn",
      "Refine it with custom instructions",
      "Choose an intent stance: Agree, Push back, Ask, Story, or Add",
    ],
    visualType: "chart",
    ctaText: "Write a comment",
  },
  {
    id: "agency-growth",
    title: "Save the articles worth remembering",
    stat: "2",
    statLabel: "ways to build a useful knowledge base",
    badge: "Save Page",
    badgeColor: "#9A2E12",
    badgeBg: "#FAEAE8",
    cardBg: "#FECEBF", // Peach Coral pastel
    description: "Click the Mastreach icon in your browser toolbar on any article or blog post. The Save Page tab opens with the extracted title, author, and preview ready to save.",
    bullets: [
      "Add custom notes and tags",
      "Save directly into your knowledge base",
      "Use saved context for future comment drafting",
    ],
    visualType: "timer",
    ctaText: "Save a page",
  },
  {
    id: "founder-personal-brand",
    title: "Keep every draft grounded in context",
    stat: "5",
    statLabel: "intent stances for shaping your reply",
    badge: "Your voice, your choice",
    badgeColor: "#0F4660",
    badgeBg: "#DFEBFE",
    cardBg: "#E0F3FB", // Ice Blue pastel
    description: "Mastreach uses your saved knowledge and the current post to help you write something specific, useful, and recognizably yours.",
    bullets: [
      "Agree, Push back, Ask, Story, or Add",
      "Custom instructions for every draft",
      "Edit freely before inserting into LinkedIn",
    ],
    visualType: "dropoff",
    ctaText: "Shape your voice",
  },
  {
    id: "enterprise-syndicate",
    title: "You always control what gets posted",
    stat: "0",
    statLabel: "automatic LinkedIn posts",
    badge: "Human-in-the-loop by design",
    badgeColor: "#4B2896",
    badgeBg: "#EBE4FD",
    cardBg: "#D2C5FA", // Lilac pastel
    description: "Mastreach never posts automatically. You review, edit, and click LinkedIn’s own Post button yourself.",
    bullets: [
      "No automatic posting",
      "Your review before every insert",
      "LinkedIn’s own Post button remains the final step",
    ],
    visualType: "stack",
    ctaText: "Learn about control",
  },
];

export const TWO_DIRECTION_FEATURES_ROW1: TwoDirectionFeature[] = [
  {
    id: "f1",
    title: "Campaign A/B Testing",
    description: "Compare multiple contextual comment angles and message hooks to see what drives discovery calls.",
    category: "analytics",
    iconName: "Split",
    avatarBg: "#B0E1F4",
  },
  {
    id: "f2",
    title: "Webhook Integrations",
    description: "Instantly stream qualified lead responses to HubSpot, Slack, Pipedrive, or custom webhooks.",
    category: "reach",
    iconName: "Webhook",
    avatarBg: "#B0E1F4",
  },
  {
    id: "f3",
    title: "Dedicated Success Team",
    description: "Expert onboarding managers to review your profile architecture and refine your messaging.",
    category: "reach",
    iconName: "Users",
    avatarBg: "#B0E1F4",
  },
  {
    id: "f4",
    title: "Native CRM Two-Way Sync",
    description: "Automatically log conversation history, intent sentiment, and deal stages directly in your CRM.",
    category: "logic",
    iconName: "Database",
    avatarBg: "#B0E1F4",
  },
  {
    id: "f5",
    title: "Specialized Agency Support",
    description: "Round-the-clock live chat with sub-5 minute response times and custom white-label setups.",
    category: "reach",
    iconName: "LifeBuoy",
    avatarBg: "#B0E1F4",
  },
  {
    id: "f6",
    title: "Pre-Call Intelligence Dossier",
    description: "Generates a 1-page executive brief covering company funding, recent posts, and key challenges.",
    category: "analytics",
    iconName: "FileText",
    avatarBg: "#B0E1F4",
  },
];

export const TWO_DIRECTION_FEATURES_ROW2: TwoDirectionFeature[] = [
  {
    id: "f7",
    title: "Campaign Priority Routing",
    description: "Manage multiple connected profiles from a single high-density command cockpit.",
    category: "logic",
    iconName: "Layers",
    avatarBg: "#D2C5FA",
  },
  {
    id: "f8",
    title: "11 Inbound Campaign Types",
    description: "Tailored campaign recipes for creator commenting, profile visitor nurturing, and event follow-up.",
    category: "reach",
    iconName: "Compass",
    avatarBg: "#D2C5FA",
  },
  {
    id: "f9",
    title: "Smart Visual Campaign Builder",
    description: "Drag-and-drop scenarios with 19 trigger actions and 11 real-time behavioral conditions.",
    category: "logic",
    iconName: "Workflow",
    avatarBg: "#D2C5FA",
  },
  {
    id: "f10",
    title: "Duplication Security Shield",
    description: "Auto-avoid duplicate connections & overlapping pitches across your entire firm.",
    category: "security",
    iconName: "ShieldCheck",
    avatarBg: "#D2C5FA",
  },
  {
    id: "f11",
    title: "Company & Lead Blacklist",
    description: "Exclude existing clients, competitors, and sensitive accounts with one click.",
    category: "security",
    iconName: "Ban",
    avatarBg: "#D2C5FA",
  },
  {
    id: "f12",
    title: "Global Smart Inbox",
    description: "Consolidate replies from all accounts into one unified inbox with tags, filters, and quick snippets.",
    category: "logic",
    iconName: "Inbox",
    avatarBg: "#D2C5FA",
  },
];

export const THREE_STEPS: ThreeStepItem[] = [
  {
    step: "Step 01",
    title: "Open a LinkedIn comment box",
    description: "Open the comment or reply box on any LinkedIn post. A small Mastreach button appears inside the box when you are ready to write.",
    bgClass: "bg-[#E0F3FB]",
    borderColor: "border-[#B0E1F4]",
    badgeText: "Works in LinkedIn",
    iconType: "account",
  },
  {
    step: "Step 02",
    title: "Draft in your voice",
    description: "Click Mastreach to open the side panel with a draft grounded in your knowledge base and the post context. Refine it with custom instructions or an intent stance.",
    bgClass: "bg-[#FFF480]",
    borderColor: "border-[#FFF8AD]",
    badgeText: "Grounded drafting",
    iconType: "campaign",
  },
  {
    step: "Step 03",
    title: "Review, then insert",
    description: "Choose Agree, Push back, Ask, Story, or Add, then click “Insert into LinkedIn”. Mastreach never posts automatically; you always review and click LinkedIn’s own Post button.",
    bgClass: "bg-[#D2C5FA]",
    borderColor: "border-[#EBE4FD]",
    badgeText: "You stay in control",
    iconType: "revenue",
  },
];

export const COUNTERS_DATA: StatMetric[] = [
  {
    prefix: ">",
    value: "15,000",
    label: "Active Users",
    subtext: "Readers, researchers & thoughtful writers",
  },
  {
    value: "2,500+",
    label: "Agencies & Firms",
    subtext: "Running client revenue syndicates",
  },
  {
    value: "63%",
    label: "Avg. Connection Rate",
    subtext: "4x higher than standard outreach",
  },
  {
    value: "17%",
    label: "Avg. Warm Reply Rate",
    subtext: "Industry benchmark is < 2%",
  },
  {
    value: "3x",
    label: "Revenue Growth Lift",
    subtext: "Saved pages and grounded drafts",
  },
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "Account Safety Architecture",
    audienceOs: { text: "✅ Dedicated country-based residential IP, human typing emulation, adaptive limits", status: "yes" },
    coldOutreachBots: { text: "❌ Browser-dependent extensions with high restriction rates", status: "no" },
    manualDMs: { text: "✅ Safe but physically capped at 10-15 messages/day", status: "partial" },
    genericAiTools: { text: "❌ Detectable spam copy triggering user spam flags", status: "no" },
  },
  {
    feature: "Campaign Logic Depth",
    audienceOs: { text: "✅ 19 actions, 11 behavioral conditions, dynamic sentiment branches", status: "yes" },
    coldOutreachBots: { text: "❌ Linear 3-step drip message spam", status: "no" },
    manualDMs: { text: "❌ Unorganized mental notes & sticky spreadsheets", status: "no" },
    genericAiTools: { text: "❌ Simple prompt generators with zero sequence logic", status: "no" },
  },
  {
    feature: "Signal-Based Intent Triggers",
    audienceOs: { text: "✅ Triggers on creator posts, profile views, comment likes, and job changes", status: "yes" },
    coldOutreachBots: { text: "❌ Cold scraping without real-time intent triggers", status: "no" },
    manualDMs: { text: "❌ Misses the golden 15-minute response window", status: "no" },
    genericAiTools: { text: "❌ No LinkedIn feed integration or event listeners", status: "no" },
  },
  {
    feature: "Multi-Account Agency Workspace",
    audienceOs: { text: "✅ Centralized multi-client management, global deduplication, unified inbox", status: "yes" },
    coldOutreachBots: { text: "❌ Locked behind $800+/mo enterprise tiers with poor UI", status: "no" },
    manualDMs: { text: "❌ Chaos switching between multiple browser profiles", status: "no" },
    genericAiTools: { text: "❌ Individual login only; zero team collaboration", status: "no" },
  },
  {
    feature: "Voice & Commentary Quality",
    audienceOs: { text: "✅ Fine-tuned on experienced operator frameworks & contrarian insights", status: "yes" },
    coldOutreachBots: { text: "❌ Cliché template placeholders ('Great post {first_name}!')", status: "no" },
    manualDMs: { text: "✅ High quality but 3+ hours of exhausting daily writing", status: "partial" },
    genericAiTools: { text: "❌ Robotic, generic ChatGPT output easily spotted by buyers", status: "no" },
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    quote: "Mastreach gives me a strong starting point without taking away my voice. I can review the draft, make it mine, and post it when it is ready.",
    author: "Hanna B.",
    role: "Head of Growth & Pipeline",
    company: "ScaleFlow Advisory",
    sizeInfo: "Mid-Market (50-200 emp.)",
    verifiedMetric: "₹24L Closed in 18 Days",
    rating: 5,
  },
  {
    id: "t2",
    quote: "I've been in B2B social selling for 6 years, and what stands out most is the human-level quality of the commentary. It doesn't sound like a bot. It drafts incisive perspectives that earn top comment spots consistently.",
    author: "Ian N.",
    role: "Managing Partner",
    company: "VentureCraft Capital",
    sizeInfo: "Boutique Advisory (10-50 emp.)",
    verifiedMetric: "6-8 Qualified Enterprise Calls / Wk",
    rating: 5,
  },
  {
    id: "t3",
    quote: "The Save Page flow makes it easy to keep the articles I want to remember, and that context is there when I need to write.",
    author: "Houston Golden",
    role: "Founder & CEO",
    company: "BAMF Agency",
    sizeInfo: "Top-Rated Growth Agency",
    verifiedMetric: "+380% Qualified Inbound Lift",
    rating: 5,
  },
  {
    id: "t4",
    quote: "The multi-account deduplication and global inbox are game changers for our 8 SDRs. We never step on each other's toes, and our client booked calls doubled in month one.",
    author: "Sarah Jenkins",
    role: "VP of Sales Development",
    company: "Apex Tech Advisors",
    sizeInfo: "Enterprise (200+ emp.)",
    verifiedMetric: "48 Qualified Meetings / Mo",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Growth",
    tagline: "For individuals who want thoughtful drafts grounded in their own knowledge.",
    priceMonthly: 99,
    priceAnnual: 79,
    badge: "SOLO PRACTITIONER",
    features: [
      "1 Dedicated LinkedIn Profile Engine",
      "Borrowed Reach Feed (Top 50 Creator Voices)",
      "Context AI Comment Drafting (300/mo)",
      "Inbound Relationship CRM Pipeline",
      "Warm Conversion Analytics & Metrics",
      "Dedicated Residential Cloud IP",
    ],
    notIncluded: [
      "Autonomous Intent Sentiment Scoring",
      "Pre-Call Dossier Intelligence",
      "Multi-Account Agency Syndicate",
    ],
    ctaText: "Start 7-Day Free Trial",
    ctaVariant: "outline",
  },
  {
    id: "pro",
    name: "Growth Accelerator",
    tagline: "For frequent writers who want more context at their fingertips.",
    priceMonthly: 249,
    priceAnnual: 199,
    badge: "⭐ MOST POPULAR FOR FOUNDERS",
    isPopular: true,
    features: [
      "3 Dedicated LinkedIn Profile Engines",
      "Full Borrowed Reach Feed (250+ Creator Voices)",
      "Unlimited High-Signal AI Comment Drafting",
      "Autonomous Intent Sentiment Scoring & Routing",
      "Integrated Inbound CRM with One-Click Handoff",
      "Pre-Call Prospect Intelligence Dossier Generator",
      "1-Click Calendar Routing & Meeting Gateway",
      "Priority Webhook & HubSpot / Slack Sync",
    ],
    ctaText: "Start 7-Day Free Trial",
    ctaVariant: "primary",
  },
  {
    id: "syndicate",
    name: "Enterprise Syndicate",
    tagline: "For growth advisory firms, venture syndicates, and executive teams.",
    priceMonthly: 699,
    priceAnnual: 549,
    badge: "TEAMS & AGENCIES",
    features: [
      "Unlimited LinkedIn Profile Engines",
      "Private Residential Cloud Proxies (Zero Ban Risk)",
      "Custom Fine-Tuned Authentic Voice Models",
      "White-Glove Pipeline Architecture Setup",
      "Global Team Deduplication Shield",
      "Dedicated Growth Strategist & Slack Channel",
      "Custom Webhooks & Two-Way CRM Sync",
      "Enterprise SLA & 99.9% Uptime Guarantee",
    ],
    ctaText: "Book an Advisory Demo",
    ctaVariant: "secondary",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Getting Started",
    question: "What does Mastreach Assistant do?",
    answer: "Mastreach helps you write thoughtful comments on LinkedIn and save valuable articles across the web directly into your knowledge base.",
  },
  {
    id: "faq-2",
    category: "LinkedIn",
    question: "How does it work on LinkedIn?",
    answer: "Open a comment or reply box on any LinkedIn post. Click the Mastreach button that appears inside the box to open the side panel, review the grounded draft, refine it if needed, and click “Insert into LinkedIn”.",
  },
  {
    id: "faq-3",
    category: "Human Control",
    question: "Does Mastreach post comments automatically?",
    answer: "No. It never posts automatically. You always review and edit the draft, then click LinkedIn’s own Post button yourself.",
  },
  {
    id: "faq-4",
    category: "Writing",
    question: "Can I guide the draft?",
    answer: "Yes. Add custom instructions or choose an intent stance: Agree, Push back, Ask, Story, or Add. The draft is grounded in your knowledge base and the post context.",
  },
  {
    id: "faq-5",
    category: "Save Page",
    question: "How does saving work across the web?",
    answer: "Click the Mastreach icon in your browser toolbar on an article or blog post. The Save Page tab opens with the extracted title, author, and preview. Add notes or tags, then save it directly to your knowledge base.",
  },
  {
    id: "faq-6",
    category: "Requirements",
    question: "What do I need to use Mastreach?",
    answer: "You need a Mastreach account token provided with your subscription. Enter it once in the extension settings to get started.",
  },
];

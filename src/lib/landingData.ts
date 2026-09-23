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
    shortDescription: "Audience OS tracks when top creator voices publish, positioning your profile at the top of comment sections with high-signal commentary.",
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
    shortDescription: "When decision-makers like your comments or visit your profile, Audience OS generates dossiers and cues natural conversation starters.",
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
      subtext: "Qualifying prospects into high-ticket pipeline stages",
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
      subtext: "Securing $5k–$20k advisory retainers on predictable cycles",
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
  announcementText: "The State of LinkedIn Inbound Outreach 2026: Benchmarks from 10k+ founder conversations show what converts.",
  announcementLinkText: "Read the report »",
  announcementLinkUrl: "#",
  badge: "⚡ #1 LINKEDIN HUMAN REVENUE & INBOUND FUNNEL ENGINE",
  headlineMain: "Turn LinkedIn connections into",
  headlineHighlight: "high-ticket advisory clients",
  subheadline:
    "The easiest way for founders, growth advisory firms, and recruiters to rapidly scale their inbound authority, draft authentic peer comments, and fill pipelines with $5k–$20k retainers.",
  primaryCta: "Start 7-Day Free Trial",
  secondaryCta: "Book a 15-Min Demo",
  demoTriggerTitle: "Try interactive demo",
  demoTriggerSubtitle: "See how Audience OS converts in real-time",
  socialProofCount: "15,000+ Founders & Agencies",
  connectionLift: "63% Avg. Connection Rate",
  replyLift: "17% Warm Reply Rate",
  revenueMultiplier: "3X Revenue Multiplier",
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
    title: "Scale talent acquisition & executive reach with ease",
    stat: "4.8x",
    statLabel: "faster candidate response rate via warm authority touchpoints",
    badge: "For Recruiters & Search Firms",
    badgeColor: "#2F3206",
    badgeBg: "#F2EFE8",
    cardBg: "#F9FBDF", // Lemon pastel
    description: "Increase hiring velocity with precise decision-maker filters and compliant sourcing. Engage across approved channels with authentic contextual commentary before sliding into DMs.",
    bullets: [
      "Target senior leaders when they're actively publishing insights",
      "Automated yet indistinguishable from high-touch personal outreach",
      "Zero account restriction risk with dedicated residential routing",
    ],
    visualType: "chart",
    ctaText: "Explore Recruiting Funnels",
  },
  {
    id: "agency-growth",
    title: "Double retainer close rates for your B2B advisory agency",
    stat: "₹24L+",
    statLabel: "average verified client pipeline per profile within 30 days",
    badge: "For Growth & Marketing Agencies",
    badgeColor: "#9A2E12",
    badgeBg: "#FAEAE8",
    cardBg: "#FECEBF", // Peach Coral pastel
    description: "Replace hours of manual prospecting with high-density feed monitoring. When prospects publish, contribute experienced commentary in the golden 15-minute window.",
    bullets: [
      "White-label multi-client workspace for managing 10+ founder profiles",
      "One unified inbox with conversation tags, notes, and CRM export",
      "Automated lead intent scoring that flags warm prospects instantly",
    ],
    visualType: "timer",
    ctaText: "Explore Agency Workspaces",
  },
  {
    id: "founder-personal-brand",
    title: "Turn silent profile visitors into signed consulting retainers",
    stat: "14.2%",
    statLabel: "profile visit-to-conversation conversion rate",
    badge: "For Solo Founders & Consultants",
    badgeColor: "#0F4660",
    badgeBg: "#DFEBFE",
    cardBg: "#E0F3FB", // Ice Blue pastel
    description: "Your personal profile shouldn't just be an online resume—it's a high-converting consultation landing page. Track visitor intent and initiate value-first conversations automatically.",
    bullets: [
      "Context AI that mirrors your exact consulting philosophy and tone",
      "Pre-call dossier generator that briefs you before every discovery call",
      "Seamless calendar integration with zero booking friction",
    ],
    visualType: "dropoff",
    ctaText: "Start Inbound Engine",
  },
  {
    id: "enterprise-syndicate",
    title: "Unified multi-account security with zero duplicate pitches",
    stat: "100%",
    statLabel: "account safety protection with dedicated cloud IP proxies",
    badge: "Enterprise Security Architecture",
    badgeColor: "#4B2896",
    badgeBg: "#EBE4FD",
    cardBg: "#D2C5FA", // Lilac pastel
    description: "Prevent multiple team members from contacting the same target executive. Centralized deduplication rules, company-level blacklists, and role-based permissions keep your firm pristine.",
    bullets: [
      "Global account deduplication across personal and company levels",
      "Granular role-based access for SDRs, account managers, and executives",
      "Native sync with HubSpot, Salesforce, Slack, and custom webhooks",
    ],
    visualType: "stack",
    ctaText: "View Security Specs",
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
    title: "Connect Your Profile & Feed",
    description: "Connect your LinkedIn profile in 60 seconds with safe, dedicated residential proxies. Select 10–20 top industry voices whose audiences match your ideal clients.",
    bgClass: "bg-[#E0F3FB]",
    borderColor: "border-[#B0E1F4]",
    badgeText: "Setup in 15 mins",
    iconType: "account",
  },
  {
    step: "Step 02",
    title: "Engage with High-Signal Insights",
    description: "Whenever key leaders publish, Audience OS drafts authentic, peer-level perspectives in your voice. Gain thousands of second-degree impressions without writing standalone posts.",
    bgClass: "bg-[#FFF480]",
    borderColor: "border-[#FFF8AD]",
    badgeText: "High-Signal AI",
    iconType: "campaign",
  },
  {
    step: "Step 03",
    title: "Convert Warm Inbounds into Retainers",
    description: "When prospects like or reply to your comments, smart intent scoring prompts conversational direct messages and friction-free discovery call bookings.",
    bgClass: "bg-[#D2C5FA]",
    borderColor: "border-[#EBE4FD]",
    badgeText: "Close $5k–$20k Deals",
    iconType: "revenue",
  },
];

export const COUNTERS_DATA: StatMetric[] = [
  {
    prefix: ">",
    value: "15,000",
    label: "Active Users",
    subtext: "Founders, recruiters & growth teams",
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
    subtext: "Attributed advisory retainers",
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
    quote: "As Head of Growth, I replaced 3 hours of exhausting cold outreach with Audience OS. Within 18 days, our team closed two ₹12L ($15k) advisory retainers with SaaS founders in Bengaluru and Singapore.",
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
    quote: "Nothing is safer and nothing is more effective than Audience OS. It transformed our pipeline from an unpredictable feast-or-famine into a predictable, high-margin revenue machine.",
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
    tagline: "For solo consultants and advisory founders building consistent warm pipeline.",
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
    tagline: "The complete automated revenue engine for scaling founders and agency leads.",
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
    category: "Safety & Account Protection",
    question: "What can I try during the free 7-day trial?",
    answer: "The 7-day free trial gives you full access to all Audience OS features without limitations. You can connect your profile, configure your borrowed reach creator feeds, experiment with AI comment generation, test lead intent scoring, and start booking discovery calls immediately.",
  },
  {
    id: "faq-2",
    category: "Billing & Subscriptions",
    question: "Will I be charged once I start a trial?",
    answer: "Absolutely not. We will only charge you if you decide to continue using Audience OS after completing your 7-day evaluation. You can cancel with a single click anytime in your settings.",
  },
  {
    id: "faq-3",
    category: "Safety & Account Protection",
    question: "Will this keep my LinkedIn profile safe from restrictions?",
    answer: "Yes, 100%. Unlike browser extensions that inject suspicious scripts into your local session, Audience OS runs entirely in a cloud architecture with dedicated country-based residential IP proxies, human typing delays, and warm-up algorithms that mirror human behavior.",
  },
  {
    id: "faq-4",
    category: "AI Authenticity",
    question: "How does the AI create comments that feel genuinely human?",
    answer: "Audience OS indexes your past writings, industry frameworks, and consulting philosophies. Instead of cliché filler like 'Great post!', it synthesizes contrarian, high-signal insights that position you as an experienced peer in the creator's comment section.",
  },
  {
    id: "faq-5",
    category: "Agencies & Multi-Client",
    question: "Can I use this as a White-Label solution for my agency?",
    answer: "Yes! Our Enterprise Syndicate tier includes white-label agency branding, multi-client workspace separation, centralized team billing, and role-based permissions so your SDRs can manage outreach seamlessly across client profiles.",
  },
  {
    id: "faq-6",
    category: "Workflow & Daily Commitment",
    question: "How much daily time is required from me?",
    answer: "Only 10–15 minutes per day. You review your curated 'Today' feed, approve high-signal insights, respond to warm inbound DMs flagged by the intent scoring engine, and let the system handle tracking and CRM sync.",
  },
];

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
  announcementText: "MASTREACH — YOUR LINKEDIN, FINALLY CONNECTED",
  announcementLinkText: "See how it works →",
  announcementLinkUrl: "#three-steps",
  badge: "⚡ WATCH. UNDERSTAND. CREATE. MEASURE.",
  headlineMain: "Turn LinkedIn activity into",
  headlineHighlight: "meaningful engagement.",
  subheadline:
    "Mastreach connects your LinkedIn activity, thoughtful responses, knowledge, content creation, scheduling, and engagement insights in one intelligent system.",
  primaryCta: "Get Started",
  secondaryCta: "See how it works",
  demoTriggerTitle: "See Mastreach in action",
  demoTriggerSubtitle: "Watch, understand, respond, capture, create, and measure",
  socialProofCount: "Everything in one system",
  connectionLift: "LinkedIn activity in one place",
  replyLift: "Thoughtful responses in your voice",
  revenueMultiplier: "You stay in control",
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
    title: "Turn any LinkedIn post into a thoughtful response that sounds like you",
    stat: "1",
    statLabel: "grounded in your voice, intent, and knowledge",
    badge: "LinkedIn Commenting",
    badgeColor: "#2F3206",
    badgeBg: "#F2EFE8",
    cardBg: "#F9FBDF", // Lemon pastel
    description: "Mastreach reads and analyzes the LinkedIn post you want to respond to, then creates a thoughtful response based on the post context, your chosen intent, and the way you want to express yourself.",
    bullets: [
      "Choose your intent: Agree, Push back, Ask, Story, or Add",
      "Guide the response with custom instructions",
      "Edit and review before inserting it into LinkedIn",
    ],
    visualType: "chart",
    ctaText: "Write a comment",
  },
  {
    id: "agency-growth",
    title: "Capture the knowledge worth keeping",
    stat: "2",
    statLabel: "ways to build a useful knowledge base",
    badge: "Save Page",
    badgeColor: "#9A2E12",
    badgeBg: "#FAEAE8",
    cardBg: "#FECEBF", // Peach Coral pastel
    description: "Save valuable content from across the web—including articles, blog posts, YouTube videos, and LinkedIn posts—directly into your Mastreach knowledge base. Reuse that knowledge when creating thoughtful LinkedIn posts and comments.",
    bullets: [
      "Save articles, web pages, YouTube videos, and LinkedIn posts",
      "Add custom notes and tags to organize your knowledge",
      "Use your saved knowledge to create better LinkedIn posts and comments",
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
    description: "Mastreach reads and analyzes the LinkedIn post you want to respond to, understands its context, and creates a thoughtful response based on your voice and chosen intent.",
    bullets: [
      "Choose your intent: Agree, Push back, Ask, Story, or Add",
      "Guide the response with custom instructions",
      "Edit and review freely before inserting into LinkedIn",
    ],
    visualType: "dropoff",
    ctaText: "Shape your voice",
  },
  {
    id: "enterprise-syndicate",
    title: "Create smarter. Post at the right time.",
    stat: "0",
    statLabel: "automatic LinkedIn posts",
    badge: "Human-in-the-loop by design",
    badgeColor: "#4B2896",
    badgeBg: "#EBE4FD",
    cardBg: "#D2C5FA", // Lilac pastel
    description: "Mastreach helps you create and refine content, generate visuals based on your post, and find the best time to publish based on your audience and engagement patterns.",
    bullets: [
      "Create and refine content based on your post context",
      "Generate visuals tailored to your post",
      "Find the best time to post for stronger engagement",
      "Schedule posts for the time that works best",
      "Review and control your content before it goes live",
    ],
    visualType: "stack",
    ctaText: "Learn about control",
  },
];

export const TWO_DIRECTION_FEATURES_ROW1: TwoDirectionFeature[] = [
  {
    id: "l1",
    title: "LinkedIn Post",
    description: "New post detected in your network",
    category: "reach",
    iconName: "Activity",
    avatarBg: "#E0F3FB",
  },
  {
    id: "l2",
    title: "Comment",
    description: "New comment detected from a relevant profile",
    category: "reach",
    iconName: "MessageSquare",
    avatarBg: "#E0F3FB",
  },
  {
    id: "l3",
    title: "Reply",
    description: "New reply detected on your thread",
    category: "logic",
    iconName: "Reply",
    avatarBg: "#E0F3FB",
  },
  {
    id: "l4",
    title: "Message",
    description: "New conversation waiting in your inbox",
    category: "logic",
    iconName: "Inbox",
    avatarBg: "#E0F3FB",
  },
  {
    id: "l5",
    title: "Engagement",
    description: "+24 reactions and counting",
    category: "analytics",
    iconName: "TrendingUp",
    avatarBg: "#E0F3FB",
  },
  {
    id: "l6",
    title: "Post Activity",
    description: "Engagement is trending upward",
    category: "analytics",
    iconName: "Activity",
    avatarBg: "#E0F3FB",
  },
  {
    id: "l7",
    title: "New Interaction",
    description: "3 new interactions this hour",
    category: "reach",
    iconName: "Sparkles",
    avatarBg: "#E0F3FB",
  },
];

export const TWO_DIRECTION_FEATURES_ROW2: TwoDirectionFeature[] = [
  {
    id: "c1",
    title: "Post Analyzed",
    description: "Context understood from the thread",
    category: "logic",
    iconName: "FileText",
    avatarBg: "#FFF3D6",
  },
  {
    id: "c2",
    title: "Intent",
    description: "Agree with the point and move forward",
    category: "analytics",
    iconName: "Check",
    avatarBg: "#FFF3D6",
  },
  {
    id: "c3",
    title: "Intent",
    description: "Push back with context and clarity",
    category: "analytics",
    iconName: "ArrowRight",
    avatarBg: "#FFF3D6",
  },
  {
    id: "c4",
    title: "Intent",
    description: "Ask a useful follow-up question",
    category: "analytics",
    iconName: "HelpCircle",
    avatarBg: "#FFF3D6",
  },
  {
    id: "c5",
    title: "Intent",
    description: "Story adds a personal perspective",
    category: "analytics",
    iconName: "BookOpen",
    avatarBg: "#FFF3D6",
  },
  {
    id: "c6",
    title: "Draft Generated",
    description: "Response ready to refine",
    category: "logic",
    iconName: "PenTool",
    avatarBg: "#FFF3D6",
  },
  {
    id: "c7",
    title: "Voice",
    description: "Your writing style is applied",
    category: "reach",
    iconName: "Sparkles",
    avatarBg: "#FFF3D6",
  },
  {
    id: "c8",
    title: "Review",
    description: "Ready to edit before you post",
    category: "logic",
    iconName: "ShieldCheck",
    avatarBg: "#FFF3D6",
  },
  {
    id: "c9",
    title: "LinkedIn",
    description: "Insert response into your comment box",
    category: "reach",
    iconName: "Send",
    avatarBg: "#FFF3D6",
  },
];

export const TWO_DIRECTION_FEATURES_ROW3: TwoDirectionFeature[] = [
  {
    id: "k1",
    title: "LinkedIn Post",
    description: "Saved to your knowledge base",
    category: "reach",
    iconName: "Bookmark",
    avatarBg: "#E7F7EC",
  },
  {
    id: "k2",
    title: "Article",
    description: "Insight captured and organized",
    category: "logic",
    iconName: "BookOpen",
    avatarBg: "#E7F7EC",
  },
  {
    id: "k3",
    title: "Web Page",
    description: "Saved as a reusable source",
    category: "reach",
    iconName: "Globe",
    avatarBg: "#E7F7EC",
  },
  {
    id: "k4",
    title: "YouTube",
    description: "Video saved for future reference",
    category: "analytics",
    iconName: "Play",
    avatarBg: "#E7F7EC",
  },
  {
    id: "k5",
    title: "Notes",
    description: "3 custom notes attached",
    category: "logic",
    iconName: "NotebookText",
    avatarBg: "#E7F7EC",
  },
  {
    id: "k6",
    title: "Tags",
    description: "AI · React · Career",
    category: "reach",
    iconName: "Tag",
    avatarBg: "#E7F7EC",
  },
  {
    id: "k7",
    title: "Knowledge Base",
    description: "New item added to your memory",
    category: "logic",
    iconName: "Database",
    avatarBg: "#E7F7EC",
  },
  {
    id: "k8",
    title: "Source",
    description: "LinkedIn reference saved",
    category: "reach",
    iconName: "Link2",
    avatarBg: "#E7F7EC",
  },
];

export const TWO_DIRECTION_FEATURES_ROW4: TwoDirectionFeature[] = [
  {
    id: "e1",
    title: "Comment Performance",
    description: "Engagement is trending up this week",
    category: "analytics",
    iconName: "TrendingUp",
    avatarBg: "#FDE9D9",
  },
  {
    id: "e2",
    title: "Post Engagement",
    description: "+28% from your recent activity",
    category: "analytics",
    iconName: "BarChart3",
    avatarBg: "#FDE9D9",
  },
  {
    id: "e3",
    title: "Top Comment",
    description: "High engagement and strong response",
    category: "reach",
    iconName: "Star",
    avatarBg: "#FDE9D9",
  },
  {
    id: "e4",
    title: "Audience Activity",
    description: "High interaction across your network",
    category: "logic",
    iconName: "Users",
    avatarBg: "#FDE9D9",
  },
  {
    id: "e5",
    title: "Best Posting Time",
    description: "Recommended for stronger reach",
    category: "reach",
    iconName: "Clock3",
    avatarBg: "#FDE9D9",
  },
  {
    id: "e6",
    title: "Engagement Trend",
    description: "Growing over the last 7 days",
    category: "analytics",
    iconName: "ChartNoAxesCombined",
    avatarBg: "#FDE9D9",
  },
  {
    id: "e7",
    title: "Weekly Insights",
    description: "New report generated for review",
    category: "logic",
    iconName: "FolderOpen",
    avatarBg: "#FDE9D9",
  },
  {
    id: "e8",
    title: "Comment Tracking",
    description: "Performance updated and ready to compare",
    category: "reach",
    iconName: "Radar",
    avatarBg: "#FDE9D9",
  },
];

export const THREE_STEPS: ThreeStepItem[] = [
  {
    step: "Step 01",
    title: "Open a LinkedIn comment box",
    description: "Open the comment or reply box on any LinkedIn post. A small Mastreach button appears inside the box when you're ready to write.",
    bgClass: "bg-[#E0F3FB]",
    borderColor: "border-[#B0E1F4]",
    badgeText: "Works in LinkedIn",
    iconType: "account",
  },
  {
    step: "Step 02",
    title: "Create a response in your voice",
    description: "Click Mastreach to analyze the LinkedIn post and its context. Choose how you want to respond and let Mastreach create a thoughtful draft based on your voice and intent.",
    bgClass: "bg-[#FFF480]",
    borderColor: "border-[#FFF8AD]",
    badgeText: "Understands the conversation",
    iconType: "campaign",
  },
  {
    step: "Step 03",
    title: "Review, refine, then insert",
    description: "Choose Agree, Push back, Ask, Story, or Add. Refine the response with custom instructions, review it, and insert it into LinkedIn when you're ready.",
    bgClass: "bg-[#D2C5FA]",
    borderColor: "border-[#EBE4FD]",
    badgeText: "You stay in control",
    iconType: "revenue",
  },
];

export const COUNTERS_DATA: StatMetric[] = [
  {
    value: "01",
    label: "WATCHER",
    subtext: "LinkedIn activity, posts, comments, replies & interactions",
  },
  {
    value: "02",
    label: "COMMENT ASSISTANT",
    subtext: "Understand context → choose intent → respond in your voice",
  },
  {
    value: "03",
    label: "KNOWLEDGE",
    subtext: "Articles, web pages, YouTube & LinkedIn posts, saved for reuse",
  },
  {
    value: "04",
    label: "ENGAGEMENT",
    subtext: "Track comments, posts & engagement patterns over time",
  },
  {
    value: "05",
    label: "CONTENT",
    subtext: "Create, refine, visualize & schedule smarter LinkedIn publishing",
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
    name: "Starter",
    tagline: "For individuals getting started with AI-assisted LinkedIn content and knowledge workflows.",
    priceMonthly: 1499,
    priceAnnual: 1499,
    badge: "",
    features: [
      "40 AI images",
      "3 competitor analyses",
      "30 video imports",
      "Unlimited posts and comments",
    ],
    ctaText: "Choose Starter",
    ctaVariant: "outline",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For people creating more content and using more AI-powered tools throughout their LinkedIn workflow.",
    priceMonthly: 2999,
    priceAnnual: 2999,
    badge: "MOST USED",
    isPopular: true,
    features: [
      "100 AI images",
      "6 competitor analyses",
      "60 video imports",
      "Unlimited posts and comments",
    ],
    ctaText: "Choose Growth",
    ctaVariant: "primary",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For high-volume creators who need higher usage limits across content, analysis, and video imports.",
    priceMonthly: 4499,
    priceAnnual: 4499,
    badge: "",
    features: [
      "200 AI images",
      "12 competitor analyses",
      "150 video imports",
      "Unlimited posts and comments",
    ],
    ctaText: "Choose Pro",
    ctaVariant: "secondary",
  },
];

export const PRICING_ADDONS = [
  {
    title: "Extra images",
    detail: "50 uses · $12",
    cta: "Buy add-on",
  },
  {
    title: "Extra competitor analysis",
    detail: "1 use · $5",
    cta: "Buy add-on",
  },
  {
    title: "Extra video imports",
    detail: "30 uses · $8",
    cta: "Buy add-on",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Getting Started",
    question: "What does Mastreach do?",
    answer: "Mastreach is a LinkedIn intelligence and engagement platform. It connects LinkedIn activity, thoughtful responses, knowledge capture, content creation, scheduling, and engagement insights in one place.",
  },
  {
    id: "faq-2",
    category: "Watcher",
    question: "What does Mastreach Watcher do?",
    answer: "Watcher runs on your device and observes relevant LinkedIn activity such as posts, comments, replies, messages, and engagement. Useful activity is brought into the Mastreach web app so you can understand what is happening and act on it.",
  },
  {
    id: "faq-3",
    category: "Comment Assistant",
    question: "How does Comment Assistant work?",
    answer: "Open a LinkedIn post and use the Mastreach Comment Assistant from the comment or reply box. Mastreach reads and analyzes the current post and its context, then creates a thoughtful response based on your voice and chosen intent. Available intents: Agree · Push back · Ask · Story · Add.",
  },
  {
    id: "faq-4",
    category: "Human Control",
    question: "Does Mastreach post comments automatically?",
    answer: "Comment Assistant keeps you in control. Review and edit the generated response before inserting it into LinkedIn. The basic comment workflow does not automatically publish the response for you.",
  },
  {
    id: "faq-5",
    category: "Writing",
    question: "Can I guide the response?",
    answer: "Yes. Choose an intent such as Agree, Push back, Ask, Story, or Add, and use custom instructions to guide the response. You can review and refine the result before inserting it into LinkedIn.",
  },
  {
    id: "faq-6",
    category: "Knowledge",
    question: "What can I save to my Mastreach knowledge base?",
    answer: "You can capture useful content from LinkedIn posts, articles, web pages, and YouTube videos. Add your own notes and tags to keep useful information organized for later.",
  },
  {
    id: "faq-7",
    category: "Knowledge vs Comment Assistant",
    question: "Does Comment Assistant use my saved knowledge?",
    answer: "No. Comment Assistant analyzes the LinkedIn post you're currently viewing and its context, then creates a response according to your voice, intent, and instructions. Your Knowledge Base is a separate system for capturing and organizing useful information for future use.",
  },
  {
    id: "faq-8",
    category: "Engagement Intelligence",
    question: "Can Mastreach track my LinkedIn engagement?",
    answer: "Yes. Mastreach brings engagement activity into the web app so you can track comments, posts, and engagement patterns and better understand what is working.",
  },
  {
    id: "faq-9",
    category: "Content & Scheduling",
    question: "Can Mastreach help me create and schedule posts?",
    answer: "Mastreach can help create and refine LinkedIn content, generate visuals based on your post details, identify useful posting times based on engagement patterns, and support scheduling.",
  },
  {
    id: "faq-10",
    category: "Requirements",
    question: "What do I need to use Mastreach?",
    answer: "Mastreach works as a connected ecosystem of its web app, LinkedIn Watcher, and browser extensions such as Comment Assistant and Knowledge. The exact setup depends on which Mastreach features you want to use.",
  },
  {
    id: "faq-11",
    category: "Privacy & Control",
    question: "Do I stay in control of what I create?",
    answer: "Yes. Mastreach is designed to assist your workflow rather than replace your judgment. You can review, refine, and decide what to use before taking action.",
  },
  {
    id: "faq-12",
    category: "Engagement Insights",
    question: "How does Mastreach help me understand what works?",
    answer: "Mastreach connects your activity and engagement data so you can see patterns across comments and posts, understand what resonates, and use those insights to improve future content and interactions.",
  },
];

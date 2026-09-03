export interface BentoProblem {
  id: string;
  title: string;
  stat: string;
  statLabel: string;
  badge: string;
  badgeColor: string;
  description: string;
  bullets: string[];
  visualType: "chart" | "timer" | "dropoff" | "stack";
  colSpan: "col-span-1" | "col-span-1 md:col-span-2";
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

export interface StatMetric {
  value: string;
  suffix?: string;
  label: string;
  subtext: string;
  colorClass: string;
  bgSubtle: string;
  borderClass: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatarText: string;
  avatarBg: string;
  verifiedMetric: string;
  badge: string;
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
  ctaVariant: "primary" | "terracotta" | "indigo" | "outline";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const HERO_DATA = {
  badge: "⚡ THE HUMAN-CENTRIC LINKEDIN REVENUE ENGINE",
  headlineMain: "Turn LinkedIn Connections into",
  headlineHighlight: "High-Ticket Client Relationships.",
  subheadline:
    "Stop wasting 40+ hours on robotic cold outreach. Deploy a warm, human-centric inbound funnel that borrows high-authority reach, drafts genuine high-signal comments, and converts profile views into $5k–$20k advisory retainers.",
  primaryCta: "Start Your Inbound Funnel",
  secondaryCta: "Explore Live Simulator",
  socialProofCount: "420+ Founders, Coaches & Advisory Partners",
  rating: "4.9/5 Average Pipeline Lift",
};

export const BENTO_PROBLEMS: BentoProblem[] = [
  {
    id: "vanity-trap",
    title: "The Vanity Metric Trap",
    stat: "94%",
    statLabel: "of viral posts generate zero pipeline revenue",
    badge: "Traffic vs Trust",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
    description: "You're getting thousands of impressions, but your inbox is quiet. Algorithmic reach without a warm, conversational bridge attracts passive scrollers, not high-ticket clients.",
    bullets: [
      "Broad audiences attract lurkers rather than decision-makers",
      "No natural conversion path from post impressions to discovery calls",
      "Hours spent writing viral posts that don't pay retainers",
    ],
    visualType: "chart",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: "manual-burnout",
    title: "Cold Outreach Exhaustion",
    stat: "40+ hrs",
    statLabel: "lost every month to copy-pasting cold DMs",
    badge: "Time Drain",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    description: "Copy-pasting 50 robotic pitches a day damages your personal brand, risks account restrictions, and generates a painful 1.8% reply rate.",
    bullets: [
      "Heavy founder time tax with zero compounding leverage",
      "Damages authentic reputation among senior decision-makers",
    ],
    visualType: "timer",
    colSpan: "col-span-1",
  },
  {
    id: "ghost-pipeline",
    title: "The Golden Window Chasm",
    stat: "< 2%",
    statLabel: "warm leads convert without rapid, thoughtful follow-up",
    badge: "Missed Intent",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    description: "When high-intent leaders comment on your posts or view your profile, waiting hours to connect causes lead warmth to decay by 80%.",
    bullets: [
      "Missed golden 15-minute response windows",
      "Conversations get buried in LinkedIn's cluttered native inbox",
    ],
    visualType: "dropoff",
    colSpan: "col-span-1",
  },
  {
    id: "fragmented-stack",
    title: "The Chaotic Tool Tax",
    stat: "5 Tools",
    statLabel: "replaced by one unified human relationship engine",
    badge: "Unified System",
    badgeColor: "bg-stone-100 text-stone-700 border-stone-300",
    description: "Juggling unsafe scrapers, generic AI tabs, and messy spreadsheets fragments your prospect context and invites account bans.",
    bullets: [
      "No single source of truth connecting profile comments to closed retainers",
      "Generic ChatGPT copy that sounds robotic and easily detected",
      "Expensive monthly subscriptions with zero conversational continuity",
    ],
    visualType: "stack",
    colSpan: "col-span-1 md:col-span-2",
  },
];

export const FUNNEL_STEPS: FunnelStep[] = [
  {
    id: 1,
    stepNumber: "01",
    badge: "FOUNDATION",
    badgeTone: "warm-pill-terracotta",
    title: "Profile Resonance & Authority Architecture",
    tagline: "Turn your personal profile into a welcoming, high-converting consultation page.",
    shortDescription: "Before driving traffic, we refine your headline, banner, and featured assets so high-intent visitors immediately recognize your category mastery.",
    bullets: [
      {
        title: "Outcome-Driven Headline",
        desc: "Clearly articulates your specific business transformation and target ICP in under 120 characters.",
      },
      {
        title: "Featured Asset Magnet",
        desc: "Welcomes visitors with a high-value framework, case study, or actionable blueprint.",
      },
      {
        title: "Proof Stacking Architecture",
        desc: "Highlights verified founder case studies and client testimonials above the fold.",
      },
    ],
    metricHighlight: {
      label: "Profile Visit-to-DM Rate",
      value: "14.2%",
      trend: "+310% vs baseline",
    },
    visualStage: {
      name: "Profile Authority Engine",
      subtext: "Top-of-Funnel Resonance Layer",
      accentColor: "#c85a3b",
      bgSubtle: "bg-[#fff4ed]",
      borderAccent: "border-[#fcd5c7]",
      conversionRate: "14.2%",
      activeNodes: 120,
      layerDepth: "Stage 1 of 4",
    },
  },
  {
    id: 2,
    stepNumber: "02",
    badge: "COMMUNITY REACH",
    badgeTone: "warm-pill-marigold",
    title: "Borrowed Reach & High-Signal Conversations",
    tagline: "Engage authentically in top creator feeds to attract warm, receptive decision-makers.",
    shortDescription: "Audience OS curates top 1% voices in your niche. When they publish, you contribute thoughtful, peer-level insights in the golden 15-minute window.",
    bullets: [
      {
        title: "Real-Time Feed Curation",
        desc: "Instant notifications when key industry leaders publish fresh insights.",
      },
      {
        title: "Authentic Tone Synthesis",
        desc: "Drafts contrarian, experienced viewpoints that match your genuine speaking voice.",
      },
      {
        title: "Second-Degree Reach",
        desc: "Exposes your expertise directly to decision-makers reading the comments.",
      },
    ],
    metricHighlight: {
      label: "Borrowed Monthly Impressions",
      value: "450k+",
      trend: "Organic peer reach",
    },
    visualStage: {
      name: "Borrowed Reach Accelerator",
      subtext: "High-Signal Comment Conversations",
      accentColor: "#d97706",
      bgSubtle: "bg-[#fef3c7]",
      borderAccent: "border-[#fde68a]",
      conversionRate: "24.8%",
      activeNodes: 480,
      layerDepth: "Stage 2 of 4",
    },
  },
  {
    id: 3,
    stepNumber: "03",
    badge: "RELATIONSHIP CRM",
    badgeTone: "warm-pill-indigo",
    title: "Conversational Inbound CRM & Intent Routing",
    tagline: "Transition engaged post commenters into warm, respectful direct conversations.",
    shortDescription: "When prospects like or reply to your high-signal comments, our smart CRM tracks buyer intent and prompts natural, value-first messaging.",
    bullets: [
      {
        title: "Intent & Sentiment Scoring",
        desc: "Identifies whether a contact is curious, exploring solutions, or ready for advisory.",
      },
      {
        title: "Value-First DM Sequences",
        desc: "Shares helpful frameworks and insights instead of pushy booking links.",
      },
      {
        title: "One-Click Context Recall",
        desc: "Preserves the entire interaction context so your conversations feel seamless.",
      },
    ],
    metricHighlight: {
      label: "Warm Response Rate",
      value: "68.5%",
      trend: "4.8x higher than cold DMs",
    },
    visualStage: {
      name: "Conversational Intent Matrix",
      subtext: "Warm Relationship Routing",
      accentColor: "#1e3a5f",
      bgSubtle: "bg-[#eef4fb]",
      borderAccent: "border-[#c9ddf2]",
      conversionRate: "68.5%",
      activeNodes: 850,
      layerDepth: "Stage 3 of 4",
    },
  },
  {
    id: 4,
    stepNumber: "04",
    badge: "REVENUE ADVISORY",
    badgeTone: "warm-pill-sage",
    title: "Discovery Calls & High-Ticket Retainers",
    tagline: "Smooth calendar scheduling supported by pre-call prospect intelligence.",
    shortDescription: "Qualified founders and VP leaders effortlessly book onto your calendar. The system creates a 1-page intelligence brief before every discovery call.",
    bullets: [
      {
        title: "Frictionless Scheduling",
        desc: "Prospects choose dates comfortably without clunky third-party barriers.",
      },
      {
        title: "Pre-Call Intelligence Dossier",
        desc: "Summarizes the prospect's company size, recent milestones, and primary challenges.",
      },
      {
        title: "Full Revenue Attribution",
        desc: "Connects signed retainers back to the exact comment and post that initiated contact.",
      },
    ],
    metricHighlight: {
      label: "Discovery Call Close Rate",
      value: "42.0%",
      trend: "$8.5k avg retainer",
    },
    visualStage: {
      name: "Client Advisory Stage",
      subtext: "Closed Retainers & Long-Term Partnerships",
      accentColor: "#2d6a4f",
      bgSubtle: "bg-[#e8f5ee]",
      borderAccent: "border-[#b7e0cb]",
      conversionRate: "42.0%",
      activeNodes: 1200,
      layerDepth: "Stage 4 of 4",
    },
  },
];

export const METRICS_DATA: StatMetric[] = [
  {
    value: "340%",
    label: "Average Inbound Lift",
    subtext: "Increase in qualified inbound inquiries within the first 30 days of deployment.",
    colorClass: "text-[#c85a3b]",
    bgSubtle: "bg-[#fff4ed]",
    borderClass: "border-[#fcd5c7]",
    iconName: "TrendingUp",
  },
  {
    value: "50+",
    label: "Qualified Inbounds / Mo",
    subtext: "High-intent conversations with verified decision-makers and founders per profile.",
    colorClass: "text-[#d97706]",
    bgSubtle: "bg-[#fef3c7]",
    borderClass: "border-[#fde68a]",
    iconName: "MessageSquare",
  },
  {
    value: "$2.4M+",
    label: "Attributed Retainers",
    subtext: "Verified client pipeline generated through our organic reach framework in 2026.",
    colorClass: "text-[#2d6a4f]",
    bgSubtle: "bg-[#e8f5ee]",
    borderClass: "border-[#b7e0cb]",
    iconName: "DollarSign",
  },
  {
    value: "12 Mins",
    label: "Daily Founder Time",
    subtext: "All you need to review high-signal comments and nurture warm inbound leads.",
    colorClass: "text-[#1e3a5f]",
    bgSubtle: "bg-[#eef4fb]",
    borderClass: "border-[#c9ddf2]",
    iconName: "Clock",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "We replaced 3 hours of exhausting cold InMails with Audience OS. Within 18 days, we closed two ₹12L ($15k) advisory retainers with SaaS founders in Bengaluru and Singapore.",
    author: "Rohan Mehta",
    role: "Founder & Managing Partner",
    company: "ScaleFlow Advisory",
    location: "Bengaluru, India",
    avatarText: "RM",
    avatarBg: "bg-amber-100 text-amber-900 border border-amber-300",
    verifiedMetric: "₹24L Closed in 18 Days",
    badge: "B2B SaaS Growth",
  },
  {
    id: "t2",
    quote: "The commentary AI genuinely speaks like an experienced operator. It avoids generic cheerleading and drafts incisive points that consistently earn top comment spots.",
    author: "Pooja Sharma",
    role: "VP of Growth & Strategy",
    company: "Synthetix Capital",
    location: "Mumbai, India",
    avatarText: "PS",
    avatarBg: "bg-orange-100 text-orange-900 border border-orange-300",
    verifiedMetric: "48 Qualified Calls / Mo",
    badge: "Venture Advisory",
  },
  {
    id: "t3",
    quote: "Our consulting pipeline went from unpredictable feast-or-famine to booking 6–8 qualified enterprise discovery calls every single week with zero ad spend.",
    author: "Aditya Nair",
    role: "Principal Consultant",
    company: "HyperScale Tech Partners",
    location: "Gurugram, India",
    avatarText: "AN",
    avatarBg: "bg-emerald-100 text-emerald-900 border border-emerald-300",
    verifiedMetric: "+380% Inbound Lift",
    badge: "Enterprise Tech",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Growth",
    tagline: "For solo consultants and advisory founders building consistent warm pipeline.",
    priceMonthly: 149,
    priceAnnual: 119,
    badge: "SOLO PRACTITIONER",
    features: [
      "1 Dedicated LinkedIn Profile Engine",
      "Borrowed Reach Feed (Top 50 Creator Voices)",
      "Context AI Comment Drafting (300/mo)",
      "Inbound Relationship CRM Pipeline",
      "Warm Conversion Analytics & Metrics",
      "Browser Extension Companion",
    ],
    notIncluded: [
      "Autonomous Intent Sentiment Scoring",
      "Pre-Call Dossier Intelligence",
      "Multi-Account Syndicate Management",
    ],
    ctaText: "Start 14-Day Free Trial",
    ctaVariant: "outline",
  },
  {
    id: "pro",
    name: "Growth Accelerator",
    tagline: "The complete automated revenue engine for scaling founders and agency leads.",
    priceMonthly: 349,
    priceAnnual: 279,
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
    ctaText: "Deploy Growth Accelerator",
    ctaVariant: "terracotta",
  },
  {
    id: "syndicate",
    name: "Enterprise Syndicate",
    tagline: "For growth advisory firms, venture syndicates, and executive teams.",
    priceMonthly: 899,
    priceAnnual: 719,
    badge: "TEAMS & FIRMS",
    features: [
      "Unlimited LinkedIn Profile Engines",
      "Private Residential Cloud Proxies (Zero Ban Risk)",
      "Custom Fine-Tuned Authentic Voice Models",
      "White-Glove Pipeline Architecture Setup",
      "Dedicated Growth Strategist & Slack Channel",
      "Custom Webhooks & Custom CRM Integrations",
      "Enterprise SLA & 99.9% Uptime Guarantee",
    ],
    ctaText: "Schedule Advisory Briefing",
    ctaVariant: "indigo",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Safety & Account Health",
    question: "Will this keep my LinkedIn profile safe from restrictions?",
    answer: "Yes, absolutely. Unlike aggressive bot scrapers that blast cold spam, Audience OS uses cloud-native human emulation with natural delays, reading pauses, and dedicated residential proxies. Your account reputation remains completely pristine.",
  },
  {
    id: "faq-2",
    category: "AI Authenticity",
    question: "How does the AI create comments that feel genuinely human?",
    answer: "Audience OS indexes your past top-performing writings, philosophies, and consulting frameworks. Instead of cliché filler, it drafts thoughtful, peer-level insights that position you as an expert and encourage organic conversation.",
  },
  {
    id: "faq-3",
    category: "Quick Setup",
    question: "How long does onboarding take?",
    answer: "You can be fully set up in under 15 minutes. Connect your profile, choose 10–20 top industry voices in your niche, and our system immediately curates high-signal comment queues and tracks incoming interest.",
  },
  {
    id: "faq-4",
    category: "Guarantees & ROI",
    question: "What if I don't see results?",
    answer: "We offer an unconditional 14-day free trial. If you deploy our framework for 30 days and don't see a significant lift in qualified profile engagements and warm inquiries, we will personally audit your strategy or refund 100% of your subscription.",
  },
  {
    id: "faq-5",
    category: "Time Investment",
    question: "How much daily time is required from me?",
    answer: "Only 10–15 minutes per day. You review and approve the AI-drafted insights on your 'Today' cockpit, respond to high-intent warm DMs, and let the system handle the tracking.",
  },
];

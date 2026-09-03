export interface ActionItem {
  id: string;
  name: string;
  badge: string;
  avatarText: string;
  avatarBg: string;
  headline: string;
  snippet: string;
  reaction?: string;
  status: "waiting" | "completed" | "scheduled";
  timeAgo: string;
  estimatedTime: string;
}

export interface ReturnedPerson {
  id: string;
  name: string;
  badge: string;
  avatarText: string;
  avatarBg: string;
  type: "replied_comment" | "replied_direct";
  count: number;
  timeAgo: string;
  reachMultiplier?: string;
}

export interface ContentItem {
  id: string;
  title: string;
  stage: "ideas" | "drafts" | "approved" | "scheduled" | "posted" | "archived";
  type: "text" | "carousel" | "infographic" | "image";
  sourceName: string;
  timeAgo: string;
  slidesCount?: number;
  bodySnippet?: string;
}

export interface Conversation {
  id: string;
  name: string;
  avatarText: string;
  avatarBg: string;
  headline: string;
  unread: boolean;
  draftReady: boolean;
  stage: "Just connected" | "Ongoing" | "Ready for a call" | "No stage";
  lastMessage: string;
  timeAgo: string;
  messages: Array<{
    id: string;
    sender: "them" | "you";
    senderName: string;
    text: string;
    timestamp: string;
    attachment?: {
      name: string;
      size: string;
    };
  }>;
  draftReply?: {
    text: string;
    writerContext: string;
    whyItSaysThis: string;
    sourceGrounding?: string;
  };
}

export interface WatcherMachine {
  id: string;
  name: string;
  status: "struggling" | "healthy" | "offline";
  isHeadless?: boolean;
  os: string;
  currentVersion: string;
  latestVersion: string;
  isUpdateAvailable: boolean;
  lastSucceeded: string;
  lastHeardFrom: string;
  lastError?: string;
  errorLog?: string;
  statusMessage: string;
}

export interface TelemetryLog {
  id: string;
  event: "sync_failed" | "watching" | "started" | "sync_success";
  detail: string;
  timeAgo: string;
}

export interface KnowledgeSource {
  id: string;
  title: string;
  type: "video" | "article" | "note";
  summary: string;
  tags: string[];
  dateAdded: string;
  status: "ready" | "processing" | "archived";
}

export interface VoiceClone {
  id: string;
  handle: string;
  name: string;
  avatarText: string;
  status: "queued" | "active" | "ready";
  fetchesLeft: number;
  description: string;
}

export interface ContentPillar {
  id: string;
  title: string;
  description: string;
}

// Initial Mock Data Stores
export const initialActionItems: ActionItem[] = [
  {
    id: "act-1",
    name: "Syed Ammar",
    badge: "Verified Profile 1st",
    avatarText: "SA",
    avatarBg: "bg-blue-600",
    headline: "Senior Talent Partner @ Scale",
    snippet: "Congratulations on the milestone!",
    status: "waiting",
    timeAgo: "Replied yesterday",
    estimatedTime: "about 2 minutes",
  },
  {
    id: "act-2",
    name: "Vishal Kumar",
    badge: "Verified Profile 2nd",
    avatarText: "VK",
    avatarBg: "bg-emerald-600",
    headline: "Tech Lead @ FinTech Labs",
    snippet: "Follow Congratulations. Really loved the breakdown on system scaling.",
    status: "waiting",
    timeAgo: "Replied yesterday",
    estimatedTime: "about 2 minutes",
  },
  {
    id: "act-3",
    name: "Ajay Verma",
    badge: "Premium Profile 1st",
    avatarText: "AV",
    avatarBg: "bg-purple-600",
    headline: "Founder @ ScaleBridge",
    snippet: "Congratulations 💐 Great insights on high-ticket retention.",
    reaction: "1 reaction",
    status: "waiting",
    timeAgo: "Replied yesterday",
    estimatedTime: "about 2 minutes",
  },
  {
    id: "act-4",
    name: "Shubham Jha",
    badge: "Verified Profile 2nd",
    avatarText: "SJ",
    avatarBg: "bg-amber-600",
    headline: "Product Strategist",
    snippet: "Follow Congrats! Would love to compare notes on client conversion funnels.",
    status: "waiting",
    timeAgo: "Replied yesterday",
    estimatedTime: "about 2 minutes",
  },
  {
    id: "act-5",
    name: "Vishu Chaudhary",
    badge: "1st Full Stack Web Developer",
    avatarText: "VC",
    avatarBg: "bg-indigo-600",
    headline: "Node.js | Express.js | React.js | MongoDB (3yr)",
    snippet: "Hey connections! Excited to announce new project release...",
    status: "waiting",
    timeAgo: "Replied yesterday",
    estimatedTime: "about 2 minutes",
  },
  {
    id: "act-6",
    name: "Paul Richardson",
    badge: "Verified Profile 1st",
    avatarText: "PR",
    avatarBg: "bg-rose-600",
    headline: "Executive Coach & Author",
    snippet: "SUMEET KUMAR SINGH of course.. Great Accomplishment!",
    status: "waiting",
    timeAgo: "Replied yesterday",
    estimatedTime: "about 2 minutes",
  },
];

export const fortnightChartData = [
  { date: "20 Aug", youDid: 0, cameBack: 14 },
  { date: "22 Aug", youDid: 0, cameBack: 14 },
  { date: "24 Aug", youDid: 0, cameBack: 0 },
  { date: "26 Aug", youDid: 0, cameBack: 0 },
  { date: "28 Aug", youDid: 0, cameBack: 0 },
  { date: "30 Aug", youDid: 0, cameBack: 0 },
  { date: "1 Sep", youDid: 1, cameBack: 79 },
  { date: "Today", youDid: 1, cameBack: 107 },
];

export const commentDailyChartData = [
  { day: "13d", peopleReached: 0, commentsLeft: 0 },
  { day: "12d", peopleReached: 680, commentsLeft: 14 },
  { day: "11d", peopleReached: 10, commentsLeft: 2 },
  { day: "9d", peopleReached: 0, commentsLeft: 0 },
  { day: "7d", peopleReached: 0, commentsLeft: 0 },
  { day: "5d", peopleReached: 0, commentsLeft: 0 },
  { day: "3d", peopleReached: 0, commentsLeft: 0 },
  { day: "1d", peopleReached: 41, commentsLeft: 6 },
  { day: "Now", peopleReached: 731, commentsLeft: 22 },
];

export const initialReturnedPeople: ReturnedPerson[] = [
  { id: "rp-1", name: "Ajay Verma", badge: "Premium Profile 1st", avatarText: "A1", avatarBg: "bg-purple-600", type: "replied_comment", count: 9, timeAgo: "23h ago", reachMultiplier: "9x" },
  { id: "rp-2", name: "Syed Ammar", badge: "Verified Profile 1st", avatarText: "S1", avatarBg: "bg-blue-600", type: "replied_comment", count: 1, timeAgo: "23h ago" },
  { id: "rp-3", name: "Vishal Kumar", badge: "Verified Profile 2nd", avatarText: "V2", avatarBg: "bg-emerald-600", type: "replied_comment", count: 1, timeAgo: "23h ago" },
  { id: "rp-4", name: "Vishu Chaudhary", badge: "Full Stack Dev", avatarText: "VC", avatarBg: "bg-indigo-600", type: "replied_comment", count: 1, timeAgo: "23h ago" },
  { id: "rp-5", name: "Shubham Jha", badge: "Verified Profile 2nd", avatarText: "S2", avatarBg: "bg-amber-600", type: "replied_comment", count: 1, timeAgo: "23h ago" },
  { id: "rp-6", name: "Ayush Kumar Singh", badge: "Verified Profile 1st", avatarText: "A1", avatarBg: "bg-rose-600", type: "replied_comment", count: 7, timeAgo: "23h ago", reachMultiplier: "7x" },
  { id: "rp-7", name: "Khushi Jain", badge: "DevOps Candidate", avatarText: "KJ", avatarBg: "bg-teal-600", type: "replied_direct", count: 3, timeAgo: "1d ago" },
  { id: "rp-8", name: "Aakarsh Mishra", badge: "Software Engineer", avatarText: "AM", avatarBg: "bg-cyan-600", type: "replied_direct", count: 2, timeAgo: "1d ago" },
];

export const initialContentItems: ContentItem[] = [
  {
    id: "cnt-1",
    title: "When one post is approved and two are drafted, another idea is not the next job.",
    stage: "ideas",
    type: "text",
    sourceName: "Current content pipeline: 6 ideas, 2 drafts and 1 approved post",
    timeAgo: "1d ago",
    bodySnippet: "Focus on distribution and engagement over continuous drafting backlogs.",
  },
  {
    id: "cnt-2",
    title: "AI can remember the conversation; it cannot decide what you genuinely mean.",
    stage: "ideas",
    type: "carousel",
    slidesCount: 6,
    sourceName: "Human-controlled LinkedIn growth system for coaches",
    timeAgo: "1d ago",
    bodySnippet: "Why automated voice generation fails without explicit human judgment boundaries.",
  },
  {
    id: "cnt-3",
    title: "A useful LinkedIn scorecard reports what happened without inventing what caused it.",
    stage: "ideas",
    type: "infographic",
    sourceName: "LinkedIn activity record, 26 August–1 September 2026",
    timeAgo: "1d ago",
    bodySnippet: "Measuring true borrowed reach vs vanity metrics.",
  },
  {
    id: "cnt-4",
    title: "Good AI drafting works from your building blocks; it does not clone a voice from thin air.",
    stage: "ideas",
    type: "carousel",
    slidesCount: 5,
    sourceName: "Knowledge base architecture: 1-hour project breakdown",
    timeAgo: "1d ago",
    bodySnippet: "Ground every generated hook in existing case studies and verified statements.",
  },
  {
    id: "cnt-5",
    title: "Most coaches price by the hour and it caps them at their calendar.",
    stage: "drafts",
    type: "text",
    sourceName: "Coaching Pricing & Packaging Framework",
    timeAgo: "2d ago",
    bodySnippet: "Moving from hourly booking to outcome-based retaining on LinkedIn.",
  },
  {
    id: "cnt-6",
    title: "The Hotstar UI Architecture Blueprint for 2026",
    stage: "approved",
    type: "image",
    sourceName: "Learn to make @JioHotstar website clone | 1-Hour Tutorial",
    timeAgo: "3d ago",
    bodySnippet: "Complete component breakdown for reactive video streaming interfaces.",
  },
];

export const initialConversations: Conversation[] = [
  {
    id: "conv-1",
    name: "Khushi Jain",
    avatarText: "KJ",
    avatarBg: "bg-teal-600",
    headline: "Aspiring Cloud & DevOps Engineer",
    unread: true,
    draftReady: true,
    stage: "Ongoing",
    lastMessage: "I just saw a post of your company, there is a hiring of DevOps Intern can you refer for the interview",
    timeAgo: "2h ago",
    messages: [
      { id: "m1", sender: "them", senderName: "Khushi", text: "Hello Khushi 👋", timestamp: "Yesterday 10:14 AM" },
      { id: "m2", sender: "them", senderName: "Khushi", text: "Can you help", timestamp: "Yesterday 10:15 AM" },
      { id: "m3", sender: "them", senderName: "Khushi", text: "I just saw a post of your company, there is a hiring of DevOps Intern can you refer for the interview", timestamp: "Yesterday 10:16 AM" },
      { id: "m4", sender: "them", senderName: "Khushi", text: "I've forwarded your resume to our HR", timestamp: "Yesterday 10:20 AM" },
      { id: "m5", sender: "them", senderName: "Khushi", text: "Thanks, Khushi", timestamp: "Yesterday 10:21 AM" },
      { id: "m6", sender: "them", senderName: "Khushi", text: "👍", timestamp: "Yesterday 10:22 AM" },
    ],
    draftReply: {
      text: "Thanks for sending that over, Khushi! I hope you hear back soon. How's everything else going for you?",
      writerContext: "Back and forth across more than one sitting. Drafts can reference what was said before.",
      whyItSaysThis: "Acknowledged her action of sending the resume, maintaining rapport. No claim made, so nothing from your knowledge base was needed.",
      sourceGrounding: "Direct polite rapport protocol",
    },
  },
  {
    id: "conv-2",
    name: "Aakarsh Mishra",
    avatarText: "AM",
    avatarBg: "bg-cyan-600",
    headline: "Frontend Architect",
    unread: true,
    draftReady: true,
    stage: "Just connected",
    lastMessage: "RESUME.pdf 111 KB Download",
    timeAgo: "3h ago",
    messages: [
      {
        id: "m20",
        sender: "them",
        senderName: "Aakarsh",
        text: "Hey Sumeet, great connecting with you here! Sharing my latest portfolio.",
        timestamp: "Today 9:00 AM",
        attachment: { name: "RESUME.pdf", size: "111 KB" },
      },
    ],
    draftReply: {
      text: "Thanks for connecting, Aakarsh! Took a quick look at your background — impressive work on frontend tooling. What kind of projects are you focusing on this quarter?",
      writerContext: "New connection with direct resume attachment.",
      whyItSaysThis: "Acknowledges the connection and recent work, inviting dialogue rather than an immediate pitch.",
    },
  },
  {
    id: "conv-3",
    name: "Arham Bhaina Siddiqui",
    avatarText: "AS",
    avatarBg: "bg-emerald-600",
    headline: "Growth Consultant @ Apex",
    unread: true,
    draftReady: true,
    stage: "Just connected",
    lastMessage: "Hi",
    timeAgo: "4h ago",
    messages: [{ id: "m30", sender: "them", senderName: "Arham", text: "Hi Sumeet, love your recent posts on LinkedIn reach.", timestamp: "Today 8:12 AM" }],
    draftReply: {
      text: "Hey Arham, thanks for reaching out! Glad the breakdowns resonated with you. Are you actively testing borrowed reach strategies right now?",
      writerContext: "First message following public comment interaction.",
      whyItSaysThis: "References the specific post topic and bridges to his agency context.",
    },
  },
  {
    id: "conv-4",
    name: "Nitin Sharma",
    avatarText: "NS",
    avatarBg: "bg-indigo-600",
    headline: "VP Marketing @ HyperScale",
    unread: true,
    draftReady: true,
    stage: "Just connected",
    lastMessage: "Hi Sumit Ok Yes, please tell me.(Edited)",
    timeAgo: "5h ago",
    messages: [{ id: "m40", sender: "them", senderName: "Nitin", text: "Hi Sumeet Ok Yes, please tell me more about how the watcher works.", timestamp: "Yesterday" }],
    draftReply: {
      text: "Glad to explain, Nitin. In short: it spots high-velocity posts right as they climb, so your comments get thousands of impressions rather than getting buried. Would you like a 5-min walk-through?",
      writerContext: "Inbound inquiry on growth tooling architecture.",
      whyItSaysThis: "Grounded directly in the 'Let AI assist without speaking for you' knowledge angle.",
    },
  },
  {
    id: "conv-5",
    name: "Garvit Goel",
    avatarText: "GG",
    avatarBg: "bg-amber-600",
    headline: "Founder @ BuildFast",
    unread: true,
    draftReady: false,
    stage: "Ready for a call",
    lastMessage: "Here is my resume for your reference",
    timeAgo: "1d ago",
    messages: [{ id: "m50", sender: "them", senderName: "Garvit", text: "Let's lock in Thursday 3 PM for our discussion on your coaching program.", timestamp: "Yesterday 4:00 PM" }],
  },
];

export const initialWatchers: WatcherMachine[] = [
  {
    id: "wm-1",
    name: "SUMEET",
    status: "struggling",
    isHeadless: false,
    os: "windows",
    currentVersion: "v1.3.2",
    latestVersion: "v1.3.4",
    isUpdateAvailable: true,
    lastSucceeded: "23h ago",
    lastHeardFrom: "12m ago",
    lastError: "12m ago",
    errorLog: 'TargetClosedError: Target page, context or browser has been closed Call log: - navigating to "https://www.linkedin.com/messaging/", waiting until "domcontentloaded"',
    statusMessage: "Still running but failing some of the time. Numbers may be behind.",
  },
  {
    id: "wm-2",
    name: "SUMEET",
    status: "offline",
    isHeadless: true,
    os: "windows",
    currentVersion: "v1.2.1",
    latestVersion: "v1.3.4",
    isUpdateAvailable: true,
    lastSucceeded: "12d ago",
    lastHeardFrom: "12d ago",
    statusMessage: "Not reporting in. Nothing new is being collected, so your figures are frozen where they were.",
  },
];

export const initialTelemetryLogs: TelemetryLog[] = [
  { id: "tl-1", event: "sync_failed", detail: 'TargetClosedError: Target page, context or browser has been closed Call log: - navigating to "https://www.linkedin.com/messaging/"', timeAgo: "12m ago" },
  { id: "tl-2", event: "watching", detail: "Scanning feed: 14 rising posts detected above engagement threshold", timeAgo: "12m ago" },
  { id: "tl-3", event: "started", detail: "Watcher daemon initialized on SUMEET (Windows v1.3.2)", timeAgo: "12m ago" },
  { id: "tl-4", event: "sync_failed", detail: 'TargetClosedError: Target page, context or browser has been closed Call log: - navigating to "https://www.linkedin.com/messaging/"', timeAgo: "1h ago" },
  { id: "tl-5", event: "watching", detail: "Scraped notifications: 6 new comment replies ingested", timeAgo: "1h ago" },
  { id: "tl-6", event: "started", detail: "Re-authenticating session cookie", timeAgo: "1h ago" },
  { id: "tl-7", event: "sync_success", detail: "Sync complete: 107 return visits indexed", timeAgo: "23h ago" },
  { id: "tl-8", event: "sync_success", detail: "Reach metrics updated across 22 active comments", timeAgo: "23h ago" },
  { id: "tl-9", event: "watching", detail: "Monitoring active target posts", timeAgo: "23h ago" },
  { id: "tl-10", event: "started", detail: "Scheduled 30-minute sync cycle", timeAgo: "23h ago" },
];

export const initialKnowledgeSources: KnowledgeSource[] = [
  {
    id: "ks-1",
    title: "(69) Learn to make @JioHotstar website clone | Portfolio Project Making | in 1-Hour - YouTube",
    type: "video",
    summary: "Step-by-step front-end tutorial for recreating the Hotstar streaming site using HTML, CSS, and JavaScript. Focuses on building a portfolio-ready project within a short timeframe, covering layout, styling, and interactive elements. Demonstrates practical structuring of assets and components for a responsive media site. Useful as a hands-on example for learning page composition and common UI patterns for streaming platforms.",
    tags: ["Video", "front-end", "project-based tutorial", "HTML/CSS/JS"],
    dateAdded: "Added 3 days ago",
    status: "ready",
  },
];

export const initialVoiceClones: VoiceClone[] = [
  {
    id: "vc-1",
    handle: "arshgoyal",
    name: "Arsh Goyal",
    avatarText: "A",
    status: "queued",
    fetchesLeft: 3,
    description: "Added. Nothing fetched yet, and adding costs nothing.",
  },
  {
    id: "vc-2",
    handle: "alexei",
    name: "Alexei G.",
    avatarText: "AG",
    status: "queued",
    fetchesLeft: 3,
    description: "Added. Nothing fetched yet, and adding costs nothing.",
  },
];

export const initialContentPillars: ContentPillar[] = [
  {
    id: "cp-1",
    title: "What your LinkedIn activity actually reached",
    description: "Use measured reach, engagement paths and weekly results to show which posts, comments and conversations created real exposure for coaches. Be concrete about the numbers, what changed and what the data cannot prove, and avoid treating likes or follower counts as business outcomes.",
  },
  {
    id: "cp-2",
    title: "Put useful comments where attention is climbing",
    description: "Argue that a few timely, substantial comments on rising posts can outperform publishing more content. Show how to judge whether a post is worth joining, what a coach can add from real experience and when the opportunity has already passed; avoid generic praise and attention chasing.",
  },
  {
    id: "cp-3",
    title: "Carry public interest into the inbox",
    description: "Show how coaches can recognize meaningful public engagement and continue it naturally in a private conversation. Be concrete about prior context, useful first messages and signs of genuine interest, and avoid cold pitches or pretending every reaction is a lead.",
  },
  {
    id: "cp-4",
    title: "Let AI assist without speaking for you",
    description: "Explain how drafts can be grounded in a coach's own material, language and point of view while the coach keeps final control. Use specific examples of what needs human judgment in posts, comments and inbox replies, and avoid claiming that automation can manufacture trust or expertise.",
  },
  {
    id: "cp-5",
    title: "Stop posting more just to stay busy",
    description: "Tell coaches what LinkedIn activity to skip, including extra posts, empty comments, forced outreach and conversations with no signal behind them. Make the trade-offs concrete by showing when less activity in better places produces more useful reach and conversations; avoid blanket advice to post every day or maximize output.",
  },
];

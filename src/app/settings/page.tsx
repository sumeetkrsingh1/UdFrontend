"use client";

import React, { useState } from "react";
import {
  Settings,
  Sparkles,
  Save,
  Plus,
  Trash2,
  CheckCircle2,
  XCircle,
  Radio,
  Cpu,
  Database,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  Upload,
  ShieldCheck,
  Lock,
  Share2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Header } from "@/components/layout/Header";
import { initialContentPillars, ContentPillar } from "@/lib/mockData";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const [whatYouSell, setWhatYouSell] = useState(
    "A growth system for coaches on LinkedIn. It watches the feed for posts that are climbing right now and says which are worth commenting on, drafts the comment and the replies and the posts in your own voice from your own material, reads your inbox and drafts answers that know where the conversation already is, tracks who engaged with you in public, and measures what all of it actually reached. Nothing is ever sent without you sending it. Sold with the setup and a weekly read of the numbers, not as software you are left alone with."
  );

  const [whoYouSellTo, setWhoYouSellTo] = useState(
    "Coaches who already post on LinkedIn and cannot tell what any of it is doing. Business, executive, leadership and life coaches, ICF credentialed or not. Usually solo or with one assistant. They already have an audience, somewhere between a few hundred and a few thousand followers, and it is not turning into conversations. PRIMARY region India, SECONDARY the English speaking diaspora (UK, US, UAE, Singapore, Canada, Australia). NOT consultants or agencies, and NOT someone who has never posted."
  );

  const [businessName, setBusinessName] = useState("Rian Infotech");
  const [showAccordion, setShowAccordion] = useState(false);

  // Questionnaire States
  const [entryCost, setEntryCost] = useState("Rs 35,000 or $900 USD/mo");
  const [complaints, setComplaints] = useState("I post every day and get 12 likes from the same 5 people.\nLinkedIn DMs feel spammy and nobody buys.\nI don't have 4 hours a day to engage.");
  const [dinnerPitch, setDinnerPitch] = useState("I help executive coaches turn their LinkedIn presence into qualified inbound discovery calls.");
  const [offerInsideMessage, setOfferInsideMessage] = useState("Would you be open to a 10-minute Loom showing how we identify rising posts in your niche?");
  const [afterTheySayYes, setAfterTheySayYes] = useState("A 20-minute strategy call on Zoom with calendar link.");
  const [writingTone, setWritingTone] = useState("Direct, sharp, empathetic, no corporate jargon.");
  const [forbiddenWords, setForbiddenWords] = useState("Synergy\n10x your pipeline\nGame-changer\nDelighted to announce");
  const [whereYouSell, setWhereYouSell] = useState("India, US, UK, UAE, Singapore");
  const [positioningLine, setPositioningLine] = useState("The human-in-the-loop audience engine for high-ticket coaches.");
  const [accentColor, setAccentColor] = useState("#2563eb");

  // Content Pillars
  const [pillars, setPillars] = useState<ContentPillar[]>(initialContentPillars);

  // Permissions Toggles
  const [allowDraftReplies, setAllowDraftReplies] = useState(true);
  const [allowDraftComments, setAllowDraftComments] = useState(true);
  const [allowSuggestIdeas, setAllowSuggestIdeas] = useState(true);
  const [allowAutoPublish, setAllowAutoPublish] = useState(false);

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    confetti({ particleCount: 40, spread: 60 });
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleAddPillar = () => {
    const title = prompt("Enter new Content Pillar Title:");
    if (title) {
      const newPillar: ContentPillar = {
        id: `cp-${Date.now()}`,
        title,
        description: "Focus on actionable evidence, concrete trade-offs and client proof.",
      };
      setPillars([...pillars, newPillar]);
    }
  };

  const handleDeletePillar = (id: string) => {
    setPillars(pillars.filter((p) => p.id !== id));
  };

  const handleWorkOutPillars = () => {
    confetti({ particleCount: 30, spread: 45 });
    alert("Synthesized 5 calibrated pillars aligned with your core offer!");
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[var(--background)]">
      <Header
        title="Settings & Guardrails"
        subtitle="What is connected, and what stops working when it is not"
        badge="Brand Alignment"
        actionButton={{
          label: isSaved ? "Saved!" : "Save Changes",
          icon: <Save className="w-3.5 h-3.5" />,
          onClick: handleSave,
        }}
      />

      <div className="flex-1 max-w-5xl w-full mx-auto px-6 py-8 space-y-8">
        {/* Connection Status Banner */}
        <div className="p-8 rounded-3xl billow-card bg-gradient-to-b from-white via-white to-amber-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-amber-950/20 space-y-2 border-amber-500/20">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-mono">
              Integration Health
            </span>
          </div>
          <h1 className="text-3xl font-serif text-[var(--foreground)] tracking-tight">
            <span className="text-amber-500">1 of 2 services</span> are not connected.
          </h1>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] max-w-2xl leading-relaxed">
            Each row below explains what stops working while disconnected, rather than just displaying whether it is green.
          </p>
        </div>

        {/* What You Sell & How You Sound */}
        <div className="p-8 rounded-3xl billow-card space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
            <div>
              <h2 className="text-xl font-serif font-normal text-[var(--foreground)]">
                What you sell, and how you sound
              </h2>
              <p className="text-xs text-[var(--muted-foreground)]">
                Everything the writing is allowed to claim, in your own words
              </p>
            </div>

            <button
              onClick={() => {
                confetti({ particleCount: 25, spread: 40 });
                alert("Simulated reading profile data from LinkedIn.");
              }}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center gap-1.5 self-start sm:self-auto transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Read it off LinkedIn</span>
            </button>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-[var(--foreground)] mb-1">
                What do you sell? <span className="text-amber-500 font-normal">(needed before anything is written)</span>
              </label>
              <p className="text-[11px] text-[var(--muted-foreground)] mb-2">
                The core product or transformation they pay for.
              </p>
              <textarea
                rows={4}
                value={whatYouSell}
                onChange={(e) => setWhatYouSell(e.target.value)}
                className="w-full p-4 rounded-2xl bg-[var(--input)] border border-[var(--border)] text-xs text-[var(--foreground)] focus:outline-none focus:border-blue-500 leading-relaxed font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--foreground)] mb-1">
                Who do you sell to? <span className="text-amber-500 font-normal">(needed before anything is written)</span>
              </label>
              <p className="text-[11px] text-[var(--muted-foreground)] mb-2">
                Be specific. Their role, audience size, and current stage.
              </p>
              <textarea
                rows={4}
                value={whoYouSellTo}
                onChange={(e) => setWhoYouSellTo(e.target.value)}
                className="w-full p-4 rounded-2xl bg-[var(--input)] border border-[var(--border)] text-xs text-[var(--foreground)] focus:outline-none focus:border-blue-500 leading-relaxed font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--foreground)] mb-1">
                What is your business called?
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full p-3.5 rounded-full bg-[var(--input)] border border-[var(--border)] text-xs text-[var(--foreground)] focus:outline-none focus:border-blue-500 font-semibold"
              />
            </div>

            {/* Collapsible 13 More Questions Accordion */}
            <div className="border border-[var(--border)] rounded-2xl bg-[var(--card-subtle)] p-5 space-y-4">
              <button
                type="button"
                onClick={() => setShowAccordion(!showAccordion)}
                className="w-full flex items-center justify-between text-xs font-bold text-[var(--foreground)]"
              >
                <span>{showAccordion ? "Hide extra persona questions" : "13 more questions, all optional"}</span>
                {showAccordion ? <ChevronUp className="w-4 h-4 text-blue-600" /> : <ChevronDown className="w-4 h-4 text-blue-600" />}
              </button>

              {showAccordion && (
                <div className="space-y-4 pt-4 border-t border-[var(--border)] text-xs">
                  <div>
                    <label className="block font-semibold mb-1">What does the entry offer cost?</label>
                    <input
                      type="text"
                      value={entryCost}
                      onChange={(e) => setEntryCost(e.target.value)}
                      className="w-full p-3 rounded-full bg-[var(--card)] border border-[var(--border)] text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">What do they complain about, in THEIR words? (One per line)</label>
                    <textarea
                      rows={3}
                      value={complaints}
                      onChange={(e) => setComplaints(e.target.value)}
                      className="w-full p-3 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">How would you describe what you do out loud?</label>
                    <input
                      type="text"
                      value={dinnerPitch}
                      onChange={(e) => setDinnerPitch(e.target.value)}
                      className="w-full p-3 rounded-full bg-[var(--card)] border border-[var(--border)] text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">How should the offer be said inside a message?</label>
                    <input
                      type="text"
                      value={offerInsideMessage}
                      onChange={(e) => setOfferInsideMessage(e.target.value)}
                      className="w-full p-3 rounded-full bg-[var(--card)] border border-[var(--border)] text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">What happens after they say yes?</label>
                    <input
                      type="text"
                      value={afterTheySayYes}
                      onChange={(e) => setAfterTheySayYes(e.target.value)}
                      className="w-full p-3 rounded-full bg-[var(--card)] border border-[var(--border)] text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">Words you never want to see (One per line)</label>
                    <textarea
                      rows={3}
                      value={forbiddenWords}
                      onChange={(e) => setForbiddenWords(e.target.value)}
                      className="w-full p-3 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">Where do you sell?</label>
                    <input
                      type="text"
                      value={whereYouSell}
                      onChange={(e) => setWhereYouSell(e.target.value)}
                      className="w-full p-3 rounded-full bg-[var(--card)] border border-[var(--border)] text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">How do you position yourself?</label>
                    <input
                      type="text"
                      value={positioningLine}
                      onChange={(e) => setPositioningLine(e.target.value)}
                      className="w-full p-3 rounded-full bg-[var(--card)] border border-[var(--border)] text-xs"
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <div>
                      <label className="block font-semibold mb-1">Picture Accent Color</label>
                      <input
                        type="color"
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="w-10 h-10 rounded-xl cursor-pointer border border-[var(--border)]"
                      />
                    </div>
                    <span className="text-xs font-mono">{accentColor}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Logo Upload */}
            <div className="p-5 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)] flex items-center justify-between gap-4">
              <div>
                <h4 className="text-xs font-bold text-[var(--foreground)]">BRAND LOGO</h4>
                <p className="text-[11px] text-[var(--muted-foreground)]">
                  Placed on the bottom of generated pictures and carousels. PNG transparent.
                </p>
              </div>
              <button
                onClick={() => alert("Upload logo file selected.")}
                className="px-5 py-2 rounded-full bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--border)]/40 text-xs font-semibold text-[var(--foreground)] flex items-center gap-1.5 shadow-xs"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Logo</span>
              </button>
            </div>
          </div>
        </div>

        {/* What You Write About (Content Pillars) */}
        <div className="p-8 rounded-3xl billow-card space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
            <div>
              <h2 className="text-xl font-serif font-normal text-[var(--foreground)]">
                What you write about
              </h2>
              <p className="text-xs text-[var(--muted-foreground)]">
                Every post is written from one of these recurring pillars
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleWorkOutPillars}
                className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Work them out from offer</span>
              </button>
              <button
                onClick={handleAddPillar}
                className="px-4 py-2 rounded-full bg-[var(--card-subtle)] hover:bg-[var(--border)]/40 border border-[var(--border)] text-xs font-semibold text-[var(--foreground)] flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add pillar</span>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-5 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)] space-y-1 relative group hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[var(--foreground)]">
                    {pillar.title}
                  </h4>
                  <button
                    onClick={() => handleDeletePillar(pillar.id)}
                    className="text-[var(--muted-foreground)] hover:text-red-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Delete pillar"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[var(--muted-foreground)] text-center pt-2">
            {pillars.length} calibrated angles. The weekly planner and post studio pull strictly from these pillars.
          </p>
        </div>

        {/* Connected Services Matrix */}
        <div className="p-8 rounded-3xl billow-card space-y-4">
          <h2 className="text-xl font-serif font-normal text-[var(--foreground)] border-b border-[var(--border)] pb-4">
            Connected services
          </h2>

          <div className="divide-y divide-[var(--border)] text-xs">
            <div className="py-3.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-600">
                  <Share2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--foreground)]">LinkedIn Publishing</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                      Connected
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--muted-foreground)]">
                    Puts approved posts onto your profile at designated times.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-3.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-600">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--foreground)]">The Watcher</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono">
                      Not running
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--muted-foreground)]">
                    Daemon monitoring rising posts, reach metrics, and inbox activity.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-3.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-600">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--foreground)]">The Writer Engine</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[var(--card-subtle)] text-[var(--muted-foreground)] font-mono">
                      Grounded
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--muted-foreground)]">
                    Drafts posts and replies from your knowledge base constitution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Writer Guardrails & Permissions */}
        <div className="p-8 rounded-3xl billow-card space-y-5">
          <div className="border-b border-[var(--border)] pb-4">
            <h2 className="text-xl font-serif font-normal text-[var(--foreground)]">
              What the writer is allowed to do
            </h2>
            <p className="text-xs text-[var(--muted-foreground)]">
              Human-in-the-loop protection. Nothing is ever sent automatically without review.
            </p>
          </div>

          <div className="space-y-4 pt-1">
            {[
              {
                title: "Draft replies when somebody answers",
                desc: "A reply lands, and a draft is written from your knowledge base with a reasoning note.",
                state: allowDraftReplies,
                setter: setAllowDraftReplies,
              },
              {
                title: "Draft comments in the extension",
                desc: "Under a climbing post, provide a calibrated draft in your voice rather than a blank box.",
                state: allowDraftComments,
                setter: setAllowDraftComments,
              },
              {
                title: "Suggest post ideas from new sources",
                desc: "When new material is added to your knowledge base, generate ready-to-use hooks.",
                state: allowSuggestIdeas,
                setter: setAllowSuggestIdeas,
              },
              {
                title: "A scheduled post goes out on its own, at the time you set",
                desc: "No second press required after you approve and select the time.",
                state: allowAutoPublish,
                setter: setAllowAutoPublish,
              },
            ].map((perm, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)] flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[var(--foreground)]">
                    {perm.title}
                  </h4>
                  <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                    {perm.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => perm.setter(!perm.state)}
                  className={cn(
                    "w-11 h-6 rounded-full transition-colors relative flex-shrink-0",
                    perm.state ? "bg-blue-600" : "bg-[var(--border-hover)]"
                  )}
                >
                  <span
                    className={cn(
                      "w-4 h-4 rounded-full bg-white absolute top-1 transition-transform",
                      perm.state ? "right-1" : "left-1"
                    )}
                  />
                </button>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[var(--muted-foreground)] text-center pt-2">
            Authentication tokens and API credentials live securely in server environment variables.
          </p>
        </div>
      </div>
    </div>
  );
}

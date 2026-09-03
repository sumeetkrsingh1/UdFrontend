"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Sparkles,
  AlertTriangle,
  Plus,
  FileText,
  Video,
  Upload,
  Send,
  CheckCircle2,
  Trash2,
  ExternalLink,
  Bot,
  User,
  Info,
  ShieldCheck,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Header } from "@/components/layout/Header";
import {
  initialKnowledgeSources,
  initialVoiceClones,
  KnowledgeSource,
  VoiceClone,
} from "@/lib/mockData";
import { cn } from "@/lib/utils";

export default function KnowledgePage() {
  const [sources, setSources] = useState<KnowledgeSource[]>(initialKnowledgeSources);
  const [clones, setClones] = useState<VoiceClone[]>(initialVoiceClones);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    {
      role: "ai",
      text: "Hello Sumeet! I am your Grounded Writer Brain. Ask me anything about your verified offers, client stories, or content angles.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setChatInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: `Based on your verified knowledge base (17 sources), "${userMsg}" aligns directly with your Rs 35,000 / $900 entry offer framework for high-ticket LinkedIn coaches.`,
        },
      ]);
    }, 600);
  };

  const handleAddSource = () => {
    const title = prompt("Enter Knowledge Document Title:");
    if (title) {
      const newSource: KnowledgeSource = {
        id: `ks-${Date.now()}`,
        title,
        type: "note",
        summary: "1,200 words indexed from notes",
        tags: ["Strategy", "Framework"],
        dateAdded: "Just now",
        status: "ready",
      };
      setSources([newSource, ...sources]);
      confetti({ particleCount: 25, spread: 45 });
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[var(--background)]">
      <Header
        title="Knowledge Constitution"
        subtitle="Everything the writing is allowed to claim, in your own words"
        badge="100% Grounded"
        actionButton={{
          label: "Add Source >",
          onClick: handleAddSource,
          icon: <Plus className="w-3.5 h-3.5" />,
        }}
      />

      <div className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        {/* Top Header Card */}
        <div className="p-8 rounded-3xl billow-card bg-gradient-to-b from-white via-white to-blue-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-sans">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Grounding Constitution Active</span>
            </div>

            <h1 className="text-3xl font-serif text-[var(--foreground)] tracking-tight">
              A writer that never <span className="italic font-light text-blue-600 dark:text-blue-400">makes things up.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
              17 sources connected. When the AI writes a comment or post, it pulls proof and phrases strictly from these materials.
            </p>
          </div>

          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 flex items-center gap-2 self-start md:self-auto transition-all"
          >
            <Bot className="w-4 h-4" />
            <span>{chatOpen ? "Hide AI Assistant" : "Ask Knowledge Base"}</span>
          </button>
        </div>

        {/* Source Breakdown Composition Bar */}
        <div className="p-6 rounded-3xl billow-card space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[var(--foreground)]">
              Source Composition Breakdown
            </h3>
            <span className="text-xs font-mono text-[var(--muted-foreground)]">
              17 files • 48,200 words indexed
            </span>
          </div>

          {/* Segmented Bar */}
          <div className="w-full h-3 rounded-full bg-[var(--card-subtle)] overflow-hidden flex">
            <div className="h-full bg-blue-600 w-[45%]" title="PDF Case Studies 45%" />
            <div className="h-full bg-emerald-500 w-[25%]" title="Live Transcripts 25%" />
            <div className="h-full bg-purple-500 w-[20%]" title="Strategy Notes 20%" />
            <div className="h-full bg-amber-500 w-[10%]" title="Video Snippets 10%" />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-[var(--foreground)]">PDF Documents (8)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-[var(--foreground)]">Call Transcripts (5)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <span className="text-[var(--foreground)]">Brand Notes (3)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="text-[var(--foreground)]">Loom Videos (1)</span>
            </div>
          </div>
        </div>

        {/* Where It Is Thin (Gap Analysis Alerts) */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[var(--foreground)]">
            Where it is thin (Knowledge Gaps)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl billow-card bg-amber-500/5 border-amber-500/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs">
                <AlertTriangle className="w-4 h-4" />
                <span>Need more specific pricing examples</span>
              </div>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                You mention a &quot;Rs 35,000 / $900 entry package&quot;, but there are no client onboarding teardowns in your files. Add 1 case study breakdown.
              </p>
            </div>

            <div className="p-5 rounded-3xl billow-card bg-blue-500/5 border-blue-500/20 space-y-2">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs">
                <Info className="w-4 h-4" />
                <span>Video transcripts are 80% text-heavy</span>
              </div>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                Adding short Loom breakdown links allows the writer to generate carousel hook ideas directly from your spoken examples.
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column: Connected Sources + Creator Voice Clones */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Source Documents List */}
          <div className="lg:col-span-7 p-6 rounded-3xl billow-card space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <div>
                <h3 className="text-base font-serif font-normal text-[var(--foreground)] text-lg">
                  Connected Materials
                </h3>
                <p className="text-xs text-[var(--muted-foreground)]">
                  Grounding references indexed by the semantic writer
                </p>
              </div>
              <button
                onClick={handleAddSource}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                + Add material
              </button>
            </div>

            <div className="space-y-3">
              {sources.map((src) => (
                <div
                  key={src.id}
                  className="p-4 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)] flex items-center justify-between gap-3 hover:border-blue-500/30 transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-[var(--foreground)] truncate">
                        {src.title}
                      </h4>
                      <p className="text-[11px] text-[var(--muted-foreground)]">
                        {src.summary} • {src.dateAdded}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                    ✓ Verified
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Creator Voice Clones */}
          <div className="lg:col-span-5 p-6 rounded-3xl billow-card space-y-4">
            <div className="border-b border-[var(--border)] pb-3">
              <h3 className="text-base font-serif font-normal text-[var(--foreground)] text-lg">
                Creator Voice Calibration
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">
                Structure and pacing matched to top industry benchmarks
              </p>
            </div>

            <div className="space-y-3">
              {clones.map((clone) => (
                <div
                  key={clone.id}
                  className="p-4 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)] space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                        {clone.name[0]}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[var(--foreground)]">{clone.name}</h4>
                        <span className="text-[10px] text-blue-600 dark:text-blue-400 font-mono">{clone.handle}</span>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      {clone.status}
                    </span>
                  </div>

                  <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                    {clone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ask Knowledge Base Drawer Modal */}
        {chatOpen && (
          <div className="p-6 rounded-3xl billow-card border-blue-500/30 space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="text-sm font-bold text-[var(--foreground)]">
                    Ask Your Knowledge Brain
                  </h3>
                  <p className="text-[11px] text-[var(--muted-foreground)]">
                    Query grounded insights, pricing lines, and offer angles
                  </p>
                </div>
              </div>

              <button
                onClick={() => setChatOpen(false)}
                className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                Close Drawer
              </button>
            </div>

            {/* Chat message bubbles */}
            <div className="space-y-3 max-h-60 overflow-y-auto p-4 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)]">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex flex-col max-w-[85%] space-y-1 text-xs",
                    m.role === "user" ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div
                    className={cn(
                      "p-3 rounded-2xl leading-relaxed",
                      m.role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)]"
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Prompt Chips */}
            <div className="flex flex-wrap gap-2">
              {[
                "What is my core Rs 35k offer pitch?",
                "What do prospects complain about most?",
                "Give me 3 carousel hooks on 14-day reach",
              ].map((chip) => (
                <button
                  key={chip}
                  onClick={() => setChatInput(chip)}
                  className="px-3 py-1 rounded-full bg-[var(--card-subtle)] hover:bg-blue-500/10 border border-[var(--border)] text-[11px] text-[var(--muted-foreground)] hover:text-blue-600 transition-all"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask your knowledge base..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 p-3 rounded-full bg-[var(--input)] border border-[var(--border)] text-xs text-[var(--foreground)] focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-500/20"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

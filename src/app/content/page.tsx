"use client";

import React, { useState } from "react";
import {
  PenTool,
  Plus,
  Sparkles,
  FileText,
  Layers,
  Image as ImageIcon,
  BarChart3,
  CheckCircle2,
  Calendar,
  Send,
  Eye,
  ChevronRight,
  ExternalLink,
  Copy,
  FolderOpen,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Header } from "@/components/layout/Header";
import { initialContentItems, ContentItem } from "@/lib/mockData";
import { cn } from "@/lib/utils";

type PipelineStage = "all" | "ideas" | "drafts" | "approved" | "scheduled" | "posted" | "archived";

export default function ContentPage() {
  const [items, setItems] = useState<ContentItem[]>(initialContentItems);
  const [stageFilter, setStageFilter] = useState<PipelineStage>("all");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  // New Post Creator State
  const [createStep, setCreateStep] = useState<1 | 2 | 3>(1);
  const [selectedFormat, setSelectedFormat] = useState<"text" | "carousel" | "infographic" | "image">("carousel");
  const [selectedAngle, setSelectedAngle] = useState("What your LinkedIn activity actually reached");
  const [postDraftContent, setPostDraftContent] = useState("");

  const filteredItems = items.filter((item) => {
    if (stageFilter === "all") return true;
    return item.stage === stageFilter;
  });

  const handleCreatePost = () => {
    confetti({ particleCount: 35, spread: 55 });
    const newItem: ContentItem = {
      id: `ci-${Date.now()}`,
      title: postDraftContent.slice(0, 45) || "New Generated Angle",
      type: selectedFormat,
      stage: "drafts",
      sourceName: selectedAngle,
      timeAgo: "Just now",
      bodySnippet: postDraftContent || "Fresh draft synthesized from your verified offer and content pillars...",
    };
    setItems([newItem, ...items]);
    setIsCreateModalOpen(false);
    setCreateStep(1);
    setPostDraftContent("");
  };

  const handleMoveStage = (id: string, newStage: ContentItem["stage"]) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, stage: newStage } : i))
    );
    if (newStage === "approved") {
      confetti({ particleCount: 25, spread: 45 });
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[var(--background)]">
      <Header
        title="Content Studio"
        subtitle="15 posts in your pipeline. 12 ideas, 2 drafts, 1 approved"
        badge="Multi-Format"
        actionButton={{
          label: "New Post >",
          onClick: () => setIsCreateModalOpen(true),
          icon: <Plus className="w-3.5 h-3.5" />,
        }}
      />

      <div className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        {/* Top Header Card */}
        <div className="p-8 rounded-3xl billow-card bg-gradient-to-b from-white via-white to-blue-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-sans">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Grounded Post Studio</span>
            </div>

            <h1 className="text-3xl font-serif text-[var(--foreground)] tracking-tight">
              Turn verified proof into <span className="italic font-light text-blue-600 dark:text-blue-400">multi-format assets.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
              Every post is synthesized from your core knowledge base, calibrated against your brand offer, and formatted for maximum engagement.
            </p>
          </div>

          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 flex items-center gap-2 self-start md:self-auto transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Generate From Offer</span>
          </button>
        </div>

        {/* Pipeline Stage Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {[
            { key: "all", label: "All (15)" },
            { key: "ideas", label: "Ideas (12)" },
            { key: "drafts", label: "Drafts (2)" },
            { key: "approved", label: "Approved (1)" },
            { key: "scheduled", label: "Scheduled (0)" },
            { key: "posted", label: "Posted (0)" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setStageFilter(tab.key as PipelineStage)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all",
                stageFilter === tab.key
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-[var(--card)] border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((post) => (
            <div
              key={post.id}
              className="p-6 rounded-3xl billow-card flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={cn(
                      "px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono uppercase",
                      post.type === "carousel" && "bg-blue-500/10 text-blue-600 dark:text-blue-400",
                      post.type === "text" && "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                      post.type === "infographic" && "bg-purple-500/10 text-purple-600 dark:text-purple-400",
                      post.type === "image" && "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    )}
                  >
                    {post.type}
                  </span>

                  <span className="text-[10px] text-[var(--muted-foreground)] font-mono">
                    {post.timeAgo}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[var(--foreground)] line-clamp-1">
                  {post.title}
                </h3>

                <p className="text-xs text-[var(--muted-foreground)] line-clamp-3 leading-relaxed">
                  {post.bodySnippet}
                </p>

                <div className="p-2.5 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)] text-[11px] text-[var(--muted-foreground)]">
                  <span className="font-semibold text-[var(--foreground)]">Source: </span>
                  {post.sourceName}
                </div>
              </div>

              {/* Stage Controls & Actions */}
              <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {post.stage === "ideas" && (
                    <button
                      onClick={() => handleMoveStage(post.id, "drafts")}
                      className="px-3 py-1 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold"
                    >
                      Turn to Draft
                    </button>
                  )}
                  {post.stage === "drafts" && (
                    <button
                      onClick={() => handleMoveStage(post.id, "approved")}
                      className="px-3 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold"
                    >
                      Approve Post
                    </button>
                  )}
                  {post.stage === "approved" && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono">
                      ✓ Ready for LinkedIn
                    </span>
                  )}
                </div>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(post.bodySnippet || post.title);
                    confetti({ particleCount: 20, spread: 40 });
                    alert("Copied post text to clipboard!");
                  }}
                  className="p-2 rounded-full hover:bg-[var(--card-subtle)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  title="Copy caption"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3-Step Post Creator Drawer */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] shadow-2xl space-y-6 animate-in fade-in zoom-in-95">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <h3 className="text-base font-serif font-normal text-[var(--foreground)] text-lg">
                    Post Creation Studio
                  </h3>
                </div>
                <p className="text-xs text-[var(--muted-foreground)]">
                  Step {createStep} of 3: {createStep === 1 ? "Select Format Shape" : createStep === 2 ? "Pick Content Angle" : "Review Draft"}
                </p>
              </div>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                Cancel
              </button>
            </div>

            {/* Step 1: Format Selector Tiles */}
            {createStep === 1 && (
              <div className="space-y-4">
                <label className="text-xs font-bold text-[var(--foreground)]">
                  Choose format shape:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: "text", label: "Text Post", icon: FileText, desc: "Hook + breakdown" },
                    { id: "carousel", label: "Carousel (5-8)", icon: Layers, desc: "Document PDF slides" },
                    { id: "infographic", label: "Infographic", icon: BarChart3, desc: "Visual comparison" },
                    { id: "image", label: "Picture Post", icon: ImageIcon, desc: "Single visual + caption" },
                  ].map((fmt) => (
                    <div
                      key={fmt.id}
                      onClick={() => setSelectedFormat(fmt.id as any)}
                      className={cn(
                        "p-4 rounded-2xl border text-center cursor-pointer transition-all space-y-2",
                        selectedFormat === fmt.id
                          ? "bg-blue-600/10 border-blue-600 text-blue-600 dark:text-blue-400 shadow-sm"
                          : "bg-[var(--card-subtle)] border-[var(--border)] hover:border-blue-500/40"
                      )}
                    >
                      <fmt.icon className="w-5 h-5 mx-auto" />
                      <div>
                        <h4 className="text-xs font-bold text-[var(--foreground)]">{fmt.label}</h4>
                        <p className="text-[10px] text-[var(--muted-foreground)]">{fmt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setCreateStep(2)}
                    className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center gap-1.5"
                  >
                    <span>Next: Angle</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Content Pillar / Angle */}
            {createStep === 2 && (
              <div className="space-y-4">
                <label className="text-xs font-bold text-[var(--foreground)]">
                  Pick a content pillar:
                </label>
                <div className="space-y-2">
                  {[
                    "What your LinkedIn activity actually reached",
                    "Put useful comments where attention is climbing",
                    "Carry public interest into the inbox",
                    "Let AI assist without speaking for you",
                    "Stop posting more just to stay busy",
                  ].map((angle) => (
                    <div
                      key={angle}
                      onClick={() => setSelectedAngle(angle)}
                      className={cn(
                        "p-3.5 rounded-2xl border cursor-pointer text-xs font-medium transition-all flex items-center justify-between",
                        selectedAngle === angle
                          ? "bg-blue-600/10 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold shadow-sm"
                          : "bg-[var(--card-subtle)] border-[var(--border)] hover:border-blue-500/40 text-[var(--foreground)]"
                      )}
                    >
                      <span>{angle}</span>
                      {selectedAngle === angle && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setCreateStep(1)}
                    className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => {
                      setPostDraftContent(
                        `Most coaches believe posting 3 times a day is the solution.\n\nHere is what actually happened when we tracked 14-day borrowed reach:\n• 731 total qualified impressions\n• 68% generated from just 5 targeted comments\n• 42 leads returned to view the core offer\n\nQuality positioning beats noisy volume every time.`
                      );
                      setCreateStep(3);
                    }}
                    className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center gap-1.5"
                  >
                    <span>Generate Draft</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Finalize Draft */}
            {createStep === 3 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-[var(--foreground)]">
                    Review generated draft:
                  </label>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    ✓ Grounded to Knowledge Base
                  </span>
                </div>

                <textarea
                  rows={6}
                  value={postDraftContent}
                  onChange={(e) => setPostDraftContent(e.target.value)}
                  className="w-full p-4 rounded-2xl bg-[var(--input)] border border-[var(--border)] text-xs text-[var(--foreground)] focus:outline-none focus:border-blue-500 leading-relaxed font-sans"
                />

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setCreateStep(2)}
                    className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleCreatePost}
                    className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Save to Pipeline</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

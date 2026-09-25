"use client";

import React, { useState } from "react";
import {
  Zap,
  TrendingUp,
  MessageSquare,
  Users,
  Award,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Flame,
  Clock,
  ShieldCheck,
  Send,
  Eye,
  Plus,
  Play,
} from "lucide-react";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import confetti from "canvas-confetti";
import { Header } from "@/components/layout/Header";
import {
  initialActionItems,
  fortnightChartData,
  initialReturnedPeople,
  ActionItem,
} from "@/lib/mockData";
import { cn } from "@/lib/utils";

export default function TodayPage() {
  const [actionItems, setActionItems] = useState<ActionItem[]>(initialActionItems);
  const [selectedAction, setSelectedAction] = useState<ActionItem | null>(null);
  const [replyText, setReplyText] = useState("");
  const [funnelFilter, setFunnelFilter] = useState<"all" | "replied" | "unreplied">("all");

  const handleOpenAction = (item: ActionItem) => {
    setSelectedAction(item);
    setReplyText(item.snippet || "");
  };

  const handleSendReply = () => {
    if (!selectedAction) return;

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
    });

    setActionItems((prev) => prev.filter((i) => i.id !== selectedAction.id));
    setSelectedAction(null);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[var(--background)]">
      <Header
        title="Today's Cockpit"
        subtitle="Live audience engagement, priority operations, and pipeline metrics"
        badge="Real-time"
        actionButton={{
          label: "Create Post >",
          onClick: () => (window.location.href = "/content"),
          icon: <Plus className="w-3.5 h-3.5" />,
        }}
      />

      <div className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        {/* Billow Hero Header Banner */}
        <div className="p-8 rounded-3xl billow-card relative overflow-hidden bg-gradient-to-b from-white via-white to-blue-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20 border border-[var(--border)]">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-sans">
              <span>🫶 The Operations Platform</span>
              <span className="w-1 h-1 rounded-full bg-blue-500" />
              <span className="text-[11px] font-mono">14-Day Cycle</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif text-[var(--foreground)] tracking-tight leading-tight">
              From lead to paid. <span className="italic font-light text-blue-600 dark:text-blue-400">All in one place.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
              Mastreach helps you write thoughtful LinkedIn comments and keep useful web articles in your knowledge base. One place for context, zero guesswork.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => (window.location.href = "/comment")}
                className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-98 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all"
              >
                <span>Find Rising Posts</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => alert("Watch 2-min interactive walkthrough")}
                className="px-4 py-2.5 rounded-full bg-[var(--card)] hover:bg-[var(--card-subtle)] border border-[var(--border)] text-xs font-semibold text-[var(--foreground)] flex items-center gap-2 transition-all shadow-xs"
              >
                <Play className="w-3.5 h-3.5 text-blue-600 fill-current" />
                <span>Watch 2-min demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Bento Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Total Reach */}
          <div className="p-5 rounded-3xl billow-card flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[var(--muted-foreground)]">
                Total Borrowed Reach
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400">
                +18.4%
              </span>
            </div>

            <div>
              <div className="text-3xl font-serif font-normal text-[var(--foreground)]">
                731
              </div>
              <p className="text-[11px] text-[var(--muted-foreground)] mt-1">
                across 22 comments in 14 days
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-[11px]">
              <span className="text-[var(--muted-foreground)]">Conversion</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                36% High
              </span>
            </div>
          </div>

          {/* Card 2: Comments Left */}
          <div className="p-5 rounded-3xl billow-card flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[var(--muted-foreground)]">
                Comments Left
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                185 Best
              </span>
            </div>

            <div>
              <div className="text-3xl font-serif font-normal text-[var(--foreground)]">
                22 <span className="text-xs font-sans text-emerald-500 font-bold">↗</span>
              </div>
              <p className="text-[11px] text-[var(--muted-foreground)] mt-1">
                33.2 reach per comment average
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-[11px]">
              <span className="text-[var(--muted-foreground)]">Response rate</span>
              <span className="font-bold text-[var(--foreground)] font-mono">
                68.2%
              </span>
            </div>
          </div>

          {/* Card 3: Returned Prospects */}
          <div className="p-5 rounded-3xl billow-card flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[var(--muted-foreground)]">
                Returned Prospects
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-purple-500/10 text-purple-600 dark:text-purple-400">
                107 Total
              </span>
            </div>

            <div>
              <div className="text-3xl font-serif font-normal text-[var(--foreground)]">
                61 <span className="text-xs font-sans text-purple-500 font-bold">↗</span>
              </div>
              <p className="text-[11px] text-[var(--muted-foreground)] mt-1">
                42 unique qualified leads
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-[11px]">
              <span className="text-[var(--muted-foreground)]">Warm Stage</span>
              <span className="font-bold text-purple-600 dark:text-purple-400 font-mono">
                26 in CRM
              </span>
            </div>
          </div>

          {/* Card 4: Impact Ratio */}
          <div className="p-5 rounded-3xl billow-card flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[var(--muted-foreground)]">
                Impact Multiplier
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400">
                Index
              </span>
            </div>

            <div>
              <div className="text-3xl font-serif font-normal text-[var(--foreground)]">
                107.0 <span className="text-xs font-sans text-amber-500 font-bold">↗</span>
              </div>
              <p className="text-[11px] text-[var(--muted-foreground)] mt-1">
                reach generated per minute spent
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-[11px]">
              <span className="text-[var(--muted-foreground)]">Efficiency</span>
              <span className="font-bold text-amber-600 dark:text-amber-400 font-mono">
                Top 5%
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Main Section: Priority Stream + 14-Day Trajectory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Priority Action Stream ("Now" Queue) */}
          <div className="lg:col-span-7 p-6 rounded-3xl billow-card flex flex-col justify-between space-y-6">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-serif font-normal text-[var(--foreground)] text-lg">
                    Priority Operations
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono">
                    {actionItems.length} Waiting
                  </span>
                </div>
                <span className="text-[11px] text-[var(--muted-foreground)]">
                  Human In The Loop
                </span>
              </div>
              <p className="text-xs text-[var(--muted-foreground)]">
                Posts and inboxes where attention is active right now. Drafted in your voice, sent only when you approve.
              </p>
            </div>

            {/* List of Action Items */}
            <div className="space-y-3">
              {actionItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)] hover:border-blue-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className={cn("w-8 h-8 rounded-full text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs", item.avatarBg || "bg-blue-600")}>
                      {item.avatarText || item.name[0]}
                    </div>
                    <div className="min-w-0 space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-bold text-[var(--foreground)] truncate">
                          {item.name}
                        </h4>
                        <span className="text-[10px] text-[var(--muted-foreground)] font-mono">
                          {item.timeAgo}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)] line-clamp-1">
                        &quot;{item.snippet}&quot;
                      </p>
                      <div className="flex items-center gap-2 pt-0.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono">
                          {item.badge}
                        </span>
                        <span className="text-[10px] text-[var(--muted-foreground)] truncate max-w-[200px]">
                          {item.headline}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenAction(item)}
                    className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5 flex-shrink-0 transition-all"
                  >
                    <span>Open it</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}

              {actionItems.length === 0 && (
                <div className="p-8 rounded-2xl bg-[var(--card-subtle)] text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                  <h4 className="text-xs font-bold text-[var(--foreground)]">
                    All caught up for today!
                  </h4>
                  <p className="text-[11px] text-[var(--muted-foreground)]">
                    The background watcher is monitoring climbing posts.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-[var(--border)] text-[11px] text-[var(--muted-foreground)] flex items-center justify-between">
              <span>Nothing is ever sent without your review.</span>
              <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                View all conversations →
              </span>
            </div>
          </div>

          {/* Right: 14-Day Reach Visualizer */}
          <div className="lg:col-span-5 p-6 rounded-3xl billow-card flex flex-col justify-between space-y-6">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-serif font-normal text-[var(--foreground)] text-lg">
                  14-Day Trajectory
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                  731 Reach
                </span>
              </div>
              <p className="text-xs text-[var(--muted-foreground)]">
                Dual trajectory showing daily comment volume against borrowed impressions.
              </p>
            </div>

            {/* Recharts Chart */}
            <div className="h-56 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={fortnightChartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="reachGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.6} />
                  <XAxis
                    dataKey="day"
                    stroke="var(--muted-foreground)"
                    fontSize={10}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="var(--muted-foreground)"
                    fontSize={10}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--card)",
                      borderColor: "var(--border)",
                      borderRadius: "1rem",
                      fontSize: "12px",
                      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="reach"
                    name="Reach"
                    stroke="#2563eb"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#reachGradient)"
                  />
                  <Bar
                    dataKey="comments"
                    name="Comments"
                    fill="#10b981"
                    radius={[4, 4, 0, 0]}
                    barSize={8}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Funnel Progress Tracker */}
            <div className="space-y-2 pt-2 border-t border-[var(--border)]">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[var(--foreground)]">
                  Funnel Conversion Progress
                </span>
                <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">
                  61 / 107 (57%)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-[var(--card-subtle)] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full w-[57%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Lead Stage CRM Table Section */}
        <div className="p-6 rounded-3xl billow-card space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-4">
            <div>
              <h3 className="text-base font-serif font-normal text-[var(--foreground)] text-lg">
                Who came back to your posts
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">
                107 sessions from 61 people. 42 of them are unique qualified leads.
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setFunnelFilter("all")}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-semibold transition-all",
                  funnelFilter === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-[var(--card-subtle)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                )}
              >
                All (61)
              </button>
              <button
                onClick={() => setFunnelFilter("replied")}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-semibold transition-all",
                  funnelFilter === "replied"
                    ? "bg-blue-600 text-white"
                    : "bg-[var(--card-subtle)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                )}
              >
                Replied (77)
              </button>
              <button
                onClick={() => setFunnelFilter("unreplied")}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-semibold transition-all",
                  funnelFilter === "unreplied"
                    ? "bg-blue-600 text-white"
                    : "bg-[var(--card-subtle)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                )}
              >
                Waiting (30)
              </button>
            </div>
          </div>

          {/* CRM Grid List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {initialReturnedPeople.map((lead) => (
              <div
                key={lead.id}
                className="p-4 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)] hover:border-blue-500/30 transition-all flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={cn("w-8 h-8 rounded-full text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs", lead.avatarBg)}>
                    {lead.avatarText}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-[var(--foreground)] truncate">
                      {lead.name}
                    </h4>
                    <p className="text-[11px] text-[var(--muted-foreground)] truncate">
                      {lead.badge}
                    </p>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    {lead.count} {lead.type === "replied_comment" ? "replies" : "visits"}
                  </span>
                  <p className="text-[10px] text-[var(--muted-foreground)] mt-0.5">
                    {lead.timeAgo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Reply Modal Drawer */}
      {selectedAction && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-[var(--foreground)]">
                  Approve Draft Reply
                </h3>
              </div>
              <button
                onClick={() => setSelectedAction(null)}
                className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                Cancel
              </button>
            </div>

            <div className="p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)] space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[var(--foreground)]">{selectedAction.name}</span>
                <span className="text-[10px] text-[var(--muted-foreground)]">{selectedAction.timeAgo}</span>
              </div>
              <p className="text-xs text-[var(--muted-foreground)]">
                &quot;{selectedAction.snippet}&quot;
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[var(--foreground)]">
                Drafted in your voice:
              </label>
              <textarea
                rows={4}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="w-full p-3 rounded-2xl bg-[var(--input)] border border-[var(--border)] text-xs text-[var(--foreground)] focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
              <span className="text-[11px] text-[var(--muted-foreground)]">
                Opens on LinkedIn upon approval.
              </span>
              <button
                onClick={handleSendReply}
                className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Approve & Send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

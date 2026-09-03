"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  TrendingUp,
  Sparkles,
  Flame,
  Radio,
  Clock,
  ArrowUpRight,
  Send,
  ExternalLink,
  ChevronRight,
  Eye,
  SlidersHorizontal,
  CheckCircle2,
} from "lucide-react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import confetti from "canvas-confetti";
import { Header } from "@/components/layout/Header";
import { fortnightChartData } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const risingPosts = [
  {
    id: "rp-1",
    author: "Shreya Pattar",
    headline: "Agency Founder & LinkedIn Top Voice",
    timeAgo: "14m ago",
    velocity: 94,
    currentComments: 18,
    projectedReach: 4200,
    snippet: "The #1 reason coaches fail to monetize their LinkedIn audience is not lack of content, it's lack of a specific entry offer...",
    recommendedAngle: "Contrast free value traps with paid high-agency advisory.",
    draft: "Spot on Shreya. Most coaches get trapped in the 'content hamster wheel' thinking 50 likes will pay the rent. Without a defined transition from public comment to private discovery, attention evaporates.",
  },
  {
    id: "rp-2",
    author: "Justin Welsh",
    headline: "Building a portfolio of one-person businesses",
    timeAgo: "28m ago",
    velocity: 88,
    currentComments: 34,
    projectedReach: 8900,
    snippet: "Systems beat willpower every single time. If your audience growth relies on you manually staring at the feed for 3 hours, you built a job...",
    recommendedAngle: "Back up with 14-day telemetry & human-in-the-loop workflow.",
    draft: "The key differentiator is having the system surface the 3 climbing posts worth talking on, rather than doomscrolling 500 random ones. Efficiency multiplies impact.",
  },
  {
    id: "rp-3",
    author: "Dan Koe",
    headline: "Writer & Brand Strategist",
    timeAgo: "45m ago",
    velocity: 82,
    currentComments: 51,
    projectedReach: 6500,
    snippet: "Your writing voice shouldn't sound like ChatGPT in a suit. Write the way you talk to a peer across a dinner table...",
    recommendedAngle: "Highlight brand grounding & anti-slop knowledge base.",
    draft: "Exactly why AI without grounding feels hollow. When writing stems from actual case studies and real client complaints, it resonates effortlessly.",
  },
];

export default function CommentPage() {
  const [posts, setPosts] = useState(risingPosts);
  const [activeDraftId, setActiveDraftId] = useState<string | null>(null);
  const [customDraft, setCustomDraft] = useState("");
  const [subTab, setSubTab] = useState<"radar" | "analytics" | "history">("radar");

  const handleOpenDraft = (post: (typeof risingPosts)[0]) => {
    setActiveDraftId(post.id);
    setCustomDraft(post.draft);
  };

  const handleApproveDraft = () => {
    confetti({ particleCount: 35, spread: 50 });
    alert("Comment copied to clipboard and LinkedIn post opened!");
    setActiveDraftId(null);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[var(--background)]">
      <Header
        title="Comment Radar"
        subtitle="Borrowed reach, one comment at a time"
        badge="Live Feeds"
      />

      <div className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        {/* Top Header Card */}
        <div className="p-8 rounded-3xl billow-card bg-gradient-to-b from-white via-white to-blue-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-sans">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>Radar Active • 14 feeds monitored</span>
              </div>

              <h1 className="text-3xl font-serif text-[var(--foreground)] tracking-tight">
                Put useful comments <span className="italic font-light text-blue-600 dark:text-blue-400">where attention is climbing.</span>
              </h1>

              <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
                731 people reached across 22 comments in the last 14 days. Your top 5 comments brought in 68% of that reach.
              </p>
            </div>

            {/* Segmented Filter Tab */}
            <div className="p-1 rounded-full bg-[var(--card-subtle)] border border-[var(--border)] flex items-center gap-1 self-start md:self-auto">
              <button
                onClick={() => setSubTab("radar")}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-semibold transition-all",
                  subTab === "radar"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                )}
              >
                Rising Radar
              </button>
              <button
                onClick={() => setSubTab("analytics")}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-semibold transition-all",
                  subTab === "analytics"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                )}
              >
                14-Day Trajectory
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl billow-card space-y-3">
            <span className="text-xs font-semibold text-[var(--muted-foreground)]">
              Concentrated Attention
            </span>
            <div className="text-3xl font-serif font-normal text-[var(--foreground)]">
              68% Share
            </div>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              Your top 5 comments account for 497 of your 731 total borrowed reach. Quality beats volume.
            </p>
          </div>

          <div className="p-6 rounded-3xl billow-card space-y-3">
            <span className="text-xs font-semibold text-[var(--muted-foreground)]">
              Average Velocity
            </span>
            <div className="text-3xl font-serif font-normal text-blue-600 dark:text-blue-400">
              88.4 Score
            </div>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              Targeting posts within their first 30 minutes yields 4.2x higher reply engagement.
            </p>
          </div>

          <div className="p-6 rounded-3xl billow-card space-y-3">
            <span className="text-xs font-semibold text-[var(--muted-foreground)]">
              Grounded AI Engine
            </span>
            <div className="text-3xl font-serif font-normal text-emerald-600 dark:text-emerald-400">
              100% Voice
            </div>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              Drafts strictly reference your proven framework and brand tone. Zero AI hallucinations.
            </p>
          </div>
        </div>

        {/* Dynamic Section: Radar vs Trajectory Chart */}
        {subTab === "radar" ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-serif font-normal text-[var(--foreground)] text-lg">
                  Rising Opportunities Feed
                </h3>
                <p className="text-xs text-[var(--muted-foreground)]">
                  Climbing fast right now in your target niche
                </p>
              </div>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
                {posts.length} high-velocity posts detected
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 rounded-3xl billow-card flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                          {post.author[0]}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[var(--foreground)]">
                            {post.author}
                          </h4>
                          <p className="text-[10px] text-[var(--muted-foreground)] truncate max-w-[130px]">
                            {post.headline}
                          </p>
                        </div>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        {post.velocity}% Vel
                      </span>
                    </div>

                    <p className="text-xs text-[var(--muted-foreground)] line-clamp-3 leading-relaxed">
                      &quot;{post.snippet}&quot;
                    </p>

                    <div className="p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)] space-y-1">
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Angle
                      </span>
                      <p className="text-[11px] text-[var(--foreground)] leading-tight">
                        {post.recommendedAngle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between">
                    <span className="text-[10px] text-[var(--muted-foreground)] font-mono">
                      {post.currentComments} comments • ~{post.projectedReach} reach
                    </span>

                    <button
                      onClick={() => handleOpenDraft(post)}
                      className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center gap-1 transition-all"
                    >
                      <span>Draft</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-3xl billow-card space-y-4">
            <div>
              <h3 className="text-base font-serif font-normal text-[var(--foreground)] text-lg">
                14-Day Comment & Reach Analytics
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">
                Correlating daily comment interactions with total audience impressions
              </p>
            </div>

            <div className="h-72 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={fortnightChartData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.6} />
                  <XAxis dataKey="day" stroke="var(--muted-foreground)" fontSize={11} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--card)",
                      borderColor: "var(--border)",
                      borderRadius: "1rem",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="reach" fill="#2563eb" radius={[6, 6, 0, 0]} barSize={20} />
                  <Line type="monotone" dataKey="comments" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>

      {/* Comment Approver Modal Drawer */}
      {activeDraftId && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-[var(--foreground)]">
                  Review & Approve Comment
                </h3>
              </div>
              <button
                onClick={() => setActiveDraftId(null)}
                className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                Cancel
              </button>
            </div>

            <textarea
              rows={4}
              value={customDraft}
              onChange={(e) => setCustomDraft(e.target.value)}
              className="w-full p-3 rounded-2xl bg-[var(--input)] border border-[var(--border)] text-xs text-[var(--foreground)] focus:outline-none focus:border-blue-500 leading-relaxed"
            />

            <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
              <span className="text-[11px] text-[var(--muted-foreground)]">
                Copies and opens LinkedIn in 1 click.
              </span>
              <button
                onClick={handleApproveDraft}
                className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Copy & Launch ↗</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

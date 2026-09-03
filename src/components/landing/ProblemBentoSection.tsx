"use client";

import React from "react";
import {
  AlertTriangle,
  Clock,
  MessageSquareX,
  Layers,
  TrendingDown,
  XCircle,
  CheckCircle2,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import { BENTO_PROBLEMS } from "@/lib/landingData";
import { cn } from "@/lib/utils";

const chartData = [
  { name: "Viral Views", value: 92, fill: "#c85a3b" },
  { name: "Casual Likes", value: 45, fill: "#d97706" },
  { name: "Retainer Calls", value: 3, fill: "#dc2626" },
];

export function ProblemBentoSection() {
  return (
    <section id="problem" className="relative py-24 md:py-32 overflow-hidden bg-[#faf7f2] border-y border-[#e7e5e4]">
      {/* Background Subtle Warm Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#fff4ed] rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#fef3c7] rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff4ed] border border-[#fcd5c7] text-[#c85a3b] text-xs font-bold tracking-wide mb-4 shadow-xs">
            <AlertTriangle className="w-3.5 h-3.5 text-[#c85a3b]" />
            <span>THE BROKEN LINKEDIN PLAYBOOK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight mb-4">
            Why 98% of Founders Post Daily but{" "}
            <span className="italic text-[#c85a3b]">
              Never Close High-Ticket Clients.
            </span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            The traditional LinkedIn playbook is broken. Algorithmic vanity impressions do not build genuine relationship trust or convert into signed $5k–$20k retainers without an intentional bridge.
          </p>
        </div>

        {/* Bento Box Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: The Vanity Metric Trap (Span 2 Col) */}
          <div className="md:col-span-2 warm-card p-6 sm:p-8 relative overflow-hidden group">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between relative z-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200 mb-4">
                  <span>Traffic vs Trust Gap</span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl sm:text-6xl font-serif font-black text-[#c85a3b] tracking-tight">
                    94%
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-700 max-w-[200px]">
                    of viral posts generate zero pipeline revenue
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  The Vanity Metric Trap
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Broad memes and generic motivational posts attract thousands of passive scrollers, but zero qualified buyers with purchasing authority.
                </p>

                {/* Bullets Chunk */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-stone-700">
                    <XCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                    <span>Broad reach attracts passive scrollers, not decision-makers</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-700">
                    <XCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                    <span>Zero natural bridge from post impressions to discovery calls</span>
                  </div>
                </div>
              </div>

              {/* Mini Interactive Chart Visualization */}
              <div className="w-full lg:w-72 bg-[#faf7f2] rounded-2xl p-4 border border-[#e7e5e4] flex flex-col justify-between">
                <div className="text-[11px] font-bold text-stone-600 mb-2 flex items-center justify-between">
                  <span>TRADITIONAL POST OUTCOMES</span>
                  <span className="text-[#c85a3b] font-bold">97% Dropoff</span>
                </div>
                <div className="h-36 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                      <XAxis dataKey="name" stroke="#78716c" fontSize={10} tickLine={false} />
                      <YAxis stroke="#78716c" fontSize={10} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#ffffff",
                          borderColor: "#e7e5e4",
                          borderRadius: "8px",
                          fontSize: "11px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                        }}
                      />
                      <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-[10px] text-center text-stone-500 mt-2">
                  Source: 2026 B2B LinkedIn Attribution Study
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Manual Outreach Burnout (Span 1 Col) */}
          <div className="warm-card p-6 sm:p-8 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 mb-4">
                  <Clock className="w-3 h-3 text-[#d97706]" />
                  <span>Time Drain</span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-serif font-black text-[#d97706] tracking-tight">
                    40+ hrs
                  </span>
                </div>
                <div className="text-xs font-semibold text-stone-700 mb-4">
                  lost every month to copy-pasting cold manual DMs
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  Cold Outreach Exhaustion
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed mb-6">
                  Sending 50 cold robotic pitches a day yields an abysmal 1.8% reply rate and risks permanent account restrictions.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#faf7f2] border border-amber-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-[#d97706] flex-shrink-0">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <div className="text-[11px] text-stone-700 font-medium">
                  <span className="text-[#d97706] font-bold">1.8%</span> avg reply rate from generic cold pitch templates
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: The Ghost DM Chasm (Span 1 Col) */}
          <div className="warm-card p-6 sm:p-8 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-800 border border-orange-200 mb-4">
                  <MessageSquareX className="w-3 h-3 text-[#c85a3b]" />
                  <span>Lost Intent</span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-serif font-black text-[#c85a3b] tracking-tight">
                    &lt; 2%
                  </span>
                </div>
                <div className="text-xs font-semibold text-stone-700 mb-4">
                  warm leads convert without rapid, thoughtful follow-up
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  The Golden Window Chasm
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed mb-6">
                  When prospects comment on creator posts, waiting hours to connect causes lead warmth to decay by 80%.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#faf7f2] border border-orange-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-[#c85a3b] flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-[11px] text-stone-700 font-medium">
                  <span className="text-[#c85a3b] font-bold">15 Mins</span> is the golden window before prospect intent fades
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Fragmented Tool Tax (Span 2 Col) */}
          <div className="md:col-span-2 warm-card p-6 sm:p-8 relative overflow-hidden group">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between relative z-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-700 border border-stone-200 mb-4">
                  <Layers className="w-3 h-3 text-stone-600" />
                  <span>Unified System</span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl sm:text-6xl font-serif font-black text-[#1e3a5f] tracking-tight">
                    5 Tools
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-700 max-w-[220px]">
                    replaced by one unified relationship & CRM engine
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  The Chaotic Tool Tax
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Juggling scrapers, Chrome plugins, disconnected Notion sheets, and generic ChatGPT tabs creates data silos and invites LinkedIn account restrictions.
                </p>
              </div>

              {/* Fragmented Tool Badges Matrix */}
              <div className="w-full lg:w-80 flex flex-col gap-2.5">
                <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                  The Fragmented Stack You Replace:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="px-3 py-2 rounded-xl bg-white border border-red-200 flex items-center justify-between text-[11px] text-stone-500 line-through">
                    <span>Unsafe Scrapers</span>
                    <XCircle className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-white border border-red-200 flex items-center justify-between text-[11px] text-stone-500 line-through">
                    <span>Generic AI Tabs</span>
                    <XCircle className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-white border border-red-200 flex items-center justify-between text-[11px] text-stone-500 line-through">
                    <span>Manual Spreadsheets</span>
                    <XCircle className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-white border border-red-200 flex items-center justify-between text-[11px] text-stone-500 line-through">
                    <span>Bot Automations</span>
                    <XCircle className="w-3.5 h-3.5 text-red-500" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#fff4ed] border border-[#fcd5c7] flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2d6a4f]" />
                    <span className="text-xs font-bold text-stone-900">
                      Audience OS Unified Engine
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#c85a3b] bg-white px-2 py-0.5 rounded border border-[#fcd5c7]">
                    All-in-One
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

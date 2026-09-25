"use client";

import React from "react";
import { Check, X, Minus, Sparkles, Shield, Zap, Layers, ArrowRight } from "lucide-react";
import { COMPARISON_DATA } from "@/lib/landingData";
import { cn } from "@/lib/utils";
import { WhisperText } from "./WhisperText";

export function FeatureComparisonSection() {
  return (
    <section id="comparison" className="relative py-24 md:py-32 bg-[#F9F9FB] border-t border-[#E5E9EE]">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#E0F3FB]/70 via-[#FFF480]/30 to-[#D2C5FA]/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Headline */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F3FB] border border-[#B0E1F4] text-[#001AD3] text-xs font-extrabold tracking-wide mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#001AD3]" />
            <span>⚡ WHY LEADING FOUNDERS CHOOSE AUDIENCE OS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1C1C] tracking-tight leading-tight mb-4">
            Built for Authentic Inbound,{" "}
            <mark className="bg-[#FFF480] text-[#001AD3] px-2 py-0.5 rounded-md inline-block">
              Not Cold Spam Bots.
            </mark>
          </h2>

          <WhisperText
            text="See how Mastreach helps you write with context while keeping every final action in your hands."
            className="text-stone-600 text-sm sm:text-base leading-relaxed"
          />
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[760px] bg-white rounded-3xl border border-[#CCD5DF] shadow-md overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-white border-b border-[#CCD5DF] text-xs font-bold text-stone-900">
              <div className="col-span-4 p-5 sm:p-6 flex items-center text-sm font-black text-stone-900">
                Core Capabilities
              </div>

              {/* Mastreach Column Header (Highlighted) */}
              <div className="col-span-3 p-5 sm:p-6 bg-[#001AD3] text-white flex flex-col items-center justify-center text-center relative shadow-sm">
                <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-[#FFF480] text-[#001AD3] mb-1">
                  OUR SOLUTION
                </span>
                <span className="text-base font-black tracking-tight">Mastreach</span>
                <span className="text-[11px] text-blue-100 font-normal">Human-Centric Inbound</span>
              </div>

              {/* Cold Outreach Bots */}
              <div className="col-span-2 p-5 sm:p-6 flex flex-col items-center justify-center text-center bg-stone-50 border-l border-[#CCD5DF]">
                <span className="text-xs font-bold text-stone-700">Cold Spam Bots</span>
                <span className="text-[10px] text-stone-400 font-normal">Browser Extensions</span>
              </div>

              {/* Manual Inbound */}
              <div className="col-span-3 p-5 sm:p-6 flex flex-col items-center justify-center text-center bg-stone-50 border-l border-[#CCD5DF]">
                <span className="text-xs font-bold text-stone-700">Manual Inbound DMs</span>
                <span className="text-[10px] text-stone-400 font-normal">Spreadsheets & Tabs</span>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-[#E5E9EE]">
              {COMPARISON_DATA.map((row, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "grid grid-cols-12 text-xs transition-colors hover:bg-blue-50/20",
                    idx % 2 === 0 ? "bg-white" : "bg-[#FDFDFE]"
                  )}
                >
                  {/* Feature Title */}
                  <div className="col-span-4 p-5 sm:p-6 flex flex-col justify-center">
                    <span className="font-extrabold text-stone-900 text-sm mb-1">
                      {row.feature}
                    </span>
                  </div>

                  {/* Mastreach Cell (Highlighted) */}
                  <div className="col-span-3 p-5 sm:p-6 bg-blue-50/50 flex items-start gap-2.5 border-x border-[#CCD5DF]/60">
                    <div className="w-5 h-5 rounded-full bg-[#001AD3] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs font-semibold text-stone-900 leading-snug">
                      {row.audienceOs.text.replace("✅ ", "")}
                    </span>
                  </div>

                  {/* Cold Outreach Bots Cell */}
                  <div className="col-span-2 p-5 sm:p-6 flex items-start gap-2 border-r border-[#CCD5DF]/60 bg-stone-50/40">
                    <div className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[11px] text-stone-500 leading-snug">
                      {row.coldOutreachBots.text.replace("❌ ", "")}
                    </span>
                  </div>

                  {/* Manual Inbound Cell */}
                  <div className="col-span-3 p-5 sm:p-6 flex items-start gap-2 bg-stone-50/40">
                    <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Minus className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[11px] text-stone-500 leading-snug">
                      {row.manualDMs.text.replace("✅ ", "").replace("❌ ", "")}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout Banner */}
            <div className="p-6 bg-[#001AD3] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-[#FFF480]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-white">
                    Migrating from an unsafe tool?
                  </h4>
                  <p className="text-xs text-blue-100">
                    We import your lead lists, creator feeds, and team settings in under 5 minutes.
                  </p>
                </div>
              </div>

              <a
                href="/today"
                className="px-6 py-3 rounded-full bg-[#FFF480] hover:bg-[#fffa9e] text-[#001AD3] text-xs font-extrabold transition-all shadow-sm flex items-center gap-2 flex-shrink-0 cursor-pointer"
              >
                <span>Start Free 7-Day Migration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

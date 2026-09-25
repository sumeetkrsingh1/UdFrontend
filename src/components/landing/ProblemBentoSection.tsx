"use client";

import React from "react";
import { BENTO_PROBLEMS } from "@/lib/landingData";
import { WhisperText } from "./WhisperText";

export const ProblemBentoSection: React.FC = () => {
  return (
    <section id="bento" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF480] text-[#1C1C1C] text-xs font-bold uppercase tracking-wider mb-4 border border-[#FFF8AD]">
            Built for thoughtful readers and writers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1C1C] tracking-tight leading-[1.2] font-heading">
            One assistant for <mark className="expandi-mark">LinkedIn and the web</mark>
          </h2>
          <WhisperText
            text="Write better replies on LinkedIn, then save the articles that matter directly into your knowledge base for future grounding."
            className="mt-4 text-base sm:text-lg text-[#4B5567] leading-relaxed"
          />
        </div>

        {/* 2x2 Alternating Multi-Pastel Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BENTO_PROBLEMS.map((item, index) => (
            <div
              key={item.id}
              style={{ backgroundColor: item.cardBg }}
              className="rounded-3xl p-8 sm:p-10 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Micro-Badge */}
                <div
                  style={{
                    backgroundColor: item.badgeBg,
                    color: item.badgeColor,
                    borderColor: `${item.badgeColor}30`,
                  }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border mb-6 shadow-xs"
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.badgeColor }}></span>
                  <span>{item.badge}</span>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1C1C] tracking-tight leading-snug font-heading mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#4B5567] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 mb-8">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[#1C1C1C]">
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 shadow-xs border border-slate-200/60 font-bold text-xs">
                        ✓
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Metric & Action Bar */}
              <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl sm:text-3xl font-black text-[#1C1C1C] font-heading">
                    {item.stat}
                  </div>
                  <div className="text-xs text-[#4B5567] max-w-[180px] leading-tight font-medium">
                    {item.statLabel}
                  </div>
                </div>

                <a
                  href="#pricing"
                  className="expandi-btn-arrow text-sm py-2 px-4 rounded-full bg-white text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-all shadow-xs self-start sm:self-auto font-bold"
                >
                  <span>{item.ctaText}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

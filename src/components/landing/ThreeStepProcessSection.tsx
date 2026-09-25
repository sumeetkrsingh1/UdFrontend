"use client";

import React from "react";
import Link from "next/link";
import { THREE_STEPS } from "@/lib/landingData";
import { WhisperText } from "./WhisperText";

export const ThreeStepProcessSection: React.FC = () => {
  return (
    <section id="three-steps" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F3FB] text-[#001AD3] text-xs font-bold uppercase tracking-wider mb-4 border border-[#B0E1F4]">
              How Mastreach works
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1C1C] tracking-tight leading-[1.2] font-heading">
              Turn context into <mark className="expandi-mark">better writing</mark>
            </h2>
          </div>
          <WhisperText
            text="Draft thoughtful LinkedIn comments in your voice, or save useful articles from anywhere on the web for later."
            className="text-base sm:text-lg text-[#4B5567] max-w-md leading-relaxed"
          />
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {THREE_STEPS.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bgClass} rounded-3xl p-8 sm:p-10 border border-black/5 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group`}
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-[#1C1C1C]/60">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/70 text-[#1C1C1C] border border-black/5 shadow-2xs">
                    {item.badgeText}
                  </span>
                </div>

                {/* Step Vector Graphic */}
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-xs border border-black/5 mb-6 group-hover:scale-105 transition-transform">
                  {item.iconType === "account" && "👤"}
                  {item.iconType === "campaign" && "🎯"}
                  {item.iconType === "revenue" && "🚀"}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1C1C1C] font-heading mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4B5567] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-black/10">
                <Link
                  href="/settings"
                  className="expandi-btn-arrow text-sm font-bold text-[#1C1C1C] hover:text-[#001AD3]"
                >
                  <span>Get Started</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

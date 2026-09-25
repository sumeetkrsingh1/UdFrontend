"use client";

import React, { useState } from "react";
import { TESTIMONIALS_DATA } from "@/lib/landingData";

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Trust Badges */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quote Icon */}
            <div className="w-14 h-12 text-[#21ABE1]">
              <svg viewBox="0 0 73 59" fill="currentColor" className="w-full h-full">
                <path d="M0 38.4c0 12.8 8 20.1 16.9 20.1a15 15 0 0 0 15-14.8c0-8.3-5.7-14-13.2-14a13 13 0 0 0-3.6.5A38.1 38.1 0 0 1 31.3 8.7L20.8.5A47 47 0 0 0 0 38.5Zm41 0c0 12.8 8 20.1 17.2 20.1 8.2 0 14.8-6.6 14.8-14.8 0-8.3-5.7-14-13.2-14-1.4 0-3 .3-3.7.5A38.1 38.1 0 0 1 72.3 8.7L61.8.5a47 47 0 0 0-20.7 38Z" />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1C1C] tracking-tight leading-[1.2] font-heading">
              People like you use Mastreach to capture context and <mark className="expandi-mark">write with confidence</mark>
            </h2>

            <p className="text-base text-[#4B5567] leading-relaxed">
              Keep the useful things you read close, and bring that context into the comments you write on LinkedIn.
            </p>

            {/* Trust Badges Grid (G2 & Capterra style) */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <div className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#FF492C] text-white font-black text-sm flex items-center justify-center">
                  G2
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1C1C1C]">Leader Summer 2026</div>
                  <div className="text-[10px] text-amber-500 font-bold">★★★★★ 4.9/5 (420+ Reviews)</div>
                </div>
              </div>

              <div className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#001AD3] text-white font-black text-sm flex items-center justify-center">
                  CP
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1C1C1C]">Top Rated Category</div>
                  <div className="text-[10px] text-emerald-600 font-bold">100% Verified Quality</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Testimonial Cards */}
          <div className="lg:col-span-7 space-y-4">
            {TESTIMONIALS_DATA.map((t, idx) => {
              const isSelected = activeIdx === idx;

              return (
                <div
                  key={t.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#0027DB] text-white border-[#0027DB] shadow-xl translate-x-1"
                      : "bg-white text-[#1C1C1C] border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-11 h-11 rounded-full font-bold flex items-center justify-center text-sm shadow-xs ${
                          isSelected
                            ? "bg-white text-[#0027DB]"
                            : "bg-[#E0F3FB] text-[#001AD3]"
                        }`}
                      >
                        {t.author.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className={`font-bold text-base font-heading ${isSelected ? "text-white" : "text-[#1C1C1C]"}`}>
                          {t.author}
                        </h4>
                        <div className={`text-xs ${isSelected ? "text-white/80" : "text-[#728095]"}`}>
                          <strong>{t.role}</strong> • {t.company}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        isSelected
                          ? "bg-white/20 text-[#FFF480]"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      {t.verifiedMetric}
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed ${isSelected ? "text-white/90" : "text-[#4B5567]"}`}>
                    &quot;{t.quote}&quot;
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import {
  TWO_DIRECTION_FEATURES_ROW1,
  TWO_DIRECTION_FEATURES_ROW2,
} from "@/lib/landingData";

export const TwoDirectionFeatureSlider: React.FC = () => {
  // Duplicate arrays for smooth infinite scrolling
  const row1Cards = [
    ...TWO_DIRECTION_FEATURES_ROW1,
    ...TWO_DIRECTION_FEATURES_ROW1,
    ...TWO_DIRECTION_FEATURES_ROW1,
  ];
  const row2Cards = [
    ...TWO_DIRECTION_FEATURES_ROW2,
    ...TWO_DIRECTION_FEATURES_ROW2,
    ...TWO_DIRECTION_FEATURES_ROW2,
  ];

  return (
    <section id="two-direction" className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F3FB] text-[#001AD3] text-xs font-bold uppercase tracking-wider mb-4 border border-[#B0E1F4]">
          Comprehensive Feature Matrix
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1C1C] tracking-tight font-heading">
          Engineered for <mark className="expandi-mark">depth, safety &amp; speed</mark>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4B5567] max-w-2xl mx-auto">
          Every tool you need to orchestrate multi-profile commentary feeds, qualify high-intent responses, and sync closed revenue.
        </p>
      </div>

      {/* Row 1: Scrolls Left */}
      <div className="relative w-full overflow-hidden mb-6 flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-left flex items-center gap-6 py-2">
          {row1Cards.map((feat, idx) => (
            <div
              key={`row1-${feat.id}-${idx}`}
              className="w-72 sm:w-80 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#001AD3]/40 transition-all flex flex-col justify-between shrink-0 select-none group"
            >
              <div>
                <div
                  style={{ backgroundColor: feat.avatarBg }}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-[#1C1C1C] font-bold text-lg mb-4 shadow-xs"
                >
                  ⚡
                </div>
                <h3 className="font-bold text-base text-[#1C1C1C] font-heading group-hover:text-[#001AD3] transition-colors mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#4B5567] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Scrolls Right */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-right flex items-center gap-6 py-2">
          {row2Cards.map((feat, idx) => (
            <div
              key={`row2-${feat.id}-${idx}`}
              className="w-72 sm:w-80 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#001AD3]/40 transition-all flex flex-col justify-between shrink-0 select-none group"
            >
              <div>
                <div
                  style={{ backgroundColor: feat.avatarBg }}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-[#4B2896] font-bold text-lg mb-4 shadow-xs"
                >
                  ★
                </div>
                <h3 className="font-bold text-base text-[#1C1C1C] font-heading group-hover:text-[#001AD3] transition-colors mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#4B5567] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

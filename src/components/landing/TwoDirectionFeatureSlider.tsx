"use client";

import React from "react";
import {
  TWO_DIRECTION_FEATURES_ROW1,
  TWO_DIRECTION_FEATURES_ROW2,
} from "@/lib/landingData";

export const TwoDirectionFeatureSlider: React.FC = () => {
  const streamRows = [
    {
      label: "LIVE ACTIVITY",
      direction: "left",
      cards: [
        ...TWO_DIRECTION_FEATURES_ROW1,
        ...TWO_DIRECTION_FEATURES_ROW1,
        ...TWO_DIRECTION_FEATURES_ROW1,
      ],
      accent: "#001AD3",
    },
    {
      label: "COMMENT ASSISTANT",
      direction: "right",
      cards: [
        ...TWO_DIRECTION_FEATURES_ROW2,
        ...TWO_DIRECTION_FEATURES_ROW2,
        ...TWO_DIRECTION_FEATURES_ROW2,
      ],
      accent: "#E46C5C",
    },
  ];

  return (
    <section id="two-direction" className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F3FB] text-[#001AD3] text-xs font-bold uppercase tracking-wider mb-4 border border-[#B0E1F4]">
          Your LinkedIn, finally connected
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1C1C] tracking-tight font-heading">
          From every signal to <mark className="expandi-mark">your next move.</mark>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4B5567] max-w-2xl mx-auto">
          Mastreach watches what matters, helps you create what to say, captures what you learn, and shows you what actually works.
        </p>
        <p className="mt-4 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#001AD3]">
          Watch <span className="text-[#21ABE1]">→</span> Understand{" "}
          <span className="text-[#21ABE1]">→</span> Create{" "}
          <span className="text-[#21ABE1]">→</span> Engage{" "}
          <span className="text-[#21ABE1]">→</span> Learn
        </p>
      </div>

      {streamRows.map(({ direction, cards }, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className={`relative w-full overflow-hidden ${rowIndex < streamRows.length - 1 ? "mb-6" : ""} flex items-center`}
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

          <div className="px-4 sm:px-6 lg:px-8 w-full">
            <div
              className={`flex items-center gap-6 py-2 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
            >
              {cards.map((feat, idx) => (
                <div
                  key={`${rowIndex}-${feat.id}-${idx}`}
                  className="w-72 sm:w-80 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#001AD3]/40 transition-all flex flex-col justify-between shrink-0 select-none group"
                >
                  <div>
                    <div
                      style={{ backgroundColor: feat.avatarBg }}
                      className="w-11 h-11 rounded-full flex items-center justify-center text-[#1C1C1C] font-bold text-lg mb-4 shadow-xs"
                    >
                      {feat.title.split(" ")[0].slice(0, 1).toUpperCase()}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-base text-[#1C1C1C] font-heading group-hover:text-[#001AD3] transition-colors leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-[#4B5567] leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

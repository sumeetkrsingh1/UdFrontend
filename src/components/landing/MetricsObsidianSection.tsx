"use client";

import React from "react";
import { COUNTERS_DATA } from "@/lib/landingData";

export const MetricsObsidianSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#001AD3] to-[#0027DB] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle star particle accents */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5%" cy="20%" r="2" fill="#FFF480" />
              <circle cx="95%" cy="80%" r="3" fill="#FFF480" />
              <circle cx="50%" cy="15%" r="2" fill="#21ABE1" />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 items-center relative z-10">
            {COUNTERS_DATA.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="text-center flex flex-col items-center justify-center px-4">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
                    {item.prefix && <span className="text-[#FFF480]">{item.prefix}</span>}
                    {item.value}
                    {item.suffix && <span className="text-[#FFF480]">{item.suffix}</span>}
                  </div>
                  <div className="mt-2 text-sm sm:text-base font-bold text-white/95 font-heading">
                    {item.label}
                  </div>
                  <div className="mt-1 text-xs text-white/70 font-medium">
                    {item.subtext}
                  </div>
                </div>

                {/* Vertical Divider for desktop */}
                {idx < COUNTERS_DATA.length - 1 && (
                  <div className="hidden lg:block h-16 w-px bg-white/20 mx-auto"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

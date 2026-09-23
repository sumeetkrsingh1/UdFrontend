"use client";

import React from "react";
import { PARTNER_LOGOS } from "@/lib/landingData";

export const LogoMarqueeSection: React.FC = () => {
  // Duplicate logos for seamless infinite loop
  const marqueeLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="w-full bg-[#21ABE1] py-6 overflow-hidden border-y border-[#008FCE]">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <p className="text-xs uppercase font-bold tracking-widest text-white/90">
          Trusted by 15,000+ top operators, founders & advisory firms worldwide
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#21ABE1] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#21ABE1] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-left flex items-center gap-12 sm:gap-16">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex items-center gap-2 text-white font-extrabold text-lg sm:text-xl tracking-tight opacity-90 hover:opacity-100 transition-opacity font-heading cursor-default select-none"
            >
              <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center text-xs">
                ★
              </div>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

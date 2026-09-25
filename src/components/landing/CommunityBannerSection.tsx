"use client";

import React from "react";
import { Users, Sparkles, MessageCircle, ArrowRight, Eye, PenTool, BarChart3 } from "lucide-react";

export function CommunityBannerSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#D2C5FA] via-[#E0F3FB] to-[#FFF480] p-8 sm:p-12 lg:p-16 border border-white shadow-xl overflow-hidden text-[#1C1C1C]">
          <div className="absolute top-6 left-8 text-[#001AD3] text-xl select-none pointer-events-none opacity-80">
            ✦
          </div>
          <div className="absolute bottom-6 right-10 text-[#001AD3] text-2xl select-none pointer-events-none opacity-80">
            ★
          </div>

          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white text-[#001AD3] text-xs font-extrabold tracking-wide mb-6 shadow-xs">
              <Users className="w-3.5 h-3.5 text-[#001AD3]" />
              <span>YOUR LINKEDIN, FINALLY CONNECTED</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1C1C] tracking-tight leading-tight mb-4">
              Turn LinkedIn activity into meaningful engagement.
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Watch what matters, write thoughtful responses, capture useful knowledge, create content, and understand what works — all connected through Mastreach.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="px-3.5 py-1.5 rounded-full bg-white text-stone-800 text-xs font-bold shadow-xs border border-white/60 flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-[#001AD3]" />
                <span>Watch LinkedIn activity</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white text-stone-800 text-xs font-bold shadow-xs border border-white/60 flex items-center gap-2">
                <PenTool className="w-3.5 h-3.5 text-[#001AD3]" />
                <span>Write with context</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white text-stone-800 text-xs font-bold shadow-xs border border-white/60 flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5 text-[#001AD3]" />
                <span>Measure what works</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/today"
                className="px-8 py-4 rounded-full bg-[#001AD3] hover:bg-[#0015A8] text-white text-sm font-extrabold transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Explore Mastreach</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

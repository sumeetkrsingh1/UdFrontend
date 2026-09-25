"use client";

import React from "react";
import { Users, Sparkles, MessageCircle, ArrowRight, Award, Trophy } from "lucide-react";

export function CommunityBannerSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#D2C5FA] via-[#E0F3FB] to-[#FFF480] p-8 sm:p-12 lg:p-16 border border-white shadow-xl overflow-hidden text-[#1C1C1C]">
          {/* Star Accents */}
          <div className="absolute top-6 left-8 text-[#001AD3] text-xl select-none pointer-events-none opacity-80">
            ✦
          </div>
          <div className="absolute bottom-6 right-10 text-[#001AD3] text-2xl select-none pointer-events-none opacity-80">
            ★
          </div>

          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white text-[#001AD3] text-xs font-extrabold tracking-wide mb-6 shadow-xs">
              <Users className="w-3.5 h-3.5 text-[#001AD3]" />
              <span>PRIVATE INBOUND REVENUE SOCIETY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1C1C] tracking-tight leading-tight mb-4">
              Join 15,000+ Founders & Growth Leaders Scaling Without Ads.
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Get practical guidance for writing thoughtful LinkedIn comments and building a knowledge base from the articles you read.
            </p>

            {/* Perks Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="px-3.5 py-1.5 rounded-full bg-white text-stone-800 text-xs font-bold shadow-xs border border-white/60 flex items-center gap-2">
                <Trophy className="w-3.5 h-3.5 text-[#001AD3]" />
                <span>Weekly Retainer Breakdown Teardowns</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white text-stone-800 text-xs font-bold shadow-xs border border-white/60 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#001AD3]" />
                <span>Context for every thoughtful comment</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white text-stone-800 text-xs font-bold shadow-xs border border-white/60 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#001AD3]" />
                <span>Direct Access to Inbound Strategists</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/today"
                className="px-8 py-4 rounded-full bg-[#001AD3] hover:bg-[#0015A8] text-white text-sm font-extrabold transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join the Free Community</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

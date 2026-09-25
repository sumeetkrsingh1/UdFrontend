"use client";

import React from "react";
import { MessageSquare, Clock, ShieldCheck, Video, Headphones, ArrowRight, Sparkles } from "lucide-react";

export function SupportIntercomSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#001AD3] p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl">
          {/* Subtle Expandi Star Accents */}
          <div className="absolute top-6 right-8 text-[#FFF480] opacity-80 animate-pulse text-2xl select-none pointer-events-none">
            ✦
          </div>
          <div className="absolute bottom-10 left-12 text-[#21ABE1] opacity-70 text-lg select-none pointer-events-none">
            ★
          </div>
          <div className="absolute top-1/2 right-1/4 text-white/30 text-xs select-none pointer-events-none">
            ✦
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Live Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFF480] text-xs font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                <span>24/7 DEDICATED INBOUND SPECIALISTS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
                We are with you every step of your{" "}
                <span className="text-[#FFF480]">growth journey.</span>
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                Have questions about comment tone, Save Page, account tokens, or using your knowledge base? Our support team is one click away.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-[#21ABE1] text-white flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Sub-3 Minute Reply</span>
                    <span className="text-[11px] text-blue-200">24/7 human live chat support</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-[#FFF480] text-[#001AD3] flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Dedicated Growth Lead</span>
                    <span className="text-[11px] text-blue-200">Profile & funnel strategy reviews</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-[#D2C5FA] text-[#001AD3] flex items-center justify-center flex-shrink-0">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Weekly Masterclasses</span>
                    <span className="text-[11px] text-blue-200">Live breakdowns with top creators</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-[#FECEBF] text-[#001AD3] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">99.9% Uptime Guarantee</span>
                    <span className="text-[11px] text-blue-200">Private dedicated cloud IP proxies</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/today"
                  className="px-8 py-4 rounded-full bg-[#FFF480] hover:bg-[#fffa9e] text-[#001AD3] text-sm font-extrabold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with an Inbound Specialist</span>
                </a>
              </div>
            </div>

            {/* Right Card Visual (5 Cols) - Live Chat Intercom Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-white rounded-3xl p-6 text-stone-900 shadow-2xl border border-white/20">
                {/* Chat Header */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-[#001AD3] text-white flex items-center justify-center font-bold text-xs">
                        AO
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-stone-900">Mastreach Support</h4>
                      <p className="text-[10px] text-emerald-600 font-bold">Online • Replies in ~2m</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                    SLA: Active
                  </span>
                </div>

                {/* Chat Bubble Sequence */}
                <div className="space-y-3 text-xs mb-4">
                  <div className="bg-[#E0F3FB] text-[#001AD3] p-3 rounded-2xl rounded-tl-xs max-w-[85%]">
                    <p className="font-semibold text-[11px]">
                      Hey Alex! 👋 I saw you connected your first 15 creator feeds. Would you like me to inspect your AI comment voice profile?
                    </p>
                    <span className="text-[9px] text-blue-500 block text-right mt-1">10:42 AM</span>
                  </div>

                  <div className="bg-stone-100 text-stone-800 p-3 rounded-2xl rounded-tr-xs ml-auto max-w-[85%]">
                    <p className="text-[11px]">
                      Yes please! I want my comments to be analytical yet conversational.
                    </p>
                    <span className="text-[9px] text-stone-400 block text-right mt-1">10:43 AM</span>
                  </div>

                  <div className="bg-[#FFF480] text-stone-900 p-3 rounded-2xl rounded-tl-xs max-w-[85%]">
                    <p className="font-semibold text-[11px]">
                      Done! ✨ Applied the FinTech Contrarian preset. You will now see 3 tailored perspectives per creator post.
                    </p>
                    <span className="text-[9px] text-stone-500 block text-right mt-1">10:44 AM</span>
                  </div>
                </div>

                {/* Chat Input Placeholder */}
                <div className="flex items-center gap-2 p-2 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[11px] text-stone-400 pl-2 flex-1">
                    Ask anything about setup...
                  </span>
                  <div className="w-7 h-7 rounded-xl bg-[#001AD3] text-white flex items-center justify-center text-xs">
                    ↑
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

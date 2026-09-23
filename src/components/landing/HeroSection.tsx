"use client";

import React from "react";
import Link from "next/link";
import { HERO_DATA } from "@/lib/landingData";

interface HeroSectionProps {
  onOpenDemo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden expandi-stars-bg bg-gradient-to-b from-white via-[#F8FBFF] to-white">
      {/* Subtle Star Particle Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="20%" r="2" fill="#001AD3" opacity="0.3" />
          <circle cx="90%" cy="15%" r="3" fill="#21ABE1" opacity="0.4" />
          <circle cx="85%" cy="60%" r="2" fill="#D2C5FA" opacity="0.5" />
          <circle cx="15%" cy="75%" r="2.5" fill="#FFF480" opacity="0.6" />
          <circle cx="50%" cy="10%" r="1.5" fill="#FF6030" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Highlight Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F3FB] border border-[#B0E1F4] text-[#001AD3] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
          <span>⚡</span>
          <span>{HERO_DATA.badge}</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-[#1C1C1C] tracking-tight leading-[1.15] max-w-4xl mx-auto font-heading">
          Get the <mark className="expandi-mark">{HERO_DATA.revenueMultiplier}</mark> with LinkedIn&apos;s #1 warm inbound funnel
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#4B5567] max-w-2xl mx-auto font-normal leading-relaxed">
          {HERO_DATA.subheadline}
        </p>

        {/* CTA Button Cluster */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/settings"
            className="expandi-btn-primary text-base py-3.5 px-8 shadow-lg hover:shadow-xl font-bold tracking-tight"
          >
            {HERO_DATA.primaryCta}
          </Link>

          <button
            onClick={onOpenDemo}
            className="expandi-btn-outline text-base py-3 px-6 font-semibold"
          >
            {HERO_DATA.secondaryCta}
          </button>
        </div>

        {/* Micro Guarantee Note */}
        <div className="mt-4 flex items-center justify-center gap-4 text-xs font-medium text-[#728095]">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            7-Day Free Trial
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No Credit Card Required
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            100% Account Safety Guarantee
          </span>
        </div>

        {/* App Showcase Container & Floating Interactive Demo Trigger */}
        <div className="mt-12 md:mt-16 relative mx-auto max-w-5xl group">
          {/* Outer Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#001AD3] via-[#21ABE1] to-[#FFF480] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>

          {/* Browser Shell Mockup */}
          <div className="relative rounded-2xl bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden">
            {/* Top Browser Bar */}
            <div className="bg-slate-100/80 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="bg-white px-6 py-1 rounded-md text-xs font-mono text-slate-500 border border-slate-200/60 shadow-xs flex items-center gap-2">
                <span className="text-emerald-500 font-bold">🔒</span>
                <span>app.audienceos.io/cockpit</span>
              </div>
              <div className="w-16"></div>
            </div>

            {/* Mockup Internal Cockpit UI Preview */}
            <div className="p-4 sm:p-6 lg:p-8 bg-slate-50/50 grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
              {/* Left Sidebar Mockup */}
              <div className="lg:col-span-4 bg-white rounded-xl p-4 border border-slate-200/70 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="font-bold text-xs uppercase tracking-wider text-[#1C1C1C]">
                    🔥 Live Creator Feed
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full">
                    Active 15m Window
                  </span>
                </div>

                {/* Creator Item 1 */}
                <div className="p-3 rounded-lg bg-[#E0F3FB] border border-[#B0E1F4] space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#001AD3] text-white font-bold text-xs flex items-center justify-center">
                      SM
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1C1C1C]">SaaS Growth VP</div>
                      <div className="text-[10px] text-[#728095]">Posted 4 mins ago • 140k reach</div>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#4B5567] line-clamp-2">
                    &quot;Most outbound DMs fail because founders pitch before demonstrating category authority...&quot;
                  </p>
                  <div className="text-[10px] font-bold text-[#001AD3] flex items-center gap-1">
                    <span>✨ High-Signal Comment Drafted</span>
                  </div>
                </div>

                {/* Creator Item 2 */}
                <div className="p-3 rounded-lg bg-[#FFF480]/30 border border-[#FFF8AD] space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#FF6030] text-white font-bold text-xs flex items-center justify-center">
                      AK
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1C1C1C]">B2B Tech Founder</div>
                      <div className="text-[10px] text-[#728095]">Posted 12 mins ago • 85k reach</div>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#4B5567] line-clamp-2">
                    &quot;We just signed our 3rd $15k retainer without sending a single cold pitch email...&quot;
                  </p>
                </div>
              </div>

              {/* Right Content / AI Synthesis Cockpit */}
              <div className="lg:col-span-8 bg-white rounded-xl p-5 border border-slate-200/70 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#001AD3] bg-[#E0F3FB] px-2 py-0.5 rounded">
                        Synthesized Operator Perspective
                      </span>
                      <h3 className="font-bold text-sm text-[#1C1C1C] mt-1 font-heading">
                        Contrarian Peer Commentary #284
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                      Top Comment Rank: #1 (94.8% Confidence)
                    </span>
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-[#1C1C1C] leading-relaxed">
                    &quot;Spot on analysis. In our advisory cohort, shifting from outbound cold pitches to borrowing creator reach increased profile discovery calls by <strong>340%</strong>. When you provide genuine peer value in the comments, the decision-maker clicks your profile with pre-built trust.&quot;
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    <div className="p-2.5 rounded-lg bg-[#E0F3FB] border border-[#B0E1F4]">
                      <div className="text-lg font-extrabold text-[#001AD3]">14.2%</div>
                      <div className="text-[10px] font-medium text-[#4B5567]">Profile DM Rate</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FFF480] border border-[#FFF8AD]">
                      <div className="text-lg font-extrabold text-[#1C1C1C]">68.5%</div>
                      <div className="text-[10px] font-medium text-[#4B5567]">Warm Reply Rate</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#D2C5FA] border border-[#EBE4FD]">
                      <div className="text-lg font-extrabold text-[#4B2896]">$8.5k</div>
                      <div className="text-[10px] font-medium text-[#4B5567]">Avg. Retainer Size</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Automated sentiment routing active</span>
                  </div>
                  <button
                    onClick={onOpenDemo}
                    className="expandi-btn-primary text-xs py-2 px-4"
                  >
                    Simulate Live Engagement →
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Navattic / Interactive Demo Pill Trigger Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button
                onClick={onOpenDemo}
                className="pointer-events-auto group/btn bg-[#001AD3] text-white px-6 py-3.5 rounded-full shadow-2xl hover:bg-[#0027DB] hover:scale-105 transition-all flex items-center gap-3.5 border-2 border-white/80"
              >
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold leading-none uppercase tracking-wider text-[#FFF480]">
                    {HERO_DATA.demoTriggerTitle}
                  </div>
                  <div className="text-[11px] text-white/90 font-medium mt-0.5">
                    {HERO_DATA.demoTriggerSubtitle}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

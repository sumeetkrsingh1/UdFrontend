"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Play,
  Star,
  CheckCircle2,
  Users,
} from "lucide-react";
import { HeroVisual3D } from "./HeroVisual3D";
import { HERO_DATA } from "@/lib/landingData";

interface HeroSectionProps {
  onOpenDemo?: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden warm-paper-texture">
      {/* Background Soft Warm Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#fff4ed] via-[#fef3c7]/50 to-[#eef4fb] rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: High-Impact Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff4ed] border border-[#fcd5c7] text-[#c85a3b] text-xs font-bold tracking-wide mb-6 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c85a3b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c85a3b]"></span>
              </span>
              <span>{HERO_DATA.badge}</span>
            </div>

            {/* H1 Headline (Editorial Serif & Warm Charcoal) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-stone-900 leading-[1.14] mb-6">
              {HERO_DATA.headlineMain}{" "}
              <span className="italic text-[#c85a3b] underline decoration-[#fcd5c7] decoration-wavy decoration-2">
                {HERO_DATA.headlineHighlight}
              </span>
            </h1>

            {/* Subheading Chunk (2 sentences max) */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed mb-8 font-normal">
              {HERO_DATA.subheadline}
            </p>

            {/* Micro Feature Highlights (Bulleted Chips) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-700 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#2d6a4f] flex-shrink-0" />
                <span className="font-medium">Zero Cold Pitch Spam</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-700 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#d97706] flex-shrink-0" />
                <span className="font-medium">15-Min Comment Engine</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-700 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#1e3a5f] flex-shrink-0" />
                <span className="font-medium">1-Click CRM Routing</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#pricing"
                className="warm-btn-terracotta px-8 py-4 rounded-2xl text-sm font-bold text-white transition-all flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{HERO_DATA.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {onOpenDemo && (
                <button
                  onClick={onOpenDemo}
                  className="px-6 py-4 rounded-2xl text-sm font-semibold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-50 border border-stone-300 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 text-[#d97706] fill-[#d97706]" />
                  <span>{HERO_DATA.secondaryCta}</span>
                </button>
              )}
            </div>

            {/* Social Proof & Rating Strip */}
            <div className="flex items-center gap-4 pt-4 border-t border-stone-200 w-full">
              <div className="flex -space-x-2.5 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-amber-100 text-amber-900 font-bold text-[10px] flex items-center justify-center border border-amber-300">
                  RM
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-orange-100 text-orange-900 font-bold text-[10px] flex items-center justify-center border border-orange-300">
                  PS
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-emerald-100 text-emerald-900 font-bold text-[10px] flex items-center justify-center border border-emerald-300">
                  AN
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-stone-200 text-stone-700 font-bold text-[10px] flex items-center justify-center border border-stone-300">
                  +4k
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#d97706] text-[#d97706]"
                    />
                  ))}
                  <span className="text-xs font-bold text-stone-900 ml-1">4.9/5</span>
                </div>
                <span className="text-[11px] text-stone-500">
                  Trusted by 420+ B2B Founders, Advisory Partners & Tech Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Human Networking Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroVisual3D />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, ShieldCheck, CheckCircle2, Lock } from "lucide-react";

export function FinalCtaSection({ onOpenDemo }: { onOpenDemo?: () => void }) {
  return (
    <section className="relative py-24 md:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#001AD3] p-8 sm:p-14 lg:p-20 text-center shadow-2xl overflow-hidden text-white">
          {/* Star Accents */}
          <div className="absolute top-8 left-12 text-[#FFF480] text-3xl select-none pointer-events-none opacity-80 animate-pulse">
            ✦
          </div>
          <div className="absolute bottom-10 right-16 text-[#21ABE1] text-2xl select-none pointer-events-none opacity-70">
            ★
          </div>
          <div className="absolute top-1/2 left-8 text-white/30 text-base select-none pointer-events-none">
            ✦
          </div>
          <div className="absolute top-12 right-1/4 text-[#FECEBF] text-xl select-none pointer-events-none opacity-60">
            ✦
          </div>

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFF480] text-xs font-bold tracking-wide mb-6 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#FFF480]" />
            <span>DEPLOY YOUR ENGINE IN 15 MINUTES</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            Ready to Turn LinkedIn into Your #1{" "}
            <span className="text-[#FFF480]">Predictable Revenue Funnel?</span>
          </h2>

          <p className="text-blue-100 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Stop letting qualified high-ticket clients slip through the cracks. Deploy Audience OS today and experience what genuine, organic inbound authority feels like.
          </p>

          {/* Dual Pill Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <a
              href="/today"
              className="w-full sm:w-auto px-9 py-4 rounded-full text-sm font-extrabold bg-[#FFF480] hover:bg-[#fffa9e] text-[#001AD3] transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 cursor-pointer"
            >
              <span>Start 7-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {onOpenDemo && (
              <button
                type="button"
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-7 py-4 rounded-full text-sm font-extrabold bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
              >
                <span>Try Interactive Demo</span>
              </button>
            )}
          </div>

          {/* Trust Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-blue-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FFF480]" />
              <span>7-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#21ABE1]" />
              <span>Dedicated Residential Cloud IP</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#FECEBF]" />
              <span>No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

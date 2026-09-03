"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, ShieldCheck, CheckCircle2, Lock } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden warm-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#fff4ed] via-white to-[#fffdf8] border border-[#fcd5c7] p-8 sm:p-14 lg:p-20 text-center shadow-[0_12px_45px_-10px_rgba(200,90,59,0.12)] overflow-hidden">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#fcd5c7] text-[#c85a3b] text-xs font-bold tracking-wide mb-6 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#d97706]" />
            <span>DEPLOY IN 15 MINUTES</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
            Ready to Turn LinkedIn into Your #1{" "}
            <span className="italic text-[#c85a3b]">
              Predictable Advisory Pipeline?
            </span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Stop letting qualified high-ticket clients slip through the cracks. Deploy Audience OS today and experience what genuine, organic inbound momentum feels like.
          </p>

          {/* Solid Terracotta Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <a
              href="/today"
              className="warm-btn-terracotta w-full sm:w-auto px-10 py-5 rounded-2xl text-base font-bold text-white transition-all flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Launch Your Growth Funnel Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Trust Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-stone-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2d6a4f]" />
              <span>14-Day Risk-Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c85a3b]" />
              <span>100% Pipeline Lift Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#1e3a5f]" />
              <span>Zero Contract Lock-in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

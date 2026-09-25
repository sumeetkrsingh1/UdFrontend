"use client";

import React, { useState } from "react";
import {
  Check,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { PRICING_PLANS } from "@/lib/landingData";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden bg-[#F9F9FB] border-t border-[#E5E9EE]">
      {/* Background Soft Expandi Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#E0F3FB]/60 via-[#FFF480]/20 to-[#D2C5FA]/30 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Chunk */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F3FB] border border-[#B0E1F4] text-[#001AD3] text-xs font-extrabold tracking-wide mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#001AD3]" />
            <span>TRANSPARENT, FRICTIONLESS PLANS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1C1C] tracking-tight leading-tight mb-4">
            Invest in a Predictable{" "}
            <mark className="bg-[#FFF480] text-[#001AD3] px-2 py-0.5 rounded-md inline-block">
              Knowledge Assistant.
            </mark>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
            Choose the plan that fits how often you write and save. Every plan keeps you in control of what gets inserted or saved.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white border border-[#CCD5DF] shadow-xs">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer",
                !isAnnual
                  ? "bg-[#001AD3] text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              )}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer",
                isAnnual
                  ? "bg-[#001AD3] text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              )}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-[#FFF480] text-[#001AD3] text-[10px] font-black">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const isFeatured = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col justify-between transition-all duration-300 rounded-3xl bg-white",
                  isFeatured
                    ? "border-2 border-[#001AD3] shadow-xl scale-102 z-20"
                    : "border border-[#CCD5DF] shadow-md hover:border-stone-400"
                )}
              >
                {/* Popular Top Banner */}
                {isFeatured && (
                  <div className="bg-[#001AD3] text-white text-center py-1.5 text-[11px] font-extrabold uppercase tracking-wider rounded-t-[22px] flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFF480]" />
                    <span>Most Popular For Founders & Agencies</span>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Tier Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-black uppercase tracking-wider text-[#1C1C1C]">
                        {plan.name}
                      </span>
                      {plan.badge && !isFeatured && (
                        <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-[#E0F3FB] text-[#001AD3] border border-[#B0E1F4]">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-stone-600 min-h-[36px] mb-6 leading-relaxed">
                      {plan.tagline}
                    </p>

                    {/* Price Display */}
                    <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-[#E5E9EE]">
                      <span className="text-4xl sm:text-5xl font-black text-[#1C1C1C] tracking-tight">
                        ${price}
                      </span>
                      <span className="text-xs font-semibold text-stone-500">
                        / month {isAnnual ? "(billed annually)" : ""}
                      </span>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-stone-500 block mb-3">
                        Included Features:
                      </span>
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#E0F3FB] text-[#001AD3] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="text-xs font-medium text-stone-800 leading-snug">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tier Action CTA */}
                  <div>
                    <a
                      href="/today"
                      className={cn(
                        "w-full py-4 rounded-full text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-xs",
                        isFeatured
                          ? "bg-[#001AD3] hover:bg-[#0015A8] text-white"
                          : "bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300"
                      )}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="text-center mt-3">
                      <span className="text-[10px] text-stone-500 font-medium">
                        7-day free trial • Cancel anytime • Dedicated Cloud IP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

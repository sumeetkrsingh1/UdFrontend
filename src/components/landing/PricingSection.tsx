"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { PRICING_ADDONS, PRICING_PLANS } from "@/lib/landingData";
import { cn } from "@/lib/utils";

const regionPrices = {
  india: {
    formatter: (value: number) => `₹${value.toLocaleString("en-IN")}`,
  },
  international: {
    formatter: (value: number) => `$${value}`,
  },
} as const;

const PLAN_PRICE_BY_REGION = {
  starter: { india: 1499, international: 39 },
  growth: { india: 2999, international: 69 },
  pro: { india: 4499, international: 99 },
} as const;

export function PricingSection() {
  const [region, setRegion] = useState<keyof typeof regionPrices>("india");

  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden bg-[#F9F9FB] border-t border-[#E5E9EE]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#E0F3FB]/60 via-[#FFF480]/20 to-[#D2C5FA]/30 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F3FB] border border-[#B0E1F4] text-[#001AD3] text-xs font-extrabold tracking-wide mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#001AD3]" />
            <span>PLANS FOR LINKEDIN WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1C1C] tracking-tight leading-tight mb-4">
            Pick the plan that fits your LinkedIn workflow.
          </h2>

          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white border border-[#CCD5DF] shadow-xs mt-2">
            {Object.keys(regionPrices).map((key) => (
              <button
                key={key}
                onClick={() => setRegion(key as keyof typeof regionPrices)}
                className={cn(
                  "px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer",
                  region === key
                    ? "bg-[#001AD3] text-white shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                )}
              >
                {key === "india" ? "India" : "International"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const priceValue = PLAN_PRICE_BY_REGION[plan.id as keyof typeof PLAN_PRICE_BY_REGION]?.[region] ?? plan.priceMonthly;
            const isFeatured = plan.isPopular;
            const regionLabel = regionPrices[region].formatter(priceValue);

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
                {isFeatured && (
                  <div className="bg-[#001AD3] text-white text-center py-1.5 text-[11px] font-extrabold uppercase tracking-wider rounded-t-[22px] flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFF480]" />
                    <span>MOST USED</span>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col h-full justify-between">
                  <div>
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

                    <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-[#E5E9EE]">
                      <span className="text-4xl sm:text-5xl font-black text-[#1C1C1C] tracking-tight">
                        {regionLabel}
                      </span>
                      <span className="text-xs font-semibold text-stone-500">/ month</span>
                    </div>

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
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-black text-[#1C1C1C] tracking-tight">Need more this month?</h3>
            <p className="text-sm text-stone-600 mt-2">Add extra usage when you need it. Add-ons are separate from your monthly plan allowance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRICING_ADDONS.map((addon) => (
              <div key={addon.title} className="rounded-2xl border border-[#CCD5DF] bg-white p-5 shadow-sm flex flex-col justify-between gap-4">
                <div>
                  <div className="text-sm font-black text-[#1C1C1C]">{addon.title}</div>
                  <div className="mt-2 text-sm text-stone-600">{addon.detail}</div>
                </div>
                <button className="w-full py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-extrabold border border-stone-300 transition-colors">
                  {addon.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-stone-600">
            Included on every plan: Posts and carousels, comments and replies, knowledge saves, and analytics.
          </div>
        </div>
      </div>
    </section>
  );
}

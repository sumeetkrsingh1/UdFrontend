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
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden warm-paper-texture">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-gradient-to-tr from-[#fff4ed] via-[#fef3c7]/50 to-[#e8f5ee] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Chunk */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff4ed] border border-[#fcd5c7] text-[#c85a3b] text-xs font-bold tracking-wide mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#c85a3b]" />
            <span>TRANSPARENT, FRICTIONLESS TIERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight mb-4">
            Invest in a Predictable{" "}
            <span className="italic text-[#c85a3b]">
              Client Acquisition Funnel.
            </span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
            One signed $5,000 / ₹4L advisory retainer pays for years of Audience OS. Select the plan that fits your growth velocity.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="flex items-center gap-3 p-1.5 rounded-full bg-white border border-stone-200 shadow-xs">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer",
                !isAnnual
                  ? "bg-[#1e3a5f] text-white shadow-xs"
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
                  ? "bg-[#c85a3b] text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              )}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-extrabold">
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
                    ? "warm-card-featured scale-102 z-20"
                    : "warm-card"
                )}
              >
                <div className="p-6 sm:p-8 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Tier Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                        {plan.name}
                      </span>
                      {plan.badge && (
                        <span
                          className={cn(
                            "text-[10px] font-extrabold px-2.5 py-1 rounded-full border",
                            isFeatured
                              ? "bg-[#fff4ed] text-[#c85a3b] border-[#fcd5c7]"
                              : "bg-stone-100 text-stone-600 border-stone-200"
                          )}
                        >
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-stone-500 min-h-[36px] mb-6">
                      {plan.tagline}
                    </p>

                    {/* Price Display */}
                    <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-stone-100">
                      <span className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
                        ${price}
                      </span>
                      <span className="text-xs font-medium text-stone-500">
                        / month {isAnnual ? "(billed annually)" : ""}
                      </span>
                    </div>

                    {/* Features Chunked List */}
                    <div className="space-y-3 mb-8">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-2">
                        What&apos;s Included:
                      </span>
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#e8f5ee] text-[#2d6a4f] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-xs text-stone-700 leading-snug">
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
                        "w-full py-4 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer",
                        isFeatured
                          ? "warm-btn-terracotta"
                          : plan.ctaVariant === "indigo"
                          ? "warm-btn-indigo"
                          : "bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300"
                      )}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    <div className="text-center mt-3">
                      <span className="text-[10px] text-stone-500 font-medium">
                        14-day risk-free trial • Cancel anytime
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

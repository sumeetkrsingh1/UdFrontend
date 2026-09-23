"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layers,
  MessageSquare,
  Users,
  Target,
  DollarSign,
} from "lucide-react";
import { FUNNEL_STEPS } from "@/lib/landingData";
import { FunnelStageGraphic } from "./FunnelStageGraphic";
import { cn } from "@/lib/utils";

export function FunnelStickyScroll() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = FUNNEL_STEPS[activeStepIndex];

  return (
    <section id="funnel" className="relative py-24 md:py-32 overflow-hidden warm-paper-texture">
      {/* Background Warm Gradients */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#fff4ed] rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#fef3c7] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff4ed] border border-[#fcd5c7] text-[#c85a3b] text-xs font-bold tracking-wide mb-4 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#c85a3b]" />
            <span>THE 4-STEP INBOUND RELATIONSHIP BLUEPRINT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight mb-4">
            How Audience OS Converts Cold Attention into{" "}
            <span className="italic text-[#c85a3b]">
              High-Ticket Advisory Retainers.
            </span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            An organic, relationship-first growth engine that works quietly in the background. Step by step, from top creator community reach to closed discovery calls.
          </p>
        </div>

        {/* Quick Stage Tab Switcher */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {FUNNEL_STEPS.map((step: any, idx: number) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer",
                  isActive
                    ? "bg-[#c85a3b] text-white shadow-md shadow-[#c85a3b]/20 scale-102"
                    : "bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200"
                )}
              >
                <span className="opacity-75 font-mono">{step.stepNumber}</span>
                <span>{step.badge}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Sticky Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Sticky Graphic */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 z-20">
            <FunnelStageGraphic
              activeStep={activeStep}
              activeStepIndex={activeStepIndex}
              onSelectStep={(idx: number) => setActiveStepIndex(idx)}
            />
          </div>

          {/* Right Column: Step Cards */}
          <div className="lg:col-span-7 space-y-6">
            {FUNNEL_STEPS.map((step: any, idx: number) => {
              const isSelected = activeStepIndex === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={cn(
                    "warm-card p-6 sm:p-8 cursor-pointer relative overflow-hidden transition-all duration-300",
                    isSelected
                      ? "border-[#c85a3b] shadow-md ring-1 ring-[#c85a3b]/30 bg-[#fffdf8]"
                      : "border-stone-200 hover:border-stone-300 opacity-80 hover:opacity-100"
                  )}
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-[#fff4ed] border border-[#fcd5c7] text-[#c85a3b] flex items-center justify-center font-mono font-bold text-xs">
                        {step.stepNumber}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#c85a3b]">
                        {step.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf7f2] border border-stone-200 text-[11px] font-semibold text-stone-700">
                      <span>{step.metricHighlight.label}:</span>
                      <span className="text-[#2d6a4f] font-bold">
                        {step.metricHighlight.value}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-700 text-sm font-medium mb-4">
                    {step.tagline}
                  </p>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {step.shortDescription}
                  </p>

                  {/* Bullets Chunked List */}
                  <div className="space-y-3 pt-4 border-t border-stone-100">
                    {step.bullets.map((bullet: any, bIdx: number) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-[#e8f5ee] text-[#2d6a4f] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-stone-900 mr-1.5">
                            {bullet.title}:
                          </span>
                          <span className="text-xs text-stone-600">
                            {bullet.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Active Indicator Footer */}
                  {isSelected && (
                    <div className="mt-6 pt-4 border-t border-orange-100 flex items-center justify-between text-xs text-[#c85a3b] font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Active Funnel Focus
                      </span>
                      <span className="text-stone-500 text-[11px]">
                        Click any card to inspect layer
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

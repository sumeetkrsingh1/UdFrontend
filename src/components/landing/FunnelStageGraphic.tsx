"use client";

import React from "react";
import {
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  CheckCircle2,
  Layers,
  MessageSquare,
  DollarSign,
} from "lucide-react";
import { FunnelStep } from "@/lib/landingData";
import { cn } from "@/lib/utils";

interface FunnelStageGraphicProps {
  activeStep: FunnelStep;
  activeStepIndex: number;
  onSelectStep: (index: number) => void;
}

export function FunnelStageGraphic({
  activeStep,
  activeStepIndex,
  onSelectStep,
}: FunnelStageGraphicProps) {
  const tiers = [
    {
      index: 0,
      label: "Stage 01: Profile Authority",
      accentColor: "#c85a3b",
      bgSubtle: "bg-[#fff4ed]",
      borderActive: "border-[#c85a3b]",
      iconBg: "bg-orange-100 text-[#c85a3b]",
      width: "w-full",
      stat: "14.2% Opt-In",
      icon: Layers,
    },
    {
      index: 1,
      label: "Stage 02: Borrowed Reach",
      accentColor: "#d97706",
      bgSubtle: "bg-[#fef3c7]",
      borderActive: "border-[#d97706]",
      iconBg: "bg-amber-100 text-[#d97706]",
      width: "w-[88%]",
      stat: "450k+ Reach",
      icon: Users,
    },
    {
      index: 2,
      label: "Stage 03: Conversational CRM",
      accentColor: "#1e3a5f",
      bgSubtle: "bg-[#eef4fb]",
      borderActive: "border-[#1e3a5f]",
      iconBg: "bg-blue-100 text-[#1e3a5f]",
      width: "w-[76%]",
      stat: "68.5% Reply",
      icon: MessageSquare,
    },
    {
      index: 3,
      label: "Stage 04: Closed Retainers",
      accentColor: "#2d6a4f",
      bgSubtle: "bg-[#e8f5ee]",
      borderActive: "border-[#2d6a4f]",
      iconBg: "bg-emerald-100 text-[#2d6a4f]",
      width: "w-[64%]",
      stat: "₹12L ($15k) Retainers",
      icon: DollarSign,
    },
  ];

  return (
    <div className="relative w-full rounded-3xl bg-white border border-[#e7e5e4] p-6 sm:p-8 shadow-[0_10px_35px_-10px_rgba(28,25,23,0.06)] overflow-hidden flex flex-col justify-between min-h-[460px]">
      {/* Top Header Strip */}
      <div className="flex items-center justify-between pb-4 border-b border-stone-200">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
          <span className="text-[11px] font-mono font-medium text-stone-500 ml-2">
            INBOUND_PIPELINE_MAP
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#fff4ed] text-[#c85a3b] border border-[#fcd5c7]">
            {activeStep.visualStage.layerDepth}
          </span>
        </div>
      </div>

      {/* Tactile 4-Stage Funnel Stack */}
      <div className="py-6 flex flex-col items-center gap-3.5 relative">
        {tiers.map((tier) => {
          const isActive = activeStepIndex === tier.index;
          const TierIcon = tier.icon;

          return (
            <button
              key={tier.index}
              onClick={() => onSelectStep(tier.index)}
              className={cn(
                "relative transition-all duration-300 rounded-2xl p-3.5 text-left border flex items-center justify-between cursor-pointer shadow-xs",
                tier.width,
                isActive
                  ? `${tier.borderActive} ${tier.bgSubtle} shadow-md scale-[1.02] z-20`
                  : "border-stone-200 bg-[#fffdf8] hover:border-stone-400 opacity-80 hover:opacity-100 z-10"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shadow-xs transition-transform",
                    tier.iconBg,
                    isActive ? "scale-105" : "group-hover:scale-102"
                  )}
                >
                  <TierIcon className="w-4 h-4" />
                </div>
                <div>
                  <div
                    className={cn(
                      "text-xs font-bold transition-colors",
                      isActive ? "text-stone-900" : "text-stone-700"
                    )}
                  >
                    {tier.label}
                  </div>
                  <div className="text-[10px] text-stone-500 font-sans">
                    {isActive ? activeStep.visualStage.subtext : "Click to inspect stage"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "text-[10px] font-bold px-2 py-0.5 rounded-md font-mono",
                    isActive
                      ? "bg-white text-stone-900 border border-stone-300 shadow-xs"
                      : "bg-stone-100 text-stone-600"
                  )}
                >
                  {tier.stat}
                </span>
                {isActive && (
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c85a3b] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c85a3b]"></span>
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Telemetry Footer Panel */}
      <div className="pt-4 border-t border-stone-200 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-[#faf7f2] border border-[#e7e5e4] flex flex-col">
          <span className="text-[10px] text-stone-500 font-mono uppercase">
            Active Layer Metric
          </span>
          <span className="text-base font-bold text-stone-900 mt-0.5">
            {activeStep.metricHighlight.value}
          </span>
          <span className="text-[10px] text-[#2d6a4f] font-semibold">
            {activeStep.metricHighlight.trend}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-[#faf7f2] border border-[#e7e5e4] flex flex-col">
          <span className="text-[10px] text-stone-500 font-mono uppercase">
            Simulated Lead Capacity
          </span>
          <span className="text-base font-bold text-[#c85a3b] mt-0.5 font-mono">
            {activeStep.visualStage.activeNodes} Active Leads
          </span>
          <span className="text-[10px] text-stone-500">
            Organic Inbound Flow
          </span>
        </div>
      </div>
    </div>
  );
}

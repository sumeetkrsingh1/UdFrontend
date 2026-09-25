"use client";

import React, { useState } from "react";
import {
  X,
  Sparkles,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Users,
  MessageSquare,
  DollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NICHES = [
  { id: "saas", name: "B2B SaaS & Tech", multiplier: 1.2, topVoice: "Jason Lemkin / SaaStr" },
  { id: "advisory", name: "CXO Coaching & Advisory", multiplier: 1.0, topVoice: "Justin Welsh" },
  { id: "agency", name: "Research & Writing", multiplier: 1.3, topVoice: "Your knowledge base" },
  { id: "venture", name: "Venture Capital & Syndicate", multiplier: 1.1, topVoice: "Kunal Shah / Delta 4" },
];

export function InteractiveDemoModal({ isOpen, onClose }: InteractiveDemoModalProps) {
  const [selectedNiche, setSelectedNiche] = useState(NICHES[0]);
  const [targetDealSize, setTargetDealSize] = useState<number>(8500);

  if (!isOpen) return null;

  const estimatedReach = Math.round(380000 * selectedNiche.multiplier);
  const estimatedDMs = Math.round(48 * selectedNiche.multiplier);
  const projectedPipeline = Math.round(estimatedDMs * 0.18 * targetDealSize);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#fffdf8] border border-stone-200 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#c85a3b] text-white flex items-center justify-center shadow-xs">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Live LinkedIn Inbound Simulator
              </h3>
              <p className="text-[11px] text-stone-500">
                Estimate your projected organic reach and advisory pipeline lift
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Select Niche */}
        <div className="mb-6">
          <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-2.5">
            1. Select Your Target Offer ICP:
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            {NICHES.map((niche) => {
              const isSelected = selectedNiche.id === niche.id;
              return (
                <button
                  key={niche.id}
                  onClick={() => setSelectedNiche(niche)}
                  className={cn(
                    "p-3 rounded-2xl border text-left transition-all cursor-pointer",
                    isSelected
                      ? "border-[#c85a3b] bg-[#fff4ed] text-stone-900 shadow-xs ring-1 ring-[#c85a3b]"
                      : "border-stone-200 bg-white text-stone-700 hover:border-stone-300"
                  )}
                >
                  <div className="text-xs font-bold">{niche.name}</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">
                    Peer voice: {niche.topVoice}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Deal Size Slider */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-600">
              2. Average Client Retainer / Engagement Size:
            </label>
            <span className="text-sm font-bold text-[#2d6a4f] font-mono">
              ${targetDealSize.toLocaleString()} (₹{(targetDealSize * 0.85).toFixed(0)}k/mo)
            </span>
          </div>
          <input
            type="range"
            min={3000}
            max={30000}
            step={500}
            value={targetDealSize}
            onChange={(e) => setTargetDealSize(Number(e.target.value))}
            className="w-full accent-[#c85a3b] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-mono">
            <span>$3,000 (₹2.5L)</span>
            <span>$15,000 (₹12L)</span>
            <span>$30,000+ (₹25L)</span>
          </div>
        </div>

        {/* Projected Results Dashboard */}
        <div className="p-4 rounded-2xl bg-[#faf7f2] border border-stone-200 grid grid-cols-3 gap-3 mb-6 text-center">
          <div className="p-2.5 rounded-xl bg-white border border-stone-200">
            <span className="text-[10px] text-stone-500 font-mono block">
              Borrowed Peer Reach
            </span>
            <span className="text-sm sm:text-base font-bold text-[#1e3a5f] mt-0.5 block">
              {estimatedReach.toLocaleString()}+
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-stone-200">
            <span className="text-[10px] text-stone-500 font-mono block">
              Saved context
            </span>
            <span className="text-sm sm:text-base font-bold text-[#c85a3b] mt-0.5 block">
              {estimatedDMs}+ notes
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-[#b7e0cb]">
            <span className="text-[10px] text-[#2d6a4f] font-mono block">
              Projected Mo Pipeline
            </span>
            <span className="text-sm sm:text-base font-bold text-[#2d6a4f] mt-0.5 block">
              ${projectedPipeline.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Sample Comment Generation Teaser */}
        <div className="p-3.5 rounded-xl bg-white border border-stone-200 mb-6">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#c85a3b] mb-1">
            <Sparkles className="w-3 h-3" />
            <span>AI COMMENT PERSPECTIVE FOR {selectedNiche.name.toUpperCase()}:</span>
          </div>
          <p className="text-xs text-stone-700 italic leading-relaxed">
            &ldquo;A thoughtful reply is easier when your own notes and saved articles are already close at hand.&rdquo;
          </p>
        </div>

        {/* Action Button */}
        <a
          href="/today"
          className="warm-btn-terracotta w-full py-4 rounded-2xl text-xs sm:text-sm font-bold text-white transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Open Mastreach Assistant</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

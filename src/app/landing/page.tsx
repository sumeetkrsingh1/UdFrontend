"use client";

import React, { useState } from "react";
import { LandingNav } from "@/components/landing/LandingNav";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemBentoSection } from "@/components/landing/ProblemBentoSection";
import { FunnelStickyScroll } from "@/components/landing/FunnelStickyScroll";
import { MetricsObsidianSection } from "@/components/landing/MetricsObsidianSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { InteractiveDemoModal } from "@/components/landing/InteractiveDemoModal";

export default function LandingPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fffdf8] text-stone-900 warm-paper-texture selection:bg-[#ffedd5] selection:text-[#c85a3b]">
      {/* Fixed Warm Navigation Bar */}
      <LandingNav onOpenDemo={() => setDemoOpen(true)} />

      {/* Main Content Blueprint */}
      <main className="flex flex-col w-full overflow-hidden">
        {/* Section 1: Hero (High Impact, Low Text + 3D Visual) */}
        <HeroSection onOpenDemo={() => setDemoOpen(true)} />

        {/* Section 2: Problem Space (Asymmetrical Bento Box Grid) */}
        <ProblemBentoSection />

        {/* Section 3: The Funnel Breakdown (Interactive Sticky Scroll) */}
        <FunnelStickyScroll />

        {/* Section 4: Social Proof & Metrics (Vexel 1M+ Obsidian Canvas) */}
        <MetricsObsidianSection />

        {/* Section 5: Pricing Tiers */}
        <PricingSection />

        {/* Collapsible Chunked FAQ */}
        <FaqAccordion />

        {/* Final High-Impact Conversion Beacon */}
        <FinalCtaSection />
      </main>

      {/* Site Footer */}
      <LandingFooter />

      {/* Interactive Funnel Simulator Modal */}
      <InteractiveDemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
      />
    </div>
  );
}

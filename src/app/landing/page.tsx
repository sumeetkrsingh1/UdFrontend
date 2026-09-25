"use client";

import React, { useState } from "react";
import { LandingNav } from "@/components/landing/LandingNav";
import { HeroSection } from "@/components/landing/HeroSection";
import { LogoMarqueeSection } from "@/components/landing/LogoMarqueeSection";
import { ProblemBentoSection } from "@/components/landing/ProblemBentoSection";
import { TwoDirectionFeatureSlider } from "@/components/landing/TwoDirectionFeatureSlider";
import { ThreeStepProcessSection } from "@/components/landing/ThreeStepProcessSection";
import { MetricsObsidianSection } from "@/components/landing/MetricsObsidianSection";
import { FeatureComparisonSection } from "@/components/landing/FeatureComparisonSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { SupportIntercomSection } from "@/components/landing/SupportIntercomSection";
import { CommunityBannerSection } from "@/components/landing/CommunityBannerSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { InteractiveDemoModal } from "@/components/landing/InteractiveDemoModal";

export default function LandingPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1C1C1C] selection:bg-[#FFF480] selection:text-[#001AD3] font-sans">
      {/* 1. Sticky Navigation Bar with Announcement Ribbon */}
      <LandingNav onOpenDemo={() => setDemoOpen(true)} />

      {/* Main Content Sections in Expandi Sequence */}
      <main className="flex flex-col w-full overflow-hidden">
        {/* 2. Hero Section (High Impact + Live Browser Cockpit Mockup) */}
        <HeroSection onOpenDemo={() => setDemoOpen(true)} />

        {/* 3. Partner Logo Ribbon (Continuous Electric Sky Blue Marquee) */}
        <LogoMarqueeSection />

        {/* 4. Multi-Pastel Bento Grid (Recruiters, Agencies, Founders, Enterprise) */}
        <ProblemBentoSection />

        {/* 5. Two-Direction Opposing Feature Marquee Sliders */}
        <TwoDirectionFeatureSlider />

        {/* 6. Three-Step Onboarding & Workflow Process Cards */}
        <ThreeStepProcessSection />

        {/* 7. Full-Width Royal Blue Counter Banner with Hairline Dividers */}
        <MetricsObsidianSection />

        {/* 8. Feature Comparison Matrix Table (Mastreach vs generic tools vs manual) */}
        <FeatureComparisonSection />

        {/* 9. Social Proof & Testimonials Showcase (G2 / Capterra Badges + Dual Slider) */}
        <TestimonialsSection />

        {/* 10. 24/7 Dedicated Support Card (Intercom Live Chat Emulation) */}
        <SupportIntercomSection />

        {/* 11. Inbound Community Invitation Card (15k+ Founders Society) */}
        <CommunityBannerSection />

        {/* 12. Transparent 3-Tier Pricing (Monthly/Annual Switcher) */}
        <PricingSection />

        {/* 13. Chunked FAQ Accordion with Pastel Badges */}
        <FaqAccordion />

        {/* 14. Final High-Impact Royal Blue Conversion Beacon */}
        <FinalCtaSection onOpenDemo={() => setDemoOpen(true)} />
      </main>

      {/* 15. Expandi Multi-Column Footer */}
      <LandingFooter />

      {/* 16. Interactive Funnel Simulator Modal */}
      <InteractiveDemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
      />
    </div>
  );
}

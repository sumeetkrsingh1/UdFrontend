"use client";

import React from "react";
import HeroWithPixelBackground from "@/components/ui/hero-with-pixelbackground";

interface HeroSectionProps {
  onOpenDemo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  return <HeroWithPixelBackground onOpenDemo={onOpenDemo} />;
};

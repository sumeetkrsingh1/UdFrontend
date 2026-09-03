"use client";

import React from "react";
import {
  TrendingUp,
  MessageSquare,
  DollarSign,
  Clock,
  Sparkles,
  ShieldCheck,
  Star,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { METRICS_DATA, TESTIMONIALS } from "@/lib/landingData";
import { cn } from "@/lib/utils";

export function MetricsObsidianSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-[#c85a3b]" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-[#d97706]" />;
      case "DollarSign":
        return <DollarSign className="w-5 h-5 text-[#2d6a4f]" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-[#1e3a5f]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#c85a3b]" />;
    }
  };

  return (
    <section id="metrics" className="relative py-24 md:py-32 overflow-hidden bg-[#faf7f2] border-y border-[#e7e5e4]">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-gradient-to-r from-[#fff4ed] via-[#fef3c7]/60 to-[#e8f5ee] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f5ee] border border-[#b7e0cb] text-[#2d6a4f] text-xs font-bold tracking-wide mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2d6a4f]" />
            <span>AUTHENTIC FOUNDER IMPACT & DATA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight mb-4">
            Engineered for Predictable{" "}
            <span className="italic text-[#c85a3b]">
              Advisory Pipeline Growth.
            </span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Real relationship impact aggregated across 420+ active founders, consultants, and growth leaders deploying Audience OS.
          </p>
        </div>

        {/* 4 Large Warm Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {METRICS_DATA.map((metric, idx) => (
            <div
              key={idx}
              className="warm-card p-6 sm:p-8 flex flex-col justify-between group hover:scale-[1.02] transition-all"
            >
              {/* Top Accent Icon */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className={cn(
                    "w-10 h-10 rounded-2xl border flex items-center justify-center shadow-xs",
                    metric.bgSubtle,
                    metric.borderClass
                  )}
                >
                  {getIcon(metric.iconName)}
                </div>
                <span className="w-2 h-2 rounded-full bg-[#2d6a4f]" />
              </div>

              {/* Large Serif Number */}
              <div className="mb-2">
                <span
                  className={cn(
                    "text-4xl sm:text-5xl font-serif font-bold tracking-tight block",
                    metric.colorClass
                  )}
                >
                  {metric.value}
                </span>
              </div>

              {/* Label & Description */}
              <h3 className="text-base font-bold text-stone-900 mb-2">
                {metric.label}
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed font-normal">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Proof Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="warm-card p-6 sm:p-8 flex flex-col justify-between relative group hover:border-stone-400 transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#e8f5ee] text-[#2d6a4f] border border-[#b7e0cb]">
                    <CheckCircle className="w-3 h-3 text-[#2d6a4f]" />
                    <span>{testimonial.verifiedMetric}</span>
                  </div>

                  <span className="text-[10px] font-medium text-stone-500">
                    {testimonial.badge}
                  </span>
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author Strip */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div
                  className={cn(
                    "w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-xs shadow-xs",
                    testimonial.avatarBg
                  )}
                >
                  {testimonial.avatarText}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-stone-900">
                    {testimonial.author}
                  </span>
                  <span className="text-[11px] text-stone-500">
                    {testimonial.role} • {testimonial.company}
                  </span>
                  <span className="text-[10px] text-stone-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-stone-400" />
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

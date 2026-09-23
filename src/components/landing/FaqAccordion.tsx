"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { FAQS } from "@/lib/landingData";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const getCategoryBadgeClass = (category: string) => {
    if (category.includes("Safety")) return "bg-[#E0F3FB] text-[#001AD3] border-[#B0E1F4]";
    if (category.includes("AI")) return "bg-[#FFF480] text-[#001AD3] border-[#FFF8AD]";
    if (category.includes("Agency")) return "bg-[#D2C5FA] text-[#001AD3] border-[#EBE4FD]";
    return "bg-[#FECEBF] text-[#001AD3] border-[#FDC4B3]";
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#FFFFFF] border-t border-[#E5E9EE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F3FB] border border-[#B0E1F4] text-[#001AD3] text-xs font-extrabold tracking-wide mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#001AD3]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1C1C] tracking-tight leading-tight mb-3">
            Got Questions?{" "}
            <mark className="bg-[#FFF480] text-[#001AD3] px-2 py-0.5 rounded-md inline-block">
              We Have Answers.
            </mark>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base max-w-xl">
            Clear, honest details on profile safety architecture, authentic human-first AI, and pipeline conversion ROI.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden bg-white shadow-xs",
                  isOpen
                    ? "border-[#001AD3] shadow-md ring-1 ring-[#001AD3]/20"
                    : "border-[#CCD5DF] hover:border-stone-400"
                )}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span
                      className={cn(
                        "text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border whitespace-nowrap",
                        getCategoryBadgeClass(faq.category)
                      )}
                    >
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#1C1C1C]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-stone-400 transition-transform duration-300 flex-shrink-0",
                      isOpen && "rotate-180 text-[#001AD3]"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Card */}
        <div className="rounded-2xl bg-[#E0F3FB] border border-[#B0E1F4] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#001AD3] text-white flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">Still have a question?</h4>
              <p className="text-xs text-stone-600">Our growth advisors reply in under 3 minutes.</p>
            </div>
          </div>
          <a
            href="/today"
            className="px-6 py-2.5 rounded-full bg-[#001AD3] hover:bg-[#0015A8] text-white text-xs font-bold transition-all shadow-xs flex-shrink-0 cursor-pointer"
          >
            Chat with Support
          </a>
        </div>
      </div>
    </section>
  );
}

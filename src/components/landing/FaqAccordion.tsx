"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/lib/landingData";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 overflow-hidden bg-[#faf7f2] border-t border-[#e7e5e4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-bold tracking-wide mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#c85a3b]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight mb-3">
            Everything You Need to Know About{" "}
            <span className="italic text-[#c85a3b]">
              Audience OS.
            </span>
          </h2>

          <p className="text-stone-600 text-sm max-w-xl">
            Clear, honest answers about profile safety, human-first AI authenticity, and pipeline ROI.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden bg-white shadow-xs",
                  isOpen
                    ? "border-[#c85a3b] shadow-sm ring-1 ring-[#c85a3b]/20"
                    : "border-stone-200 hover:border-stone-300"
                )}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#fff4ed] text-[#c85a3b] border border-[#fcd5c7]">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-stone-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-stone-400 transition-transform duration-300 flex-shrink-0 ml-4",
                      isOpen && "rotate-180 text-[#c85a3b]"
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
      </div>
    </section>
  );
}

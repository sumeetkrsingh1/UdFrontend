"use client";

import React from "react";
import Link from "next/link";
import { Cloud, ShieldCheck } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="border-t border-stone-200 bg-[#faf7f2] py-12 md:py-16 text-stone-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#c85a3b] via-[#d97706] to-[#1e3a5f] flex items-center justify-center text-white shadow-xs">
                <Cloud className="w-4 h-4 fill-current" />
              </div>
              <span className="font-serif font-bold text-lg tracking-tight text-stone-900">
                Audience<span className="text-[#c85a3b]">OS</span>
              </span>
            </Link>
            <p className="text-stone-600 max-w-sm leading-relaxed">
              The warm, human-centric LinkedIn growth and inbound advisory engine. Borrow organic reach from top creator conversations and convert warm decision-makers into clients on autopilot.
            </p>

            {/* System Status Pill */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-[11px] text-stone-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#2d6a4f]" />
              <span>All Cloud Emulation Engines Operational</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2.5">
            <span className="font-bold uppercase tracking-wider text-stone-900 text-[11px]">
              Funnel Architecture
            </span>
            <a href="#problem" className="hover:text-[#c85a3b] transition-colors">
              The Problem Space
            </a>
            <a href="#funnel" className="hover:text-[#c85a3b] transition-colors">
              The 4-Step Blueprint
            </a>
            <a href="#metrics" className="hover:text-[#c85a3b] transition-colors">
              Founder Case Studies
            </a>
            <a href="#pricing" className="hover:text-[#c85a3b] transition-colors">
              Pricing Plans
            </a>
          </div>

          {/* Legal & App Links */}
          <div className="flex flex-col gap-2.5">
            <span className="font-bold uppercase tracking-wider text-stone-900 text-[11px]">
              Platform & Access
            </span>
            <Link href="/today" className="hover:text-[#c85a3b] transition-colors">
              Today Action Cockpit
            </Link>
            <Link href="/comment" className="hover:text-[#c85a3b] transition-colors">
              Borrowed Reach Feed
            </Link>
            <Link href="/messages" className="hover:text-[#c85a3b] transition-colors">
              Conversational CRM
            </Link>
            <a href="#faq" className="hover:text-[#c85a3b] transition-colors">
              Safety & Compliance FAQ
            </a>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} Audience OS Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-800 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-800 cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-800 cursor-pointer">Security Whitepaper</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

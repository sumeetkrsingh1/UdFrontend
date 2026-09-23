"use client";

import React from "react";
import Link from "next/link";
import { Cloud, ShieldCheck, Zap, Heart } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="border-t border-[#CCD5DF] bg-[#F9F9FB] py-16 text-stone-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Col (2 cols on md) */}
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-2xl bg-[#001AD3] flex items-center justify-center text-white shadow-md">
                <Cloud className="w-5 h-5 fill-current" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-stone-900">
                Audience<span className="text-[#001AD3]">OS</span>
              </span>
            </Link>
            <p className="text-stone-600 max-w-sm leading-relaxed text-xs">
              The human-first LinkedIn authority and inbound advisory revenue engine. Borrow reach from top creator conversations and turn warm decision-makers into signed clients on autopilot.
            </p>

            {/* System Status Pill */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CCD5DF] text-[11px] text-stone-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All 15 Cloud Emulation Clusters Active (Dedicated Residential IP)</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-2.5">
            <span className="font-extrabold uppercase tracking-wider text-[#1C1C1C] text-[11px]">
              Platform & Features
            </span>
            <Link href="/today" className="hover:text-[#001AD3] transition-colors">
              Today Action Cockpit
            </Link>
            <Link href="/comment" className="hover:text-[#001AD3] transition-colors">
              Borrowed Reach Feed
            </Link>
            <Link href="/messages" className="hover:text-[#001AD3] transition-colors">
              Conversational CRM
            </Link>
            <Link href="/settings" className="hover:text-[#001AD3] transition-colors">
              Cloud Proxy Settings
            </Link>
            <a href="#comparison" className="hover:text-[#001AD3] transition-colors">
              Feature Comparison
            </a>
          </div>

          {/* Funnel & Use Cases */}
          <div className="flex flex-col gap-2.5">
            <span className="font-extrabold uppercase tracking-wider text-[#1C1C1C] text-[11px]">
              Solutions & Use Cases
            </span>
            <a href="#problem" className="hover:text-[#001AD3] transition-colors">
              For Solo Consultants
            </a>
            <a href="#problem" className="hover:text-[#001AD3] transition-colors">
              For Growth Agencies
            </a>
            <a href="#problem" className="hover:text-[#001AD3] transition-colors">
              For Executive Recruiters
            </a>
            <a href="#funnel" className="hover:text-[#001AD3] transition-colors">
              The 3-Step Inbound Blueprint
            </a>
            <a href="#pricing" className="hover:text-[#001AD3] transition-colors">
              Pricing Plans
            </a>
          </div>

          {/* Resources & Support */}
          <div className="flex flex-col gap-2.5">
            <span className="font-extrabold uppercase tracking-wider text-[#1C1C1C] text-[11px]">
              Resources & Trust
            </span>
            <a href="#faq" className="hover:text-[#001AD3] transition-colors">
              Frequently Asked Questions
            </a>
            <a href="#testimonials" className="hover:text-[#001AD3] transition-colors">
              Customer Success Stories
            </a>
            <span className="text-stone-400 cursor-not-allowed">
              The 2026 Inbound Report
            </span>
            <span className="text-stone-400 cursor-not-allowed">
              Security Architecture Docs
            </span>
            <span className="text-stone-400 cursor-not-allowed">
              Slack Community
            </span>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-[#CCD5DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} Audience OS Inc. All rights reserved. Built with Expandi Universal Design.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-800 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-800 cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-800 cursor-pointer">Security Whitepaper</span>
            <span className="hover:text-stone-800 cursor-pointer">Status</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

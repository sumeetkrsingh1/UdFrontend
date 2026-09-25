"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Zap, Heart } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="border-t border-[#CCD5DF] bg-[#F9F9FB] py-16 text-stone-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Col (2 cols on md) */}
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img
                src="/mastreach-app-icon.svg"
                alt=""
                className="w-9 h-9 rounded-2xl shadow-md"
              />
              <span className="font-extrabold text-xl tracking-tight text-stone-900">
                Mastreach
              </span>
            </Link>
            <p className="text-stone-600 max-w-sm leading-relaxed text-xs">
              A connected intelligence layer for your LinkedIn activity. Watch what matters, write thoughtfully, capture useful knowledge, and understand what works.
            </p>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CCD5DF] text-[11px] text-stone-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Watch · Create · Capture · Measure</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-2.5">
            <span className="font-extrabold uppercase tracking-wider text-[#1C1C1C] text-[11px]">
              Platform & Features
            </span>
            <Link href="/today" className="hover:text-[#001AD3] transition-colors">
              Watcher
            </Link>
            <Link href="/comment" className="hover:text-[#001AD3] transition-colors">
              Comment Assistant
            </Link>
            <Link href="/knowledge" className="hover:text-[#001AD3] transition-colors">
              Knowledge
            </Link>
            <Link href="/content" className="hover:text-[#001AD3] transition-colors">
              Content & Scheduling
            </Link>
            <Link href="/today" className="hover:text-[#001AD3] transition-colors">
              Engagement Intelligence
            </Link>
            <Link href="/#pricing" className="hover:text-[#001AD3] transition-colors">
              Pricing
            </Link>
          </div>

          {/* Funnel & Use Cases */}
          <div className="flex flex-col gap-2.5">
            <span className="font-extrabold uppercase tracking-wider text-[#1C1C1C] text-[11px]">
              Solutions & Use Cases
            </span>
            <Link href="/comment" className="hover:text-[#001AD3] transition-colors">
              For LinkedIn Writers
            </Link>
            <Link href="/knowledge" className="hover:text-[#001AD3] transition-colors">
              For Knowledge Builders
            </Link>
            <Link href="/content" className="hover:text-[#001AD3] transition-colors">
              For Content Creators
            </Link>
            <Link href="/#funnel" className="hover:text-[#001AD3] transition-colors">
              How Mastreach Works
            </Link>
            <Link href="/#faq" className="hover:text-[#001AD3] transition-colors">
              Mastreach Ecosystem
            </Link>
            <Link href="/#funnel" className="hover:text-[#001AD3] transition-colors">
              Use Cases
            </Link>
          </div>

          {/* Resources & Support */}
          <div className="flex flex-col gap-2.5">
            <span className="font-extrabold uppercase tracking-wider text-[#1C1C1C] text-[11px]">
              Resources
            </span>
            <Link href="/#faq" className="hover:text-[#001AD3] transition-colors">
              Frequently Asked Questions
            </Link>
            <span className="text-stone-400 cursor-not-allowed">
              Mastreach Guide
            </span>
            <span className="text-stone-400 cursor-not-allowed">
              Product Documentation
            </span>
            <span className="text-stone-400 cursor-not-allowed">
              Privacy
            </span>
            <span className="text-stone-400 cursor-not-allowed">
              Terms
            </span>
            <span className="text-stone-400 cursor-not-allowed">
              Support
            </span>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-[#CCD5DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} Mastreach. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-stone-400 cursor-not-allowed">Privacy Policy</span>
            <span className="text-stone-400 cursor-not-allowed">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

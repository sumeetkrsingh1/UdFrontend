"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cloud, Sparkles, ArrowRight, Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface LandingNavProps {
  onOpenDemo?: () => void;
}

export function LandingNav({ onOpenDemo }: LandingNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={cn(
            "flex items-center justify-between px-5 sm:px-7 py-3.5 rounded-full transition-all duration-300",
            scrolled
              ? "bg-[#fffdf8]/95 backdrop-blur-md border border-[#e7e5e4] shadow-[0_4px_20px_-2px_rgba(28,25,23,0.06)]"
              : "bg-[#fffdf8]/80 backdrop-blur-sm border border-[#e7e5e4]/60 shadow-sm"
          )}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#c85a3b] via-[#d97706] to-[#1e3a5f] flex items-center justify-center text-white shadow-md shadow-[#c85a3b]/20 group-hover:scale-105 transition-transform">
              <Cloud className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-xl tracking-tight text-stone-900">
                  Audience<span className="text-[#c85a3b]">OS</span>
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#fff4ed] text-[#c85a3b] border border-[#fcd5c7]">
                  v2.4
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#problem"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              The Problem
            </a>
            <a
              href="#funnel"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              The 4-Step Funnel
            </a>
            <a
              href="#metrics"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Founder Stories
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {onOpenDemo && (
              <button
                onClick={onOpenDemo}
                className="px-4 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100/80 hover:bg-stone-200/80 border border-stone-200 rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5 text-[#d97706]" />
                Live Simulator
              </button>
            )}

            <Link
              href="/today"
              className="text-xs font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 transition-colors"
            >
              App Cockpit
            </Link>

            <a
              href="#pricing"
              className="warm-btn-terracotta px-5 py-2.5 rounded-full text-xs font-bold text-white transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Deploy Funnel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-stone-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 rounded-2xl bg-[#fffdf8] border border-[#e7e5e4] shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
            <a
              href="#problem"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-stone-700 hover:text-[#c85a3b] py-1"
            >
              The Problem Space
            </a>
            <a
              href="#funnel"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-stone-700 hover:text-[#c85a3b] py-1"
            >
              The 4-Step Funnel
            </a>
            <a
              href="#metrics"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-stone-700 hover:text-[#c85a3b] py-1"
            >
              Founder Stories
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-stone-700 hover:text-[#c85a3b] py-1"
            >
              Pricing Plans
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-stone-700 hover:text-[#c85a3b] py-1"
            >
              FAQ
            </a>

            <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
              {onOpenDemo && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-2.5 text-xs font-semibold text-center text-[#d97706] bg-[#fef3c7] border border-[#fde68a] rounded-xl"
                >
                  ⚡ Open Funnel Simulator
                </button>
              )}
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-xs font-bold text-white bg-[#c85a3b] hover:bg-[#b34d30] rounded-xl shadow-md"
              >
                Deploy Your Growth Funnel
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

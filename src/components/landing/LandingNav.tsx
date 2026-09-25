"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HERO_DATA } from "@/lib/landingData";

interface LandingNavProps {
  onOpenDemo?: () => void;
}

export const LandingNav: React.FC<LandingNavProps> = ({ onOpenDemo }) => {
  const [announcementClosed, setAnnouncementClosed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Announcement Bar */}
      {!announcementClosed && (
        <div className="relative bg-gradient-to-r from-[#193149] to-[#3C75AF] text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between pr-8">
            <div className="flex items-center gap-2 mx-auto text-center font-medium">
              <span>{HERO_DATA.announcementText}</span>
              <a
                href={HERO_DATA.announcementLinkUrl}
                className="underline hover:no-underline font-bold text-[#FFF480] inline-flex items-center gap-0.5"
              >
                {HERO_DATA.announcementLinkText}
              </a>
            </div>
            <button
              onClick={() => setAnnouncementClosed(true)}
              aria-label="Close Announcement Bar"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-1"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main Sticky Header */}
      <header
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_8px_24px_rgba(17,24,39,0.06)] border-b border-slate-100 py-3"
            : "bg-white/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img
                src="/mastreach-app-icon.svg"
                alt=""
                className="w-9 h-9 rounded-xl shadow-md group-hover:shadow-lg transition-all"
              />
              <span className="text-xl font-extrabold tracking-tight text-[#1C1C1C] flex items-center gap-1 font-heading">
                Mastreach
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Product Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("product")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="px-3.5 py-2 text-sm font-semibold text-[#1C1C1C] hover:text-[#001AD3] rounded-md transition-colors flex items-center gap-1"
                >
                  Product
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "product" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === "product" && (
                  <div className="absolute top-full left-0 w-[680px] bg-white rounded-xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-[#E0F3FB] rounded-lg p-4 flex flex-col justify-between border border-[#B0E1F4]">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#001AD3] bg-white/70 px-2 py-0.5 rounded">
                          Mastreach Ecosystem
                        </span>
                        <h4 className="font-bold text-[#1C1C1C] mt-2 text-sm font-heading">
                          Everything connected to your LinkedIn workflow
                        </h4>
                        <p className="text-xs text-[#4B5567] mt-1 leading-relaxed">
                          Watch activity, write thoughtful responses, capture useful knowledge, create content, and understand what works — all through Mastreach.
                        </p>
                      </div>
                      <Link
                        href="/"
                        className="text-xs font-bold text-[#001AD3] hover:underline mt-3 inline-flex items-center gap-1"
                      >
                        Explore Mastreach →
                      </Link>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Link
                        href="/today"
                        className="p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#E0F3FB] text-[#001AD3] flex items-center justify-center shrink-0">
                          👁️
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#1C1C1C] group-hover:text-[#001AD3]">
                            Watcher
                          </div>
                          <div className="text-[11px] text-[#728095]">
                            See relevant LinkedIn activity as it happens
                          </div>
                          <div className="mt-0.5 text-[10px] leading-relaxed text-[#728095]">
                            Posts, comments, replies, messages, and engagement activity brought into Mastreach.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/comment"
                        className="p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#FFF480] text-[#1C1C1C] flex items-center justify-center shrink-0">
                          ✍️
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#1C1C1C] group-hover:text-[#001AD3]">
                            Comment Assistant
                          </div>
                          <div className="text-[11px] text-[#728095]">
                            Write thoughtful responses in your voice
                          </div>
                          <div className="mt-0.5 text-[10px] leading-relaxed text-[#728095]">
                            Analyze the current LinkedIn post, choose your intent, and create a response you can review before inserting.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/knowledge"
                        className="p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#D2C5FA] text-[#4B2896] flex items-center justify-center shrink-0">
                          🧠
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#1C1C1C] group-hover:text-[#001AD3]">
                            Knowledge
                          </div>
                          <div className="text-[11px] text-[#728095]">
                            Capture useful information from across the web
                          </div>
                          <div className="mt-0.5 text-[10px] leading-relaxed text-[#728095]">
                            Save LinkedIn posts, articles, web pages, and YouTube videos with notes and tags.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/today"
                        className="p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#FECEBF] text-[#9A2E12] flex items-center justify-center shrink-0">
                          📊
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#1C1C1C] group-hover:text-[#001AD3]">
                            Engagement Intelligence
                          </div>
                          <div className="text-[11px] text-[#728095]">
                            Understand what works
                          </div>
                          <div className="mt-0.5 text-[10px] leading-relaxed text-[#728095]">
                            Track comments, posts, and engagement patterns to learn from your LinkedIn activity.
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions */}
              <Link
                href="#bento"
                className="px-3.5 py-2 text-sm font-semibold text-[#1C1C1C] hover:text-[#001AD3] rounded-md transition-colors"
              >
                Solutions
              </Link>

              {/* How it works */}
              <Link
                href="#three-steps"
                className="px-3.5 py-2 text-sm font-semibold text-[#1C1C1C] hover:text-[#001AD3] rounded-md transition-colors"
              >
                How It Works
              </Link>

              {/* Pricing */}
              <Link
                href="#pricing"
                className="px-3.5 py-2 text-sm font-semibold text-[#1C1C1C] hover:text-[#001AD3] rounded-md transition-colors"
              >
                Pricing
              </Link>

              {/* FAQ */}
              <Link
                href="#faq"
                className="px-3.5 py-2 text-sm font-semibold text-[#1C1C1C] hover:text-[#001AD3] rounded-md transition-colors"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/today"
              className="text-sm font-bold text-[#1C1C1C] hover:text-[#001AD3] px-3 py-2 transition-colors"
            >
              Log in
            </Link>

            <button
              onClick={onOpenDemo}
              className="expandi-btn-outline text-xs sm:text-sm py-2 px-4"
            >
              See How It Works
            </button>

            <Link
              href="/settings"
              className="expandi-btn-primary text-xs sm:text-sm py-2 px-5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1C1C1C] hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Sheet */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <Link
              href="#bento"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-[#1C1C1C]"
            >
              Solutions
            </Link>
            <Link
              href="#three-steps"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-[#1C1C1C]"
            >
              How It Works
            </Link>
            <Link
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-[#1C1C1C]"
            >
              Comparison
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-[#1C1C1C]"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-[#1C1C1C]"
            >
              FAQ
            </Link>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo?.();
                }}
                className="w-full expandi-btn-outline text-sm py-2.5 text-center justify-center"
              >
                See How It Works
              </button>
              <Link
                href="/settings"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full expandi-btn-primary text-sm py-2.5 text-center justify-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

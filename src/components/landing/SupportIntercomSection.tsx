"use client";

import React from "react";
import { MessageSquare, Search, Sparkles, FileText, BarChart3, ArrowRight } from "lucide-react";

export function SupportIntercomSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#001AD3] p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl">
          <div className="absolute top-6 right-8 text-[#FFF480] opacity-80 animate-pulse text-2xl select-none pointer-events-none">
            ✦
          </div>
          <div className="absolute bottom-10 left-12 text-[#21ABE1] opacity-70 text-lg select-none pointer-events-none">
            ★
          </div>
          <div className="absolute top-1/2 right-1/4 text-white/30 text-xs select-none pointer-events-none">
            ✦
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFF480] text-xs font-bold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BUILT TO HELP YOU GET MORE FROM LINKEDIN</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
                Everything you need to work smarter on LinkedIn.
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                Mastreach brings your LinkedIn activity, thoughtful responses, saved knowledge, content creation, scheduling, and engagement insights together in one connected system.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-[#21ABE1] text-white flex items-center justify-center flex-shrink-0">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">01 · Understand Your Activity</span>
                    <span className="text-[11px] text-blue-200">See relevant LinkedIn posts, comments, replies, messages, and engagement activity.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-[#FFF480] text-[#001AD3] flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">02 · Write With Context</span>
                    <span className="text-[11px] text-blue-200">Analyze the post, choose your intent, and create a response in your voice.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-[#D2C5FA] text-[#001AD3] flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">03 · Capture What Matters</span>
                    <span className="text-[11px] text-blue-200">Save useful posts, articles, pages, and videos into your knowledge base.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-[#FECEBF] text-[#001AD3] flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">04 · Learn From Your Engagement</span>
                    <span className="text-[11px] text-blue-200">Track comments and engagement patterns to see what is working.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/today"
                  className="px-8 py-4 rounded-full bg-[#FFF480] hover:bg-[#fffa9e] text-[#001AD3] text-sm font-extrabold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Mastreach</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-white rounded-3xl p-6 text-stone-900 shadow-2xl border border-white/20">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-[#001AD3] text-white flex items-center justify-center font-bold text-xs">
                        MA
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-stone-900">Mastreach Assistant</h4>
                      <p className="text-[10px] text-stone-500">Your LinkedIn intelligence layer</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">
                    Ready
                  </span>
                </div>

                <div className="space-y-3 text-xs mb-4">
                  <div className="bg-[#E0F3FB] text-[#001AD3] p-3 rounded-2xl rounded-tl-xs max-w-[88%]">
                    <p className="font-semibold text-[11px]">
                      I found a LinkedIn post with a strong discussion around building products with small teams.
                    </p>
                    <p className="mt-2 text-[11px]">What would you like to do?</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {['Agree', 'Push back', 'Ask', 'Story', 'Add'].map((item) => (
                        <span key={item} className="px-2 py-1 rounded-full bg-white/70 text-[10px] font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-stone-100 text-stone-800 p-3 rounded-2xl rounded-tr-xs ml-auto max-w-[85%]">
                    <p className="text-[11px] font-medium">Add</p>
                  </div>

                  <div className="bg-[#FFF480] text-stone-900 p-3 rounded-2xl rounded-tl-xs max-w-[90%]">
                    <p className="font-semibold text-[11px]">Here&apos;s a response direction based on the post:</p>
                    <p className="mt-2 text-[11px] leading-relaxed">
                      “One thing I&apos;d add is that small teams don&apos;t necessarily move faster because they have fewer people — they move faster when context doesn&apos;t get lost between decisions.”
                    </p>
                  </div>

                  <div className="bg-stone-100 text-stone-800 p-3 rounded-2xl rounded-tr-xs ml-auto max-w-[85%]">
                    <p className="text-[11px]">Refine it to sound more conversational.</p>
                  </div>

                  <div className="bg-[#E7F7EC] text-[#0E6B4E] p-3 rounded-2xl rounded-tl-xs max-w-[90%]">
                    <p className="font-semibold text-[11px]">Updated the response.</p>
                    <p className="mt-2 text-[11px] font-semibold">Review response → Insert into LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

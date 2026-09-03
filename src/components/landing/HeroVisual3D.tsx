"use client";

import React, { useState } from "react";
import {
  Users,
  MessageSquare,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  Coffee,
  CalendarCheck,
  Building,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HumanProspect {
  id: string;
  name: string;
  role: string;
  location: string;
  dealSize: string;
  status: "Ready for Call" | "High Intent" | "Comment Reply" | "Retainer Signed";
  statusColor: string;
  statusBg: string;
  avatarText: string;
  avatarBg: string;
  snippet: string;
  x: number; // percentage
  y: number; // percentage
}

const PROSPECTS: HumanProspect[] = [
  {
    id: "p1",
    name: "Rohan Mehta",
    role: "Founder, ScaleFlow",
    location: "Bengaluru",
    dealSize: "₹12.5L",
    status: "Ready for Call",
    statusColor: "text-[#c85a3b]",
    statusBg: "bg-[#fff4ed] border-[#fcd5c7]",
    avatarText: "RM",
    avatarBg: "bg-amber-100 text-amber-900 border border-amber-300",
    snippet: "Loved your framework on borrowed reach. Can we chat this Thursday?",
    x: 10,
    y: 14,
  },
  {
    id: "p2",
    name: "Pooja Sharma",
    role: "VP Growth, Synthetix",
    location: "Mumbai",
    dealSize: "₹8.0L",
    status: "High Intent",
    statusColor: "text-[#d97706]",
    statusBg: "bg-[#fef3c7] border-[#fde68a]",
    avatarText: "PS",
    avatarBg: "bg-orange-100 text-orange-900 border border-orange-300",
    snippet: "Your teardown on enterprise retention was spot-on. Sent you a DM.",
    x: 78,
    y: 18,
  },
  {
    id: "p3",
    name: "Aditya Nair",
    role: "Managing Partner",
    location: "Gurugram",
    dealSize: "₹18.0L",
    status: "Retainer Signed",
    statusColor: "text-[#2d6a4f]",
    statusBg: "bg-[#e8f5ee] border-[#b7e0cb]",
    avatarText: "AN",
    avatarBg: "bg-emerald-100 text-emerald-900 border border-emerald-300",
    snippet: "Retainer finalized! Let's kick off the inbound engine next Monday.",
    x: 80,
    y: 74,
  },
  {
    id: "p4",
    name: "Ananya Rao",
    role: "Founding Partner, SaaSio",
    location: "Hyderabad",
    dealSize: "₹10.5L",
    status: "Comment Reply",
    statusColor: "text-[#1e3a5f]",
    statusBg: "bg-[#eef4fb] border-[#c9ddf2]",
    avatarText: "AR",
    avatarBg: "bg-blue-100 text-blue-900 border border-blue-300",
    snippet: "Pinned your comment to our top feed. Great insights on founder sales.",
    x: 12,
    y: 78,
  },
];

export function HeroVisual3D() {
  const [activeProspect, setActiveProspect] = useState<string>("p1");
  const selectedProspect = PROSPECTS.find((p) => p.id === activeProspect) || PROSPECTS[0];

  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto flex items-center justify-center select-none">
      {/* Warm Ambient Flares */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#fff4ed] via-[#fef3c7]/60 to-[#eef4fb] rounded-full blur-2xl -z-10" />

      {/* Main Human Networking Surface Card */}
      <div className="relative w-full h-full rounded-3xl bg-[#ffffff] border border-[#e7e5e4] shadow-[0_12px_40px_-10px_rgba(28,25,23,0.08)] p-6 sm:p-8 flex items-center justify-center overflow-hidden">
        
        {/* Soft Organic Curved Background Grid Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
          <defs>
            <linearGradient id="warmLine1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c85a3b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="warmLine2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2d6a4f" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Organic Connecting Strands */}
          <path d="M 120 100 Q 280 280 440 120" stroke="url(#warmLine1)" strokeWidth="2" fill="none" strokeDasharray="6 6" />
          <path d="M 440 120 Q 280 280 440 440" stroke="url(#warmLine2)" strokeWidth="2" fill="none" strokeDasharray="6 6" />
          <path d="M 440 440 Q 280 280 120 440" stroke="url(#warmLine1)" strokeWidth="2" fill="none" strokeDasharray="6 6" />
          <path d="M 120 440 Q 280 280 120 100" stroke="url(#warmLine2)" strokeWidth="2" fill="none" strokeDasharray="6 6" />
        </svg>

        {/* Central Human Relationship Hub Card */}
        <div className="relative z-20 w-52 sm:w-56 rounded-2xl bg-[#fffdf8] border border-[#fcd5c7] shadow-[0_8px_30px_-5px_rgba(200,90,59,0.15)] p-4 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#c85a3b] to-[#d97706] text-white flex items-center justify-center shadow-md shadow-[#c85a3b]/25 mb-2.5">
            <Users className="w-6 h-6" />
          </div>

          <span className="font-serif font-bold text-stone-900 text-sm">
            Audience OS Engine
          </span>
          <span className="text-[11px] text-[#c85a3b] font-medium flex items-center gap-1 mt-0.5">
            <span className="w-2 h-2 rounded-full bg-[#c85a3b] animate-ping inline-block" />
            Warm Inbound Active
          </span>

          {/* Conversation Preview Box */}
          <div className="mt-3 w-full p-2.5 rounded-xl bg-white border border-[#e7e5e4] text-left">
            <div className="flex items-center justify-between text-[10px] text-stone-500 mb-1">
              <span className="font-bold text-stone-700">{selectedProspect.name}</span>
              <span className="font-mono text-[#2d6a4f] font-bold">{selectedProspect.dealSize}</span>
            </div>
            <p className="text-[10px] text-stone-600 line-clamp-2 italic leading-snug">
              &ldquo;{selectedProspect.snippet}&rdquo;
            </p>
          </div>
        </div>

        {/* Floating Founder / Prospect Profile Cards */}
        {PROSPECTS.map((prospect) => {
          const isSelected = activeProspect === prospect.id;
          return (
            <div
              key={prospect.id}
              onClick={() => setActiveProspect(prospect.id)}
              onMouseEnter={() => setActiveProspect(prospect.id)}
              className={cn(
                "absolute z-30 transition-all duration-300 cursor-pointer",
                isSelected ? "scale-105 z-40" : "hover:scale-102 opacity-90"
              )}
              style={{
                top: `${prospect.y}%`,
                left: `${prospect.x}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className={cn(
                  "p-3 rounded-2xl border transition-all flex items-center gap-2.5 shadow-sm",
                  isSelected
                    ? "bg-white border-[#c85a3b] shadow-[0_8px_25px_-4px_rgba(200,90,59,0.2)] ring-1 ring-[#c85a3b]"
                    : "bg-[#fffdf8] border-[#e7e5e4] hover:border-stone-400"
                )}
              >
                <div
                  className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shadow-xs",
                    prospect.avatarBg
                  )}
                >
                  {prospect.avatarText}
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-stone-900 leading-tight">
                      {prospect.name}
                    </span>
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-stone-100 text-stone-700 border border-stone-200">
                      {prospect.dealSize}
                    </span>
                  </div>

                  <span className="text-[10px] text-stone-500 font-medium">
                    {prospect.role} • {prospect.location}
                  </span>

                  <div className="flex items-center gap-1 mt-1">
                    <span
                      className={cn(
                        "text-[9px] font-semibold px-1.5 py-0.2 rounded-full border",
                        prospect.statusBg,
                        prospect.statusColor
                      )}
                    >
                      {prospect.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Top Header Pill: Inbound Lift */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 rounded-full bg-[#fff4ed] border border-[#fcd5c7] shadow-sm flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-[#c85a3b]" />
          <span className="text-[11px] font-bold text-stone-800">
            Warm Inbound Lift: <span className="text-[#c85a3b] font-black">+340%</span>
          </span>
        </div>

        {/* Bottom Footer Pill: Monthly Peer Reach */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 rounded-full bg-[#eef4fb] border border-[#c9ddf2] shadow-sm flex items-center gap-2">
          <Users className="w-3.5 h-3.5 text-[#1e3a5f]" />
          <span className="text-[11px] font-bold text-stone-800">
            450k+ Monthly Peer Impressions
          </span>
        </div>
      </div>
    </div>
  );
}

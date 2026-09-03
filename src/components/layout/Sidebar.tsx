"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Zap,
  MessageSquare,
  PenTool,
  BookOpen,
  Inbox,
  Radio,
  Settings,
  LogOut,
  Sun,
  Moon,
  Monitor,
  Cloud,
  ChevronDown,
  MoreHorizontal,
  Sparkles,
  Command,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Today", href: "/today", icon: Zap, pill: "Live" },
  { name: "Comment", href: "/comment", icon: MessageSquare },
  { name: "Content", href: "/content", icon: PenTool },
  { name: "Knowledge", href: "/knowledge", icon: BookOpen },
  { name: "Messages", href: "/messages", icon: Inbox, badge: "26" },
  { name: "Extension", href: "/extension", icon: Radio },
  { name: "Growth Funnel", href: "/landing", icon: Sparkles, pill: "New" },
];

export function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Hide sidebar on public landing / funnel pages
  if (pathname === "/" || pathname === "/landing" || pathname === "/funnel") {
    return null;
  }

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col justify-between border-r border-[var(--border)] bg-[var(--sidebar)] h-screen sticky top-0 z-30 select-none transition-colors duration-200">
      {/* Top Header / Brand Cockpit */}
      <div className="p-4 border-b border-[var(--border)] flex flex-col gap-3">
        {/* Brand Bar */}
        <div className="flex items-center justify-between">
          <Link href="/today" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Cloud className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg tracking-tight text-[var(--foreground)] font-normal">
                  Audience OS
                </span>
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
              </div>
              <p className="text-[10px] text-[var(--muted-foreground)] tracking-wide font-sans">
                from lead to paid
              </p>
            </div>
          </Link>
        </div>

        {/* Cockpit Organization Dropdown */}
        <div className="flex items-center justify-between p-2 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all cursor-pointer">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-[11px] flex items-center justify-center flex-shrink-0">
              TF
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-[var(--foreground)] truncate">
                Trueform Studio
              </p>
              <p className="text-[10px] text-[var(--muted-foreground)] truncate font-mono">
                Cockpit v1.3.4
              </p>
            </div>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-[var(--muted-foreground)] flex-shrink-0" />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider font-sans">
          Workspace Cockpit
        </div>

        {navigationItems.map((item) => {
          const isActive =
            pathname === item.href || (item.href === "/today" && pathname === "/");
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-full text-xs font-medium transition-all duration-150 group",
                isActive
                  ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card-subtle)]"
              )}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 group-hover:scale-110",
                    isActive
                      ? "text-white"
                      : "text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]"
                  )}
                />
                <span className="tracking-tight">{item.name}</span>
              </div>

              {item.badge && (
                <span
                  className={cn(
                    "px-2 py-0.5 rounded-full text-[10px] font-bold font-mono",
                    isActive
                      ? "bg-white/25 text-white"
                      : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                  )}
                >
                  {item.badge}
                </span>
              )}

              {item.pill && !isActive && (
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                  {item.pill}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer Area: User Card & Settings */}
      <div className="p-3 border-t border-[var(--border)] flex flex-col gap-2.5">
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-2.5 px-3 py-2 rounded-full text-xs font-medium transition-all",
            pathname === "/settings"
              ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20"
              : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card-subtle)]"
          )}
        >
          <Settings className="w-4 h-4" />
          <span>Settings & Guardrails</span>
        </Link>

        {/* User Card */}
        <div className="flex items-center justify-between p-2 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)]">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
              S
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-[var(--foreground)] truncate">
                Sumeet
              </p>
              <p className="text-[10px] text-[var(--muted-foreground)] truncate font-mono">
                Growth Coach
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              title="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

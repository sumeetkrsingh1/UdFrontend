"use client";

import React, { useState } from "react";
import { Search, Bell, Sparkles, Plus, ArrowRight, ShieldCheck } from "lucide-react";
import { CommandPalette } from "./CommandPalette";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  actionButton?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
}

export function Header({ title, subtitle, badge, actionButton }: HeaderProps) {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  return (
    <>
      <header className="h-16 px-8 border-b border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-xl sticky top-0 z-20 flex items-center justify-between transition-colors">
        {/* Title & Subtitle */}
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-xl font-serif text-[var(--foreground)] tracking-tight font-normal">
                {title}
              </h1>
              {badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-mono">
                  {badge}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-[11px] text-[var(--muted-foreground)] tracking-tight font-sans">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Right Section: Search & Quick Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Search Bar */}
          <button
            onClick={() => setIsCommandOpen(true)}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--card-subtle)] hover:bg-[var(--border)]/40 border border-[var(--border)] text-xs text-[var(--muted-foreground)] transition-all group"
          >
            <Search className="w-3.5 h-3.5 group-hover:text-blue-600 transition-colors" />
            <span className="hidden sm:inline">Search cockpit...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded-full bg-[var(--card)] border border-[var(--border)] font-mono text-[10px] text-[var(--muted-foreground)] shadow-xs">
              ⌘K
            </kbd>
          </button>

          {/* Action button if provided */}
          {actionButton && (
            <button
              onClick={actionButton.onClick}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all"
            >
              {actionButton.icon || <Plus className="w-3.5 h-3.5" />}
              <span>{actionButton.label}</span>
            </button>
          )}

          {/* Notifications / Live Ping */}
          <button
            onClick={() => alert("All 26 automated listeners are healthy.")}
            className="p-2 rounded-full text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card-subtle)] border border-[var(--border)] transition-all relative"
            title="System notifications"
          >
            <Bell className="w-3.5 h-3.5" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 ring-2 ring-[var(--card)]" />
          </button>

          {/* User Avatar */}
          <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
            S
          </div>
        </div>
      </header>

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />
    </>
  );
}

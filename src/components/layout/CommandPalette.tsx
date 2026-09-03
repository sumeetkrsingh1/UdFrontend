"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Zap,
  MessageSquare,
  PenTool,
  BookOpen,
  Inbox,
  Radio,
  Settings,
  Sparkles,
  ArrowRight,
  X,
  FileText,
  User,
} from "lucide-react";
import { initialConversations, initialContentItems } from "@/lib/mockData";

export function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredRoutes = [
    { name: "Today Dashboard", href: "/today", icon: Zap, cat: "Navigation" },
    { name: "Comment & Growth Radar", href: "/comment", icon: MessageSquare, cat: "Navigation" },
    { name: "Content Studio & Pipeline", href: "/content", icon: PenTool, cat: "Navigation" },
    { name: "Knowledge Base & AI Brain", href: "/knowledge", icon: BookOpen, cat: "Navigation" },
    { name: "Messages & Inbox CRM", href: "/messages", icon: Inbox, cat: "Navigation" },
    { name: "Extension & Watcher Nodes", href: "/extension", icon: Radio, cat: "Navigation" },
    { name: "Settings & Brand Voice", href: "/settings", icon: Settings, cat: "Navigation" },
  ].filter((r) => r.name.toLowerCase().includes(query.toLowerCase()));

  const filteredPosts = initialContentItems
    .filter((c) => c.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 3);

  const filteredLeads = initialConversations
    .filter((l) => l.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 3);

  const handleNavigate = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-xl rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-2xl overflow-hidden flex flex-col">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border)]">
          <Search className="w-5 h-5 text-[var(--muted-foreground)]" />
          <input
            autoFocus
            type="text"
            placeholder="Search screens, drafted replies, ideas or settings..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card-subtle)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-4 text-xs">
          {/* Routes */}
          <div>
            <p className="px-3 py-1.5 text-[10px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
              Quick Navigation
            </p>
            <div className="space-y-0.5">
              {filteredRoutes.map((route) => {
                const Icon = route.icon;
                return (
                  <button
                    key={route.href}
                    onClick={() => handleNavigate(route.href)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-[var(--card-subtle)] text-[var(--foreground)] transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-indigo-500" />
                      <span>{route.name}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[var(--muted-foreground)] transition-opacity" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Posts / Ideas */}
          {filteredPosts.length > 0 && (
            <div>
              <p className="px-3 py-1.5 text-[10px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                Content & Ideas
              </p>
              <div className="space-y-0.5">
                {filteredPosts.map((post) => (
                  <button
                    key={post.id}
                    onClick={() => handleNavigate("/content")}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-[var(--card-subtle)] text-[var(--foreground)] transition-colors"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <FileText className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      <span className="truncate">{post.title}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-[var(--card-subtle)] text-[var(--muted-foreground)] capitalize">
                      {post.type}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Conversations */}
          {filteredLeads.length > 0 && (
            <div>
              <p className="px-3 py-1.5 text-[10px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                Conversations & DMs
              </p>
              <div className="space-y-0.5">
                {filteredLeads.map((lead) => (
                  <button
                    key={lead.id}
                    onClick={() => handleNavigate("/messages")}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-[var(--card-subtle)] text-[var(--foreground)] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <User className="w-4 h-4 text-emerald-500" />
                      <div>
                        <p className="font-medium">{lead.name}</p>
                        <p className="text-[10px] text-[var(--muted-foreground)] truncate max-w-xs">
                          {lead.lastMessage}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                      {lead.stage}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[var(--card-subtle)] border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--muted-foreground)]">
          <span>Navigate with <b>↑</b> <b>↓</b></span>
          <span>Press <b>ESC</b> to close</span>
        </div>
      </div>
    </div>
  );
}

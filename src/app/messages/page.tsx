"use client";

import React, { useState } from "react";
import {
  Inbox,
  Sparkles,
  ExternalLink,
  Copy,
  Send,
  User,
  Paperclip,
  CheckCircle2,
  ChevronDown,
  Info,
  ShieldCheck,
  Clock,
  Search,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Header } from "@/components/layout/Header";
import {
  initialConversations,
  Conversation,
} from "@/lib/mockData";
import { cn } from "@/lib/utils";

export default function MessagesPage() {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [activeId, setActiveId] = useState<string>(initialConversations[0]?.id || "");
  const [tabFilter, setTabFilter] = useState<"unread" | "drafted" | "all">("unread");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const activeConv = conversations.find((c) => c.id === activeId) || conversations[0];
  const [draftReplyText, setDraftReplyText] = useState(activeConv?.draftReply?.text || "");

  const handleSelectConv = (conv: Conversation) => {
    setActiveId(conv.id);
    setDraftReplyText(conv.draftReply?.text || "");
    setIsCopied(false);
  };

  const handleCopyAndOpen = () => {
    if (!draftReplyText) return;
    navigator.clipboard.writeText(draftReplyText);
    setIsCopied(true);
    confetti({ particleCount: 35, spread: 55 });

    setTimeout(() => {
      setConversations((prev) =>
        prev.map((c) => (c.id === activeId ? { ...c, unread: false, draftReady: false } : c))
      );
      window.open("https://www.linkedin.com/messaging/", "_blank");
      setIsCopied(false);
    }, 800);
  };

  const filteredConversations = conversations.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());
    if (tabFilter === "unread") return matchesSearch && c.unread;
    if (tabFilter === "drafted") return matchesSearch && c.draftReady;
    return matchesSearch;
  });

  const unreadCount = conversations.filter((c) => c.unread).length;
  const draftedCount = conversations.filter((c) => c.draftReady).length;

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[var(--background)]">
      <Header
        title="Messages CRM"
        subtitle="Drafted from your knowledge base, sent only when you press send"
        badge="26 In Queue"
      />

      <div className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        {/* Top Summary Banner */}
        <div className="p-8 rounded-3xl billow-card bg-gradient-to-b from-white via-white to-blue-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-serif text-[var(--foreground)] tracking-tight">
              <span className="text-blue-600 dark:text-blue-400">26 prospects</span> are waiting on a reply.
            </h1>
            <p className="text-xs sm:text-sm text-[var(--muted-foreground)] max-w-2xl leading-relaxed">
              11 conversations have an AI draft calibrated to your voice. Each draft explains its reasoning. You send them safely on LinkedIn.
            </p>
          </div>

          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 font-mono">
            <ShieldCheck className="w-3.5 h-3.5" /> Human Approved Only
          </span>
        </div>

        {/* 2-Column CRM Inbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[640px]">
          {/* Left: Inbox List */}
          <div className="lg:col-span-5 p-6 rounded-3xl billow-card flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {/* Filter Tabs */}
              <div className="flex items-center justify-between gap-2 border-b border-[var(--border)] pb-3">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setTabFilter("unread")}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all",
                      tabFilter === "unread"
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    )}
                  >
                    Unread ({unreadCount})
                  </button>
                  <button
                    onClick={() => setTabFilter("drafted")}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all",
                      tabFilter === "drafted"
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    )}
                  >
                    Drafted ({draftedCount})
                  </button>
                  <button
                    onClick={() => setTabFilter("all")}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all",
                      tabFilter === "all"
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    )}
                  >
                    All (26)
                  </button>
                </div>
              </div>

              {/* Search input */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-[var(--muted-foreground)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search prospects & messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-full bg-[var(--card-subtle)] border border-[var(--border)] text-xs text-[var(--foreground)] focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Conversation Cards */}
              <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
                {filteredConversations.map((conv) => {
                  const isActive = conv.id === activeConv?.id;

                  return (
                    <div
                      key={conv.id}
                      onClick={() => handleSelectConv(conv)}
                      className={cn(
                        "p-4 rounded-2xl border text-left cursor-pointer transition-all space-y-2",
                        isActive
                          ? "bg-blue-500/10 border-blue-500 shadow-sm"
                          : "bg-[var(--card)] border-[var(--border)] hover:border-blue-500/30"
                      )}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-xs",
                              conv.avatarBg
                            )}
                          >
                            {conv.avatarText}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[var(--foreground)]">
                              {conv.name}
                            </h4>
                            <p className="text-[10px] text-[var(--muted-foreground)] truncate max-w-[130px]">
                              {conv.headline}
                            </p>
                          </div>
                        </div>

                        <span className="text-[10px] text-[var(--muted-foreground)] font-mono">
                          {conv.timeAgo}
                        </span>
                      </div>

                      <p className="text-xs text-[var(--muted-foreground)] truncate">
                        {conv.lastMessage}
                      </p>

                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {conv.unread && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono">
                            unread
                          </span>
                        )}
                        {conv.draftReady && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                            draft ready
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[var(--card-subtle)] text-[var(--muted-foreground)]">
                          {conv.stage}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-[11px] text-[var(--muted-foreground)] text-center pt-2 border-t border-[var(--border)]">
              6 of 26 conversations have no stage yet. Too little has been said for the writer to place them.
            </p>
          </div>

          {/* Right: Active Conversation Thread & AI Reply Pane */}
          <div className="lg:col-span-7 p-6 rounded-3xl billow-card flex flex-col justify-between space-y-6">
            {activeConv ? (
              <>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-xs",
                        activeConv.avatarBg
                      )}
                    >
                      {activeConv.avatarText}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-[var(--foreground)]">
                          {activeConv.name}
                        </h3>
                        <a
                          href="https://www.linkedin.com"
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-0.5 font-semibold"
                        >
                          Their profile <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {activeConv.headline}
                      </p>
                    </div>
                  </div>

                  {/* The Writer Thinks Pill */}
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span className="font-semibold text-[var(--foreground)]">
                        THE WRITER THINKS:
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold font-mono">
                        {activeConv.stage}
                      </span>
                    </div>
                    <p className="text-[10px] text-[var(--muted-foreground)] mt-0.5">
                      Drafts reference previous context
                    </p>
                  </div>
                </div>

                {/* Message Bubble History */}
                <div className="space-y-3 max-h-64 overflow-y-auto p-4 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)]">
                  {activeConv.messages.map((m) => (
                    <div
                      key={m.id}
                      className={cn(
                        "flex flex-col max-w-[80%] space-y-1",
                        m.sender === "you" ? "ml-auto items-end" : "items-start"
                      )}
                    >
                      <span className="text-[10px] text-[var(--muted-foreground)] font-mono">
                        {m.senderName} • {m.timestamp}
                      </span>
                      <div
                        className={cn(
                          "p-3 rounded-2xl text-xs leading-relaxed",
                          m.sender === "you"
                            ? "bg-blue-600 text-white"
                            : "bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)]"
                        )}
                      >
                        {m.text}
                        {m.attachment && (
                          <div className="mt-2 p-2 rounded-xl bg-black/10 flex items-center gap-2 text-[11px] font-mono">
                            <Paperclip className="w-3.5 h-3.5" />
                            <span>{m.attachment.name} ({m.attachment.size})</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Draft Response Box */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      YOUR CALIBRATED REPLY
                    </span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium font-mono">
                      written for you, unedited
                    </span>
                  </div>

                  <textarea
                    rows={3}
                    value={draftReplyText}
                    onChange={(e) => setDraftReplyText(e.target.value)}
                    placeholder="Type or customize your reply..."
                    className="w-full p-4 rounded-2xl bg-[var(--input)] border border-[var(--border)] text-xs text-[var(--foreground)] focus:outline-none focus:border-blue-500 transition-colors leading-relaxed font-sans"
                  />

                  {/* Why It Says This Rationale Card */}
                  {activeConv.draftReply && (
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 border border-blue-500/15 space-y-1">
                      <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs font-bold font-sans">
                        <Info className="w-3.5 h-3.5" />
                        <span>WHY IT SAYS THIS</span>
                      </div>
                      <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">
                        {activeConv.draftReply.whyItSaysThis}
                      </p>
                    </div>
                  )}

                  {/* Copy & Send Action Bar */}
                  <div className="pt-3 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[11px] text-[var(--muted-foreground)] text-center sm:text-left">
                      LinkedIn has no message API, so replies are sent by you on LinkedIn.
                    </span>

                    <button
                      onClick={handleCopyAndOpen}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all flex-shrink-0"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{isCopied ? "Copied! Opening..." : "Copy and open LinkedIn ↗"}</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="py-20 text-center text-xs text-[var(--muted-foreground)]">
                Select a conversation from the left to start reviewing.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

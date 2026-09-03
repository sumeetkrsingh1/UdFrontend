"use client";

import React, { useState } from "react";
import {
  Radio,
  RefreshCw,
  Copy,
  Download,
  Terminal,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  Cpu,
  Monitor,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Header } from "@/components/layout/Header";
import {
  initialWatchers,
  initialTelemetryLogs,
  WatcherMachine,
  TelemetryLog,
} from "@/lib/mockData";
import { cn } from "@/lib/utils";

export default function ExtensionPage() {
  const [watchers, setWatchers] = useState<WatcherMachine[]>(initialWatchers);
  const [logs, setLogs] = useState<TelemetryLog[]>(initialTelemetryLogs);
  const [showToken, setShowToken] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedToken, setCopiedToken] = useState(false);

  const tokenString = "aud_sec_live_948fbc28e938472910d8fa";
  const curlCommand = `curl -fsSL https://web-production-eb248.up.railway.app/install.sh | bash -s -- ${showToken ? tokenString : "••••••••••••••••••••••••••••••••"}`;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      confetti({ particleCount: 30, spread: 45 });
      alert("Telemetry refreshed across all 2 watcher machines.");
    }, 800);
  };

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(`curl -fsSL https://web-production-eb248.up.railway.app/install.sh | bash -s -- ${tokenString}`);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 1500);
  };

  const handleCopyToken = () => {
    navigator.clipboard.writeText(tokenString);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 1500);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[var(--background)]">
      <Header
        title="Extension Daemon"
        subtitle="The watcher, and whether it is actually collecting metrics"
        badge="Node Telemetry"
        actionButton={{
          label: isRefreshing ? "Refreshing..." : "Refresh Watchers",
          icon: <RefreshCw className={cn("w-3.5 h-3.5", isRefreshing && "animate-spin")} />,
          onClick: handleRefresh,
        }}
      />

      <div className="flex-1 max-w-6xl w-full mx-auto px-6 py-8 space-y-8">
        {/* Top Summary Banner */}
        <div className="p-8 rounded-3xl billow-card bg-gradient-to-b from-white via-white to-amber-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-amber-950/20 space-y-2 border-amber-500/20">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-mono">
              Node Health Status
            </span>
          </div>

          <h1 className="text-3xl font-serif text-[var(--foreground)] tracking-tight">
            <span className="text-amber-600 dark:text-amber-400">0 of 2 watchers</span> are running smoothly.
          </h1>

          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] max-w-3xl leading-relaxed">
            The watcher reads your feed and notifications in the background. When it stops, your numbers just quietly stop moving, which is why this page shows when each one last succeeded rather than only whether it is turned on.
          </p>
        </div>

        {/* Your Machines Status Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-serif font-normal text-[var(--foreground)] text-lg">
                Connected Nodes
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">
                Newest build is <b className="font-mono text-blue-600 dark:text-blue-400">v1.3.4</b>, out on September 2
              </p>
            </div>
            <button
              onClick={handleRefresh}
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Refresh Nodes
            </button>
          </div>

          <div className="space-y-4">
            {watchers.map((node) => (
              <div
                key={node.id}
                className={cn(
                  "p-6 rounded-3xl billow-card transition-all space-y-4",
                  node.status === "struggling"
                    ? "border-amber-500/40"
                    : "opacity-85"
                )}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-[var(--card-subtle)] text-[var(--foreground)] border border-[var(--border)]">
                      <Monitor className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[var(--foreground)]">
                          {node.name}
                        </span>
                        {node.status === "struggling" && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono">
                            Struggling
                          </span>
                        )}
                        {node.status === "offline" && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500/10 text-red-600 dark:text-red-400 font-mono">
                            Offline
                          </span>
                        )}
                        {node.isHeadless && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[var(--card-subtle)] text-[var(--muted-foreground)] font-mono">
                            headless
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {node.statusMessage}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-[var(--muted-foreground)] font-mono self-end sm:self-auto">
                    {node.os} • {node.currentVersion} • <span className="text-amber-500 font-bold">{node.latestVersion} is out</span>
                  </div>
                </div>

                {/* Last Stats Matrix */}
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)]">
                    <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-wider font-mono">Last Succeeded</span>
                    <p className="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-sm mt-0.5">{node.lastSucceeded}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)]">
                    <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-wider font-mono">Last Heard From</span>
                    <p className="font-bold text-[var(--foreground)] font-mono text-sm mt-0.5">{node.lastHeardFrom}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)]">
                    <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-wider font-mono">Last Error</span>
                    <p className="font-bold text-red-500 font-mono text-sm mt-0.5">{node.lastError || "None"}</p>
                  </div>
                </div>

                {/* Error Log Snippet if present */}
                {node.errorLog && (
                  <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/20 text-[11px] font-mono text-red-600 dark:text-red-400 overflow-x-auto">
                    {node.errorLog}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-xs text-[var(--muted-foreground)] text-center">
            Each machine reports independently, and figures across your other views represent all nodes combined.
          </p>
        </div>

        {/* Connect a Machine Onboarding Card */}
        <div className="p-8 rounded-3xl billow-card space-y-6">
          <div>
            <h3 className="text-xl font-serif font-normal text-[var(--foreground)]">
              Connect a machine
            </h3>
            <p className="text-xs text-[var(--muted-foreground)]">
              Run the background watcher daemon on your laptop or cloud instance
            </p>
          </div>

          {/* Mac Terminal Curl Snippet */}
          <div className="p-5 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--foreground)] flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-blue-600" />
                On a Mac, paste this in Terminal
              </span>
              <span className="text-[11px] text-[var(--muted-foreground)] font-mono">
                installs automatically
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[var(--input)] border border-[var(--border)] font-mono text-xs flex items-center justify-between gap-3 text-[var(--foreground)] overflow-x-auto">
              <code className="truncate">{curlCommand}</code>
              <button
                onClick={handleCopyCommand}
                className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1 flex-shrink-0 transition-all shadow-xs"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedScript ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            <p className="text-[11px] text-[var(--muted-foreground)]">
              Log into LinkedIn once in the window it opens. It remembers your session and auto-starts on login.
            </p>
          </div>

          {/* Windows / Manual Download Flow */}
          <div className="space-y-4 pt-2">
            <span className="text-xs font-bold text-[var(--foreground)]">
              Or, on Windows or manually:
            </span>
            <div className="space-y-2 text-xs text-[var(--muted-foreground)] list-decimal pl-4 leading-relaxed">
              <p><b>1.</b> Download the watcher on the computer you use LinkedIn from and open it.</p>
              <p><b>2.</b> Paste this authentication token when prompted.</p>
              <p><b>3.</b> Log into LinkedIn once in the browser window it spawns.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => alert("Downloading AudienceOS-Watcher-Setup-v1.3.4.exe...")}
                className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download for Windows</span>
              </button>
              <button
                onClick={() => alert("Downloading AudienceOS-Watcher-v1.3.4.dmg...")}
                className="px-5 py-2.5 rounded-full bg-[var(--card-subtle)] hover:bg-[var(--border)]/40 border border-[var(--border)] text-xs font-semibold text-[var(--foreground)] flex items-center gap-1.5 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download for Mac</span>
              </button>
              <button
                onClick={handleCopyToken}
                className="px-5 py-2.5 rounded-full bg-[var(--card-subtle)] hover:bg-[var(--border)]/40 border border-[var(--border)] text-xs font-semibold text-[var(--foreground)] flex items-center gap-1.5 transition-all"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedToken ? "Token Copied!" : "Copy Token"}</span>
              </button>
              <button
                onClick={() => setShowToken(!showToken)}
                className="p-2 rounded-full text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card-subtle)] text-xs flex items-center gap-1"
              >
                {showToken ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showToken ? "Hide" : "Reveal"}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border)] font-mono text-xs text-[var(--muted-foreground)] flex items-center justify-between">
              <span>{showToken ? tokenString : "••••••••••••••••••••••••••••••••••••••••"}</span>
              <span className="text-[10px] text-amber-500 font-bold">Keep token private</span>
            </div>
          </div>
        </div>

        {/* Real-Time Telemetry Stream Log Table */}
        <div className="p-8 rounded-3xl billow-card space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
            <div>
              <h3 className="text-base font-serif font-normal text-[var(--foreground)] text-lg">
                Recent Telemetry Activity
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">
                Newest first, straight from the background watcher daemons
              </p>
            </div>
            <span className="text-xs text-blue-600 dark:text-blue-400 font-mono font-bold">
              Live Feed Active
            </span>
          </div>

          <div className="divide-y divide-[var(--border)] text-xs">
            {logs.map((log) => (
              <div key={log.id} className="py-3 flex items-center justify-between gap-4 font-mono">
                <div className="flex items-center gap-3 min-w-0">
                  {log.event === "sync_failed" && (
                    <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold flex-shrink-0">
                      sync_failed
                    </span>
                  )}
                  {log.event === "sync_success" && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold flex-shrink-0">
                      sync_success
                    </span>
                  )}
                  {log.event === "watching" && (
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold flex-shrink-0">
                      watching
                    </span>
                  )}
                  {log.event === "started" && (
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-500 text-[10px] font-bold flex-shrink-0">
                      started
                    </span>
                  )}
                  <span className="text-[var(--foreground)] truncate font-sans text-xs">
                    {log.detail}
                  </span>
                </div>
                <span className="text-[11px] text-[var(--muted-foreground)] flex-shrink-0">
                  {log.timeAgo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

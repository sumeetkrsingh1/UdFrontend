"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Timeline, TimelineText } from "@/components/ui/hero-with-pixelbackground-utils/timeline";
import PixelBackground from "@/components/ui/hero-with-pixelbackground-utils/pixel-background";

type HeroWithPixelBackgroundProps = {
  onOpenDemo?: () => void;
};

const TIMELINE_PHRASES = [
  "thoughtful responses.",
  "better conversations.",
  "useful knowledge.",
  "smarter content.",
  "actionable insights.",
  "real momentum.",
];

export default function HeroWithPixelBackground({
  onOpenDemo,
}: HeroWithPixelBackgroundProps) {
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const getStartingIndex = () =>
      Math.floor(Math.random() * TIMELINE_PHRASES.length);
    const updateMotionPreference = () => setIsReducedMotion(motionQuery.matches);

    setTimelineIndex(getStartingIndex());
    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    const interval = window.setInterval(() => {
      if (!document.hidden && !motionQuery.matches) {
        setTimelineIndex((current) => (current + 1) % TIMELINE_PHRASES.length);
      }
    }, 3200);

    return () => {
      window.clearInterval(interval);
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-[#0a0a0a]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      >
        <PixelBackground
          gap={6}
          speed={60}
          colors="#d4d4d4,#e5e5e5,#c4c4c4,#bababa"
          opacity={0.7}
          direction="top"
          className="h-full w-full dark:[&>canvas]:hidden"
        />
        <PixelBackground
          gap={6}
          speed={60}
          colors="#1a1a1a,#2a2a2a,#333333,#111111"
          opacity={1}
          direction="top"
          className="absolute inset-0 hidden h-full w-full dark:block"
        />
      </div>

      <div className="relative flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-center gap-2"
          >
            {["Watch", "Create", "Measure"].map((label, index) => (
              <React.Fragment key={label}>
                {index > 0 && (
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.45 + index * 0.12, duration: 0.4 }}
                    className="h-px w-8 origin-left bg-[#CCD5DF] dark:bg-zinc-700"
                  />
                )}
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.12,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#728095] dark:text-zinc-500"
                >
                  {label}
                </motion.span>
              </React.Fragment>
            ))}
          </motion.div>

          <div className="flex max-w-6xl flex-col items-center gap-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-heading text-center text-4xl font-black leading-none tracking-tight text-[#1C1C1C] dark:text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Turn LinkedIn
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-heading text-center text-4xl font-black leading-none tracking-tight text-[#1C1C1C] dark:text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              activity into
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.44,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-3"
            >
              <Timeline
                rotation={-1.2}
                initialLeft={10}
                minWidth={56}
                containerClassName="relative w-fit max-w-[calc(100vw-5rem)] justify-center overflow-hidden bg-white py-3 dark:bg-[#0a0a0a]"
                handleClassName="border-[#FFF480] bg-white dark:bg-[#0a0a0a]"
                handleIndicatorClassName="bg-[#FFF480]"
              >
                <TimelineText className="relative flex min-h-[1.1em] items-center justify-center px-2 text-4xl font-black leading-none tracking-tight text-[#001AD3] dark:text-yellow-400 sm:text-6xl md:text-7xl lg:text-8xl">
                  <AnimatePresence initial={false} mode={isReducedMotion ? "sync" : "popLayout"}>
                    <motion.span
                      key={TIMELINE_PHRASES[timelineIndex]}
                      layout={!isReducedMotion}
                      initial={isReducedMotion ? false : { y: 22, opacity: 0, scale: 0.97 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={isReducedMotion ? undefined : { y: -22, opacity: 0, scale: 0.97 }}
                      transition={{
                        duration: isReducedMotion ? 0 : 0.62,
                        ease: [0.22, 1, 0.36, 1],
                        layout: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
                      }}
                      className="block max-w-[calc(100vw-7rem)] whitespace-normal text-center"
                    >
                      {TIMELINE_PHRASES[timelineIndex]}
                    </motion.span>
                  </AnimatePresence>
                </TimelineText>
              </Timeline>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="mt-10 max-w-2xl text-center text-sm leading-relaxed text-[#4B5567] dark:text-zinc-400 sm:text-lg"
          >
            Mastreach connects your LinkedIn activity, thoughtful responses,
            knowledge, content creation, scheduling, and engagement insights in
            one intelligent system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="/settings"
              className="expandi-btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold"
            >
              Get Started
              <ArrowRight className="size-4" />
            </a>
            <button
              type="button"
              onClick={onOpenDemo}
              className="expandi-btn-outline px-8 py-3 text-sm font-semibold"
            >
              See how it works
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-[#728095] dark:text-zinc-400"
          >
            {[
              "LinkedIn activity in one place",
              "Thoughtful responses in your voice",
              "You stay in control",
            ].map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 && <span aria-hidden="true">•</span>}
                <span className="flex items-center gap-1">
                  <Check className="size-3.5 text-emerald-500" />
                  {item}
                </span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#CCD5DF] to-transparent" />
    </section>
  );
}

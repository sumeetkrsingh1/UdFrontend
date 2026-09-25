"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface WhisperTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  triggerStart?: string;
}

export function WhisperText({
  text,
  className = "",
  delay = 70,
  duration = 0.45,
  x = 0,
  y = 12,
  triggerStart = "top 90%",
}: WhisperTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = containerRef.current?.querySelectorAll<HTMLElement>("[data-word]");
      if (!targets?.length) return;

      gsap.set(targets, { opacity: 0, x, y });
      gsap.to(targets, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          toggleActions: "play none none none",
          once: true,
        },
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        ease: "power2.out",
        stagger: delay / 1000,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration, text, triggerStart, x, y]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} data-word className="inline-block whitespace-nowrap">
          {word}
          {index < text.split(" ").length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </div>
  );
}

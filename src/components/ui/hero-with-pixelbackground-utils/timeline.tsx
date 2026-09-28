"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type TimelineProps = {
  children: React.ReactNode;
  rotation?: number;
  initialLeft?: number;
  minWidth?: number;
  containerClassName?: string;
  handleClassName?: string;
  handleIndicatorClassName?: string;
};

export function Timeline({
  children,
  rotation = 0,
  initialLeft = 0,
  minWidth = 56,
  containerClassName,
  handleClassName,
  handleIndicatorClassName,
}: TimelineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative inline-flex max-w-full"
      style={{
        transform: `rotate(${rotation}deg)`,
        marginLeft: `${initialLeft}px`,
        minWidth: `${minWidth}px`,
      }}
    >
      <motion.div
        layout
        transition={{
          layout: {
            duration: prefersReducedMotion ? 0 : 0.62,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        className={cn(
          "relative inline-flex items-center rounded-[1.15rem] border-[3px] border-yellow-400 px-3 py-1",
          containerClassName
        )}
      >
      <span
        className={cn(
          "absolute -left-3 top-1/2 flex h-[78%] w-8 -translate-y-1/2 items-center justify-center rounded-[1.15rem] border-[3px] border-yellow-400 sm:-left-6 sm:w-11",
          handleClassName
        )}
      >
        <span
          className={cn(
            "h-10 w-3 rounded-full",
            handleIndicatorClassName
          )}
        />
      </span>
      <span
        className={cn(
          "absolute -right-3 top-1/2 flex h-[78%] w-8 -translate-y-1/2 items-center justify-center rounded-[1.15rem] border-[3px] border-yellow-400 sm:-right-6 sm:w-11",
          handleClassName
        )}
      >
        <span
          className={cn(
            "h-10 w-3 rounded-full",
            handleIndicatorClassName
          )}
        />
      </span>
      {children}
      </motion.div>
    </div>
  );
}

export function TimelineText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={className}>{children}</span>;
}

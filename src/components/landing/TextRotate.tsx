"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRotateProps {
  texts: string[];
  rotationInterval?: number;
  className?: string;
}

export function TextRotate({
  texts,
  rotationInterval = 2600,
  className,
}: TextRotateProps) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (texts.length < 2) return;

    const intervalId = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % texts.length);
    }, rotationInterval);

    return () => window.clearInterval(intervalId);
  }, [rotationInterval, texts.length]);

  return (
    <motion.span
      layout="size"
      transition={{
        layout: { type: "spring", stiffness: 260, damping: 24 },
      }}
      className={cn("inline-grid align-baseline overflow-hidden", className)}
    >
      <span className="sr-only">{texts[index]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={texts[index]}
          aria-hidden="true"
          initial={prefersReducedMotion ? false : { y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { y: "-110%", opacity: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 260, damping: 24 }
          }
          className="col-start-1 row-start-1 whitespace-nowrap"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}

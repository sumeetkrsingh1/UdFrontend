"use client";

import React, { useEffect, useRef } from "react";

type PixelBackgroundProps = {
  gap?: number;
  speed?: number;
  colors?: string;
  opacity?: number;
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
};

function parseColors(colors: string) {
  return colors
    .split(",")
    .map((color) => color.trim())
    .filter(Boolean);
}

export default function PixelBackground({
  gap = 6,
  speed = 60,
  colors = "#d4d4d4,#e5e5e5,#c4c4c4,#bababa",
  opacity = 0.7,
  direction = "top",
  className,
}: PixelBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const palette = parseColors(colors);
    let animationFrame = 0;
    let startedAt = performance.now();

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const bounds = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(bounds.width * ratio));
      canvas.height = Math.max(1, Math.floor(bounds.height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (now: number) => {
      const { width, height } = canvas.getBoundingClientRect();
      const elapsed = ((now - startedAt) / 1000) * (speed / 10);
      const columns = Math.ceil(width / gap);
      const rows = Math.ceil(height / gap);

      context.clearRect(0, 0, width, height);
      context.globalAlpha = opacity;

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const phase =
            direction === "top" || direction === "bottom"
              ? row
              : column;
          const offset =
            direction === "bottom" || direction === "right"
              ? -elapsed
              : elapsed;
          const colorIndex =
            Math.floor((phase + offset) / 12) % palette.length;
          const normalizedIndex =
            colorIndex < 0 ? colorIndex + palette.length : colorIndex;

          context.fillStyle = palette[normalizedIndex] ?? "#d4d4d4";
          context.fillRect(column * gap, row * gap, Math.max(1, gap - 1), Math.max(1, gap - 1));
        }
      }

      context.globalAlpha = 1;
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [colors, direction, gap, opacity, speed]);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}

"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger, in milliseconds. Motion runs once. */
  delay?: number;
  as?: "div" | "li" | "section";
};

/**
 * Fade and a short rise when the element enters the viewport.
 * Transform and opacity only, so the layout does not shift.
 * prefers-reduced-motion leaves the element as it was painted.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const rect = node.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight * 0.92 && rect.bottom > 40;
    if (alreadyVisible) {
      node.classList.add("is-in");
      return;
    }

    node.classList.add("is-armed");
    const show = () => node.classList.add("is-in");
    const scroller = node.closest(".testimonial-scroller");
    if (scroller) {
      const stripObserver = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            show();
            stripObserver.disconnect();
          }
        },
        { threshold: 0.05 },
      );
      stripObserver.observe(scroller);
      return () => stripObserver.disconnect();
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 4000px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", className)}
      style={style}
    >
      {children}
    </Tag>
  );
}

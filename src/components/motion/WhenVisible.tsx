"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
};

/**
 * Marks a block once it enters the viewport.
 * Content stays visible if motion is reduced or JavaScript never runs.
 * CSS decides what the mark does (stagger, slide, underline).
 */
export function WhenVisible({ children, className, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      node.dataset.visible = "true";
      return;
    }

    const show = () => {
      node.dataset.visible = "true";
    };

    const rect = node.getBoundingClientRect();
    const already = rect.top < window.innerHeight * 0.84 && rect.bottom > 40;
    if (already) {
      show();
      return;
    }

    node.dataset.armed = "true";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref as never} className={cn("when-visible", className)}>
      {children}
    </Tag>
  );
}

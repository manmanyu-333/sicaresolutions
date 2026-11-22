"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /**
   * Fraction of the distance from the viewport centre.
   * Kept small so artwork drifts a few pixels, never the type.
   */
  speed?: number;
};

const MAX_SHIFT = 22;

/**
 * A few pixels of vertical drift on decorative art.
 * Off for reduced motion, coarse pointers, and narrow screens.
 */
export function Parallax({ children, className, speed = 0.06 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const narrow = window.matchMedia("(max-width: 767px)");
    if (reduce.matches || coarse.matches || narrow.matches) return;
    node.style.willChange = "transform";

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const fromCentre = rect.top + rect.height / 2 - window.innerHeight / 2;
      const shift = Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, -fromCentre * speed));
      node.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      node.style.transform = "";
      node.style.willChange = "";
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

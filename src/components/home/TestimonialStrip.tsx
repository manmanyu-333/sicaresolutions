"use client";

import { useRef } from "react";
import Image from "next/image";
import { testimonials } from "@/content/testimonials";
import { cn } from "@/lib/utils";

const blobTones = [
  "bg-paper text-purple",
  "bg-mint text-purple",
  "bg-deep text-cream",
  "bg-lavender text-purple",
];

export function TestimonialStrip() {
  const scroller = useRef<HTMLDivElement>(null);

  function move(direction: number) {
    const node = scroller.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollBy({
      left: direction * Math.min(node.clientWidth * 0.8, 420),
      behavior: reduced ? "auto" : "smooth",
    });
  }

  return (
    <div>
      <div className="bleed-start mb-4 flex justify-end gap-2 pr-8">
        <button
          type="button"
          className="ui-text grid size-11 place-items-center rounded-full bg-purple text-lg text-cream hover:bg-nav"
          onClick={() => move(-1)}
          aria-label="Scroll kind words backward"
        >
          <span aria-hidden>←</span>
        </button>
        <button
          type="button"
          className="ui-text grid size-11 place-items-center rounded-full bg-purple text-lg text-cream hover:bg-nav"
          onClick={() => move(1)}
          aria-label="Scroll kind words forward"
        >
          <span aria-hidden>→</span>
        </button>
      </div>
      <div
        ref={scroller}
        tabIndex={0}
        aria-label="Kind words and messages from families"
        className="testimonial-scroller bleed-start flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pr-8 focus-visible:outline-offset-8"
      >
        {testimonials.map((item, index) =>
          item.type === "quote" ? (
            <figure
              key={item.id}
              className={cn(
                "flex min-h-[16rem] w-[18rem] shrink-0 snap-start flex-col justify-between rounded-tl-[2.5rem] rounded-tr-[4rem] rounded-br-[2.75rem] rounded-bl-[4rem] p-7 shadow-[var(--shadow-soft)] md:w-[22rem]",
                blobTones[index % blobTones.length],
              )}
            >
              <blockquote className="text-[1.05rem] leading-relaxed">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold">
                {item.name}
                <span className="font-normal opacity-80"> · {item.place}</span>
              </figcaption>
            </figure>
          ) : (
            <figure
              key={item.id}
              className="w-[15rem] shrink-0 snap-start rounded-tl-[2rem] rounded-tr-[3.25rem] rounded-br-[2rem] rounded-bl-[3.25rem] bg-paper p-3 shadow-[var(--shadow-soft)] md:w-[17rem]"
            >
              <div className="overflow-hidden rounded-[1.25rem] bg-lavender">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-auto w-full object-contain"
                />
              </div>
              <figcaption className="px-2 py-3 text-sm font-bold text-nav">
                {item.name}
              </figcaption>
            </figure>
          ),
        )}
      </div>
    </div>
  );
}

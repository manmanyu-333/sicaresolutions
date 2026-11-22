"use client";

import type { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  id: string;
  title: string;
  body: ReactNode;
};

export function CareAccordion({
  items,
  className,
}: {
  items: AccordionItem[];
  className?: string;
}) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn("border-y border-purple/15", className)}
    >
      {items.map((item) => (
        <Accordion.Item
          key={item.id}
          value={item.id}
          className="border-b border-purple/15 last:border-b-0"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none">
              <span className="display text-lg text-purple md:text-2xl">
                {item.title}
              </span>
              <span
                aria-hidden
                className="grid size-9 shrink-0 place-items-center rounded-full border border-purple/30 font-sans text-xl leading-none text-purple transition-colors group-data-[state=open]:border-purple group-data-[state=open]:bg-purple group-data-[state=open]:text-cream"
              >
                <span className="group-data-[state=open]:hidden">+</span>
                <span className="hidden group-data-[state=open]:inline">–</span>
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-ink data-[state=closed]:animate-none">
            <div className="max-w-3xl pb-6 pr-2 text-base leading-relaxed md:pr-16">
              {item.body}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

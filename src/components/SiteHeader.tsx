"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { BookChatLink } from "@/components/BookChatLink";
import { SectionLink } from "@/components/SectionLink";
import { nav } from "@/config/site";
import { cn } from "@/lib/utils";

function isHome(pathname: string) {
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return path === "" || path === "/";
}

function NavLinks({
  active,
  onNavigate,
  menu = false,
}: {
  active: string | null;
  onNavigate?: (id: string) => void;
  menu?: boolean;
}) {
  return (
    <>
      {nav.map((item) => {
        const current = active === item.id;
        return (
          <SectionLink
            key={item.id}
            href={item.href}
            sectionId={item.id}
            aria-current={current ? "true" : undefined}
            onNavigate={() => onNavigate?.(item.id)}
            className={cn(
              "ui-text inline-flex items-center whitespace-nowrap rounded-[24px] px-4 text-[16px] uppercase text-white",
              menu ? "min-h-11 w-full" : "h-[37px]",
              current && "bg-[rgba(255,250,240,0.4)] text-nav",
            )}
          >
            {item.label}
          </SectionLink>
        );
      })}
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const onHome = isHome(pathname);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(onHome ? "who-we-are" : null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!onHome) {
      setActive(null);
      return;
    }

    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const visible = new Map<string, number>();
    const pick = () => {
      const next = [...visible.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
      if (next) setActive(next);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        pick();
      },
      {
        rootMargin: "-18% 0px -50% 0px",
        threshold: [0.05, 0.15, 0.35, 0.6],
      },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 pt-6 backdrop-blur-sm md:pt-8">
      <div className="page-wrap flex justify-center">
        <div className="nav-cluster hidden items-center lg:flex">
          <nav
            aria-label="Primary"
            className="nav-reveal flex h-[53px] items-center rounded-full border-b border-[rgba(68,68,29,0.15)] bg-purple"
          >
            <div className="grid aspect-square h-full shrink-0 place-items-center">
              <Logo />
            </div>
            <div className="nav-links-clip">
              <div>
                <div className="nav-links-inner flex items-center gap-4 pr-6">
                  <NavLinks
                    active={active}
                    onNavigate={(id) => {
                      setActive(id);
                      setOpen(false);
                    }}
                  />
                </div>
              </div>
            </div>
          </nav>
          <div className="nav-cta-clip">
            <div>
              <div className="pl-[9px]">
                <BookChatLink size="sm">Book a chat</BookChatLink>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-3 lg:hidden">
          <div className="grid size-11 place-items-center rounded-full bg-purple">
            <Logo />
          </div>
          <div className="flex items-center gap-2">
            <BookChatLink size="sm" className="h-11 px-4 text-[14px]">
              Book a chat
            </BookChatLink>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full bg-purple text-cream"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span aria-hidden className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-cream" />
                <span className="block h-0.5 w-5 bg-cream" />
                <span className="block h-0.5 w-5 bg-cream" />
              </span>
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="page-wrap mt-3 lg:hidden">
          <div className="flex flex-col rounded-3xl bg-purple p-3">
            <NavLinks
              menu
              active={active}
              onNavigate={(id) => {
                setActive(id);
                setOpen(false);
              }}
            />
          </div>
        </nav>
      ) : null}
    </header>
  );
}

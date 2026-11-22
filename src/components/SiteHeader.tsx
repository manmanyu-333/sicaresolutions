"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { BookChatLink } from "@/components/BookChatLink";
import { cn } from "@/lib/utils";

const links = [
  { href: "/our-story", label: "Our story" },
  { href: "/", label: "Who we are" },
  { href: "/approach", label: "Approach" },
  { href: "/resources", label: "Resources" },
] as const;

function normalize(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname || "/";
}

function isCurrent(pathname: string, href: string) {
  const current = normalize(pathname);
  if (href === "/") return current === "/";
  return current === href || current.startsWith(`${href}/`);
}

function NavLinks({
  pathname,
  onNavigate,
  menu = false,
}: {
  pathname: string;
  onNavigate?: () => void;
  menu?: boolean;
}) {
  return (
    <>
      {links.map((item) => {
        const current = isCurrent(pathname, item.href);
        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={current ? "page" : undefined}
            onClick={onNavigate}
            className={cn(
              "ui-text inline-flex items-center whitespace-nowrap rounded-[24px] px-4 text-[16px] uppercase text-white",
              menu ? "min-h-11 w-full" : "h-[37px]",
              current && "bg-[rgba(255,250,240,0.4)] text-nav",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-40 bg-cream/90 pt-6 backdrop-blur-sm md:pt-8">
      <div className="page-wrap flex justify-center">
        <div className="hidden items-center gap-[9px] lg:flex">
          <nav
            aria-label="Primary"
            className="flex items-center gap-10 rounded-full border-b border-[rgba(68,68,29,0.15)] bg-purple py-2 pl-8 pr-6"
          >
            <Logo />
            <div className="flex items-center gap-4">
              <NavLinks pathname={pathname} />
            </div>
          </nav>
          <BookChatLink size="sm">Book a chat</BookChatLink>
        </div>
        <div className="flex w-full items-center justify-between gap-3 lg:hidden">
          <Logo />
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
            <NavLinks menu pathname={pathname} onNavigate={() => setOpen(false)} />
          </div>
        </nav>
      ) : null}
    </header>
  );
}

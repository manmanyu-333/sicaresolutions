"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/config/site";
import { Logo } from "@/components/Logo";
import { BookChatLink } from "@/components/BookChatLink";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  const current =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  return current === href || current.startsWith(`${href}/`);
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
    <header className="sticky top-0 z-40 pt-3 md:pt-5">
      <div className="page-wrap">
      <div className="flex items-center gap-2 rounded-full bg-purple py-1.5 pl-3 pr-1.5 shadow-[var(--shadow-soft)] md:gap-6 md:pl-5 md:pr-2">
        <Logo />
        <nav
          aria-label="Primary"
          className="ml-2 hidden items-center gap-1 md:flex"
        >
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "ui-text rounded-full px-3 py-2 text-sm text-cream/90 hover:bg-white/10 hover:text-cream",
                  active && "bg-nav text-cream",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-1.5">
          <BookChatLink size="sm" className="px-3 sm:px-4">
            Book a chat
          </BookChatLink>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-cream hover:bg-white/10 md:hidden"
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
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="page-wrap mt-2 md:hidden"
        >
        <div className="rounded-3xl bg-purple px-4 py-3 text-cream shadow-[var(--shadow-soft)]">
          <ul className="flex flex-col">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="ui-text block rounded-2xl px-3 py-3 text-lg hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        </nav>
      ) : null}
    </header>
  );
}

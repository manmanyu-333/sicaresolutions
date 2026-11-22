"use client";

import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  href: string;
  sectionId: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  "aria-current"?: "true" | "page" | "location" | undefined;
  "aria-label"?: string;
};

/**
 * Anchor links that still smooth-scroll when the visitor is already on the
 * home page. Next's client router does not always move to a hash on its own.
 */
export function SectionLink({
  href,
  sectionId,
  className,
  children,
  onNavigate,
  ...aria
}: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={(event) => {
        onNavigate?.();
        const path = window.location.pathname.replace(/\/$/, "") || "/";
        if (path !== "/") return;
        event.preventDefault();
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
        if (window.location.hash !== `#${sectionId}`) {
          history.pushState(null, "", `/#${sectionId}`);
          window.dispatchEvent(new HashChangeEvent("hashchange"));
        }
      }}
      {...aria}
    >
      {children}
    </Link>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Interim script wordmark. Swap the inner mark for the exported Si logo SVG
 * (data-asset="si-logo") without changing the link or the nav layout.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center rounded-full px-1 text-cream focus-visible:outline-offset-4",
        className,
      )}
      aria-label="Si Care Solutions, home"
    >
      <span
        data-asset="si-logo"
        className="font-script text-[2.35rem] leading-none tracking-normal"
      >
        Si
      </span>
    </Link>
  );
}

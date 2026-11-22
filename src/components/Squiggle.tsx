import { cn } from "@/lib/utils";

/**
 * Interim hand-drawn underline. Replace the path with the exported
 * Figma squiggle SVG when it arrives (data-asset="underline-squiggle").
 */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      data-asset="underline-squiggle"
      className={cn("squiggle", className)}
      viewBox="0 0 200 18"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 11c14-8 22 7 36-1s22-8 34 2 24 8 36-2 22-6 34 3 24 7 36-3 16-4 18 1"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

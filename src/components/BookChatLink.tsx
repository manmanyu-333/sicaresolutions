"use client";

import { site } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
  };

/**
 * Every “Book a chat” / “Let’s chat” control uses this component,
 * which reads site.bookingHref. Until that value is a real URL it is "#".
 */
export function BookChatLink({
  children,
  className,
  variant = "lime",
  size = "lg",
  ...props
}: Props) {
  const pending = site.bookingHref === "#";

  return (
    <a
      href={site.bookingHref}
      className={cn(buttonVariants({ variant, size }), className)}
      data-todo="booking-link"
      onClick={(event) => {
        if (pending) event.preventDefault();
      }}
      {...props}
    >
      {children}
    </a>
  );
}

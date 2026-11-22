import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "ui-text inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        lime: "bg-lime text-lime-ink hover:bg-[#7eb456]",
        purple: "bg-purple text-cream hover:bg-nav",
        ghost:
          "bg-transparent text-purple ring-1 ring-inset ring-purple hover:bg-lavender",
        cream: "bg-cream text-purple hover:bg-white",
      },
      size: {
        default: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
        sm: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "lime",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "ui-text inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        lime: "border-b border-[rgba(68,68,29,0.15)] bg-lime text-white hover:bg-[#7eb456]",
        purple: "bg-purple text-cream hover:bg-nav",
        ghost:
          "border-2 border-purple bg-transparent text-purple hover:bg-lavender",
        cream: "bg-cream text-purple hover:bg-white",
        blob: "h-auto border-0 bg-transparent p-0 text-white hover:bg-transparent",
      },
      size: {
        default: "h-[53px] px-8 text-[18px]",
        lg: "px-8 py-4 text-[18px]",
        sm: "h-[53px] px-8 text-[18px]",
        none: "h-auto p-0",
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

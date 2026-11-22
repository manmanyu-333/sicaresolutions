import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center max-lg:min-h-11 max-lg:min-w-11 max-lg:justify-center",
        className,
      )}
      aria-label="Si Care Solutions, home"
    >
      <Image
        src="/images/figma/si-logo.svg"
        alt=""
        width={40}
        height={35}
        className="h-[34px] w-[40px]"
        priority
      />
    </Link>
  );
}

import Image from "next/image";
import { SectionLink } from "@/components/SectionLink";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <SectionLink
      href="/#who-we-are"
      sectionId="who-we-are"
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
    </SectionLink>
  );
}

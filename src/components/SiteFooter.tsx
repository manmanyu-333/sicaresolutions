import Image from "next/image";
import Link from "next/link";
import { SectionLink } from "@/components/SectionLink";
import { footerNav, site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-purple text-cream">
      <div className="footer-wrap flex flex-col gap-10 pb-[60px] pt-[72px] md:flex-row md:items-start md:justify-between">
        <div className="max-w-[460px]">
          <Image
            src="/images/figma/si-logo.svg"
            alt="Si Care Solutions"
            width={40}
            height={35}
            className="h-[34px] w-[40px]"
          />
          <div className="mt-6 space-y-0 text-[18px] leading-[1.75] text-white/65 sm:text-[20px] [overflow-wrap:anywhere]">
            <p>ABN: {site.abn ?? site.abnPlaceholder}</p>
            <p>
              <a className="inline-flex min-h-11 items-center hover:text-cream md:min-h-0" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            {site.phones.map((phone) => (
              <p key={phone.tel}>
                <a className="inline-flex min-h-11 items-center hover:text-cream md:min-h-0" href={`tel:${phone.tel}`}>
                  {phone.display}
                </a>
              </p>
            ))}
            <p>{site.insuredLine}</p>
            <p>{site.serviceArea}</p>
          </div>
        </div>
        <nav aria-label="Footer" className="md:text-right">
          <ul className="flex flex-col gap-[14px] text-[20px] leading-none text-cream">
            {footerNav.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("/#") ? (
                  <SectionLink
                    href={item.href}
                    sectionId={item.href.slice(2)}
                    className="inline-flex min-h-11 items-center hover:underline md:min-h-0"
                  >
                    {item.label}
                  </SectionLink>
                ) : (
                  <Link className="inline-flex min-h-11 items-center hover:underline md:min-h-0" href={item.href}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/12">
        <p className="footer-wrap py-5 text-center text-[20px] leading-[1.5] text-white/40">
          © {new Date().getFullYear()} Si Care Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

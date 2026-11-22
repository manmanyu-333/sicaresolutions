import Link from "next/link";
import { nav, site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-purple text-cream">
      <div className="footer-wrap grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:py-16">
        <div>
          <p className="font-script text-6xl leading-none" data-asset="si-logo">
            Si
          </p>
          <p className="mt-4 max-w-sm text-cream/90">
            Independent care management for Support at Home, in {site.location}.
            We coordinate the care. We are not an approved provider.
          </p>
          <p className="mt-4 max-w-sm text-cream">
            {site.insuredLine}
          </p>
          <p className="mt-2 max-w-sm text-cream">
            {site.serviceArea}
          </p>
        </div>
        <div>
          <p className="ui-text text-sm uppercase text-lime">
            Contact
          </p>
          <ul className="mt-4 space-y-2">
            {site.phones.map((phone) => (
              <li key={phone.tel}>
                <a className="hover:underline" href={`tel:${phone.tel}`}>
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a className="hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <span className="text-cream/85">
                ABN:{" "}
                {site.abn ?? (
                  <span className="rounded-full bg-white/15 px-2 py-0.5 text-sm">
                    {site.abnPlaceholder}
                  </span>
                )}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <p className="ui-text text-sm uppercase text-lime">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:underline" href="/privacy">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/terms">
                Terms and conditions
              </Link>
            </li>
            <li>
              <a
                className="hover:underline"
                href={site.facebook}
                rel="noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="footer-wrap py-5 text-sm text-cream/80">
          © {new Date().getFullYear()} {site.name}. Melbourne.
        </p>
      </div>
    </footer>
  );
}

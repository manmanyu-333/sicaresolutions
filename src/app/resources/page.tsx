import type { Metadata } from "next";
import Link from "next/link";
import { DraftNotice } from "@/components/DraftNotice";
import { CareAccordion } from "@/components/ui/accordion";
import { faqs } from "@/content/faq";
import { resources } from "@/content/resources";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Resources and FAQ",
  description:
    "Notes on Support at Home, changing providers, working with Si Care, and answers to the questions families ask first.",
};

export default function ResourcesPage() {
  return (
    <article>
      <header className="section page-wrap">
        <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
          Resources
        </p>
        <h1 className="display mt-3 text-[clamp(2.6rem,6vw,4.6rem)] text-purple">
          Helpful resources
        </h1>
        <p className="mt-6 text-lg">
          These notes are here so a family can read before they call. Two of
          them, and the questions below, are drafts. Where a government rule is
          involved, My Aged Care and your fee-advice letter are the authority.
          We are not an approved provider, and we do not hold the funds.
        </p>
        </div>
      </header>

      <div className="page-wrap pb-16">
        <div className="max-w-3xl">
        <ul className="grid gap-4">
          {resources.map((resource) => (
            <li key={resource.slug}>
              <Link
                href={`/resources/${resource.slug}`}
                className="block rounded-[1.5rem] bg-lavender px-6 py-5 hover:bg-mint"
              >
                <span className="display block text-2xl text-purple">
                  {resource.title}
                </span>
                <span className="mt-2 block text-ink">{resource.summary}</span>
                {resource.draft ? (
                  <span className="mt-3 inline-flex rounded-full bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple">
                    Draft
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </div>

      <section
        id="faq"
        className="scroll-mt-28 bg-lavender"
        aria-labelledby="faq-heading"
      >
        <div className="page-wrap py-16 md:py-20">
          <div className="max-w-3xl">
          <h2
            id="faq-heading"
            className="display text-[clamp(2rem,4vw,3.2rem)] text-purple"
          >
            Questions we hear
          </h2>
          <div className="mt-6">
            <DraftNotice />
          </div>
          <div className="mt-8">
            <CareAccordion
              items={faqs.map((faq) => ({
                id: faq.id,
                title: faq.question,
                body: <p>{faq.answer}</p>,
              }))}
            />
          </div>
          <p className="mt-8 text-lg">
            If yours is not here, call{" "}
            <a className="font-semibold text-purple underline" href={`tel:${site.phones[0].tel}`}>
              {site.phones[0].display}
            </a>{" "}
            or email{" "}
            <a className="font-semibold text-purple underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
          </div>
        </div>
      </section>
    </article>
  );
}

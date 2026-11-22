import type { Metadata } from "next";
import { DraftNotice } from "@/components/DraftNotice";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description:
    "Placeholder terms for the Si Care Solutions website. Needs legal review before publication.",
};

export default function TermsPage() {
  return (
    <article className="section page-wrap">
      <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
        Legal
      </p>
      <h1 className="display mt-3 text-[clamp(2.4rem,5vw,4rem)] text-purple">
        Terms and conditions
      </h1>
      <div className="mt-6">
        <DraftNotice kind="legal" />
      </div>
      <div className="prose-care mt-8 text-lg">
        <p>
          These placeholder terms cover use of the {site.name} website. They
          are written in plain English for an Australian small business. They
          are not the contract for care management, and they are not legal
          advice.
        </p>
        <p>
          ABN: {site.abn ?? site.abnPlaceholder}. Questions about this page:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>Using the site</h2>
        <p>
          You may read these pages for your own information. Please do not copy
          the site design or wording for another business. The content is
          general. It is not an offer of services until we have spoken and, if
          we are going to work together, agreed in writing.
        </p>

        <h2>What we are, and what we are not</h2>
        <p>
          {site.name} provides independent care management. We are not an
          approved Support at Home provider, and we do not hold government
          package funds. Nothing on this website is medical advice, financial
          advice, or a decision of My Aged Care or Services Australia.
        </p>
        <p>
          Program rules, contribution rates and assessment pathways change.
          Check the current information with My Aged Care, Services Australia,
          or the approved provider who holds the funds.
        </p>

        <h2>Chats and bookings</h2>
        <p>
          The “Book a chat” buttons on this preview are not connected to a
          booking tool yet. A conversation is an invitation to talk. It does
          not create a care-management agreement, and it does not oblige either
          of us to proceed.
        </p>

        <h2>Liability</h2>
        <p>
          We take care with what we publish. We do not promise that the site
          is complete or free of error, or that it will suit your particular
          situation. To the extent the Australian Consumer Law allows any
          limitation, we are not liable for loss that comes from relying on
          the website instead of a direct conversation or an official source.
          Consumer guarantees that cannot legally be excluded still apply.
        </p>

        <h2>Other websites</h2>
        <p>
          Links to My Aged Care, the Department of Health, or our Facebook page
          are there to help. Those sites have their own terms. We are not
          responsible for them.
        </p>

        <h2>Law</h2>
        <p>
          These placeholder terms are meant to be read under the laws of
          Victoria, Australia. A lawyer should confirm that, along with
          everything else on this page, before the site is used as the public
          website.
        </p>
      </div>
      </div>
    </article>
  );
}

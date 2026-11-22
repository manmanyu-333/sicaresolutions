import type { Metadata } from "next";
import { DraftNotice } from "@/components/DraftNotice";
import { site } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Placeholder privacy policy for Si Care Solutions, an Australian small business. Needs legal review.",
};

export default function PrivacyPage() {
  return (
    <Reveal>
    <article className="section page-wrap">
      <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
        Legal
      </p>
      <h1 className="display mt-3 text-[clamp(2.4rem,5vw,4rem)] text-purple">
        Privacy policy
      </h1>
      <div className="mt-6">
        <DraftNotice kind="legal" />
      </div>
      <div className="prose-care mt-8 text-lg">
        <p>
          {site.name} (“we”, “us”) is a care-management practice based in{" "}
          {site.location}, Australia. This placeholder describes, in plain
          English, how a small business like ours usually handles personal
          information under the Australian Privacy Principles. It is not the
          final policy.
        </p>
        <p>
          ABN: {site.abn ?? site.abnPlaceholder}. Contact:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>,{" "}
          {site.phones.map((phone) => phone.display).join(" or ")}.
        </p>

        <h2>What we collect</h2>
        <p>If you call, email, or later use a booking form, we may hold:</p>
        <ul className="list-disc">
          <li>your name, phone number and email address</li>
          <li>the suburb you mention, and who you are calling about</li>
          <li>
            the care situation you choose to tell us, which can include health
            information
          </li>
          <li>
            notes of our conversations, so we do not ask you to repeat yourself
          </li>
        </ul>
        <p>
          Health information is sensitive information. We only want what we
          need to coordinate care, and only when you or your authorised
          representative give it to us for that purpose.
        </p>

        <h2>Why we hold it</h2>
        <ul className="list-disc">
          <li>to answer you and arrange a chat</li>
          <li>to coordinate services you have asked us to arrange</li>
          <li>to keep a record of what was agreed</li>
          <li>to meet record-keeping duties that apply to the work</li>
        </ul>
        <p>We do not sell personal information. We do not use it for a hard sell.</p>

        <h2>Who we share it with</h2>
        <p>
          When you ask us to arrange care, we share what is needed with the
          approved provider who holds the funds, and with the members of
          Carolyn’s curated team who will actually do the work. We may also
          use ordinary business tools (for example email, a phone system, or a
          future booking service). Those providers should only use the
          information to deliver that service to us.
        </p>
        <p>
          Some of those tools may store data overseas. The final policy needs
          to name them. This placeholder does not.
        </p>

        <h2>Access, correction and complaints</h2>
        <p>
          You can ask us what we hold about you, and ask us to correct it, by
          emailing {site.email}. If you are unhappy with how we handle
          information, write to us first. You can also contact the Office of
          the Australian Information Commissioner (oaic.gov.au).
        </p>

        <h2>Keeping and deleting</h2>
        <p>
          We keep information for as long as we are working with you, and for
          as long as we need it afterwards to meet legal and care-record
          duties. The retention period must be confirmed before this page is
          published.
        </p>

        <h2>This website</h2>
        <p>
          This preview does not use advertising trackers and does not ask you
          to create an account. If a booking tool or analytics service is added
          later, this policy has to name it and say what it collects.
        </p>
      </div>
      </div>
    </article>
    </Reveal>
  );
}

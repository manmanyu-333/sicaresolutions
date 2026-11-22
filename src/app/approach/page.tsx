import type { Metadata } from "next";
import Link from "next/link";
import { BookChatLink } from "@/components/BookChatLink";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Listen, Link and Look after: how Si Care Solutions coordinates Support at Home without being an approved provider.",
};

const pillars = [
  {
    id: "listen",
    title: "Listen",
    lead: "The first work is hearing the person properly.",
    points: [
      "We ask about the week as it is lived, not only the tasks on an assessment.",
      "Family can be in the conversation. So can the things that do not look like “care” on a form: food, faith, language, the garden, a dog, a quiet morning.",
      "You decide which services suit. We do not arrive with a package already filled in.",
    ],
  },
  {
    id: "link",
    title: "Link",
    lead: "I match the right carers and services to you, from a team I already know. I do not ask you to find a carer.",
    points: [
      "She introduces people from a team she already knows: support workers, nurses, allied health, cleaners, gardeners.",
      "This is not a directory, and it is not homework. Families are not left to interview strangers.",
      "If someone already has the person’s trust, say so. Keeping a good worker is better than swapping for the sake of it.",
      "The approved provider still holds the funds and the service agreement. We coordinate who comes, and why.",
    ],
  },
  {
    id: "look-after",
    title: "Look after",
    lead: "The plan is a living thing. Someone has to stay with it.",
    points: [
      "When health, hospital or the family situation changes, we adjust. You should not have to start from zero.",
      "We help you read the budget: the cost of services, what is in the individual plan, and how the package is being spent.",
      "We will suggest something that could make home safer or more comfortable. We will also leave it if you do not want it.",
      "Advocacy, here, means speaking up for the life the person asked for. It is not a pitch for more hours.",
    ],
  },
];

export default function ApproachPage() {
  return (
    <article>
      <header className="section page-wrap">
        <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
          Approach
        </p>
        <h1 className="display mt-3 text-[clamp(2.6rem,6vw,4.6rem)] text-purple">
          Beyond their immediate needs
        </h1>
        <p className="mt-6 text-lg">
          Everybody’s situation is different, so the first job is to understand
          yours. If there is a Support at Home budget, or a home care package
          that has moved into the new program, we build the plan with you and
          then coordinate it.
        </p>
        <p className="mt-4 text-lg">
          Three words cover the work.           The middle one is easy to misread, so it
          is written here the way Carolyn means it.
        </p>
        </div>
      </header>

      <div className="page-wrap space-y-16 pb-20">
        <div className="max-w-3xl space-y-16">
        {pillars.map((pillar) => (
          <section key={pillar.id} id={pillar.id} className="scroll-mt-28">
            <h2 className="display text-4xl text-purple">{pillar.title}</h2>
            <p className="mt-4 text-lg font-bold text-nav">
              {pillar.lead}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-lg">
              {pillar.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ))}

        <section className="rounded-[2rem] bg-lavender px-6 py-8 md:px-10">
          <h2 className="display text-3xl text-purple">We say yes to choice</h2>
          <p className="mt-4 text-lg">
            Sì means yes. In practice that looks like choice about who provides
            a service and when they come, a plan based on assessed need, and
            relationships that stay respectful in both directions. It also looks
            like information you can actually follow.
          </p>
          <p className="mt-4 text-lg">
            We have spent the time to build a curated team, and a wider network
            of trusted services, so the support can flex around a person. That
            includes culture. It is not an add-on at the end of a roster.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <BookChatLink>Book a chat</BookChatLink>
            <Link
              href="/our-story"
              className="inline-flex h-12 items-center font-semibold text-purple underline decoration-2 underline-offset-4"
            >
              The story behind the work
            </Link>
          </div>
        </section>
        </div>
      </div>
    </article>
  );
}

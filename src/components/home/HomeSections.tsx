import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { resources } from "@/content/resources";
import { BookChatLink } from "@/components/BookChatLink";
import { Squiggle } from "@/components/Squiggle";
import { CareAccordion } from "@/components/ui/accordion";
import { TestimonialStrip } from "@/components/home/TestimonialStrip";

const pillars = [
  {
    title: "Listen",
    body: "We hear the person, and the family beside them. Language, food, and the part of the day they want left alone.",
  },
  {
    title: "Link",
    body: "Carolyn matches you with her curated team. She does not send you off to find a carer.",
  },
  {
    title: "Look after",
    body: "We stay when things change, and help you read the budget. An approved provider holds the funds.",
  },
];

export function HomeSections() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-rose/50 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-4rem] top-24 size-80 rounded-full bg-lavender blur-2xl"
        />
        <div className="section page-wrap relative grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
              Melbourne · Independent care management
            </p>
            <h1 className="display mt-4 text-[clamp(2.7rem,6vw,5.1rem)] text-purple">
              We begin
              <br />
              with{" "}
              <span className="inline-block">
                love
                <Squiggle />
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink">
              Si Care Solutions helps you shape Support at Home around the
              person, not the paperwork. We listen, then we link the right
              people, and we look after the plan. We coordinate care. We are
              not an approved provider.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <BookChatLink>Book a chat</BookChatLink>
              <a
                href={`tel:${site.phones[0].tel}`}
                className="ui-text inline-flex h-12 items-center rounded-full px-5 text-purple ring-1 ring-inset ring-purple hover:bg-lavender"
              >
                Or call {site.phones[0].display}
              </a>
            </div>
          </div>
          <figure className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute -left-6 -top-6 size-28 rounded-full bg-lime/70"
            />
            <div
              aria-hidden
              className="absolute -bottom-8 -right-4 size-36 rounded-full bg-lilac"
            />
            <div className="blob-mask relative aspect-[4/5] overflow-hidden shadow-[var(--shadow-soft)]">
              <Image
                src="/images/placeholders/hero-portrait.svg"
                alt="Stand-in image of a sunlit kitchen table. Replace with the final hero photograph."
                fill
                priority
                sizes="(min-width: 768px) 28rem, 90vw"
                className="object-cover"
                data-placeholder="hero-portrait"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="bg-lavender" aria-labelledby="margherita-heading">
        <div className="section page-wrap grid items-center gap-12 md:grid-cols-2">
          <figure className="relative order-2 md:order-1">
            <div className="blob-mask relative aspect-[4/3] overflow-hidden shadow-[var(--shadow-soft)]">
              <Image
                src="/images/margherita-kitchen.jpg"
                alt="Margherita, an older woman in a green shirt and apron, smiling as she cooks peppers in a brick kitchen."
                fill
                sizes="(min-width: 768px) 36rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 text-sm text-muted">
              Margherita in her second kitchen, where the real cooking happens.
            </figcaption>
          </figure>
          <div className="order-1 md:order-2">
            <h2
              id="margherita-heading"
              className="display text-[clamp(2.2rem,4.5vw,3.6rem)] text-purple"
            >
              Everybody has a Margherita
            </h2>
            <div className="mt-6 space-y-4 text-lg">
              <p>
                Margherita is Carolyn’s mother. She was diagnosed with dementia
                at 65. She is also every parent who wants to stay in their own
                kitchen.
              </p>
              <p>
                Carolyn became the unofficial carer and advocate, while working,
                raising three children, and trying to keep a life of her own.
                The aged care system was hard to read. Her parents’ Italian, and
                their limited English, made it harder still. Needs went unmet
                because they could not easily say what they wanted.
              </p>
              <p>
                She wanted them to have choices. She wanted them to feel heard.
                Si Care exists so other families do not have to do that alone.
              </p>
            </div>
            <Link
              href="/our-story"
              className="mt-6 inline-flex font-semibold text-purple underline decoration-2 underline-offset-4"
            >
              Read our story
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="beyond-heading">
        <div className="page-wrap">
          <div className="max-w-3xl">
            <h2
              id="beyond-heading"
              className="display text-[clamp(2.2rem,4.5vw,3.6rem)] text-purple"
            >
              Beyond their immediate needs
            </h2>
            <p className="mt-5 text-lg">
              A clean house is not the whole of a life. We stay with what
              matters after the roster is written: dignity, culture, and a week
              that still feels like theirs.
            </p>
          </div>
          <div className="relative mt-10 overflow-hidden rounded-[2rem]">
            <Image
              src="/images/placeholders/approach-room.svg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              data-placeholder="approach-room"
            />
            <div className="absolute inset-0 bg-overlay/20" aria-hidden />
            <ul className="relative grid gap-2 px-2 py-8 sm:px-6 md:grid-cols-3 md:py-12">
              {pillars.map((pillar) => (
                <li
                  key={pillar.title}
                  className="approach-card mx-auto flex min-h-[22rem] w-full max-w-[24rem] flex-col items-center justify-center px-16 py-16 text-center"
                >
                  <h3 className="display text-2xl text-purple">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-purple md:text-[0.95rem]">
                    {pillar.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6">
            <Link
              href="/approach"
              className="font-semibold text-purple underline decoration-2 underline-offset-4"
            >
              More on how we work
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-lavender" aria-labelledby="words-heading">
        <div className="page-wrap pt-[var(--section-y)] md:pt-[var(--section-y-lg)]">
          <h2
            id="words-heading"
            className="display max-w-3xl text-[clamp(2.2rem,4.5vw,3.6rem)] text-purple"
          >
            Kind words and happy families
          </h2>
          <p className="mt-4 max-w-2xl text-lg">
            Notes from families, kept in their own words. Scroll along, or use
            the arrows.
          </p>
        </div>
        <div className="mt-8 pb-[var(--section-y)] md:pb-[var(--section-y-lg)]">
          <TestimonialStrip />
        </div>
      </section>

      <section className="section" aria-labelledby="resources-heading">
        <div className="page-wrap">
          <h2
            id="resources-heading"
            className="display text-[clamp(2.2rem,4.5vw,3.6rem)] text-purple"
          >
            Helpful resources
          </h2>
          <p className="mt-4 max-w-2xl text-lg">
            Short answers to the questions families ask before they call. A few
            of these are still drafts.
          </p>
          <div className="mt-8">
            <CareAccordion
              items={resources.map((resource) => ({
                id: resource.slug,
                title: resource.title,
                body: (
                  <div className="space-y-3">
                    {resource.draft ? (
                      <p className="text-sm font-semibold uppercase tracking-wide text-purple">
                        Draft, pending Carolyn’s review
                      </p>
                    ) : null}
                    <p>{resource.summary}</p>
                    <Link
                      href={`/resources/${resource.slug}`}
                      className="inline-flex font-semibold text-purple underline decoration-2 underline-offset-4"
                    >
                      Read this note
                    </Link>
                  </div>
                ),
              }))}
            />
          </div>
        </div>
      </section>

      <section className="pb-[var(--section-y)] md:pb-[var(--section-y-lg)]" aria-labelledby="talk-heading">
        <div className="page-wrap">
        <div
          className="relative overflow-hidden bg-deep px-8 py-16 text-cream md:px-16 md:py-20"
          style={{
            borderRadius: "4.5rem 6rem 5rem 7rem",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-16 size-56 rounded-full bg-rose/30 blur-2xl"
          />
          <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2
                id="talk-heading"
                className="display text-[clamp(2.3rem,5vw,4.2rem)]"
              >
                Let’s talk about{" "}
                <span className="inline-block text-lime">
                  your Margherita
                  <Squiggle className="text-rose" />
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-lg text-cream/90">
                A phone call is enough. Tell us a little about them, and we
                will tell you plainly whether we can help. No pitch. No
                pressure.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BookChatLink>Let’s chat</BookChatLink>
                <a
                  href={`tel:${site.phones[1].tel}`}
                  className="ui-text inline-flex h-12 items-center rounded-full px-5 text-cream ring-1 ring-inset ring-cream hover:bg-white/10"
                >
                  {site.phones[1].display}
                </a>
              </div>
            </div>
            <div className="blob-mask relative mx-auto aspect-[5/4] w-full max-w-sm overflow-hidden">
              <Image
                src="/images/placeholders/cta-window.svg"
                alt=""
                fill
                sizes="20rem"
                className="object-cover"
                data-placeholder="cta-window"
              />
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

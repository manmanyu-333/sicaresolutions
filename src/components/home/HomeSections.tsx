/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import type { CSSProperties } from "react";
import { BookChatLink } from "@/components/BookChatLink";
import { buttonVariants } from "@/components/ui/button";
import { ResourceAccordion } from "@/components/home/ResourceAccordion";
import { TestimonialStrip } from "@/components/home/TestimonialStrip";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { WhenVisible } from "@/components/motion/WhenVisible";
import { cn } from "@/lib/utils";

const approachCards = [
  {
    title: "Listen",
    body: "I get to know you and your loved one. I explain your options in plain language so you can decide what feels right.",
  },
  {
    title: "Link",
    body: "I match the right carers and services to you based on your needs, preferences and personality.",
  },
  {
    title: "Look after",
    body: "I help coordinate care as needs change. I stay involved, check what’s working and help address what isn’t.",
  },
];

const typedLead = "for the people we ";
const typedLove = "love";

function Typed({ text, start }: { text: string; start: number }) {
  return (
    <>
      {Array.from(text).map((char, index) => (
        <span
          key={`${start}-${index}`}
          className="type-char"
          style={{ "--i": start + index } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </>
  );
}

export function HomeSections() {
  return (
    <>
      <section id="who-we-are" className="scroll-mt-28 bg-cream pb-16 pt-[52px] md:pb-[120px] md:pt-[83px]">
        <div className="page-wrap grid items-center gap-10 min-[1200px]:grid-cols-[minmax(0,647px)_minmax(280px,513px)] min-[1200px]:justify-between min-[1200px]:gap-8">
          <div className="max-w-[647px]">
            <h1 className="hero-title display text-purple">
              <span className="block">Independent</span>
              <span className="block">Care Management</span>
              <span className="type-line block whitespace-nowrap">
                <Typed text={typedLead} start={0} />
                <span className="relative inline-block">
                  <Typed text={typedLove} start={typedLead.length} />
                  <span className="pointer-events-none absolute -bottom-1 left-0 inline-block w-full -rotate-[2deg]">
                    <Image
                      src="/images/figma/hero-underline-love.svg"
                      alt=""
                      width={141}
                      height={10}
                      className="hero-underline block h-auto w-full"
                    />
                  </span>
                </span>
              </span>
            </h1>
            <div className="hero-fade mt-4 max-w-[640px] space-y-4 text-[20px] leading-[1.7] text-purple">
              <p>
                When someone you love needs more help at home, it can be hard to
                know where to start.
              </p>
              <p>
                We help families understand their choices, find the right support
                and make care feel personal.
              </p>
            </div>
            <div className="hero-fade-late mt-8 flex flex-wrap gap-4">
              <BookChatLink>Book a chat</BookChatLink>
              <a
                href="#no-home-care-package"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "max-w-full whitespace-normal text-center max-sm:px-5 max-sm:text-[16px]",
                )}
              >
                I don’t have a home package
              </a>
            </div>
          </div>
          <div className="arrive-on-load art relative mx-auto aspect-[513/517] w-full max-w-[420px] lg:max-w-[513px]">
            <Parallax speed={0.07} className="relative h-full w-full">
              <Image
                src="/images/figma/hero-photo-collage@2x.png"
                alt="Collage of families and carers: a daughter with her father, and a carer with an older woman at home."
                fill
                priority
                sizes="(min-width: 1024px) 513px, 90vw"
                className="object-contain"
              />
              <Image
                src="/images/figma/hero-photo-collage@2x.png"
                alt=""
                fill
                aria-hidden
                sizes="(min-width: 1024px) 513px, 90vw"
                className="hero-shape-shift art-shape pointer-events-none object-contain"
              />
            </Parallax>
          </div>
        </div>
      </section>

      <section id="our-story" className="scroll-mt-28 bg-lavender px-0 pt-24 pb-28 md:pt-36 md:pb-36">
        <div className="page-wrap">
          <Reveal>
            <h2 className="display text-center text-[clamp(2rem,4vw,48px)] text-purple">
              Everybody has a Margherita.
            </h2>
          </Reveal>
          <div className="mt-10 grid items-center gap-10 lg:mt-12 lg:grid-cols-[minmax(0,552px)_minmax(0,1fr)] lg:gap-[60px]">
            <div className="margherita-frame art relative mx-auto w-full max-w-[620px]">
              <div className="relative ml-[22%] w-[78%]">
                <Image
                  src="/images/figma/photo-margherita.png"
                  alt="Margherita, smiling in her kitchen as she cooks."
                  width={537}
                  height={517}
                  className="h-auto w-full"
                />
              </div>
              <p className="margherita-caption absolute left-[1%] top-[1%] z-10 w-[32%] text-purple">
                Margherita creating magic in her kitchen
              </p>
              <span className="pointer-events-none absolute left-0 top-[28%] z-10 w-[27%] origin-[92%_30%] -rotate-[18deg]">
                <img
                  src="/images/figma/squiggle-kitchen.svg"
                  alt=""
                  width={114}
                  height={32}
                  className="art-shape h-auto w-full"
                />
              </span>
            </div>
            <Reveal delay={160} className="space-y-4 text-[20px] leading-[1.7] text-purple">
              <p>
                My beautiful mother Margherita, was diagnosed with dementia at
                65. Nothing can prepare you for this news or the arduous road
                ahead.
              </p>
              <p>
                I became the person making calls, asking questions and speaking
                up for my parents. I was also working and raising three young
                children.
              </p>
              <p>
                I learned how hard it can be to find help that truly fits
                someone’s life - especially in an overly complicated system that
                wasn’t designed for them.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <p className="margherita-close display mx-auto max-w-[920px] text-center text-[clamp(1.5rem,2.4vw,32px)] text-purple">
              I started Si Care Solutions because I’ve been there and want to help
              your family through it.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="approach" className="relative scroll-mt-28 overflow-hidden bg-overlay px-5 py-16 text-white md:p-[100px] xl:p-[160px]">
        <Parallax speed={0.12} className="pointer-events-none absolute -inset-10">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url(/images/figma/approach-background.png)" }}
          />
        </Parallax>
        <div className="relative mx-auto flex max-w-[1192px] flex-col items-center gap-10 md:gap-[60px]">
          <Reveal>
            <h2 className="display text-center text-[clamp(2rem,4vw,48px)]">
              Beyond their immediate needs
            </h2>
          </Reveal>
          <Reveal delay={80} className="max-w-[1192px] space-y-4 text-center text-[clamp(1.125rem,2vw,24px)] leading-[1.7]">
            <p>
              I want to know the person. What do they enjoy? What matters to
              them? Who would they feel comfortable welcoming into their home?
            </p>
            <p>
              For some families, speaking their native language makes all the
              difference. For others, it’s finding someone who understands a
              daily routine, a family tradition or a strong wish to stay
              independent.
            </p>
            <p>
              I listen first, then help build care around the person you know
              and love.
            </p>
          </Reveal>
          <WhenVisible
            as="ul"
            className="stagger-list flex w-full max-w-full list-none flex-wrap items-center justify-center gap-6 xl:gap-12"
          >
            {approachCards.map((card, index) => (
              <li
                key={card.title}
                className="stagger-item shrink-0"
                style={{ "--i": index } as CSSProperties}
              >
                <div className="stagger-rise relative h-[15rem] w-[15rem] max-w-[78vw] shrink-0">
                  <img
                    src="/images/figma/blob-card-approach.svg"
                    alt=""
                    className="absolute inset-0 h-full w-full"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-purple">
                    <p className="font-display text-[22px] leading-[1.1] sm:text-[25px]">
                      {card.title}
                    </p>
                    <p className="mt-2 text-[12.5px] leading-[1.45] sm:text-[13px]">
                      {card.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
            <li className="stagger-item list-none" style={{ "--i": approachCards.length } as CSSProperties}>
              <div className="wiggle-target">
                <div className="stagger-rise">
                  <BookChatLink
                    variant="blob"
                    size="none"
                    className="book-blob relative grid aspect-square w-[15rem] max-w-[72vw] shrink-0 place-items-center"
                    aria-label="Book a chat"
                  >
                    <span
                      aria-hidden
                      className="book-blob-shape absolute inset-[7%] rounded-full bg-lime"
                    />
                    <span className="relative z-10 w-[62%] text-center font-display text-[clamp(1.25rem,3.4vw,1.7rem)] leading-[1.05] tracking-normal text-white">
                      Book a
                      <br />
                      chat
                    </span>
                  </BookChatLink>
                </div>
              </div>
            </li>
          </WhenVisible>
        </div>
      </section>

      <section className="overflow-hidden bg-lavender py-[60px]" aria-labelledby="kind-words">
        <Reveal className="page-wrap">
          <h2 id="kind-words" className="display text-center text-[clamp(2rem,4vw,48px)] text-purple">
            Kind words and happy families
          </h2>
        </Reveal>
        <div className="mt-[83px]">
          <TestimonialStrip />
        </div>
      </section>

      <section id="resources" className="scroll-mt-28 bg-cream py-16 md:py-20">
        <div className="page-wrap">
          <Reveal>
            <h2 className="display text-center text-[clamp(2rem,4vw,48px)] text-purple">
              Helpful resources
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="mx-auto mt-4 max-w-[760px] text-center text-[20px] leading-[1.7] text-purple">
              Wherever you are in the process, we can start with a conversation.
              You don’t need to have it all figured out before you call.
            </p>
          </Reveal>
          <div id="faq" className="scroll-mt-28 mt-10">
            <ResourceAccordion />
          </div>
        </div>
      </section>

      <section id="lets-talk" className="bg-lavender py-16 md:py-[120px]">
        <WhenVisible className="play-slide play-draw page-wrap grid items-center gap-10 lg:grid-cols-[535px_minmax(0,1fr)] lg:gap-10">
          <div className="art relative mx-auto aspect-[535/471] w-full max-w-[535px]">
            <div className="slide-piece absolute right-0 top-0 h-full w-[53%]" style={{ "--d": "0.05s" } as CSSProperties}>
              <Parallax speed={0.05} className="h-full w-full">
                <div className="h-full w-full origin-center rotate-180 -scale-y-100">
                  <img
                    src="/images/figma/blob-contact-shape-1.svg"
                    alt=""
                    className="art-shape h-full w-full"
                  />
                </div>
              </Parallax>
            </div>
            <div className="slide-piece absolute left-[2%] top-0 z-10 w-[80%]" style={{ "--d": "0.16s" } as CSSProperties}>
              <Parallax speed={0.09} className="w-full">
                <img
                  src="/images/figma/photo-contact-care.png"
                  alt="A carer rests a hand on the shoulder of a smiling older man."
                  className="h-auto w-full"
                />
              </Parallax>
            </div>
            <div className="slide-piece absolute bottom-0 left-0 w-[72%]" style={{ "--d": "0.28s" } as CSSProperties}>
              <Parallax speed={0.04} className="w-full">
                <div className="-rotate-[6deg]">
                  <img
                    src="/images/figma/blob-contact-shape-2.svg"
                    alt=""
                    className="art-shape w-full"
                  />
                </div>
              </Parallax>
            </div>
          </div>
          <div>
            <h2 className="display text-[clamp(2rem,4vw,48px)] text-purple">
              Let’s talk about
              <br />
              <span className="relative inline-block">
                your Margherita
                <Image
                  src="/images/figma/underline-margherita.svg"
                  alt=""
                  width={476}
                  height={18}
                  className="draw-line pointer-events-none absolute top-[100%] left-[0.35em] w-[calc(100%-0.1em)] max-w-[476px]"
                />
              </span>
            </h2>
            <p className="mt-8 max-w-[617px] text-[20px] leading-[1.7] text-purple">
              I’d love to hear about the person you love and the help they
              need. You can ask questions, talk through your options and see
              whether Si Care is the right fit.
            </p>
            <div className="mt-8">
              <BookChatLink>Let’s chat</BookChatLink>
            </div>
          </div>
        </WhenVisible>
      </section>
    </>
  );
}

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
          <div className="hero-title-wrap max-w-[647px]">
            <h1 className="hero-title display text-purple">
              <span className="block">Independent</span>
              <span className="block">Care Management</span>
              <span className="type-line block whitespace-nowrap">
                <Typed text={typedLead} start={0} />
                <span className="relative inline-block">
                  <Typed text={typedLove} start={typedLead.length} />
                  <svg
                    className="hero-underline pointer-events-none absolute left-0 top-[86%] h-[0.45em] w-[118%] -rotate-[2deg]"
                    viewBox="0 0 142.12 11.343"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      pathLength="1"
                      d="M0.750102 6.02602C7.54057 5.00646 14.0281 3.7927 21.0922 3.50793C24.2827 3.37931 27.6753 3.22232 30.8675 3.41467C33.7176 3.5864 36.5226 4.64036 38.9206 5.45312C45.5885 7.71317 52.0187 9.15115 59.8911 8.23768C66.7459 7.44229 72.7697 5.30657 79.9539 5.30657C81.7706 5.30657 83.3459 5.32616 85.0045 5.81285C90.6784 7.47777 95.8247 8.72044 102.181 9.46342C110.285 10.4106 118.965 10.865 127.225 10.4227C131.756 10.18 136.639 9.40113 139.979 7.51823C142.215 6.25776 141.578 3.0684 139.328 1.94911C136.901 0.742203 134.476 0.75002 131.461 0.75002"
                      stroke="#5C60A4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
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
                href="#how-to-get-a-home-care-package"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "max-w-full whitespace-normal text-center max-sm:px-5 max-sm:text-[16px]",
                )}
              >
                I don’t have a home package
              </a>
            </div>
          </div>
          <div className="hero-stage art relative mx-auto aspect-[513/517] w-full max-w-[min(100%,28rem)] min-[1200px]:max-w-[513px]">
            <div
              className="hero-in absolute inset-0"
              style={{ "--from-x": "-18%", "--from-y": "12%", "--d": "0.05s" } as CSSProperties}
            >
              <Image
                src="/images/figma/hero-photo-collage@2x.png"
                alt=""
                fill
                aria-hidden
                sizes="(min-width: 1200px) 513px, 90vw"
                className="hero-mask-left object-contain"
              />
            </div>
            <div
              className="hero-in absolute inset-0"
              style={{ "--from-x": "8%", "--from-y": "22%", "--d": "0.16s" } as CSSProperties}
            >
              <Image
                src="/images/figma/hero-photo-collage@2x.png"
                alt=""
                fill
                aria-hidden
                sizes="(min-width: 1200px) 513px, 90vw"
                className="hero-mask-rose object-contain"
              />
            </div>
            <div
              className="hero-in absolute inset-0"
              style={{ "--from-x": "16%", "--from-y": "4%", "--d": "0.28s" } as CSSProperties}
            >
              <Parallax speed={0.07} className="relative h-full w-full">
                <Image
                  src="/images/figma/hero-photo-collage@2x.png"
                  alt="Collage of families and carers: a daughter with her father, and a carer with an older woman at home."
                  fill
                  priority
                  sizes="(min-width: 1200px) 513px, 90vw"
                  className="object-contain"
                />
              </Parallax>
            </div>
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
            <div className="mother-frame art relative mx-auto w-full max-w-[640px]">
              <img
                src="/images/figma/photo-margherita.png"
                alt="Margherita, smiling in her kitchen as she cooks."
                width={537}
                height={517}
                className="mother-photo"
              />
              <p className="mother-caption">
                My mother
                <br />
                Margherita.
              </p>
              <svg className="mother-squiggle" viewBox="0 0 140 48" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M22 14 C30 28 48 30 42 14 C36 2 10 4 18 16 C40 28 78 40 138 46"
                  fill="none"
                  stroke="#8BC961"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
                <div className="stagger-rise relative h-[16.5rem] w-[16.5rem] max-w-[86vw] shrink-0">
                  <img
                    src="/images/figma/blob-card-approach.svg"
                    alt=""
                    className="absolute inset-0 h-full w-full"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center text-purple">
                    <p className="font-display text-[1.45rem] leading-[1.1] sm:text-[1.55rem]">
                      {card.title}
                    </p>
                    <p className="approach-copy mt-2 text-[16px] leading-[1.55]">
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
                    className="book-blob relative block aspect-square w-[15.5rem] max-w-[78vw] shrink-0"
                    aria-label="Book a chat"
                  >
                    <span aria-hidden className="book-blob-shape absolute left-[6%] top-[6%] size-[88%] rounded-full bg-lime" />
                    <span className="absolute inset-[18%] z-10 flex items-center justify-center text-center font-display text-[1.7rem] leading-[1.05] tracking-normal text-white">
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
        <div className="page-wrap grid items-center gap-10 lg:grid-cols-[535px_minmax(0,1fr)] lg:gap-10">
          <WhenVisible threshold={0.45} className="play-slide art relative mx-auto aspect-[535/471] w-full max-w-[535px]">
            <div
              className="slide-piece absolute right-0 top-0 h-full w-[53%]"
              style={{ "--from-x": "22%", "--from-y": "-8%", "--d": "0.02s" } as CSSProperties}
            >
              <Parallax speed={0.05} className="h-full w-full">
                <div className="h-full w-full origin-center rotate-180 -scale-y-100">
                  <img src="/images/figma/blob-contact-shape-1.svg" alt="" className="art-shape h-full w-full" />
                </div>
              </Parallax>
            </div>
            <div
              className="slide-piece absolute left-[2%] top-0 z-10 w-[80%]"
              style={{ "--from-x": "-18%", "--from-y": "6%", "--d": "0.12s" } as CSSProperties}
            >
              <Parallax speed={0.09} className="w-full">
                <img
                  src="/images/figma/photo-contact-care.png"
                  alt="A carer rests a hand on the shoulder of a smiling older man."
                  className="h-auto w-full"
                />
              </Parallax>
            </div>
            <div
              className="slide-piece absolute bottom-0 left-0 w-[72%]"
              style={{ "--from-x": "-8%", "--from-y": "28%", "--d": "0.22s" } as CSSProperties}
            >
              <Parallax speed={0.04} className="w-full">
                <div className="-rotate-[6deg]">
                  <img src="/images/figma/blob-contact-shape-2.svg" alt="" className="art-shape w-full" />
                </div>
              </Parallax>
            </div>
          </WhenVisible>
          <WhenVisible threshold={0.6} className="play-draw">
            <h2 className="display text-[clamp(2rem,4vw,48px)] text-purple">
              Let’s talk about
              <br />
              <span className="relative inline-block">
                your Margherita
                <svg
                  className="pointer-events-none absolute left-[0.42em] top-[92%] h-[0.42em] w-[calc(100%-0.15em)]"
                  viewBox="0 0 477.176 19.0758"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    className="draw-stroke"
                    pathLength="1"
                    d="M0.75004 9.972C23.7202 8.10702 45.6655 5.88684 69.5612 5.36594C80.3539 5.13068 91.8301 4.8435 102.628 5.19535C112.269 5.50948 121.758 7.43736 129.869 8.92406C152.425 13.0581 174.176 15.6884 200.806 14.0175C223.994 12.5626 244.371 8.65599 268.673 8.65599C274.818 8.65599 280.147 8.69182 285.758 9.58207C304.951 12.6275 322.359 14.9006 343.861 16.2596C371.273 17.9922 400.635 18.8234 428.576 18.0143C443.904 17.5705 460.423 16.1457 471.721 12.7015C479.284 10.3959 477.129 4.56196 469.517 2.51457C461.673 -0.27154 473.55 4.30575 465 0.750196"
                    stroke="#5C60A4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
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
          </WhenVisible>
        </div>
      </section>
    </>
  );
}

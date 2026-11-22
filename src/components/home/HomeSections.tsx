/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { BookChatLink } from "@/components/BookChatLink";
import { buttonVariants } from "@/components/ui/button";
import { TestimonialStrip } from "@/components/home/TestimonialStrip";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
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

const resources = [
  {
    href: "/resources/participant-contributions",
    label: "What are participant contributions under Support at Home?",
  },
  {
    href: "/resources/how-to-get-a-home-care-package",
    label: "How to get a home care package",
  },
  {
    href: "/resources/how-to-switch-providers",
    label: "How to switch providers",
  },
  {
    href: "/resources/want-to-work-in-aged-care",
    label: "Want to work in aged care?",
  },
  {
    href: "/resources/no-home-care-package",
    label: "I don’t have a home care package",
  },
];

export function HomeSections() {
  return (
    <>
      <section className="bg-cream pb-16 pt-[52px] md:pb-[120px] md:pt-[83px]">
        <div className="page-wrap grid items-center gap-10 lg:grid-cols-[minmax(0,647px)_minmax(280px,513px)] lg:justify-between lg:gap-8">
          <Reveal className="max-w-[647px]">
            <h1 className="display text-[clamp(2rem,4.4vw,48px)] text-purple">
              Independent
              <br />
              Care Management
              <br />
              for the people we{" "}
              <span className="relative inline-block">
                love
                <Image
                  src="/images/figma/hero-underline-love.svg"
                  alt=""
                  width={141}
                  height={10}
                  className="pointer-events-none absolute -bottom-1 left-0 w-[9.2rem] max-w-none -rotate-[2deg]"
                />
              </span>
            </h1>
            <div className="mt-4 max-w-[640px] space-y-4 text-[20px] leading-[1.7] text-purple">
              <p>
                When someone you love needs more help at home, it can be hard to
                know where to start.
              </p>
              <p>
                We help families understand their choices, find the right support
                and make care feel personal.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <BookChatLink>Book a chat</BookChatLink>
              <Link
                href="/resources/no-home-care-package"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "max-w-full whitespace-normal text-center max-sm:px-5 max-sm:text-[16px]",
                )}
              >
                I don’t have a home package
              </Link>
            </div>
          </Reveal>
          <Parallax speed={0.07} className="relative mx-auto aspect-[513/517] w-full max-w-[513px]">
            <Image
              src="/images/figma/hero-photo-collage@2x.png"
              alt="Collage of families and carers: a daughter with her father, and a carer with an older woman at home."
              fill
              priority
              sizes="(min-width: 1024px) 513px, 90vw"
              className="object-contain"
            />
          </Parallax>
        </div>
      </section>

      <section id="story" className="bg-lavender px-0 py-16 md:py-20">
        <div className="page-wrap">
          <Reveal>
            <h2 className="display text-center text-[clamp(2rem,4vw,48px)] text-purple">
              Everybody has a Margherita.
            </h2>
          </Reveal>
          <div className="mt-8 grid items-center gap-10 lg:mt-8 lg:grid-cols-[552px_minmax(0,1fr)] lg:gap-[60px]">
            <Reveal delay={80} className="relative mx-auto h-[420px] w-full max-w-[552px] sm:h-[517px]">
              <p className="absolute left-0 top-8 z-10 w-[132px] text-[16px] leading-[1.7] text-purple">
                Margherita creating magic in her kitchen
              </p>
              <Image
                src="/images/figma/photo-margherita.png"
                alt="Margherita, smiling in her kitchen as she cooks."
                width={537}
                height={517}
                className="absolute left-[15px] top-0 h-full w-[calc(100%-15px)] object-contain object-left-top"
              />
              <Image
                src="/images/figma/squiggle-kitchen.svg"
                alt=""
                width={114}
                height={29}
                className="absolute left-8 top-28 w-[114px] -rotate-[162deg]"
              />
            </Reveal>
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
          <p className="display mx-auto mt-12 max-w-[920px] text-center text-[clamp(1.5rem,2.4vw,32px)] text-purple">
            I started Si Care Solutions because I’ve been there and want to help
            your family through it.
          </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-overlay px-5 py-16 text-white md:p-[100px] xl:p-[160px]">
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
          <ul className="flex w-full max-w-full flex-wrap items-center justify-center gap-6 xl:gap-12">
            {approachCards.map((card, index) => (
              <Reveal
                as="li"
                key={card.title}
                delay={index * 90}
                className="relative h-[233px] w-[min(253px,100%)] sm:w-[253px]"
              >
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
              </Reveal>
            ))}
            <Reveal as="li" delay={270} className="list-none">
              <BookChatLink variant="blob" size="none" className="relative grid h-[233px] w-[min(253px,100%)] place-items-center sm:w-[253px]">
                <img
                  src="/images/figma/blob-book-a-chat.svg"
                  alt=""
                  className="absolute inset-0 h-full w-full"
                />
                <span className="relative z-10 max-w-[8rem] text-center font-display text-[28px] leading-[1.1] text-white sm:text-[32px]">
                  Book a chat
                </span>
              </BookChatLink>
            </Reveal>
          </ul>
        </div>
      </section>

      <section className="overflow-hidden bg-lavender py-[60px]">
        <Reveal className="page-wrap">
          <h2 className="display text-center text-[clamp(2rem,4vw,48px)] text-purple">
            Kind words and happy families
          </h2>
        </Reveal>
        <div className="mt-[83px]">
          <TestimonialStrip />
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
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
          <ul className="mx-auto mt-10 flex w-full max-w-[765px] flex-col gap-8">
            {resources.map((item, index) => (
              <Reveal as="li" key={item.href} delay={index * 70}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center rounded-full border-2 border-purple px-6 py-2 text-[18px] font-bold leading-[1.7] text-purple hover:bg-lavender sm:px-8 sm:text-[20px] md:px-10"
                >
                  {item.label}
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-lavender py-16 md:py-[120px]">
        <div className="page-wrap grid items-center gap-10 lg:grid-cols-[535px_minmax(0,1fr)] lg:gap-10">
          <div className="relative mx-auto h-[420px] w-full max-w-[535px] overflow-hidden sm:h-[471px] sm:overflow-visible">
            <Parallax speed={0.05} className="absolute right-0 top-0 h-full w-[53%]">
              <img
                src="/images/figma/blob-contact-shape-1.svg"
                alt=""
                className="h-full w-full origin-center rotate-180 -scale-y-100"
              />
            </Parallax>
            <Parallax speed={0.09} className="absolute left-[10px] top-0 z-10 w-[80%] max-w-[425px]">
              <img
                src="/images/figma/photo-contact-care.png"
                alt="A carer rests a hand on the shoulder of a smiling older man."
                className="h-auto w-full"
              />
            </Parallax>
            <Parallax speed={0.04} className="absolute bottom-6 left-0 w-[74%]">
              <img
                src="/images/figma/blob-contact-shape-2.svg"
                alt=""
                className="w-full -rotate-[6deg]"
              />
            </Parallax>
          </div>
          <Reveal>
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
                  className="pointer-events-none absolute -bottom-2 left-0 w-full max-w-[476px]"
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
          </Reveal>
        </div>
      </section>
    </>
  );
}

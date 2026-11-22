import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookChatLink } from "@/components/BookChatLink";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "How Margherita, Carolyn Chillura’s mother, led to Si Care Solutions, an independent care-management service in Melbourne.",
};

export default function OurStoryPage() {
  return (
    <article>
      <header className="section page-wrap grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
            Our story
          </p>
          <h1 className="display mt-3 text-[clamp(2.6rem,6vw,4.8rem)] text-purple">
            Everybody has a Margherita
          </h1>
          <p className="mt-6 text-lg">
            Si Care Solutions is Carolyn Chillura’s practice. It began with her
            mother, and with the years she spent trying to get aged care to
            hear an Italian family.
          </p>
        </div>
        <figure>
          <div className="blob-mask relative aspect-[4/3] overflow-hidden shadow-[var(--shadow-soft)]">
            <Image
              src="/images/margherita-kitchen.jpg"
              alt="Margherita cooking at the stove in her brick kitchen, wearing a green shirt and a patterned apron."
              fill
              sizes="(min-width: 768px) 32rem, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            Margherita in her second kitchen, where the real cooking happens.
          </figcaption>
        </figure>
      </header>

      <div className="bg-lavender">
        <div className="prose-care page-wrap max-w-none py-16 text-lg md:py-20">
          <div className="max-w-3xl">
          <p>
            My beautiful mother, Margherita, was diagnosed with dementia at 65.
            Nothing prepares you for that news, or for the road that follows.
          </p>
          <p>
            Supporting my parents through their health was tireless, difficult
            and daunting. My role as a daughter narrowed. I became their
            unofficial carer and advocate, while holding a full-time job,
            raising three small children, and trying to keep up with my own
            life.
          </p>
          <p>
            The idea behind Si Care Solutions started from years of frustrating
            personal experience in aged care.
          </p>
          <p>
            When you do not understand the process, it is hard to ask for what
            you need. My parents’ Italian background added another layer. The
            connection with company-assigned case managers was poor. Their needs
            were not always met, because they could not easily say, in English,
            what they actually wanted.
          </p>
          <p>That was the beginning of wanting a better experience.</p>
          <p>
            I had to be hands-on with their packages. Like most adult children,
            I wanted my parents to have services, aids and equipment at home so
            they could feel safe and content, and keep their independence.
          </p>
          <p>I wanted them to have choices.</p>
          <p>I wanted them to feel heard and valued.</p>
          <p>And I want those things for you, too.</p>
          <p>This is why Si Care Solutions exists.</p>
          <p>
            We understand, because we have stood where you are standing.
          </p>

          <h2>Sì means yes</h2>
          <p>
            Sì means yes in Italian. The name is a reminder of what Carolyn was
            looking for: a positive way through, for people who had been told
            “no”, or who could not get a word in at all.
          </p>
          <p>
            Carolyn Chillura is the founder and chief executive. She works from
            Melbourne with families across the city. She founded Si Care in
            2020, after more than a decade around the complexity of the aged
            care system, and after caring for her own parents.
          </p>
          <p>
            The work is care management. Si Care is not an approved Support at
            Home provider. Carolyn coordinates the plan and matches each person
            with her curated team. A separate approved provider holds the
            government funds. The decisions stay with the person and their
            family.
          </p>
          <p>
            <Link href="/approach">See how Listen, Link and Look after work</Link>
            , or{" "}
            <Link href="/resources">read the notes families ask for first</Link>.
          </p>
          <div className="mt-8">
            <BookChatLink>Book a chat</BookChatLink>
          </div>
          </div>
        </div>
      </div>
    </article>
  );
}

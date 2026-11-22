import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookChatLink } from "@/components/BookChatLink";
import { DraftNotice } from "@/components/DraftNotice";
import { ResourceBody } from "@/components/ResourceBody";
import { getResource, resources } from "@/content/resources";
import { site } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.description,
  };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  return (
    <Reveal>
    <article className="section page-wrap">
      <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
        <Link href="/resources" className="hover:underline">
          Resources
        </Link>
      </p>
      <h1 className="display mt-3 text-[clamp(2.2rem,5vw,3.8rem)] text-purple">
        {resource.title}
      </h1>
      {resource.draft ? (
        <div className="mt-6">
          <DraftNotice />
        </div>
      ) : null}
      <div className="mt-8 text-lg">
        <ResourceBody blocks={resource.blocks} />
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-purple/15 pt-8">
        <BookChatLink>Let’s chat</BookChatLink>
        <a
          className="font-semibold text-purple underline"
          href={`tel:${site.phones[0].tel}`}
        >
          {site.phones[0].display}
        </a>
      </div>
      </div>
    </article>
    </Reveal>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RedirectNotice } from "@/components/RedirectNotice";
import { getResource, resources } from "@/content/resources";

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
  return <RedirectNotice hash={slug} label={resource.title} />;
}

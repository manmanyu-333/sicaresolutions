import type { Metadata } from "next";
import { RedirectNotice } from "@/components/RedirectNotice";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "How Margherita, Carolyn Chillura’s mother, led to Si Care Solutions. The story now lives on the home page.",
};

export default function OurStoryPage() {
  return <RedirectNotice hash="our-story" label="Our story" />;
}

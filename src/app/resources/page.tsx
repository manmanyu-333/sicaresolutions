import type { Metadata } from "next";
import { RedirectNotice } from "@/components/RedirectNotice";

export const metadata: Metadata = {
  title: "Resources and FAQ",
  description:
    "Short notes on Support at Home, changing providers, and calling Si Care. They now live on the home page.",
};

export default function ResourcesPage() {
  return <RedirectNotice hash="resources" label="Helpful resources" />;
}

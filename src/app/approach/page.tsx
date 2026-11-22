import type { Metadata } from "next";
import { RedirectNotice } from "@/components/RedirectNotice";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Listen, Link and Look after. How Si Care coordinates Support at Home without being an approved provider.",
};

export default function ApproachPage() {
  return <RedirectNotice hash="approach" label="Approach" />;
}

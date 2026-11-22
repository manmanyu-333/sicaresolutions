export function DraftNotice({
  kind = "draft",
}: {
  kind?: "draft" | "legal";
}) {
  const copy =
    kind === "legal"
      ? "Placeholder. This is plain-English scaffolding for an Australian small business. It is not legal advice and needs a lawyer’s review before the site goes live."
      : "Draft, pending Carolyn’s review. Please don’t treat this page as final.";

  return (
    <p
      className="rounded-2xl border border-dashed border-purple/40 bg-rose/25 px-4 py-3 text-sm font-bold text-nav"
      role="note"
    >
      {kind === "legal" ? "Needs legal review. " : "DRAFT. "}
      {copy}
    </p>
  );
}

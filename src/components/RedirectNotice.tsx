const KNOWN = new Set([
  "who-we-are",
  "our-story",
  "approach",
  "resources",
  "participant-contributions",
  "how-to-get-a-home-care-package",
  "how-to-switch-providers",
  "want-to-work-in-aged-care",
  "no-home-care-package",
]);

/**
 * Static-export stand-in for a redirect. Next.js redirects are ignored when
 * output is "export", so the old URL replaces itself with the home anchor.
 */
export function RedirectNotice({
  hash,
  label,
}: {
  hash: string;
  label: string;
}) {
  const fallback = hash === "faq" || !KNOWN.has(hash) ? "resources" : hash;
  const url = `/#${fallback}`;
  const script = `(()=>{var known=${JSON.stringify([...KNOWN])};var alias={faq:"resources","no-home-care-package":"how-to-get-a-home-care-package","participant-contributions":"how-to-get-a-home-care-package"};var current=(location.hash||"").replace(/^#/,"");var next=alias[current]||current;if(known.indexOf(next)<0) next=${JSON.stringify(fallback)};location.replace("/#"+next);})()`;

  return (
    <article className="section page-wrap">
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <div className="max-w-3xl">
        <h1 className="display text-[clamp(2rem,4vw,3rem)] text-purple">{label}</h1>
        <p className="mt-4 text-[20px] leading-[1.7] text-purple">
          This now lives on the home page.{" "}
          <a className="font-bold underline underline-offset-4" href={url}>
            Continue to {label}
          </a>
        </p>
      </div>
    </article>
  );
}

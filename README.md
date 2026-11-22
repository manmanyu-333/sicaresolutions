# Si Care Solutions

Marketing site for Si Care Solutions, Carolyn Chillura’s independent Support at Home care-management practice in Melbourne. This is a working preview. Hosting and the final domain are not decided. The current public site at [sicare.com.au](https://www.sicare.com.au/) is still the Weebly site.

The design source of truth is the Figma frame [Quests / node 98:936](https://www.figma.com/design/SVrqXpCw54YCBt3olzAPHv/Quests?node-id=98-936). Colours, type and spacing in `src/design/tokens.css` match that frame: cream `#FFFAF0`, lavender `#F9F3FF`, purple `#5C60A4`, nav-current `#3A467F`, lime `#8BC961`, mint `#DFF7CF`, lilac `#CEB7CE`, deep purple `#6750A4`, approach overlay `#3E406E` at 20%, dusty rose `#D898B4`. Headings, navigation and buttons use **Aboreto** (1.56px letter-spacing on nav and buttons, including “Let’s chat”). Body copy uses **Inclusive Sans** 400 and 700. The artboard is 1512px wide, the content column is 1192px, side padding is 160px, and the footer padding is 60px.

The Figma export tarball was not on disk in this environment, so the script logo, underline and approach-blob paths in `public/images/figma/` are stand-in SVGs with the same filenames. Drop the exported files over them. Hero, approach-room and call-to-action photographs are still the named placeholders. Copy on the home page is the preview copy until the Figma text in `figma/SPECS.md` is applied; where they differ, Figma wins, except the contact rules below.

Si Care coordinates care. It is not an approved Support at Home provider. The site does not claim otherwise.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on port **43123** ([http://127.0.0.1:43123](http://127.0.0.1:43123)).

A production check:

```bash
npm run build
npx serve out
```

`next build` writes a static export to `out/`. There is no database and no environment variable.

## Deploy to Vercel

Amanda’s usual path is GitHub plus Vercel.

1. Push this repository to GitHub.
2. In Vercel, import the repository. Framework preset: **Next.js**.
3. Build command: `next build` (the default). No environment variables.
4. The project sets `output: "export"` in `next.config.ts`, so the build is a static site in `out/`. If Vercel asks for an output directory, use `out`.

Every “Book a chat” and “Let’s chat” control reads `bookingHref` in `src/config/site.ts`. It is `href="#"` until that value points at a booking tool or form.

## Where the design tokens live

Change these when the Figma values arrive. You should not have to hunt through page files.

| What | Where |
| --- | --- |
| Colours, type scale, spacing, radii | `src/design/tokens.css` |
| Font families (Aboreto, Inclusive Sans, and the interim script logo) | `src/app/layout.tsx` |
| Script “Si” wordmark | `src/components/Logo.tsx` (`data-asset="si-logo"`). Replace with `public/images/figma/si-logo.svg` when the export is available. |
| Hand-drawn underline | `src/components/Squiggle.tsx` and `public/images/figma/squiggle.svg` |
| Approach card blob | `public/images/figma/blob-card-approach.svg` (live text sits on top of it) |
| Contact details, phones, email, ABN, booking link, “Fully Insured.” and the service-area line | `src/config/site.ts` |

## Swap a placeholder photograph

Placeholder images are plain SVG stand-ins. They are not stock photos of real people. Replace the file, or point the `src` at a new file, and keep the `alt` honest.

| File | Used for |
| --- | --- |
| `public/images/placeholders/hero-portrait.svg` | Home hero, right-hand blob |
| `public/images/placeholders/approach-room.svg` | Photograph behind Listen / Link / Look after. The overlay is `#3E406E` at 20% opacity. |
| `public/images/placeholders/cta-window.svg` | “Let’s talk about your Margherita” panel |
| `public/images/figma/si-logo.svg` | Not shipped yet. The nav uses a script “Si” until this file replaces `Logo.tsx`. |
| `public/images/figma/squiggle.svg` | Stand-in underline. Same shape as the inline squiggle. |
| `public/images/figma/blob-card-approach.svg` | Stand-in mint blob behind the Listen / Link / Look after text. |

Real photographs already in the repo, taken from the current public site:

| File | What it is |
| --- | --- |
| `public/images/margherita-kitchen.jpg` | Margherita cooking in her kitchen |
| `public/images/logo-current.png` | The current Weebly logo, kept for reference. The nav uses the script wordmark until the Figma logo SVG arrives. |
| `public/images/testimonials/` | Message screenshots and Lucy’s handwritten note, already published on sicare.com.au |

## Still to confirm

Items marked on the site itself as **DRAFT** or **placeholder**. Nothing here should go live as final copy without Carolyn or Amanda.

### Needs Carolyn

- **Participant contributions** (`/resources/participant-contributions`). Draft summary of the public Support at Home contribution bands. Percentages move when the schedule is indexed. She should correct the wording and decide what she is willing to publish.
- **I don’t have a home care package** (`/resources/no-home-care-package`). Draft. There was no finished page for this.
- **FAQ** on `/resources#faq`. All eight answers are drafts, including fees. No fee is invented.
- **Our story and approach** are drawn from the current website and Carolyn’s public account of founding Si Care in 2020. Figma copy replaces them where it differs. The rule that Link means matching her curated team, not helping people find carers, stays either way.
- **ABN.** Shown as “To be confirmed”. Do not use `57 697 170 737`. That ABN belongs to a different business.
- **Service area.** The FAQ says Melbourne, and names suburbs that appear in published testimonials. Confirm how far the practice actually travels.
- **Languages offered.** The site says language and culture matter. It does not claim a language list.
- **Care-management fee.** Deliberately unpublished.

### Needs Amanda

- **Booking link.** `bookingHref` in `src/config/site.ts` is `"#"`. Wire it to the booking tool or a form. Every chat button uses that one value.
- **Figma tokens and assets.** Replace `src/design/tokens.css`, the font loader, `Logo`, `Squiggle`, and the three placeholder SVGs with the export. Where Figma copy differs from this preview, Figma wins, except the contact rules below.
- **Email.** The footer uses `connect@sicaresolutions.com.au`, Amanda’s choice. The live Weebly site still shows `info@sicare.com.au`.
- **Phones.** `(03) 9917 7710` and `0490 017 903`. Do not use `0401 685 314`.
- **Domain and hosting.** Undecided. `sicare.com.au` is still on the existing site.

### Needs a lawyer before launch

- **Privacy policy** (`/privacy`). Plain-English placeholder for an Australian small business. Not legal advice.
- **Terms and conditions** (`/terms`). Same. Not the care-management contract.

### Content rules already applied

- Buttons say “chat”, never “consult”.
- Si Care is described as care management and coordination, not as an approved provider.
- The wrong ABN and the wrong mobile number are not shown.

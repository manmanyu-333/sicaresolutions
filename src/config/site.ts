/**
 * Site-wide facts. Contact details and the booking link live here only.
 * Pages should import this module rather than hard-coding phones or email.
 */
export const site = {
  name: "Si Care Solutions",
  shortName: "Si",
  location: "Melbourne",
  description:
    "Independent Support at Home care management in Melbourne. We listen, match a curated team, and look after the plan. Si Care coordinates care and is not an approved provider.",

  /**
   * TODO(amanda): point every “Book a chat” and “Let’s chat” control at the
   * booking tool or contact form. One value, used everywhere.
   */
  bookingHref: "#",

  email: "connect@sicaresolutions.com.au",

  phones: [
    { display: "(03) 9917 7710", tel: "+61399177710" },
    { display: "0490 017 903", tel: "+61490017903" },
  ],

  /**
   * PLACEHOLDER. Carolyn still needs to confirm the ABN.
   * Do not substitute 57 697 170 737 — that number belongs to a different business.
   */
  abn: null as string | null,
  abnPlaceholder: "To be confirmed",

  facebook: "https://www.facebook.com/sicaresolution",

  /** Full lines. The Figma footer clips both of these. */
  insuredLine: "Fully Insured.",
  serviceArea: "Serving families in Melbourne, Victoria",

  /**
   * Design source of truth. Token values in src/design/tokens.css are interim
   * until this frame’s export is applied.
   */
  figmaUrl:
    "https://www.figma.com/design/SVrqXpCw54YCBt3olzAPHv/Quests?node-id=98-936",
} as const;

/** In-page sections. Old paths redirect here. Privacy and Terms stay separate. */
export const nav = [
  { href: "/#our-story", id: "our-story", label: "Our story" },
  { href: "/#who-we-are", id: "who-we-are", label: "Who we are" },
  { href: "/#approach", id: "approach", label: "Approach" },
  { href: "/#resources", id: "resources", label: "Resources" },
] as const;

export const footerNav = [
  { href: "/#who-we-are", label: "Home" },
  { href: "/#our-story", label: "Our story" },
  { href: "/#approach", label: "Approach" },
  { href: "/#resources", label: "Resources" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
] as const;

export type ResourceBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "links"; items: { href: string; label: string }[] };

export type Resource = {
  slug: string;
  title: string;
  summary: string;
  draft: boolean;
  description: string;
  blocks: ResourceBlock[];
};

export const resources: Resource[] = [
  {
    slug: "participant-contributions",
    title: "Participant contributions under Support at Home",
    summary:
      "A plain-language sketch of who pays what. The percentages are public, and they change. This note is a draft for Carolyn to correct.",
    draft: true,
    description:
      "Draft explanation of Support at Home participant contributions for Si Care families.",
    blocks: [
      {
        type: "p",
        text: "Support at Home is the Australian Government program that funds help at home. Most people contribute toward some of the services. Clinical care is different: you are not asked to contribute to that. What you pay for other services depends on the kind of service, and on your income, assets and pension status.",
      },
      {
        type: "p",
        text: "Si Care does not set these rates, and we do not hold the government funds. An approved provider does that. We can sit with you and read a budget in ordinary language, once a provider is in place.",
      },
      {
        type: "h2",
        text: "The shape of the contributions",
      },
      {
        type: "p",
        text: "These bands are the public schedule. They are indexed, and the dollar thresholds move. Check My Aged Care or the fee estimator before you rely on a number. Full pensioners pay the lowest rate. Self-funded retirees who are not eligible for a Commonwealth Seniors Health Card pay the highest. Part-pensioners and card holders sit on a scale in between, based on an income and assets assessment.",
      },
      {
        type: "ul",
        items: [
          "Clinical support, such as nursing: no contribution.",
          "Independence services: from 5% of the price for a full pensioner, up to 50% at the top of the scale.",
          "Everyday living, such as cleaning, gardening, shopping and meal preparation: from 17.5% up to 80%.",
        ],
      },
      {
        type: "p",
        text: "The official service list decides which bucket a task falls into. If a letter from Services Australia names a rate, that letter wins over this page.",
      },
      {
        type: "h2",
        text: "If you were already in the old system",
      },
      {
        type: "p",
        text: "A “no worse off” rule covers many people who, on 12 September 2024, were already receiving a Home Care Package, were on the national priority list, or had been approved as eligible. Their contributions are meant to stay at the older, lower settings, even if they are later assessed at a higher level. Ask Services Australia which rule applies to you. We will not guess it on a website.",
      },
      {
        type: "h2",
        text: "A few things worth knowing",
      },
      {
        type: "ul",
        items: [
          "An income and assets assessment is not compulsory, but if it is not done you can be asked to pay the highest rate.",
          "There is a lifetime cap on these contributions. It is indexed twice a year. Services Australia tracks it and will tell you if you reach it.",
          "If paying the contribution would cause real hardship, you can ask Services Australia about hardship assistance.",
          "Home Care Package letters from before November 2025 may still be what a family has in the drawer. The program name is now Support at Home.",
        ],
      },
      {
        type: "links",
        items: [
          {
            href: "https://www.myagedcare.gov.au/support-at-home",
            label: "Support at Home on My Aged Care",
          },
          {
            href: "https://www.myagedcare.gov.au/support-at-home-fee-estimator",
            label: "Support at Home fee estimator",
          },
          {
            href: "https://www.health.gov.au/our-work/support-at-home/charging-for-support-at-home-services/support-at-home-participant-contributions",
            label: "Department of Health: participant contributions",
          },
        ],
      },
    ],
  },
  {
    slug: "how-to-get-a-home-care-package",
    title: "How to get a home care package",
    summary:
      "Five steps, from the first call to My Aged Care through to a conversation with us. The program is now called Support at Home.",
    draft: false,
    description:
      "How to ask for a Support at Home assessment, and where Si Care fits once funding is approved.",
    blocks: [
      {
        type: "p",
        text: "A Support at Home classification (what many families still call a home care package) is a government budget for services that help an older person keep living at home. The person does not receive the money in cash. An approved provider holds the funds and works out, with you, how they are spent. Si Care is not that provider. We coordinate the care around the person.",
      },
      {
        type: "p",
        text: "The amount depends on an assessment of need. The old Home Care Package levels have folded into Support at Home. Letters you already have may still use the earlier name.",
      },
      {
        type: "h2",
        text: "Five steps",
      },
      {
        type: "steps",
        items: [
          {
            title: "Ask My Aged Care for an assessment",
            body: "Visit myagedcare.gov.au or call 1800 200 422. You can do this for yourself, or with a family member beside you.",
          },
          {
            title: "Someone visits",
            body: "An assessor makes a time to come to the home and talk about how things are going, what is hard, and what would help.",
          },
          {
            title: "Wait for the outcome",
            body: "My Aged Care writes to say what has been approved. If there is a wait, the letter explains where things stand.",
          },
          {
            title: "When funding is assigned",
            body: "You will be told what you can use it for, and by when you need to enter an agreement with an approved provider. That provider manages the funds.",
          },
          {
            title: "Then let’s chat",
            body: "Call Si Care. We talk through what a good week looks like, and we coordinate the services with the provider who holds the budget. You keep the decisions.",
          },
        ],
      },
      {
        type: "p",
        text: "The point of all of this is a person living safely, in their own home, with the help they actually want.",
      },
    ],
  },
  {
    slug: "how-to-switch-providers",
    title: "How to switch providers",
    summary:
      "You can change the approved provider that holds the funds. We can talk you through it. Si Care is not the provider you switch to.",
    draft: false,
    description:
      "How changing an approved Support at Home provider works, and how Si Care can help you think it through.",
    blocks: [
      {
        type: "p",
        text: "If you have a home care package or Support at Home funding and it does not feel like care, you can change the approved provider. It is your choice. It is allowed, and it does not have to be a fight.",
      },
      {
        type: "p",
        text: "Si Care is not an approved provider, so “switching to us” is not quite the right picture. What we can do is talk you through the change, stay with the care plan, and keep matching the people who actually come to the house. The new approved provider is the one who will hold the government funds.",
      },
      {
        type: "h2",
        text: "What usually happens",
      },
      {
        type: "ul",
        items: [
          "You decide you want a different approved provider. You do not need the current one’s permission to start that conversation.",
          "You choose the new provider and sign a service agreement with them. Ask them what notice the current provider needs, and what happens to unspent funds. Those rules sit with the providers and with My Aged Care, not with us.",
          "Tell us what you want to keep, what you want to stop, and who already has the trust of the person at the centre. We coordinate from there.",
        ],
      },
      {
        type: "p",
        text: "Changing is as easy as a phone call. Ring us and we will walk through it without a hard sell.",
      },
    ],
  },
  {
    slug: "want-to-work-in-aged-care",
    title: "Want to work in aged care",
    summary:
      "Carolyn keeps a curated team. If you are an independent contractor, tell us about your work and the suburbs you cover.",
    draft: false,
    description:
      "How independent support workers and allied health practitioners can introduce themselves to Si Care.",
    blocks: [
      {
        type: "p",
        text: "We are always looking for friendly, capable, often multilingual people to work with our clients. Support workers, cleaners, gardeners, nurses, allied health. The team is curated. Carolyn matches people to clients. She does not run an open directory.",
      },
      {
        type: "p",
        text: "If you are an independent contractor, get in touch and tell us a little about yourself. We will come back to you.",
      },
      {
        type: "ul",
        items: [
          "Your expertise",
          "Your experience",
          "The suburbs you prefer to work in",
          "Anything else you want us to know, including languages you speak at home",
        ],
      },
      {
        type: "p",
        text: "Call, or email connect@sicaresolutions.com.au. There is no form on this preview yet.",
      },
    ],
  },
  {
    slug: "no-home-care-package",
    title: "I don’t have a home care package",
    summary:
      "You can still call. We cannot approve funding, and we can help you see what the next step actually is.",
    draft: true,
    description:
      "Draft guidance for people who do not yet have a Support at Home classification or home care package.",
    blocks: [
      {
        type: "p",
        text: "You do not need a package already in place to have a conversation with us. A lot of families call at the moment when something has slipped: a fall, a hospital stay, a parent who is tired of managing alone, an adult child who has become the unofficial carer.",
      },
      {
        type: "p",
        text: "What we cannot do is approve a package, run the aged care assessment, or hold government funds. That sits with My Aged Care, the assessment teams, and an approved provider.",
      },
      {
        type: "h2",
        text: "A sensible order",
      },
      {
        type: "steps",
        items: [
          {
            title: "Ring My Aged Care",
            body: "1800 200 422, or myagedcare.gov.au. Ask for an assessment. If you are calling about a parent, they may need to be part of the call, or you may need to be registered to speak for them.",
          },
          {
            title: "Have the home visit",
            body: "Be specific about the week as it really is. Meals, showering, medications, the night, getting out, who currently helps, and what would fall over if that person got sick.",
          },
          {
            title: "Chat with us whenever you like",
            body: "Before, during or after the assessment. We can explain the path in plain language and, once funding exists, coordinate the care. If it is too early for services, we will say so.",
          },
        ],
      },
      {
        type: "p",
        text: "If money is tight and a package is still months away, tell us that on the call. We will not invent a service we cannot stand behind.",
      },
    ],
  },
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

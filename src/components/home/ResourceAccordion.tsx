"use client";

import { useEffect, useState, type ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { site } from "@/config/site";

const myAgedCare = "https://www.myagedcare.gov.au/support-at-home";
const feeEstimator = "https://www.myagedcare.gov.au/support-at-home-fee-estimator";

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="font-bold underline underline-offset-4">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function ChatLink({ children }: { children: ReactNode }) {
  return (
    <a
      href={site.bookingHref}
      className="font-bold underline underline-offset-4"
      onClick={(event) => {
        if (site.bookingHref === "#") event.preventDefault();
      }}
    >
      {children}
    </a>
  );
}

const panels = [
  {
    id: "participant-contributions",
    title: "What are participant contributions under Support at Home?",
    body: (
      <>
        <p>
          Support at Home is the government program that helps pay for care at
          home. Most people contribute toward some services. Clinical care,
          such as nursing, is treated differently from everyday help like
          cleaning or meals. What you pay depends on the kind of service and
          on your own circumstances.
        </p>
        <p className="mt-3">
          I don’t set these rates, and Si Care does not hold the government
          funds. Families who work with us have an approved provider, Let’s Get
          Care, who receives the subsidy and sends the statements. Unspent
          funds can sometimes carry forward, within the program’s limits. I can
          sit with you and read a budget in plain language. I don’t publish a
          fee here. I’ll explain how care management is paid for when we talk,
          and nothing is added without that conversation.
        </p>
        <p className="mt-3">
          <ExternalLink href={myAgedCare}>Support at Home on My Aged Care</ExternalLink>
          {" · "}
          <ExternalLink href={feeEstimator}>Fee estimator</ExternalLink>
        </p>
      </>
    ),
  },
  {
    id: "how-to-get-a-home-care-package",
    title: "How to get a home care package",
    body: (
      <>
        <p>
          Many families still say “home care package”. The program is now
          called Support at Home. It is a budget for help at home. You don’t
          receive it as cash. An approved provider holds it.
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5">
          <li>Call My Aged Care on 1800 200 422 and ask for an assessment. You can also start at myagedcare.gov.au.</li>
          <li>An assessor visits and talks about how the week actually goes.</li>
          <li>My Aged Care writes to you with the outcome.</li>
          <li>When funding is assigned, you sign an agreement with an approved provider.</li>
          <li>Then call me. We talk through a good week, and I coordinate the care with the provider who holds the budget. You keep the decisions.</li>
        </ol>
        <p className="mt-3">
          <ExternalLink href={myAgedCare}>My Aged Care</ExternalLink>
          {" · "}
          <a className="font-bold underline underline-offset-4" href="tel:1800200422">
            1800 200 422
          </a>
        </p>
      </>
    ),
  },
  {
    id: "how-to-switch-providers",
    title: "How to switch providers",
    body: (
      <>
        <p>
          If the care doesn’t feel like care, you can change the approved
          provider that holds the funds. It is your choice. You don’t need
          their permission to start the conversation.
        </p>
        <p className="mt-3">
          Si Care is not an approved provider, so this is not a switch “to
          us”. I can talk you through it, stay with the plan, and keep matching
          the people who come to the house. The new approved provider holds the
          government funds.
        </p>
        <p className="mt-3">
          A phone call is enough to begin.{" "}
          <a className="font-bold underline underline-offset-4" href={`tel:${site.phones[0].tel}`}>
            {site.phones[0].display}
          </a>
          {" · "}
          <ChatLink>Book a chat</ChatLink>
        </p>
      </>
    ),
  },
  {
    id: "want-to-work-in-aged-care",
    title: "Want to work in aged care?",
    body: (
      <>
        <p>
          I keep a curated team: support workers, nurses, allied health,
          cleaners and gardeners. I match people to the person at home. It
          isn’t an open list, and families are not left to find a carer
          themselves.
        </p>
        <p className="mt-3">
          If you are an independent contractor, write and tell me your
          experience, the suburbs you cover, and any languages you speak at
          home. I’ll come back to you.
        </p>
        <p className="mt-3">
          <a className="font-bold underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </>
    ),
  },
  {
    id: "no-home-care-package",
    title: "I don’t have a home care package",
    body: (
      <>
        <p>
          You don’t need funding already in place to call. Families often ring
          when something has slipped: a fall, a stay in hospital, a parent who
          is tired of managing alone.
        </p>
        <p className="mt-3">
          I can’t approve a package or run the assessment. That sits with My
          Aged Care and an approved provider. I can explain the path in
          ordinary language. Once funding exists, I coordinate the care. If it
          is too early for services, I’ll say so.
        </p>
        <p className="mt-3">
          <ExternalLink href="https://www.myagedcare.gov.au/">My Aged Care</ExternalLink>
          {" · "}
          <a className="font-bold underline underline-offset-4" href="tel:1800200422">
            1800 200 422
          </a>
          {" · "}
          <a className="font-bold underline underline-offset-4" href={`tel:${site.phones[0].tel}`}>
            Call Si Care {site.phones[0].display}
          </a>
        </p>
      </>
    ),
  },
];

export function ResourceAccordion() {
  const [value, setValue] = useState(panels[0].id);

  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (panels.some((panel) => panel.id === id)) setValue(id);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <Accordion.Root
      type="single"
      collapsible
      value={value}
      onValueChange={setValue}
      className="mx-auto flex w-full max-w-[765px] flex-col gap-4"
    >
      {panels.map((panel) => (
        <Accordion.Item
          key={panel.id}
          value={panel.id}
          id={panel.id}
          className="scroll-mt-28 overflow-hidden rounded-[28px] border-2 border-purple data-[state=open]:bg-lavender/70"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[18px] font-bold leading-[1.45] text-purple hover:bg-lavender/80 sm:px-8 sm:py-4 sm:text-[20px] sm:leading-[1.5]">
              <span>{panel.title}</span>
              <span
                aria-hidden
                className="grid size-9 shrink-0 place-items-center rounded-full border border-purple/30 font-sans text-xl leading-none"
              >
                <span className="group-data-[state=open]:hidden">+</span>
                <span className="hidden group-data-[state=open]:inline">–</span>
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-5 pb-5 text-[18px] leading-[1.7] text-purple sm:px-8 sm:pb-6 sm:text-[20px]">
            {panel.body}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

"use client";

import { useEffect, useState, type ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { site } from "@/config/site";

/**
 * Pages from the practical end of the current sicare.com.au menu
 * (the items that sit with “How to get a Home Care Package”, which
 * Weebly folds into More when the bar is full):
 * - /how-to-get-a-home-care-package.html
 * - /how-to-switch-providers.html
 * - /want-to-work-in-aged-care.html
 * - /contact.html
 * Wording is Carolyn’s, lightly broken into paragraphs. No prices.
 */

function ChatLink({ children }: { children: ReactNode }) {
  return (
    <a
      href={site.bookingHref}
      className="inline-flex min-h-11 items-center font-bold underline underline-offset-4"
      onClick={(event) => {
        if (site.bookingHref === "#") event.preventDefault();
      }}
    >
      {children}
    </a>
  );
}

const panels: { id: string; title: string; body: ReactNode }[] = [
  {
    id: "how-to-get-a-home-care-package",
    title: "How to get a Home Care Package",
    body: (
      <>
        <p>
          A Home Care Package refers to a fixed amount of money allocated by
          the federal government to an older person to provide services which
          will enable them to continue to live independently. The amount of
          money provided depends on the person’s needs and is assessed by ACAT
          (Aged Care Assessment Team). The person does not receive the cash in
          hand. Rather, they are allocated a code which they take to an
          approved service provider who they work with to decide how the money
          is going to be spent.
        </p>
        <p className="mt-3 font-bold">5 easy steps to find out if you are eligible for a package:</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            Visit My Aged Care or call them on 1800 200 422 to request an
            eligibility assessment. Your local Aged Care Assessment Team member
            will make a time to come to your home and talk to you about how you
            are managing and the assessment process.
          </li>
          <li>Await receipt of correspondence from MAC informing you of the assessment outcome.</li>
          <li>
            Upon confirmation of eligibility for a package, you will receive a
            letter containing a unique referral code and the deadline for
            entering into a Home Care Agreement.
          </li>
          <li>Get in touch with us to facilitate a discussion regarding your requirements, formalise an agreement, and commence services.</li>
        </ol>
        <p className="mt-3">
          With Si Care Solutions, you can enjoy your peace of mind knowing you
          are supported living safely independently in your own home.
        </p>
        <p className="mt-3">
          <a className="inline-flex min-h-11 items-center font-bold underline underline-offset-4" href="https://www.myagedcare.gov.au/" target="_blank" rel="noreferrer">
            My Aged Care
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          {" · "}
          <a className="inline-flex min-h-11 items-center font-bold underline underline-offset-4" href="tel:1800200422">
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
          If you have a Home Care package but are not feeling the love from
          your current provider, then let us help you.
        </p>
        <p className="mt-3">
          You can choose which provider best meets your needs and delivers the
          quality care you deserve. It’s completely your choice and it’s easy
          to change.
        </p>
        <p className="mt-3">
          You deserve to have the highest quality care and this means choosing
          the provider that best meets your needs.
        </p>
        <p className="mt-3">
          At Si Care Solutions, we pride ourselves on our personalised service.
          We want the best possible outcome which we achieve by listening to
          what is important to you. We are passionate about ensuring that you
          get the most out of your package, not just at the beginning but every
          day. Changing providers is as easy as 1, 2, Si.
        </p>
        <p className="mt-3">
          Contact us to talk through the process of changing and find out how
          we do things differently.{" "}
          <ChatLink>Book a chat</ChatLink>
          {" · "}
          <a className="inline-flex min-h-11 items-center font-bold underline underline-offset-4" href={`tel:${site.phones[0].tel}`}>
            {site.phones[0].display}
          </a>
        </p>
      </>
    ),
  },
  {
    id: "want-to-work-in-aged-care",
    title: "Want to work in Aged Care?",
    body: (
      <>
        <p>Want to be the difference in Aged Care?</p>
        <p className="mt-3">
          We are always on the look out for friendly, out going, multi-lingual
          carers, cleaners, gardeners, allied health specialists and more to
          work with our clients.
        </p>
        <p className="mt-3">
          If you are an independent contractor — get in touch and tell us a
          little about yourself and we’ll be in touch:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Your expertise</li>
          <li>Your experience</li>
          <li>What suburbs would you prefer to work in</li>
          <li>Anything else you want us to know</li>
        </ul>
        <p className="mt-3">
          Give us a call, send an email or complete the form on the contact
          page.{" "}
          <a className="inline-flex min-h-11 items-center font-bold underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          {" · "}
          <a className="inline-flex min-h-11 items-center font-bold underline underline-offset-4" href={`tel:${site.phones[0].tel}`}>
            {site.phones[0].display}
          </a>
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        <p>
          We are sure you have questions so give us a call, email or fill in
          your details and we will get in touch with you quickly.
        </p>
        <p className="mt-3">
          <a className="inline-flex min-h-11 items-center font-bold underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        {site.phones.map((phone) => (
          <p key={phone.tel}>
            <a className="inline-flex min-h-11 items-center font-bold underline underline-offset-4" href={`tel:${phone.tel}`}>
              {phone.display}
            </a>
          </p>
        ))}
        <p className="mt-3">
          <ChatLink>Book a chat</ChatLink>
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
            <Accordion.Trigger className="group flex min-h-12 w-full items-center justify-between gap-4 px-5 py-4 text-left text-[17px] font-bold leading-[1.45] text-purple hover:bg-lavender/80 sm:px-8 sm:text-[20px] sm:leading-[1.5]">
              <span>{panel.title}</span>
              <span
                aria-hidden
                className="grid size-11 shrink-0 place-items-center rounded-full border border-purple/30 font-sans text-xl leading-none"
              >
                <span className="group-data-[state=open]:hidden">+</span>
                <span className="hidden group-data-[state=open]:inline">–</span>
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-5 pb-5 text-[16px] leading-[1.65] text-purple sm:px-8 sm:pb-6 sm:text-[18px] sm:leading-[1.7]">
            {panel.body}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

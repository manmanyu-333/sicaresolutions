export type Faq = {
  id: string;
  question: string;
  answer: string;
};

/** DRAFT answers, pending Carolyn’s review. */
export const faqs: Faq[] = [
  {
    id: "provider",
    question: "Are you an approved Support at Home provider?",
    answer:
      "No. Si Care Solutions is an independent care-management service. We coordinate the care. An approved provider holds the government funding and the service agreement for the package. We will say this clearly on a call as well.",
  },
  {
    id: "find-carers",
    question: "Do you help us find carers?",
    answer:
      "No. Carolyn matches clients with her curated team. She does not hand you a list and leave you to find someone. If you already trust a worker, tell us. Where it is possible and right for the person, we would rather keep a good relationship than replace it.",
  },
  {
    id: "chat",
    question: "What happens if we book a chat?",
    answer:
      "It is a conversation, usually by phone. We ask about the person, the house, the family, and what a good week would look like. There is no hard sell. If we are not the right fit, we will say so. The booking button on this preview is not connected yet.",
  },
  {
    id: "cost",
    question: "What does care management cost?",
    answer:
      "We don’t publish a fee on this draft. Carolyn will explain how care management is paid for, and how it sits inside a Support at Home budget, when you talk. Nothing is added without that conversation.",
  },
  {
    id: "where",
    question: "Where do you work?",
    answer:
      "Melbourne. Families who write to us live across the city, from Reservoir and Thornbury to Rosanna, Fairfield, Pascoe Vale, Flemington and Airport West. If you are further out, call and ask. We would rather tell you than have you guess.",
  },
  {
    id: "language",
    question: "Does language matter?",
    answer:
      "Yes. Si Care began because Carolyn’s Italian parents could not always say what they needed to a case manager who did not share their language. We pay attention to culture, food and the language of the house. We will not claim a language we cannot actually offer.",
  },
  {
    id: "funds",
    question: "Who can see how the package is being spent?",
    answer:
      "You can. The approved provider issues the budget. We help you read it: what the services cost, what is in the plan, and whether the money is going where the person wanted it to go.",
  },
  {
    id: "no-package",
    question: "We don’t have a package yet. Can we still call?",
    answer:
      "Yes. We cannot approve one, and we can help you understand the My Aged Care path. Start with 1800 200 422 if you have not already.",
  },
];

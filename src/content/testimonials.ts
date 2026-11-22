export type Testimonial =
  | {
      type: "quote";
      id: string;
      quote: string;
      name: string;
      place: string;
    }
  | {
      type: "image";
      id: string;
      src: string;
      width: number;
      height: number;
      alt: string;
      name: string;
    };

export const testimonials: Testimonial[] = [
  {
    type: "quote",
    id: "priscilla",
    quote:
      "I honestly cannot thank you and your team enough for all that you have done for Mum. Your services were unmatched. Mum and I absolutely loved Teresa and Mary. I will forever be grateful.",
    name: "Priscilla",
    place: "Reservoir",
  },
  {
    type: "image",
    id: "priscilla-sms",
    src: "/images/testimonials/priscilla-sms.png",
    width: 264,
    height: 118,
    alt: "Text message from Priscilla thanking Carolyn and her team for help that meant more than she could have imagined.",
    name: "Priscilla",
  },
  {
    type: "quote",
    id: "mary",
    quote:
      "We would like to thank you for your personalised service and the calibre of carers provided to Mum over the past couple of years. We have no hesitation in recommending Si Care Solutions.",
    name: "Mary",
    place: "Rosanna",
  },
  {
    type: "image",
    id: "anita",
    src: "/images/testimonials/anita-sms.jpeg",
    width: 287,
    height: 399,
    alt: "Text message thanking Carolyn for the support worker who visited Mum, and saying Mum could not stop talking about how lovely she was.",
    name: "A family in touch with Carolyn",
  },
  {
    type: "quote",
    id: "nancy",
    quote:
      "You have sourced an amazing team of carers. Every one of them goes above and beyond. Even the hospital team has commented on the quality. This work changes people’s lives.",
    name: "Nancy",
    place: "Flemington",
  },
  {
    type: "image",
    id: "marie",
    src: "/images/testimonials/marie-sms.jpeg",
    width: 274,
    height: 258,
    alt: "Text message thanking Carolyn for sending a physio who relaxed Mum and made her comfortable.",
    name: "Marie",
  },
  {
    type: "quote",
    id: "anna",
    quote:
      "The best decision we made was to connect with you and your team. Thank you for the support, advice and encouragement, especially with Mum’s ongoing health.",
    name: "Anna",
    place: "Thornbury",
  },
  {
    type: "image",
    id: "viviana",
    src: "/images/testimonials/viviana-sms.jpeg",
    width: 301,
    height: 505,
    alt: "Text messages saying Mum’s first visit from her nurse could not have gone better, and that the family was happy with the plan for regular visits.",
    name: "Viviana",
  },
  {
    type: "quote",
    id: "trish",
    quote:
      "Mum is so happy with her support workers. They are amazing. We are so relieved to have found Si Care.",
    name: "Trish",
    place: "Pascoe Vale",
  },
  {
    type: "image",
    id: "cris",
    src: "/images/testimonials/cris-sms.jpeg",
    width: 274,
    height: 499,
    alt: "Text message from a daughter who had been away, thanking Carolyn for arranging care that left her mum wanting the visits to continue.",
    name: "Cris",
  },
  {
    type: "quote",
    id: "cs",
    quote:
      "Thank you for arranging the care Mum received while I was away. For such a long time she did not want any help. She was so impressed that she has asked for it to continue.",
    name: "CS",
    place: "Airport West",
  },
  {
    type: "image",
    id: "lucy",
    src: "/images/testimonials/lucy-note.png",
    width: 570,
    height: 420,
    alt: "Handwritten note to Carolyn thanking her for her patience, kindness and wisdom, and wishing her a wonderful festive season.",
    name: "Lucy",
  },
  {
    type: "quote",
    id: "nadia",
    quote:
      "Mum really likes the masseuse who visits once a fortnight. It relaxes her and they have a lovely chat. The mobile podiatrist is booked, and she is happy with the new gardener.",
    name: "Nadia",
    place: "Fairfield",
  },
  {
    type: "image",
    id: "enza",
    src: "/images/testimonials/enza-sms.png",
    width: 295,
    height: 640,
    alt: "Text message from Enza thanking Carolyn for the support that let her mother remain at home until she was 98.",
    name: "Enza",
  },
];

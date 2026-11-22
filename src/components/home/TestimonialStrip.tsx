/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

const colors = ["#8BC961", "#5C60A4", "#6750A4"] as const;
const blobShapes = [
  "/images/figma/blob-testimonial-cs.svg",
  "/images/figma/blob-testimonial-anna.svg",
  "/images/figma/blob-testimonial-priscilla.svg",
] as const;

type Card =
  | {
      kind: "photo";
      src: string;
      alt: string;
      width: string;
      height: string;
    }
  | {
      kind: "message";
      text: string;
      name: string;
    }
  | {
      kind: "quote";
      text: string;
      name: string;
    };

/**
 * Rectangle, blob, rectangle, blob.
 * Colour walks green, blue, purple.
 * Messages (screenshots or message-style text) sit in the rectangles.
 * Quotes sit in the blobs.
 * Wording is Carolyn’s published client notes, shortened with ellipses.
 */
const cards: Card[] = [
  {
    kind: "photo",
    src: "/images/figma/testimonial-image-1.png",
    alt: "Text message saying thank you, and that Mum couldn’t have been happier after her first visit from Lyn.",
    width: "min(228px,70vw)",
    height: "164px",
  },
  {
    kind: "quote",
    text: "I would like to thankyou both for arranging the fabulous care mum received whilst I was away. Mum, who for such a long time did not want any help, was so impressed the the ladies that she is has asked for this to be an ongoing service.",
    name: "CS (Airport West)",
  },
  {
    kind: "photo",
    src: "/images/figma/testimonial-image-2.png",
    alt: "Text message thanking Carolyn for sending Anita, who Mum was very happy with.",
    width: "min(221px,62vw)",
    height: "296px",
  },
  {
    kind: "quote",
    text: "Firstly I would like to take this opportunity to thank you so much for all your support, advice, assistance and encouragement in particular with mum's ongoing health issues. The best decision M and I have made was to connect in with you and your team.",
    name: "Anna (Thornbury)",
  },
  {
    kind: "photo",
    src: "/images/testimonials/viviana-sms.jpeg",
    alt: "Text messages saying Mum’s first visit from her nurse could not have gone better, and that the family was happy with the plan for regular visits.",
    width: "min(210px,58vw)",
    height: "280px",
  },
  {
    kind: "quote",
    text: "I honestly can not thank you and your team (Teresa & Mary/Maria) enough, for all that you have done for mum. … Again thankyou for everything.",
    name: "Priscilla (Reservoir)",
  },
  {
    kind: "photo",
    src: "/images/testimonials/marie-sms.jpeg",
    alt: "Text message thanking Carolyn for sending a physio who relaxed Mum and made her comfortable.",
    width: "min(220px,62vw)",
    height: "240px",
  },
  {
    kind: "quote",
    text: "We would like to take the opportunity to thank you for your personalised service and the calibre of Carers provided to Mum over the past couple of years. We have no hesitation in recommending Si Care Solutions to a family looking to have home care.",
    name: "Mary (Rosanna)",
  },
  {
    kind: "photo",
    src: "/images/testimonials/cris-sms.jpeg",
    alt: "Text message from a daughter who had been away, thanking Carolyn for arranging care that left her mum wanting the visits to continue.",
    width: "min(200px,56vw)",
    height: "280px",
  },
  {
    kind: "quote",
    text: "I just wanted to let you know that you have sourced an amazing team of carer's. Everyone of them goes above and beyond … Keep doing what you are doing because this work changes peoples lives.",
    name: "Nancy (Flemington)",
  },
  {
    kind: "message",
    text: "Brilliant! Thanks so much, your office is always so helpful and accommodating and we appreciate it.",
    name: "Cathy (Keilor East)",
  },
  {
    kind: "quote",
    text: "Carolyn, it's so lovely for mum and dad to have someone like you to make them feel at ease, and to offer wonderful personalised service. You do it naturally, and you're excellent at it. …",
    name: "Paul (Glenroy)",
  },
  {
    kind: "photo",
    src: "/images/testimonials/enza-sms.png",
    alt: "Text message from Enza thanking Carolyn for the support that let her mother remain at home until she was 98.",
    width: "min(200px,56vw)",
    height: "280px",
  },
  {
    kind: "quote",
    text: "I would like to take this opportunity to thank the team at Si Solutions for the absolute great support provided. My dad is extremely happy and it has been a huge relief to the family.",
    name: "Melina (Thomastown)",
  },
  {
    kind: "message",
    text: "You & Carolyn are amazing at what you do. Thankyou so so much xxx",
    name: "Victoria (Sydenham)",
  },
  {
    kind: "quote",
    text: "Just thought I would also let you know that the carers you have had for Mum have been all excellent Mum and the whole family have been very happy.",
    name: "Mark (Fairfield)",
  },
];

function QuoteBlob({ text, name, color, shape }: { text: string; name: string; color: string; shape: string }) {
  return (
    <figure className="relative h-[300px] w-[min(330px,76vw)] shrink-0">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundColor: color,
          WebkitMaskImage: `url(${shape})`,
          maskImage: `url(${shape})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      />
      <blockquote className="absolute inset-[18%] flex flex-col items-center justify-center overflow-hidden text-center text-[13px] leading-[1.3] text-white">
        <p>{text}</p>
        <footer className="mt-3">{name}</footer>
      </blockquote>
    </figure>
  );
}

function MessageCard({ text, name, color }: { text: string; name: string; color: string }) {
  return (
    <figure
      className="w-[min(240px,68vw)] shrink-0 rounded-[8px] border-8 bg-white px-4 py-3 text-left"
      style={{ borderColor: color }}
    >
      <blockquote className="text-[15px] leading-[1.45] text-purple">
        <p>{text}</p>
        <footer className="mt-2 font-bold">{name}</footer>
      </blockquote>
    </figure>
  );
}

function PhotoCard({
  src,
  alt,
  color,
  width,
  height,
}: {
  src: string;
  alt: string;
  color: string;
  width: string;
  height: string;
}) {
  return (
    <figure className="art relative shrink-0" style={{ width, height }}>
      <span aria-hidden className="art-shape absolute -inset-1.5 rounded-[12px]" style={{ backgroundColor: color }} />
      <div className="relative h-full overflow-hidden rounded-[8px] border-8 bg-white" style={{ borderColor: color }}>
        <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
      </div>
    </figure>
  );
}

function Set({ hidden = false }: { hidden?: boolean }) {
  const items: ReactNode = cards.map((card, index) => {
    const color = colors[index % colors.length];
    if (card.kind === "photo") {
      return (
        <PhotoCard
          key={`${card.src}-${index}`}
          src={card.src}
          alt={hidden ? "" : card.alt}
          color={color}
          width={card.width}
          height={card.height}
        />
      );
    }
    if (card.kind === "message") {
      return <MessageCard key={card.name} text={card.text} name={card.name} color={color} />;
    }
    return (
      <QuoteBlob
        key={card.name}
        text={card.text}
        name={card.name}
        color={color}
        shape={blobShapes[index % blobShapes.length]}
      />
    );
  });

  return (
    <div className="ticker-set" aria-hidden={hidden || undefined}>
      {items}
    </div>
  );
}

export function TestimonialStrip() {
  return (
    <div
      tabIndex={0}
      aria-label="Kind words from families. The row moves on its own. Hover or focus to pause."
      className="ticker overflow-hidden"
    >
      <div className="ticker-track">
        <Set />
        <Set hidden />
      </div>
    </div>
  );
}

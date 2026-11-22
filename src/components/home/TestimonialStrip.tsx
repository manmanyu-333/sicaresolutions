/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { Parallax } from "@/components/motion/Parallax";

const quotes = {
  priscilla: `I honestly can not thank you and your team (Teresa & Mary/Maria) enough, for all that you have done for mum. Your services were unmatched and client focus was impeccable. Mum and myself absolutely loved Teresa and Mary/Maria, they were both absolutely beautiful to mum and I will forever be greatful for their support as well as your support Carolyn. Your business model is fantastic and I only hope that it grows on bigger and you set an example for other businesses like yours to do better.

Again thankyou for everything.

Priscilla (Reservoir)`,
  cs: `I would like to thankyou both for arranging the fabulous care mum received whilst I was away.
Mum, who for such a long time did not want any help, was so impressed the the ladies that she is has asked for this to be an ongoing service.

CS (Airport West)`,
  anna: `Firstly I would like to take this opportunity to thank you so much for all your support, advice, assistance and encouragement in particular with mum's ongoing health issues. The best decision M and I have made was to connect in with you and your team.

Anna (Thornbury)`,
};

function Photo({
  src,
  alt,
  border,
  wash,
  className,
}: {
  src: string;
  alt: string;
  border: string;
  wash: string;
  className: string;
}) {
  return (
    <figure className={`art relative shrink-0 ${className}`}>
      <span aria-hidden className={`art-shape absolute -inset-1.5 rounded-[12px] ${wash}`} />
      <div className={`relative h-full overflow-hidden rounded-[8px] border-8 bg-white ${border}`}>
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </figure>
  );
}

function Set({ hidden = false }: { hidden?: boolean }) {
  const items: ReactNode = (
    <>
      <Parallax speed={0.04} className="relative h-[365px] w-[min(385px,78vw)] shrink-0">
        <img
          src="/images/figma/blob-testimonial-priscilla.svg"
          alt=""
          className="absolute inset-0 h-full w-full"
        />
        <blockquote className="absolute left-[19.2%] top-[19.7%] h-[60.8%] w-[56.6%] overflow-hidden text-center text-[12px] leading-[1.1] whitespace-pre-wrap text-purple">
          {quotes.priscilla}
        </blockquote>
      </Parallax>

      <Photo
        src="/images/figma/testimonial-image-1.png"
        alt="Text message saying thank you, and that Mum couldn’t have been happier after her first visit from Lyn."
        border="border-lime"
        wash="bg-lime"
        className="h-[164px] w-[min(228px,70vw)]"
      />

      <Parallax speed={0.05} className="relative h-[368px] w-[min(355px,78vw)] shrink-0">
        <img
          src="/images/figma/blob-testimonial-cs.svg"
          alt=""
          className="absolute inset-0 h-full w-full"
        />
        <blockquote className="absolute left-[24.5%] top-[30.2%] h-[60.3%] w-[54.1%] overflow-hidden text-center text-[14px] leading-[1.1] whitespace-pre-wrap text-white">
          {quotes.cs}
        </blockquote>
      </Parallax>

      <Photo
        src="/images/figma/testimonial-image-2.png"
        alt="Text message thanking Carolyn for sending Anita, who Mum was very happy with."
        border="border-lilac"
        wash="bg-lilac"
        className="h-[296px] w-[min(221px,62vw)]"
      />

      <Parallax speed={0.035} className="relative h-[299px] w-[min(330px,74vw)] shrink-0">
        <img
          src="/images/figma/blob-testimonial-anna.svg"
          alt=""
          className="absolute inset-0 h-full w-full"
        />
        <blockquote className="absolute left-[20.9%] top-[21.1%] h-[74%] w-[58.2%] overflow-hidden text-center text-[14px] leading-[1.1] whitespace-pre-wrap text-white">
          {quotes.anna}
        </blockquote>
      </Parallax>

      <Photo
        src="/images/figma/testimonial-image-3.png"
        alt="Text message from Priscilla thanking Carolyn and her team."
        border="border-purple"
        wash="bg-purple"
        className="h-[169px] w-[min(297px,78vw)]"
      />
    </>
  );

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

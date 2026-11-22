/* eslint-disable @next/next/no-img-element */
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";

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

export function TestimonialStrip() {
  return (
    <div
      tabIndex={0}
      aria-label="Kind words and messages from families"
      className="testimonial-scroller flex w-full max-w-full items-center gap-8 overflow-x-auto px-6 pb-4 md:gap-[76px] md:px-[max(1.25rem,calc((100vw-1512px)/2))]"
    >
      <Reveal className="shrink-0" delay={0}>
      <Parallax speed={0.04} className="relative h-[365px] w-[min(385px,78vw)]">
        <img
          src="/images/figma/blob-testimonial-priscilla.svg"
          alt=""
          className="absolute inset-0 h-full w-full"
        />
        <blockquote className="absolute left-[19.2%] top-[19.7%] h-[60.8%] w-[56.6%] overflow-hidden text-center text-[12px] leading-[1.1] whitespace-pre-wrap text-purple">
          {quotes.priscilla}
        </blockquote>
      </Parallax>
      </Reveal>

      <Reveal className="shrink-0" delay={80}>
      <figure className="h-[164px] w-[min(228px,70vw)] overflow-hidden rounded-[8px] border-8 border-lime bg-white">
        <img
          src="/images/figma/testimonial-image-1.png"
          alt="Text message saying thank you, and that Mum couldn’t have been happier after her first visit from Lyn."
          className="h-full w-full object-cover"
        />
      </figure>
      </Reveal>

      <Reveal className="shrink-0" delay={140}>
      <Parallax speed={0.05} className="relative h-[368px] w-[min(355px,78vw)]">
        <img
          src="/images/figma/blob-testimonial-cs.svg"
          alt=""
          className="absolute inset-0 h-full w-full"
        />
        <blockquote className="absolute left-[24.5%] top-[30.2%] h-[60.3%] w-[54.1%] overflow-hidden text-center text-[14px] leading-[1.1] whitespace-pre-wrap text-white">
          {quotes.cs}
        </blockquote>
      </Parallax>
      </Reveal>

      <Reveal className="shrink-0" delay={200}>
      <figure className="h-[296px] w-[min(221px,62vw)] overflow-hidden rounded-[8px] border-8 border-lilac bg-white">
        <img
          src="/images/figma/testimonial-image-2.png"
          alt="Text message thanking Carolyn for sending Anita, who Mum was very happy with."
          className="h-full w-full object-cover"
        />
      </figure>
      </Reveal>

      <Reveal className="shrink-0" delay={240}>
      <Parallax speed={0.035} className="relative h-[299px] w-[min(330px,74vw)]">
        <img
          src="/images/figma/blob-testimonial-anna.svg"
          alt=""
          className="absolute inset-0 h-full w-full"
        />
        <blockquote className="absolute left-[20.9%] top-[21.1%] h-[74%] w-[58.2%] overflow-hidden text-center text-[14px] leading-[1.1] whitespace-pre-wrap text-white">
          {quotes.anna}
        </blockquote>
      </Parallax>
      </Reveal>

      <Reveal className="shrink-0" delay={300}>
      <figure className="h-[169px] w-[min(297px,78vw)] overflow-hidden rounded-[8px] border-8 border-purple bg-white">
        <img
          src="/images/figma/testimonial-image-3.png"
          alt="Text message from Priscilla thanking Carolyn and her team."
          className="h-full w-full object-cover"
        />
      </figure>
      </Reveal>
    </div>
  );
}

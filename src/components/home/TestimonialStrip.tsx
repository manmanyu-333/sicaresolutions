/* eslint-disable @next/next/no-img-element */
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
      className="testimonial-scroller flex items-center gap-8 overflow-x-auto px-6 pb-4 md:gap-[76px] md:px-[max(1.25rem,calc((100vw-1512px)/2))]"
    >
      <figure className="relative h-[365px] w-[385px] shrink-0">
        <img
          src="/images/figma/blob-testimonial-priscilla.svg"
          alt=""
          className="absolute inset-0 h-full w-full"
        />
        <blockquote className="absolute left-[74px] top-[72px] h-[222px] w-[218px] overflow-hidden text-center text-[12px] leading-[1.1] whitespace-pre-wrap text-purple">
          {quotes.priscilla}
        </blockquote>
      </figure>

      <figure className="h-[164px] w-[228px] shrink-0 overflow-hidden rounded-[8px] border-8 border-lime bg-white">
        <img
          src="/images/figma/testimonial-image-1.png"
          alt="Text message saying thank you, and that Mum couldn’t have been happier after her first visit from Lyn."
          className="h-full w-full object-cover"
        />
      </figure>

      <figure className="relative h-[368px] w-[355px] shrink-0">
        <img
          src="/images/figma/blob-testimonial-cs.svg"
          alt=""
          className="absolute inset-0 h-full w-full"
        />
        <blockquote className="absolute left-[87px] top-[111px] h-[222px] w-[192px] overflow-hidden text-center text-[14px] leading-[1.1] whitespace-pre-wrap text-white">
          {quotes.cs}
        </blockquote>
      </figure>

      <figure className="h-[296px] w-[221px] shrink-0 overflow-hidden rounded-[8px] border-8 border-lilac bg-white">
        <img
          src="/images/figma/testimonial-image-2.png"
          alt="Text message thanking Carolyn for sending Anita, who Mum was very happy with."
          className="h-full w-full object-cover"
        />
      </figure>

      <figure className="relative h-[299px] w-[330px] shrink-0">
        <img
          src="/images/figma/blob-testimonial-anna.svg"
          alt=""
          className="absolute inset-0 h-full w-full"
        />
        <blockquote className="absolute left-[69px] top-[63px] h-[222px] w-[192px] overflow-hidden text-center text-[14px] leading-[1.1] whitespace-pre-wrap text-white">
          {quotes.anna}
        </blockquote>
      </figure>

      <figure className="h-[169px] w-[297px] shrink-0 overflow-hidden rounded-[8px] border-8 border-purple bg-white">
        <img
          src="/images/figma/testimonial-image-3.png"
          alt="Text message from Priscilla thanking Carolyn and her team."
          className="h-full w-full object-cover"
        />
      </figure>
    </div>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

export function ReviewsSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateControls = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxLeft = el.scrollWidth - el.clientWidth - 1;
    setCanPrev(el.scrollLeft > 1);
    setCanNext(el.scrollLeft < maxLeft);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateControls();
    const onScroll = () => updateControls();
    const onResize = () => updateControls();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateControls]);

  const scrollByCard = (direction: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card='1']");
    const step = card ? card.offsetWidth + 16 : Math.round(el.clientWidth * 0.86);
    const sign = direction === "next" ? 1 : -1;
    el.scrollBy({ left: sign * step, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="section-shell pb-24">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-goldSoft/80">Отзывы</p>
          <h2 className="mt-2 font-serif text-3xl text-ivory md:text-4xl">Клиенты о работе с нами</h2>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => scrollByCard("prev")}
            disabled={!canPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-goldSoft transition hover:bg-gold/10 disabled:cursor-default disabled:opacity-35"
            aria-label="Предыдущий отзыв"
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("next")}
            disabled={!canNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-goldSoft transition hover:bg-gold/10 disabled:cursor-default disabled:opacity-35"
            aria-label="Следующий отзыв"
          >
            {">"}
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {siteConfig.reviews.map((review) => (
          <figure
            key={review.id}
            data-review-card="1"
            className="card-premium aspect-[355/392] w-[82%] shrink-0 snap-start overflow-hidden rounded-[2rem] p-3 shadow-premiumSoft transition duration-300 hover:border-gold/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] sm:w-[50%] lg:w-[320px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
              <img
                src={review.image}
                alt={review.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover brightness-[0.8] contrast-[1.05] saturate-[0.95]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#080808]/90 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-goldSoft drop-shadow-md">
                <span className="font-semibold">{review.title}</span>
                {review.source ? <span className="text-ivory/60">{review.source}</span> : null}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

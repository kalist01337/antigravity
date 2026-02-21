"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { MessageIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

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
    const step = card ? card.offsetWidth + 24 : Math.round(el.clientWidth * 0.8) + 24;
    const sign = direction === "next" ? 1 : -1;
    el.scrollBy({ left: sign * step, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="section-shell pb-24 pt-10 sm:pb-32 sm:pt-16">
      <Reveal amount={0.1}>
        <div className="mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="flex flex-col items-start text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-goldSoft/90 backdrop-blur-sm">
              <MessageIcon className="h-3.5 w-3.5" />
              Отзывы
            </p>
            <h2 className="mt-6 font-serif text-[2.2rem] leading-tight text-ivory md:text-[3rem]">
              Клиенты о нас
            </h2>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollByCard("prev")}
              disabled={!canPrev}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] text-goldSoft transition-all hover:border-gold/30 hover:bg-gold/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:bg-[#0a0a0a] disabled:hover:shadow-none"
              aria-label="Предыдущий отзыв"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("next")}
              disabled={!canNext}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] text-goldSoft transition-all hover:border-gold/30 hover:bg-gold/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:bg-[#0a0a0a] disabled:hover:shadow-none"
              aria-label="Следующий отзыв"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </Reveal>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {siteConfig.reviews.map((review) => (
          <figure
            key={review.id}
            data-review-card="1"
            className="group relative aspect-[3/4] w-[80%] shrink-0 snap-start overflow-hidden rounded-[2rem] border border-white/5 bg-[#080808] p-4 shadow-premiumSoft transition-all duration-300 hover:-translate-y-2 hover:border-gold/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] sm:w-[50%] lg:w-[320px]"
          >
            {/* Elegant top glow */}
            <div className="absolute inset-x-0 -top-24 h-48 w-full bg-gold/5 blur-[50px] transition-all duration-500 group-hover:bg-gold/15" />

            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#111] p-1 shadow-inner">
              <img
                src={review.image}
                alt={review.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full rounded-xl object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
              <figcaption className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/80 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <span className="font-medium text-goldSoft">{review.source ?? "2ГИС"}</span>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

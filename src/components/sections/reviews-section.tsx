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
    <section id="reviews" className="section-shell pb-24 pt-10 sm:pb-32 sm:pt-16 bg-surface bg-obsidian-gradient">
      <Reveal amount={0.1}>
        <div className="mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="flex flex-col items-start text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] backdrop-blur-sm">
              <MessageIcon className="h-3.5 w-3.5" />
              Отзывы
            </p>
            <h2 className="mt-6 font-serif font-bold text-[2.2rem] leading-tight tracking-tight text-ink md:text-[3rem]">
              Клиенты о нас
            </h2>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollByCard("prev")}
              disabled={!canPrev}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surfaceSoft text-ink shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all hover:border-brand/40 hover:text-brand disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-ink"
              aria-label="Предыдущий отзыв"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("next")}
              disabled={!canNext}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surfaceSoft text-ink shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all hover:border-brand/40 hover:text-brand disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-ink"
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
            className="group relative aspect-[3/4] w-[80%] shrink-0 snap-start overflow-hidden rounded-[2rem] border border-white/10 card-premium p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 sm:w-[50%] lg:w-[320px]"
          >
            {/* Subtle top glow */}
            <div className="absolute inset-x-0 -top-24 h-48 w-full bg-brand/5 blur-[50px] transition-all duration-500 group-hover:bg-brand/10" />

            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-surfaceSoft p-1 ring-1 ring-inset ring-white/5">
              <img
                src={review.image}
                alt={review.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full rounded-xl object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 mix-blend-screen"
              />
              <figcaption className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-brand/20 bg-surface/90 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-brand shadow-md backdrop-blur-md">
                <span>{review.source ?? "2ГИС"}</span>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

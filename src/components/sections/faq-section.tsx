"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="section-shell pb-32 relative">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

        {/* Left: Sticky Header */}
        <div className="lg:sticky lg:top-32">
          <p className="inline-block rounded-full border border-brand/40 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand shadow-[inset_0_0_10px_rgba(197,160,89,0.1)] backdrop-blur-sm">FAQ</p>
          <h2 className="mt-4 font-serif font-bold text-[2rem] leading-[1.1] text-ink md:text-[2.8rem]">Частые вопросы</h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-brand/80 to-transparent" />
          <p className="mt-6 text-[1rem] md:text-[1.1rem] leading-relaxed text-inkMuted">
            Отвечаем на самые популярные вопросы о нашем подходе и форматах юридического сопровождения.
          </p>
        </div>

        {/* Right: Borderless Minimalist Accordion */}
        <div className="flex flex-col border-t border-white/10">
          {siteConfig.faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={item.question} className="border-b border-white/10 group">
                <button
                  type="button"
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  className="flex w-full items-center justify-between gap-6 py-6 md:py-8 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif text-[1.05rem] md:text-[1.25rem] font-bold transition-all duration-300 ${isOpen ? "text-brand" : "text-ink group-hover:text-brandSoft"}`}>
                    {item.question}
                  </span>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-brand bg-brand/10 text-brand rotate-45" : "border-white/10 text-inkMuted group-hover:border-brand/40 group-hover:text-brand"}`}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="pb-8 pr-8 md:pr-12 text-[0.95rem] md:text-[1rem] leading-relaxed text-inkMuted">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

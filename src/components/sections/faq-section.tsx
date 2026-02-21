"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="section-shell pb-24 relative">
      <div className="mb-10 text-center sm:text-left relative z-10">
        <p className="inline-block rounded-full border border-brand/40 bg-brand/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] backdrop-blur-sm">FAQ</p>
        <h2 className="mt-4 font-serif font-bold text-[2.2rem] text-ink md:text-[3rem]">Частые вопросы</h2>
      </div>

      <div className="space-y-3 mx-auto max-w-4xl">
        {siteConfig.faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article key={item.question} className="overflow-hidden rounded-2xl border border-white/5 bg-surfaceSoft/80 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:border-white/10">
              <button
                type="button"
                onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                className="flex w-full items-center justify-between gap-5 p-5 text-left transition-colors hover:bg-white/5"
                aria-expanded={isOpen}
              >
                <span className={`text-sm font-bold md:text-base transition-colors ${isOpen ? "text-brandSoft" : "text-ink"}`}>
                  {item.question}
                </span>
                <span className={`text-xl leading-none transition-transform duration-300 ${isOpen ? "rotate-45 text-brand" : "text-inkMuted"}`}>
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="content"
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
                    exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 pb-5 text-sm md:text-base leading-relaxed text-inkSoft">{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}

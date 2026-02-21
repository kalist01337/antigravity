"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="section-shell pb-24">
      <div className="mb-10 text-center sm:text-left">
        <p className="inline-block rounded-full bg-brand/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand">FAQ</p>
        <h2 className="mt-4 font-extrabold text-[2.2rem] text-ink md:text-[3rem]">Частые вопросы</h2>
      </div>

      <div className="space-y-3 mx-auto max-w-4xl">
        {siteConfig.faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
              <button
                type="button"
                onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                className="flex w-full items-center justify-between gap-5 p-5 text-left transition-colors hover:bg-slate-50"
                aria-expanded={isOpen}
              >
                <span className={`text-sm font-bold md:text-base transition-colors ${isOpen ? "text-brand" : "text-ink"}`}>
                  {item.question}
                </span>
                <span className={`text-xl leading-none transition-transform duration-300 ${isOpen ? "rotate-45 text-brand" : "text-slate-400"}`}>
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

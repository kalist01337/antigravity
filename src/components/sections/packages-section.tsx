import { BriefcaseIcon, CheckCircleIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

export function PackagesSection() {
  return (
    <section id="packages" className="section-shell scroll-mt-24 pb-24 sm:scroll-mt-28 lg:scroll-mt-32">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-goldSoft/80">
            <BriefcaseIcon className="h-4 w-4" />
            Тарифы
          </p>
          <h2 className="mt-2 font-serif text-3xl text-ivory md:text-4xl">Пакеты сопровождения</h2>
        </div>
        <div className="hidden h-px w-48 bg-gold-line md:block" />
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {siteConfig.packages.map((plan) => (
          <article
            key={plan.name}
            className="card-premium group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 shadow-premiumSoft transition duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="relative z-10 w-full">
              {plan.recommended ? (
                <span className="absolute right-0 top-0 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-[#0d0d0d] px-3.5 py-1.5 text-[0.68rem] uppercase tracking-wider text-gold shadow-sm">
                  <CheckCircleIcon className="h-3 w-3" />
                  Рекомендуем
                </span>
              ) : null}
              <h3 className="pr-32 font-serif text-[1.65rem] leading-tight text-ivory">{plan.name}</h3>
              <p className="mt-4 font-serif text-[1.75rem] text-goldSoft drop-shadow-sm">{plan.price}</p>
              <ul className="mt-7 mb-8 space-y-3.5 text-[15px] text-ivory/80">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex w-full items-start gap-3 leading-relaxed">
                    <CheckCircleIcon className="mt-[2px] h-4 w-4 shrink-0 text-gold/80" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contacts"
              className="relative z-10 inline-flex w-full items-center justify-center rounded-full border border-gold/30 bg-[#0d0d0d]/40 px-5 py-3 text-[15px] font-medium text-goldSoft transition duration-300 hover:border-gold/60 hover:bg-gold/15 hover:shadow-goldGlow"
            >
              Оставить заявку
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
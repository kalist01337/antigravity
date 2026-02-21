import { BriefcaseIcon, CheckCircleIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

export function PackagesSection() {
  return (
    <section id="packages" className="section-shell scroll-mt-24 pb-32 sm:scroll-mt-28 lg:scroll-mt-32">
      <div className="mb-16 flex flex-col items-center text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-goldSoft/90 backdrop-blur-sm">
          <BriefcaseIcon className="h-3.5 w-3.5" />
          Тарифы
        </p>
        <h2 className="mt-6 font-serif text-[2.2rem] leading-tight text-ivory drop-shadow-lg md:text-[3rem] lg:text-[4rem]">
          Пакеты сопровождения
        </h2>
      </div>

      <div className="mx-auto flex max-w-[900px] flex-col gap-6 lg:gap-8 pb-10">
        {siteConfig.packages.map((plan, index) => {
          // Calculate dynamic top offset so cards stack nicely 
          // Card 0: top-32, Card 1: top-40, Card 2: top-48
          const topOffset = `calc(8rem + ${index * 2}rem)`;
          // Slight progressive scaling and opacity to enhance the 3D stacking depth
          const depthScale = 1 - (siteConfig.packages.length - 1 - index) * 0.02;

          return (
            <article
              key={plan.name}
              className="card-premium sticky z-10 flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#080808] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-gold/30 hover:shadow-goldGlow lg:flex-row lg:items-center lg:p-12"
              style={{ top: topOffset, transform: `scale(${depthScale})` }}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/5 blur-[80px]" />

              <div className="relative z-10 w-full lg:w-1/2">
                {plan.recommended ? (
                  <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[0.68rem] uppercase tracking-wider text-gold shadow-sm">
                    <CheckCircleIcon className="h-3.5 w-3.5" />
                    Рекомендуем
                  </span>
                ) : null}
                <h3 className="font-serif text-[2rem] leading-tight text-ivory lg:text-[2.5rem]">{plan.name}</h3>
                <p className="mt-4 font-serif text-[1.8rem] text-goldSoft lg:text-[2.2rem]">{plan.price}</p>

                <a
                  href="#contacts"
                  className="mt-8 hidden lg:inline-flex w-fit items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldSoft px-8 py-3.5 text-[15px] font-bold uppercase tracking-wider text-[#050505] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  Оформить заявку
                </a>
              </div>

              <div className="relative z-10 mt-8 w-full border-t border-white/5 pt-8 lg:mt-0 lg:w-1/2 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <ul className="space-y-4 text-[15px] text-ivory/80 lg:text-[16px]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex w-full items-start gap-3 leading-relaxed">
                      <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                        <CheckCircleIcon className="h-3 w-3" />
                      </div>
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacts"
                  className="mt-10 inline-flex lg:hidden w-full items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldSoft px-6 py-3.5 text-[15px] font-bold uppercase tracking-wider text-[#050505] transition-all"
                >
                  Оформить заявку
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
import { BriefcaseIcon, CheckCircleIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

export function PackagesSection() {
  return (
    <section id="packages" className="section-shell scroll-mt-24 pb-32 pt-16 sm:scroll-mt-28 lg:scroll-mt-32 relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mb-16 flex flex-col items-center text-center relative z-10">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] backdrop-blur-sm">
          <BriefcaseIcon className="h-3.5 w-3.5" />
          Тарифы
        </p>
        <h2 className="mt-6 font-serif font-bold text-[2.2rem] leading-tight tracking-tight text-ink md:text-[3rem] lg:text-[4rem]">
          Пакеты сопровождения
        </h2>
      </div>

      <div className="mx-auto flex max-w-[950px] flex-col gap-6 lg:gap-8 pb-10 relative">
        {siteConfig.packages.map((plan, index) => {
          const topOffset = `calc(8rem + ${index * 2}rem)`;
          const depthScale = 1 - (siteConfig.packages.length - 1 - index) * 0.02;

          const isHighlight = plan.recommended;

          return (
            <article
              key={plan.name}
              className={`sticky z-10 flex flex-col justify-between overflow-hidden rounded-[2.5rem] border backdrop-blur-md shadow-2xl transition-all duration-500 lg:flex-row lg:items-center lg:p-12 p-8 ${isHighlight
                ? "bg-surfaceSoft/80 border-brand/40 shadow-goldGlow"
                : "bg-surface/60 border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                }`}
              style={{ top: topOffset, transform: `scale(${depthScale})` }}
            >
              {isHighlight && (
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/10 blur-[80px]" />
              )}

              <div className="relative z-10 w-full lg:w-1/2">
                {isHighlight && (
                  <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-brandSoft shadow-[inset_0_0_10px_rgba(212,175,55,0.1)]">
                    <CheckCircleIcon className="h-3 w-3" />
                    Рекомендуем
                  </span>
                )}
                <h3 className={`font-serif font-bold text-[2rem] leading-tight lg:text-[2.5rem] ${isHighlight ? "text-brandSoft" : "text-ink"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 font-bold text-[1.5rem] lg:text-[2rem] ${isHighlight ? "text-transparent bg-clip-text bg-brand-gradient" : "text-inkMuted"}`}>
                  {plan.price}
                </p>

                <a
                  href="#contacts"
                  className={`mt-8 hidden lg:inline-flex w-fit items-center justify-center rounded-full px-8 py-3.5 text-[14px] font-bold tracking-wide transition-all shadow-sm hover:scale-105 ${isHighlight
                    ? "bg-gradient-to-r from-brand to-brandDark text-[#111] shadow-goldGlow border border-brand/50 hover:-translate-y-1"
                    : "bg-surfaceSoft text-ink border border-white/10 hover:bg-white/5 hover:-translate-y-1"
                    }`}
                >
                  Оформить заявку
                </a>
              </div>

              <div className={`relative z-10 mt-8 w-full border-t pt-8 lg:mt-0 lg:w-1/2 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 ${isHighlight ? "border-brand/20" : "border-white/10"}`}>
                <ul className="space-y-4 text-[15px] lg:text-[16px]">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex w-full items-start gap-3 leading-relaxed ${isHighlight ? "text-inkSoft" : "text-inkMuted"}`}>
                      <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isHighlight ? "bg-brand/20 text-brandSoft" : "bg-white/5 text-inkSoft"}`}>
                        <CheckCircleIcon className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacts"
                  className={`mt-10 inline-flex lg:hidden w-full items-center justify-center rounded-full px-6 py-3.5 text-[14px] font-bold tracking-wide transition-all ${isHighlight
                    ? "bg-gradient-to-r from-brand to-brandDark text-[#111] shadow-goldGlow border border-brand/50"
                    : "bg-surfaceSoft text-ink border border-white/10"
                    }`}
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
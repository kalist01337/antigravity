import { ScaleIcon, BriefcaseIcon, ShieldIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

const getIconForIndex = (index: number) => {
  if (index % 3 === 0) return <BriefcaseIcon className="h-6 w-6" />;
  if (index % 2 === 0) return <ShieldIcon className="h-6 w-6" />;
  return <ScaleIcon className="h-6 w-6" />;
};

export function ServicesSection() {
  return (
    <section id="services" className="section-shell pb-24 lg:pb-32 bg-surface">
      <Reveal className="mb-12 lg:mb-16 pt-16" amount={0.1}>
        <div className="flex flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] backdrop-blur-sm">
            <ScaleIcon className="h-3.5 w-3.5" />
            Компетенции
          </p>
          <h2 className="mt-6 font-serif font-bold text-[2.2rem] leading-tight tracking-tight text-ink md:text-[3.5rem]">
            Юридическая практика
          </h2>
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
        </div>
      </Reveal>

      <Reveal amount={0.1}>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => {
            const Icon = getIconForIndex(index);

            return (
              <article
                key={service}
                className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl card-premium p-8 ${index === siteConfig.services.length - 1 && siteConfig.services.length % 3 === 1
                    ? "lg:col-start-2"
                    : ""
                  }`}
              >
                {/* Subtle top glow */}
                <div className="absolute inset-x-0 -top-24 h-48 w-full bg-brand/5 blur-[50px] transition-all duration-500 group-hover:bg-brand/15" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-surfaceSoft text-brand shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] ring-1 ring-inset ring-brand/20 transition-all duration-500 group-hover:bg-brand/10 group-hover:scale-110 group-hover:ring-brand/40 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    {Icon}
                  </div>

                  <h3 className="font-serif font-bold text-[1.15rem] leading-snug text-ink transition-colors group-hover:text-brandSoft md:text-[1.25rem]">
                    {service}
                  </h3>
                </div>

                {/* Decorative element at bottom */}
                <div className="relative z-10 mt-8 flex items-center gap-3 opacity-0 transition-all duration-500 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="h-px w-8 bg-brand/40" />
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-brand">Подробнее</span>
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

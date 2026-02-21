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
    <section id="services" className="section-shell pb-24 lg:pb-32">
      <Reveal className="mb-12 lg:mb-16" amount={0.1}>
        <div className="flex flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-goldSoft/90 backdrop-blur-sm">
            <ScaleIcon className="h-3.5 w-3.5" />
            Компетенции
          </p>
          <h2 className="mt-6 font-serif text-[2.2rem] leading-tight text-ivory drop-shadow-lg md:text-[3.5rem]">
            Юридическая практика
          </h2>
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>
      </Reveal>

      <Reveal amount={0.1}>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => {
            const Icon = getIconForIndex(index);

            return (
              <article
                key={service}
                className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#080808] p-8 shadow-premiumSoft transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Elegant top glow */}
                <div className="absolute inset-x-0 -top-24 h-48 w-full bg-gold/5 blur-[50px] transition-all duration-500 group-hover:bg-gold/15" />

                {/* Subtle bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gold/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#111] text-goldSoft shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:border-gold/40 group-hover:bg-gold/10 group-hover:text-gold">
                    {Icon}
                  </div>

                  <h3 className="font-serif text-[1.25rem] leading-snug text-ivory/90 transition-colors group-hover:text-ivory md:text-[1.35rem]">
                    {service}
                  </h3>
                </div>

                {/* Decorative element at bottom */}
                <div className="relative z-10 mt-8 flex items-center gap-3 opacity-0 transition-all duration-500 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="h-px w-8 bg-gold/50" />
                  <span className="text-[0.65rem] uppercase tracking-widest text-goldSoft">Подробнее</span>
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

import { ScaleIcon, BriefcaseIcon, ShieldIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

const getBentoClasses = (index: number) => {
  const pattern = [
    "md:col-span-2 md:row-span-2 bg-gradient-to-br from-black/80 to-[#111] border-gold/30 hover:border-gold/60", // 0: Large feature
    "md:col-span-1 md:row-span-1 bg-black/40 border-white/5 hover:border-gold/30",   // 1: Small regular
    "md:col-span-1 md:row-span-1 bg-black/40 border-white/5 hover:border-gold/30",   // 2: Small regular
    "md:col-span-2 md:row-span-1 bg-gradient-to-r from-gold/10 to-transparent border-gold/20 hover:border-gold/40 text-left", // 3: Horizontal wide
    "md:col-span-1 md:row-span-2 bg-[#0a0a0a] border-white/10 hover:border-gold/40", // 4: Vertical tall
    "md:col-span-1 md:row-span-1 bg-black/40 border-white/5 hover:border-gold/30",   // 5: Small regular
    "md:col-span-2 md:row-span-1 bg-[#111] border-white/10 hover:border-gold/30",    // 6: Horizontal wide
  ];
  return pattern[index % pattern.length];
};

const getIconForIndex = (index: number) => {
  if (index % 3 === 0) return <BriefcaseIcon className="h-5 w-5" />;
  if (index % 2 === 0) return <ShieldIcon className="h-5 w-5" />;
  return <ScaleIcon className="h-5 w-5" />;
};

export function ServicesSection() {
  return (
    <section id="services" className="section-shell pb-24 lg:pb-32">
      <Reveal className="mb-12 lg:mb-16" amount={0.1}>
        <div className="flex flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-goldSoft/90 backdrop-blur-sm">
            <ScaleIcon className="h-3.5 w-3.5" />
            Практика
          </p>
          <h2 className="mt-6 font-serif text-[2.2rem] leading-tight text-ivory drop-shadow-lg md:text-[3rem] lg:text-[4rem]">
            Юридические услуги
          </h2>
        </div>
      </Reveal>

      <Reveal amount={0.1}>
        {/* Bento Box Grid */}
        <div className="grid auto-rows-[160px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
          {siteConfig.services.map((service, index) => {
            const bentoStyles = getBentoClasses(index);
            const isLarge = bentoStyles.includes("md:row-span-2");
            const Icon = getIconForIndex(index);

            return (
              <article
                key={service}
                className={`group relative flex flex-col justify-end overflow-hidden rounded-[2rem] border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] ${bentoStyles}`}
              >
                {/* Decorative background glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/5 blur-[50px] transition-all duration-500 group-hover:bg-gold/15 group-hover:blur-[60px]" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-goldSoft shadow-sm backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-gold/40 group-hover:bg-gold/10 group-hover:text-gold">
                    {Icon}
                  </div>

                  <div>
                    <h3 className={`font-serif text-ivory/90 transition-colors group-hover:text-ivory ${isLarge ? 'text-2xl lg:text-3xl' : 'text-lg'}`}>
                      {service}
                    </h3>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

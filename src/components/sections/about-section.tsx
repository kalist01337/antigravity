import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { CheckCircleIcon, ShieldIcon } from "@/components/ui/icons";

export function AboutSection() {
  return (
    <section id="about" className="section-shell pb-24 pt-10 sm:pb-32 sm:pt-16 bg-surface">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">

          {/* Left: Sticky Intro */}
          <div className="lg:sticky lg:top-32 h-fit">
            <Reveal className="flex flex-col items-start text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand shadow-[inset_0_0_10px_rgba(197,160,89,0.1)] backdrop-blur-sm">
                <ShieldIcon className="h-3.5 w-3.5" />
                О центре
              </p>

              <h2 className="mt-8 font-serif font-bold text-[2.5rem] leading-[1.1] tracking-tight text-ink md:text-[3.5rem]">
                {siteConfig.about.title}
              </h2>

              <div className="mt-8 h-px w-24 bg-gradient-to-r from-brand/80 to-transparent" />

              <p className="mt-8 text-[1.1rem] leading-relaxed text-inkMuted max-w-md">
                {siteConfig.about.intro}
              </p>
            </Reveal>
          </div>

          {/* Right: Dynamic Bento Box / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Map approach to 4 distinct cards */}
            {siteConfig.about.approach.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/5 bg-surfaceSoft/40 p-8 min-h-[220px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-brand/30 hover:-translate-y-1 hover:bg-surfaceSoft/60 backdrop-blur-sm">
                  <span className="font-serif text-[3.5rem] font-bold text-white/5 transition-colors duration-500 group-hover:text-brand/20">
                    0{i + 1}
                  </span>
                  <p className="text-[1.05rem] font-medium leading-relaxed text-inkSoft group-hover:text-ink mt-6">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}

            {/* 5th wide element for the office image */}
            <Reveal delay={0.4} className="sm:col-span-2">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/5 h-[300px] group shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-x-0 -top-24 h-48 w-full bg-brand/10 blur-[50px] transition-all duration-500 z-10" />
                <img
                  src={siteConfig.media.officeImage}
                  alt="Офис Legal Protection"
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-40 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-60 mix-blend-luminosity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent z-10" />
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <p className="font-serif font-bold text-2xl text-ink">Комплексный подход</p>
                  <p className="mt-2 text-[15px] font-medium text-inkSoft max-w-lg">Мы строим устойчивую юридическую опору, чтобы вы могли сосредоточиться на главном.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

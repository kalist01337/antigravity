import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { CheckCircleIcon, ShieldIcon } from "@/components/ui/icons";

export function AboutSection() {
  return (
    <section id="about" className="section-shell pb-24 pt-10 sm:pb-32 sm:pt-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-center">

          {/* Left Content */}
          <Reveal className="flex flex-col items-start text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-goldSoft/90 backdrop-blur-sm">
              <ShieldIcon className="h-3.5 w-3.5" />
              О центре
            </p>

            <h2 className="mt-6 font-serif text-[2.2rem] leading-tight text-ivory md:text-[3rem]">
              {siteConfig.about.title}
            </h2>

            <div className="mt-6 h-px w-20 bg-gradient-to-r from-gold/50 to-transparent" />

            <p className="mt-8 text-[16px] leading-relaxed text-ivory/80 md:text-[17px] font-light">
              {siteConfig.about.intro}
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {siteConfig.about.approach.map((item, i) => (
                <div key={item} className="group flex items-start gap-4">
                  <div className="mt-1 flex shrink-0 items-center justify-center p-1.5 rounded-full bg-[#111] border border-white/10 text-goldSoft shadow-sm transition-colors group-hover:bg-gold/10 group-hover:border-gold/30">
                    <CheckCircleIcon className="h-4 w-4" />
                  </div>
                  <p className="text-[15px] leading-relaxed text-ivory/80 transition-colors group-hover:text-ivory">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Image Container */}
          <Reveal delay={0.2} className="relative w-full">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#080808] shadow-[0_20px_50px_rgba(0,0,0,0.6)] sm:aspect-[4/3] lg:aspect-[4/5]">
              {/* Image Base */}
              <img
                src={siteConfig.media.officeImage}
                alt="Офис Legal Protection"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />

              {/* Premium Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md">
                <p className="font-serif text-lg text-ivory">Комплексный подход</p>
                <p className="mt-2 text-sm text-ivory/70">Мы строим устойчивую юридическую опору, чтобы вы могли сосредоточиться на главном.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

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
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
              <ShieldIcon className="h-3.5 w-3.5" />
              О центре
            </p>

            <h2 className="mt-6 font-extrabold text-[2.2rem] leading-tight tracking-tight text-ink md:text-[3rem]">
              {siteConfig.about.title}
            </h2>

            <div className="mt-6 h-px w-20 bg-gradient-to-r from-brand/50 to-transparent" />

            <p className="mt-8 text-[16px] leading-relaxed text-inkSoft md:text-[17px]">
              {siteConfig.about.intro}
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {siteConfig.about.approach.map((item, i) => (
                <div key={item} className="group flex items-start gap-4">
                  <div className="mt-1 flex shrink-0 items-center justify-center p-1.5 rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand/20">
                    <CheckCircleIcon className="h-4 w-4" />
                  </div>
                  <p className="text-[15px] leading-relaxed text-inkSoft font-medium transition-colors group-hover:text-ink">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Image Container */}
          <Reveal delay={0.2} className="relative w-full">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl shadow-brand/5 sm:aspect-[4/3] lg:aspect-[4/5] group">
              {/* Image Base */}
              <img
                src={siteConfig.media.officeImage}
                alt="Офис Legal Protection"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/5 rounded-[2.5rem]" />

              {/* Floating Badge (Light) */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 rounded-2xl border border-white bg-white/90 p-5 shadow-xl backdrop-blur-md">
                <p className="font-bold text-lg text-ink">Комплексный подход</p>
                <p className="mt-1 text-sm text-inkSoft font-medium">Мы строим устойчивую юридическую опору, чтобы вы могли сосредоточиться на главном.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

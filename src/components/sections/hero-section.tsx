import {
  CheckCircleIcon,
  MessageIcon,
  PenSquareIcon,
  ShieldIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";
import { AdaptiveHeroMedia } from "@/components/ui/adaptive-hero-media";

export function HeroSection() {
  const actionButtonBase =
    "inline-flex h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-[14px] font-bold tracking-wide transition-all duration-300";

  return (
    <section className="relative flex min-h-[100dvh] items-center pb-12 pt-32 sm:pb-24 sm:pt-40 bg-surface">
      {/* Absolute Full-Screen Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AdaptiveHeroMedia videoSrc={siteConfig.media.heroVideo} posterSrc={siteConfig.media.heroImage} />
        {/* Soft gradient to fade out the bottom of the video into the surface color */}
        <div className="absolute inset-0 bg-surface/50 sm:bg-surface/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
        {/* Decorative subtle gold glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 via-transparent to-brand/10 mix-blend-overlay" />
      </div>

      <div className="section-shell relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <Reveal replay>
            <div className="flex flex-col items-center text-center">
              {/* Modern Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-surfaceSoft/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand shadow-[inset_0_0_10px_rgba(197,160,89,0.1)] backdrop-blur-md">
                <ShieldIcon className="h-3.5 w-3.5" />
                {siteConfig.brand.subtitle}
              </div>

              {/* Bold Typography */}
              <h1 className="font-serif font-bold text-[2.5rem] leading-[1.05] tracking-tight text-ink sm:text-[3.8rem] md:text-[4.5rem]">
                Правовая защита <br />
                <span className="text-transparent bg-clip-text bg-brand-gradient drop-shadow-[0_0_15px_rgba(197,160,89,0.2)]">нового уровня</span>
              </h1>

              <p className="mt-6 text-[16px] leading-relaxed text-inkSoft sm:mt-8 sm:text-[18px] md:text-[20px] max-w-2xl text-shadow-sm">
                Помогаем населению и бизнесу решать правовые задачи спокойно, последовательно и в понятных сроках.
              </p>

              {/* Primary Actions */}
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#contacts"
                  className={`${actionButtonBase} bg-gradient-to-r from-brand to-brandDark text-[#111] shadow-goldGlow hover:scale-105 hover:-translate-y-1 border border-brand/50`}
                >
                  <PenSquareIcon className="h-4 w-4" />
                  Оставить заявку
                </a>
                <a
                  href={siteConfig.contacts.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`${actionButtonBase} bg-surfaceSoft/50 text-ink hover:bg-surfaceSoft border border-white/20 hover:border-brand/40 backdrop-blur-md`}
                >
                  <MessageIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              {/* Clean Trust Points */}
              <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 sm:mt-16">
                {siteConfig.hero.trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-inkSoft backdrop-blur-sm bg-surfaceSoft/30 px-3 py-1.5 rounded-full border border-white/5">
                    <CheckCircleIcon className="h-4 w-4 text-brand" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

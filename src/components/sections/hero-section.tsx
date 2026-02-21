import {
  CheckCircleIcon,
  MessageIcon,
  PenSquareIcon,
  PhoneIcon,
  ShieldIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";
import { AdaptiveHeroMedia } from "@/components/ui/adaptive-hero-media";

export function HeroSection() {
  const actionButtonBase =
    "inline-flex h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-full border px-6 text-[13px] font-semibold tracking-wide transition-all duration-300 sm:h-[48px]";

  return (
    <section className="relative flex min-h-[100dvh] items-center pb-12 pt-28 sm:pb-24 sm:pt-32">
      {/* Full-bleed Immersive Media Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <AdaptiveHeroMedia videoSrc={siteConfig.media.heroVideo} posterSrc={siteConfig.media.heroImage} />

        {/* Cinematic Vignette Overlay to guarantee text legibility */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(5,5,5,0.8)_100%)]" />
      </div>

      <div className="section-shell relative z-10 w-full flex flex-col items-center text-center">
        <Reveal replay>
          <div className="flex flex-col items-center">
            {/* Elegant Subtitle */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/40 px-5 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-goldSoft/90 shadow-[0_0_20px_rgba(212,175,55,0.1)] backdrop-blur-md">
              <ShieldIcon className="h-3.5 w-3.5 text-gold" />
              {siteConfig.brand.subtitle}
            </div>

            {/* Perfectly Scaled Typography */}
            <h1 className="max-w-[1000px] font-serif text-[2.2rem] leading-[1.1] text-ivory drop-shadow-2xl sm:text-[3rem] md:text-[3.8rem]">
              Legal Protection <span className="text-goldSoft">—</span> Помогаем населению и бизнесу решать правовые задачи
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ivory/80 sm:mt-8 sm:text-[16px] md:text-[17px] font-light">
              Спокойно, последовательно и в понятных сроках.
            </p>

            {/* Primary Actions */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 sm:mt-12">
              <a
                href="#contacts"
                className={`${actionButtonBase} border-transparent bg-gradient-to-r from-gold to-goldSoft text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]`}
              >
                <PenSquareIcon className="h-4 w-4" />
                Оставить заявку
              </a>
              <a
                href={siteConfig.contacts.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={`${actionButtonBase} border-white/20 bg-white/5 text-ivory backdrop-blur-md hover:border-gold/50 hover:bg-gold/10 hover:text-goldSoft hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
              >
                <MessageIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={siteConfig.contacts.phoneHref}
                className={`${actionButtonBase} hidden sm:inline-flex border-white/20 bg-black/40 text-ivory backdrop-blur-md hover:border-white/40 hover:bg-white/10`}
              >
                <PhoneIcon className="h-4 w-4" />
                Позвонить
              </a>
            </div>

            {/* Premium Trust Points Banner */}
            <div className="mt-16 flex flex-wrap justify-center gap-3 sm:mt-20">
              {siteConfig.hero.trustPoints.map((point) => (
                <div key={point} className="group relative overflow-hidden rounded-full border border-white/10 bg-black/30 px-5 py-2.5 text-[0.8rem] text-ivory/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gold/40 hover:bg-black/60 hover:text-goldSoft">
                  <div className="absolute inset-0 bg-gold/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10 flex items-center gap-2">
                    <CheckCircleIcon className="h-3.5 w-3.5 text-gold/80 group-hover:text-gold" />
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <span className="text-[0.6rem] uppercase tracking-widest text-ivory/50">Вниз</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-ivory/50 to-transparent" />
      </div>
    </section>
  );
}

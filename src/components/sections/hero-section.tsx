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
    <section className="relative flex min-h-[100dvh] items-center pb-12 pt-32 sm:pb-24 sm:pt-40 overflow-hidden bg-surface bg-obsidian-gradient">
      <div className="section-shell relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-8 items-center">

          {/* Left: Typography & Actions */}
          <Reveal replay>
            <div className="flex flex-col items-start text-left max-w-2xl">
              {/* Modern Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] backdrop-blur-sm">
                <ShieldIcon className="h-3.5 w-3.5" />
                {siteConfig.brand.subtitle}
              </div>

              {/* Bold Typography */}
              <h1 className="font-serif font-bold text-[2.5rem] leading-[1.05] tracking-tight text-ink sm:text-[3.8rem] md:text-[4.5rem]">
                Правовая защита <br />
                <span className="text-transparent bg-clip-text bg-brand-gradient">нового уровня</span>
              </h1>

              <p className="mt-6 text-[16px] leading-relaxed text-inkMuted sm:mt-8 sm:text-[18px] md:text-[20px] max-w-xl">
                Помогаем населению и бизнесу решать правовые задачи спокойно, последовательно и в понятных сроках.
              </p>

              {/* Primary Actions */}
              <div className="mt-10 flex flex-wrap gap-4">
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
                  className={`${actionButtonBase} bg-white/5 text-ink hover:bg-white/10 border border-white/20 hover:border-brand/40 backdrop-blur-sm`}
                >
                  <MessageIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              {/* Clean Trust Points */}
              <div className="mt-12 flex flex-wrap gap-4 sm:mt-16">
                {siteConfig.hero.trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-2 text-[13px] font-medium text-inkSoft">
                    <CheckCircleIcon className="h-4 w-4 text-brand" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: Floating Device/Media Frame */}
          <Reveal delay={0.2} className="relative hidden lg:block w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-black shadow-[0_0_50px_rgba(212,175,55,0.15)] transform rotate-1 hover:rotate-0 transition-all duration-700 hover:shadow-[0_0_80px_rgba(212,175,55,0.25)]">
              <AdaptiveHeroMedia videoSrc={siteConfig.media.heroVideo} posterSrc={siteConfig.media.heroImage} />

              {/* Inner subtle glow */}
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(212,175,55,0.2)] rounded-[2.5rem] pointer-events-none" />
            </div>

            {/* Decorative blob behind the video */}
            <div className="absolute -inset-10 -z-10 bg-brand/10 blur-[120px] rounded-full mix-blend-screen" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

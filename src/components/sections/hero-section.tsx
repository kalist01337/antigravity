import {
  CheckCircleIcon,
  MessageIcon,
  PenSquareIcon,
  PhoneIcon,
  ShieldIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const actionButtonBase =
    "inline-flex h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-full border px-6 text-[14px] font-medium transition-all duration-300 sm:h-[54px]";

  return (
    <section className="relative flex min-h-[100dvh] items-center pb-14 pt-24 sm:pb-28 sm:pt-32 lg:pt-36">
      <div className="section-shell relative z-10 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-8 items-center">

          {/* Left Column: Cinematic Typography */}
          <Reveal replay className="flex flex-col items-start text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-black/40 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-goldSoft/90 shadow-premiumSoft backdrop-blur-md">
              <ShieldIcon className="h-3.5 w-3.5 text-gold" />
              {siteConfig.brand.subtitle}
            </div>

            <h1 className="font-serif text-[2.5rem] leading-[1.05] text-ivory drop-shadow-xl sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] lg:tracking-tight">
              {siteConfig.hero.title}
            </h1>

            {siteConfig.hero.text ? (
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ivory/70 sm:mt-8 sm:text-[18px] md:text-[19px] font-light">
                {siteConfig.hero.text}
              </p>
            ) : null}

            <div className="mt-10 flex flex-wrap gap-4 sm:mt-12">
              <a
                href="#contacts"
                className={`${actionButtonBase} border-transparent bg-ivory text-[#050505] hover:bg-goldSoft hover:text-[#050505] shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-goldGlow`}
              >
                <PenSquareIcon className="h-4 w-4" />
                Получить помощь
              </a>
              <a
                href={siteConfig.contacts.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={`${actionButtonBase} border-white/20 bg-white/5 text-ivory backdrop-blur-md hover:border-gold/50 hover:bg-gold/10 hover:text-goldSoft`}
              >
                <MessageIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Right Column: Abstract / Floating Trust Points (Bento style) */}
          <Reveal replay delay={0.2} className="hidden lg:flex flex-col gap-4 relative">
            {/* The right side operates as a transparent overlay frame */}
            <div className="relative w-full rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gold/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[100px]" />

              <h3 className="relative z-10 mb-6 font-serif text-2xl text-ivory/90">Почему нам доверяют</h3>

              <div className="relative z-10 flex flex-col gap-4">
                {siteConfig.hero.trustPoints.map((point, i) => (
                  <div
                    key={point}
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-black/40 p-4 transition-all duration-300 hover:border-gold/30 hover:bg-black/60"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="flex shrink-0 items-center justify-center p-2 rounded-full bg-gold/10 text-gold group-hover:bg-gold/20">
                      <CheckCircleIcon className="h-5 w-5" />
                    </div>
                    <span className="text-[15px] text-ivory/80 group-hover:text-ivory">{point}</span>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-8 flex items-center justify-between rounded-xl border border-gold/20 bg-gold/5 p-4">
                <div className="text-sm text-goldSoft">Экстренная связь</div>
                <a href={siteConfig.contacts.phoneHref} className="flex items-center gap-2 font-semibold text-ivory hover:text-gold transition-colors">
                  <PhoneIcon className="h-4 w-4" />
                  {siteConfig.contacts.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

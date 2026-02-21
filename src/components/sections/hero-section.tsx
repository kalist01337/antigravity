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
    "inline-flex h-[48px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border px-6 text-[15px] font-semibold leading-none transition duration-300 sm:h-[54px] sm:w-[210px]";

  return (
    <section className="section-shell pb-14 pt-12 sm:pb-28 sm:pt-16 lg:pt-28">
      <Reveal replay>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-[#0d0d0d]/80 px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-goldSoft/90 shadow-premiumSoft">
          <ShieldIcon className="h-3.5 w-3.5 text-gold" />
          {siteConfig.brand.subtitle}
        </p>
        <h1 className="font-serif text-[2.2rem] leading-[1.15] text-ivory drop-shadow-lg sm:text-[2.7rem] md:text-5xl xl:text-6xl">{siteConfig.hero.title}</h1>
        {siteConfig.hero.text ? (
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ivory/80 sm:mt-8 sm:text-[17px] md:text-lg">{siteConfig.hero.text}</p>
        ) : null}

        <div className="mt-10 grid gap-3 sm:mt-12 sm:flex sm:flex-wrap">
          <a
            href={siteConfig.contacts.phoneHref}
            className={`${actionButtonBase} border-gold/40 bg-[#0f0f0f]/90 text-goldSoft shadow-[0_8px_26px_rgba(0,0,0,0.4)] hover:border-gold/60 hover:bg-gold/15 hover:shadow-goldGlow`}
          >
            <PhoneIcon className="h-4 w-4" />
            Позвонить
          </a>
          <a
            href={siteConfig.contacts.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={`${actionButtonBase} border-gold/40 bg-[#0f0f0f]/90 text-goldSoft shadow-[0_8px_26px_rgba(0,0,0,0.4)] hover:border-gold/60 hover:bg-gold/15 hover:shadow-goldGlow`}
          >
            <MessageIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="#contacts"
            className={`${actionButtonBase} border-transparent bg-gold text-[#080808] shadow-[0_4px_20px_rgba(184,154,98,0.3)] hover:bg-goldSoft hover:shadow-goldGlow`}
          >
            <PenSquareIcon className="h-4 w-4" />
            Оставить заявку
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 sm:mt-14 sm:gap-4">
          {siteConfig.hero.trustPoints.map((point) => (
            <span key={point} className="inline-flex items-center gap-2 rounded-full border border-gold/10 bg-[#080808]/40 px-4 py-2 text-[13px] text-ivory/75 shadow-sm sm:px-5 sm:py-2.5 sm:text-[14px]">
              <CheckCircleIcon className="h-4 w-4 text-gold" />
              {point}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

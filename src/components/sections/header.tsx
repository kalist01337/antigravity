import Link from "next/link";
import type { ComponentType } from "react";
import { BriefcaseIcon, CheckCircleIcon, CircleQuestionIcon, MessageIcon, PhoneIcon, ScaleIcon, ShieldIcon } from "@/components/ui/icons";
import { siteConfig, withBasePath } from "@/config/site";

const mobileNavIcons: Record<string, ComponentType<{ className?: string }>> = {
  "#packages": BriefcaseIcon,
  "#services": ScaleIcon,
  "#about": ShieldIcon,
  "#reviews": CheckCircleIcon,
  "#faq": CircleQuestionIcon,
  "#contacts": MessageIcon,
};

export function Header() {
  return (
    <header className="site-header sticky top-0 z-50 pt-1 sm:pt-2">
      <div className="section-shell">
        <div className="site-header-frame mx-auto w-full max-w-[1140px] overflow-hidden rounded-[1.2rem] border border-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] sm:rounded-[2rem] sm:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
          <div className="relative px-3 py-1 sm:px-6 sm:py-2">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gold-line opacity-70" />
            <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gold-line opacity-70" />

            <div className="flex h-[72px] items-center justify-between gap-3 sm:h-[96px] lg:h-[105px]">
              <Link href="/" prefetch={false} className="flex items-center">
                <img
                  src={siteConfig.media.logo}
                  srcSet={`${withBasePath("/gold-360.png")} 360w, ${siteConfig.media.logo} 720w, ${withBasePath("/gold.png")} 1320w`}
                  sizes="(max-width: 639px) 140px, (max-width: 1023px) 210px, (max-width: 1279px) 260px, 320px"
                  alt={`${siteConfig.brand.name} logo`}
                  width={720}
                  height={213}
                  decoding="async"
                  className="block h-auto w-[140px] max-w-full object-contain [transform:translateZ(0)] sm:w-[210px] lg:w-[260px] xl:w-[320px]"
                  style={{ imageRendering: "auto" }}
                />
              </Link>

              <div className="flex items-center gap-1.5 sm:gap-3">
                <a
                  href={siteConfig.contacts.phoneHref}
                  className="hidden items-center gap-2 rounded-full border border-gold/20 px-4 py-1 text-[13px] text-ivory/80 transition hover:border-gold/40 hover:text-goldSoft lg:inline-flex"
                >
                  <PhoneIcon className="h-4 w-4 text-gold/80" />
                  {siteConfig.contacts.phoneDisplay}
                </a>
                <a
                  href="#contacts"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[12px] font-semibold text-goldSoft transition hover:bg-gold/20 sm:px-5 sm:py-2 sm:text-[13px]"
                >
                  <MessageIcon className="h-4 w-4" />
                  Консультация
                </a>
              </div>
            </div>

            <nav className="mt-1">
              <div className="rounded-2xl border border-gold/15 bg-white/[0.015] p-1.5 sm:hidden">
                <div className="flex items-center justify-between gap-1.5">
                  {siteConfig.nav.map((item) => {
                    const Icon = mobileNavIcons[item.href] ?? CircleQuestionIcon;

                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        aria-label={item.label}
                        title={item.label}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-white/[0.01] text-ivory/90 transition hover:border-gold/45 hover:bg-gold/10 hover:text-goldSoft"
                      >
                        <Icon className="h-3.5 w-3.5 text-goldSoft/95" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="hidden w-full overflow-x-auto rounded-xl border border-gold/15 bg-[#101010]/80 p-1 sm:block shadow-premiumSoft">
                <div className="mx-auto flex w-full max-w-[800px] items-center justify-between">
                  {siteConfig.nav.map((item, index) => {
                    const Icon = mobileNavIcons[item.href] ?? CircleQuestionIcon;

                    return (
                      <div key={item.href} className="flex items-center">
                        <a
                          href={item.href}
                          className="group relative flex items-center justify-center rounded-lg px-4 py-2 text-center font-serif text-[0.68rem] uppercase tracking-[0.15em] text-ivory/70 transition hover:text-goldSoft sm:px-6 sm:text-[0.7rem]"
                        >
                          <span className="inline-flex items-center gap-2">
                            <Icon className="hidden h-3.5 w-3.5 text-gold/60 transition-colors group-hover:text-gold/90 lg:block" />
                            <span>{item.label}</span>
                          </span>
                          <span className="pointer-events-none absolute inset-x-4 -bottom-px h-[1.5px] scale-x-0 bg-gold/80 transition-transform duration-300 group-hover:scale-x-100" />
                        </a>
                        {index < siteConfig.nav.length - 1 && (
                          <div className="h-3 w-px bg-gold/20" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

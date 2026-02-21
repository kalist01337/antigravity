import Link from "next/link";
import type { ComponentType } from "react";
import { BriefcaseIcon, CheckCircleIcon, CircleQuestionIcon, MessageIcon, ScaleIcon, ShieldIcon } from "@/components/ui/icons";
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
    <header className="fixed inset-x-0 top-4 z-50 mx-4 flex justify-center pointer-events-none md:top-6 lg:top-8">
      <div className="pointer-events-auto flex items-center justify-between gap-4 rounded-full border border-white/10 bg-surfaceSoft/80 px-4 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md md:gap-8 md:px-6 md:py-3 lg:gap-12 transition-all">
        {/* Logo */}
        <Link href="/" prefetch={false} className="shrink-0 transition-opacity hover:opacity-70 group">
          <img
            src={siteConfig.media.logo}
            srcSet={`${withBasePath("/gold-360.png")} 360w, ${siteConfig.media.logo} 720w, ${withBasePath("/gold.png")} 1320w`}
            sizes="120px"
            alt={`${siteConfig.brand.name} logo`}
            width={720}
            height={213}
            decoding="async"
            className="h-auto w-[100px] object-contain md:w-[120px] lg:w-[140px] drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
            style={{ imageRendering: "auto" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-inkSoft transition-colors hover:text-brand lg:text-[0.75rem]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex shrink-0 items-center">
          <a
            href="#contacts"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/50 bg-gradient-to-r from-brand to-brandDark px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-[#111] transition-all shadow-goldGlow hover:scale-105 md:px-5 md:py-2 md:text-[0.7rem]"
          >
            <MessageIcon className="h-3 w-3 md:h-3.5 md:w-3.5" />
            <span className="hidden sm:inline">Консультация</span>
            <span className="sm:hidden">Связь</span>
          </a>
        </div>
      </div>

      {/* Mobile Floating Nav (Bottom Pill) */}
      <div className="pointer-events-auto fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-white/10 bg-surfaceSoft/90 p-2 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-md md:hidden">
        {siteConfig.nav.map((item) => {
          const Icon = mobileNavIcons[item.href] ?? CircleQuestionIcon;
          return (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-full text-inkSoft transition-colors hover:bg-white/5 hover:text-brand active:scale-95"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </header>
  );
}

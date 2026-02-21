"use client";

import type { MouseEvent } from "react";
import { InstagramIcon, TelegramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { label: "WhatsApp", href: siteConfig.contacts.whatsappHref, icon: WhatsAppIcon },
  { label: "Instagram", href: siteConfig.contacts.instagramHref, icon: InstagramIcon },
  { label: "Telegram", href: siteConfig.contacts.telegramHref, icon: TelegramIcon },
];

const instagramAndroidIntent =
  "intent://instagram.com/_u/legal_protectionkz/#Intent;package=com.instagram.android;scheme=https;S.browser_fallback_url=https%3A%2F%2Fwww.instagram.com%2Flegal_protectionkz%2F;end";

export function FloatingSocial() {
  const handleInstagramClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof navigator === "undefined" || !/Android/i.test(navigator.userAgent)) return;
    event.preventDefault();
    window.location.href = instagramAndroidIntent;
  };

  return (
    <aside className="pointer-events-none fixed right-3 bottom-6 z-40 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
      <div className="pointer-events-auto flex flex-col gap-2.5 rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-lg backdrop-blur-md">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          const isExternal = item.href.startsWith("http");
          const openInCurrentTab = item.label === "Instagram";

          return (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              target={isExternal && !openInCurrentTab ? "_blank" : undefined}
              rel={isExternal && !openInCurrentTab ? "noreferrer" : undefined}
              onClick={item.label === "Instagram" ? handleInstagramClick : undefined}
              className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:-translate-x-1 hover:border-brand/30 hover:bg-brand/5 hover:text-brand"
            >
              <Icon className="h-[22px] w-[22px]" />
            </a>
          );
        })}
      </div>
    </aside>
  );
}

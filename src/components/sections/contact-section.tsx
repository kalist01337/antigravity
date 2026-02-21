"use client";

import { type MouseEvent, useMemo, useState } from "react";
import {
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  MessageIcon,
  PhoneIcon,
  TelegramIcon,
} from "@/components/ui/icons";
import { TwoGisMap } from "@/components/ui/two-gis-map";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const fullAddress = useMemo(() => siteConfig.contacts.addressLines.join(" "), []);
  const mapCenter = useMemo(() => ({ lat: 51.130526, lon: 71.428731 }), []);
  const twoGisDirectionsUrl =
    "https://2gis.kz/astana/directions/points/%7C71.428731%2C51.130526%3B70000001052001652?m=71.545689%2C51.086376%2F12.86";
  const instagramAndroidIntent =
    "intent://instagram.com/_u/legal_protectionkz/#Intent;package=com.instagram.android;scheme=https;S.browser_fallback_url=https%3A%2F%2Fwww.instagram.com%2Flegal_protectionkz%2F;end";

  const handleInstagramClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof navigator === "undefined" || !/Android/i.test(navigator.userAgent)) return;
    event.preventDefault();
    window.location.href = instagramAndroidIntent;
  };

  return (
    <section id="contacts" className="section-shell pb-24 pt-10">
      <div className="mb-10 text-center lg:text-left relative z-10">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] backdrop-blur-sm">
          <PhoneIcon className="h-3.5 w-3.5" />
          Контакты
        </p>
        <h2 className="mt-4 font-serif font-bold text-[2.2rem] tracking-tight text-ink md:text-[3rem]">Контактная информация</h2>
      </div>

      <div className="rounded-[2.5rem] bg-surfaceSoft/60 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 backdrop-blur-md relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              <dl className="space-y-6">
                <div>
                  <dt className="flex items-center gap-x-2 text-[11px] font-bold uppercase tracking-widest text-brand">
                    <div className="flex bg-brand/10 p-1.5 rounded-full ring-1 ring-inset ring-brand/20">
                      <PhoneIcon className="h-3.5 w-3.5" />
                    </div>
                    <span>Телефон</span>
                  </dt>
                  <dd className="mt-2 pl-9">
                    <a
                      href={siteConfig.contacts.phoneHref}
                      className="text-2xl font-black text-ink transition hover:text-brandSoft"
                    >
                      {siteConfig.contacts.phoneDisplay}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-x-2 text-[11px] font-bold uppercase tracking-widest text-brand">
                    <div className="flex bg-brand/10 p-1.5 rounded-full ring-1 ring-inset ring-brand/20">
                      <MailIcon className="h-3.5 w-3.5" />
                    </div>
                    <span>Email</span>
                  </dt>
                  <dd className="mt-2 pl-9">
                    <a
                      href={siteConfig.contacts.emailHref}
                      className="text-[16px] font-bold text-inkSoft transition hover:text-brandSoft"
                    >
                      {siteConfig.contacts.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-x-2 text-[11px] font-bold uppercase tracking-widest text-brand">
                    <div className="flex bg-brand/10 p-1.5 rounded-full ring-1 ring-inset ring-brand/20">
                      <MapPinIcon className="h-3.5 w-3.5" />
                    </div>
                    <span>Адрес</span>
                  </dt>
                  <dd className="mt-2 pl-9 text-[16px] leading-relaxed font-medium text-inkSoft">
                    {fullAddress}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-wrap gap-3 text-[14px] font-bold">
              <a
                href={siteConfig.contacts.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-5 py-2.5 text-inkSoft shadow-sm transition hover:border-brand/40 hover:text-brandSoft hover:bg-brand/5"
              >
                <PhoneIcon className="h-4 w-4" />
                Позвонить
              </a>
              <a
                href={siteConfig.contacts.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-5 py-2.5 text-inkSoft shadow-sm transition hover:border-brand/40 hover:text-brandSoft hover:bg-brand/5"
              >
                <MessageIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={siteConfig.contacts.telegramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-5 py-2.5 text-inkSoft shadow-sm transition hover:border-brand/40 hover:text-brandSoft hover:bg-brand/5"
              >
                <TelegramIcon className="h-4 w-4" />
                Telegram
              </a>
              <a
                href={siteConfig.contacts.instagramHref}
                onClick={handleInstagramClick}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-5 py-2.5 text-inkSoft shadow-sm transition hover:border-brand/40 hover:text-brandSoft hover:bg-brand/5"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-surface/50 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-inkMuted">График</p>
                <p className="mt-2 text-[15px] font-bold text-ink">Ежедневно с 09:00 до 20:00</p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-surface/50 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-inkMuted">Ответ</p>
                <p className="mt-2 text-[15px] font-bold text-ink">В мессенджерах ≈ 10 минут</p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-surface/50 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-inkMuted">Формат</p>
                <p className="mt-2 text-[15px] font-bold text-ink">Очная и онлайн консультация</p>
              </div>

              <a
                href={twoGisDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/5 bg-surface/50 p-4 text-left transition hover:border-brand/30 hover:bg-brand/10"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-brand transition-colors group-hover:text-brandSoft">Маршрут</p>
                <p className="mt-2 text-[15px] font-bold text-ink transition-colors group-hover:text-ink">Открыть в 2ГИС</p>
              </a>
            </div>
          </aside>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface relative shadow-inner">
            {isMapVisible ? (
              <TwoGisMap lat={mapCenter.lat} lon={mapCenter.lon} className="h-[320px] w-full sm:h-[400px] lg:h-full z-10 relative opacity-90" />
            ) : (
              <div className="flex h-[320px] w-full flex-col items-center justify-center gap-4 bg-surface px-4 text-center sm:h-[400px] lg:h-full z-10 relative">
                <p className="max-w-sm text-sm font-medium text-inkSoft">Интерактивная карта 2ГИС</p>
                <button
                  type="button"
                  onClick={() => setIsMapVisible(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-brand/50 bg-gradient-to-r from-brand to-brandDark px-6 py-2.5 text-sm font-bold tracking-wide text-[#111] transition shadow-goldGlow hover:scale-105"
                >
                  Загрузить карту
                </button>
              </div>
            )}

            {/* Map Placeholder Graphic Pattern */}
            {!isMapVisible && (
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

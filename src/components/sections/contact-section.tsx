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
      <div className="mb-10 text-center lg:text-left">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
          <PhoneIcon className="h-3.5 w-3.5" />
          Контакты
        </p>
        <h2 className="mt-4 font-extrabold text-[2.2rem] tracking-tight text-ink md:text-[3rem]">Контактная информация</h2>
      </div>

      <div className="rounded-[2.5rem] bg-white p-6 md:p-8 shadow-2xl shadow-brand/5 border border-slate-200">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <dl className="space-y-6">
                <div>
                  <dt className="flex items-center gap-x-2 text-[11px] font-bold uppercase tracking-widest text-brand">
                    <div className="flex bg-brand/10 p-1.5 rounded-full">
                      <PhoneIcon className="h-3.5 w-3.5" />
                    </div>
                    <span>Телефон</span>
                  </dt>
                  <dd className="mt-2 pl-9">
                    <a
                      href={siteConfig.contacts.phoneHref}
                      className="text-2xl font-black text-ink transition hover:text-brand"
                    >
                      {siteConfig.contacts.phoneDisplay}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-x-2 text-[11px] font-bold uppercase tracking-widest text-brand">
                    <div className="flex bg-brand/10 p-1.5 rounded-full">
                      <MailIcon className="h-3.5 w-3.5" />
                    </div>
                    <span>Email</span>
                  </dt>
                  <dd className="mt-2 pl-9">
                    <a
                      href={siteConfig.contacts.emailHref}
                      className="text-[16px] font-bold text-inkSoft transition hover:text-brand"
                    >
                      {siteConfig.contacts.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-x-2 text-[11px] font-bold uppercase tracking-widest text-brand">
                    <div className="flex bg-brand/10 p-1.5 rounded-full">
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
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-slate-700 shadow-sm transition hover:border-brand/40 hover:text-brand hover:bg-brand/5"
              >
                <PhoneIcon className="h-4 w-4" />
                Позвонить
              </a>
              <a
                href={siteConfig.contacts.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-slate-700 shadow-sm transition hover:border-brand/40 hover:text-brand hover:bg-brand/5"
              >
                <MessageIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={siteConfig.contacts.telegramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-slate-700 shadow-sm transition hover:border-brand/40 hover:text-brand hover:bg-brand/5"
              >
                <TelegramIcon className="h-4 w-4" />
                Telegram
              </a>
              <a
                href={siteConfig.contacts.instagramHref}
                onClick={handleInstagramClick}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-slate-700 shadow-sm transition hover:border-brand/40 hover:text-brand hover:bg-brand/5"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">График</p>
                <p className="mt-2 text-[15px] font-bold text-ink">Ежедневно с 09:00 до 20:00</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Ответ</p>
                <p className="mt-2 text-[15px] font-bold text-ink">В мессенджерах ≈ 10 минут</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Формат</p>
                <p className="mt-2 text-[15px] font-bold text-ink">Очная и онлайн консультация</p>
              </div>

              <a
                href={twoGisDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-brand hover:shadow-md hover:bg-white"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-brand transition-colors group-hover:text-brandDark">Маршрут</p>
                <p className="mt-2 text-[15px] font-bold text-ink transition-colors group-hover:text-brand">Открыть в 2ГИС</p>
              </a>
            </div>
          </aside>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 relative shadow-inner">
            {isMapVisible ? (
              <TwoGisMap lat={mapCenter.lat} lon={mapCenter.lon} className="h-[320px] w-full sm:h-[400px] lg:h-full z-10 relative" />
            ) : (
              <div className="flex h-[320px] w-full flex-col items-center justify-center gap-4 bg-slate-100 px-4 text-center sm:h-[400px] lg:h-full z-10 relative">
                <p className="max-w-sm text-sm font-medium text-slate-500">Интерактивная карта 2ГИС</p>
                <button
                  type="button"
                  onClick={() => setIsMapVisible(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-bold tracking-wide text-white transition shadow-sm hover:shadow-brandGlow hover:bg-brandDark"
                >
                  Загрузить карту
                </button>
              </div>
            )}

            {/* Map Placeholder Graphic Pattern */}
            {!isMapVisible && (
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

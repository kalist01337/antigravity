import { siteConfig } from "@/config/site";

export function SubscriptionSection() {
  return (
    <section id="about-service" className="section-shell pb-24">
      <div className="rounded-3xl border border-white/10 bg-surfaceSoft/50 px-6 py-10 sm:px-10 sm:py-12 shadow-[inset_0_0_30px_rgba(212,175,55,0.05)] backdrop-blur-sm">
        <div className="max-w-3xl">
          <h2 className="font-serif font-bold text-[2rem] tracking-tight text-ink md:text-4xl">{siteConfig.subscription.heading}</h2>
          <p className="mt-5 leading-relaxed text-inkMuted">{siteConfig.subscription.text}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {siteConfig.subscription.benefits.map((benefit) => (
            <div key={benefit} className="rounded-2xl border border-white/5 bg-surface/60 p-5 text-sm font-medium text-inkSoft shadow-sm transition hover:shadow-goldGlow hover:border-brand/40">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <p className="leading-relaxed">{benefit}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#packages"
          className="mt-8 inline-flex rounded-full bg-transparent border border-brand/50 px-8 py-3.5 text-sm font-bold tracking-wide text-brand shadow-sm transition hover:bg-brand/10 hover:text-brandSoft hover:shadow-goldGlow"
        >
          Выбрать тариф
        </a>
      </div>
    </section>
  );
}

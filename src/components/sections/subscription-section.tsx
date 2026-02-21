import { siteConfig } from "@/config/site";

export function SubscriptionSection() {
  return (
    <section id="about-service" className="section-shell pb-24">
      <div className="rounded-3xl border border-brand/10 bg-brand/5 px-6 py-10 sm:px-10 sm:py-12 shadow-inner">
        <div className="max-w-3xl">
          <h2 className="font-extrabold text-[2rem] tracking-tight text-ink md:text-4xl">{siteConfig.subscription.heading}</h2>
          <p className="mt-5 leading-relaxed text-inkSoft">{siteConfig.subscription.text}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {siteConfig.subscription.benefits.map((benefit) => (
            <div key={benefit} className="rounded-2xl border border-brand/20 bg-white p-5 text-sm font-medium text-slate-700 shadow-sm transition hover:shadow-md hover:border-brand/40">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <p className="leading-relaxed">{benefit}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#packages"
          className="mt-8 inline-flex rounded-full bg-white border border-brand/20 px-8 py-3.5 text-sm font-bold tracking-wide text-brand shadow-sm transition hover:bg-brand hover:text-white hover:border-brand hover:shadow-brandGlow"
        >
          Выбрать тариф
        </a>
      </div>
    </section>
  );
}

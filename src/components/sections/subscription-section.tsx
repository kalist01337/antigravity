import { siteConfig } from "@/config/site";
import { CheckCircleIcon } from "@/components/ui/icons";

export function SubscriptionSection() {
  return (
    <section id="about-service" className="section-shell pb-24 pt-12 relative overflow-hidden">
      <div className="relative rounded-[2.5rem] bg-gradient-to-br from-surface to-[#0a0a0a] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden group">

        {/* Decorative gold orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brandDark/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />

        <div className="grid lg:grid-cols-[1.2fr_1fr]">
          {/* Left Side: VIP Description */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative z-10">
            <h2 className="font-serif font-bold text-[2.5rem] leading-tight tracking-tight text-ink md:text-[3.2rem]">
              {siteConfig.subscription.heading}
            </h2>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-brand/50 to-transparent" />
            <p className="mt-6 text-[1.1rem] leading-relaxed text-inkMuted max-w-lg">
              {siteConfig.subscription.text}
            </p>
            <div className="mt-10">
              <a href="#packages" className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brandDark text-[#111] px-8 font-bold tracking-wide shadow-goldGlow transition-transform hover:scale-105 border border-brand/50">
                Выбрать тариф
              </a>
            </div>
          </div>

          {/* Right Side: Benefits / Pass details */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-surfaceSoft/20 relative z-10 backdrop-blur-md">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-brand/40 block" />
              Преимущества формата
            </h3>
            <ul className="space-y-6">
              {siteConfig.subscription.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4">
                  <div className="mt-1 flex shrink-0 items-center justify-center p-1 rounded-full bg-brand/10 text-brand shadow-[inset_0_0_5px_rgba(197,160,89,0.2)]">
                    <CheckCircleIcon className="h-4 w-4" />
                  </div>
                  <span className="text-[17px] font-medium text-inkSoft leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

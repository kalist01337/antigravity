import { ScaleIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

export function ServicesSection() {
  return (
    <section id="services" className="section-shell pb-24">
      <Reveal className="mb-10" amount={0.12}>
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-goldSoft/80">
          <ScaleIcon className="h-4 w-4" />
          Практика
        </p>
        <h2 className="mt-2 font-serif text-3xl text-ivory md:text-4xl">Юридические услуги</h2>
      </Reveal>

      <Reveal amount={0.12}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {siteConfig.services.map((service) => (
            <article
              key={service}
              className="card-premium group relative h-[144px] overflow-hidden rounded-2xl p-5 text-[15px] leading-relaxed text-ivory/80 shadow-premiumSoft transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gold/5 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-3.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-[#0d0d0d] text-gold shadow-sm transition-colors group-hover:border-gold/60 group-hover:text-goldSoft">
                  <ScaleIcon className="h-4 w-4" />
                </div>
                <p className="font-medium text-ivory/90">{service}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

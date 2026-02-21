import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PackagesSection } from "@/components/sections/packages-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SubscriptionSection } from "@/components/sections/subscription-section";
import { absoluteUrl, siteConfig } from "@/config/site";

export default function HomePage() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.brand.name,
    description: siteConfig.brand.description,
    url: absoluteUrl("/"),
    telephone: siteConfig.contacts.phoneRaw,
    email: siteConfig.contacts.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Д. Конаева, 12/1, офис 518/1",
      addressLocality: "Астана",
      addressRegion: "район Есиль",
      addressCountry: "KZ",
    },
    areaServed: "Астана",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Header />
      <HeroSection />

      <main className="relative z-10 bg-surface">
        <ServicesSection />
        <SubscriptionSection />
        <PackagesSection />
        <AboutSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

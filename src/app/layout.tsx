import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google"; // Removed Playfair
import "./globals.css";
import { FloatingSocial } from "@/components/ui/floating-social";
import { absoluteUrl, siteConfig, withBasePath } from "@/config/site";


const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  icons: {
    icon: withBasePath("/favicon.png"),
    shortcut: withBasePath("/favicon.png"),
    apple: withBasePath("/favicon.png"),
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.brand.name,
    locale: siteConfig.seo.locale,
    type: "website",
    images: [
      {
        url: siteConfig.media.heroImage,
        width: 1200,
        height: 630,
        alt: siteConfig.brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.media.heroImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${sans.variable} bg-surface text-ink font-sans antialiased selection:bg-brand selection:text-white`}>
        {children}
        <FloatingSocial />
      </body>
    </html>
  );
}

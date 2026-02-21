import { siteConfig, withBasePath } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-surface py-8">
      <div className="section-shell flex flex-col gap-4 text-sm font-medium text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} {siteConfig.brand.name}</p>
        <a href={withBasePath("/privacy")} className="text-brand transition-colors hover:text-brandDark hover:underline">
          Политика конфиденциальности
        </a>
        <p>{siteConfig.legalNotice}</p>
      </div>
    </footer>
  );
}

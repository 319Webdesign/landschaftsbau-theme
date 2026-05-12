import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-capan-forest/10 bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-lg font-semibold text-capan-forest">CapanGartenbau</p>
          <p className="mt-1 text-sm text-capan-slate">
            67297 Marnheim
            <br />
            Vorderpfalz
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-capan-slate">
          <Link href="#kontakt" className="hover:text-capan-forest">
            Kontakt
          </Link>
          <span className="text-capan-lime">·</span>
          <span>Impressum & Datenschutz — Platzhalter</span>
        </div>
      </div>
    </footer>
  );
}

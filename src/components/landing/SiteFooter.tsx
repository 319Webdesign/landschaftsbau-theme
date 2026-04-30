import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-kiss-forest/10 bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-lg font-semibold text-kiss-forest">
            KISS Garten- und Landschaftsbau GmbH
          </p>
          <p className="mt-1 text-sm text-kiss-slate">
            Siedlungsstraße 30
            <br />
            69517 Gorxheimertal
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-kiss-slate">
          <Link href="#kontakt" className="hover:text-kiss-forest">
            Kontakt
          </Link>
          <span className="text-kiss-earth">·</span>
          <span>Impressum & Datenschutz — Platzhalter</span>
        </div>
      </div>
    </footer>
  );
}

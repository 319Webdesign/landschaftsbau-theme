"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#projekte", label: "Projekte" },
  { href: "#stimmen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className="sticky top-0 z-50 border-b border-capan-forest/10 bg-capan-bg/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:py-3.5 lg:px-8">
        <Link href="#" className="flex shrink-0 items-center gap-2 text-capan-forest">
          <Image
            src="/logo-capan-gartenbau.png"
            alt="CapanGartenbau — Gartenbau und Landschaftsgestaltung in Marnheim"
            width={220}
            height={248}
            className="h-12 w-auto object-contain object-left sm:h-14 md:h-[4rem] lg:h-[4.25rem]"
            priority
          />
          <span className="sr-only">CapanGartenbau</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-capan-slate transition-colors hover:text-capan-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#kontakt"
          className="rounded-full bg-capan-forest px-4 py-2 text-sm font-medium text-capan-bg shadow-sm transition hover:bg-capan-forest/90"
        >
          Erstberatung
        </Link>
      </div>
    </motion.header>
  );
}

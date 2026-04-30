"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
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
      className="sticky top-0 z-50 border-b border-kiss-forest/10 bg-kiss-bg/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="#" className="flex items-center gap-2 text-kiss-forest">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-kiss-forest text-kiss-earth">
            <Leaf className="h-5 w-5" aria-hidden />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight sm:text-xl">
            KISS{" "}
            <span className="hidden font-sans text-sm font-normal text-kiss-slate sm:inline">
              Gartenbau
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-kiss-slate transition-colors hover:text-kiss-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#kontakt"
          className="rounded-full bg-kiss-forest px-4 py-2 text-sm font-medium text-kiss-bg shadow-sm transition hover:bg-kiss-forest/90"
        >
          Erstberatung
        </Link>
      </div>
    </motion.header>
  );
}

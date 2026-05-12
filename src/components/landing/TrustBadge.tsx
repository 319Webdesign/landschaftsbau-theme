"use client";

import { motion } from "framer-motion";
import { MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const items: {
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Persönliche Beratung",
    body: "Ein Ansprechpartner begleitet Ihr Projekt von der ersten Idee bis zur fertigen Übergabe.",
    icon: MessageSquare,
  },
  {
    title: "Saubere Ausführung",
    body: "Terrassen, Poolbereiche, Rasenflächen und Pflasterarbeiten präzise und hochwertig umgesetzt.",
    icon: ShieldCheck,
  },
  {
    title: "Regional im Einsatz",
    body: "Für Kunden in Marnheim, Frankenthal, der Vorderpfalz und der Metropolregion Rhein-Neckar.",
    icon: MapPin,
  },
];

const cardBase =
  "group flex h-full flex-col rounded-[22px] border border-capan-forest/[0.1] bg-white/95 p-6 shadow-[0_1px_2px_rgba(27,61,42,0.04),0_8px_24px_-12px_rgba(27,61,42,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-capan-forest/20 hover:shadow-[0_4px_12px_rgba(27,61,42,0.08),0_16px_40px_-16px_rgba(27,61,42,0.12)] md:p-7";

export function TrustBadge() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-20 border-t border-capan-forest/[0.07] bg-[#F4F8F1] px-6 py-10 md:py-12 lg:px-8"
      aria-labelledby="trust-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-capan-forest/15 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl">
        <header className="mb-8 max-w-3xl md:mb-9">
          <p className="text-xs font-semibold tracking-[0.18em] text-capan-lime">
            Warum Capan Gartenbau
          </p>
          <h2
            id="trust-heading"
            className="mt-2 font-serif text-2xl font-semibold leading-snug tracking-tight text-capan-forest sm:text-[1.65rem] md:text-3xl"
          >
            Verlässlich geplant. Sauber umgesetzt. Regional für Sie da.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            const spanThird =
              index === 2
                ? "md:max-lg:col-span-2 md:max-lg:mx-auto md:max-lg:w-full md:max-lg:max-w-xl"
                : "";
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-24px" }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`${cardBase} ${spanThird}`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-capan-forest text-capan-lime shadow-sm ring-1 ring-capan-forest/10 transition duration-300 group-hover:scale-[1.04]">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-capan-forest sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-capan-slate sm:text-[0.9375rem]">
                  {item.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

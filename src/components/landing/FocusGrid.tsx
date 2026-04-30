"use client";

import { motion } from "framer-motion";
import { Fence, Flower2, Waves } from "lucide-react";
import { useState } from "react";

const columns = [
  {
    id: "a",
    title: "Neuanlagen & Design",
    icon: Waves,
    accent: "Poolbau, Terrassen, Pflasterarbeiten",
    items: ["Poolbau & Wellnessbereiche", "Holz- & Steinterrassen", "Pflasterungen & Wegeführung"],
  },
  {
    id: "b",
    title: "Gartenpflege",
    icon: Flower2,
    accent: "Heckenschnitt, Baumpflege, Ganzjahresservice",
    items: ["Formschnitt & Heckenpflege", "Baumpflege & Kontrollen", "Saisonale Rundumpflege"],
  },
  {
    id: "c",
    title: "Zaun- & Mauerbau",
    icon: Fence,
    accent: "Sichtschutz, Natursteinmauern",
    items: ["Maßgefertigte Zaunanlagen", "Naturstein- & Hangsicherung", "Toranlagen & Zäune"],
  },
] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemMotion = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function FocusGrid() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="leistungen"
      className="scroll-mt-24 px-6 py-24 lg:px-8"
      aria-labelledby="leistungen-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-kiss-earth">
            Leistungsschwerpunkte
          </p>
          <h2
            id="leistungen-heading"
            className="mt-3 font-serif text-3xl font-semibold text-kiss-forest sm:text-4xl"
          >
            Präzision im Detail — von der Idee bis zur fertigen Außenanlage
          </h2>
          <p className="mt-4 text-lg text-kiss-slate">
            Wählen Sie einen Bereich — wir kombinieren Gestaltung, Technik und Pflege zu einem
            stimmigen Gesamtbild.
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {columns.map((col) => {
            const Icon = col.icon;
            const isActive = active === col.id;
            return (
              <motion.li key={col.id} variants={itemMotion}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(col.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(col.id)}
                  onBlur={() => setActive(null)}
                  className={`group relative flex h-full w-full flex-col rounded-2xl border bg-white p-8 text-left shadow-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-kiss-earth focus-visible:ring-offset-2 focus-visible:ring-offset-kiss-bg ${
                    isActive
                      ? "border-kiss-earth/60 shadow-md ring-1 ring-kiss-earth/30"
                      : "border-kiss-forest/10 hover:border-kiss-earth/40"
                  }`}
                  aria-expanded={isActive}
                >
                  <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-kiss-forest/90 text-kiss-earth transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="font-serif text-xl font-semibold text-kiss-forest">
                    {col.title}
                  </span>
                  <span className="mt-2 text-sm font-medium text-kiss-earth">{col.accent}</span>
                  <ul className="mt-6 space-y-3 border-t border-kiss-forest/10 pt-6 text-kiss-slate">
                    {col.items.map((line) => (
                      <li key={line} className="flex gap-2 text-sm leading-relaxed">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-kiss-earth"
                          aria-hidden
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                </button>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}

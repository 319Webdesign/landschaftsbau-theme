"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  {
    quote:
      "Von der Beratung bis zur Pflasterung lief alles strukturiert. Der Garten wirkt endlich wie ein zusammenhängender Außenraum.",
    name: "Familie M.",
    place: "Privatgarten, Oftersheim",
  },
  {
    quote:
      "Besonders die Detailarbeit an der Natursteinmauer hat überzeugt. Termintreue und Sauberkeit auf der Baustelle waren vorbildlich.",
    name: "Dr. K. Schneider",
    place: "Hangbefestigung, Walldorf",
  },
  {
    quote:
      "Unser Poolbereich wurde perfekt in die Bepflanzung eingebunden. Wir genießen die Anlage jeden Tag neu.",
    name: "Sandra & Tom W.",
    place: "Poolumfeld, Leimen",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 7200);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const current = items[index];

  return (
    <section
      id="stimmen"
      className="scroll-mt-24 bg-white px-6 py-24 lg:px-8"
      aria-labelledby="stimmen-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-kiss-earth">
              Stimmen aus der Region
            </p>
            <h2 id="stimmen-heading" className="mt-3 font-serif text-3xl font-semibold text-kiss-forest sm:text-4xl">
              Vertrauen wächst mit jedem abgeschlossenen Projekt
            </h2>
          </div>
        </motion.div>

        <div className="relative mt-14 overflow-hidden rounded-2xl border border-kiss-forest/10 bg-kiss-bg px-6 py-12 md:px-14 md:py-16">
          <Quote className="absolute right-8 top-8 h-16 w-16 text-kiss-earth/40" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.place}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 max-w-3xl"
            >
              <p className="font-serif text-xl leading-relaxed text-kiss-forest md:text-2xl">
                „{current.quote}“
              </p>
              <footer className="mt-8 text-kiss-slate">
                <cite className="not-italic font-semibold text-kiss-forest">{current.name}</cite>
                <span className="mt-1 block text-sm">{current.place}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-kiss-forest/20 p-2 text-kiss-forest transition hover:bg-kiss-forest hover:text-kiss-bg"
              aria-label="Vorheriges Zitat"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-kiss-forest/20 p-2 text-kiss-forest transition hover:bg-kiss-forest hover:text-kiss-bg"
              aria-label="Nächstes Zitat"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="ml-auto flex gap-2">
              {items.map((entry, i) => (
                <button
                  key={entry.place}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-kiss-forest" : "w-2 bg-kiss-earth/60 hover:bg-kiss-earth"
                  }`}
                  aria-label={`Referenz ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

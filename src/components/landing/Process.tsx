"use client";

import { motion } from "framer-motion";
import { Hammer, PenTool, Sprout } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Beratung",
    text: "Wir hören zu, nehmen Bestand auf und entwickeln erste Ideen — transparent und ohne Verpflichtung.",
    icon: Sprout,
  },
  {
    step: "2",
    title: "Planung",
    text: "Maße, Materialien und Zeitplan werden festgelegt. Sie erhalten eine klare, nachvollziehbare Empfehlung.",
    icon: PenTool,
  },
  {
    step: "3",
    title: "Umsetzung",
    text: "Unser Team setzt mit handwerklicher Sorgfalt um — sauber koordiniert bis zur Abnahme.",
    icon: Hammer,
  },
];

export function Process() {
  return (
    <section
      id="ablauf"
      className="scroll-mt-24 bg-kiss-forest px-6 py-24 text-kiss-bg lg:px-8"
      aria-labelledby="ablauf-heading"
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
            So arbeiten wir
          </p>
          <h2 id="ablauf-heading" className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Beratung · Planung · Umsetzung
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Klare Schritte, damit Ihr Projekt ruhig und termintreu über die Bühne geht.
          </p>
        </motion.div>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm"
              >
                <span className="absolute -top-3 left-8 inline-flex rounded-full bg-kiss-earth px-3 py-0.5 text-xs font-bold text-kiss-forest">
                  Schritt {s.step}
                </span>
                <Icon className="mt-4 h-10 w-10 text-kiss-earth" aria-hidden />
                <h3 className="mt-4 font-serif text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{s.text}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

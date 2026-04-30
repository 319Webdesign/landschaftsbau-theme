"use client";

import { motion } from "framer-motion";
import { Award, MapPin } from "lucide-react";

export function TrustBadge() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="border-y border-kiss-earth/30 bg-white"
      aria-label="Vertrauen"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center lg:px-8">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-kiss-forest text-kiss-earth">
            <Award className="h-7 w-7" aria-hidden />
          </span>
          <div>
            <p className="font-serif text-xl font-semibold text-kiss-forest">
              Meisterbetrieb aus Gorxheimertal
            </p>
            <p className="mt-1 max-w-xl text-kiss-slate">
              Präzise Ausführung, nachhaltige Materialien und persönliche Betreuung von der Idee
              bis zur Übergabe.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-kiss-slate">
          <MapPin className="h-5 w-5 shrink-0 text-kiss-earth" aria-hidden />
          <span className="text-sm font-medium">
            Einsatzgebiet: Kreis Bergstraße & Umgebung
          </span>
        </div>
      </div>
    </motion.section>
  );
}

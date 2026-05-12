"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BLUR_DATA_URL, heroImage } from "@/lib/site-images";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.35]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
      aria-label="Einstieg"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-105">
        <Image
          src={heroImage}
          alt="Moderner Garten mit Pool, großflächiger Stein-Terrasse, grünem Rasen und Wohnhaus mit Photovoltaik in warmem Abendlicht"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover object-center sm:object-[32%_48%] lg:object-[35%_45%]"
        />
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,61,42,0.94)_0%,rgba(27,61,42,0.86)_12%,rgba(27,61,42,0.58)_28%,rgba(27,61,42,0.22)_48%,rgba(27,61,42,0.06)_68%,transparent_90%)] sm:bg-[radial-gradient(ellipse_100%_82%_at_6%_90%,rgba(27,61,42,0.6),transparent_58%),linear-gradient(90deg,rgba(27,61,42,0.94)_0%,rgba(27,61,42,0.86)_14%,rgba(27,61,42,0.56)_32%,rgba(27,61,42,0.12)_50%,rgba(27,61,42,0.04)_64%,rgba(27,61,42,0.012)_78%,transparent_92%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-start px-6 pb-20 pt-14 sm:justify-end sm:pb-36 sm:pt-20 lg:px-8 lg:pb-44 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-medium tracking-[0.18em] text-capan-lime backdrop-blur-sm">
            Gartenbau · Poolbereiche · Außenanlagen
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
            Wir gestalten Außenbereiche, die Eindruck machen.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Terrassen, Poolbereiche, Rasenflächen, Pflasterarbeiten und Gartenpflege – Capan Gartenbau
            gestaltet hochwertige Außenanlagen in Marnheim, Frankenthal und Umgebung.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-capan-lime px-8 py-3.5 text-base font-semibold text-capan-forest shadow-lg transition hover:bg-capan-lime/90"
            >
              Projekt kostenlos anfragen
            </Link>
            <Link
              href="#stimmen"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Referenzen ansehen
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

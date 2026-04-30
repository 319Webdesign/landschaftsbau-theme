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
          alt="Luxuriöser Privatgarten mit gepflegtem Rasen, Staudenbeet, Formschnitt und gestalteten Baumstämmen unter blauem Himmel"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover object-[center_35%] sm:object-center"
        />
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-b from-kiss-forest/75 via-kiss-forest/55 to-kiss-forest/85"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-kiss-earth backdrop-blur-sm">
            Meisterbetrieb · Gorxheimertal
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
            KISS Gartenbau: Wir gestalten Ihren Rückzugsort im Freien.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Individueller Landschaftsbau, Poolanlagen und Gartenpflege in Gorxheimertal und
            Umgebung.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-kiss-earth px-8 py-3.5 text-base font-semibold text-kiss-forest shadow-lg transition hover:bg-kiss-earth/90"
            >
              Kostenlose Erstberatung
            </Link>
            <Link
              href="#projekte"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Unsere Projekte
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL, beforeAfter, beforeAfterSecondary, galleryImages } from "@/lib/site-images";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function ProjectShowcase() {
  return (
    <section
      id="projekte"
      className="scroll-mt-24 px-6 py-24 lg:px-8"
      aria-labelledby="projekte-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-capan-lime">
            Projektgalerie
          </p>
          <h2
            id="projekte-heading"
            className="mt-3 font-serif text-3xl font-semibold text-capan-forest sm:text-4xl"
          >
            Ausgewählte Arbeiten — Stein, Holz, Grün im Einklang
          </h2>
          <p className="mt-4 text-lg text-capan-slate">
            Hochwertige Außenanlagen entstehen dort, wo Material und Vegetation gemeinsam geplant
            werden.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mt-14 space-y-12 lg:space-y-14"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
            <BeforeAfterSlider
              beforeSrc={beforeAfter.before}
              afterSrc={beforeAfter.after}
              showHint={false}
              className="w-full"
            />
            <div className="min-w-0 lg:pl-2">
              <p className="font-serif text-xl font-semibold text-capan-forest sm:text-2xl">
                Vom Rohbereich zum sauberen Poolumfeld
              </p>
              <p className="mt-4 text-base leading-relaxed text-capan-slate sm:text-lg">
                Aus einer unfertigen Fläche rund um den Pool entsteht ein klar strukturierter
                Außenbereich mit sauber verlegten Platten, ruhiger Linienführung und deutlich
                gepflegterem Gesamtbild. So wird der Pool nicht nur nutzbar, sondern zum Mittelpunkt
                des Gartens.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
            <div className="min-w-0 lg:pr-2">
              <p className="font-serif text-xl font-semibold text-capan-forest sm:text-2xl">
                Von schwerem Untergrund zur gepflegten Gartenfläche
              </p>
              <p className="mt-4 text-base leading-relaxed text-capan-slate sm:text-lg">
                Wo vorher unebener Boden und Baustellencharakter dominierten, entsteht durch klare
                Vorbereitung, saubere Kanten und präzise Verlegung ein geordneter Außenbereich.
                Pflasterflächen, Rasen und Übergänge greifen sauber ineinander und geben dem Garten
                ein hochwertiges, dauerhaft gepflegtes Gesamtbild.
              </p>
            </div>
            <BeforeAfterSlider
              beforeSrc={beforeAfterSecondary.before}
              afterSrc={beforeAfterSecondary.after}
              showHint={false}
              className="w-full"
            />
          </div>

          <p className="text-center text-xs text-capan-slate lg:text-left">
            Ziehen Sie die Regler — echte Projektqualität zeigt sich im Vorher/Nachher-Vergleich.
          </p>
        </motion.div>

        <div className="mt-16 columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
              className={`break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-capan-forest/10 ${
                img.tall ? "mb-6" : ""
              }`}
            >
              <div className={`relative w-full ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="object-cover transition duration-500 hover:scale-[1.02]"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-capan-slate">{img.alt}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

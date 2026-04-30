"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL, beforeAfter, galleryImages } from "@/lib/site-images";
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
          <p className="text-sm font-semibold uppercase tracking-widest text-kiss-earth">
            Projektgalerie
          </p>
          <h2
            id="projekte-heading"
            className="mt-3 font-serif text-3xl font-semibold text-kiss-forest sm:text-4xl"
          >
            Ausgewählte Arbeiten — Stein, Holz, Grün im Einklang
          </h2>
          <p className="mt-4 text-lg text-kiss-slate">
            Hochwertige Außenanlagen entstehen dort, wo Material und Vegetation gemeinsam geplant
            werden.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mt-14 max-w-4xl"
        >
          <BeforeAfterSlider beforeSrc={beforeAfter.before} afterSrc={beforeAfter.after} />
        </motion.div>

        <div className="mt-16 columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
              className={`break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-kiss-forest/10 ${
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
              <figcaption className="px-4 py-3 text-sm text-kiss-slate">{img.alt}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

const projectTypes = [
  "Neuanlage / Komplettgestaltung",
  "Pool & Wellnessbereich",
  "Terrasse / Pflasterung",
  "Gartenpflege",
  "Zaun / Mauer / Sichtschutz",
  "Sonstiges",
];

const budgets = [
  "Bitte auswählen (optional)",
  "unter 15.000 €",
  "15.000 – 35.000 €",
  "35.000 – 70.000 €",
  "über 70.000 €",
];

export function LeadForm() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState(budgets[0]);
  const [zip, setZip] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  const canNext1 = projectType.length > 0;
  const canSubmit = zip.trim().length >= 4;

  return (
    <section
      id="kontakt"
      className="scroll-mt-24 px-6 py-24 lg:px-8"
      aria-labelledby="kontakt-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-kiss-earth">
            Lead-Generator
          </p>
          <h2 id="kontakt-heading" className="mt-3 font-serif text-3xl font-semibold text-kiss-forest sm:text-4xl">
            In 3 Schritten zum Traumgarten
          </h2>
          <p className="mt-4 text-lg text-kiss-slate">
            Kurz beschreiben — wir melden uns für Ihre kostenlose Erstberatung.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-xl rounded-2xl border border-kiss-forest/10 bg-white p-8 shadow-lg md:p-10"
        >
          <ol className="mb-10 flex justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-kiss-slate">
            {[1, 2, 3].map((n) => (
              <li key={n} className="flex items-center gap-2">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= n ? "bg-kiss-forest text-kiss-bg" : "bg-kiss-bg text-kiss-slate"
                  }`}
                >
                  {n}
                </span>
                {n < 3 && <span className="hidden text-kiss-earth sm:inline">—</span>}
              </li>
            ))}
          </ol>

          {done ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle2 className="h-14 w-14 text-kiss-forest" aria-hidden />
              <p className="font-serif text-2xl font-semibold text-kiss-forest">
                Vielen Dank für Ihre Anfrage!
              </p>
              <p className="max-w-sm text-kiss-slate">
                Wir prüfen Ihre Angaben und melden uns zeitnah bei Ihnen aus Gorxheimertal.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-8">
              {step === 1 && (
                <div>
                  <label htmlFor="project-type" className="block text-sm font-semibold text-kiss-forest">
                    Projektart
                  </label>
                  <select
                    id="project-type"
                    required
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-kiss-forest/15 bg-kiss-bg px-4 py-3 text-kiss-forest outline-none ring-kiss-earth focus:ring-2"
                  >
                    <option value="">Bitte wählen …</option>
                    {projectTypes.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-kiss-forest py-3 font-semibold text-kiss-bg transition hover:bg-kiss-forest/90 disabled:opacity-40"
                    disabled={!canNext1}
                    onClick={() => setStep(2)}
                  >
                    Weiter
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-kiss-forest">
                    Budgetrahmen <span className="font-normal text-kiss-slate">(optional)</span>
                  </label>
                  <select
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-kiss-forest/15 bg-kiss-bg px-4 py-3 text-kiss-forest outline-none ring-kiss-earth focus:ring-2"
                  >
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      className="flex-1 rounded-full border border-kiss-forest/25 py-3 font-medium text-kiss-forest transition hover:bg-kiss-bg"
                      onClick={() => setStep(1)}
                    >
                      Zurück
                    </button>
                    <button
                      type="button"
                      className="flex-1 rounded-full bg-kiss-forest py-3 font-semibold text-kiss-bg transition hover:bg-kiss-forest/90"
                      onClick={() => setStep(3)}
                    >
                      Weiter
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <label htmlFor="zip" className="block text-sm font-semibold text-kiss-forest">
                    Postleitzahl
                  </label>
                  <input
                    id="zip"
                    required
                    inputMode="numeric"
                    pattern="[0-9]{4,5}"
                    maxLength={5}
                    minLength={4}
                    placeholder="z. B. 69517"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-kiss-forest/15 bg-kiss-bg px-4 py-3 text-kiss-forest outline-none ring-kiss-earth placeholder:text-kiss-slate/50 focus:ring-2"
                  />
                  <p className="mt-2 text-xs text-kiss-slate">
                    Hilft uns, Ihre Anfrage der richtigen Einsatzplanung zuzuordnen.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      className="flex-1 rounded-full border border-kiss-forest/25 py-3 font-medium text-kiss-forest transition hover:bg-kiss-bg"
                      onClick={() => setStep(2)}
                    >
                      Zurück
                    </button>
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="flex-1 rounded-full bg-kiss-earth py-3 font-semibold text-kiss-forest transition hover:bg-kiss-earth/90 disabled:opacity-40"
                    >
                      Anfrage senden
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

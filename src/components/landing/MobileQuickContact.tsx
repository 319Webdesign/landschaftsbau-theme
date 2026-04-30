"use client";

import { MessageCircle, Phone } from "lucide-react";

/** Platzhalter — Vorwahl 06203 (Region Bergstraße); durch echte Nummer ersetzen. */
const TEL = "+4962030000000";
const TEL_DISPLAY = "+49 (6203) 000 000";
const WA_LINK = "https://wa.me/4962030000000";

export function MobileQuickContact() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-kiss-forest/10 bg-kiss-bg/95 px-4 py-3 backdrop-blur-md md:hidden"
      role="region"
      aria-label="Schnellkontakt"
    >
      <a
        href={`tel:${TEL.replace(/\s/g, "")}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-kiss-forest py-3 text-sm font-semibold text-kiss-bg"
      >
        <Phone className="h-5 w-5 shrink-0" aria-hidden />
        Anrufen
      </a>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-3 flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-kiss-forest bg-transparent py-3 text-sm font-semibold text-kiss-forest"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
        WhatsApp
      </a>
      <span className="sr-only">{TEL_DISPLAY}</span>
    </div>
  );
}

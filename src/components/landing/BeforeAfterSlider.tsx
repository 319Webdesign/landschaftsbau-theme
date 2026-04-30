"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { BLUR_DATA_URL } from "@/lib/site-images";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
}: BeforeAfterSliderProps) {
  const [pct, setPct] = useState(52);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - left, 0), width);
    setPct(Math.round((x / width) * 100));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* capture already released */
    }
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-kiss-slate/10 shadow-lg ring-1 ring-kiss-forest/10 select-none"
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <Image
          src={afterSrc}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover"
          draggable={false}
          priority={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
          aria-hidden={false}
        >
          <Image
            src={beforeSrc}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-cover"
            draggable={false}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-md"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
          aria-hidden
        />
        <button
          type="button"
          className="absolute top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-grab touch-none items-center justify-center rounded-full border-2 border-white bg-kiss-forest text-kiss-earth shadow-lg active:cursor-grabbing"
          style={{ left: `${pct}%` }}
          onPointerDown={onPointerDown}
          aria-label="Vergleich Vorher und Nachher verschieben"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-orientation="horizontal"
          role="slider"
        >
          <span className="text-lg font-bold">↔</span>
        </button>
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-kiss-earth/95 px-3 py-1 text-xs font-semibold text-kiss-forest backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>
      <p className="mt-3 text-center text-xs text-kiss-slate">
        Ziehen Sie den Regler — echte Projektqualität zeigt sich im Vorher/Nachher-Vergleich.
      </p>
    </div>
  );
}

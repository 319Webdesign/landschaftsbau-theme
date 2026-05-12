/** Gemeinsamer „blur-up“-Platzhalter für Remote-Bilder (next/image). */
export const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmkwyJ//Z";

/** Lokales Hero-Motiv (Pool, Naturstein-Terrasse, Rasen, Abendlicht). */
export const heroImage = "/hero-capan-poolgarten.png";

export const galleryImages = [
  {
    src: "/garten-1.jpg",
    alt: "Gepflegter Privatgarten mit Rasenfläche, Beetanlage und Poolbereich",
    tall: true,
  },
  {
    src: "/garten-2.jpg",
    alt: "Langer Rasenbereich mit sauberer Kantenführung und Sichtschutz zur Nachbarseite",
    tall: false,
  },
  {
    src: "/garten-3.jpg",
    alt: "Poolanlage mit großflächiger Stein-Terrasse und strukturiertem Außenbereich",
    tall: false,
  },
  {
    src: "/garten-4.jpg",
    alt: "Moderner Garten mit Pool, Pflasterfläche und geschlossenem Gartenzaun",
    tall: true,
  },
] as const;

export const beforeAfter = {
  before: "/pool-vorher.jpg",
  after: "/pool-nachher.jpg",
};

/** Zweites Vorher/Nachher-Paar für die wechselnde Darstellung in der Projektsektion. */
export const beforeAfterSecondary = {
  before: "/terasse-vorher.jpg",
  after: "/terasse-nachher.jpg",
};

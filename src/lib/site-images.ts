/** Gemeinsamer „blur-up“-Platzhalter für Remote-Bilder (next/image). */
export const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmkwyJ//Z";

/** Lokales Hero-Motiv (Premiumgarten, Rasen, Stauden, Skulpturhölzer). */
export const heroImage = "/hero-garten.png";

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop",
    alt: "Neu angelegter Privatgarten mit Rasen und Beeten",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1200&auto=format&fit=crop",
    alt: "Moderne Terrasse mit Naturstein",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Poolumgebung mit Bepflanzung",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
    alt: "Gepflegter Hecken- und Rasenbereich",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    alt: "Naturstein und Holz im Außenbereich",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    alt: "Außenanlage mit klaren Linien",
    tall: false,
  },
] as const;

export const beforeAfter = {
  before:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1600&auto=format&fit=crop",
  after:
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1600&auto=format&fit=crop",
};

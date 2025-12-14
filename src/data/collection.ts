import piece001 from "@/assets/collection/piece-001.jpg";
import piece002 from "@/assets/collection/piece-002.jpg";
import piece003 from "@/assets/collection/piece-003.jpg";
import piece004 from "@/assets/collection/piece-004.jpg";

export interface Piece {
  id: string;
  slug: string;
  name: string;
  edition: string;
  price: number;
  image: string;
  material: string;
  description: string;
  provenance: string;
}

export const collectionPieces: Piece[] = [
  {
    id: "001",
    slug: "sculptural-coat",
    name: "Sculptural Coat",
    edition: "Edition of 12",
    price: 4800,
    image: piece001,
    material: "Matte wool, raw edge finish",
    description: "Asymmetrical silhouette. Constructed through accumulation. What remained.",
    provenance: "Hand-finished in atelier. Each variation numbered.",
  },
  {
    id: "002",
    slug: "deconstructed-silk",
    name: "Silk Construction",
    edition: "Edition of 8",
    price: 2400,
    image: piece002,
    material: "Raw silk, exposed seams",
    description: "Architectural draping. The constraint became form.",
    provenance: "Single origin silk. Each piece deviated.",
  },
  {
    id: "003",
    slug: "structured-trouser",
    name: "Structured Trouser",
    edition: "Edition of 15",
    price: 1800,
    image: piece003,
    material: "Wool blend, geometric pleating",
    description: "Pressure refined the cut. Selection determined proportion.",
    provenance: "Atelier construction. Numbered provenance.",
  },
  {
    id: "004",
    slug: "sculptural-knit",
    name: "Sculptural Knit",
    edition: "Edition of 6",
    price: 3200,
    image: piece004,
    material: "Merino wool, organic hem",
    description: "Emergence through iteration. Form found, not imposed.",
    provenance: "Hand-finished. Limited mutation series.",
  },
];

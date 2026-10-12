import type { ImageMetadata } from 'astro';

export interface Shot {
  src: ImageMetadata;
  alt: string;
  caption?: string;
  /** Visuel sans barre de navigateur (schéma, illustration) */
  bare?: boolean;
}

/** Étude de cas complète (page /realisations/<slug>/). */
export interface Project {
  slug: string;
  name: string;
  /** Titre court orienté résultat, affiché sous le nom */
  headline: string;
  /** Résumé d'une phrase pour les listes */
  summary: string;
  /** Meta description de la page */
  description: string;
  kind: string; // ex. « E-commerce B2B »
  sector: string;
  client: string;
  location: string;
  year: string;
  role: string;
  engagement: string; // ex. « Client direct (freelance) »
  status: string; // ex. « En ligne »
  url?: string;
  urlLabel?: string;
  tldr: { besoin: string; approche: string; livre: string };
  context: string[];
  problem: string[];
  contribution: string[];
  solutions: { title: string; text: string }[];
  features: string[];
  stack: string[];
  cover: Shot;
  mobile?: Shot;
  gallery: Shot[];
  mobiles?: Shot[];
  /** Couleur de fond des compositions (teinte de la marque du client, très atténuée) */
  tint?: string;
  notes?: string[];
}

/** Référence secondaire (liste « Autres projets »). */
export interface Reference {
  name: string;
  kind: string;
  context: string; // ex. « En agence » / « Freelance »
  year?: string;
  url?: string;
  description: string;
  shot?: ImageMetadata;
}

// Informations globales du site — modifier ici, pas dans les composants.

export const site = {
  url: 'https://gazry.dev',
  name: 'Gazry Dev',
  shortName: 'Gazry Dev',
  // Prénom affiché quand il faut parler de la personne derrière Gazry Dev
  person: 'El Mehdi',
  role: 'Développeur web full-stack freelance',
  city: 'Casablanca',
  country: 'Maroc',
  locale: 'fr_MA',
  lang: 'fr',
  // Passez à false quand votre planning est complet : le badge « Disponible » disparaît partout.
  available: true,
  availabilityLabel: 'Disponible pour de nouveaux projets',
  responseTime: 'Réponse sous 24 h ouvrées',
  email: 'contact@gazry.dev',
  phoneDisplay: '+212 621 810 047',
  phone: '+212621810047',
  whatsapp: '212621810047',
  whatsappText: 'Bonjour El Mehdi, je vous contacte depuis gazry.dev au sujet d’un projet web.',
  linkedin: 'https://www.linkedin.com/in/elmehdi-ghazri/',
  experienceYears: 4,
  startYear: 2022,
  defaultDescription:
    'Gazry Dev, développement web full-stack freelance à Casablanca. Sites sur mesure, e-commerce, applications web et SaaS, intégrations API et IA — React, Next.js, Laravel, WordPress. Devis gratuit.',
} as const;

export const whatsappUrl = (text: string = site.whatsappText) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

// Suivi : identifiants repris tels quels du site précédent (GA4, Google Ads, GTM).
export const tracking = {
  ga4: 'G-MQYD4113F1',
  ads: 'AW-18275149812',
  adsContactConversion: 'AW-18275149812/DXQeCIuqo-scEPTPoopE',
  gtm: 'GTM-WDC9FMXV',
} as const;

// EmailJS : clés publiques côté navigateur (conçues pour être exposées), reprises du site précédent.
export const emailjs = {
  publicKey: 'vilPJFv51bdyDN9dY',
  serviceId: 'service_oqgwels',
  templateId: 'template_yfgh8ko',
} as const;

export const nav = [
  { href: '/realisations/', label: 'Réalisations' },
  { href: '/services/', label: 'Services' },
  { href: '/a-propos/', label: 'À propos' },
  { href: '/contact/', label: 'Contact' },
] as const;

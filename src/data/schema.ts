// Données structurées (JSON-LD) partagées.
import { site } from './site';
import { services } from './services';

export const PERSON_ID = `${site.url}/#person`;
export const BUSINESS_ID = `${site.url}/#business`;
export const WEBSITE_ID = `${site.url}/#website`;

export const abs = (path: string) => new URL(path, site.url).href;

export const personSchema = () => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: site.person,
  givenName: 'El Mehdi',
  jobTitle: 'Développeur web full-stack',
  url: `${site.url}/`,
  image: abs('/el-mehdi.jpg'),
  worksFor: { '@id': BUSINESS_ID },
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'MA' },
  knowsLanguage: ['ar', 'fr', 'en'],
  knowsAbout: [
    'React', 'Next.js', 'Laravel', 'PHP', 'JavaScript', 'TypeScript', 'WordPress', 'WooCommerce',
    'MySQL', 'API REST', 'Intégration d’API d’intelligence artificielle', 'SEO technique', 'Performance web',
  ],
  alumniOf: [{ '@type': 'EducationalOrganization', name: '3W Academy' }],
  sameAs: [site.linkedin],
});

export const businessSchema = () => ({
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: site.name,
  alternateName: 'gazry.dev',
  description: site.defaultDescription,
  url: `${site.url}/`,
  image: abs('/og/default.png'),
  logo: abs('/favicon.svg'),
  email: site.email,
  telephone: site.phone,
  founder: { '@id': PERSON_ID },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: 'Casablanca-Settat',
    addressCountry: 'MA',
  },
  areaServed: [
    { '@type': 'City', name: 'Casablanca' },
    { '@type': 'Country', name: 'Maroc' },
  ],
  availableLanguage: ['fr', 'ar', 'en'],
  priceRange: 'À partir de 3 500 DH',
  hasMap: site.google.url,
  sameAs: [site.linkedin, site.google.url],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de développement web',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.short, url: abs(`/services/#${s.id}`) },
    })),
  },
});

export const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${site.url}/`,
  name: 'Gazry Dev',
  alternateName: 'gazry.dev',
  inLanguage: 'fr',
  publisher: { '@id': PERSON_ID },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Accueil', path: '/' }, ...items].map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

export const faqSchema = (items: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const graph = (...nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': nodes });

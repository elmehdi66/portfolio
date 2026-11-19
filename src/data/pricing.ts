// Tarifs indicatifs « à partir de » (en dirhams). Modifier ici : la page /tarifs/,
// l’accueil, les services, le formulaire de contact et les données structurées suivent.

export interface Pack {
  id: string; // utilisé dans /contact/?pack=<id>
  n: string;
  name: string;
  tagline: string;
  from: number | null; // null = sur devis
  forWho: string;
  /** 4 à 5 points qui distinguent le pack ; le détail se fixe dans le devis */
  includes: string[];
  /** Type de projet présélectionné dans le formulaire */
  projectType: string;
  /** Fourchette de budget présélectionnée dans le formulaire */
  budget: string;
  dark?: boolean;
}

export const currency = 'DH';
export const formatPrice = (n: number) => `${n.toLocaleString('fr-FR').replace(/ |\s/g, ' ')} ${currency}`;

export const packs: Pack[] = [
  {
    id: 'starter',
    n: '01',
    name: 'Starter',
    tagline: 'Sites essentiels',
    from: 3500,
    forWho: 'Pour les indépendants, les petites entreprises et les projets simples.',
    includes: [
      'Site vitrine jusqu’à 5 pages, responsive',
      'Formulaire de contact et WhatsApp',
      'Référencement de base et Google Analytics',
      'Mise en ligne et 7 jours de corrections',
    ],
    projectType: 'Site vitrine / institutionnel',
    budget: '3 500 – 7 000 DH',
  },
  {
    id: 'business',
    n: '02',
    name: 'Business',
    tagline: 'Sites professionnels',
    from: 7000,
    forWho: 'Pour les entreprises qui veulent un site professionnel et une vraie présence digitale.',
    includes: [
      'Tout le pack Starter',
      'Jusqu’à 15 pages, design sur mesure',
      'Blog ou actualités',
      'Formulaires avancés et suivi des conversions',
      '15 jours de corrections',
    ],
    projectType: 'Site vitrine / institutionnel',
    budget: '7 000 – 15 000 DH',
  },
  {
    id: 'ecommerce',
    n: '03',
    name: 'E-commerce',
    tagline: 'Boutiques en ligne & B2B',
    from: 9000,
    forWho: 'Pour les boutiques et les plateformes de vente en ligne.',
    includes: [
      'Catalogue, variantes et filtres',
      'Panier, commande et livraison',
      'Comptes clients et e-mails de commande',
      'Paiement à la livraison, carte bancaire en option',
      'Formation à l’administration',
    ],
    projectType: 'E-commerce',
    budget: '7 000 – 15 000 DH',
  },
  {
    id: 'custom',
    n: '04',
    name: 'Custom',
    tagline: 'Applications web & plateformes',
    from: 15000,
    forWho: 'Pour les projets qui demandent une véritable logique métier.',
    includes: [
      'React / Next.js et Laravel ou API',
      'Comptes, rôles et tableau de bord',
      'Paiements, notifications et intégrations',
      'Déploiement cloud et tests',
    ],
    projectType: 'Application web / SaaS',
    budget: '15 000 – 40 000 DH',
    dark: true,
  },
];

export const enterprise = {
  id: 'enterprise',
  n: '05',
  name: 'Enterprise',
  tagline: 'Plateformes digitales',
  forWho: 'Pour les projets plus importants ou qui relient plusieurs systèmes entre eux.',
  includes: [
    'Marketplaces et plateformes multi-utilisateurs',
    'Intégrations ERP, CRM et API tierces',
    'Automatisations et tableaux de bord avancés',
    'Infrastructure cloud, sécurité et maintenance évolutive',
  ],
  projectType: 'Application web / SaaS',
  budget: 'Plus de 40 000 DH',
};

export const extras = [
  { service: 'Maintenance et petites évolutions', price: '500 – 1 000 DH / mois', projectType: 'Maintenance / refonte' },
  { service: 'Intervention ponctuelle', price: '300 DH / heure', projectType: 'Maintenance / refonte' },
  { service: 'Audit technique, UX ou e-commerce', price: 'dès 1 500 DH', projectType: 'Maintenance / refonte' },
  { service: 'Optimisation des performances', price: 'dès 1 500 DH', projectType: 'Maintenance / refonte' },
  { service: 'Intégration d’API ou migration', price: 'dès 1 000 DH', projectType: 'API, automatisation ou IA' },
];

export const pricingFaq = [
  {
    q: 'Que veut dire « à partir de » ?',
    a: 'C’est le prix de départ pour un projet simple dans chaque catégorie. Le prix final dépend du nombre de pages, des fonctionnalités, des contenus à intégrer et des délais. Il est fixé dans un devis détaillé, avant le début du projet.',
  },
  {
    q: 'Mon projet ne rentre dans aucun pack. Comment faire ?',
    a: 'C’est fréquent. Décrivez votre besoin dans le formulaire ou sur WhatsApp : je vous prépare un devis sur mesure selon les fonctionnalités et la complexité technique.',
  },
  {
    q: 'Le paiement en ligne est-il inclus dans le pack E-commerce ?',
    a: 'Le paiement à la livraison est inclus. Le paiement par carte dépend du prestataire choisi (CMI, Stripe, PayPal…) et de ses frais : il est chiffré à part dans le devis.',
  },
  {
    q: 'Le devis est-il payant ?',
    a: 'Non. Le premier échange et le devis détaillé sont gratuits et sans engagement.',
  },
  {
    q: 'Proposez-vous un suivi après la mise en ligne ?',
    a: 'Oui : maintenance technique à partir de 500 DH par mois, ou maintenance avec évolutions à partir de 1 000 DH par mois. Les interventions ponctuelles sont facturées 300 DH de l’heure.',
  },
];

/** Prix d’appel par service (page Services et accueil). */
export const serviceFrom: Record<string, string> = {
  'sites-sur-mesure': `dès ${formatPrice(3500)}`,
  'applications-saas': `dès ${formatPrice(15000)}`,
  'e-commerce-wordpress': `dès ${formatPrice(9000)}`,
  'api-ia-automatisation': `dès ${formatPrice(1000)}`,
  'maintenance-optimisation': `dès ${formatPrice(500)} / mois`,
};

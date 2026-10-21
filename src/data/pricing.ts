// Tarifs indicatifs « à partir de » (en dirhams). Modifier ici : la page /tarifs/,
// l’accueil, les services, le formulaire de contact et les données structurées suivent.

export interface Pack {
  id: string; // utilisé dans /contact/?pack=<id>
  n: string;
  name: string;
  tagline: string;
  from: number | null; // null = sur devis
  forWho: string;
  highlights: string[]; // 3 points clés pour les versions compactes
  includes: string[];
  footnote?: string;
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
    highlights: ['Site vitrine jusqu’à 5 pages', 'Formulaire, WhatsApp et réseaux sociaux', 'SEO de base et mise en ligne'],
    includes: [
      'Site vitrine jusqu’à 5 pages',
      'Design responsive',
      'Intégration sur mesure',
      'Formulaire de contact',
      'WhatsApp et réseaux sociaux',
      'Optimisation SEO de base',
      'Google Analytics et Search Console',
      'Mise en ligne',
      '7 jours de corrections',
    ],
    footnote: 'WordPress / Elementor ou Next.js, selon le besoin.',
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
    highlights: ['10 à 15 pages, UI/UX personnalisée', 'Blog, formulaires avancés, intégration API', 'Performance, sécurité et suivi'],
    includes: [
      'Tout le pack Starter',
      'Jusqu’à 10–15 pages',
      'UI/UX personnalisée',
      'Animations et interactions',
      'Blog / actualités',
      'SEO technique de base',
      'Intégration d’API',
      'Formulaires avancés',
      'Google Analytics et suivi des conversions',
      'Optimisation des performances',
      'Sécurité et configuration serveur',
      '15 jours de corrections',
    ],
    footnote: 'Idéal pour les entreprises, cabinets, agences, promoteurs immobiliers et organismes de formation.',
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
    highlights: ['Catalogue, variantes, panier et paiement', 'Livraison, commandes et comptes clients', 'Formation à l’administration'],
    includes: [
      'Catalogue produits',
      'Catégories et filtres',
      'Variantes de produits',
      'Panier et commande',
      'Paiement en ligne',
      'Livraison',
      'Gestion des commandes',
      'Comptes clients',
      'E-mails transactionnels',
      'Suivi e-commerce',
      'SEO',
      'Optimisation mobile',
      'Formation à l’administration',
    ],
    footnote: 'WordPress / WooCommerce ou développement sur mesure, selon le projet.',
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
    highlights: ['React / Next.js et Laravel / API', 'Comptes, rôles, tableau de bord', 'Paiements, notifications, déploiement'],
    includes: [
      'Architecture technique personnalisée',
      'Front-end React / Next.js',
      'Back-end Laravel / API',
      'Base de données',
      'Authentification',
      'Tableau de bord administrateur',
      'Gestion des rôles et permissions',
      'API et intégrations externes',
      'Paiements',
      'Notifications',
      'Cloud et déploiement',
      'Tests et optimisation',
    ],
    footnote: 'Idéal pour les SaaS, plateformes B2B, marketplaces, outils internes et applications métier.',
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
    'Architecture complète',
    'Marketplace',
    'Intégration ERP / CRM',
    'API tierces',
    'Automatisation',
    'Systèmes de paiement',
    'Tableaux de bord avancés',
    'Multi-utilisateurs et rôles',
    'Infrastructure cloud',
    'Performance et sécurité',
    'Maintenance évolutive',
  ],
  projectType: 'Application web / SaaS',
  budget: 'Plus de 40 000 DH',
};

export const extras = [
  { service: 'Maintenance technique', price: '500 DH / mois', projectType: 'Maintenance / refonte' },
  { service: 'Maintenance + évolutions', price: '1 000 DH / mois', projectType: 'Maintenance / refonte' },
  { service: 'Intervention ponctuelle', price: '300 DH / heure', projectType: 'Maintenance / refonte' },
  { service: 'Audit technique', price: '1 500 DH', projectType: 'Maintenance / refonte' },
  { service: 'Audit e-commerce / UX', price: '1 500 – 2 500 DH', projectType: 'E-commerce' },
  { service: 'Optimisation des performances', price: 'à partir de 1 500 DH', projectType: 'Maintenance / refonte' },
  { service: 'Intégration d’API', price: 'à partir de 1 000 DH', projectType: 'API, automatisation ou IA' },
  { service: 'Migration WordPress', price: 'à partir de 1 500 DH', projectType: 'Maintenance / refonte' },
  { service: 'Développement d’une fonctionnalité spécifique', price: 'Sur devis', projectType: 'Autre' },
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

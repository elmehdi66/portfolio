export interface Service {
  id: string;
  title: string;
  short: string;
  pitch: string;
  forWho: string;
  deliverables: string[];
  stack: string[];
  related?: string[]; // slugs de projets
}

export const services: Service[] = [
  {
    id: 'sites-sur-mesure',
    title: 'Sites web sur mesure',
    short: 'Sites vitrines, institutionnels et immobiliers, rapides et faciles à faire évoluer.',
    pitch:
      'Un site qui présente clairement votre activité, se charge vite sur mobile et se trouve sur Google. Je pars de vos contenus et de vos objectifs pour construire des pages qui donnent envie de vous contacter.',
    forWho: 'PME, institutions, cabinets, promoteurs immobiliers, marques.',
    deliverables: [
      'Arborescence et parcours définis avec vous',
      'Intégration responsive fidèle à la maquette',
      'Formulaires, WhatsApp et suivi des demandes',
      'SEO technique : balises, sitemap, données structurées',
      'Mise en ligne, nom de domaine et hébergement',
    ],
    stack: ['Next.js', 'React', 'WordPress', 'PHP'],
    related: ['mli', 'artimezia'],
  },
  {
    id: 'applications-saas',
    title: 'Applications web & SaaS',
    short: 'Espaces clients, tableaux de bord, outils métier et produits SaaS.',
    pitch:
      'Quand un tableur ou un outil générique ne suffit plus, je développe l’application adaptée à votre façon de travailler : comptes utilisateurs, rôles, tableaux de bord, paiements et API.',
    forWho: 'Startups, équipes opérationnelles, entreprises de services.',
    deliverables: [
      'Analyse du besoin et modélisation des données',
      'Authentification, rôles et espaces utilisateurs',
      'Back-office et tableaux de bord',
      'API REST documentées',
      'Déploiement et suivi en production',
    ],
    stack: ['React', 'Next.js', 'Laravel', 'Node.js', 'MySQL', 'PostgreSQL'],
    related: ['sowenzia'],
  },
  {
    id: 'e-commerce-wordpress',
    title: 'E-commerce & WordPress',
    short: 'Boutiques WooCommerce B2C et B2B, catalogues, tarifs professionnels.',
    pitch:
      'Une boutique que vous gérez vous-même au quotidien : catalogue, commandes, livraison, paiement. Pour la vente aux professionnels, j’adapte WooCommerce à vos règles : comptes pro, prix dédiés, accès réservé.',
    forWho: 'Commerçants, distributeurs, marques, grossistes.',
    deliverables: [
      'Catalogue, catégories, marques et fiches produits',
      'Règles B2B : comptes professionnels et tarifs dédiés',
      'Paiement, livraison et notifications',
      'Développement de fonctionnalités sur mesure (PHP)',
      'Formation à la gestion du site',
    ],
    stack: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    related: ['prosalon'],
  },
  {
    id: 'api-ia-automatisation',
    title: 'API, automatisations & IA',
    short: 'Connecter vos outils, automatiser les tâches répétitives, intégrer l’IA.',
    pitch:
      'Je relie votre site ou votre application aux services dont vous avez besoin — paiement, livraison, CRM, e-mails — et j’intègre des API d’intelligence artificielle là où elles apportent un vrai gain : génération de contenus, d’images ou de vidéos.',
    forWho: 'Équipes qui veulent gagner du temps ou lancer un produit basé sur l’IA.',
    deliverables: [
      'Intégration d’API tierces et webhooks',
      'Synchronisation de données entre outils',
      'Intégration d’API d’IA (texte, image, vidéo)',
      'Gestion des crédits, quotas et coûts d’usage',
      'Scripts et tâches automatisées',
    ],
    stack: ['REST', 'Node.js', 'Laravel', 'Gemini API'],
    related: ['sowenzia', 'prosalon'],
  },
  {
    id: 'maintenance-optimisation',
    title: 'Maintenance, optimisation & évolution',
    short: 'Reprendre, corriger, accélérer et faire évoluer un site existant.',
    pitch:
      'Votre site existe déjà mais il est lent, fragile ou difficile à faire évoluer ? Je l’audite, je corrige les problèmes prioritaires et j’ajoute les fonctionnalités qui manquent, sans tout reconstruire.',
    forWho: 'Entreprises avec un site en place, agences qui ont besoin de renfort.',
    deliverables: [
      'Audit technique, performance et SEO',
      'Corrections de bugs et mises à jour de sécurité',
      'Optimisation Core Web Vitals',
      'Nouvelles fonctionnalités et refontes partielles',
      'Renfort technique pour agences',
    ],
    stack: ['WordPress', 'Laravel', 'React', 'Next.js'],
  },
];

export const steps = [
  {
    n: '01',
    title: 'Échange & cadrage',
    text: 'On parle de votre activité, de vos objectifs et de vos contraintes. Je pose les questions qui permettent de chiffrer juste.',
  },
  {
    n: '02',
    title: 'Proposition & devis',
    text: 'Vous recevez un devis détaillé : périmètre, choix techniques, planning et budget. Pas de surprise en cours de route.',
  },
  {
    n: '03',
    title: 'Développement',
    text: 'Le projet avance par étapes, avec des validations régulières. Vous voyez le résultat au fur et à mesure.',
  },
  {
    n: '04',
    title: 'Tests & mise en ligne',
    text: 'Tests sur ordinateur, tablette et mobile, ajustements selon vos retours, puis déploiement et configuration du domaine.',
  },
  {
    n: '05',
    title: 'Suivi & évolutions',
    text: 'Après le lancement, je reste disponible pour la maintenance, les corrections et les nouvelles fonctionnalités.',
  },
];

export const faq = [
  {
    q: 'Combien coûte un site ou une application web ?',
    a: 'Le budget dépend du périmètre : un site vitrine, une boutique en ligne et une application métier n’impliquent pas le même travail. Après un premier échange, je vous envoie un devis détaillé et gratuit, en dirhams.',
  },
  {
    q: 'Quels sont les délais ?',
    a: 'Pour un site vitrine, comptez généralement quelques semaines entre le cadrage et la mise en ligne, selon la disponibilité des contenus et le nombre d’allers-retours de validation. Le planning précis figure dans le devis.',
  },
  {
    q: 'Travaillez-vous avec des clients en dehors de Casablanca ?',
    a: 'Oui. Je suis basé à Casablanca, où un rendez-vous physique est possible, et je travaille à distance avec des clients ailleurs au Maroc et à l’international (visio, e-mail, WhatsApp).',
  },
  {
    q: 'Pouvez-vous reprendre un site existant ?',
    a: 'Oui. Je commence par un audit pour comprendre l’existant, puis je propose les corrections et évolutions prioritaires. Une refonte complète n’est pas toujours nécessaire.',
  },
  {
    q: 'Quelle technologie choisir pour mon projet ?',
    a: 'Elle dépend de votre besoin : WordPress si vous voulez gérer vos contenus en autonomie, Next.js pour un site très rapide ou sur mesure, Laravel pour une application avec beaucoup de logique métier. Je vous explique le choix dans le devis.',
  },
  {
    q: 'Travaillez-vous avec les agences ?',
    a: 'Oui. J’ai l’habitude de travailler avec des designers et des chefs de projet en agence, et je peux intervenir en renfort sur le développement front-end ou back-end.',
  },
];

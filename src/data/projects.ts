// Études de cas et références — contenus vérifiés (code source, sites en ligne, devis/factures).
// Voir docs/DECISIONS.md : aucun chiffre ni fonctionnalité non vérifiés.
import type { Project, Reference } from './types';

import mliHome from '../assets/projects/mli/home.webp';
import mliHomeM from '../assets/projects/mli/home-mobile.webp';
import mliForm from '../assets/projects/mli/formations.webp';
import mliFormM from '../assets/projects/mli/formations-mobile.webp';
import mliCat from '../assets/projects/mli/catalogue.webp';
import mliPb from '../assets/projects/mli/program-builder.webp';
import mliSec from '../assets/projects/mli/home-section.webp';

import psHome from '../assets/projects/prosalon/home-fr.webp';
import psProd from '../assets/projects/prosalon/product-fr.webp';
import psSec from '../assets/projects/prosalon/product-sections-fr.webp';


import amHome from '../assets/projects/artimezia/home.webp';
import amHomeM from '../assets/projects/artimezia/home-mobile.webp';
import amCourses from '../assets/projects/artimezia/courses.webp';
import amCourse from '../assets/projects/artimezia/course-detail.webp';
import amCourseM from '../assets/projects/artimezia/course-mobile.webp';
import amHomeAr from '../assets/projects/artimezia/home-ar.webp';
import amHomeArM from '../assets/projects/artimezia/home-ar-mobile.webp';

import mkArch from '../assets/projects/masoku/architecture.webp';
import mkPlans from '../assets/projects/masoku/plans.webp';
import mkGen from '../assets/projects/masoku/generate.webp';

export const projects: Project[] = [
  {
    slug: 'mli',
    name: 'MLI',
    headline: 'Un site institutionnel bilingue que l’équipe gère seule, avec un configurateur de programmes assisté par IA.',
    summary: 'Next.js et Payload CMS, bilingue FR/EN, catalogue de formations et Program Builder avec assistant IA.',
    description:
      'Étude de cas MLI : site institutionnel Next.js 16 et Payload CMS, bilingue FR/EN, catalogue de formations, Program Builder avec assistant IA, déployé sur Hostinger.',
    kind: 'Site institutionnel & CMS',
    sector: 'Formation des dirigeants',
    client: 'Moroccan Leadership Institute',
    location: 'Casablanca',
    year: '2026',
    role: 'Développement full-stack & déploiement',
    engagement: 'Client direct (freelance)',
    status: 'En ligne',
    url: 'https://mli.ma/',
    urlLabel: 'Voir mli.ma',
    tldr: {
      besoin: 'Présenter un catalogue de formation riche, en français et en anglais, que l’équipe met à jour sans développeur, et transformer les visites en demandes de brochure.',
      approche: 'Un site Next.js avec Payload CMS intégré : pages composées par blocs, contenus bilingues, SEO technique, et les contraintes de l’hébergement prises en compte dès la conception.',
      livre: 'Un site en ligne sur mli.ma, un back-office en français avec aperçu en direct, un catalogue 2026 filtrable et un Program Builder qui recommande des programmes grâce à l’IA.',
    },
    context: [
      'Le Moroccan Leadership Institute, basé à Casablanca, forme des dirigeants, des managers et de jeunes talents : ateliers de leadership répartis en trois parcours, programmes par public, parcours de six mois, teambuilding et événements.',
      'L’institut s’adresse à des organisations privées et publiques. Son site doit inspirer confiance, rendre lisible une offre dense et générer des demandes qualifiées.',
    ],
    problem: [
      'Le catalogue est important et évolue souvent : ateliers, programmes, événements, articles, revue de presse. L’équipe devait pouvoir tout modifier elle-même, en français et en anglais.',
      'Contrainte technique forte : un hébergement Hostinger en « Node.js Web App », sans accès SSH, avec un dossier d’application remplacé à chaque déploiement et des ressources limitées au moment du build.',
    ],
    contribution: [
      'Développement complet du site, seul, à partir du modèle de démarrage officiel de Payload CMS : Next.js 16 (App Router) avec le CMS intégré au même projet.',
      'Modélisation de tout le contenu : formations, programmes, catalogue 2026, événements, blog, presse, équipe, témoignages, partenaires et demandes.',
      'Pages composées par blocs, brouillons, historique des versions et aperçu en direct (mobile, tablette, ordinateur) dans un back-office en français.',
      'Version anglaise sous /en, avec repli automatique sur le français pour les contenus pas encore traduits.',
      'Program Builder : composition d’un parcours et assistant IA (LLM via l’API Groq) qui présélectionne et recommande des formations du catalogue, avec notification e-mail à l’équipe.',
      'SEO technique, formulaires enregistrés dans le CMS, déploiement sur Hostinger et documentation d’exploitation remise au client.',
    ],
    solutions: [
      { title: 'Des données qui survivent aux déploiements', text: 'Hostinger remplace le dossier de l’application à chaque mise en ligne. Au démarrage, l’application détecte son environnement et place la base SQLite, les médias et la clé secrète dans un dossier persistant, hors du code.' },
      { title: 'Des migrations sans accès SSH', text: 'Le script de build applique les migrations Payload puis charge le contenu initial si nécessaire, et s’arrête proprement en cas d’échec. Le schéma n’est jamais modifié automatiquement.' },
      { title: 'Un build fiable sur un serveur limité', text: 'Le build Turbopack échouait sur l’hébergement : il passe par webpack, plus lent mais stable.' },
      { title: 'Publier sans reconstruire', text: 'Pages pré-rendues avec revalidation périodique, et purge ciblée du cache à chaque modification dans le back-office.' },
      { title: 'Une IA qui ne bloque jamais le site', text: 'Le Program Builder s’active par variable d’environnement. Si l’API ne répond pas, l’assistant affiche un état « indisponible » au lieu de planter, et les formations proposées par le modèle sont recoupées avec le catalogue.' },
      { title: 'Une police conforme à sa licence', text: 'La police fournie n’était autorisée qu’en usage personnel : elle a été remplacée par une alternative libre d’usage commercial, auto-hébergée.' },
    ],
    features: [
      'Site bilingue français / anglais',
      'Pages composées par blocs',
      'Aperçu en direct, brouillons et versions',
      'Catalogue 2026 filtrable par catégorie',
      'Program Builder avec assistant IA',
      'Demandes de brochure suivies dans le CMS',
      'SEO : balises, hreflang, sitemap, données structurées',
      'Bandeau cookies et pages légales (loi 09-08)',
      'Bouton « Demander la brochure » fixe sur mobile',
      'Archivage automatique des événements passés',
    ],
    stack: ['Next.js 16', 'Payload CMS 3', 'React', 'TypeScript', 'SQLite', 'API Groq', 'Nodemailer', 'Hostinger'],
    cover: { src: mliHome, alt: 'Page d’accueil du site du Moroccan Leadership Institute' },
    mobile: { src: mliHomeM, alt: 'Accueil du site MLI sur mobile' },
    gallery: [
      { src: mliCat, alt: 'Catalogue 2026 du MLI filtrable par catégorie', caption: 'Catalogue 2026 — formations filtrables par catégorie' },
      { src: mliPb, alt: 'Program Builder du MLI avec l’assistant IA', caption: 'Program Builder — l’assistant IA recommande un programme à partir du catalogue' },
      { src: mliSec, alt: 'Section de la page d’accueil du MLI', caption: 'Accueil — présentation de l’institut et partenaires' },
      { src: mliForm, alt: 'Page catalogue des formations en leadership', caption: 'Catalogue des formations en leadership' },
    ],
    mobiles: [
      { src: mliHomeM, alt: 'Accueil MLI sur mobile', caption: 'Accueil' },
      { src: mliFormM, alt: 'Catalogue des formations MLI sur mobile', caption: 'Catalogue des formations' },
    ],
    tint: '#ead9d6',
    notes: [
      'Les chiffres affichés sur le site du MLI sont ceux de l’institut, pas des résultats du projet.',
      'La structure graphique s’appuie sur un template, adapté aux couleurs, au logo, aux photos et aux contenus du MLI.',
    ],
  },
  {
    slug: 'prosalon',
    name: 'ProSalon',
    headline: 'Une boutique B2B pour les salons de coiffure : prix pro réservés aux comptes vérifiés, promotions ciblées et livraisons automatisées.',
    summary: 'E-commerce WooCommerce B2B bilingue FR/AR, deux plugins sur mesure et intégration de l’API du transporteur Cathedis.',
    description:
      'Étude de cas ProSalon : e-commerce B2B WooCommerce pour les professionnels de la coiffure au Maroc, comptes pro, prix dédiés, promotions ciblées et intégration Cathedis.',
    kind: 'E-commerce B2B',
    sector: 'Coiffure professionnelle',
    client: 'Distributeur de produits capillaires professionnels',
    location: 'Maroc',
    year: '2026',
    role: 'Développement WordPress & PHP sur mesure',
    engagement: 'Client direct (freelance)',
    status: 'Lancement en cours',
    url: 'https://prosalon.ma/',
    urlLabel: 'Voir prosalon.ma',
    tldr: {
      besoin: 'Vendre en ligne des marques capillaires professionnelles aux salons, barbiers et coiffeurs du Maroc, avec des prix réservés aux professionnels vérifiés.',
      approche: 'WooCommerce pour la base e-commerce, et deux plugins PHP sur mesure pour tout ce que le marché ne fait pas : logique B2B, promotions, pages marques, livraison.',
      livre: 'Une boutique bilingue français / arabe, un tableau de bord B2B avec exports Excel et des expéditions créées automatiquement chez le transporteur Cathedis.',
    },
    context: [
      'Le client distribue au Maroc des marques capillaires professionnelles (Revlon Professional, Olaplex, K18, Oribe, American Crew). Il voulait un canal de vente direct vers les salons de coiffure, les barbiers et les coiffeurs indépendants.',
      'La plateforme devait fonctionner en français et en arabe, et rester simple à administrer au quotidien.',
    ],
    problem: [
      'Le catalogue devait rester visible par tous, mais les prix professionnels réservés aux comptes vérifiés. Il fallait aussi des promotions ciblées, des pages de marque à la hauteur de marques premium et la commande par WhatsApp, très utilisée au Maroc.',
      'Côté logistique, chaque commande confirmée devait donner lieu à une expédition chez le transporteur, sans double saisie, avec un suivi mis à jour automatiquement.',
    ],
    contribution: [
      'Mise en place de la boutique WordPress / WooCommerce sur le thème WoodMart, avec Elementor et Polylang pour le français et l’arabe.',
      'Plugin « ProSalon B2B » : inscription et validation des comptes professionnels, prix pro par produit et par variation, limite de quantité pour les non-professionnels, moteur de promotions, pages marques, recherche filtrée par marque, fiche produit enrichie, commande WhatsApp et traductions arabes.',
      'Tableau de bord B2B dans l’administration : chiffre d’affaires et commandes pro, panier moyen, comptes en attente, filtres de période et exports Excel.',
      'Plugin « ProSalon Cathedis » : création des livraisons via l’API du transporteur et synchronisation du suivi.',
      'Corrections et ajustements issus de la recette du client.',
    ],
    solutions: [
      { title: 'Des prix pro sans cacher le catalogue', text: 'Le catalogue reste public avec les prix publics. Le prix professionnel, saisi produit par produit, ne s’applique qu’une fois le compte validé par l’administrateur, de l’affichage jusqu’à la commande.' },
      { title: 'Un statut qui déclenche la livraison', text: 'Le passage d’une commande au statut « Confirmée » crée l’expédition chez Cathedis, avec le montant à encaisser en cas de paiement à la livraison. Le suivi est ensuite resynchronisé automatiquement.' },
      { title: 'Des promotions pilotées par l’équipe', text: 'Produit offert, cadeau dès un montant de panier, remise sur quantité en pourcentage ou en montant fixe : chaque promotion se crée dans l’administration et cible un public précis.' },
      { title: 'Étendre le thème sans le casser', text: 'Hooks et points d’accès sur mesure là où le thème ne suffisait pas, par exemple une recherche qui ignorait la marque. Le design du thème est conservé et le site reste maintenable.' },
    ],
    features: [
      'Comptes professionnels validés manuellement',
      'Prix professionnel par produit et par variation',
      'Limite de quantité pour les non-professionnels',
      'Moteur de promotions ciblées',
      'Pages marques enrichies',
      'Recherche filtrée par marque',
      'Fiche produit : points forts, mode d’emploi, ingrédients',
      'Commande WhatsApp pré-remplie',
      'Tableau de bord B2B et exports Excel',
      'Expéditions Cathedis et suivi synchronisé',
      'Paiement à la livraison',
      'Site bilingue français / arabe',
    ],
    stack: ['WordPress', 'WooCommerce', 'PHP', 'WoodMart', 'Elementor', 'Polylang', 'MySQL', 'API Cathedis'],
    cover: { src: psHome, alt: 'Page d’accueil de ProSalon' },
    gallery: [
      { src: psProd, alt: 'Fiche produit ProSalon avec bloc d’achat, commande WhatsApp et réassurance', caption: 'Fiche produit — bloc d’achat, commande WhatsApp et réassurance' },
      { src: psSec, alt: 'Sections de fiche produit ajoutées par le plugin sur mesure', caption: 'Sections ajoutées par le plugin sur mesure : « Pourquoi choisir ce produit ? » et mode d’utilisation' },
    ],
    tint: '#ece3cf',
    notes: [
      'Le site est en cours de lancement : tant que la boutique n’est pas ouverte au public, prosalon.ma affiche une page d’attente.',
      'Les marques et visuels produits appartiennent à leurs propriétaires respectifs.',
    ],
  },
  {
    slug: 'artimezia',
    name: 'Artimezia',
    headline: 'Une plateforme bilingue anglais / arabe pour une école d’art : catalogue de formations, demandes d’inscription et back-office où l’équipe gère tous les contenus.',
    summary: 'Next.js et Payload CMS, bilingue anglais / arabe avec RTL, catalogue filtrable, panier et demandes d’inscription sans paiement en ligne.',
    description:
      'Étude de cas Artimezia : plateforme Next.js 16 et Payload CMS pour une école d’art à Casablanca, bilingue anglais / arabe, catalogue filtrable, demandes d’inscription et back-office.',
    kind: 'Plateforme de formation',
    sector: 'Éducation artistique',
    client: 'Artimezia, école d’art',
    location: 'Casablanca',
    year: '2026',
    role: 'Cahier des charges, développement full-stack & déploiement',
    engagement: 'Client direct (freelance)',
    status: 'En ligne',
    url: 'https://artimezia.com/',
    urlLabel: 'Voir artimezia.com',
    tldr: {
      besoin: 'Présenter les formations et les événements d’une école d’art en anglais et en arabe, et recueillir des demandes d’inscription que l’équipe finalise par contact direct.',
      approche: 'Next.js et Payload CMS dans un même projet : contenus bilingues avec mise en page de droite à gauche pour l’arabe, panier conservé dans le navigateur, demandes enregistrées côté serveur.',
      livre: 'Un site en ligne sur artimezia.com et un back-office où l’équipe gère formations, événements, promotions et demandes.',
    },
    context: [
      'Artimezia est une école d’art basée à Casablanca. Elle propose des formations en dessin, peinture, anatomie ou character design, mais aussi des formations business pour artistes, en ligne, en présentiel ou en cours particulier.',
      'L’école organise aussi des ateliers et des événements, et s’adresse à un public anglophone et arabophone.',
    ],
    problem: [
      'Le catalogue mélange plusieurs formats et niveaux de prix : il devait rester simple à explorer, avec des filtres et un tri clairs.',
      'L’école ne voulait pas de paiement en ligne : l’inscription se finalise par contact direct. Il fallait donc un parcours de demande fiable, et un outil pour suivre chaque demande.',
      'Enfin, l’équipe devait gérer elle-même tous les contenus, dans les deux langues.',
    ],
    contribution: [
      'Rédaction du cahier des charges initial, puis conception et développement du site, sans autre développeur.',
      'Modèle de contenu Payload CMS : formations, catégories, événements, articles, formateurs, témoignages, pages légales, demandes d’inscription et newsletter.',
      'Site bilingue anglais / arabe avec mise en page de droite à gauche, contenus traduits champ par champ dans le CMS.',
      'Catalogue filtrable et triable, panier par formation et par format, demandes d’inscription enregistrées côté serveur avec un numéro de demande.',
      'Notification e-mail à l’équipe pour chaque demande, promotions temporaires pilotées depuis le back-office, bouton WhatsApp dont le message s’adapte à la page.',
      'SEO technique et chaîne de déploiement GitHub Actions vers Hostinger.',
    ],
    solutions: [
      { title: 'Construire en dehors de l’hébergeur', text: 'La machine de build de l’hébergement manquait de mémoire. Le build complet se fait donc sur GitHub Actions, puis le projet déjà compilé est publié sur une branche de déploiement que Hostinger récupère.' },
      { title: 'Des médias qui survivent aux déploiements', text: 'L’hébergeur ne conserve pas les fichiers locaux d’un déploiement à l’autre : en production, les images sont stockées sur un service de stockage objet compatible S3.' },
      { title: 'Une demande jamais perdue', text: 'La demande est d’abord enregistrée en base, puis l’e-mail de notification part. Si l’envoi échoue, l’erreur est journalisée sans faire échouer la demande, ce qui évite les doublons.' },
      { title: 'Des demandes créées uniquement côté serveur', text: 'L’API publique du CMS ne permet pas de créer une demande : seule une action serveur le fait, en enregistrant les titres et les prix du panier au moment de la demande.' },
      { title: 'Rapide et toujours à jour', text: 'Les lectures du CMS sont mises en cache, et le cache est purgé à chaque modification dans le back-office.' },
    ],
    features: [
      'Site bilingue anglais / arabe (RTL)',
      'Catalogue filtrable : format, catégorie, thème, note, prix',
      'Tri par popularité, note ou prix',
      'Panier par formation et par format',
      'Demandes d’inscription avec numéro de demande',
      'Notification e-mail à l’équipe',
      'Promotions avec compte à rebours',
      'Événements et ateliers',
      'Journal (blog) et inscription à la newsletter',
      'Bouton WhatsApp contextuel',
      'SEO : hreflang, sitemap, données structurées',
      'Back-office avec aperçu en direct',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Payload CMS 3', 'PostgreSQL', 'Tailwind CSS', 'next-intl', 'Resend', 'GitHub Actions', 'Hostinger'],
    cover: { src: amHome, alt: 'Page d’accueil du site Artimezia' },
    mobile: { src: amHomeM, alt: 'Accueil Artimezia sur mobile' },
    gallery: [
      { src: amCourses, alt: 'Catalogue des formations Artimezia avec filtres et tri', caption: 'Catalogue — filtres par prix, format, catégorie et thème, tri' },
      { src: amCourse, alt: 'Fiche formation Artimezia avec choix du format et prix en dirhams', caption: 'Fiche formation — choix du format (en ligne, présentiel, individuel) et ajout au panier' },
      { src: amHomeAr, alt: 'Page d’accueil Artimezia en arabe, mise en page de droite à gauche', caption: 'Version arabe — mise en page de droite à gauche' },
    ],
    mobiles: [
      { src: amHomeM, alt: 'Accueil Artimezia sur mobile', caption: 'Accueil' },
      { src: amCourseM, alt: 'Fiche formation Artimezia sur mobile', caption: 'Fiche formation' },
      { src: amHomeArM, alt: 'Accueil Artimezia en arabe sur mobile', caption: 'Version arabe' },
    ],
    tint: '#e9ddd9',
    notes: [
      'Les chiffres affichés sur le site de l’école (étudiants, communauté, notes) ne sont pas des résultats du projet.',
      'Pas de paiement en ligne : c’est un choix du client, l’équipe finalise chaque inscription par contact direct.',
    ],
  },
  {
    slug: 'masoku',
    name: 'Masoku',
    headline: 'Un SaaS d’IA générative qui transforme deux photos en visuel et en vidéo marketing, avec une facturation en crédits fiable.',
    summary: 'SaaS d’IA : images (Gemini) et vidéos (Veo), abonnements et packs de crédits avec Clerk Billing et Stripe.',
    description:
      'Étude de cas Masoku : SaaS d’IA générative (images Gemini, vidéos Veo), système de crédits transactionnel, abonnements Clerk Billing, packs Stripe et API Express serverless.',
    kind: 'SaaS · IA générative',
    sector: 'Marketing & e-commerce',
    client: 'Sowenzia (startup SaaS)',
    location: 'International',
    year: '2026',
    role: 'Développement full-stack, paiements & IA',
    engagement: 'Client direct (freelance)',
    status: 'Accès anticipé',
    tldr: {
      besoin: 'Produire des visuels et des vidéos courtes de type UGC sans shooting ni montage, en libre-service, avec un modèle économique viable.',
      approche: 'Une application de génération en deux temps (image puis vidéo) branchée sur un système de crédits transactionnel, des abonnements et des packs ponctuels.',
      livre: 'Une application fonctionnelle en accès anticipé : génération d’images et de vidéos, espace utilisateur, abonnements, packs de crédits et remboursements automatiques.',
    },
    context: [
      'Masoku (d’abord lancé sous le nom UGC.AI) est un SaaS d’IA générative pour le marketing. L’utilisateur envoie une photo de son produit et une photo de modèle : l’application produit un visuel où le modèle présente le produit, puis une courte vidéo au format réseaux sociaux.',
      'Le produit est en accès anticipé, avant son lancement sur son domaine définitif.',
    ],
    problem: [
      'Chaque génération a un coût réel côté IA. Il fallait donc une facturation sans faille : débits atomiques, abonnements renouvelés, packs ponctuels, remboursement en cas d’échec et aucun double crédit.',
      'L’API devait aussi tourner en serverless sur Vercel, avec ses contraintes : système de fichiers en lecture seule, authentification entre deux domaines, durée des requêtes.',
    ],
    contribution: [
      'Système de crédits à double réserve (abonnement puis bonus) avec journal des transactions et remboursement automatique en cas d’échec de génération.',
      'Webhooks de paiement Clerk Billing (abonnements) et Stripe (packs ponctuels), protégés contre les doubles crédits.',
      'Gestion du cycle de vie des abonnements : crédits attribués à chaque paiement, rétrogradation programmée à l’échéance.',
      'Mise en production de l’API Express en TypeScript sur Vercel, base Neon Postgres via Prisma, médias sur Cloudinary, suivi des erreurs avec Sentry.',
      'Adaptation du pipeline de génération (Google Gemini pour l’image, Google Veo pour la vidéo), dont le passage à un modèle vidéo moins coûteux.',
    ],
    solutions: [
      { title: 'Des crédits sans erreur possible', text: 'Chaque débit et chaque remboursement passe par une transaction Prisma. Les crédits d’abonnement sont consommés avant les crédits achetés, et chaque mouvement est journalisé avec le solde qui en résulte.' },
      { title: 'Des paiements rejoués sans double crédit', text: 'Les événements de paiement Clerk et Stripe sont enregistrés : un webhook renvoyé par le fournisseur ne crédite pas deux fois le même compte.' },
      { title: 'Express en serverless', text: 'Le serveur TypeScript est empaqueté avec esbuild pour Vercel. La vidéo est écrite dans le répertoire temporaire du runtime avant l’envoi vers Cloudinary, le reste du système de fichiers étant en lecture seule.' },
      { title: 'Authentification entre deux domaines', text: 'Le client et l’API étant déployés séparément, les origines autorisées sont déclarées explicitement dans le middleware d’authentification.' },
      { title: 'Un coût par vidéo maîtrisé', text: 'Passage au modèle Veo 3.1 Lite pour réduire le coût de chaque génération vidéo.' },
    ],
    features: [
      'Image « in-context » : le modèle présente le produit',
      'Vidéo 9:16 ou 16:9 à partir de l’image',
      'Plan de départ, abonnements et packs de crédits',
      'Remboursement automatique en cas d’échec',
      'Historique des générations',
      'Galerie communautaire avec publication',
      'Médias servis par CDN',
      'Suivi des erreurs en production',
    ],
    stack: ['React', 'Vite', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL (Neon)', 'Clerk', 'Stripe', 'Gemini', 'Veo', 'Cloudinary', 'Vercel'],
    cover: { src: mkArch, alt: 'Schéma d’architecture de Masoku, des photos d’entrée à l’image et à la vidéo générées, avec la gestion des crédits', bare: true },
    gallery: [
      { src: mkPlans, alt: 'Page des plans et crédits de l’application', caption: 'Plans et crédits gérés par Clerk Billing (interface sous l’ancienne marque UGC.AI)' },
      { src: mkGen, alt: 'Écran de génération avec photo produit et photo modèle', caption: 'Écran de génération : photo produit, photo modèle, format et consignes' },
    ],
    tint: '#2a2622',
    notes: [
      'L’interface de départ reprend une application de référence : mon travail porte sur la facturation, les paiements, le déploiement et l’adaptation du pipeline IA.',
      'Le produit est en accès anticipé ; aucun chiffre d’usage n’est publié ici.',
    ],
  },
];

export const references: Reference[] = [
  {
    name: 'HP Immo',
    kind: 'Site vitrine immersif · Three.js',
    context: 'Freelance',
    year: '2026',
    url: 'https://immocom-3d.com/',
    description: 'Studio de rendu 3D à Casablanca : effet plan → rendu, comparateur, maquette 3D interactive en Three.js, animations GSAP et défilement fluide, dans un site statique optimisé.',
  },
  {
    name: 'Atlas Lagoon',
    kind: 'Immobilier & réservation · Next.js',
    context: 'Freelance',
    year: '2026',
    url: 'https://atlas-lagoon.vercel.app/',
    description: 'Programme d’appartements haut de gamme : catalogue filtrable, pont entre une maquette 3D et la réservation en ligne avec paiement d’avance, back-office Payload. En préproduction.',
  },
  {
    name: 'BAG — Bugshan Automotive Group',
    kind: 'Site corporate · Laravel',
    context: 'En agence',
    year: '2023',
    url: 'https://bag.co.ma/',
    description: 'Site du groupe de distribution automobile, organisé en quatre pôles. Développé en binôme : actualités, formulaire de contact et intégration Laravel / Blade.',
  },
  {
    name: 'Lincoln Casablanca',
    kind: 'Site événementiel · animations',
    context: 'En agence',
    year: '2025',
    url: 'https://lincoln-casablanca.com/',
    description: 'Site racontant la renaissance de l’hôtel Lincoln (1917) en Radisson Collection : frise chronologique, animations GSAP et tracés SVG.',
  },
  {
    name: 'RHS Emploi',
    kind: 'Site dynamique · Laravel',
    context: 'Freelance',
    year: '2023',
    url: 'https://www.rhsemploi.com/',
    description: 'Agence de travail temporaire et de recrutement : offres d’emploi avec recherche, fiches détaillées, candidature avec CV et version anglaise.',
  },
  {
    name: 'Pigeon Express Worldwide',
    kind: 'Site vitrine & espace client',
    context: 'Freelance',
    year: '2023 — 2024',
    url: 'https://www.pigeon-worldwide.com/',
    description: 'Transitaire et opérateur logistique à Casablanca : présentation des services, module de suivi d’expédition et espace client sous Laravel.',
  },
  {
    name: 'Blanca TV',
    kind: 'Média en ligne · Laravel',
    context: 'Application web',
    year: '2024',
    url: 'https://blancatv.ma/',
    description: 'Média arabophone casablancais : articles, catégories, émissions vidéo et commentaires, avec un back-office de publication.',
  },
  {
    name: 'BAG Capital',
    kind: 'Site vitrine · intégration',
    context: 'En agence',
    year: '2024',
    url: 'https://www.bagcapital.ma/',
    description: 'Financement et assurance automobile : intégration responsive de sept pages à partir des maquettes, SEO de base et formulaire de contact.',
  },
  {
    name: 'ODM — Oncologie et Diagnostic du Maroc',
    kind: 'Site multi-établissements · Laravel',
    context: 'En agence',
    year: '2024 — 2025',
    description: 'Groupe de santé : back-office Filament, pages établissements et spécialités composées par blocs, blog, candidatures et version arabe.',
  },
];

export const interactive = {
  title: 'Bornes tactiles pour un salon technologique.',
  text: 'Pour le GITEX 2024, une dizaine de bornes de présentation des entités de l’UM6P : contenus animés empaquetés en applications Electron plein écran, avec un installateur Windows.',
  items: ['Electron', 'HTML / CSS / JavaScript', 'Applications plein écran', 'Événementiel'],
};

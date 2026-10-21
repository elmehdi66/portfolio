# Décisions

## Stack : Astro statique plutôt que Next.js ou HTML à la main
Le site précédent était un HTML unique avec Tailwind en CDN. La refonte demandait plusieurs pages (études de cas, services, local SEO) avec un gabarit commun et des images optimisées. Astro génère du HTML statique sans framework JS côté client (déployable tel quel dans `public_html` sur Hostinger), gère les composants et l'optimisation d'images. Next.js aurait imposé un runtime JS inutile pour un site de contenu.

## Contenus : uniquement des faits vérifiés
Chaque fonctionnalité, technologie et contexte cité a été vérifié dans le code source local, sur le site en ligne ou dans les devis/factures (audit d'octobre 2026, notes dans `_research/`, non versionné). Pas de compteurs (« 30+ projets », « 100 % satisfaction ») ni de résultats chiffrés. Les limites sont écrites dans le bloc « Précisions » de chaque étude de cas (template adapté, préproduction, contenus tiers).

## Études de cas retenues
MLI, ProSalon, Artimezia, Masoku (ex-UGC.AI, client Sowenzia). Atlas Lagoon (préproduction) est passé en « Autres références » avec le lien atlas-lagoon.vercel.app. Les projets réalisés en agence sont cités en « Autres références » avec la mention « En agence ». Le nom de l'agence n'est pas affiché (choix déjà fait sur l'ancien site).

## Masoku : un schéma plutôt que des captures en grand
La page publique de Masoku est un brouillon (lorem ipsum, badge « 10,000+ creators » de template) et l'interface de départ reprend une application de référence. Le visuel principal est un schéma d'architecture (`scripts/diagrams.mjs`) qui montre le travail réellement attribuable : crédits, paiements, déploiement, pipeline IA.

## ProSalon : version française
Captures réalisées en français depuis la session administrateur (le site public est en page d'attente avant lancement). Lien vers `https://prosalon.ma/`.

## Suivi : mêmes identifiants, chargement différé
GA4 `G-MQYD4113F1`, Google Ads `AW-18275149812` (+ conversion du formulaire) et GTM `GTM-WDC9FMXV` sont conservés. Les scripts Google sont chargés après l'affichage ou à la première interaction (file `dataLayer` en attendant) : Lighthouse mobile de l'accueil passe de 27 à ~90.

## Formulaire : EmailJS conservé
Même service, template et clé publique que l'ancien site. Les champs ajoutés (type de projet, budget, délai, entreprise, téléphone) sont aussi intégrés dans `subject` et `message`, donc visibles même si le template EmailJS n'utilise que `{{name}} {{email}} {{subject}} {{message}}`.

## Typographie et couleurs
Bricolage Grotesque (titres), Instrument Sans (texte), JetBrains Mono (repères). Papier `#f4f1ea`, encre `#141311`, accent argile `#b5401f` (contraste AA). Pas de violet, pas de dégradés lumineux.

## Anglais : stratégie, pas encore de pages
Le site est en français (cible principale : Maroc). Les contenus sont centralisés dans `src/data/` pour faciliter une version `/en/` : dupliquer les données en anglais, ajouter les routes `/en/…` et les balises `hreflang` dans `Layout.astro`. À faire quand des prospects anglophones arrivent régulièrement.

## Marque : Gazry Dev
Le site met en avant la marque « Gazry Dev ». Le nom de famille n'apparaît pas ; quand il faut parler de la personne, seul le prénom « El Mehdi » est utilisé (`site.person`). Seule l'URL du profil LinkedIn contient encore le nom complet (non modifiable).

## Tarifs : packs « à partir de » + devis
Page `/tarifs/` : 4 packs (Starter 3 500 DH, Business 7 000 DH, E-commerce 9 000 DH, Custom 15 000 DH), Enterprise sur devis, services complémentaires et FAQ. Prix de départ repris sur l'accueil (cartes compactes), la page Services (« dès X DH ») et la FAQ. Les boutons « Choisir ce pack » ouvrent `/contact/?pack=<id>`, qui présélectionne type de projet, budget et pack ; le pack choisi est ajouté à l'objet et au message EmailJS. Toutes les valeurs viennent de `src/data/pricing.ts`.

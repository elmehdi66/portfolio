# Current State — refonte gazry.dev

Branche `refonte-2026` (non poussée). `74234b5` = copie du site en ligne avant refonte.

## Stack
Astro 7 statique → `dist/` à téléverser dans `public_html` (Hostinger). CSS maison, polices auto-hébergées, EmailJS, GA4/Ads/GTM (chargement différé).

## Fait
- Audit complet (site actuel, Lighthouse, 15 projets vérifiés dans le code / en ligne / devis-factures, benchmark de portfolios).
- Pages : accueil, réalisations, 4 études de cas (MLI, ProSalon, Artimezia, Masoku), Atlas Lagoon en référence, services, à propos, contact, page Casablanca, 404, sitemap.
- SEO : titles/descriptions uniques, canonical, OG (images générées), JSON-LD, 301 des anciennes URL, robots.txt, llms.txt.
- Formulaire testé avec EmailJS simulé (validation, succès, erreur, données envoyées). Aucun e-mail réel envoyé.
- Lighthouse local (mobile) : accueil 90 / 100 / 100 / 100 ; desktop 99 ; études de cas 98. Avant : 27 / 100 / 100 / 100.
- Aucun lien interne cassé (497 vérifiés), pas de débordement horizontal (390 px et 1440 px).

## Reste à faire / à valider par El Mehdi
1. Envoyer un vrai message test depuis /contact/ après mise en ligne (vérifier la réception sur le template EmailJS).
2. Confirmer l'accord des clients pour publier les captures (Atlas Lagoon : rendus fournis par des tiers, préproduction).
3. Témoignages : repris de l'ancien site (prénoms seulement) — idéalement ajouter nom, entreprise, lien.
4. Vérifier que l'adresse contact@gazry.dev reçoit bien les e-mails.
5. Quand ProSalon / Masoku seront lancés : mettre à jour statut, liens et captures (`src/data/projects.ts`).
6. Visibilité IA (constat du 21/10/2026) : 0 page indexée par Bing, alors que la recherche de ChatGPT s'appuie surtout sur Bing ; le CDN Hostinger renvoie 429 à GPTBot. À faire : Bing Webmaster Tools (import depuis Search Console) + `npm run indexnow` après chaque mise en ligne, débloquer GPTBot (hPanel / support Hostinger), fiches Google Business Profile + Bing Places, profils Malt / LinkedIn « Gazry Dev », lien « Réalisé par Gazry Dev » sur les sites clients.
7. Optionnel : version anglaise `/en/` (voir DECISIONS.md), pages services dédiées si le contenu grandit.

## Commandes
`npm run build`, `npm run preview`, `npm run indexnow` (après mise en ligne), `npm run og` (PowerShell), `node scripts/diagrams.mjs`.

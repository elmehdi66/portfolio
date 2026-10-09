# Current State — refonte gazry.dev

Branche : `refonte-2026` (commit 74234b5 = snapshot du site en ligne avant refonte, fichiers serveur inclus).

## Stack retenue
- Astro 7 (sortie 100 % statique, `build.format: 'directory'`, `trailingSlash: 'always'`) → `dist/` à téléverser dans `public_html` (Hostinger, Apache).
- CSS maison (tokens dans `src/styles/global.css`), aucune lib JS hors EmailJS (chargé à la demande).
- Polices auto-hébergées : Bricolage Grotesque (titres), Instrument Sans (texte), JetBrains Mono (labels).
- Direction artistique : éditoriale, papier chaud `#f4f1ea` + encre `#141311` + accent argile `#b5401f`, filets fins, grilles asymétriques, sections « nuit » pour les CTA.

## À conserver du site actuel
- GA4 `G-MQYD4113F1`, Google Ads `AW-18275149812` + conversion contact, GTM `GTM-WDC9FMXV` (dans `src/data/site.ts`).
- EmailJS (service_oqgwels / template_yfgh8ko / clé publique) : garder les champs `name`, `email`, `subject`, `message` ; composer les champs ajoutés (type, budget, entreprise) dans `subject`/`message`.
- WhatsApp +212 621 810 047, e-mail contact@gazry.dev, LinkedIn, page locale Casablanca + FAQ schema, `googlec5668a7df50980b0.html`, `llms.txt`.

## Audit — constats confirmés
- `/developpeur-web-freelance-casablanca/` (canonical + lien footer) → 404 ; seul le `.html` répond 200.
- `favicon.svg` cité dans le JSON-LD → 404 ; favicon emoji.
- `old.html` et `README.md` publics (contenu dupliqué).
- Tailwind via CDN en production, AOS + vanilla-tilt, effet machine à écrire.
- Pas de menu mobile (liens masqués < md).
- Compteurs invérifiables (30+ projets, 100 % satisfaction) + bug d'affichage « 100% / % Satisfaction ».
- Réalisations = 6 cartes génériques sans visuel ; liens sociaux placeholders (`#`).
- E-mail incohérent (contact@gazry.dev vs elmehdighazri@gmail.com).

## Projets (audit agents interrompu — à reprendre)
- ProSalon : prosalon.ma affiche « Coming soon » publiquement. Sources locales : `Downloads/prosalon-*`.
- MLI : `Desktop/elmehdi/mli/mli-web-hostinger` (+ `Downloads/mli*`).
- Atlas Lagoon : `Desktop/elmehdi/hpmedi-hpimmo/atlas-lagoon`.
- SOWENZIA : nom introuvable (web + disque). Seul SaaS IA trouvé : UGC.AI (`Downloads/video-app-corrected/video-app`, React+Vite+TS, Clerk, Express, Prisma/Neon, Cloudinary, Gemini + Veo), https://ugc-project-8pn3.vercel.app/ → **demander à l'utilisateur si SOWENZIA = UGC.AI**.
- Autres : Artimezia, Pigeon Worldwide, projets agence (BAG Capital, BAG, DFS, ODM), Lincoln, Blanca TV, RHS Emploi, bornes Electron (GITEX 2024).
- Captures : outil `C:\Users\mghaz\AppData\Local\Temp\gztools\shoot.mjs` (Edge headless, playwright-core). Sorties dans `_research/shots/` (ignoré par git).
- Reprise du workflow d'audit (résultats déjà terminés en cache) : `Workflow({scriptPath: <script gazry-portfolio-audit>, resumeFromRunId: "wf_487fc305-77e"})`.

## Fait
- Repo restructuré (`public/` : .htaccess, robots, llms, vérif. Google), anciens fichiers retirés (dans l'historique git).
- `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/styles/global.css`, `src/data/site.ts`, `src/data/services.ts` (5 services, 5 étapes, FAQ).

## Prochaines étapes
1. Vérifier le build de test (`npx astro build`).
2. Reprendre l'audit projets → `src/data/projects.ts` + captures dans `src/assets/projects/<slug>/`.
3. Layout (SEO, header avec menu mobile, footer), composants (BrowserFrame, PhoneFrame, ProjectRow, ContactForm, FAQ).
4. Pages : `/`, `/realisations/`, `/realisations/[slug]/`, `/services/`, `/a-propos/`, `/contact/`, `/developpeur-web-freelance-casablanca/`, `404`, `sitemap.xml`.
5. `.htaccess` : 301 `.html` → URL propre, `old.html` → `/`, cache `/_astro/`, en-têtes de sécurité, `ErrorDocument 404`.
6. OG images + favicon, tests desktop/tablette/mobile, Lighthouse, revue finale, zip `dist/`.

# gazry.dev — site de Gazry Dev (El Mehdi)

Site statique généré avec [Astro](https://astro.build), déployé sur l'hébergement Hostinger (Apache) de `gazry.dev`.

## Commandes

```bash
npm install          # une fois
npm run dev          # développement : http://localhost:4321
npm run build        # génère le site dans dist/
npm run preview      # sert dist/ en local
npm run og           # régénère les images de partage (public/og/) et les icônes
npm run shots        # convertit des captures PNG en sources WebP (voir scripts/shots.json)
node scripts/diagrams.mjs   # régénère le schéma d'architecture Masoku
```

`og`, `diagrams` et la capture d'écran utilisent Microsoft Edge installé (via `playwright-core`) : lancez-les depuis PowerShell.

## Mise en ligne (Hostinger)

1. `npm run build`
2. Sauvegarder l'actuel `public_html` (Gestionnaire de fichiers → compresser).
3. Vider `public_html` **sauf** les éléments que vous voulez garder (ex. `.well-known/`).
4. Téléverser **le contenu** de `dist/` dans `public_html` (y compris `.htaccess`).
5. Vérifier : `https://gazry.dev/`, `/realisations/mli/`, `/contact/` (envoi d'un message test), `https://gazry.dev/developpeur-web-freelance-casablanca.html` (doit rediriger en 301).
6. Google Search Console : soumettre `https://gazry.dev/sitemap.xml`.

## Modifier le contenu

| Quoi | Où |
|---|---|
| Coordonnées, disponibilité, suivi (GA4/Ads/GTM), EmailJS | `src/data/site.ts` |
| Services, méthode, FAQ | `src/data/services.ts` |
| Études de cas et références | `src/data/projects.ts` (+ images dans `src/assets/projects/<slug>/`) |
| Compétences | `src/data/skills.ts` |
| Témoignages | `src/data/testimonials.ts` |
| Couleurs, typographies, espacements | `src/styles/global.css` (variables `:root`) |

Pour ajouter une étude de cas : capturer les écrans, les convertir avec `npm run shots`, ajouter l'objet dans `projects` (le type `Project` est dans `src/data/types.ts`), ajouter l'entrée dans `scripts/og-projects.json` puis `npm run og`. La page `/realisations/<slug>/`, le sitemap et les listes se mettent à jour automatiquement.

## Structure

```
public/            fichiers copiés tels quels (.htaccess, robots.txt, llms.txt, icônes, og/)
src/assets/        images optimisées au build (AVIF/WebP + repli JPG)
src/components/    composants (Header, Footer, ContactForm, ProjectFeature, BrowserFrame…)
src/data/          contenus du site
src/layouts/       gabarit commun (SEO, Open Graph, JSON-LD, suivi)
src/pages/         une page = une URL
src/scripts/       JavaScript global (menu, apparitions, horloge…)
scripts/           outils : import de captures, images OG, schémas
docs/              état du projet, décisions, architecture
```

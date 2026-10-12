# Architecture

## Vue d'ensemble
Site 100 % statique (Astro 7, `output: static`, `build.format: directory`, `trailingSlash: always`). Aucun serveur applicatif : Apache (Hostinger) sert `dist/`.

```
src/data/*.ts ──► src/pages/*.astro ──► astro build ──► dist/ ──► public_html (Hostinger)
                     │
                     ├─ layouts/Layout.astro : <head> SEO, OG, JSON-LD, suivi Google, header/footer
                     └─ components/ : blocs réutilisables
```

## Pages
| URL | Fichier |
|---|---|
| `/` | `src/pages/index.astro` |
| `/realisations/` | `src/pages/realisations/index.astro` |
| `/realisations/<slug>/` | `src/pages/realisations/[slug].astro` (généré depuis `projects`) |
| `/services/` | `src/pages/services/index.astro` |
| `/a-propos/` | `src/pages/a-propos.astro` |
| `/contact/` | `src/pages/contact.astro` |
| `/developpeur-web-freelance-casablanca/` | page locale |
| `/sitemap.xml` | `src/pages/sitemap.xml.ts` |
| `/404.html` | `src/pages/404.astro` (`ErrorDocument` dans `.htaccess`) |

## Données structurées
`src/data/schema.ts` : `Person` (#person), `ProfessionalService` (#business, avec catalogue de services), `WebSite`, `CreativeWork` par étude de cas, `BreadcrumbList`, `FAQPage`, `ProfilePage`, `ContactPage`.

## Images
Captures sources en WebP 2400 px (desktop) / 780 px (mobile) dans `src/assets/projects/`. Astro produit des `<picture>` AVIF + WebP + JPG en plusieurs largeurs, chargés en différé sauf la première image visible.

## JavaScript client
- `src/scripts/main.ts` (~3 Ko) : apparitions au défilement (IntersectionObserver), en-tête masqué au défilement, menu mobile accessible (focus piégé, Échap), horloge Casablanca, copie d'e-mail, barre d'action mobile.
- `ContactForm.astro` : validation, envoi EmailJS (import dynamique au premier envoi), conversion Google Ads.
- Respect de `prefers-reduced-motion` ; le contenu reste visible sans JavaScript.

## Hébergement (`public/.htaccess`)
HTTPS + domaine sans www, 301 des anciennes URL (`developpeur-web-freelance-casablanca.html`, `old.html`, `index.html`), barre oblique finale, blocage des fichiers cachés, en-têtes de sécurité, cache long pour `/_astro/` (fichiers versionnés), compression.

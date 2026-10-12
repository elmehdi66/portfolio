import type { APIRoute } from 'astro';
import { projects } from '../data/projects';

const pages = [
  { path: '/', priority: '1.0' },
  { path: '/realisations/', priority: '0.9' },
  ...projects.map((p) => ({ path: `/realisations/${p.slug}/`, priority: '0.8' })),
  { path: '/services/', priority: '0.9' },
  { path: '/a-propos/', priority: '0.7' },
  { path: '/contact/', priority: '0.8' },
  { path: '/developpeur-web-freelance-casablanca/', priority: '0.8' },
];

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map((p) => `  <url>\n    <loc>${new URL(p.path, site).href}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>`)
    .join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

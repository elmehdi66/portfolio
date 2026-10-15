// Génère les images Open Graph (1200x630) et les icônes du site avec les vraies polices.
// Usage : npm run og   (utilise Microsoft Edge installé, via playwright-core)
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright-core';
import sharp from 'sharp';

const root = process.cwd();
const font = (p) => `data:font/woff2;base64,${fs.readFileSync(path.join(root, 'node_modules', p)).toString('base64')}`;
const FONTS = `
@font-face{font-family:D;src:url(${font('@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-opsz-normal.woff2')}) format('woff2');font-weight:200 800}
@font-face{font-family:T;src:url(${font('@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2')}) format('woff2');font-weight:400 700}
@font-face{font-family:M;src:url(${font('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff2')}) format('woff2');font-weight:500}
*{margin:0;box-sizing:border-box}body{background:#f4f1ea;color:#141311;font-family:T}`;

// Pages de projets : slug, nom, type, image de couverture (source WebP)
const PROJECTS = JSON.parse(fs.readFileSync(path.join(root, 'scripts', 'og-projects.json'), 'utf8'));

const dataUri = async (file, width) => {
  const buf = await sharp(path.join(root, file)).resize({ width }).jpeg({ quality: 82 }).toBuffer();
  return `data:image/jpeg;base64,${buf.toString('base64')}`;
};

const defaultHtml = () => `<!doctype html><html><head><style>${FONTS}
.c{width:1200px;height:630px;padding:64px 72px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}
.top{display:flex;justify-content:space-between;font-family:M;font-size:17px;letter-spacing:.02em;text-transform:uppercase;color:#5f5a52}
.mark{display:inline-grid;place-items:center;width:46px;height:46px;border-radius:12px;background:#141311;color:#f4f1ea;font-family:D;font-weight:600;font-size:21px;letter-spacing:-.04em;margin-right:16px;vertical-align:middle;text-transform:none}
h1{font-family:D;font-weight:600;font-size:104px;line-height:.92;letter-spacing:-.05em}
h1 em{font-style:normal;color:#b5401f}
.bot{display:flex;justify-content:space-between;align-items:flex-end;font-size:24px;color:#3b3833}
.bot b{font-family:D;font-weight:600;font-size:30px;letter-spacing:-.02em;color:#141311}
.rule{position:absolute;left:72px;right:72px;top:132px;border-top:1px solid rgba(20,19,17,.16)}
</style></head><body><div class="c">
<div class="top"><span><span class="mark">gd</span>Gazry Dev</span><span>gazry.dev</span></div><div class="rule"></div>
<h1>Sites &amp; applications<br>web <em>sur mesure</em>,<br>de l’idée à la mise en ligne.</h1>
<div class="bot"><span><b>Développeur full-stack freelance</b><br>Casablanca, Maroc</span><span style="font-family:M;font-size:16px;text-transform:uppercase;color:#5f5a52">React · Next.js · Laravel · WordPress</span></div>
</div></body></html>`;

const projectHtml = (p, img) => `<!doctype html><html><head><style>${FONTS}
.c{width:1200px;height:630px;display:grid;grid-template-columns:470px 1fr;overflow:hidden}
.l{padding:56px 0 56px 64px;display:flex;flex-direction:column;justify-content:space-between}
.k{font-family:M;font-size:16px;text-transform:uppercase;color:#b5401f;letter-spacing:.02em}
h1{font-family:D;font-weight:600;font-size:${p.name.length > 12 ? 70 : 88}px;line-height:.92;letter-spacing:-.05em;margin-top:18px}
.h{margin-top:22px;font-size:23px;line-height:1.35;color:#3b3833;max-width:380px}
.f{font-family:M;font-size:15px;text-transform:uppercase;color:#5f5a52;display:flex;align-items:center;gap:12px}
.mark{display:inline-grid;place-items:center;width:38px;height:38px;border-radius:10px;background:#141311;color:#f4f1ea;font-family:D;font-weight:600;font-size:17px;letter-spacing:-.04em;text-transform:none}
.r{background:${p.tint || '#ebe6db'};padding:64px 0 0 52px;position:relative}
.fr{border-radius:14px 0 0 0;overflow:hidden;box-shadow:0 30px 60px -30px rgba(20,19,17,.5);background:#fbfaf6;height:100%}
.bar{height:30px;display:flex;align-items:center;gap:6px;padding-left:14px;border-bottom:1px solid rgba(20,19,17,.12)}
.bar i{width:9px;height:9px;border-radius:50%;background:#e1dbcd;display:block}
.fr img{display:block;width:100%;height:calc(100% - 30px);object-fit:cover;object-position:top left}
</style></head><body><div class="c">
<div class="l"><div><p class="k">${p.kind}</p><h1>${p.name}</h1><p class="h">${p.headline}</p></div>
<p class="f"><span class="mark">gd</span>Étude de cas · Gazry Dev</p></div>
<div class="r"><div class="fr"><div class="bar"><i></i><i></i><i></i></div><img src="${img}"></div></div>
</div></body></html>`;

const iconHtml = (size) => `<!doctype html><html><head><style>${FONTS}
body{background:transparent}
.i{width:${size}px;height:${size}px;border-radius:${Math.round(size * 0.24)}px;background:#141311;color:#f4f1ea;display:grid;place-items:center;font-family:D;font-weight:650;font-size:${Math.round(size * 0.5)}px;letter-spacing:-.05em;line-height:1;padding-bottom:${Math.round(size * 0.06)}px}
</style></head><body><div class="i">gd</div></body></html>`;

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
const shot = async (html, out, clip) => {
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out, clip, omitBackground: true });
  console.log('✓', path.relative(root, out));
};

fs.mkdirSync(path.join(root, 'public/og'), { recursive: true });
await shot(defaultHtml(), path.join(root, 'public/og/default.png'), { x: 0, y: 0, width: 1200, height: 630 });
for (const p of PROJECTS) {
  const img = await dataUri(p.image, 1400);
  await shot(projectHtml(p, img), path.join(root, `public/og/${p.slug}.png`), { x: 0, y: 0, width: 1200, height: 630 });
}

// Icônes
for (const [size, name] of [[180, 'apple-touch-icon.png'], [192, 'icon-192.png'], [512, 'icon-512.png'], [32, 'favicon-32.png']]) {
  await page.setViewportSize({ width: size, height: size });
  await shot(iconHtml(size), path.join(root, 'public', name), { x: 0, y: 0, width: size, height: size });
}
await browser.close();

// favicon.ico (entrée PNG 32x32 — format ICO valide depuis Windows Vista)
const png = fs.readFileSync(path.join(root, 'public/favicon-32.png'));
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt8(0, 8); header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12); header.writeUInt32LE(png.length, 14); header.writeUInt32LE(22, 18);
fs.writeFileSync(path.join(root, 'public/favicon.ico'), Buffer.concat([header, png]));
fs.unlinkSync(path.join(root, 'public/favicon-32.png'));
console.log('✓ public/favicon.ico');

// Optimise les PNG générés
for (const f of fs.readdirSync(path.join(root, 'public/og'))) {
  const p = path.join(root, 'public/og', f);
  const buf = await sharp(p).png({ compressionLevel: 9, palette: false }).toBuffer();
  fs.writeFileSync(p, buf);
}

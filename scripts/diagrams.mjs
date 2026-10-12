// Génère les schémas d'architecture utilisés comme visuels d'études de cas.
// Usage : node scripts/diagrams.mjs
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright-core';
import sharp from 'sharp';

const root = process.cwd();
const font = (p) => `data:font/woff2;base64,${fs.readFileSync(path.join(root, 'node_modules', p)).toString('base64')}`;
const FONTS = `
@font-face{font-family:D;src:url(${font('@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-opsz-normal.woff2')}) format('woff2');font-weight:200 800}
@font-face{font-family:T;src:url(${font('@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2')}) format('woff2');font-weight:400 700}
@font-face{font-family:M;src:url(${font('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff2')}) format('woff2');font-weight:500}`;

const masoku = `<!doctype html><html><head><style>${FONTS}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:750px;background:#121110;color:#f1ede4;font-family:T;padding:56px 52px;position:relative;overflow:hidden}
.top{display:flex;justify-content:space-between;align-items:baseline}
.k{font-family:M;font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:#b3ac9f}
.k b{color:#f0a24a;font-weight:500}
h1{font-family:D;font-weight:600;font-size:46px;letter-spacing:-.04em;line-height:1;margin-top:10px}
.flow{margin-top:56px;display:grid;grid-template-columns:200px 34px 230px 34px 1fr;align-items:center}
.col{display:grid;gap:10px}
.box{border:1px solid rgba(241,237,228,.18);border-radius:12px;padding:14px 16px;background:#1b1917}
.box h3{font-family:D;font-weight:600;font-size:18px;letter-spacing:-.02em;line-height:1.15}
.box p{font-size:13px;color:#b3ac9f;margin-top:5px;line-height:1.4}
.box .t{font-family:M;font-size:10.5px;text-transform:uppercase;letter-spacing:.04em;color:#f0a24a;margin-bottom:6px;display:block}
.in{padding:11px 14px}
.in h3{font-size:15px}
.arrow{height:2px;background:linear-gradient(90deg,rgba(241,237,228,.15),#f0a24a);position:relative;margin:0 6px}
.arrow:after{content:'';position:absolute;right:-2px;top:-4px;border-left:8px solid #f0a24a;border-top:5px solid transparent;border-bottom:5px solid transparent}
.api{border-color:#f0a24a;background:#221d16}
.ai{display:grid;gap:12px}
.ai .row{display:grid;grid-template-columns:1fr 26px 170px;align-items:center}
.out{background:#f1ede4;color:#121110;border-color:#f1ede4}
.out p{color:#5f5a52}.out .t{color:#b5401f}
.v{width:2px;height:22px;background:#f0a24a;margin:0 auto;opacity:.8}
.bill{margin-top:34px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.lbl{margin-top:30px}
.foot{position:absolute;left:52px;right:52px;bottom:28px;display:flex;justify-content:space-between;border-top:1px solid rgba(241,237,228,.14);padding-top:12px}
</style></head><body>
<div class="top"><div><p class="k">Schéma d’architecture · <b>Masoku</b> (ex-UGC.AI)</p><h1>De deux photos à une vidéo UGC, payée en crédits.</h1></div></div>
<div class="flow">
  <div class="col">
    <div class="box in"><span class="t">Entrée</span><h3>Photo produit</h3></div>
    <div class="box in"><span class="t">Entrée</span><h3>Photo modèle</h3></div>
    <div class="box in"><span class="t">Entrée</span><h3>Nom, description, prompt</h3></div>
  </div>
  <div class="arrow"></div>
  <div class="box api"><span class="t">API Express · Vercel serverless</span><h3>Vérifie le solde et débite les crédits</h3><p>Transaction Prisma, puis appel des modèles. Remboursement automatique si la génération échoue.</p></div>
  <div class="arrow"></div>
  <div class="ai">
    <div class="row"><div class="box"><span class="t">Google Gemini</span><h3>Image « in-context »</h3><p>Le modèle tient ou utilise le produit.</p></div><div class="arrow"></div><div class="box out"><span class="t">Cloudinary</span><h3>Visuel stocké</h3></div></div>
    <div class="row"><div class="box"><span class="t">Google Veo 3.1 Lite</span><h3>Vidéo 9:16 ou 16:9</h3><p>Générée à partir de l’image, 720p.</p></div><div class="arrow"></div><div class="box out"><span class="t">Cloudinary</span><h3>Vidéo stockée</h3></div></div>
  </div>
</div>
<p class="k lbl" style="margin-top:58px">Monétisation &amp; données</p>
<div class="bill" style="margin-top:12px">
  <div class="box"><span class="t">Clerk Billing</span><h3>Abonnements</h3><p>Crédits attribués à chaque paiement, webhooks idempotents.</p></div>
  <div class="box"><span class="t">Stripe</span><h3>Packs ponctuels</h3><p>Payment Links et webhook signé.</p></div>
  <div class="box"><span class="t">Ledger</span><h3>Crédits à double réserve</h3><p>Abonnement d’abord, bonus ensuite, chaque mouvement journalisé.</p></div>
  <div class="box"><span class="t">Neon Postgres · Prisma</span><h3>Données</h3><p>Utilisateurs, projets, transactions, événements webhook.</p></div>
</div>
<div class="foot"><p class="k">React · Vite · TypeScript · Express · Prisma · Clerk · Stripe · Gemini · Veo · Cloudinary · Sentry</p><p class="k">gazry.dev</p></div>
</body></html>`;

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1200, height: 750 }, deviceScaleFactor: 2 });
await page.setContent(masoku, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
const buf = await page.screenshot({ type: 'png' });
await browser.close();
const out = path.join(root, 'src/assets/projects/masoku/architecture.webp');
fs.mkdirSync(path.dirname(out), { recursive: true });
await sharp(buf).webp({ quality: 90 }).toFile(out);
console.log('✓', path.relative(root, out));

// Convertit les captures brutes (PNG 2x) en sources WebP légères pour src/assets/projects/.
// Usage : node scripts/import-shots.mjs scripts/shots.json
// shots.json : [{ "in": "_research/shots/mli/home-desktop.png", "out": "mli/home.webp", "width": 2400, "crop": 1500 }]
//   width : largeur max de sortie (px) — crop : hauteur max conservée depuis le haut, en px de sortie (optionnel)
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const manifest = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const OUT_ROOT = path.resolve('src/assets/projects');

for (const item of manifest) {
  const input = path.resolve(item.in);
  const out = path.join(OUT_ROOT, item.out);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  let img = sharp(input).resize({ width: item.width ?? 2400, withoutEnlargement: true });
  if (item.crop) {
    const buf = await img.toBuffer();
    const meta = await sharp(buf).metadata();
    img = sharp(buf).extract({ left: 0, top: item.top ?? 0, width: meta.width, height: Math.min(item.crop, meta.height - (item.top ?? 0)) });
  }
  await img.webp({ quality: item.quality ?? 86, effort: 5 }).toFile(out);
  const m = await sharp(out).metadata();
  console.log(`${item.out}  ${m.width}x${m.height}  ${(fs.statSync(out).size / 1024).toFixed(0)} KB`);
}

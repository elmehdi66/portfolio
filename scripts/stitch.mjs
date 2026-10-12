// node stitch.mjs <out.webp> <tl> <tr> <bl> <br> [outWidth=2400]
import sharp from 'sharp';
const [out, ...rest] = process.argv.slice(2);
const files = rest.slice(0, 4);
const outW = Number(rest[4] || 2400);
const m0 = await sharp(files[0]).metadata();
const W = m0.width, H = m0.height;
const tiles = await Promise.all(files.map((f) => sharp(f).resize(W, H, { fit: 'fill' }).toBuffer()));
const canvas = await sharp({ create: { width: W * 2, height: H * 2, channels: 3, background: '#ffffff' } })
  .composite([
    { input: tiles[0], left: 0, top: 0 }, { input: tiles[1], left: W, top: 0 },
    { input: tiles[2], left: 0, top: H }, { input: tiles[3], left: W, top: H },
  ]).png().toBuffer();
const outH = Math.round((outW / (W * 2)) * H * 2);
await sharp(canvas).resize(outW, outH, { fit: 'fill' }).webp({ quality: 86 }).toFile(out);
console.log(out, outW + 'x' + outH);

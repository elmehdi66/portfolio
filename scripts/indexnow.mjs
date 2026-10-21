// Signale toutes les URL du sitemap à Bing (et aux autres moteurs IndexNow).
// À lancer après chaque mise en ligne : npm run indexnow
// La clé doit être publiée à la racine du site (public/<clé>.txt).
const host = 'gazry.dev';
const key = '04d3b55dd9ab81721f5f8c417b5ee335';
const keyLocation = `https://${host}/${key}.txt`;

async function main() {
  const live = await fetch(keyLocation);
  if (!live.ok || (await live.text()).trim() !== key) {
    console.error(`Clé introuvable sur ${keyLocation} (HTTP ${live.status}). Déployez le site avant de lancer ce script.`);
    return false;
  }

  const sitemap = await (await fetch(`https://${host}/sitemap.xml`)).text();
  const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (!urlList.length) {
    console.error('Aucune URL trouvée dans le sitemap.');
    return false;
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
  });
  // 200 = reçu, 202 = reçu (clé en cours de validation)
  console.log(`IndexNow : HTTP ${res.status} pour ${urlList.length} URL`);
  if (!res.ok) console.error(await res.text());
  return res.ok;
}

// exitCode plutôt que process.exit() : évite un crash de Node sous Windows avec fetch en cours
if (!(await main())) process.exitCode = 1;

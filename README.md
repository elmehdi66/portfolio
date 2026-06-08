# Portfolio Elmehdi - Version HTML Statique

Portfolio professionnel moderne pour Elmehdi, développeur Full-Stack freelance.

## 📁 Fichiers inclus

- **index.html** - Page principale du portfolio (version complète)
- **styles.css** - Feuille de styles CSS personnalisée
- **README.md** - Ce fichier

## 🚀 Comment utiliser

### Option 1: Ouvrir directement
Double-cliquez simplement sur `index.html` pour l'ouvrir dans votre navigateur.

### Option 2: Serveur local (recommandé)

#### Avec Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Avec Node.js
```bash
# Installer http-server
npm install -g http-server

# Lancer le serveur
http-server
```

#### Avec PHP
```bash
php -S localhost:8000
```

Puis ouvrez votre navigateur à `http://localhost:8000`

## 🎨 Sections du portfolio

1. **Hero Section** - Présentation principale avec 2 CTA
2. **Expertise** - 8 services proposés
3. **Pourquoi travailler avec moi** - 6 avantages
4. **Réalisations** - 6 études de cas génériques
5. **Processus** - 6 étapes de travail
6. **Technologies** - 10 technologies maîtrisées
7. **Témoignages** - Placeholder pour futurs avis
8. **Contact** - Formulaire et informations de contact

## 🎯 Fonctionnalités

- ✅ Navigation sticky avec scroll smooth
- ✅ Design responsive (mobile-first)
- ✅ Animations discrètes et professionnelles
- ✅ Formulaire de contact interactif
- ✅ Hover effects sur les cartes
- ✅ Icônes SVG intégrées
- ✅ Mises en page modernes

## 🛠️ Personnalisation

### Changer les couleurs
Dans `styles.css`, modifiez les variables de couleur :
```css
.bg-blue-600 {
    background-color: #2563eb; /* Couleur principale */
}

.text-blue-600 {
    color: #2563eb; /* Couleur du texte */
}
```

### Modifier les informations de contact
Dans `index.html`, recherchez et modifiez la section Contact :
```html
<div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
    <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
    </div>
    <div>
        <p class="text-sm font-medium">Email</p>
        <p class="text-sm text-gray-600">contact@elmehdi.dev</p> <!-- Modifiez ici -->
    </div>
</div>
```

### Ajouter des projets
Dans la section Réalisations, dupliquez un bloc de projet :
```html
<div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 card-hover transition-all duration-300">
    <h3 class="text-lg font-semibold mb-2">Votre titre</h3>
    <p class="text-sm text-gray-600 mb-4">Description du projet</p>
    <div class="mb-4">
        <p class="text-sm font-medium mb-2">Technologies</p>
        <div class="flex flex-wrap gap-2">
            <span class="badge">Tech 1</span>
            <span class="badge">Tech 2</span>
        </div>
    </div>
</div>
```

### Formulaire de contact
Le formulaire actuel affiche une alerte JavaScript. Pour le rendre fonctionnel, remplacez le script dans `index.html` :

```javascript
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Envoyer à votre backend ou service d'email
    fetch('/votre-endpoint-api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert('Message envoyé avec succès !');
        this.reset();
    })
    .catch(error => {
        alert('Erreur lors de l'envoi. Veuillez réessayer.');
    });
});
```

## 📱 Navigation

La navigation fonctionne avec des ancres HTML :
- `#expertise` - Section Expertise
- `#realisations` - Section Réalisations
- `#processus` - Section Processus
- `#technologies` - Section Technologies
- `#contact` - Section Contact

## 🌐 Déploiement

### Netlify
1. Glissez-déposez les fichiers sur Netlify Drop
2. Ou connectez votre repository Git

### Vercel
1. Installez Vercel CLI: `npm i -g vercel`
2. Lancez: `vercel`

### GitHub Pages
1. Poussez les fichiers sur GitHub
2. Activez GitHub Pages dans les paramètres du repository

### Hébergement classique
Téléversez simplement les fichiers sur votre serveur via FTP ou SFTP.

## 🔧 Compatibilité

- ✅ Chrome (dernière version)
- ✅ Firefox (dernière version)
- ✅ Safari (dernière version)
- ✅ Edge (dernière version)
- ✅ Mobile browsers

## 📝 Notes

- Le portfolio utilise Tailwind CSS via CDN pour le styling
- Toutes les icônes sont en SVG inline
- Le formulaire de contact est prêt à être connecté à un backend
- Le design est 100% responsive et mobile-first

## 🎨 Thèmes

Pour changer le thème, modifiez les couleurs dans `styles.css` :
- `#2563eb` - Bleu principal
- `#1d4ed8` - Bleu hover
- `#f9fafb` - Gris clair (background)
- `#1f2937` - Gris foncé (texte)

## 📞 Support

Pour toute question sur l'utilisation ou la personnalisation de ce portfolio, n'hésitez pas à contacter Elmehdi via les informations de contact fournies dans le portfolio.

---

**Créé avec ❤️ pour Elmehdi - Développeur Full-Stack Freelance**
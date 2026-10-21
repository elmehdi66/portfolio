// Avis publiés sur la fiche Google (site.google.url), recopiés tels quels — le plus long est coupé, pas reformulé.
// Nom affiché comme sur Google (prénom + initiale). role : fonction connue du client, sinon absent.
export const testimonials: { quote: string; name: string; role?: string }[] = [
  {
    quote:
      'Un immense merci à Mehdi pour son accompagnement au fil des années. Toujours à l’écoute, disponible et très professionnel, il a su comprendre nos besoins et proposer des solutions pertinentes avec des rendus de grande qualité.',
    name: 'Asmae E.',
  },
  {
    quote:
      'J’ai collaboré avec Mehdi dans le cadre de plusieurs projets et je recommande fortement son profil. Une personne très professionnelle qui challenge toujours les besoins exprimés pour développer des solutions créatives et performantes.',
    name: 'Hajar H.',
  },
  {
    quote:
      'Pour ceux ou celles qui ont besoin d’un développeur fullstack, je vous recommande vivement ce profil dont je suis ravie du résultat. À l’écoute, rapide et très pro, il a fait un travail impeccable.',
    name: 'Safaa C.',
    role: 'Responsable marketing',
  },
];

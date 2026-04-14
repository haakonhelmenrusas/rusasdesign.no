import { Project } from '@/types/Project';

export const projects: Project[] = [
  {
    id: 'rusas-design',
    title: 'Rusås Design',
    description:
      'Personlig blogg og portefølje bygget med Next.js, Tailwind CSS og Markdown. Fokus på ytelse, tilgjengelighet og mørk/lys-modus.',
    image: '/assets/projects/rusas-design.png',
    url: 'https://rusåsdesign.no',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 'bueboka',
    title: 'Bueboka',
    description:
      'Webapplikasjon for bueskyttere i Norge. Logg treninger, følg fremgang og sammenlign resultater med andre skyttere.',
    image: '/assets/projects/bueboka.jpg',
    url: 'https://bueboka.no',
    tags: ['React', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 'bueboka-app',
    title: 'Bueboka – Mobilapp',
    description:
      'React Native-versjon av Bueboka. Full tilgang til treningslogg og statistikk direkte fra mobilen, med støtte for iOS og Android.',
    image: '/assets/projects/bueboka-app.png',
    tags: ['React Native', 'TypeScript', 'iOS', 'Android'],
  },
];


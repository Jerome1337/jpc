type Project = {
  title: string
  description: string[]
  technologies: string[]
};

const projects: Project[] = [
  {
    title: 'Décathlon - CRM Interne 500+ Utilisateurs',
    description: [
      `Application cloud native pour un système critique de relation client Décathlon.
Centralisation des données clients, commandes et procédures sur interface unique optimisée,
réduisant de 40% le temps de traitement des demandes pour 500+ agents simultanés.`,
      `Solution scalable et haute disponibilité qui améliore significativement la satisfaction client
et devient un outil indispensable du quotidien des équipes relation client.`,
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'Fastify',
      'GCP',
      'Kubernetes',
      'Redis',
      'Application Cloud Native',
    ],
  },
  {
    title: 'Boulanger - Refonte E-commerce Nouvelle Génération',
    description: [
      `Modernisation complète de la plateforme e-commerce Boulanger avec technologies de pointe :
Qwik.js pour des performances extrêmes, React pour l'interface utilisateur, GraphQL pour l'API unifiée
et Server-Side Rendering pour un SEO optimal et temps de chargement réduits.`,
      `Application web performante qui améliore l'expérience utilisateur sur mobile et desktop,
augmente le taux de conversion et positionne Boulanger sur un niveau supérieur.`,
    ],
    technologies: [
      'Qwik.js',
      'React',
      'TypeScript',
      'GraphQL',
      'SSR',
      'Optimisation des performances',
    ],
  },
  {
    title: 'Kiabi - Modernisation Plateforme E-commerce',
    description: [
      `Transformation digitale de la plateforme e-commerce Kiabi avec développement d'application web moderne
et optimisation performances. Migration vers stack moderne avec amélioration UX/UI
et mise en place d'une plateforme haute disponibilité.`,
      `Résultats : augmentation du taux de conversion, temps de chargement divisé par 2.
Application web scalable qui accompagne la croissance de Kiabi avec un développement évolutif.`,
    ],
    technologies: [
      'TypeScript',
      'Next.js',
      'GraphQL',
      'GCP',
      'Application Web Scalable',
    ],
  },
  {
    title: 'Qimpl - Co-fondateur SaaS Gestion Locative',
    description: [
      `Co-création et développement d'une plateforme SaaS de gestion locative pour propriétaires.
Vision entrepreneuriale avec développement complet de l'application web,
de l'interface utilisateur jusqu'aux systèmes de paiement et gestion des baux.`,
      `Projet incubé à Euratechnologies. Solution scalable qui automatise la gestion
complète des biens immobiliers avec tableau de bord temps réel, notifications automatiques
et intégrations bancaires pour une gestion autonome des propriétaires.`,
    ],
    technologies: [
      'React',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Stripe API',
      'Application SaaS',
      'Startup',
    ],
  },
  {
    title: 'Nexylan - Plateforme Administration Serveurs Infogérés',
    description: [
      `Plateforme d'administration autonome pour gestion serveurs infogérés avec tableau de bord
temps réel, monitoring avancé, gestion ressources et déploiement applications.
Interface intuitive permettant aux clients de piloter leurs environnements sans expertise technique.`,
      `Impact : -60% tickets support, +40% satisfaction client, autonomie complète des clients
avec transparence totale sur leurs infrastructures hébergées.`,
    ],
    technologies: [
      'Go',
      'PHP',
      'Symfony',
      'JavaScript',
      'PostgreSQL',
      'Monitoring',
    ],
  },
];

export default projects;

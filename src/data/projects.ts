type Project = {
  title: string
  description: string[]
  technologies: string[]
};

const projects: Project[] = [
  {
    title: 'Décathlon - Le compagnons des agents relation client',
    description: [
      `Application interne développée pour les centres de relation client Décathlon,
permettant aux agents de traiter efficacement les demandes clients grâce à une interface intuitive qui centralise toutes
les informations essentielles (historique des commandes, détails produits, politiques de retour et procédures) sur un
seul écran.`,
      `Cet outil sur mesure a considérablement réduit le temps de traitement des demandes tout en améliorant la
satisfaction client et l'expérience de travail des agents, devenant ainsi un élément indispensable à leur quotidien.`,
    ],
    technologies: [
      'TypeScript',
      'NodeJS',
      'Fastify',
      'GCP',
      'Redis',
    ],
  },
  {
    title: "Kiabi - L'enseigne de mode à petit prix se réinvente",
    description: [
      `Refonte complète du site e-commerce de Kiabi combinant modernité visuelle et expérience utilisateur optimisée.
Le projet a transformé la plateforme en un parcours d'achat fluide et intuitif.
L'architecture technique repensée assure des performances accrues, une meilleure adaptabilité mobile.`,
      `Cette transformation digitale a permis d'augmenter significativement le taux de conversion,
de réduire le taux d'abandon des paniers et d'offrir aux clients une expérience d'achat alignée avec les standards
actuels du e-commerce mode.`,
    ],
    technologies: [
      'TypeScript',
      'NextJS',
      'GraphQL',
      'GCP',
    ],
  },
  {
    title: 'Nexylan - Expert en hébergement infogéré à la pointe de la technologie',
    description: [
      `Développement d'une interface d'administration personnalisée permettant aux clients de Nexylan de gérer et
piloter leurs serveurs infogérés en toute autonomie.
Cette plateforme intuitive offre un tableau de bord complet avec monitoring en temps réel, gestion des ressources,
configuration des services et déploiement d'applications - le tout sans expertise technique avancée.`,
      `Cette solution a considérablement réduit les tickets de support et augmenté la satisfaction client en offrant
plus de flexibilité et de transparence dans la gestion de leurs environnements hébergés.`,
    ],
    technologies: [
      'PHP',
      'Symfony',
      'JavaScript',
      'Golang',
      'SQL',
    ],
  },
];

export default projects;

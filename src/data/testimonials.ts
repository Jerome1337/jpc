
type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  text: string
  linkedinUrl?: string
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Timothée Dartois',
    role: 'Project Manager',
    company: 'Décathlon',
    text: `J'ai eu le plaisir de travailler avec [Votre Nom] pendant 2 ans.
Sa capacité à résoudre des problèmes complexes et son expertise technique en React et Node.js
ont été des atouts majeurs pour notre équipe.`,
    linkedinUrl: 'https://linkedin.com/in/johndoe',
  },
  {
    id: 2,
    name: 'Marie Martin',
    role: 'Product Manager',
    company: 'Innovation Labs',
    text: `Un développeur exceptionnel qui combine expertise technique et excellentes compétences en communication.
Son approche pragmatique et sa capacité à livrer des solutions de qualité ont grandement
contribué au succès de nos projets.`,
    linkedinUrl: 'https://linkedin.com/in/mariemartin',
  },
  {
    id: 3,
    name: 'Pierre Dubois',
    role: 'CTO',
    company: 'StartupXYZ',
    text: `Rare sont les développeurs qui maîtrisent aussi bien le front-end que le back-end.
Sa polyvalence et sa capacité d'adaptation ont fait de lui un élément clé dans notre transformation digitale.`,
    linkedinUrl: 'https://linkedin.com/in/pierredubois',
  },
];

export default testimonials;

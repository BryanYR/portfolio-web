export type ProjectBadge = 'Work' | 'Personal'

export interface Project {
  title: string
  description: string
  tags: string[]
  links: { live: string | null; github: string | null }
  badge: ProjectBadge
}

export const PROJECTS: Project[] = [
  {
    title: 'Díaz & Rebaza Abogados — Sitio Corporativo',
    description: 'Sitio web de una firma legal de Trujillo con servicios en derecho civil, penal, empresarial, contrataciones públicas y saneamiento de propiedades. Integración con WhatsApp y redes sociales.',
    tags: ['Nuxt', 'Vue 3', 'Tailwind', 'SEO'],
    links: { live: 'https://dcrrabogados.com/', github: null },
    badge: 'Work',
  },
  {
    title: 'Dra. Diana Zuñiga — Dental Studio',
    description: 'Sitio web de un consultorio odontológico en Barranco, Lima, especializado en ortodoncia invisible, estética dental y rehabilitación oral. Diseño responsive e integración con WhatsApp para agendar citas.',
    tags: ['Nuxt', 'Vue 3', 'Tailwind', 'SEO'],
    links: { live: 'https://dradianazuniga.pe/', github: null },
    badge: 'Work',
  },
  {
    title: 'Joinnus — Rediseño & Cashless',
    description: 'Rediseño de la plataforma principal de eventos de LATAM. Desarrollo del sistema "Cashless" y "Cashless-BoxOffice" para manejo de puntos y wallet virtual. Integración de landings para Alianza Lima.',
    tags: ['Nuxt 3', 'Vue 3', 'Tailwind', 'MySQL'],
    links: { live: 'https://joinnus.com', github: null },
    badge: 'Work',
  },
  {
    title: 'LIVE2TRADING — Sistema de Streaming',
    description: 'Diseño y desarrollo completo de un sistema de streaming del rubro bursátil con landing page para captación de clientes.',
    tags: ['Vue', 'Node.js', 'MySQL', 'GIT'],
    links: { live: null, github: null },
    badge: 'Work',
  },
  {
    title: 'Ingeniust — Sistema de Ferias & Evaluaciones',
    description: 'Sistema de ferias agropecuarias para Costa Rica y sistema de evaluaciones para estudiantes en modalidad de aula virtual.',
    tags: ['Next.js', 'Prisma ORM', 'MySQL', 'GIT'],
    links: { live: null, github: null },
    badge: 'Work',
  },
  {
    title: 'Bullbet — Arbitraje Deportivo',
    description: 'Refactorización del sistema web de arbitraje deportivo, sistema administrativo y página web de la academia CCA.',
    tags: ['React', 'MySQL', 'GIT'],
    links: { live: null, github: null },
    badge: 'Work',
  },
  {
    title: 'World System — Sistemas Sectoriales',
    description: 'Desarrollo de sistemas web en rubros de minería, contabilidad, automotriz, bolsa de trabajo y seguridad para múltiples clientes.',
    tags: ['Vue', 'Node.js', 'Prisma', 'MySQL'],
    links: { live: null, github: null },
    badge: 'Work',
  },
  {
    title: 'Portfolio Personal',
    description: 'Este portfolio. Construido con Nuxt 3, Tailwind CSS, modo oscuro/claro/sistema y diseño totalmente responsive.',
    tags: ['Nuxt 3', 'Tailwind', 'SSG'],
    links: { live: '#', github: 'https://github.com/bjyepez15' },
    badge: 'Personal',
  },
]

export const PROJECT_BADGE_COLORS: Record<ProjectBadge, string> = {
  Work: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  Personal: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
}

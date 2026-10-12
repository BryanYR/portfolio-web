export type ProjectBadge = 'Work' | 'Freelance' | 'IA'

export interface Project {
  title: string
  description: string
  tags: string[]
  links: { live: string | null; github: string | null }
  badge: ProjectBadge
}

export const PROJECTS: Project[] = [
  {
    title: 'Joinnus — Rediseño & Cashless',
    description: 'Rediseño de la plataforma principal de eventos con la librería interna @joinnus/ui. Sistemas Cashless y Cashless-BoxOffice (wallet virtual, puntos y compra de productos), paso de Addons del checkout y landings de Alianza Lima.',
    tags: ['Nuxt 3', 'Vue 3', 'Pinia', 'TypeScript', 'Tailwind', 'Vitest'],
    links: { live: 'https://joinnus.com', github: null },
    badge: 'Work',
  },
  {
    title: 'jnns — CLI de casos de prueba',
    description: 'CLI en Node.js sin dependencias, co-desarrollado para el equipo de frontend de Joinnus. Prepara casos de prueba desde la terminal sin pasar por la interfaz y se integra con skills de Claude Code para validarlos en el navegador.',
    tags: ['Node.js', 'CLI', 'Claude Code'],
    links: { live: null, github: null },
    badge: 'IA',
  },
  {
    title: 'Skills & Plugins de Claude Code',
    description: 'Skills y plugins para validar flujos en el navegador, generar tests unitarios, revisar código, migrar componentes de UI y estandarizar commits y PRs integrados con Jira.',
    tags: ['Claude Code', 'MCP', 'Vitest', 'Jira'],
    links: { live: null, github: null },
    badge: 'IA',
  },
  {
    title: 'Díaz & Rebaza Abogados — Sitio Corporativo',
    description: 'Sitio web de una firma legal de Trujillo con servicios en derecho civil, penal, empresarial, contrataciones públicas y saneamiento de propiedades. Integración con WhatsApp y redes sociales.',
    tags: ['Nuxt', 'Vue 3', 'Tailwind', 'SEO'],
    links: { live: 'https://dcrrabogados.com/', github: null },
    badge: 'Freelance',
  },
  {
    title: 'Dra. Diana Zuñiga — Dental Studio',
    description: 'Sitio web de un consultorio odontológico en Barranco, Lima, especializado en ortodoncia invisible, estética dental y rehabilitación oral. Diseño responsive e integración con WhatsApp para agendar citas.',
    tags: ['Nuxt', 'Vue 3', 'Tailwind', 'SEO'],
    links: { live: 'https://dradianazuniga.pe/', github: null },
    badge: 'Freelance',
  },
  {
    title: 'ONG Nuevos Pasos — Sitio Web',
    description: 'Desarrollo y actualización del sitio web de la organización en WordPress, publicado en su propio hosting.',
    tags: ['WordPress', 'Elementor'],
    links: { live: 'https://nuevospasos.org/', github: null },
    badge: 'Freelance',
  },
  {
    title: 'World System — Sistemas Sectoriales',
    description: 'Sistemas web para clientes de minería, contabilidad, automotriz, bolsa de trabajo y seguridad, además del sitio web corporativo de la empresa.',
    tags: ['Vue', 'Node.js', 'Prisma', 'MySQL'],
    links: { live: 'https://wssac.com/', github: null },
    badge: 'Freelance',
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
    title: 'Janaq — Marcas Gastronómicas',
    description: 'E-commerce de la marca NGR, proyectos web del grupo Rockys y sitios para Bembos, Popeyes, ChinaWok, Rodizio y Punto Scharff.',
    tags: ['Vue', 'Nuxt', 'Prisma', 'MySQL'],
    links: { live: null, github: null },
    badge: 'Work',
  },
]

export const PROJECT_BADGE_COLORS: Record<ProjectBadge, string> = {
  Work: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  Freelance: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  IA: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
}

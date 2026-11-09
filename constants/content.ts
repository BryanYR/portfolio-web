export type Locale = 'es' | 'en'
export type Badge = 'work' | 'freelance' | 'ai'

export type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'terminal'; lines: { cmd: string; comment: string }[]; footer: string }

export interface FeaturedProject {
  name: string
  subtitle: string
  badge: Badge
  summary: string
  highlights: string[]
  tags: string[]
  live: string | null
  media: ProjectMedia
}

export interface OtherProject {
  name: string
  summary: string
  tags: string[]
  live: string
}

export interface Job {
  company: string
  role: string
  type: string
  period: string
  location: string
  current: boolean
  highlights: string[]
  tags: string[]
}

export const LINKS = {
  email: 'bjyepez15@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bryan-yepez-remigio-203945244/',
  github: 'https://github.com/BryanYR',
  whatsapp: 'https://wa.me/51970649522',
  phone: '+51 970 649 522',
}

const STACK = {
  daily: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Pinia', 'Tailwind', 'Vitest', 'Git', 'Claude Code'],
  often: ['React', 'Next.js', 'Node.js', 'NestJS', 'Prisma', 'MySQL', 'HTML / SCSS', 'Figma', 'REST APIs', 'SSR / SSG', 'Vite', 'MCP', 'Jira'],
  sometimes: ['WordPress (Elementor / Divi)', 'C#'],
}

const es = {
  meta: {
    title: 'Bryan Yepez — Frontend Developer (Vue / Nuxt)',
    description: 'Frontend Developer Semi Senior en Perú, especializado en Vue y Nuxt. Más de 5 años en producción. Abierto a roles remotos.',
    ogLocale: 'es_PE',
  },
  cv: { href: '/cv/CV_Bryan_Yepez_ES.pdf', label: 'Descargar CV' },
  nav: {
    links: [
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Experiencia', href: '#experiencia' },
      { label: 'Sobre mí', href: '#sobre-mi' },
      { label: 'Contacto', href: '#contacto' },
    ],
    home: 'Bryan Yepez, inicio',
    menu: 'Menú',
    close: 'Cerrar',
    switchTo: { href: '/en', short: 'EN', label: 'Read in English', hreflang: 'en' },
  },
  theme: { light: 'Claro', dark: 'Oscuro', system: 'Auto', aria: 'Cambiar tema' },
  hero: {
    kicker: 'Frontend Developer Semi Senior · Trujillo, Perú',
    lede: {
      before: 'Egresado de Ingeniería de Sistemas con 5+ años construyendo aplicaciones web modernas. Especializado en ',
      strong: 'Vue / Nuxt',
      after: ', apasionado por la performance, la accesibilidad y el buen código, y por las herramientas con IA que ayudan al equipo a entregar más rápido.',
    },
    status: 'Abierto a roles remotos · cualquier país',
    ctaProjects: 'Ver proyectos',
    facts: [
      { value: '5+', label: 'años en producción' },
      { value: '100k+', label: 'usuarios en la plataforma de Joinnus' },
      { value: 'IA', label: 'Claude Code en mi flujo de trabajo' },
      { value: 'UNT', label: 'Egresado de Ing. de Sistemas' },
    ],
  },
  ticket: {
    admit: 'Entrada general',
    role: 'Frontend Developer · Perú',
    stamp: 'Disponible',
    stage: 'Escenario',
    mapLabel: 'Mapa de asientos de un evento con el lugar de Bryan resaltado al centro',
    legend: { sold: 'Vendido', free: 'Libre', yours: 'Bryan' },
    fields: [
      { label: 'Sección', value: 'Frontend' },
      { label: 'Nivel', value: 'Semi Senior' },
      { label: 'Modalidad', value: 'Remoto' },
    ],
  },
  projects: {
    kicker: 'Programa',
    title: 'Proyectos',
    aside: '4 destacados · 2021 — hoy',
    badges: { work: 'Empresa', freelance: 'Freelance', ai: 'IA' } as Record<Badge, string>,
    viewSite: 'Ver sitio',
    internal: 'Uso interno',
    othersTitle: 'Otros trabajos',
    featured: [
      {
        name: 'Joinnus',
        subtitle: 'Plataforma de eventos y ticketing',
        badge: 'work',
        summary: 'Parte del equipo frontend de la plataforma donde cientos de miles de usuarios compran y gestionan sus entradas.',
        highlights: [
          'Participación en los sistemas Cashless y Cashless-BoxOffice: wallet virtual, puntos y compra de productos y servicios.',
          'Paso de Addons del checkout: store, componentes reutilizables, sincronización de productos y manejo de errores.',
          'Rediseño de la plataforma principal integrando diseños de Figma con la librería interna @joinnus/ui.',
          'Landings de Alianza Lima.',
        ],
        tags: ['Nuxt 3', 'Vue 2/3', 'Pinia', 'TypeScript', 'Tailwind', 'Vitest'],
        live: 'https://joinnus.com',
        media: {
          type: 'stats',
          items: [
            { value: '100k+', label: 'usuarios' },
            { value: 'Vue 3', label: 'Nuxt 3, Pinia y TypeScript' },
            { value: 'Figma', label: 'a código con la librería @joinnus/ui' },
          ],
        },
      },
      {
        name: 'Díaz & Rebaza',
        subtitle: 'Sitio corporativo de un estudio jurídico',
        badge: 'freelance',
        summary: 'Sitio de una firma legal de Trujillo con servicios en derecho civil, penal, empresarial, contrataciones públicas y saneamiento de propiedades.',
        highlights: ['SEO.', 'Integración con WhatsApp y redes sociales.'],
        tags: ['Nuxt', 'Vue 3', 'Tailwind', 'SEO'],
        live: 'https://dcrrabogados.com/',
        media: { type: 'image', src: '/img/projects/dcrr.jpg', alt: 'Página de inicio de dcrrabogados.com' },
      },
      {
        name: 'Dra. Diana Zuñiga',
        subtitle: 'Landing de un consultorio dental',
        badge: 'freelance',
        summary: 'Consultorio odontológico en Barranco, Lima, especializado en ortodoncia invisible, estética dental y rehabilitación oral.',
        highlights: ['Reserva de citas por WhatsApp.', 'SEO y diseño responsive.'],
        tags: ['Nuxt', 'Vue 3', 'Tailwind', 'SEO'],
        live: 'https://dradianazuniga.pe/',
        media: { type: 'image', src: '/img/projects/zuniga.jpg', alt: 'Página de inicio de dradianazuniga.pe' },
      },
      {
        name: 'Herramientas IA',
        subtitle: 'jnns + skills de Claude Code',
        badge: 'ai',
        summary: 'Herramientas para que el equipo de frontend de Joinnus prepare y valide casos de prueba más rápido.',
        highlights: [
          'jnns: CLI en Node.js sin dependencias, co-desarrollado con un compañero, que prepara casos de prueba desde la terminal sin pasar por la interfaz.',
          'Skills de Claude Code para validar flujos en el navegador, generar tests unitarios, revisar código y migrar componentes de UI.',
        ],
        tags: ['Node.js', 'CLI', 'Claude Code', 'MCP', 'Vitest'],
        live: null,
        media: {
          type: 'terminal',
          lines: [
            { cmd: 'jnns case', comment: 'prepara un caso de prueba completo' },
            { cmd: 'jnns serve', comment: 'levanta el proyecto en local' },
          ],
          footer: '→ las skills lo validan en el navegador',
        },
      },
    ] as FeaturedProject[],
    others: [
      {
        name: 'World System S.A.C.',
        summary: 'Sitio corporativo y sistemas web para clientes de minería, contabilidad, automotriz, bolsa de trabajo y seguridad.',
        tags: ['Vue', 'Node.js', 'Prisma', 'MySQL'],
        live: 'https://wssac.com/',
      },
      {
        name: 'ONG Nuevos Pasos',
        summary: 'Desarrollo y actualización del sitio en WordPress, publicado en el hosting de la organización.',
        tags: ['WordPress', 'Elementor'],
        live: 'https://nuevospasos.org/',
      },
    ] as OtherProject[],
  },
  experience: {
    kicker: 'Trayectoria',
    title: 'Experiencia',
    aside: '2021 — hoy',
    current: 'En curso',
    note: 'Algunos roles se superponen: son contratos por proyecto y trabajo freelance en paralelo al rol principal.',
    jobs: [
      {
        company: 'Joinnus',
        role: 'Frontend Developer · Semi Senior',
        type: 'Tiempo completo',
        period: 'Ene 2025 — hoy',
        location: 'Lima, Perú',
        current: true,
        highlights: [
          'Como parte del equipo frontend, desarrollo y mejoro la experiencia de compra y gestión de entradas en una plataforma usada por cientos de miles de usuarios.',
          'Participé en el desarrollo de los sistemas Cashless y Cashless-BoxOffice: wallet virtual, puntos y compra de productos y servicios.',
          'Implementé el paso de Addons del checkout y landings de Alianza Lima.',
          'Participé en el rediseño de la plataforma principal con la librería interna @joinnus/ui.',
          'Cuido la calidad de cada entrega con tests unitarios (Vitest) y validación de flujos en el navegador, apoyándome en Claude Code.',
          'Trabajo en sprints ágiles con Jira junto a diseño y backend.',
        ],
        tags: ['Nuxt 3', 'Vue 2/3', 'Pinia', 'TypeScript', 'Tailwind', 'Vitest', 'Jira', 'Claude Code'],
      },
      {
        company: 'Freelance',
        role: 'Desarrollador Web y Consultor',
        type: 'Independiente',
        period: 'Abr 2022 — hoy',
        location: 'Trujillo, Perú',
        current: true,
        highlights: [
          'Sitios para Díaz & Rebaza Abogados, Dra. Diana Zuñiga y ONG Nuevos Pasos.',
          'Consultor de World System S.A.C. (Abr 2022 — Ago 2024): sistemas web para minería, contabilidad, automotriz, bolsa de trabajo y seguridad.',
        ],
        tags: ['Nuxt', 'Vue 3', 'Node.js', 'Prisma', 'Tailwind', 'MySQL', 'WordPress'],
      },
      {
        company: 'Ingeniust',
        role: 'Software Engineer y Support Developer',
        type: 'Por demanda',
        period: 'May 2024 — Jun 2025',
        location: 'Lima, Perú',
        current: false,
        highlights: [
          'Sistema de ferias para el sector agropecuario de Costa Rica.',
          'Sistema de evaluaciones para estudiantes en aula virtual, con soporte y corrección de errores en producción.',
        ],
        tags: ['Next.js', 'Prisma ORM', 'MySQL', 'Git'],
      },
      {
        company: 'SIGMA',
        role: 'Frontend Developer',
        type: 'Contrato',
        period: 'Sep 2023 — Dic 2024',
        location: 'Lima, Perú',
        current: false,
        highlights: ['Refactorización de un sistema web para empresas del sector automotriz.'],
        tags: ['Vue', 'Git'],
      },
      {
        company: 'Comunidad CCA',
        role: 'Frontend Developer',
        type: 'Contrato',
        period: 'Ene — Abr 2023',
        location: 'Trujillo, Perú',
        current: false,
        highlights: ['Refactorización del sistema de arbitraje deportivo Bullbet, su sistema administrativo y la web de la academia.'],
        tags: ['React', 'MySQL', 'Git'],
      },
      {
        company: 'Janaq',
        role: 'Analista Programador Web',
        type: 'Contrato',
        period: 'Mar 2021 — Oct 2022',
        location: 'Trujillo, Perú',
        current: false,
        highlights: [
          'Requerimientos del e-commerce de la marca NGR y proyectos web del grupo Rockys.',
          'Sitios para marcas gastronómicas: Bembos, Popeyes, ChinaWok, Rodizio y Punto Scharff.',
        ],
        tags: ['Vue', 'Nuxt', 'Prisma', 'MySQL', 'Git'],
      },
    ] as Job[],
  },
  about: {
    kicker: 'Backstage',
    title: 'Sobre mí',
    lede: 'Soy Bryan Jefferson Yepez Remigio, egresado de Ingeniería de Sistemas de la Universidad Nacional de Trujillo.',
    paragraphs: [
      'Llevo más de 5 años desarrollando aplicaciones web en entornos reales y exigentes. Mi stack principal gira en torno a Vue 3 / Nuxt, aunque también manejo React, Next.js y el lado backend con Node.js y NestJS.',
      'He trabajado desde startups hasta plataformas con cientos de miles de usuarios como Joinnus. Me importa construir interfaces rápidas, accesibles y con código limpio, integrar diseños desde Figma y trabajar con sistemas de diseño propios.',
      'También aplico IA en el día a día: co-desarrollé con un compañero un CLI para preparar casos de prueba, y uso skills de Claude Code para validar flujos en el navegador y generar tests.',
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Básico–intermedio' },
    ],
    lineupTitle: 'Cartel del stack',
    lineup: [
      { tier: 'A diario', items: STACK.daily },
      { tier: 'Con frecuencia', items: STACK.often },
      { tier: 'Cuando hace falta', items: STACK.sometimes },
    ],
  },
  contact: {
    kicker: 'Taquilla',
    title: 'Contacto',
    intro: 'Abierto a roles remotos · full-time, contrato o freelance',
    validFor: 'Válido para',
    validValue: 'Una conversación',
    timeLabel: 'Hora en Lima',
  },
  footer: { made: 'Hecho en Perú · Nuxt + Tailwind', top: 'Volver arriba ↑' },
}

export type SiteContent = typeof es

const en: SiteContent = {
  meta: {
    title: 'Bryan Yepez — Frontend Developer (Vue / Nuxt)',
    description: 'Mid-level Frontend Developer based in Peru, specialized in Vue and Nuxt. 5+ years in production. Open to remote roles.',
    ogLocale: 'en_US',
  },
  cv: { href: '/cv/CV_Bryan_Yepez_EN.pdf', label: 'Download CV' },
  nav: {
    links: [
      { label: 'Projects', href: '#proyectos' },
      { label: 'Experience', href: '#experiencia' },
      { label: 'About', href: '#sobre-mi' },
      { label: 'Contact', href: '#contacto' },
    ],
    home: 'Bryan Yepez, home',
    menu: 'Menu',
    close: 'Close',
    switchTo: { href: '/', short: 'ES', label: 'Leer en español', hreflang: 'es' },
  },
  theme: { light: 'Light', dark: 'Dark', system: 'Auto', aria: 'Change theme' },
  hero: {
    kicker: 'Mid-level Frontend Developer · Trujillo, Peru',
    lede: {
      before: 'Systems Engineering graduate with 5+ years building modern web applications. Specialized in ',
      strong: 'Vue / Nuxt',
      after: ', passionate about performance, accessibility and clean code, and about AI tooling that helps the team ship faster.',
    },
    status: 'Open to remote roles · any country',
    ctaProjects: 'See projects',
    facts: [
      { value: '5+', label: 'years in production' },
      { value: '100k+', label: 'users on the Joinnus platform' },
      { value: 'AI', label: 'Claude Code in my daily workflow' },
      { value: 'UNT', label: 'Systems Engineering graduate' },
    ],
  },
  ticket: {
    admit: 'General admission',
    role: 'Frontend Developer · Peru',
    stamp: 'Available',
    stage: 'Stage',
    mapLabel: "Event seating map with Bryan's seat highlighted in the centre",
    legend: { sold: 'Sold', free: 'Free', yours: 'Bryan' },
    fields: [
      { label: 'Section', value: 'Frontend' },
      { label: 'Level', value: 'Mid-level' },
      { label: 'Mode', value: 'Remote' },
    ],
  },
  projects: {
    kicker: 'Programme',
    title: 'Projects',
    aside: '4 featured · 2021 — now',
    badges: { work: 'Company', freelance: 'Freelance', ai: 'AI' },
    viewSite: 'Visit site',
    internal: 'Internal tool',
    othersTitle: 'Other work',
    featured: [
      {
        name: 'Joinnus',
        subtitle: 'Events and ticketing platform',
        badge: 'work',
        summary: 'Part of the frontend team behind the platform where hundreds of thousands of users buy and manage their tickets.',
        highlights: [
          'Contributed to the Cashless and Cashless-BoxOffice systems: virtual wallet, points and purchase of products and services.',
          'Checkout Add-ons step: store, reusable components, product synchronization and error handling.',
          'Redesign of the core platform, turning Figma designs into code with the internal @joinnus/ui library.',
          'Landing pages for Alianza Lima.',
        ],
        tags: ['Nuxt 3', 'Vue 2/3', 'Pinia', 'TypeScript', 'Tailwind', 'Vitest'],
        live: 'https://joinnus.com',
        media: {
          type: 'stats',
          items: [
            { value: '100k+', label: 'users' },
            { value: 'Vue 3', label: 'Nuxt 3, Pinia and TypeScript' },
            { value: 'Figma', label: 'to code with the @joinnus/ui library' },
          ],
        },
      },
      {
        name: 'Díaz & Rebaza',
        subtitle: 'Corporate website for a law firm',
        badge: 'freelance',
        summary: 'Website for a law firm in Trujillo covering civil, criminal, corporate and public procurement law, and property regularization.',
        highlights: ['SEO.', 'WhatsApp and social media integration.'],
        tags: ['Nuxt', 'Vue 3', 'Tailwind', 'SEO'],
        live: 'https://dcrrabogados.com/',
        media: { type: 'image', src: '/img/projects/dcrr.jpg', alt: 'Home page of dcrrabogados.com' },
      },
      {
        name: 'Dra. Diana Zuñiga',
        subtitle: 'Landing page for a dental practice',
        badge: 'freelance',
        summary: 'Dental practice in Barranco, Lima, specialized in clear aligners, cosmetic dentistry and oral rehabilitation.',
        highlights: ['Appointment booking through WhatsApp.', 'SEO and responsive design.'],
        tags: ['Nuxt', 'Vue 3', 'Tailwind', 'SEO'],
        live: 'https://dradianazuniga.pe/',
        media: { type: 'image', src: '/img/projects/zuniga.jpg', alt: 'Home page of dradianazuniga.pe' },
      },
      {
        name: 'AI tooling',
        subtitle: 'jnns + Claude Code skills',
        badge: 'ai',
        summary: 'Tools that help the Joinnus frontend team set up and validate test cases faster.',
        highlights: [
          'jnns: a zero-dependency Node.js CLI, co-developed with a teammate, that sets up test cases from the terminal without going through the UI.',
          'Claude Code skills to validate flows in the browser, generate unit tests, review code and migrate UI components.',
        ],
        tags: ['Node.js', 'CLI', 'Claude Code', 'MCP', 'Vitest'],
        live: null,
        media: {
          type: 'terminal',
          lines: [
            { cmd: 'jnns case', comment: 'sets up a complete test case' },
            { cmd: 'jnns serve', comment: 'runs the project locally' },
          ],
          footer: '→ the skills validate it in the browser',
        },
      },
    ],
    others: [
      {
        name: 'World System S.A.C.',
        summary: 'Corporate website and web systems for clients in mining, accounting, automotive, job boards and security.',
        tags: ['Vue', 'Node.js', 'Prisma', 'MySQL'],
        live: 'https://wssac.com/',
      },
      {
        name: 'Nuevos Pasos NGO',
        summary: 'Built and updated the organization\'s WordPress website, deployed on its own hosting.',
        tags: ['WordPress', 'Elementor'],
        live: 'https://nuevospasos.org/',
      },
    ],
  },
  experience: {
    kicker: 'Track record',
    title: 'Experience',
    aside: '2021 — now',
    current: 'Current',
    note: 'Some roles overlap: they are project-based contracts and freelance work alongside my main role.',
    jobs: [
      {
        company: 'Joinnus',
        role: 'Frontend Developer · Semi Senior',
        type: 'Full-time',
        period: 'Jan 2025 — now',
        location: 'Lima, Peru',
        current: true,
        highlights: [
          'As part of the frontend team, build and improve the ticket buying and management experience on a platform used by hundreds of thousands of users.',
          'Contributed to building the Cashless and Cashless-BoxOffice systems: virtual wallet, points and purchase of products and services.',
          'Implemented the checkout Add-ons step and landing pages for Alianza Lima.',
          'Contributed to the core platform redesign with the internal @joinnus/ui library.',
          'Ensure the quality of each release with unit tests (Vitest) and browser flow validation, supported by Claude Code.',
          'Work in agile sprints with Jira alongside design and backend.',
        ],
        tags: ['Nuxt 3', 'Vue 2/3', 'Pinia', 'TypeScript', 'Tailwind', 'Vitest', 'Jira', 'Claude Code'],
      },
      {
        company: 'Freelance',
        role: 'Web Developer and Consultant',
        type: 'Freelance',
        period: 'Apr 2022 — now',
        location: 'Trujillo, Peru',
        current: true,
        highlights: [
          'Websites for Díaz & Rebaza Abogados, Dra. Diana Zuñiga and Nuevos Pasos NGO.',
          'Consultant for World System S.A.C. (Apr 2022 — Aug 2024): web systems for mining, accounting, automotive, job board and security clients.',
        ],
        tags: ['Nuxt', 'Vue 3', 'Node.js', 'Prisma', 'Tailwind', 'MySQL', 'WordPress'],
      },
      {
        company: 'Ingeniust',
        role: 'Software Engineer and Support Developer',
        type: 'On-demand',
        period: 'May 2024 — Jun 2025',
        location: 'Lima, Peru',
        current: false,
        highlights: [
          'Trade fair management system for the agricultural sector in Costa Rica.',
          'Online assessment system for students in a virtual classroom, plus production support and bug fixing.',
        ],
        tags: ['Next.js', 'Prisma ORM', 'MySQL', 'Git'],
      },
      {
        company: 'SIGMA',
        role: 'Frontend Developer',
        type: 'Contract',
        period: 'Sep 2023 — Dec 2024',
        location: 'Lima, Peru',
        current: false,
        highlights: ['Refactoring of a web system for companies in the automotive sector.'],
        tags: ['Vue', 'Git'],
      },
      {
        company: 'Comunidad CCA',
        role: 'Frontend Developer',
        type: 'Contract',
        period: 'Jan — Apr 2023',
        location: 'Trujillo, Peru',
        current: false,
        highlights: ['Refactoring of the Bullbet sports refereeing system, its admin system and the academy website.'],
        tags: ['React', 'MySQL', 'Git'],
      },
      {
        company: 'Janaq',
        role: 'Web Developer Analyst',
        type: 'Contract',
        period: 'Mar 2021 — Oct 2022',
        location: 'Trujillo, Peru',
        current: false,
        highlights: [
          'Requirements for the NGR brand e-commerce and web projects for the Rockys group.',
          'Websites for food brands: Bembos, Popeyes, ChinaWok, Rodizio and Punto Scharff.',
        ],
        tags: ['Vue', 'Nuxt', 'Prisma', 'MySQL', 'Git'],
      },
    ],
  },
  about: {
    kicker: 'Backstage',
    title: 'About',
    lede: 'I\'m Bryan Jefferson Yepez Remigio, a Systems Engineering graduate from Universidad Nacional de Trujillo.',
    paragraphs: [
      'I\'ve spent 5+ years building web applications in real, demanding environments. My main stack is Vue 3 / Nuxt, and I also work with React, Next.js and the backend side with Node.js and NestJS.',
      'I\'ve worked with everything from startups to platforms with hundreds of thousands of users, like Joinnus. I care about fast, accessible interfaces and clean code, turning Figma designs into production and working with in-house design systems.',
      'I also use AI day to day: I co-developed a CLI with a teammate to set up test cases, and I use Claude Code skills to validate flows in the browser and generate tests.',
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Basic–intermediate' },
    ],
    lineupTitle: 'Stack line-up',
    lineup: [
      { tier: 'Daily', items: STACK.daily },
      { tier: 'Often', items: STACK.often },
      { tier: 'When needed', items: STACK.sometimes },
    ],
  },
  contact: {
    kicker: 'Box office',
    title: 'Contact',
    intro: 'Open to remote roles · full-time, contract or freelance',
    validFor: 'Valid for',
    validValue: 'One conversation',
    timeLabel: 'Time in Lima',
  },
  footer: { made: 'Made in Peru · Nuxt + Tailwind', top: 'Back to top ↑' },
}

export const CONTENT: Record<Locale, SiteContent> = { es, en }

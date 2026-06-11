<script setup lang="ts">
const jobs = [
  {
    company: 'Joinnus',
    role: 'Frontend Developer SS1',
    period: 'Enero 2025 — Actualidad',
    location: 'Lima, Perú',
    description: 'Desarrollo del rediseño de la página principal. Integración del sistema "Cashless" y "Cashless-BoxOffice" para manejo de puntos y compra mediante wallet virtual. Landings para Alianza Lima.',
    tags: ['Nuxt.js', 'Vue 2/3', 'Tailwind', 'MySQL', 'GIT'],
    current: true,
  },
  {
    company: 'Ingeniust',
    role: 'Software Engineer & Support Dev',
    period: 'Mayo 2024 — Junio 2025',
    location: 'Lima, Perú',
    description: 'Sistema de ferias agropecuarias para Costa Rica. Sistema de evaluaciones para estudiantes en modalidad de aula virtual.',
    tags: ['Next.js', 'Prisma ORM', 'MySQL', 'GIT'],
    current: false,
  },
  {
    company: 'SIGMA',
    role: 'Frontend Developer',
    period: 'Septiembre 2023 — Diciembre 2024',
    location: 'Lima, Perú',
    description: 'Refactorización del sistema web para empresas del sector automotriz.',
    tags: ['Vue', 'GIT'],
    current: false,
  },
  {
    company: 'LIVE2TRADING',
    role: 'Desarrollo Sistema Streaming & Landing',
    period: 'Febrero — Septiembre 2024',
    location: 'Lima, Perú',
    description: 'Diseño y desarrollo completo de un sistema de streaming del rubro bursátil con landing page para captación de clientes.',
    tags: ['Vue', 'Node.js', 'MySQL', 'GIT'],
    current: false,
  },
  {
    company: 'Comunidad CCA',
    role: 'Desarrollador Front-End',
    period: 'Enero — Abril 2023',
    location: 'La Libertad, Perú',
    description: 'Refactorización del sistema de arbitraje deportivo Bullbet, su sistema administrativo y la página web de la academia.',
    tags: ['React', 'MySQL', 'GIT'],
    current: false,
  },
  {
    company: 'World System S.A.C',
    role: 'Consultor y Programador Web',
    period: 'Abril 2022 — Agosto 2024',
    location: 'La Libertad, Perú',
    description: 'Desarrollo de sistemas web en rubros de minería, contabilidad, automotriz, bolsa de trabajo y seguridad.',
    tags: ['Vue', 'Node.js', 'Prisma', 'MySQL', 'GIT'],
    current: false,
  },
  {
    company: 'Janaq: Rendimiento e Innovación Digital',
    role: 'Analista Programador Web',
    period: 'Marzo 2021 — Octubre 2022',
    location: 'La Libertad, Perú',
    description: 'Atención de requerimientos para el ecommerce de la marca NGR y desarrollo de proyectos web del grupo Rockys.',
    tags: ['Vue', 'Nuxt', 'Prisma', 'MySQL', 'GIT'],
    current: false,
  },
]
</script>

<template>
  <section id="experience" class="py-32 dark:bg-gradient-to-b dark:from-transparent dark:to-zinc-900/20 bg-gradient-to-b from-transparent to-zinc-100/30">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading label="04. Experiencia" title="Dónde he trabajado" />

      <div class="mt-16 relative">
        <div class="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 to-transparent hidden md:block" />

        <div class="space-y-8">
          <div
            v-for="(job, i) in jobs"
            :key="job.company"
            class="relative md:pl-20"
          >
            <div class="hidden md:flex absolute left-6 top-2 w-4 h-4 rounded-full border-2 border-brand-500 dark:bg-zinc-950 bg-white items-center justify-center">
              <div class="w-1.5 h-1.5 rounded-full bg-brand-500 dark:bg-brand-400" :class="job.current ? 'animate-pulse' : ''" />
            </div>

            <div
              class="rounded-2xl p-6 transition-colors duration-300
                dark:bg-white/[0.03] bg-white dark:border dark:border-white/[0.06] border border-zinc-200
                hover:border-brand-500/30 dark:hover:border-brand-500/20 shadow-sm dark:shadow-none"
            >
              <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <div class="flex items-center gap-2">
                    <h3 class="dark:text-zinc-100 text-zinc-800 font-semibold">{{ job.role }}</h3>
                    <span v-if="job.current" class="text-xs px-2 py-0.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 dark:text-brand-400 font-mono">
                      Actual
                    </span>
                  </div>
                  <p class="text-brand-500 dark:text-brand-400 text-sm font-mono">{{ job.company }}</p>
                </div>
                <div class="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
                  <span class="font-mono text-xs dark:text-zinc-500 text-zinc-400 dark:bg-zinc-900 bg-zinc-100 px-3 py-1 rounded-full border dark:border-zinc-800 border-zinc-200">
                    {{ job.period }}
                  </span>
                  <span class="text-xs dark:text-zinc-600 text-zinc-400">{{ job.location }}</span>
                </div>
              </div>

              <p class="dark:text-zinc-400 text-zinc-600 text-sm leading-relaxed mb-4">{{ job.description }}</p>

              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tag in job.tags"
                  :key="tag"
                  class="text-xs font-mono px-2 py-0.5 rounded dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-500 text-zinc-500 dark:border dark:border-zinc-800 border border-zinc-200"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

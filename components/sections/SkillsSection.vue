<script setup lang="ts">
const categories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'Vue 3 / Nuxt 3', level: 92 },
      { name: 'TypeScript / JavaScript', level: 88 },
      { name: 'React / Next.js', level: 75 },
      { name: 'HTML / CSS / SCSS', level: 90 },
    ],
  },
  {
    name: 'Estilos & UI',
    skills: [
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Figma → código', level: 85 },
      { name: 'Diseño responsive', level: 90 },
      { name: 'WordPress (Elementor/Divi)', level: 78 },
    ],
  },
  {
    name: 'Backend & DB',
    skills: [
      { name: 'Node.js / NestJS', level: 70 },
      { name: 'Prisma ORM', level: 78 },
      { name: 'MySQL / SQL', level: 72 },
      { name: 'C#', level: 55 },
    ],
  },
  {
    name: 'Tooling & Otros',
    skills: [
      { name: 'GIT', level: 88 },
      { name: 'Pinia / Vuex', level: 86 },
      { name: 'REST APIs', level: 85 },
      { name: 'Testing (unit/e2e)', level: 68 },
    ],
  },
]

const tools = [
  'Vue 3', 'Nuxt 3', 'React', 'Next.js', 'TypeScript', 'JavaScript',
  'Tailwind CSS', 'HTML', 'CSS/SCSS', 'Pinia', 'Node.js', 'NestJS',
  'Prisma ORM', 'MySQL', 'GIT', 'Figma', 'WordPress', 'C#',
  'REST APIs', 'Vite', 'SSR/SSG',
]
</script>

<template>
  <section id="skills" class="py-32 dark:bg-gradient-to-b dark:from-transparent dark:to-zinc-900/30 bg-gradient-to-b from-transparent to-zinc-100/50">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading label="02. Habilidades" title="Con qué trabajo" />

      <div class="mt-16 grid md:grid-cols-2 gap-8">
        <div
          v-for="cat in categories"
          :key="cat.name"
          class="rounded-2xl p-6 transition-colors duration-300 dark:bg-white/[0.03] bg-white dark:border dark:border-white/[0.06] border border-zinc-200 hover:border-brand-500/30 shadow-sm dark:shadow-none"
        >
          <h3 class="font-mono text-brand-500 dark:text-brand-400 text-xs uppercase tracking-widest mb-5">{{ cat.name }}</h3>
          <div class="space-y-4">
            <div v-for="skill in cat.skills" :key="skill.name">
              <div class="flex justify-between mb-1.5">
                <span class="text-sm dark:text-zinc-300 text-zinc-700">{{ skill.name }}</span>
                <span class="font-mono text-xs dark:text-zinc-500 text-zinc-400">{{ skill.level }}%</span>
              </div>
              <div class="h-1.5 dark:bg-zinc-800 bg-zinc-200 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-brand-600 to-brand-400 rounded-full"
                  :style="{ width: skill.level + '%' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-wrap gap-2 justify-center">
        <span
          v-for="tool in tools"
          :key="tool"
          class="px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-default
            dark:text-zinc-400 dark:bg-zinc-900/80 dark:border dark:border-zinc-800 dark:hover:border-brand-500/40 dark:hover:text-brand-400
            text-zinc-600 bg-zinc-100 border border-zinc-200 hover:border-brand-500/40 hover:text-brand-600"
        >
          {{ tool }}
        </span>
      </div>
    </div>
  </section>
</template>

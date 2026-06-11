<script setup lang="ts">
const stats = [
  { value: '4+', label: 'Años de experiencia' },
  { value: '7', label: 'Empresas / clientes' },
  { value: '2021', label: 'Ing. de Sistemas UNT' },
  { value: '∞', label: 'Café consumido' },
]
</script>

<template>
  <section id="about" class="py-32">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading label="01. Sobre mí" title="¿Quién soy?" />

      <div class="grid md:grid-cols-2 gap-16 mt-16 items-center">
        <div class="space-y-5 dark:text-zinc-400 text-zinc-600 leading-relaxed">
          <p>
            Soy <span class="dark:text-zinc-200 text-zinc-900 font-medium">Bryan Jefferson Yepez Remigio</span>,
            Bachiller en Ingeniería de Sistemas por la
            <span class="text-brand-500 dark:text-brand-400">Universidad Nacional de Trujillo</span>.
            Llevo más de 4 años desarrollando aplicaciones web en entornos reales y exigentes.
          </p>
          <p>
            Mi stack principal gira en torno a <span class="dark:text-zinc-200 text-zinc-900 font-medium">Vue 3 / Nuxt</span>,
            aunque también manejo React, Next.js y el lado backend con Node.js y NestJS.
            He trabajado desde startups hasta plataformas con cientos de miles de usuarios como
            <span class="dark:text-zinc-200 text-zinc-900">Joinnus</span>.
          </p>
          <p>
            Me importa construir interfaces rápidas, accesibles y con código limpio.
            También tengo experiencia integrando diseños desde Figma y trabajando con sistemas de diseño propios.
          </p>

          <div class="grid grid-cols-2 gap-4 pt-4">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="glass dark:glass rounded-xl p-4 dark:bg-white/[0.03] bg-zinc-100 dark:border-white/[0.06] border-zinc-200"
            >
              <p class="text-2xl font-bold text-brand-500 dark:text-brand-400 font-mono">{{ stat.value }}</p>
              <p class="text-xs dark:text-zinc-500 text-zinc-500 mt-1">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="flex justify-center md:justify-end">
          <div class="relative">
            <div class="w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-brand-500/20 to-teal-400/10 border border-brand-500/20 flex items-center justify-center glow dark:bg-white/[0.03] bg-white">
              <span class="font-mono text-6xl font-bold text-brand-500/50 dark:text-brand-400/60">B</span>
            </div>
            <div class="absolute -bottom-4 -right-4 dark:bg-white/[0.03] bg-white backdrop-blur-sm rounded-xl px-4 py-2 border dark:border-white/[0.06] border-zinc-200 shadow-sm">
              <p class="text-xs dark:text-zinc-500 text-zinc-400 font-mono">actualmente en</p>
              <p class="text-sm dark:text-zinc-200 text-zinc-800 font-medium">@ Joinnus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

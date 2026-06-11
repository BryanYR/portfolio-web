<script setup lang="ts">
const roles = ['Frontend Developer', 'Vue / Nuxt Specialist', 'UI Engineer', 'Full-Stack Capable']
const currentRole = ref('')
const roleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)

onMounted(() => typeLoop())

function typeLoop() {
  const target = roles[roleIndex.value]
  if (!isDeleting.value) {
    currentRole.value = target.slice(0, charIndex.value + 1)
    charIndex.value++
    if (charIndex.value === target.length) {
      isDeleting.value = true
      setTimeout(typeLoop, 1800)
      return
    }
  } else {
    currentRole.value = target.slice(0, charIndex.value - 1)
    charIndex.value--
    if (charIndex.value === 0) {
      isDeleting.value = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
    }
  }
  setTimeout(typeLoop, isDeleting.value ? 55 : 85)
}
</script>

<template>
  <section class="min-h-screen flex items-center pt-16">
    <div class="max-w-6xl mx-auto px-6 py-24 w-full">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-500/10 border border-brand-500/20 text-brand-500 dark:text-brand-400 mb-8 animate-fade-in">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-500 dark:bg-brand-400 animate-pulse" />
          Disponible para nuevas oportunidades
        </div>

        <p class="font-mono text-brand-500 dark:text-brand-400 text-sm mb-4 animate-fade-up" style="animation-delay:0.1s;opacity:0">
          Hola, mi nombre es
        </p>

        <h1 class="text-5xl md:text-7xl font-bold dark:text-zinc-100 text-zinc-900 tracking-tight mb-2 animate-fade-up" style="animation-delay:0.2s;opacity:0">
          Bryan Yepez
        </h1>

        <h2 class="text-3xl md:text-5xl font-bold dark:text-zinc-500 text-zinc-400 mb-6 h-12 md:h-16 animate-fade-up" style="animation-delay:0.3s;opacity:0">
          <span class="text-gradient">{{ currentRole }}</span><span class="animate-blink text-brand-500 dark:text-brand-400">|</span>
        </h2>

        <p class="dark:text-zinc-400 text-zinc-600 text-lg leading-relaxed max-w-xl mb-10 animate-fade-up" style="animation-delay:0.4s;opacity:0">
          Ingeniero de Sistemas con 4+ años construyendo aplicaciones web modernas.
          Especializado en <span class="dark:text-zinc-200 text-zinc-800 font-medium">Vue / Nuxt</span>,
          apasionado por la performance, la accesibilidad y el buen código.
        </p>

        <div class="flex flex-wrap gap-4 animate-fade-up" style="animation-delay:0.5s;opacity:0">
          <a
            href="#projects"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5"
          >
            Ver mis proyectos
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border dark:border-zinc-700 border-zinc-300 dark:text-zinc-300 text-zinc-700 dark:hover:border-zinc-500 hover:border-zinc-500 dark:hover:text-zinc-100 hover:text-zinc-900 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Contactar
          </a>
        </div>

        <div class="flex items-center gap-4 mt-12 animate-fade-up" style="animation-delay:0.6s;opacity:0">
          <a
            href="https://github.com/bjyepez15"
            target="_blank"
            class="dark:text-zinc-500 text-zinc-400 dark:hover:text-zinc-200 hover:text-zinc-700 transition-colors"
            aria-label="GitHub"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/bryan-yepez-remigio-203945244/"
            target="_blank"
            class="dark:text-zinc-500 text-zinc-400 dark:hover:text-zinc-200 hover:text-zinc-700 transition-colors"
            aria-label="LinkedIn"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <span class="w-px h-4 dark:bg-zinc-700 bg-zinc-300" />
          <span class="font-mono text-xs dark:text-zinc-600 text-zinc-400">bjyepez15@gmail.com</span>
        </div>
      </div>
    </div>
  </section>
</template>

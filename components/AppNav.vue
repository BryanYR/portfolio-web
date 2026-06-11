<script setup lang="ts">
const isOpen = ref(false)

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const scrolled = ref(false)
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-zinc-950/80 dark:bg-zinc-950/80 light:bg-white/80 backdrop-blur-md border-b dark:border-white/[0.06] border-zinc-200/80'
      : ''"
  >
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" class="font-mono text-brand-500 dark:text-brand-400 font-medium text-sm tracking-wider hover:text-brand-400 dark:hover:text-brand-300 transition-colors">
        &lt;bryan /&gt;
      </a>

      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-sm dark:text-zinc-400 text-zinc-600 dark:hover:text-zinc-100 hover:text-zinc-900 transition-colors relative group"
          >
            {{ link.label }}
            <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-500 group-hover:w-full transition-all duration-300" />
          </a>
        </li>
      </ul>

      <div class="hidden md:flex items-center gap-3">
        <ThemeToggle />
        <a
          href="mailto:bjyepez15@gmail.com"
          class="flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full border border-brand-500/50 text-brand-500 dark:text-brand-400 hover:bg-brand-500/10 hover:border-brand-400 transition-all duration-200"
        >
          Contact
        </a>
      </div>

      <button class="md:hidden dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100" @click="isOpen = !isOpen">
        <svg v-if="!isOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <Transition name="slide-down">
      <div v-if="isOpen" class="md:hidden dark:bg-zinc-950/95 bg-white/95 backdrop-blur-md border-b dark:border-white/[0.06] border-zinc-200 px-6 py-4">
        <ul class="flex flex-col gap-4">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" class="text-sm dark:text-zinc-400 text-zinc-600 dark:hover:text-zinc-100 hover:text-zinc-900 transition-colors" @click="isOpen = false">
              {{ link.label }}
            </a>
          </li>
          <li><ThemeToggle /></li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

<script setup lang="ts">
const c = useContent()
const isOpen = ref(false)

const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 20 }
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300"
    :class="scrolled || isOpen ? 'border-ink/10 bg-canvas/90 backdrop-blur-md' : 'border-transparent'"
  >
    <nav class="wrap flex h-16 items-center justify-between gap-6">
      <a href="#top" class="font-display text-2xl font-extrabold uppercase leading-none" :aria-label="c.nav.home">
        BY<span class="text-stamp">.</span>
      </a>

      <ul class="hidden items-center gap-8 lg:flex">
        <li v-for="link in c.nav.links" :key="link.href">
          <a :href="link.href" class="kicker text-muted transition-colors hover:text-ink">{{ link.label }}</a>
        </li>
      </ul>

      <div class="flex items-center gap-5">
        <NuxtLink
          :to="c.nav.switchTo.href"
          :hreflang="c.nav.switchTo.hreflang"
          :aria-label="c.nav.switchTo.label"
          class="kicker text-muted transition-colors hover:text-ink"
        >
          {{ c.nav.switchTo.short }}
        </NuxtLink>
        <div class="hidden md:block"><ThemeToggle /></div>
        <a
          :href="c.cv.href"
          download
          class="kicker hidden rounded-full border border-ink px-4 py-2 transition-colors hover:bg-ink hover:text-canvas sm:inline-block"
        >
          {{ c.cv.label }} ↓
        </a>
        <button
          class="kicker text-ink lg:hidden"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          @click="isOpen = !isOpen"
        >
          {{ isOpen ? c.nav.close : c.nav.menu }}
        </button>
      </div>
    </nav>

    <Transition name="slide-down">
      <div v-if="isOpen" id="mobile-menu" class="wrap border-t border-ink/10 pb-6 pt-2 lg:hidden">
        <ul class="flex flex-col">
          <li v-for="link in c.nav.links" :key="link.href" class="border-b border-dashed border-ink/20">
            <a :href="link.href" class="block py-3 font-display text-3xl font-bold uppercase" @click="isOpen = false">
              {{ link.label }}
            </a>
          </li>
        </ul>
        <div class="mt-5 flex items-center justify-between">
          <ThemeToggle />
          <a :href="c.cv.href" download class="kicker rounded-full border border-ink px-4 py-2 sm:hidden">{{ c.cv.label }} ↓</a>
        </div>
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

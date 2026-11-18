<script setup lang="ts">
const c = useContent()
</script>

<template>
  <div class="relative min-h-screen">
    <!-- Paper grain -->
    <div aria-hidden="true" class="pointer-events-none fixed inset-0 z-[60] bg-[url('/grain.svg')] opacity-[0.09] dark:opacity-[0.05] dark:invert" />

    <a
      href="#main"
      class="kicker fixed left-4 top-3 z-[70] -translate-y-20 bg-ink px-3 py-2 text-canvas transition-transform focus:translate-y-0"
    >
      {{ c.nav.skip }}
    </a>
    <AppNav />
    <main id="main" tabindex="-1" class="outline-none">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

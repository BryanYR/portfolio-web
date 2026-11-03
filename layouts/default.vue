<template>
  <div class="relative min-h-screen">
    <!-- Paper grain -->
    <div aria-hidden="true" class="pointer-events-none fixed inset-0 z-[60] bg-[url('/grain.svg')] opacity-[0.09] dark:opacity-[0.05] dark:invert" />

    <AppNav />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

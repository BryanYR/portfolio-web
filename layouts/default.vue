<template>
  <div class="min-h-screen relative">
    <!-- Grid background -->
    <div class="fixed inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
    <div class="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,#14b8a610,transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,#14b8a620,transparent)] pointer-events-none" />

    <AppNav />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

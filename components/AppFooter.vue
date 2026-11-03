<script setup lang="ts">
const c = useContent()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="wrap">
    <div class="flex flex-col gap-3 border-t border-ink/15 py-8 text-muted sm:flex-row sm:items-center sm:justify-between">
      <span class="kicker">© {{ year }} Bryan Yepez</span>
      <span class="kicker">{{ c.footer.made }}</span>
      <a href="#top" class="kicker transition-colors hover:text-ink">{{ c.footer.top }}</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ kicker: string; title: string; aside?: string }>()
</script>

<template>
  <div class="flex items-end justify-between gap-6 border-b-2 border-ink pb-4">
    <div>
      <p class="kicker text-stamp">{{ kicker }}</p>
      <h2 class="mt-3 font-display text-6xl font-extrabold uppercase leading-[0.85] md:text-8xl">{{ title }}</h2>
    </div>
    <p v-if="aside" class="kicker hidden pb-2 text-muted sm:block">{{ aside }}</p>
  </div>
</template>

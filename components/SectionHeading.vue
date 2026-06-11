<script setup lang="ts">
defineProps<{ label: string; title: string }>()
</script>

<template>
  <div>
    <p class="font-mono text-brand-500 dark:text-brand-400 text-sm mb-3">{{ label }}</p>
    <div class="flex items-center gap-4">
      <h2 class="text-3xl md:text-4xl font-bold dark:text-zinc-100 text-zinc-900 tracking-tight">{{ title }}</h2>
      <div class="flex-1 h-px bg-gradient-to-r dark:from-zinc-700 from-zinc-300 to-transparent max-w-xs hidden md:block" />
    </div>
  </div>
</template>

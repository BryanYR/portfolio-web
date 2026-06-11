<script setup lang="ts">
const colorMode = useColorMode()

const options = ['light', 'dark', 'system'] as const

function cycle() {
  const idx = options.indexOf(colorMode.preference as typeof options[number])
  colorMode.preference = options[(idx + 1) % options.length]
}
</script>

<template>
  <ClientOnly>
    <button
      class="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all duration-200 text-xs font-mono select-none cursor-pointer
        dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:border-brand-500/50 dark:hover:text-brand-400
        border-zinc-300 bg-zinc-100 text-zinc-500 hover:border-brand-500/50 hover:text-brand-600"
      :title="`Tema: ${colorMode.preference}`"
      @click="cycle"
    >
      <!-- Sun -->
      <svg v-if="colorMode.preference === 'light'" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" stroke-width="2"/>
        <path stroke-linecap="round" stroke-width="2" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
      <!-- Moon -->
      <svg v-else-if="colorMode.preference === 'dark'" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
      <!-- Monitor -->
      <svg v-else class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke-width="2"/>
        <path stroke-linecap="round" stroke-width="2" d="M8 21h8M12 17v4"/>
      </svg>
      <span class="capitalize">{{ colorMode.preference }}</span>
    </button>
    <template #fallback>
      <div class="w-20 h-7 rounded-lg dark:bg-zinc-900/60 bg-zinc-100 border dark:border-zinc-700 border-zinc-300 animate-pulse" />
    </template>
  </ClientOnly>
</template>

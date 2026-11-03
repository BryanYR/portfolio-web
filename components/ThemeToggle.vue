<script setup lang="ts">
const colorMode = useColorMode()
const c = useContent()

const options = ['light', 'dark', 'system'] as const
type Option = typeof options[number]

const current = computed(() => colorMode.preference as Option)

function cycle() {
  const idx = options.indexOf(current.value)
  colorMode.preference = options[(idx + 1) % options.length]
}
</script>

<template>
  <ClientOnly>
    <button
      class="kicker flex items-center gap-2 py-1.5 text-muted transition-colors hover:text-ink"
      :aria-label="`${c.theme[current]}. ${c.theme.aria}`"
      @click="cycle"
    >
      <span class="relative h-3 w-3 overflow-hidden rounded-full border border-current">
        <span
          class="absolute inset-y-0 left-0 bg-current transition-all duration-300"
          :class="{ 'w-0': current === 'light', 'w-full': current === 'dark', 'w-1/2': current === 'system' }"
        />
      </span>
      {{ c.theme[current] }}
    </button>
    <template #fallback>
      <span class="kicker py-1.5 text-muted">{{ c.theme.system }}</span>
    </template>
  </ClientOnly>
</template>

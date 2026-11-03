<script setup lang="ts">
// Decorative barcode: each character's bits become thin/thick bars
const props = defineProps<{ value: string }>()

const bars = computed(() =>
  [...props.value].flatMap(ch => ch.charCodeAt(0).toString(2).padStart(8, '0').split('').map(Number)),
)
</script>

<template>
  <div aria-hidden="true" class="flex h-full items-stretch overflow-hidden">
    <span
      v-for="(bit, i) in bars"
      :key="i"
      class="shrink-0"
      :class="i % 2 ? 'bg-transparent' : 'bg-current'"
      :style="{ width: bit ? '3px' : '1px' }"
    />
  </div>
</template>

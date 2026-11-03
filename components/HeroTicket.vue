<script setup lang="ts">
import { LINKS } from '~/constants/content'

const c = useContent()
</script>

<template>
  <!-- drop-shadow lives on the wrapper so it follows the masked notches -->
  <div class="animate-drop [filter:drop-shadow(0_22px_28px_rgb(0_0_0/0.22))]">
    <div class="w-[290px] rotate-[2.5deg] transition-transform duration-500 ease-out hover:rotate-0 sm:w-[330px]">
      <div class="ticket notch-b border-b-2 border-dashed border-paper-ink/25 px-5 pb-5 pt-4">
        <div class="flex justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
          <span>{{ c.ticket.admit }}</span>
          <span>Nº 0315·21</span>
        </div>

        <div class="relative mt-3 aspect-[4/5] overflow-hidden bg-paper-ink/10">
          <img
            src="/img/bryan.jpg"
            :alt="c.ticket.photoAlt"
            width="1200"
            height="1600"
            fetchpriority="high"
            class="h-full w-full object-cover object-[50%_30%] saturate-[0.85]"
          >
          <span class="absolute right-3 top-3 rotate-[-8deg] border-2 border-paper-stamp bg-paper/85 px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-paper-stamp">
            {{ c.ticket.stamp }}
          </span>
        </div>

        <p class="mt-4 font-display text-4xl font-extrabold uppercase leading-none">Bryan Yepez</p>
        <p class="mt-1 font-mono text-[11px] uppercase tracking-wider opacity-70">{{ c.ticket.role }}</p>
      </div>

      <div class="ticket notch-t px-5 pb-5 pt-4">
        <dl class="grid grid-cols-3 gap-3 font-mono uppercase">
          <div v-for="f in c.ticket.fields" :key="f.label">
            <dt class="text-[9px] tracking-[0.18em] opacity-60">{{ f.label }}</dt>
            <dd class="mt-0.5 text-[12px] font-medium leading-tight">{{ f.value }}</dd>
          </div>
        </dl>
        <div class="mt-4 h-10">
          <Barcode :value="LINKS.email" />
        </div>
      </div>
    </div>
  </div>
</template>

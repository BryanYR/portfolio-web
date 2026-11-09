<script setup lang="ts">
const c = useContent()

// DIP-8 pinout: pins 1–4 run down the left side, 5–8 back up the right (real IC numbering).
const PIN_Y = [36, 66, 96, 126]
const pins = computed(() =>
  c.value.sheet.pins.slice(0, 8).map((name, i) => {
    const left = i < 4
    return { n: i + 1, name, left, y: left ? PIN_Y[i] : PIN_Y[7 - i] }
  }),
)
const pinoutLabel = computed(() => `${c.value.sheet.pinoutLabel}: ${c.value.sheet.pins.join(', ')}`)
</script>

<template>
  <!-- drop-shadow on the wrapper so it reads as a printed sheet lying on the page -->
  <div class="animate-drop [filter:drop-shadow(0_22px_28px_rgb(0_0_0/0.22))]">
    <article class="ticket relative w-[300px] rotate-[2deg] px-5 pb-4 pt-4 transition-transform duration-500 ease-out hover:rotate-0 sm:w-[360px]">
      <header class="flex items-baseline justify-between border-b-2 border-paper-ink pb-2 font-mono text-[10px] uppercase tracking-[0.2em]">
        <span>{{ c.sheet.kicker }}</span>
        <span>BY-05 · Rev. 2026</span>
      </header>

      <p class="mt-4 font-display text-[2.6rem] font-extrabold uppercase leading-none">Bryan Yepez</p>
      <p class="mt-1 font-mono text-[11px] uppercase tracking-wider opacity-70">{{ c.sheet.role }}</p>

      <h2 class="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] opacity-60">
        <span class="text-paper-stamp opacity-100">01</span>{{ c.sheet.pinoutTitle }}
        <span class="h-px flex-1 bg-paper-ink/25" />
      </h2>

      <div class="relative mt-2">
        <span class="absolute -bottom-3 -right-1 rotate-[-7deg] border-2 border-paper-stamp bg-paper/90 px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-paper-stamp">
          {{ c.sheet.stamp }}
        </span>
        <svg viewBox="0 0 300 160" class="block w-full" role="img" :aria-label="pinoutLabel">
          <rect x="110" y="14" width="80" height="132" rx="3" class="fill-paper-ink" />
          <circle cx="150" cy="14" r="8" class="fill-paper" />
          <g v-for="p in pins" :key="p.n">
            <rect :x="p.left ? 98 : 190" :y="p.y - 3" width="12" height="6" class="fill-paper-ink/55" />
            <text
              :x="p.left ? 92 : 208"
              :y="p.y + 3.5"
              :text-anchor="p.left ? 'end' : 'start'"
              class="fill-paper-ink font-mono text-[10px]"
            >{{ p.name }}</text>
            <text
              :x="p.left ? 118 : 182"
              :y="p.y + 3"
              :text-anchor="p.left ? 'start' : 'end'"
              class="fill-paper font-mono text-[8px] opacity-60"
            >{{ p.n }}</text>
          </g>
          <text
            x="150"
            y="80"
            transform="rotate(-90 150 80)"
            text-anchor="middle"
            dominant-baseline="central"
            class="fill-paper font-display text-[22px] font-extrabold tracking-[0.12em]"
          >BY-05</text>
        </svg>
      </div>

      <h2 class="mt-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] opacity-60">
        <span class="text-paper-stamp opacity-100">02</span>{{ c.sheet.specsTitle }}
        <span class="h-px flex-1 bg-paper-ink/25" />
      </h2>

      <dl class="mt-2 font-mono text-[11px] uppercase">
        <div
          v-for="s in c.sheet.specs"
          :key="s.label"
          class="flex items-baseline gap-2 border-b border-paper-ink/15 py-1.5 last:border-0"
        >
          <dt class="tracking-[0.12em] opacity-60">{{ s.label }}</dt>
          <span class="flex-1 translate-y-[-3px] border-b border-dotted border-paper-ink/30" aria-hidden="true" />
          <dd class="font-medium">{{ s.value }}</dd>
        </div>
      </dl>

      <footer class="mt-3 flex justify-between border-t-2 border-paper-ink pt-2 font-mono text-[9px] uppercase tracking-[0.2em] opacity-70">
        <span>{{ c.sheet.origin }}</span>
        <span>{{ c.sheet.page }}</span>
      </footer>
    </article>
  </div>
</template>

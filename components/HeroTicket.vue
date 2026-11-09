<script setup lang="ts">
import { LINKS } from '~/constants/content'

const c = useContent()

// Seating chart drawn in place of the portrait: rows fan around the stage,
// two aisles split the blocks, and one seat (row 3, centre) is Bryan's.
const CX = 145
const GAP = 14
const AISLE = 10
const MINE = { row: 2, offset: 0 }

const seats = Array.from({ length: 6 }, (_, row) => {
  const count = 9 + row * 2
  return Array.from({ length: count }, (_, i) => {
    const offset = i - (count - 1) / 2
    const x = CX + offset * GAP + Math.sign(offset) * (Math.abs(offset) > 2 ? AISLE : 0)
    const y = 62 + row * 21 - (x - CX) ** 2 / 1500
    const mine = row === MINE.row && offset === MINE.offset
    const sold = !mine && (row * 7 + i * 13) % 10 < 6
    return { key: `${row}-${i}`, x: +x.toFixed(1), y: +y.toFixed(1), mine, sold }
  })
}).flat()

const mine = seats.find(s => s.mine)!
</script>

<template>
  <!-- drop-shadow lives on the wrapper so it follows the masked notches -->
  <div class="animate-drop [filter:drop-shadow(0_22px_28px_rgb(0_0_0/0.22))]">
    <div class="w-[300px] rotate-[2.5deg] transition-transform duration-500 ease-out hover:rotate-0 sm:w-[370px]">
      <div class="ticket notch-b border-b-2 border-dashed border-paper-ink/25 px-5 pb-5 pt-4">
        <div class="flex justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
          <span>{{ c.ticket.admit }}</span>
          <span>Nº 0315·21</span>
        </div>

        <div class="relative mt-3 border border-paper-ink/15 px-2 pb-3 pt-2">
          <svg viewBox="0 0 290 178" class="block w-full" role="img" :aria-label="c.ticket.mapLabel">
            <path d="M45 6 H245 V24 Q145 44 45 24 Z" class="fill-paper-ink" />
            <text
              x="145"
              y="20"
              text-anchor="middle"
              class="fill-paper font-mono text-[9px] uppercase tracking-[0.3em]"
            >{{ c.ticket.stage }}</text>

            <circle
              v-for="s in seats"
              :key="s.key"
              :cx="s.x"
              :cy="s.y"
              r="5"
              :class="s.mine
                ? 'fill-paper-stamp'
                : s.sold ? 'fill-paper-ink/25' : 'fill-none stroke-paper-ink/45'"
              stroke-width="1"
            />
            <circle
              :cx="mine.x"
              :cy="mine.y"
              r="5"
              class="animate-ping fill-none stroke-paper-stamp [transform-box:fill-box] [transform-origin:center]"
              stroke-width="1.5"
              aria-hidden="true"
            />
          </svg>

          <ul class="mt-3 flex justify-center gap-5 px-1 font-mono text-[9px] uppercase tracking-[0.16em] opacity-75" aria-hidden="true">
            <li class="flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-paper-ink/25" />{{ c.ticket.legend.sold }}</li>
            <li class="flex items-center gap-1.5"><span class="h-2 w-2 rounded-full border border-paper-ink/45" />{{ c.ticket.legend.free }}</li>
            <li class="flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-paper-stamp" />{{ c.ticket.legend.yours }}</li>
          </ul>

          <span class="absolute -right-2 top-12 rotate-[8deg] border-2 border-paper-stamp bg-paper/90 px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-paper-stamp">
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

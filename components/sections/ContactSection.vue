<script setup lang="ts">
import { LINKS } from '~/constants/content'

const c = useContent()

const links = computed(() => [
  { label: 'LinkedIn ↗', href: LINKS.linkedin, external: true },
  { label: 'GitHub ↗', href: LINKS.github, external: true },
  { label: `WhatsApp ${LINKS.phone} ↗`, href: LINKS.whatsapp, external: true },
  { label: `${c.value.cv.label} ↓`, href: c.value.cv.href, download: true },
])

// Local time in Lima, so whoever writes knows when to expect an answer
const limaTime = ref('')
let timer: ReturnType<typeof setInterval> | undefined
const tick = () => {
  limaTime.value = new Intl.DateTimeFormat('es-PE', { timeZone: 'America/Lima', hour: '2-digit', minute: '2-digit' }).format(new Date())
}
onMounted(() => {
  tick()
  timer = setInterval(tick, 30_000)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section id="contacto" class="wrap py-24 md:py-32">
    <SectionHeading :kicker="c.contact.kicker" :title="c.contact.title" />

    <div class="mt-12 [filter:drop-shadow(0_22px_28px_rgb(0_0_0/0.18))]">
      <div class="flex flex-col lg:flex-row">
        <div class="ticket notch-b flex-1 border-b-2 border-dashed border-paper-ink/25 p-7 md:p-12 lg:notch-r lg:border-b-0 lg:border-r-2">
          <p class="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">{{ c.contact.intro }}</p>
          <a
            :href="`mailto:${LINKS.email}`"
            class="mt-5 block break-words font-display text-[clamp(1.75rem,8.5vw,5.5rem)] font-extrabold leading-[0.95] transition-colors hover:text-paper-stamp lg:text-[clamp(3rem,6vw,5.5rem)]"
          >
            {{ LINKS.email }}
          </a>
          <ul class="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <li v-for="link in links" :key="link.href">
              <a
                :href="link.href"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener' : undefined"
                :download="link.download || undefined"
                class="font-mono text-sm underline decoration-paper-ink/30 underline-offset-[5px] transition-colors hover:decoration-paper-stamp"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div class="ticket notch-t flex flex-col justify-between gap-8 p-7 md:p-12 lg:notch-l lg:w-72 lg:p-10">
          <dl class="space-y-5 font-mono uppercase">
            <div>
              <dt class="text-[9px] tracking-[0.18em] opacity-60">{{ c.contact.validFor }}</dt>
              <dd class="mt-1 text-sm font-medium">{{ c.contact.validValue }}</dd>
            </div>
            <div>
              <dt class="text-[9px] tracking-[0.18em] opacity-60">{{ c.contact.timeLabel }}</dt>
              <dd class="mt-1 text-sm font-medium tabular-nums">{{ limaTime || '—' }} · GMT-5</dd>
            </div>
          </dl>
          <div class="h-12">
            <Barcode value="+51970649522" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

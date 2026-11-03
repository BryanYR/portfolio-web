<script setup lang="ts">
import type { Badge } from '~/constants/content'

const c = useContent()

const badgeClass: Record<Badge, string> = {
  work: 'border-ink/40 text-ink',
  freelance: 'border-olive text-olive',
  ai: 'border-stamp text-stamp',
}

const host = (url: string) => new URL(url).hostname.replace(/^www\./, '')
</script>

<template>
  <section id="proyectos" class="wrap py-24 md:py-32">
    <SectionHeading :kicker="c.projects.kicker" :title="c.projects.title" :aside="c.projects.aside" />

    <ol>
      <li
        v-for="(project, i) in c.projects.featured"
        :key="project.name"
        class="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 gap-y-8 border-b border-ink/15 py-12 md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-x-10 md:py-16"
      >
        <span class="pt-1 font-mono text-sm text-muted">{{ String(i + 1).padStart(2, '0') }}</span>

        <div>
          <span class="kicker inline-block border px-1.5 py-0.5 !text-[10px]" :class="badgeClass[project.badge]">
            {{ c.projects.badges[project.badge] }}
          </span>
          <h3 class="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-6xl">{{ project.name }}</h3>
          <p class="mt-2 font-medium">{{ project.subtitle }}</p>
          <p class="mt-5 leading-relaxed text-muted">{{ project.summary }}</p>

          <ul class="mt-5 space-y-2">
            <li v-for="h in project.highlights" :key="h" class="flex gap-3 leading-relaxed">
              <span class="mt-[0.7em] h-px w-3 shrink-0 bg-olive" aria-hidden="true" />
              {{ h }}
            </li>
          </ul>

          <p class="mt-5 font-mono text-xs text-muted">{{ project.tags.join(' · ') }}</p>

          <a
            v-if="project.live"
            :href="project.live"
            target="_blank"
            rel="noopener"
            class="kicker group mt-6 inline-flex items-center gap-1.5 text-ink"
          >
            {{ c.projects.viewSite }} · {{ host(project.live) }}
            <span class="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
          </a>
          <p v-else class="kicker mt-6 text-muted">{{ c.projects.internal }}</p>
        </div>

        <!-- Media: a printed screenshot, a stats panel or a terminal -->
        <div class="col-start-2 self-start md:col-start-auto">
          <component
            :is="project.live ? 'a' : 'div'"
            v-if="project.media.type === 'image'"
            :href="project.live ?? undefined"
            target="_blank"
            rel="noopener"
            tabindex="-1"
            class="group block [filter:drop-shadow(0_16px_22px_rgb(0_0_0/0.16))]"
          >
            <figure class="ticket rotate-[-1deg] p-2.5 pb-3 transition-transform duration-500 group-hover:rotate-0">
              <div class="aspect-[16/10] overflow-hidden">
                <img
                  :src="project.media.src"
                  :alt="project.media.alt"
                  width="1280"
                  height="800"
                  loading="lazy"
                  class="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                >
              </div>
              <figcaption v-if="project.live" class="mt-2.5 font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">
                {{ host(project.live) }}
              </figcaption>
            </figure>
          </component>

          <dl v-else-if="project.media.type === 'stats'" class="grid grid-cols-2 gap-px border border-ink/15 bg-ink/15">
            <div
              v-for="(s, si) in project.media.items"
              :key="s.label"
              class="flex flex-col-reverse bg-surface p-5"
              :class="si === 0 ? 'col-span-2' : ''"
            >
              <dt class="mt-2 text-sm text-muted">{{ s.label }}</dt>
              <dd class="font-display font-extrabold leading-none" :class="si === 0 ? 'text-7xl md:text-8xl text-olive' : 'text-5xl'">{{ s.value }}</dd>
            </div>
          </dl>

          <div v-else-if="project.media.type === 'terminal'" class="bg-paper-ink p-6 font-mono text-sm leading-relaxed text-paper">
            <div class="mb-5 flex gap-1.5" aria-hidden="true">
              <span class="h-2.5 w-2.5 rounded-full bg-paper/25" />
              <span class="h-2.5 w-2.5 rounded-full bg-paper/25" />
              <span class="h-2.5 w-2.5 rounded-full bg-paper/25" />
            </div>
            <p v-for="line in project.media.lines" :key="line.cmd" class="mb-3">
              <span class="text-paper/50"># {{ line.comment }}</span><br>
              <span class="text-[#C9CD8E]">$</span> {{ line.cmd }}
            </p>
            <p class="mt-5 text-[#F0704E]">{{ project.media.footer }}</p>
          </div>
        </div>
      </li>
    </ol>

    <div class="mt-16">
      <p class="kicker text-muted">{{ c.projects.othersTitle }}</p>
      <ul class="mt-4 border-t border-ink/15">
        <li v-for="p in c.projects.others" :key="p.name" class="border-b border-ink/15">
          <a
            :href="p.live"
            target="_blank"
            rel="noopener"
            class="group grid gap-x-8 gap-y-2 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_10rem] md:items-baseline"
          >
            <h3 class="font-display text-3xl font-extrabold uppercase leading-none transition-colors group-hover:text-olive">{{ p.name }}</h3>
            <div>
              <p class="leading-relaxed text-muted">{{ p.summary }}</p>
              <p class="mt-2 font-mono text-xs text-muted">{{ p.tags.join(' · ') }}</p>
            </div>
            <span class="kicker inline-flex items-center gap-1.5 md:justify-end">
              {{ host(p.live) }}
              <span class="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

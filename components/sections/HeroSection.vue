<script setup lang="ts">
import { LINKS } from '~/constants/content'

const c = useContent()
</script>

<template>
  <section id="top" class="wrap pb-20 pt-28 md:pt-36">
    <div class="grid items-end gap-14 lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-7">
        <p class="kicker flex items-center gap-3 text-muted">
          <span class="h-2 w-2 shrink-0 rounded-full bg-stamp" />
          {{ c.hero.kicker }}
        </p>

        <h1 class="mt-6 font-display text-[clamp(5.5rem,40vw,13.5rem)] font-extrabold uppercase leading-[0.8] tracking-[-0.01em]">
          <span class="block animate-rise">Bryan</span>
          <span class="block animate-rise text-olive [animation-delay:120ms]">Yepez</span>
        </h1>

        <p class="mt-8 max-w-xl text-pretty text-xl leading-snug text-ink/85 md:text-2xl">
          {{ c.hero.lede.before }}<span class="text-ink">{{ c.hero.lede.strong }}</span>{{ c.hero.lede.after }}
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-x-4 gap-y-4">
          <a
            :href="c.cv.href"
            download
            class="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-sm font-semibold text-canvas transition-colors hover:bg-olive"
          >
            {{ c.cv.label }}
            <span class="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
          <a
            href="#proyectos"
            class="inline-flex items-center border border-ink px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-ink hover:text-canvas"
          >
            {{ c.hero.ctaProjects }}
          </a>
        </div>

        <p class="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
          <span class="kicker flex items-center gap-2 text-olive">
            <span class="h-1.5 w-1.5 rounded-full bg-olive" />
            {{ c.hero.status }}
          </span>
          <span class="hidden text-muted sm:inline" aria-hidden="true">·</span>
          <a :href="`mailto:${LINKS.email}`" class="link-underline font-mono">{{ LINKS.email }}</a>
        </p>
      </div>

      <div class="flex justify-center lg:col-span-5 lg:justify-end lg:pb-4">
        <HeroSheet />
      </div>
    </div>

    <dl class="mt-20 grid grid-cols-2 gap-px border-y border-ink/15 bg-ink/15 md:grid-cols-4">
      <div v-for="fact in c.hero.facts" :key="fact.label" class="flex flex-col-reverse bg-canvas px-1 py-5 md:px-5 md:first:pl-0">
        <dt class="mt-2 text-sm text-muted">{{ fact.label }}</dt>
        <dd class="font-display text-5xl font-extrabold leading-none">{{ fact.value }}</dd>
      </div>
    </dl>
  </section>
</template>

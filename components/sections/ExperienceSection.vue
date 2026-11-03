<script setup lang="ts">
const c = useContent()
</script>

<template>
  <section id="experiencia" class="border-y border-ink/10 bg-surface py-24 md:py-32">
    <div class="wrap">
      <SectionHeading :kicker="c.experience.kicker" :title="c.experience.title" :aside="c.experience.aside" />
      <p class="mt-5 max-w-2xl text-sm text-muted">{{ c.experience.note }}</p>

      <ol class="mt-4">
        <li
          v-for="job in c.experience.jobs"
          :key="job.company"
          class="grid gap-x-8 gap-y-3 border-b border-dashed border-ink/25 py-9 last:border-b-0 md:grid-cols-[11rem_minmax(0,1fr)_9rem]"
        >
          <div class="font-mono text-sm uppercase">
            <p>{{ job.period }}</p>
            <p class="kicker mt-2 text-muted">{{ job.type }}</p>
            <p v-if="job.current" class="kicker mt-2 flex items-center gap-2 text-stamp">
              <span class="h-1.5 w-1.5 rounded-full bg-stamp" />
              {{ c.experience.current }}
            </p>
          </div>

          <div>
            <h3 class="font-display text-4xl font-extrabold uppercase leading-none md:text-5xl">{{ job.company }}</h3>
            <p class="mt-2 font-medium">{{ job.role }}</p>
            <ul class="mt-4 max-w-2xl space-y-2">
              <li v-for="h in job.highlights" :key="h" class="flex gap-3 leading-relaxed text-muted">
                <span class="mt-[0.7em] h-px w-3 shrink-0 bg-olive" aria-hidden="true" />
                {{ h }}
              </li>
            </ul>
            <p class="mt-4 font-mono text-xs text-muted">{{ job.tags.join(' · ') }}</p>
          </div>

          <p class="kicker text-muted md:pt-2 md:text-right">{{ job.location }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

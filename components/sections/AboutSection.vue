<script setup lang="ts">
const c = useContent()

// Billed like a festival poster: the bigger the name, the more often I use it
const tierSize = ['text-4xl md:text-5xl', 'text-2xl md:text-3xl', 'text-xl']
</script>

<template>
  <section id="sobre-mi" class="wrap py-24 md:py-32">
    <SectionHeading :kicker="c.about.kicker" :title="c.about.title" />

    <div class="mt-12 grid gap-16 lg:grid-cols-12 lg:gap-12">
      <div class="lg:col-span-6">
        <div class="space-y-6 text-lg leading-relaxed text-ink/80">
          <p class="text-pretty text-2xl leading-snug text-ink md:text-3xl">{{ c.about.lede }}</p>
          <p v-for="p in c.about.paragraphs" :key="p">{{ p }}</p>
        </div>

        <div class="mt-10 border-t border-ink/15 pt-5">
          <p class="kicker text-muted">{{ c.about.languagesTitle }}</p>
          <dl class="mt-3 flex flex-wrap gap-x-10 gap-y-3">
            <div v-for="l in c.about.languages" :key="l.name">
              <dt class="font-display text-2xl font-extrabold uppercase leading-none">{{ l.name }}</dt>
              <dd class="mt-1 text-sm text-muted">{{ l.level }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="lg:col-span-6">
        <p class="kicker text-muted">{{ c.about.lineupTitle }}</p>
        <div class="mt-4 border-t-2 border-ink">
          <div v-for="(row, ri) in c.about.lineup" :key="row.tier" class="border-b border-dashed border-ink/25 py-6">
            <p class="kicker mb-3 text-stamp">{{ row.tier }}</p>
            <p class="font-display font-extrabold uppercase leading-[1.05]" :class="tierSize[ri]">
              <template v-for="(item, i) in row.items" :key="item">
                <span class="whitespace-nowrap">{{ item }}</span>
                <span v-if="i < row.items.length - 1" class="px-2 text-olive" aria-hidden="true">/</span>
                {{ ' ' }}
              </template>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

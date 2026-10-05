<script setup lang="ts">
import { PROJECTS, PROJECT_BADGE_COLORS } from '~/constants/projects'
</script>

<template>
  <section id="projects" class="py-32">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading label="03. Proyectos" title="Lo que he construido" />

      <div class="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <article
          v-for="project in PROJECTS"
          :key="project.title"
          class="rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1 flex flex-col
            dark:bg-white/[0.03] bg-white dark:border dark:border-white/[0.06] border border-zinc-200
            hover:border-brand-500/30 dark:hover:border-brand-500/20 hover:shadow-lg dark:hover:shadow-brand-500/5 hover:shadow-brand-500/10 shadow-sm dark:shadow-none"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-brand-500 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-xs px-2 py-0.5 rounded-full border" :class="PROJECT_BADGE_COLORS[project.badge]">
                {{ project.badge }}
              </span>
              <a v-if="project.links.github" :href="project.links.github" target="_blank" class="dark:text-zinc-500 text-zinc-400 dark:hover:text-zinc-200 hover:text-zinc-700 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a v-if="project.links.live && project.links.live !== '#'" :href="project.links.live" target="_blank" class="dark:text-zinc-500 text-zinc-400 dark:hover:text-zinc-200 hover:text-zinc-700 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <h3 class="dark:text-zinc-100 text-zinc-800 font-semibold mb-2 group-hover:text-brand-500 dark:group-hover:text-brand-300 transition-colors">
            {{ project.title }}
          </h3>
          <p class="dark:text-zinc-500 text-zinc-500 text-sm leading-relaxed flex-1">{{ project.description }}</p>

          <div class="flex flex-wrap gap-1.5 mt-5">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs font-mono px-2 py-0.5 rounded dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-500 text-zinc-500 dark:border dark:border-zinc-800 border border-zinc-200"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

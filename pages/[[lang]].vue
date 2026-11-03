<script setup lang="ts">
definePageMeta({
  validate: route => !route.params.lang || route.params.lang === 'en',
})

const locale = useLocale()
const c = useContent()

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [
    { rel: 'alternate', hreflang: 'es', href: '/' },
    { rel: 'alternate', hreflang: 'en', href: '/en' },
  ],
}))

useSeoMeta({
  title: () => c.value.meta.title,
  description: () => c.value.meta.description,
  ogTitle: () => c.value.meta.title,
  ogDescription: () => c.value.meta.description,
  ogLocale: () => c.value.meta.ogLocale,
  ogImage: '/img/bryan.jpg',
})
</script>

<template>
  <div>
    <HeroSection />
    <ProjectsSection />
    <ExperienceSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

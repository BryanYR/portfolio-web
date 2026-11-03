import { CONTENT, type Locale } from '~/constants/content'

// Locale comes from the URL: "/" is Spanish, "/en" is English
export function useLocale() {
  const route = useRoute()
  return computed<Locale>(() => (route.params.lang === 'en' ? 'en' : 'es'))
}

export function useContent() {
  const locale = useLocale()
  return computed(() => CONTENT[locale.value])
}

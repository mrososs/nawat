import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { i18n, readStoredLang, STORAGE_LANG_KEY } from '@/i18n'
import type { Lang } from '@/i18n/dictionary'

/**
 * Locale store — owns the active language as app state and drives vue-i18n.
 * vue-i18n performs the actual translation; this store orchestrates switching,
 * text direction, persistence, and the <html dir/lang> attributes.
 */
export const useLocaleStore = defineStore('locale', () => {
  const lang = ref<Lang>(readStoredLang())

  const isArabic = computed(() => lang.value === 'ar')
  const dir = computed(() => (isArabic.value ? 'rtl' : 'ltr'))

  function setLang(next: Lang) {
    lang.value = next
  }

  function toggle() {
    lang.value = lang.value === 'en' ? 'ar' : 'en'
  }

  watch(
    lang,
    (value) => {
      // Drive the vue-i18n global locale (composition mode → ref).
      i18n.global.locale.value = value
      const root = document.documentElement
      root.setAttribute('dir', value === 'ar' ? 'rtl' : 'ltr')
      root.setAttribute('lang', value)
      try {
        localStorage.setItem(STORAGE_LANG_KEY, value)
      } catch {
        /* ignore */
      }
    },
    { immediate: true },
  )

  return { lang, isArabic, dir, setLang, toggle }
})

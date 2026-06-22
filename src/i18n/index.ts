import { createI18n } from 'vue-i18n'
import { dictionaries, type Lang } from './dictionary'

const STORAGE_KEY = 'nw-lang'

export function readStoredLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'ar' || saved === 'en') return saved
  } catch {
    /* localStorage unavailable */
  }
  return 'en'
}

export const STORAGE_LANG_KEY = STORAGE_KEY

// Composition API mode (legacy: false). `dictionaries` doubles as the message set.
export const i18n = createI18n({
  legacy: false,
  locale: readStoredLang(),
  fallbackLocale: 'en',
  messages: dictionaries,
})

export default i18n

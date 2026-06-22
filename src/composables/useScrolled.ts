import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Tracks whether the window has scrolled past `threshold` pixels.
 * Used to switch the fixed nav from transparent to its solid/blurred state.
 */
export function useScrolled(threshold = 40) {
  const scrolled = ref(false)

  const onScroll = () => {
    scrolled.value = window.scrollY > threshold
  }

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { scrolled }
}

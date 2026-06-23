import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { initSmoothScroll, scrollToTop } from './animations'
import './styles/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

// Smooth scroll powers the weighty glide; keep Lenis in sync on navigation.
initSmoothScroll()
router.afterEach(() => scrollToTop(true))

app.mount('#app')

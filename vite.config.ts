import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // Treat <nawat-hero-scene> etc. is not needed — hero is a real Vue component.
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    // Allow any host header (e.g. *.loca.lt / ngrok tunnels) so the dev
    // server can be shared with clients through a public tunnel.
    allowedHosts: true,
  },
})

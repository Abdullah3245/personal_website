import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
  tailwindcss()],
  build: {
    // Three.js is a single large dep loaded lazily; the 500kB default warning
    // isn't actionable for us, so lift it to keep the build output clean.
    chunkSizeWarningLimit: 1000,
  },
})

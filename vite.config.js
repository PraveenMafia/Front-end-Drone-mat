import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'es2019'
  },
  plugins: [react(),
    tailwindcss(),],
})

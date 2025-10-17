import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // 👈 Add this line
  plugins: [tailwindcss()],
  // server: { host: true }
})

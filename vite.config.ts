import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    tailwindcss()],
  ssr: {
    // ensure lucide-react isn't left out of the server bundle
    noExternal: ['lucide-react']
  }
})

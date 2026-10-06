import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
// import react from '@vitejs/react-refresh'

// https://vite.dev/config/
export default defineConfig({
  // base: './',
  plugins: [
    react(), 
    tailwindcss()
  ],
})


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          googleFonts: `<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">`
        }
      }
    })
  ]
})

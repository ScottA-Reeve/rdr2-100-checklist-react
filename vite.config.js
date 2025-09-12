import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          // Inject Google Fonts for RDR2-styled typography
          injectScript: `
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Spectral+SC:wght@400;700&display=swap" rel="stylesheet">
          `
        },
      },
    }),
  ],
  base: '/rdr2-100-checklist-react/', // required for GitHub Pages
})

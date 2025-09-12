import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rdr2-100-checklist-react/', // make sure this matches your repo/project folder name
})

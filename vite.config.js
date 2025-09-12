import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/rdr2-100-checklist-react/', // 👈 must match your repo name
})

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // db.json diubah json-server setiap ada menu ditambah atau dihapus.
    // Tanpa baris ini, Vite memuat ulang halaman setiap kali file itu berubah.
    watch: { ignored: ['**/db.json'] },
  },
})

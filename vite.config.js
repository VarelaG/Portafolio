import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'; // <--- Importa 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),    tailwindcss()],
  resolve: { // <--- Añade esta sección
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

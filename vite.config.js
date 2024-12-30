import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/product_list_-w_cart/",
  plugins: [react()],
  server: '3000'
})

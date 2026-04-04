import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'portfolio' with your actual GitHub repo name
// e.g. if your repo is github.com/goldno/my-portfolio, set base: '/my-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio_website/',   // GitHub repo name
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    }
  }
})

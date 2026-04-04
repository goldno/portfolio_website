import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to match the GitHub repo name
// e.g. for github.com/goldno/my-portfolio, set base: '/my-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio_website/',   // GitHub repo name
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    }
  }
})

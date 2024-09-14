import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/', // Use root for base URL
  plugins: [react()],
  build: {
    outDir: '../backend/public/dist',
    emptyOutDir: true,
  }
})

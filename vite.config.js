import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/
  },
  optimizeDeps: {
    esbuild: {
      loader: {
        '.js': 'jsx'
      }
    }
  }
})
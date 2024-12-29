import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
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
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    watch: {
      // Özellikle network disk / Docker / WSL gibi ortamlarda
      usePolling: true,
      interval: 300, // dosya kontrol aralığı (ms)
      awaitWriteFinish: {
        stabilityThreshold: 200, // yazma bitmeden tetikleme gecikmesi
        pollInterval: 100
      }
    },
    hmr: {
      timeout: 30000 // HMR websocket timeout (ms)
    }
  }
})

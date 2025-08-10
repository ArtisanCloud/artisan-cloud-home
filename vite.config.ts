import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 使用环境变量 PORT，否则默认 5173；强制避免使用 3000
    port: Number(process.env.PORT) && Number(process.env.PORT) !== 3000 ? Number(process.env.PORT) : 5173,
    // 当端口被占用时，允许 Vite 自动选择下一个可用端口
    strictPort: false,
    open: true
  },
  build: {
    outDir: 'dist'
  }
})
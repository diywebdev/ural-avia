import { defineConfig } from 'vite'
import path from "path";

export default defineConfig({
  base: 'https://diywebdev.github.io/ural-avia/',
  build: {
    outDir: path.resolve(__dirname, 'docs'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      }
    }
  }
})

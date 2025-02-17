import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from "sass";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg'],
    rollupOptions: {
      input: {
        main: './index.html',
        404: './public/404.html',
      },
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
  plugins: [react()],
  css: {
    preprocessors: {
      scss: {
        implementation: sass,
      }
    }
  }
})

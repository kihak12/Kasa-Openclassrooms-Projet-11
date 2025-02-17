import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from "sass";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessors: {
      scss: {
        implementation: sass,
      }
    }
  }
})

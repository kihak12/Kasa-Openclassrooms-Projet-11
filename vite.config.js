import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from "sass";

// https://vite.dev/config/
export default defineConfig({
  base: '/Kasa-Openclassrooms-Projet-11/',
  plugins: [react()],
  css: {
    preprocessors: {
      scss: {
        implementation: sass,
      }
    }
  }
})

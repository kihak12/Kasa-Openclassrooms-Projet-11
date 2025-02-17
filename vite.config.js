import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from "sass";

// https://vite.dev/config/
export default defineConfig({
  base: '/Kasa-Openclassrooms-Projet-11/',
  build: {
    outDir: 'dist',
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg'],
    rollupOptions: {
      input: {
        main: './index.html',
        404: './public/404.html',
        redirects: './public/_redirects'
      },
      output: {
        assetFileNames: 'assets/[name][extname]' // Structure de sortie
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

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { globalStylesOptions } from './global.styles';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/modules',
      hooks: '/src/hooks',
      pages: '/src/pages',
      shared: '/src/shared',
      // redux: '/src/redux',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: globalStylesOptions,
      },
    },
  },
  base: '/',
});

// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, './src/utils'),
      '@utils/*': path.resolve(__dirname, './src/utils/*'),
      '@components': path.resolve(__dirname, './src/components'),
      '@components/*': path.resolve(__dirname, './src/components/*'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@containers/*': path.resolve(__dirname, './src/containers/*'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@hooks/*': path.resolve(__dirname, './src/hooks/*'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@layouts/*': path.resolve(__dirname, './src/layouts/*'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@theme/*': path.resolve(__dirname, './src/theme/*'),
      '@slices': path.resolve(__dirname, './src/slices'),
      '@slices/*': path.resolve(__dirname, './src/slices/*'),
    }
  },
  plugins: [react()],
});

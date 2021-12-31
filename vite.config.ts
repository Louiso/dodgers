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
      '@utils/*': path.resolve(__dirname, './src/utils/*'),
      '@components/*': path.resolve(__dirname, './src/components/*'),
      '@containers/*': path.resolve(__dirname, './src/containers/*'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@hooks/*': path.resolve(__dirname, './src/hooks/*'),
      '@layouts/*': path.resolve(__dirname, './src/layouts/*'),
      '@theme/*': path.resolve(__dirname, './src/theme/*'),
      '@slices': path.resolve(__dirname, './src/slices'),
      '@slices/*': path.resolve(__dirname, './src/slices/*'),
      '@types/*': path.resolve(__dirname, './src/types/*'),
      '@services/*': path.resolve(__dirname, './src/services/*'),
      '@services': path.resolve(__dirname, './src/services')
    },
  },
  plugins: [react()],
});

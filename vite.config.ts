import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import path from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@utils': path.resolve(__dirname, './src/utils'),
    '@utils/*': path.resolve(__dirname, './src/utils/*'),
    '@components': path.resolve(__dirname, './src/components'),
    '@components/*': path.resolve(__dirname, './src/components/*'),
  },
  plugins: [react()],
});

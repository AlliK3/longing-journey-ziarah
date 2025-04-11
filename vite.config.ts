
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import registrationStoragePlugin from './vite-plugin-registration-storage.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    registrationStoragePlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
});

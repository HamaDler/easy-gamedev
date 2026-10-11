import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || './',
  plugins: [react(), tailwindcss()],
  resolve: { preserveSymlinks: true },
  server: { watch: { ignored: ['**/work/**', '**/examples/**/.godot/**'] } },
  build: { rollupOptions: { output: { manualChunks: { three: ['three'] } } } },
});

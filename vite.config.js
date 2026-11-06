import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset paths make the build work on GitHub Pages project URLs.
export default defineConfig({
  plugins: [react()],
  base: './',
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pandacss from '@pandacss/dev/postcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [pandacss],
    },
  },
});

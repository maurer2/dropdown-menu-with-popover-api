import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pandacss from '@pandacss/dev/postcss';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  css: {
    postcss: {
      plugins: [pandacss],
    },
  },
});

import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import pandacss from '@pandacss/dev/postcss';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { PluginCreator } from 'postcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  css: {
    postcss: {
      plugins: [pandacss as PluginCreator<PluginOption[]>],
    },
  },
});

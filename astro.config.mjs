import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    host: true,
  },
  outDir: './build',

  base: '/devc_edie-homepage/',
  build: {
    assets: 'assets',
  },
});

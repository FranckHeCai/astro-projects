// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: "/space-launch/",
  vite: {
    plugins: [tailwindcss()]
  },
  output: "static",
});
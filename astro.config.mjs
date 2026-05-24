import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://drinkcode.github.io',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});

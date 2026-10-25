import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://neatapartment.org',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/search/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

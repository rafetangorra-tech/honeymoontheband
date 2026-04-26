import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves the site at /<repo-name>/ by default.
// When we cut over to honeymoontheband.com we'll set USE_BASE_PATH=false
// (or just remove the base setting).
const useBasePath = process.env.USE_BASE_PATH !== 'false';

export default defineConfig({
  site: useBasePath
    ? 'https://rafetangorra-tech.github.io'
    : 'https://www.honeymoontheband.com',
  base: useBasePath ? '/honeymoontheband' : '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    responsiveStyles: true,
  },
});

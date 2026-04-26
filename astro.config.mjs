import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Three deploy targets, all driven by env vars set in the GitHub Actions workflow:
//
// 1. Default (no env vars)              → github.io/honeymoontheband (legacy preview)
// 2. USE_BASE_PATH=false + PUBLIC_SITE_URL=https://preview.honeymoontheband.com
//                                       → preview.honeymoontheband.com
// 3. USE_BASE_PATH=false + PUBLIC_SITE_URL=https://www.honeymoontheband.com
//                                       → www.honeymoontheband.com (production cutover)
const useBasePath = process.env.USE_BASE_PATH !== 'false';
const defaultSite = useBasePath
  ? 'https://rafetangorra-tech.github.io'
  : 'https://www.honeymoontheband.com';
const siteUrl = process.env.PUBLIC_SITE_URL || defaultSite;

export default defineConfig({
  site: siteUrl,
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

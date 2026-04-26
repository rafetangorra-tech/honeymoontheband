# Honeymoon the Band

Source for **honeymoontheband.com** — the redesigned site replacing the current Wix one-pager.

Current live site: https://www.honeymoontheband.com/

## Stack

- [Astro 5](https://astro.build) (static site, content-collection driven)
- [Tailwind CSS 4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- TypeScript strict mode
- `@astrojs/sitemap` for `sitemap-index.xml`

## Getting started

```bash
npm install
npm run dev      # http://127.0.0.1:4321
npm run build    # static output in ./dist
npm run preview  # preview built site
```

## Repository layout

```
src/
  pages/                Astro routes (one file per URL)
  layouts/              BaseLayout.astro — shared <head>, header, footer, JSON-LD
  components/           Header, Footer, MemberCard
  data/                 site config, FAQ, song list (TypeScript — single source of truth)
  styles/global.css     Tailwind 4 import + brand tokens
  content.config.ts     Astro content collections (loads /content/bios/*.md)

content/                Markdown source — bios + page copy drafts (editable by non-engineers)
  bios/                 Per-member markdown (frontmatter + body)
  copy/                 Page copy drafts that informed the .astro pages
  song-list.md          Plain-text song list (the runtime list lives in src/data/song-list.ts)

public/                 Static assets served as-is
  img/                  Web-optimized photos (logo, band, members)
  honeymoon-brand-guide.pdf
  robots.txt

assets/                 Original source assets (full-resolution photos, brand guide, logo)

docs/
  CONTENT_PLAN.md       Sitemap, per-page SEO/AEO outline, design decisions
```

## Editing content

- **Bios:** edit `content/bios/<slug>.md`. Frontmatter: `name`, `role`, `slug`, `order`. Markdown body is rendered on `/band/<slug>`.
- **Song list:** edit `src/data/song-list.ts` (the .ts is what renders; `content/song-list.md` is the editorial source).
- **FAQ:** edit `src/data/faq.ts`. The page and the `FAQPage` JSON-LD are both generated from this.
- **Site config:** `src/data/site.ts` (nav, contact email, socials, service areas, configurations).

## SEO / AEO

- Per-page meta title, description, canonical, OG/Twitter tags via `BaseLayout.astro`.
- `MusicGroup` / `Person` / `FAQPage` / `Service` JSON-LD on the relevant pages.
- `robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended.
- Sitemap auto-generated at `/sitemap-index.xml`.

## Deployment

Recommended: Vercel (auto-deploys from `main`). Static output, no server runtime needed.

When ready to cut over from Wix:

1. Connect this repo to Vercel.
2. Verify the Vercel preview matches expectations.
3. Move `honeymoontheband.com` DNS from Wix to Vercel.

## License

Private — all rights reserved.

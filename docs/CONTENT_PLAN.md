# Honeymoon — Content Plan

This is the source of truth for the redesigned **honeymoontheband.com**. The current site (Wix, single-page) will be replaced by the multi-page build described here. Everything in this folder is content-only — no code yet.

---

## 1. Goals

- Replace the current Wix one-pager with a fast, clean, multi-page site.
- Rank for high-intent wedding/private-event queries in NYC, Long Island, and Westchester.
- Be cleanly retrievable by AI search (ChatGPT, Claude, Perplexity, Google AI Overviews) so couples and planners get correct, complete answers when they ask about us.
- Funnel every page toward one action: **email `honeymoonbandbookings@gmail.com`**.

## 2. Audience & search intent

| Audience | Searches like… |
|---|---|
| Couples planning a wedding | "wedding band Long Island", "live wedding band NYC", "best wedding band Westchester", "wedding band song list" |
| Corporate / private event planners | "private event band NYC", "corporate event live band Long Island", "live band for gala" |
| Vendors (planners, venues, photographers) | "[band name]" branded; referral checks |
| AI assistants answering on our behalf | "Who are Honeymoon the band?", "What does Honeymoon play?", "How do I book Honeymoon?" |

## 3. Primary keywords

- wedding band NYC / Long Island / Westchester / Tristate
- live wedding band, live event band, private event band
- corporate event band Long Island
- Honeymoon the band (branded)
- wedding band song list
- Long Island wedding entertainment

## 4. Sitemap

```
/                       Home
/about                  Who Honeymoon is + service area + what we do
/band                   Roster overview, links to each member page
/band/nick-tangorra
/band/alexandra-mendes
/band/marc-lambert
/band/frank-buffolino
/band/pete-averso
/band/rafe-tangorra
/music                  Media — featured IG reels, live clips, audio
/song-list              Full repertoire by genre (key SEO page)
/booking                Booking info, what we offer, inquiry CTA
/faq                    Pricing range, travel, set length, gear, etc. (key AEO page)
```

A `sitemap.xml` and `robots.txt` will be generated at build time. Each page gets unique meta title, meta description, OG image, and JSON-LD structured data.

## 5. Per-page plan

Each page lists: **H1**, **meta title** (≤60 chars), **meta description** (≤155 chars), **sections**, **schema**, and **internal links**.

### `/` Home
- **H1:** Honeymoon — Live Wedding & Event Band, NYC · Long Island · Westchester
- **Meta title:** Honeymoon — Live Wedding & Event Band | NYC, LI, Westchester
- **Meta description:** Honeymoon is a NY Tristate live band built for weddings and private events. High-energy sets, deep song list, professional show.
- **Sections:** Hero (band photo + tagline + booking CTA) → 1-paragraph what we do → "Hear / See us" preview (3 IG reels) → meet the band (6 cards → /band/[member]) → song-list teaser (3 genres → /song-list) → booking CTA.
- **Schema:** `MusicGroup`, `LocalBusiness` (areaServed: NYC, Nassau, Suffolk, Westchester), `WebSite` with `SearchAction`.
- **Internal links:** every section deep-links into its full page.

### `/about`
- **H1:** About Honeymoon
- **Meta title:** About Honeymoon — NY Tristate Wedding & Event Band
- **Meta description:** Honeymoon brings six pro musicians to weddings and private events across NYC, Long Island, and Westchester. Here's who we are and what we do.
- **Sections:** Origin / what makes us different → service area (named towns/counties — strong local SEO) → what an event with us looks like → CTA.
- **Schema:** `MusicGroup` with `member` array, `LocalBusiness`.

### `/band`
- **H1:** The Band
- **Meta title:** Meet the Band — Honeymoon
- **Meta description:** Six musicians, decades of combined stage experience. Meet the lineup behind Honeymoon's live show.
- **Sections:** Group photo → 6 member cards (photo + name + instrument + 1-line teaser) → CTA.
- **Schema:** `MusicGroup` with each `member` as `Person`.

### `/band/[member]`
- **H1:** [Name] — [Instrument], Honeymoon
- **Meta title:** [Name], [Instrument] — Honeymoon
- **Meta description:** [Member-specific 1-liner]
- **Sections:** Headshot → bio (see `bios/`) → notable credits → "Other members" cross-links.
- **Schema:** `Person` with `memberOf` → `MusicGroup`.

### `/music`
- **H1:** Hear & See Honeymoon
- **Meta title:** Live Performance Videos — Honeymoon
- **Meta description:** Watch Honeymoon live. Full-band reels, performance clips, and recent shows.
- **Sections:** Featured IG embeds → "Follow @honeymoon_theband for the latest" → CTA.
- **Note:** Most current media lives on Instagram. Use the IG oEmbed API (or simple iframe embeds) for selected reels. List embed URLs in a content config so non-engineers can swap them.

### `/song-list` *(major SEO page)*
- **H1:** Honeymoon Song List
- **Meta title:** Honeymoon Song List — Wedding & Event Band Repertoire
- **Meta description:** Our full repertoire across pop, rock, Motown, disco, country, Latin, and ceremony ballads. Updated regularly.
- **Sections:** Intro (1 short paragraph) → genre sections → "Don't see a song? Ask." CTA.
- **Schema:** `MusicGroup` with `track` items? Skip — not appropriate for cover repertoire. Use clean semantic `<h2>` / `<ul>` only.
- **Source:** `content/song-list.md`.

### `/booking` *(conversion page)*
- **H1:** Book Honeymoon
- **Meta title:** Book Honeymoon — Wedding & Private Event Band
- **Meta description:** Booking Honeymoon for your NYC, Long Island, or Westchester event. Email honeymoonbandbookings@gmail.com.
- **Sections:** What we offer (configurations, set length, ceremony/cocktail/reception coverage) → typical event flow → service area → email CTA (mailto with prefilled subject).
- **Schema:** `Service` with `provider` → `MusicGroup`.

### `/faq` *(major AEO page)*
- **H1:** Frequently Asked Questions
- **Meta title:** Honeymoon FAQ — Booking, Pricing, Logistics
- **Meta description:** Answers to common questions about booking Honeymoon for weddings and private events.
- **Sections:** Q&A blocks — booking timing, pricing range, travel, ceremony/cocktail coverage, set length, breaks, gear/PA, song requests, learning new songs, attire, cancellations.
- **Schema:** `FAQPage` with each Q&A as `Question` + `Answer`. **This is the single most important page for AEO** — LLMs lift Q&A blocks verbatim.
- **Open:** I'll draft FAQ answers once you confirm pricing range, travel policy, set length, and how far in advance you book.

## 6. SEO / AEO conventions (apply to every page)

- One `<h1>` per page; logical `<h2>` / `<h3>` hierarchy.
- Meta title ≤60 chars, meta description ≤155 chars, both unique per page.
- Open Graph + Twitter card meta on every page; default OG image = band photo with logo.
- Canonical URL on every page.
- Sitemap.xml auto-generated; submit to Google Search Console + Bing Webmaster.
- robots.txt allows all; explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) — we *want* AI engines to read us.
- JSON-LD per page as listed above.
- Image alt text for every photo (member name, instrument, context).
- All headshots served as WebP + properly sized; LCP image preloaded.
- Internal linking: every member page links to the other 5; song list links to /booking; FAQ links to /booking.
- Page weight target: <200 KB on initial load (excluding hero image); Lighthouse 95+ across the board.

## 7. Content principles

- **Plain, factual, scannable.** Short paragraphs (≤3 sentences). Bullets where they help.
- **Local everywhere.** Mention NYC / Long Island / Westchester / Tristate naturally — not stuffed.
- **Consistent naming.** Always "Honeymoon" (not "Honeymoon Band" or "The Honeymoon Band") in body copy. "Honeymoon the Band" reserved for branded SEO contexts (page titles, schema `name`, `alternateName`).
- **One CTA.** Email `honeymoonbandbookings@gmail.com`. No contact form for v1.

## 8. Configurations offered

- **Standard 6-piece** — Honeymoon's core lineup: 2 lead vocals, guitar, keys, bass, drums.
- **Extended (with horns)** — 6-piece plus added horn players for a fuller sound.
- **Band + DJ hybrid** — live band performance integrated with a DJ for seamless transitions and extended dance sets.

Pricing for all configurations is provided on request via `honeymoonbandbookings@gmail.com`.

## 9. Tech stack (committed)

- **Astro + Tailwind CSS.** Content-first static site, ships zero JS by default, perfect for an SEO-driven music site. Member pages, song list, and FAQ all generated from markdown in `content/` so non-engineers can edit.
- **Hosting:** Vercel (free tier; auto-deploys from `main`). Alternative: Netlify.
- **Image pipeline:** Astro's built-in `<Image />` for responsive WebP + AVIF; full-size source images stay in `assets/`.
- **Forms:** none for v1 — single mailto CTA.

## 10. Resolved decisions (formerly open questions)

- ✅ **Roster:** Nick (new lead vocals, listed first), Alex (lead vocals), Marc, Frank, Pete, Rafe. Emily on the LIU setlist was a fill-in.
- ✅ **Nick's bio framing:** brother angle + Nick Tangorra Band / EPIC Records / Rock Out Autism history is in. Tasteful, not heavy.
- ✅ **Pricing:** "available on request" — page CTAs route to email.
- ✅ **Service area:** NYC, Long Island, Westchester. Travel beyond available on request.
- ✅ **Configurations:** see §8.
- ✅ **Stack:** Astro + Tailwind, Vercel.

## 11. Still to decide (not blocking copy drafts)

- **EPK** — separate `/epk` route or downloadable PDF? Deferred until v1 is shipped.
- **Domain & DNS cutover** from Wix — plan closer to launch.
- **FAQ specifics that aren't on the live site yet** — set length, break structure, advance booking window, PA/sound provided. I'll draft sensible defaults in `faq.md` and flag them as `<<CONFIRM>>` for your sign-off.

## 12. What's drafted in this folder

- `CONTENT_PLAN.md` — this file
- `bios/` — per-member bio drafts (SEO-rewritten)
- `song-list.md` — clean unified repertoire from both Google Docs
- `copy/home.md`, `copy/about.md`, `copy/booking.md`, `copy/faq.md` — page copy

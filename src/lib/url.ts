/**
 * Prepends Astro's configured base path to an internal site path.
 * Use for every <a href="..."> and <img src="..."> that points at this site.
 *
 * Pass a path that begins with '/'. External URLs (mailto:, https://) pass through.
 */
const rawBase = import.meta.env.BASE_URL;
const base = rawBase === '/' ? '' : rawBase.replace(/\/+$/, '');

export const url = (path: string): string => {
  if (!path.startsWith('/')) return path;
  if (path === '/') return base ? `${base}/` : '/';
  return `${base}${path}`;
};

/** Absolute URL form (with origin) for canonical / OG tags. */
export const absoluteUrl = (path: string, origin: string): string => {
  return new URL(url(path), origin).toString();
};

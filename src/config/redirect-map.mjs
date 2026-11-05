import { SLUG_REDIRECTS } from './slug-redirects.mjs';

export const CANONICAL_ORIGIN = 'https://r6hacks.org';

/** Static 301 sources → final path (trailing slash on targets). */
const REDIRECT_ENTRIES = [
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/r6/'],
  ['/cheats/', '/products/r6/'],
  ['/cheats/lite', '/products/r6/lite/'],
  ['/cheats/lite/', '/products/r6/lite/'],
  ['/cheats/pro', '/products/r6/pro/'],
  ['/cheats/pro/', '/products/r6/pro/'],
  ['/cheats/elite', '/products/r6/elite/'],
  ['/cheats/elite/', '/products/r6/elite/'],
  ['/cheats/compare', '/blog/r6-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/r6-lite-vs-pro/'],
  ['/hacks', '/products/r6/'],
  ['/hacks/', '/products/r6/'],
  ['/hacks/lite', '/products/r6/lite/'],
  ['/hacks/lite/', '/products/r6/lite/'],
  ['/hacks/pro', '/products/r6/pro/'],
  ['/hacks/pro/', '/products/r6/pro/'],
  ['/hacks/elite', '/products/r6/elite/'],
  ['/hacks/elite/', '/products/r6/elite/'],
  ['/hacks/compare', '/blog/r6-lite-vs-pro/'],
  ['/hacks/compare/', '/blog/r6-lite-vs-pro/'],
  ['/products/r6/utilities', '/products/r6/utilities/'],
  ['/products/r6-cheats', '/products/r6/'],
  ['/products/r6-cheats/', '/products/r6/'],
  ['/products/r6-cheats/lite', '/products/r6/lite/'],
  ['/products/r6-cheats/lite/', '/products/r6/lite/'],
  ['/products/r6-cheats/pro', '/products/r6/pro/'],
  ['/products/r6-cheats/pro/', '/products/r6/pro/'],
  ['/products/r6-cheats/elite', '/products/r6/elite/'],
  ['/products/r6-cheats/elite/', '/products/r6/elite/'],
  ['/products/r6-cheats/hwid-spoofer', '/products/r6/hwid-spoofer/'],
  ['/products/r6-cheats/hwid-spoofer/', '/products/r6/hwid-spoofer/'],
  ['/products/r6-cheats/ugc', '/products/r6/ugc/'],
  ['/products/r6-cheats/ugc/', '/products/r6/ugc/'],
  ['/products/r6-cheats/unlock-all', '/products/r6/unlock-all/'],
  ['/products/r6-cheats/unlock-all/', '/products/r6/unlock-all/'],
  ['/products/r6-cheats/utilities', '/products/r6/utilities/'],
  ['/products/r6-cheats/utilities/', '/products/r6/utilities/'],
  ['/products/r6-hacks', '/products/r6/'],
  ['/products/r6-hacks/', '/products/r6/'],
  ['/products/r6-hacks/pro', '/products/r6/pro/'],
  ['/products/r6-hacks/pro/', '/products/r6/pro/'],
  ['/products/r6-hacks/lite', '/products/r6/lite/'],
  ['/products/r6-hacks/lite/', '/products/r6/lite/'],
  ['/products/r6-hacks/elite', '/products/r6/elite/'],
  ['/products/r6-hacks/elite/', '/products/r6/elite/'],
  ['/products/r6/account-recovery', '/products/r6/ugc/'],
  ['/products/r6/account-recovery/', '/products/r6/ugc/'],
  ['/products/dota-2-hacks', '/products/r6/'],
  ['/products/dota-2-hacks/', '/products/r6/'],
  ['/products/dota-2-hacks/elite', '/products/r6/elite/'],
  ['/products/dota-2-hacks/elite/', '/products/r6/elite/'],
  ['/products/dota-2-hacks/utilities', '/products/r6/utilities/'],
  ['/products/dota-2-hacks/utilities/', '/products/r6/utilities/'],
  ...Object.entries(SLUG_REDIRECTS),
];

export const REDIRECT_301 = new Map(REDIRECT_ENTRIES);

export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

function normalizePathname(pathname) {
  if (!pathname || pathname === '/') return '/';
  if (TRAILING_SLASH_SKIP.test(pathname)) return pathname;
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/** Follow 301 map to the final pathname (or null if no redirect). */
export function resolve301Redirect(pathname) {
  const start = pathname;
  let target = REDIRECT_301.get(pathname) ?? REDIRECT_301.get(normalizePathname(pathname));
  if (!target || target === start) return null;

  let hops = 0;
  while (hops < 12) {
    const next = REDIRECT_301.get(target);
    if (!next || next === target) break;
    target = next;
    hops += 1;
  }
  return target;
}

/** Trailing-slash normalization or 301 target (Node static server). */
export function resolvePathRedirect(pathname) {
  const direct = resolve301Redirect(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}

/** True when request should 301 to apex HTTPS r6hacks.org (same path/query). */
export function canonicalHostRedirectUrl(url) {
  const host = url.hostname.toLowerCase();
  const needsHttps = url.protocol === 'http:' && (host === 'r6hacks.org' || host === 'www.r6hacks.org');
  const needsApex = host === 'www.r6hacks.org';
  if (!needsHttps && !needsApex) return null;

  const target = new URL(url);
  target.protocol = 'https:';
  target.hostname = 'r6hacks.org';
  return target.toString();
}

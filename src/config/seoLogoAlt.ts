import { normalizeSeoPath } from './pageSeo';

/** Footer logo alt text — short, descriptive (not keyword-stuffed). */
const LOGO_ALT_BY_PATH: Record<string, string> = {
  '/products/r6/': 'Rainbow Six Siege – R6 Hacks shop logo',
  '/about/': 'R6 Hacks logo',
  '/blog/': 'Rainbow Six Siege guides – logo',
  '/faq/': 'Faq – logo',
  '/forum/': 'Forum – logo',
  '/privacy/': 'Privacy – logo',
  '/support/': 'Support – logo',
  '/terms/': 'Terms – logo',
  '/products/r6/utilities/': 'Utilities – R6 Hacks logo',
  '/r6-hacks/': 'R6 Hacks logo',
};

export function footerLogoAltForPath(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  return LOGO_ALT_BY_PATH[path] ?? 'R6 Hacks logo';
}

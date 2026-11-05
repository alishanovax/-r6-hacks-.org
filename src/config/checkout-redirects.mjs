/** Primary Zadeyo affiliate checkout (go link + product path). */
export const R6_CHECKOUT_URL =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Frainbow-six-siege';

export const CHECKOUT_URLS = {
  r6: R6_CHECKOUT_URL,
  skinChanger: R6_CHECKOUT_URL,
  hwidSpoofer: R6_CHECKOUT_URL,
  ugc: R6_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
/** /go/r6/ is the SSR checkout bridge (no 302). Other /go/* paths redirect out. */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}

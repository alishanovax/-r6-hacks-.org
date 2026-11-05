import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';
import { resolve301Redirect, resolvePathRedirect } from './config/redirect-map.mjs';

export const onRequest = defineMiddleware((context, next) => {
  const pathname = new URL(context.request.url).pathname;

  const checkout = resolveCheckoutPathRedirect(pathname);
  if (checkout) {
    return context.redirect(checkout, 302);
  }

  const permanent = resolve301Redirect(pathname) ?? resolvePathRedirect(pathname);
  if (permanent && permanent !== pathname && permanent !== `${pathname}/`) {
    return context.redirect(permanent, 301);
  }

  return next();
});

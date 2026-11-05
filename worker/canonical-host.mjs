import {
  CANONICAL_ORIGIN,
  canonicalHostRedirectUrl,
  resolve301Redirect,
} from '../src/config/redirect-map.mjs';

function trailingSlashPath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/** Force production canonical in HTML even on Workers preview hosts. */
function rewriteHtmlSeoUrls(html, pathname) {
  const canonical = `${CANONICAL_ORIGIN}${trailingSlashPath(pathname)}`;
  return html
    .replace(/<link rel="canonical" href="[^"]*"/g, `<link rel="canonical" href="${canonical}"`)
    .replace(
      /<link rel="alternate" hreflang="(en|en-US|x-default)" href="[^"]*"/g,
      (_match, lang) => `<link rel="alternate" hreflang="${lang}" href="${canonical}"`,
    )
    .replace(/<meta property="og:url" content="[^"]*"/g, `<meta property="og:url" content="${canonical}"`);
}

function isSitemapOrFeedPath(pathname) {
  return pathname === '/rss.xml' || /^\/sitemap(-[\w-]+)?\.xml$/i.test(pathname);
}

function hasFileExtension(pathname) {
  return /\.[a-z0-9]+$/i.test(pathname);
}

function indexHtmlCandidates(pathname) {
  if (hasFileExtension(pathname)) return [];
  if (!pathname || pathname === '/') return ['/index.html'];
  if (pathname.endsWith('/')) return [`${pathname}index.html`];
  return [`${pathname}/index.html`, `${pathname}.html`];
}

async function fetchAsset(request, env) {
  let response = await env.ASSETS.fetch(request);
  if (response.status === 200) return response;

  const { pathname } = new URL(request.url);
  for (const candidate of indexHtmlCandidates(pathname)) {
    const indexUrl = new URL(request.url);
    indexUrl.pathname = candidate;
    const indexResponse = await env.ASSETS.fetch(new Request(indexUrl, request));
    if (indexResponse.status === 200) return indexResponse;
  }
  return response;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const hostTarget = canonicalHostRedirectUrl(url);
    if (hostTarget) {
      return Response.redirect(hostTarget, 301);
    }

    const pathTarget = resolve301Redirect(url.pathname);
    if (pathTarget) {
      return Response.redirect(`${CANONICAL_ORIGIN}${pathTarget}`, 301);
    }

    const response = await fetchAsset(request, env);

    if (response.status === 200 && isSitemapOrFeedPath(url.pathname)) {
      const headers = new Headers(response.headers);
      headers.set(
        'content-type',
        url.pathname.endsWith('.xml') ? 'application/xml; charset=utf-8' : 'application/rss+xml; charset=utf-8',
      );
      headers.delete('content-length');
      return new Response(response.body, { status: response.status, headers });
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (response.status !== 200 || !contentType.includes('text/html')) {
      return response;
    }

    const html = await response.text();
    const body = rewriteHtmlSeoUrls(html, url.pathname);
    const headers = new Headers(response.headers);
    headers.delete('content-length');
    return new Response(body, { status: response.status, headers });
  },
};

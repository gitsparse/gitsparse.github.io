// GitHub Pages has no server-side rewrites, so a direct load or refresh of a
// client-side route (e.g. /owner/repo/tree/branch/path) 404s. This redirects to
// index.html with the real path packed into a query string; index.html unpacks it back
// into history (via spa-decode.js) before the router boots. See
// https://github.com/rafgraph/spa-github-pages
var l = window.location;
l.replace(
  l.protocol +
    '//' +
    l.hostname +
    (l.port ? ':' + l.port : '') +
    '/?/' +
    l.pathname.slice(1).replace(/&/g, '~and~') +
    (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
    l.hash
);

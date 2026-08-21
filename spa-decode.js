// Un-packs the path that public/spa-redirect.js sent here with, restoring the real URL
// via history.replaceState before the router boots. See
// https://github.com/rafgraph/spa-github-pages
(function (l) {
  if (l.search[1] === '/') {
    var decoded = l.search
      .slice(1)
      .split('&')
      .map(function (s) {
        return s.replace(/~and~/g, '&');
      })
      .join('?');
    window.history.replaceState(null, '', l.pathname.slice(0, -1) + decoded + l.hash);
  }
})(window.location);

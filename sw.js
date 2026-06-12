/* MCLAUGHLIN '26 service worker — cache-first so The Show plays offline */
const CACHE = 'mcl26-v1';
const CORE = ['./', 'index.html', 'player.jpeg', 'icon.svg', 'manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => {
      if (hit) return hit;
      return fetch(e.request).then(res => {
        // cache successful same-origin + font responses for offline replay
        const ok = res.ok && (e.request.url.startsWith(self.location.origin) ||
                              e.request.url.includes('fonts.g'));
        if (ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy))
            .catch(err => console.error('sw cache put failed:', err));
        }
        return res;
      });
    })
  );
});

/* MCLAUGHLIN '26 service worker — network-first pages, cache-first assets */
const CACHE = 'mcl26-v2';
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

  // pages: network-first so updates always land; cache is the offline fallback
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy))
            .catch(err => console.error('sw cache put failed:', err));
          return res;
        })
        .catch(() => caches.match(e.request).then(hit => hit || caches.match('index.html')))
    );
    return;
  }

  // assets: cache-first, populate on miss
  e.respondWith(
    caches.match(e.request).then(hit => {
      if (hit) return hit;
      return fetch(e.request).then(res => {
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

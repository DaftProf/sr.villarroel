// Service worker : rend le site installable comme une appli.
// Il va toujours chercher la dernière version du site (pas de cache),
// pour que l'appli affiche tout de suite les nouveautés. v2
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(fetch(req, { cache: 'no-cache' }).catch(() => fetch(req)));
});

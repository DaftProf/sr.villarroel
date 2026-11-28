// Service worker minimal : rend le site installable comme une appli.
// Il ne garde rien en cache, pour que les élèves voient toujours la dernière version.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

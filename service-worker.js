const CACHE_NAME = "texniko-grafeio-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/logo.png",
  "/contact.vcf"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

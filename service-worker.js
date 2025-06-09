self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("eng-app-v1").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/script.js",
        "/data.json",
        "/manifest.json",
        "/icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});

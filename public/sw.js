const CACHE_NAME = "clinica-cache-v1";
const urlsToCache = ["/", "/index.html", "/main.js", "/index.css"];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

//ESTRATEGIA DE CACHE STALE-WHILE-REVALIDATE
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(event.request).then(response => {
                const fetchPromise =
                    fetch(event.request).then(networkResponse => {
                        cache.put(event.request,
                            networkResponse.clone());
                        return networkResponse;
                    });
                return response || fetchPromise;
            });
        })
    );
});
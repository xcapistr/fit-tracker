self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('fit-tracker')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/script.js',
          '/chart.js',
          '/img/plus.svg',
          '/apexcharts.min.js'
        ])
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});
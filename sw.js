self.addEventListener('install', (event) => {
  console.log('Service Worker installiert');
});

self.addEventListener('fetch', (event) => {
  // Erforderlich für PWA-Kriterien
  event.respondWith(fetch(event.request));
});

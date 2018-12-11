/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// importScripts(
//   "precache-manifest.6637e0280e2a2af0f804f998fc837bd3.js"
// );

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings()

workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  url: "./js/bundle.js",
  url: "https://unpkg.com/react@16/umd/react.production.min.js",
   url: "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js",
   url: "https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.min.js",
   url: "https://cdnjs.cloudflare.com/ajax/libs/react-router/4.3.1/react-router.min.js"
})

// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       return cache.addAll(
//         [
//           '/css/bootstrap.css',
//           '/css/main.css',
//           '/js/bootstrap.min.js',
//           '/js/jquery.min.js',
//           '/offline.html'
//         ]
//       );
//     })
//   );
// })

const bgSyncPlugin = new workbox.backgroundSync.Plugin('myQueueName', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

workbox.routing.registerRoute(
  /\/api\/.*\/*.json/,
  workbox.strategies.networkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
)

workbox.routing.registerRoute(
  new RegExp('/api/v1'),
  workbox.strategies.cacheFirst({
    cacheName: 'API',
    plugins: [
      new workbox.expiration.Plugin({
        // Only cache requests for a week
        // 7 * 24 * 60 * 60,

        maxAgeSeconds: 30,
        // Only cache 10 requests.
        maxEntries: 10,
      }),
    ]
  })
)

workbox.routing.registerRoute(
  new RegExp('/statistics'),
  workbox.strategies.cacheFirst({
    cacheName: 'API',
    plugins: [
      new workbox.expiration.Plugin({
        // Only cache requests for a week
        // 7 * 24 * 60 * 60,

        maxAgeSeconds: 30,
        // Only cache 10 requests.
        maxEntries: 10,
      }),
    ]
  })
)

// self.addEventListener('fetch', (event) => {
//   if (event.request.url === '/login') {
//     const staleWhileRevalidate = new workbox.strategies.StaleWhileRevalidate();
//     event.respondWith(staleWhileRevalidate.handle({event}))
//   }
// })
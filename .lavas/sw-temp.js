
        importScripts('/static/workbox-v3.6.2/workbox-sw.js');
        workbox.setConfig({
            modulePathPrefix: '/static/workbox-v3.6.2/'
        });
    /**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author SamWong(200988743@qq.com)
 */

/* globals workbox */
workbox.core.setCacheNameDetails({
    prefix: 'lavas-cache',
    suffix: 'v1',
    precache: 'install-time',
    runtime: 'run-time',
    googleAnalytics: 'ga'
});
workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

/**
 * example runningCache with api
 */
// workbox.routing.registerRoute(/^https:\/\/lavas\.baidu\.com\/some\/api/,
//     workbox.strategies.networkFirst());
workbox.routing.registerRoute(
    'https://xapp.zone/api/(.*)',
    new workbox.strategies.CacheFirst({
        networkTimeoutSeconds: 3
    })
);
workbox.routing.registerRoute(
    /.*\.(?:png|jpg|jpeg|svg|gif)/g,
    new workbox.strategies.CacheFirst({
        cacheName: 'my-image-cache'
    })
);

/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
// workbox.routing.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
//     workbox.strategies.cacheFirst({
//         cacheName: 'lavas-cache-images',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxEntries: 100,
//                 maxAgeSeconds: 7 * 24 * 60 * 60
//             }),
//             new workbox.cacheableResponse.Plugin({
//                 statuses: [0, 200]
//             })
//         ]
//     })
// );
workbox.routing.registerNavigationRoute('/index.html');
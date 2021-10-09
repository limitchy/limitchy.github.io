const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5dfb7c520e5fe1291c49e691bdd92f01","url":"./2021/10/06/hello/index.html"},{"revision":"96434535239522dba5852986193e9451","url":"./404.html"},{"revision":"039197a6d04383851aa385f4d3cf4049","url":"./about/index.html"},{"revision":"72848fbcf8c74b3090d8dd3bc87e0671","url":"./archives/2021/10/index.html"},{"revision":"afb90f77987981a693ec4b8e8662f8bc","url":"./archives/2021/index.html"},{"revision":"229872b26d594e2827633ddbae549d18","url":"./archives/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"4ee911556c39cddab4dedb679b25242a","url":"./categories/index.html"},{"revision":"605addb8550bc71ca318b6d87a6da05f","url":"./css/custom.css"},{"revision":"dc6bd068e644f0ca98b0e7e88e46c8c6","url":"./css/icon.css"},{"revision":"c52454c1e1dceac7882e03d9a2954910","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"45ec57115a63e3f97026a8b50baa2cf2","url":"./img/siteicon/browserconfig.xml"},{"revision":"39e5a7ff3488ddfb6d2d238495e90e35","url":"./img/siteicon/README.html"},{"revision":"1a7eddfefbe5fc9c0ba388412a4c03c0","url":"./index.html"},{"revision":"e5fe0345851bd9cd49e8033de4e9ff59","url":"./js/diytitle.js"},{"revision":"240e062def7897dd4c03a12bf07fdc65","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"33b3c0e197c029d5b198059220bbd5ab","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"12cef07c2e9bc8841a5380df4fd342f5","url":"./js/utils.js"},{"revision":"ac1de2e42e2582a74d12b92d56db4e68","url":"./link/index.html"},{"revision":"870ebf81f1b5c902e9441f5bb17ef7a2","url":"./manifest.json"},{"revision":"eaf04fe77d515358be73ccb3da8e173c","url":"./music/index.html"},{"revision":"a8006f2cb1e647483ac64db4256a1e37","url":"./service-worker.js"},{"revision":"fa934c6ac5ef944e08811508f9e5e34b","url":"./tags/index.html"},{"revision":"fc68220561c1cd23e40448f8c17a442a","url":"./tags/test/index.html"},{"revision":"cf6afcf51404312e3dcc06709437e3e7","url":"./workbox-543be79b.js"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();
// 可选内容 start 都选可能造成缓存过多 酌情保留。
// 图片资源
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 字体文件
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 谷歌字体
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// jsdelivr的CDN资源
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);
// 可选内容 end 都选可能造成缓存过多 酌情保留。
workbox.googleAnalytics.initialize();
const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"bca857f129231adf31d43e46175cf6ed","url":"./2021/10/06/hello/index.html"},{"revision":"ab1a80a6cd76ad3519f4438a9480aa55","url":"./404.html"},{"revision":"8cd52f3466ea8e0eb19e6c2d896386ed","url":"./about/index.html"},{"revision":"2f55df03c664b94c9c4fd53ae20f6f1d","url":"./archives/2021/10/index.html"},{"revision":"605e8c7cabd3bfe827a03d4f11a716fd","url":"./archives/2021/index.html"},{"revision":"76a0611a330973178f3745a946e3ba18","url":"./archives/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"a57729082bc9bf980cc33fccfafb5972","url":"./categories/index.html"},{"revision":"605addb8550bc71ca318b6d87a6da05f","url":"./css/custom.css"},{"revision":"dc6bd068e644f0ca98b0e7e88e46c8c6","url":"./css/icon.css"},{"revision":"c52454c1e1dceac7882e03d9a2954910","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"45ec57115a63e3f97026a8b50baa2cf2","url":"./img/siteicon/browserconfig.xml"},{"revision":"39e5a7ff3488ddfb6d2d238495e90e35","url":"./img/siteicon/README.html"},{"revision":"4874677f95d23ea90a49d9ee1f3bbcea","url":"./index.html"},{"revision":"e5fe0345851bd9cd49e8033de4e9ff59","url":"./js/diytitle.js"},{"revision":"240e062def7897dd4c03a12bf07fdc65","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"33b3c0e197c029d5b198059220bbd5ab","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"12cef07c2e9bc8841a5380df4fd342f5","url":"./js/utils.js"},{"revision":"4e9c3b0623f4ddc01e3dc6e875e0e1e5","url":"./link/index.html"},{"revision":"870ebf81f1b5c902e9441f5bb17ef7a2","url":"./manifest.json"},{"revision":"e3bd037603704ae0517ca25a05df8c8c","url":"./service-worker.js"},{"revision":"854bb2ac5a6955b16a358fea2d797ebd","url":"./tags/index.html"},{"revision":"3051d6961a3e58f373090a5e0c060235","url":"./tags/test/index.html"},{"revision":"cf6afcf51404312e3dcc06709437e3e7","url":"./workbox-543be79b.js"}],{
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
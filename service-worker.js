if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise((async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},i=(i,c)=>{Promise.all(i.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(i)};self.define=(i,r,s)=>{c[i]||(c[i]=Promise.resolve().then((()=>{let c={};const d={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return c;case"module":return d;default:return e(i)}}))).then((e=>{const i=s(...e);return c.default||(c.default=i),c}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/10/06/hello/index.html",revision:"5dfb7c520e5fe1291c49e691bdd92f01"},{url:"404.html",revision:"96434535239522dba5852986193e9451"},{url:"about/index.html",revision:"039197a6d04383851aa385f4d3cf4049"},{url:"archives/2021/10/index.html",revision:"72848fbcf8c74b3090d8dd3bc87e0671"},{url:"archives/2021/index.html",revision:"afb90f77987981a693ec4b8e8662f8bc"},{url:"archives/index.html",revision:"229872b26d594e2827633ddbae549d18"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"4ee911556c39cddab4dedb679b25242a"},{url:"css/custom.css",revision:"605addb8550bc71ca318b6d87a6da05f"},{url:"css/icon.css",revision:"dc6bd068e644f0ca98b0e7e88e46c8c6"},{url:"css/index.css",revision:"c52454c1e1dceac7882e03d9a2954910"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/backgroud.jpg",revision:"e347d966bc2a6cffe666ce014745e5fe"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/siteicon/android-chrome-144x144.png",revision:"ec97dc011a4f932ab409c982f3fea369"},{url:"img/siteicon/android-chrome-192x192.png",revision:"88b82071175cff3e79ac5052f65949e8"},{url:"img/siteicon/android-chrome-256x256.png",revision:"82402df1fbbfabd996ae7421729b5139"},{url:"img/siteicon/android-chrome-36x36.png",revision:"76c2d12e67ed4b9a7e51c64b83825665"},{url:"img/siteicon/android-chrome-384x384.png",revision:"ab8e2c50aee43fa827f25cc87c5f573c"},{url:"img/siteicon/android-chrome-48x48.png",revision:"63cf48e7d1f3478902fef3fe886bdc9d"},{url:"img/siteicon/android-chrome-512x512.png",revision:"8a1f2a808905355a37d7df11ac2850d8"},{url:"img/siteicon/android-chrome-72x72.png",revision:"31b7507b17283a468e42a3ecb75f1925"},{url:"img/siteicon/android-chrome-96x96.png",revision:"f87d33c3d9044f3c18d2c8cb21493f43"},{url:"img/siteicon/apple-touch-icon.png",revision:"35397406df941da92b367fdefa7be778"},{url:"img/siteicon/favicon-16x16.png",revision:"76d3ce182bb437f6c2e0e217b5000cc5"},{url:"img/siteicon/favicon-32x32.png",revision:"4877e2943712b04089eb0f2eb249fff3"},{url:"img/siteicon/mstile-150x150.png",revision:"f462ca9c7d94e25ddef4713ed41c9abe"},{url:"img/siteicon/README.html",revision:"39e5a7ff3488ddfb6d2d238495e90e35"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"e2a6f23f92583fc27da37d1dce02e1c0"},{url:"index.html",revision:"7193b22c14d9985b919fce5b9ba3e030"},{url:"js/diytitle.js",revision:"e5fe0345851bd9cd49e8033de4e9ff59"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"ac1de2e42e2582a74d12b92d56db4e68"},{url:"music/index.html",revision:"eaf04fe77d515358be73ccb3da8e173c"},{url:"tags/index.html",revision:"fa934c6ac5ef944e08811508f9e5e34b"},{url:"tags/test/index.html",revision:"fc68220561c1cd23e40448f8c17a442a"}],{})}));
//# sourceMappingURL=service-worker.js.map

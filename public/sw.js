if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return n[e]||(a=new Promise((async a=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},a=(a,n)=>{Promise.all(a.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(a)};self.define=(a,i,s)=>{n[a]||(n[a]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return n;case"module":return c;default:return e(a)}}))).then((e=>{const a=s(...e);return n.default||(n.default=a),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/OneSignalSDKUpdaterWorker.js",revision:"ebb63ca15bba16b550232b0b0f66c726"},{url:"/OneSignalSDKWorker.js",revision:"ebb63ca15bba16b550232b0b0f66c726"},{url:"/_next/static/9hJISHK_RwrY_a9_7YL8E/_buildManifest.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/9hJISHK_RwrY_a9_7YL8E/_ssgManifest.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/1484b9de.11f094254528fc27c08b.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/743.effcca27ba3e2cc0ec29.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/786-774bf137186e09ebdcb1.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/965-9653f415dcbe048eaa0f.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/main-22b8da49a1a363fbd457.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/pages/404-3fea9a0f46d0e02e9e88.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/pages/_app-855c326946e10acad017.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/pages/about-1129c1ab1853e5c31971.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/pages/blog-63ccadd4aa1dd3f1bc80.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/pages/index-3cde6e12deb8928d9a1a.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-267cb7f63e250aaa6cc7.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/pages/projects-a102cd78734425f5de0c.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/_next/static/chunks/webpack-07dbfd0b262e2a8644bb.js",revision:"9hJISHK_RwrY_a9_7YL8E"},{url:"/favicon/android-icon-144x144.png",revision:"7b08978eb53ad57ecec0fb40ad9e4737"},{url:"/favicon/android-icon-192x192.png",revision:"c5c1a2c3b65852ac88ade5f55903d82f"},{url:"/favicon/android-icon-36x36.png",revision:"b454e96123bbb8f17b74dfafd99bbb06"},{url:"/favicon/android-icon-48x48.png",revision:"f9940e4420d221c57e31a53ba761b2cf"},{url:"/favicon/android-icon-72x72.png",revision:"457ba895ce99bf62a35504eb1e309a97"},{url:"/favicon/android-icon-96x96.png",revision:"74042ca4639ea5e9806b7866ce3ac913"},{url:"/favicon/apple-icon-114x114.png",revision:"022aa8b9791030279d905a3cce3f3e40"},{url:"/favicon/apple-icon-120x120.png",revision:"75d96a7960fc2ba370024a62f58d737c"},{url:"/favicon/apple-icon-144x144.png",revision:"7b08978eb53ad57ecec0fb40ad9e4737"},{url:"/favicon/apple-icon-152x152.png",revision:"71aabaf5f9e2911843be159cb08d3a9e"},{url:"/favicon/apple-icon-180x180.png",revision:"faf84214d797e204c218982edb6f5d5c"},{url:"/favicon/apple-icon-57x57.png",revision:"92b631845b97e61ff37f7b8f5621d9aa"},{url:"/favicon/apple-icon-60x60.png",revision:"d25ae676529e9fa00f5cb94cd49dcb79"},{url:"/favicon/apple-icon-72x72.png",revision:"44f61289afdcb5500f4c13cdf1ab74d2"},{url:"/favicon/apple-icon-76x76.png",revision:"2f18908efe0476d3d4e59671341db68c"},{url:"/favicon/apple-icon-precomposed.png",revision:"4ad89db4abd8cc57d806d79b93af5fd1"},{url:"/favicon/apple-icon.png",revision:"4ad89db4abd8cc57d806d79b93af5fd1"},{url:"/favicon/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon/favicon-16x16.png",revision:"7b3f6918b6086d66103619698474d337"},{url:"/favicon/favicon-32x32.png",revision:"c46c4cb757b70e359238b166033d52cd"},{url:"/favicon/favicon-96x96.png",revision:"74042ca4639ea5e9806b7866ce3ac913"},{url:"/favicon/favicon.ico",revision:"7089590234d85325cc3f30d7b58c42a8"},{url:"/favicon/ms-icon-144x144.png",revision:"7b08978eb53ad57ecec0fb40ad9e4737"},{url:"/favicon/ms-icon-150x150.png",revision:"8eb48f7535ace1416bf88650e7ed8d92"},{url:"/favicon/ms-icon-310x310.png",revision:"7fa8362308ee60cd805d33742432d638"},{url:"/favicon/ms-icon-70x70.png",revision:"128546c1ed34b15adcb31b7e200ecba3"},{url:"/icons/7rWChT.jpg",revision:"c12b04095747b20e2fe11798905af028"},{url:"/icons/folder.svg",revision:"132ff07a983ff0169860a5771f3b0782"},{url:"/icons/github.svg",revision:"c1b81219ccec44aca7fff117a374bb59"},{url:"/icons/img-about.jpg",revision:"03011ccf986917626ca7961581891109"},{url:"/icons/instagram.svg",revision:"4bebb4a8516403f77dfeaea8e92a6447"},{url:"/icons/linkedin.svg",revision:"debc02d3ce083a54ba116d31be17c122"},{url:"/icons/men.svg",revision:"bdd64c32c73b850add593f6d70a24580"},{url:"/icons/test.png",revision:"497b5d595b90df71cbad2a3de84a812c"},{url:"/icons/tiktok/default.svg",revision:"c4eaf93ed1e52b492036e38766e46131"},{url:"/icons/tiktok/facebook.svg",revision:"f5c5986018c22f7e1b419ef771b88d70"},{url:"/icons/tiktok/github.svg",revision:"a875a10d9971c428130780d35a92f8a2"},{url:"/icons/tiktok/instagram.svg",revision:"2acee6d6d5037ab32cf2613d54f33a50"},{url:"/icons/tiktok/tiktok.svg",revision:"71a6fd5e96e6274cfac38b83d1708cab"},{url:"/icons/tiktok/twitch.svg",revision:"46d6742627062a8dbcf47b33dbf24017"},{url:"/icons/twitter.svg",revision:"dfae5d6ac606c9e9dac069b57d604602"},{url:"/icons/wool.svg",revision:"881a9865b0f65d0736f0c0e69814cc74"},{url:"/manifest.json",revision:"885e879674a720ad005510cdf0d19964"},{url:"/manifest/icon-192x192.png",revision:"0a6b036f0687a069e1bb8c05f57d5c93"},{url:"/manifest/icon-512x512.png",revision:"99a59a59dda3eb87454ba14fbdcf5028"},{url:"/notfound.png",revision:"c82bdaaaade2f8180385f4f46d8af84a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

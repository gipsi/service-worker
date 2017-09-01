‘use strict’;
importScripts(‘sw-toolbox.js’); toolbox.precache([“index.html”,”css/style.css”,"manifest.json"]); toolbox.router.get(‘/images/*’, toolbox.cacheFirst); toolbox.router.get(‘/*’, toolbox.networkFirst, { networkTimeoutSeconds: 5});

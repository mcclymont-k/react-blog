"use strict";var precacheConfig=[["/index.html","6390272bac65fabb8aad929111acc344"],["/static/css/main.e3802795.css","c342e6c89bd9fe628d30578f2f418f08"],["/static/js/main.9f0e73d9.js","37f492a8a0c6a799e48c7d69664ad3db"],["/static/media/1.f25e760b.jpg","f25e760bb11eab8e8101ef76ecfcff39"],["/static/media/10.7e8afdbf.jpg","7e8afdbf41b541d4b2dda81f8dfb3f6a"],["/static/media/11.06b49f92.jpg","06b49f92db66218568c56b83c968a146"],["/static/media/12.43d44890.jpg","43d448909964335370122089a9e9a1de"],["/static/media/2.4686b41b.jpg","4686b41b952c61e33645f4f37074eedc"],["/static/media/3.99a79b1e.jpg","99a79b1eedf11556ed3789ae6cb09f02"],["/static/media/4.4d1cd869.jpg","4d1cd869cfdc2fd7c52171c72f9b04f5"],["/static/media/5.7310ff95.jpg","7310ff95e2e386b2a56d600a5bdaff0d"],["/static/media/6.55fa49f9.jpg","55fa49f9e3f915aa81e66832c91b2cf6"],["/static/media/7.966aa1fa.jpg","966aa1fa3b3643e2f61953e23ddfbf47"],["/static/media/8.0e2b3ced.jpg","0e2b3cedf0e83ae27b8bffb1d0477da3"],["/static/media/9.4202705b.jpg","4202705b812770ecfd4eb43db0159f4b"],["/static/media/background.d123ab37.jpg","d123ab37f6be809e6e93cd1f3480cdf9"],["/static/media/brainstorm.ccaba9d3.png","ccaba9d3c41024e51950683901c987dc"],["/static/media/careyStore.f9dc4662.png","f9dc46620757abbdb4ee85cb5affab2b"],["/static/media/css.1651ac0d.png","1651ac0d07bb9054124d93b16971d341"],["/static/media/d3.29ae1b71.png","29ae1b7129b7fce86f6d48e5cb5aefb7"],["/static/media/d3Project1.e4179b18.png","e4179b185b45fb44ef16456ea0231cf6"],["/static/media/d3Project2.6c161a3e.png","6c161a3ecf528f1bc99b5ace4fa00e04"],["/static/media/giphy.e77e9205.gif","e77e920596daae686f1c4a36a4bfc20c"],["/static/media/html5.17107d15.png","17107d15859e8f60ead5e036e22d3270"],["/static/media/javaScriptLogo.0cded3a3.png","0cded3a3276425911d55a2552bf361bf"],["/static/media/kieran.92c5b996.jpg","92c5b996548c6f0cc84e7f59c026be50"],["/static/media/learn.64b321f7.jpg","64b321f78c026e24026d95e6bc2647c1"],["/static/media/meditationApp.928b7f86.png","928b7f8698f922297d5f88331aa44e07"],["/static/media/node.85458a67.png","85458a6717bed07d7db5146928d3cdd0"],["/static/media/oldGrowth.02151240.png","02151240b032b1525368ef40f8ba20f2"],["/static/media/python.ca2ceddc.png","ca2ceddcd9c28a22c449286f3fe66751"],["/static/media/react.638be909.png","638be90904f9f9248d3c69cb2992c562"],["/static/media/tensorflow.aeeade29.png","aeeade29d2fbcce823c16ae370e0d7b7"],["/static/media/twit.56bf037c.png","56bf037c7207416777ad41a73b6d2e3a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
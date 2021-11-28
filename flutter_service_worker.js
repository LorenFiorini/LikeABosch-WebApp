'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "658e208ad09cd7c785443582f2600717",
".git/config": "76a8d2216bd253fd83d8ad71eb1cf24f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "762fa609ed50aab871478900905cc120",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "771f1e09236adde6a369e0d43a0e0da5",
".git/logs/refs/heads/main": "49456c3a7d74b25208c0f62c2626118d",
".git/logs/refs/remotes/origin/main": "ee77089267eba6dedb489de1fafedb4c",
".git/objects/08/e13519fb4df768c5f8fffb0ee949087e81d0ea": "614fcbe5b92b04c3491cb964ef69ab80",
".git/objects/0c/4b0dc843750265b5766a0d8d31c8f8c16a23e8": "e7380e2c5bd85d2f29339e5e5fcb9bc4",
".git/objects/1c/6818aff056fec868408b01f396c3881ec3b252": "5d7af7d8468cca8b76c574a2bf50d234",
".git/objects/1d/a7363d28019f3fbb4ba64cd7ff33bc97cffaa5": "a3507edeb9655a288e1ed4193b6e7fb2",
".git/objects/2c/1874b7a32ddb7c5b19a57f8c1ef978446e8d33": "9fcfa9bcdfb4b554aafb993e45e4000b",
".git/objects/2c/71d11e217be56c4e958075a9a9804349cbbef4": "8c1ae0ab33f90fe321daa0b0a97c13f4",
".git/objects/3d/b20ad3672f96a9d18d550ab66df8f7cda79f2a": "2ed477b0bb6f6ef3652be19f71011437",
".git/objects/58/b60c6e14651b7583cdebfdcf289777e860afd1": "0de986a75da33a35167b9550566cc17f",
".git/objects/5e/c135a9ed8d8969cc2d1d3019fb5da0d2df0220": "fe82be6c9b4e5d21b990eccd92d17eac",
".git/objects/6d/51cfa83ad1a521651b503bfd74c6226d23db8d": "a4024e5391580f3cfaabb3472ba7d127",
".git/objects/7a/52b03ad7d12c07858cea320c96216075bc7ece": "fa44d400951ccb7580bb12c31593e6d5",
".git/objects/81/d3a952d0693bccf769d4272729d2d849935c5a": "5fad8ffda40bdbc731619d1205c3848b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/b1b8b0d503ced39ac03656e204a5afb221cdde": "bb41b4afe90e4298f732100b8407008d",
".git/objects/ae/52542cace7dda5b91798b84adc0d84468cf15d": "5cb57237a2ff7a755bcf8f3377b754c4",
".git/objects/b2/e96f0f90eec57076a051ab2d747e27eb80d102": "7f8e8902fb08bf73be646b9db4c90748",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/9dd20c9fab113d39fcf390f95b834d95b834a2": "fa1dcfa9c9b83d98653cde8009f2b46c",
".git/objects/c3/a6930c29a237dd1d5dd031540f3e32771712ef": "4b7b6c6274e99fc406252ff8ffa6425d",
".git/objects/c4/1be01f67d46c5d5d2223778d2b23fead0eac6a": "671adacbe772b1b585e7275cc0add709",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ff/e216b8d2f0261ec0a06587a60f9360c3fc0a23": "bad7a8c57a71980a43f0df3375ad9848",
".git/refs/heads/main": "6e88d1c46998878d871d118dfae47729",
".git/refs/remotes/origin/main": "8c7de0899c0d14eb24dc53977404d7c4",
"assets/AssetManifest.json": "0fbccdddf283b7473d57e813444a7078",
"assets/assets/0001.jpg": "296dd9a29ba8ca42a22de114c0ad43b8",
"assets/assets/0002.jpg": "83620fffa0e626f3abdc0560da5924f2",
"assets/assets/0003.jpg": "aae9c47e25cdd3ab1c6e0ff8b7d91048",
"assets/assets/0004.jpg": "45af38b38e3435fdc5a72f0ef975fa98",
"assets/assets/0005.jpg": "07e9974d738920509a83608b331b5ac0",
"assets/assets/0006.jpg": "00217b62af5dbb821661188815d8a7e2",
"assets/assets/0007.jpg": "4de24372a2149c317bd67a30aed074da",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9d3acee7548e66de52824091d87fda85",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "979241d3646c2eb0244154398f41a552",
"icons/icon-192.png": "6cb0d36b272793a4f45a083c7ad52abe",
"icons/icon-512.png": "cba3cc312464bb6a557e6ec6b46cdf5e",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ed46ebc2a189b3a6cb7267e8ab66c816",
"/": "ed46ebc2a189b3a6cb7267e8ab66c816",
"main.dart.js": "59f223efb5f79114e4ed361e11c6780b",
"manifest.json": "01e4a0229ebf4af888be3e77ecafeefc",
"README.md": "8b94c8cfb0377b848a3502db6f54d8aa",
"version.json": "4a788b0b48b5acbdab10ac6de866cb8f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

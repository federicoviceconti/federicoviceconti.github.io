'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "bb52c0ca54a27836d7911bd8c8f21ea8",
"/": "bb52c0ca54a27836d7911bd8c8f21ea8",
"main.dart.js": "49fd95b31e4683bc1ad584ce1efe92f2",
"favicon.png": "8e45e23a042463a06a410b324bacc098",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "340b8bd63909918c9a45e78765c36ec3",
".git/ORIG_HEAD": "807babd601bc2fb2939637dd0c75193d",
".git/config": "4ced36002911e32e362b352dca1711b1",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/5da877cb366ea7cdc580cd9ed6478f29d35535": "bbb5709e0f40d19511aeffab6baf965d",
".git/objects/3c/b57481ee35dfa0603f8ed47bb0ba8611aefd90": "c0ab8e33422ee16529212dc4c0a494bf",
".git/objects/05/d29dc62065cfb26f740864398f36b95cf5d646": "942d75259af939f1d430927f483134c6",
".git/objects/9d/6fc40c8a21d2c08f06003b0b2e0145b8b58ea3": "a055e48bf1ebd060297715f60c32581d",
".git/objects/b5/699cf573d0e009fee7f9f11e650b49f039e9a3": "6d5e1955670109643a79d616702f863a",
".git/objects/bb/9b67abf79cd8f194ae81d7830e91b0bc65ce08": "de178368bdb4d50ad13b9a69048e8ddb",
".git/objects/d0/a5912947ceb27505c2661b95b18352688a4b73": "5c7526ce1c2c2423ec7c6459cc90b530",
".git/objects/d0/cf251d89afdcb4e6a9f1c8fbf86d820a8259f5": "5f62f5473a1edd8d32897eea6c4a23eb",
".git/objects/be/c69aab279cc00d859fe8b2bfac204621b3e818": "12e07965a7394fc7177b98c6382797d6",
".git/objects/da/8918f64f24a0a3350fe39d164db841d5ae4cd8": "d3707cc28f148373e08371a52b5f258a",
".git/objects/b4/14dc53bf240eef47cf70457c5ff6a1373b8b33": "c7404bf3a9db43bde195871122868c46",
".git/objects/d8/019d6e0e5da2ea179869513ed50d21089627e0": "ed39d71c4e69ffac926674b2bef7f4b6",
".git/objects/f4/a29bae19717467da870be0cc4f764d93c24062": "12bf36f09c0d5c5dabeb0f6a907f4048",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/cf/3e7edf4f994df1f61e8239d4ceb24236393b01": "8b52d842d3d34b69c4e3fea856695c9e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/917f1bd7bc7174040e7ec6a311eff6f8063b72": "277f4f20c07e283e10440e0d79007105",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7b/e7fc2abcf0b67981f4ec979830762b19a6286e": "7f2833178f8ce48f5f5a3a13fde09090",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/5fe4569ee0e11159ea376134e2638e94b9f93f": "ba3466b7a720e34e4901b8f6473e7249",
".git/objects/4c/07daaa918297704db1c713abc5a366acdb607d": "51d5ac83ba7841dc54df4f336d20a7df",
".git/objects/4c/031477112f1abcf5aa39f2ddff1ba95f93c8d1": "41212f92b6df77c631868a66d8480459",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/86/c111101135cdd6c35e5bbc35a5dfc9681541de": "cccf75e3562f7397a71a6321cecb2c4c",
".git/objects/72/1075029807f3279bb4733045e19fb7e2cb8628": "ab294b085c59b308980e1d0f1163c326",
".git/objects/44/9db2c4bd269841105b5f456e9735c4daddc899": "ec8b1d623a7bac953769492723c17098",
".git/objects/88/a47427c0e283bc0ed5ad386a5b97d50e5938ae": "24fe1281ff4826b79257d3fa022c9295",
".git/objects/88/b5a5de1a39c6584f279e21fa143261bf82a8c9": "32b651f90d4bfb2cc922ab8483ab5d24",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/73d89e024260fcaf1c9751240cd4558e55b779": "b3fdb7cb8bf0149853602d2c1b5be00c",
".git/objects/9a/f323e44eabe7caad053146b1f17cebced7cef0": "d2be17b3253bf98cf9adbe16a7328302",
".git/objects/91/b024ddaa0cd7430a02b48e59a2786cabf7367e": "c3b3b78b5e98df18ce10deb57c84ec34",
".git/objects/3a/8c8249034b5057d968e61af7577811eac2ca42": "1b8d4b6e3bdf1604de3740ea8de5ed5e",
".git/objects/08/64cb6070d1fd2483dcc9f812114eb3fa9955b5": "a5c3d5f40c4b1b3ca11dd10e39ef51d3",
".git/objects/01/cefcb0c2b498c403698ad182d1b51beba14572": "910febdb9ac47e50b1615795f862d50d",
".git/objects/06/8d775c54a0327af2477a2aab2ed07a8f29c3f7": "7482d4c7daea659d577a1ec000b9087d",
".git/objects/39/0a1f7fb94e98b18a8ae91ac51ddd69da6ea827": "00158e23df19e63723e2aee6b5351e58",
".git/objects/39/55edfe59223703dd4802723a39c46b59c45c88": "5a0a2e2c71887fe046f3c62191d9b94a",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0a/9e070beddc8bddf365688b964dc9b52ed38279": "c365f39d6a5fd1ca43fa85feb944aebf",
".git/objects/0a/2bb47c5f74d5dad1ce63b0b426fd13db498240": "8958e6b3da8042c8ec5c5bf924a641f6",
".git/objects/a0/3eb73214b3761d3f3e419d3eae3923fb8e5ae5": "dbd410289c0f5eb137232333c359c9a3",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/cd/4a6df882bb98fcc7b44116b05be7b0bf09c46d": "f87890b3378e1613c87485b93864df19",
".git/objects/c2/065d7bd509bd49b7b9035762026d5b81722813": "3a7683ffed1c13497650ad7d86230d88",
".git/objects/ce/50bf8aba2550b32cbe235d91fa0e92a689ab5a": "f7e72359de734db918825546812e66dc",
".git/objects/e0/4107cac05931e34bc0069218f07a3650a53e02": "ff7df77797fff20a13ea1578b57b6d18",
".git/objects/77/6f8346d8de419c30ee6a677688f784bf240bcf": "e58778f4b75aca4d2ca4d93358d484ef",
".git/objects/4f/13dec19b0d482af7ce44498faa96ef0e91b572": "effcf98cf00af59532a7eac0e8f8ded3",
".git/objects/8d/90ac2ced8d38bad98b554316875d5c09bff6a7": "b1c7f998034e6e56f1628ff239026214",
".git/objects/15/743d3aae33d7863dadab992b0d6b86e16c262f": "aeb4c5a33cef94de5af808dcf7b28a78",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/76/7662a2f520ee8671cfa4272a65688bbea4647e": "3130ecfd01477a225a152f1036b9f881",
".git/objects/40/8ed7930e08efb62e96bbcc98f6b194863cf66b": "a69b30c3cbe50774a9187ff0b3a4b367",
".git/objects/2e/d31e329abd574fb29c0215ffc91d80577e379c": "45655c771dfc27d6ce1c1630551653b6",
".git/objects/2b/bd963375a898d07055ac2bcac6dac86e798915": "083d959acbd71ad310add70f2f16f1b0",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/7a/0eeb8c0b337f4759f804fb2a49d5b037796073": "5f452879da1293ca142c830d0a9c5d00",
".git/objects/8e/8354f8cfb48d1ba00eb7423ac39817c65f07a6": "7edadefde0784e3e1ce9d49579eb7e6a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "5b52d87841abb1340aa56b12eb973829",
".git/logs/refs/heads/master": "5b52d87841abb1340aa56b12eb973829",
".git/logs/refs/remotes/origin/master": "c4f281b7b016d422943eef7b93fb3a9b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "a3b5697b36c4d74d0aa856a02771f136",
".git/refs/remotes/origin/master": "a3b5697b36c4d74d0aa856a02771f136",
".git/index": "fe8dabe23f3562bb63c134a3137b1afa",
".git/COMMIT_EDITMSG": "143375183d47586fc3b12a68c0220aac",
".git/FETCH_HEAD": "4a08f387897a9c3b126e7b1ae7c1447b",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "e8e4e5e35ea866eaeac78bc40423f9bd",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

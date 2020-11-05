'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "34c613a03d8a808029a8f34cb72d17f2",
"index.html": "3c252fb2fa808037f9c015bb6e4348db",
"/": "3c252fb2fa808037f9c015bb6e4348db",
"main.dart.js": "ba9f15e33331cca4e762ef20eeccba5a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9e2d7840d46b1f98d864eeb619f54d29",
"assets/AssetManifest.json": "f1f7c0d723310ca5b7905fa930aee7df",
"assets/NOTICES": "b8c2e1d7196a9c0bba34a5000d06f6a9",
"assets/FontManifest.json": "00403e2522a57508f7331bd0a4d3190e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/half_sobos_screen.png": "9ce13b5b11122fd77f9d55374869161c",
"assets/assets/images/widgets_example.png": "10dd0040393b550ed49368f0f0aad339",
"assets/assets/images/roadmap.png": "dac05acb23515e80c54c6c3d3cab9c4b",
"assets/assets/images/competitors_phone.png": "cb6db6391a83701d88028e9fd30f835f",
"assets/assets/images/fabio.png": "f775fac26ef5c77a6bd4413b0d90995c",
"assets/assets/images/flutter_logo_blue.png": "bf65916390a23a1a92d27baaca547812",
"assets/assets/images/thank_you.png": "570a04605630e270db18b2447208a54a",
"assets/assets/images/shoes_bloc.png": "85db5c77fad39f8b1b98d13bd7806778",
"assets/assets/images/statefull_less.png": "375c53350f6351e269eeff72feff7805",
"assets/assets/images/half_juicepass_images.png": "3b3814728f934913c8cbf05075538d8f",
"assets/assets/images/flutter_image_state.png": "3321d7bd7bd7ca805a6c3ed1868e5fb4",
"assets/assets/images/github.png": "a642e7cd2ab6d18491b0ec26d9aecaeb",
"assets/assets/images/data-provider.png": "7f130531d87e0fb9a61261954f7fef35",
"assets/assets/images/declarative_example.png": "dd889a5b1a385488799e451c042e2e30",
"assets/assets/images/fastdev.png": "89051d2496101274650fdac09872964c",
"assets/assets/images/declarative.png": "9d02e82204fbb8ba9acee967da395bc2",
"assets/assets/images/provider/select_brands.png": "0afd95622cab5b6799be619beed47037",
"assets/assets/images/provider/notifier_onitempressed.png": "b3ce6dd3e00a66bb47551f21b34c551a",
"assets/assets/images/provider/model_onitempressed.png": "b6daf3e1c8fb4509e0a6e3a7084fee50",
"assets/assets/images/provider/homenotifier_init.png": "7e61bb8459940d4897efdc6bc89ed099",
"assets/assets/images/provider/detail_navigatorservice.png": "9d281c12ca14bdd1bcfdca13348086f0",
"assets/assets/images/provider/home_init.png": "73a38b79217122359d7a87d22b5a9ca5",
"assets/assets/images/provider/consumer_items_shoes.png": "6df95e7e89f946944637a07d3e6ef0c7",
"assets/assets/images/provider/base_notifier.png": "cedc28aa8e52083830992390c41640c1",
"assets/assets/images/provider/setup_provider.png": "dac6c9598ae6b83315f23b84f1a52f3c",
"assets/assets/images/provider/home_change_notifier_provider.png": "02127945e3957bd0e9f16cdd5cabf3d7",
"assets/assets/images/counter-descendant.png": "e450fd49415e2a5a78b3f6002d445a69",
"assets/assets/images/background_ntt.png": "b1150a88764d3f55be23a22bb9533223",
"assets/assets/images/sobos_screen.png": "71a249ffd122cbd00133c9c945dc7738",
"assets/assets/images/state_set.png": "c4fce1a74aeb307ab998e6455cf79d58",
"assets/assets/images/platform.png": "23bce4a4e8425bd65d364130b1249ca1",
"assets/assets/images/google_showcase.png": "686f7c0cd2b0c46f92655a94ff353850",
"assets/assets/images/shoes_tap_bloc.png": "6f9f722ffbc9e5007cad96cd5ffe28ec",
"assets/assets/images/circle_marco.png": "c516f71a69663e41a56a883ad9b84fda",
"assets/assets/images/bloc_example_1.png": "ef1339ef2f88105bceeaa637947d7111",
"assets/assets/images/circle_vice.png": "98f0c3e745331ac59782ae5e01350174",
"assets/assets/images/data-counter-provider.png": "6a198066988092bb3052421b9a1ba34a",
"assets/assets/images/world_of_widgets.png": "f8cd8a588eba578f7b186ed73ab89737",
"assets/assets/images/who_s_best.png": "4fd96f48208635f32c61f6770aa63de9",
"assets/assets/images/juicepass_images.png": "43b80c8ef9b2aff2fb3dc6837fef8a66",
"assets/assets/images/bloc_example_2.png": "3e0dbbf4f4cbfec2925b971c0152fc26",
"assets/assets/images/keapp_screen.png": "d5b8bf7ff5a7d35bfa36db0e494f2f85",
"assets/assets/images/example-flutter.gif": "b27ef86c184746fc99b8bbc066fc3f34",
"assets/assets/images/bloc_logo.png": "e41219f45d9633b6c2cc2826399a9fa0",
"assets/assets/images/marco.png": "6a3b944070f6f9a0a28954f62d56f7a7",
"assets/assets/images/imperative.png": "e683281f323fbb908bf7acf8cf1686ed",
"assets/assets/images/state-management-explainer.gif": "902f31813b03552a1936de690e6f7e0f",
"assets/assets/images/pub_dev.png": "86a091d7b82c1d771af162ac0beca3cb",
"assets/assets/images/performance.png": "7a1f5783419779efdaf24f56a718ffdf",
"assets/assets/images/example-counter.gif": "6938261e3e26ad42750a4411611ea06d",
"assets/assets/images/vice.png": "4bcc76ec2d21c1de22b6f5560fd7ee31",
"assets/assets/images/bloc_architecture.png": "76c1ba1dc270a94ef2701acb27141047",
"assets/assets/images/phone_frame.png": "5e2cc42409cf245732a80fd82dccee2d",
"assets/assets/images/ui.png": "b69c7063e5ee29644fa1d50b9a7f5803",
"assets/assets/images/flutter_code_example.png": "d279988b58fbbca4bd5d14d7c8ddaaa8",
"assets/assets/images/shoes_stream_builder.png": "ffd27ce815fa6aeea07ccec5302a3790",
"assets/assets/images/of-counter-model.png": "84a1db79b053bad27588e3801fbe7b85",
"assets/assets/images/thank_you_blue.png": "817c68eba8c565051f7456f97f8d1e62",
"assets/assets/images/dart.png": "67afaf26546ac978c500b22ba7707dda",
"assets/assets/images/f_state.png": "6a66ecdff8dd898943648892aa10cb3f",
"assets/assets/images/half_keapp_screen.png": "29f1317d94914e6bb872951f6992e6c4",
"assets/assets/images/platform_diagram.png": "6f2beadbb7862c0bf2f0fc41245b094b",
"assets/assets/images/flutter_question.jpeg": "eaf84f5fb448d8b000f8b8c306fc6aa0",
"assets/assets/images/sink.png": "d92d40a811631370a6a6acc2a8cb6ff3",
"assets/assets/images/competitors_popularity.png": "7065e010f98fbfaaca634dd62db14022",
"assets/assets/images/state_button_action.png": "adfd7c030cf5a3620c0d0c910350fbd7",
"assets/assets/json/sapienza_slides.json": "3f6a00e49e1d4aa48350d7a809747113",
"assets/assets/json/tech_corner_slides.json": "36088265bbdf1deb57a6288b523f334c",
"assets/assets/nike_shoe.png": "3200d4e367b03b9c884b41ca934f1033",
"assets/assets/fonts/Futura/FuturaPT-MediumObl.ttf": "f90c9809d9d4b016f83e11504701cf5d",
"assets/assets/fonts/Futura/FuturaPT-BookObl.ttf": "02738f97b87fd3e6979a5de80beb58bd",
"assets/assets/fonts/Futura/FuturaPT-Medium.ttf": "540c81bc4ca37ae1efe4b60de51e753f",
"assets/assets/fonts/Futura/FuturaPT-BoldObl.ttf": "1636d83d92a3f0fe3b6ceb2d6d704a77",
"assets/assets/fonts/Futura/FuturaPT-Book.ttf": "0d987efe9bc0b858a7bc0367c2d5922c",
"assets/assets/fonts/Futura/FuturaPT-Light.ttf": "c7f1106be884b5027c6d93deec8ca00a",
"assets/assets/fonts/Futura/FuturaPT-Bold.ttf": "6dddddc0b4726becc525fc7794cfcf6b",
"assets/assets/fonts/Futura/FuturaPT-LightObl.ttf": "3e5135bd678f5b5cb4c6b32926e46dd0",
"assets/assets/fonts/Muli/Muli-Black.ttf": "ce5d61176e1db4c925df20db172e7a6a",
"assets/assets/fonts/Muli/Muli-Medium.ttf": "683362f36187ad8be18692df9c1cf81e",
"assets/assets/fonts/Muli/Muli-ExtraBold.ttf": "670ba44cafeef17fe4efd30d9fca548a",
"assets/assets/fonts/Muli/Muli-Bold.ttf": "077ceb9111e90dea3fc3923fe71805a1",
"assets/assets/fonts/Muli/Muli-Italic.ttf": "001b006560d8d002237f41acb499b1a7",
"assets/assets/fonts/Muli/Muli-SemiBold.ttf": "2f64b5b99b8dc9d36387f334a6921da7",
"assets/assets/fonts/Muli/Muli-Light.ttf": "923c071b6b7ddaebd0c20d00fa805701",
"assets/assets/fonts/Muli/Muli-Regular.ttf": "328d557958b18b54b3bddb3a4a36215a",
"assets/assets/animations/flutter.flr": "3578def52d12cccdd5a928ad35de81b2"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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

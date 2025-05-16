const VERSION = "1.0.0";

const assets = [
  "/manifest.webmanifest",
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/d1.png",
  "/d2.png",
  "/d3.png",
  "/mascot-192.png",
  "/mascot-512.png",
  "/boy.svg",
  "/es.svg",
  "/finish.svg",
  "/fr.svg",
  "/girl.svg",
  "/heart.svg",
  "/hero.svg",
  "/hr.svg",
  "/it.svg",
  "/jp.svg",
  "/leaderboard.svg",
  "/learn.svg",
  "/man.svg",
  "/mascot_bad.svg",
  "/mascot_sad.svg",
  "/mascot.svg",
  "/points.svg",
  "/quests.svg",
  "/robot.svg",
  "/shop.svg",
  "/unlimited.svg",
  "/woman.svg",
  "/zombie.svg",
  "/correct.mp3",
  "/es_boy.mp3",
  "/es_girl.mp3",
  "/es_man.mp3",
  "/es_robot.mp3",
  "/es_woman.mp3",
  "/es_zombie.mp3",
  "/fr_boy.mp3",
  "/fr_girl.mp3",
  "/fr_man.mp3",
  "/fr_robot.mp3",
  "/fr_woman.mp3",
  "/fr_zombie.mp3",
  "/hr_boy.mp3",
  "/hr_girl.mp3",
  "/hr_man.mp3",
  "/hr_robot.mp3",
  "/hr_woman.mp3",
  "/hr_zombie.mp3",
  "/it_boy.mp3",
  "/it_girl.mp3",
  "/it_man.mp3",
  "/it_robot.mp3",
  "/it_woman.mp3",
  "/it_zombie.mp3",
  "/jp_boy.mp3",
  "/jp_girl.mp3",
  "/jp_man.mp3",
  "/jp_robot.mp3",
  "/jp_woman.mp3",
  "/jp_zombie.mp3",
  "/incorrect.mp3",
  "/finish.mp3",
];

const assetsCacheName = "lingo" + VERSION;

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(assetsCacheName);
      await Promise.allSettled(assets.map((url) => cache.add(url)));

      self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Remove old caches (assets)
      const keys = await caches.keys();
      await Promise.allSettled(
        keys
          .filter((key) => key !== assetsCacheName)
          .map((key) => caches.delete(key))
      );

      // caching missing assets (like if the install event interrupted)
      const cache = await caches.open(assetsCacheName);
      const matches = await Promise.all(
        assets.map((asset) => cache.match(asset))
      );

      const missingAssets = assets.filter((_, index) => !matches[index]);

      await Promise.allSettled([
        ...missingAssets.map((url) => cache.add(url)),
        self.clients.claim(),
      ]);
    })()
  );
});

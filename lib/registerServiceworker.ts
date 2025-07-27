export const registerServiceworker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => {
        if (navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: "CACHE-MISSING-ASSETS",
          });
        } else {
          navigator.serviceWorker.ready.then(() => {
            if (navigator.serviceWorker.controller) {
              navigator.serviceWorker.controller.postMessage({
                type: "CACHE-MISSING-ASSETS",
              });
            }
          });
        }
      })
      .catch((error) => {
        console.error("Service worker registration failed:", error);
      });
  }
};

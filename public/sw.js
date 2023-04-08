self.addEventListener("install", (event) => {
  const cacheKey = "LanguageMate_v1";
  const styles = require("../styles/index.css");

  event.waitUntil(
    caches.open(cacheKey).then((cache) => {
      return cache.addAll([
        // "https://fonts.googleapis.com",
        // "https://fonts.gstatic.com",
        // "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap",
        styles,
      ]);
    })
  );
});

import DraggableImage from "./draggableImage";
const imagesLoaded = require("imagesloaded");

// Preload images
const preloadImages = () => {
  return new Promise((resolve, reject) => {
    imagesLoaded(
      document.querySelectorAll(".img-drag, img"),
      { background: true },
      resolve
    );
  });
};

Promise.all([preloadImages()]).then(() => {
  [...document.querySelectorAll(".img-wrap")].forEach(
    (element) => new DraggableImage(element)
  );
  document.body.classList.remove("loading");
});

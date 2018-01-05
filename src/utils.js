export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  });
};

export const loadImages = (assets = [], game) =>
  assets.forEach(el => game.load.image(el.name, el.url));

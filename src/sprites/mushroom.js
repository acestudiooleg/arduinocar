import Phaser from 'phaser';

export const MushroomAssets = [{
  name: 'mushroom',
  url: 'assets/images/uno.png'
}];

export default class Mushroom extends Phaser.Sprite {
  constructor({ game, x, y, asset }) {
    super(game, x, y, asset);
    this.anchor.setTo(0.5);
  }

  static loadImages(context) {
    Mushroom.assets.forEach(el => context.load.image(el.name, el.url));
  }

  update() {
    this.angle += 1;
  }
}

/* globals __DEV__ */
import Phaser from 'phaser';
import Mushroom from '../sprites/mushroom';

export default class extends Phaser.State {
  init() {

  }
  preload() {

  }
  create() {
    const { centerX, centerY } = this.world;
    const bannerText = 'Phaser + ES6 + Webpack = Arduino';
    const banner = this.add.text(centerX, this.game.height - 80, bannerText, {
      font: '40px Bangers',
      fill: '#77BFA3',
      smoothed: true
    });

    banner.padding.set(10, 16);
    banner.anchor.setTo(0.5);

    this.mushroom = new Mushroom({
      game: this.game,
      x: centerX,
      y: centerY,
      asset: 'mushroom'
    });

    this.game.add.existing(this.mushroom);
  }

  render() {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32);
    }
  }
}

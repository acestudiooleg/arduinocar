import Phaser from 'phaser';
import {centerGameObjects, loadImages} from '../utils';
import {MushroomAssets} from '../sprites/mushroom';

export default class extends Phaser.State {
  init() {}

  preload() {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
    centerGameObjects([this.loaderBg, this.loaderBar]);

    this.load.setPreloadSprite(this.loaderBar);
    //
    loadImages(MushroomAssets, this);
  }

  create() {
    this.state.start('Game');
  }
}

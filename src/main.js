import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from './states/Boot';
import SplashState from './states/Splash';
import GameState from './states/Game';

import { gameWidth, gameHeight } from './config';

class Game extends Phaser.Game {
  constructor() {
    const { clientWidth, clientHeight } = document.documentElement;
    const width = clientWidth > gameWidth ? gameWidth : clientWidth;
    const height = clientHeight > gameHeight ? gameHeight : clientHeight;

    super(width, height, Phaser.CANVAS, 'content', null);

    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Game', GameState, false);

    // with Cordova with need to wait that the device is ready
    // so we will call the Boot state in another file
    if (!window.cordova) {
      this.state.start('Boot');
    }
  }
}

window.game = new Game();

if (window.cordova) {
  const app = {
    initialize() {
      document.addEventListener(
        'deviceready',
        this.onDeviceReady.bind(this),
        false
      );
    },

    // deviceready Event Handler
    //
    onDeviceReady() {
      this.receivedEvent('deviceready');

      // When the device is ready, start Phaser Boot state.
      window.game.state.start('Boot');
    },

    receivedEvent(id) {
      console.log(`Received Event: ${id}`);
    }
  };

  app.initialize();
}
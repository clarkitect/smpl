import Logo from '@/objects/logo';

export default class Game extends Phaser.Scene {
  /**
   *  Smple game main
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Game'});
  }

  /**
   *  Initialization of scene; setup any game objects
   *  @protected
   *  @param {object} data Initialization parameters.
   */
  create() {
    // todo: write game!
    this.logo = this.add.existing(new Logo(this));
  }

  /**
   *
   * Render scene 
   * 
   *  @protected
   *  @param {number} t Current internal clock time.
   *  @param {number} dt Time elapsed since last update.
   */
  update(/* t, dt */) {
    this.logo.update();
  }
}

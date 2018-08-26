// Lib imports
import * as Pixi from "pixi.js";

// Local imports

export class TextureManager {
  constructor() {}

  public async init() {
    return new Promise((resolve, reject) => {
      Pixi.loader
        .add("test", "../asset/image/sprite/test.json")
        .load(() => { resolve(); });
    });
  }
}

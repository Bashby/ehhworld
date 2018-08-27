// Lib imports
import * as Pixi from "pixi.js";

// Local imports

export class TextureManager {
  constructor() {}

  public async init() {
    return new Promise((resolve, reject) => {
      Pixi.loader
        .add("deer", "../asset/image/sprite/deer/deer.json")
        .load(() => { resolve(); });
    });
  }
}

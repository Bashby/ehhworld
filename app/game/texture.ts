// Lib imports
import * as Pixi from "pixi.js";

// Local imports
// const json = require();
// import '../asset/sprite/test.json';

export class TextureManager {
  // constructor() {}

  public init(cb) {
    PIXI.loader.add("test", "../asset/sprite/test.json")
      .load(cb);
  }
}

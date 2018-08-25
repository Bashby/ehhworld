// Lib imports
import * as Pixi from "pixi.js";

// Local imports

export class TextureManager {
  constructor() {}

  public init() {
    Pixi.loader.add("test", "../asset/image/sprite/test.json").load();
  }
}

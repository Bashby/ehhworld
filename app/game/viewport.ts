// Lib Imports
import * as Pixi from "pixi.js";

export class Viewport extends Pixi.Container {
    public id: string = "viewport";
    public _screenWidth: number;
    public _screenHeight: number;
    public _worldWidth: number;
    public _worldHeight: number;

    constructor(options) {
        super();

        // Apply Configuration
        options = options || {};
        this._screenWidth = options.screenWidth;
        this._screenHeight = options.screenHeight;
        this._worldWidth = options.worldWidth;
        this._worldHeight = options.worldHeight;
    }

    public update(dt: number) {
    }

    public resize(screenWidth, screenHeight, worldWidth, worldHeight) {
        this._screenWidth = screenWidth || window.innerWidth;
        this._screenHeight = screenHeight || window.innerHeight;
        this._worldWidth = worldWidth;
        this._worldHeight = worldHeight;
    }
}

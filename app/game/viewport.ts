// Lib imports
import * as Pixi from "pixi.js";

export class Viewport extends Pixi.Container {
    public id: string = "viewport";
    public screenWidth: number;
    public screenHeight: number;
    public worldWidth: number;
    public worldHeight: number;

    constructor(options) {
        super();

        // Apply Configuration
        options = options || {};
        this.screenWidth = options.screenWidth;
        this.screenHeight = options.screenHeight;
        this.worldWidth = options.worldWidth;
        this.worldHeight = options.worldHeight;
    }

    // public update(dt: number) {}

    public resize(screenWidth, screenHeight, worldWidth, worldHeight) {
        this.screenWidth = screenWidth || window.innerWidth;
        this.screenHeight = screenHeight || window.innerHeight;
        this.worldWidth = worldWidth;
        this.worldHeight = worldHeight;
    }
}

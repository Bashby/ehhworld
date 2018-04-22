// Lib Imports
import * as Pixi from 'pixi.js';



export class Viewport extends Pixi.Container {
    id: string = 'viewport'
    _screenWidth: number
    _screenHeight: number
    _worldWidth: number
    _worldHeight: number

    constructor(options) {
        super()

        // Apply Configuration
        options = options || {}
        this._screenWidth = options.screenWidth
        this._screenHeight = options.screenHeight
        this._worldWidth = options.worldWidth
        this._worldHeight = options.worldHeight
    }

    update(dt: number) {
    }

    resize(screenWidth, screenHeight, worldWidth, worldHeight) {
        this._screenWidth = screenWidth || window.innerWidth
        this._screenHeight = screenHeight || window.innerHeight
        this._worldWidth = worldWidth
        this._worldHeight = worldHeight
    }
}
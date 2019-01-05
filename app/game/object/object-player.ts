// Lib imports
import { GlowFilter } from "pixi-filters";
import * as Pixi from "pixi.js";

// Local imports
import { Game } from "../game";
import { IUnitVector, UnitVectorValue } from "../util/types";
import { clamp } from "../util/util";
import { GameObject } from "./object-game";

export class Player extends GameObject {
    public position: Pixi.Point;
    public lastPosition: Pixi.Point;
    public speed: number = 0.1;
    public SPEED_MAX: number = 1;
    public SPEED_MIN: number = 0;
    public direction: IUnitVector = { x: UnitVectorValue.Zero, y: UnitVectorValue.Zero };
    public rotation: number = 0;
    public lastRotation: number = 0;
    public renderTarget: Pixi.Container;
    public displayObject: Pixi.Graphics = new Pixi.Graphics();

    constructor(game: Game) {
        super(game);

        this.renderTarget = this.game.stage;
        this.renderTarget.addChild(this.displayObject);

        console.log(Pixi.utils.TextureCache);
        console.log(PIXI.loader.resources);
        const textures = [
            Pixi.utils.TextureCache["deer0.png"],
            Pixi.utils.TextureCache["deer1.png"],
            Pixi.utils.TextureCache["deer2.png"],
            Pixi.utils.TextureCache["deer3.png"],
            Pixi.utils.TextureCache["deer4.png"],
            Pixi.utils.TextureCache["deer5.png"],
            Pixi.utils.TextureCache["deer6.png"],
            Pixi.utils.TextureCache["deer7.png"],
            Pixi.utils.TextureCache["deer8.png"],
            Pixi.utils.TextureCache["deer9.png"],
        ];

        const sprite = new Pixi.extras.AnimatedSprite(textures);
        sprite.animationSpeed = 0.1;
        sprite.scale = new Pixi.Point(5, 5);
        sprite.filters = [new GlowFilter(15, 10, 0, 0xFF0000)];
        sprite.play();
        sprite.position.x = (this.renderTarget.width / 2);
        sprite.position.y = (this.renderTarget.height / 2);
        this.renderTarget.addChild(sprite);

        this.init();
    }

    public init() {
        this.displayObject.beginFill(0xFFFF00);
        this.displayObject.lineStyle(5, 0xFF0000);
        this.displayObject.drawRect(-50, -50, 100, 100);
        this.displayObject.pivot.set(0.5, 0.5);
        this.displayObject.position.x = (this.renderTarget.width / 2);
        this.displayObject.position.y = (this.renderTarget.height / 2);

        this.position = this.displayObject.position as Pixi.Point;
        this.lastPosition = this.position;
    }

    public update(dt: number) {
        // Handle Input
        const inputState = this.game.input.getState();
        this.direction = inputState.directionVector;
        if (inputState.shift) {
            this.speed = 0.3;
        } else {
            this.speed = 0.1;
        }

        // Calculate
        this.lastPosition = this.position;
        this.lastRotation = this.rotation;
        const clampedSpeed = clamp(this.SPEED_MAX, this.SPEED_MIN, this.speed);
        this.position.x += this.direction.x * clampedSpeed * dt;
        this.position.y += this.direction.y * clampedSpeed * dt;
        const globalPos = this.renderTarget.toGlobal(this.position);
        this.rotation = Math.atan2(inputState.mousePosition.y - globalPos.y, inputState.mousePosition.x - globalPos.x);
    }

    public draw(interp: number) {
        // Render
        this.displayObject.position.x = this.lastPosition.x + (this.position.x - this.lastPosition.x) * interp;
        this.displayObject.position.y = this.lastPosition.y + (this.position.y - this.lastPosition.y) * interp;
        const negRot: boolean = this.rotation < 0;
        const absRotation = (Math.abs(this.rotation) - Math.abs(this.lastRotation)) * interp;
        this.displayObject.rotation = this.lastRotation + (negRot ? absRotation * -1 : absRotation);
    }
}

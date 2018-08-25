// Lib imports
import { OutlineFilter } from "pixi-filters";
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

        const textures = [
            PIXI.utils.TextureCache["tile000.png"],
            PIXI.utils.TextureCache["tile001.png"],
            PIXI.utils.TextureCache["tile002.png"],
            PIXI.utils.TextureCache["tile003.png"],
            PIXI.utils.TextureCache["tile004.png"],
            PIXI.utils.TextureCache["tile005.png"],
            PIXI.utils.TextureCache["tile006.png"],
            PIXI.utils.TextureCache["tile007.png"],
            PIXI.utils.TextureCache["tile008.png"],
            PIXI.utils.TextureCache["tile009.png"],
        ];
        const textures2 = [
            PIXI.utils.TextureCache["tile010.png"],
            PIXI.utils.TextureCache["tile011.png"],
            PIXI.utils.TextureCache["tile012.png"],
            PIXI.utils.TextureCache["tile013.png"],
            PIXI.utils.TextureCache["tile014.png"],
            PIXI.utils.TextureCache["tile015.png"],
            PIXI.utils.TextureCache["tile016.png"],
            PIXI.utils.TextureCache["tile017.png"],
            PIXI.utils.TextureCache["tile018.png"],
            PIXI.utils.TextureCache["tile019.png"],
        ];
        const textures3 = [
            PIXI.utils.TextureCache["tile020.png"],
            PIXI.utils.TextureCache["tile021.png"],
            PIXI.utils.TextureCache["tile022.png"],
            PIXI.utils.TextureCache["tile023.png"],
            PIXI.utils.TextureCache["tile024.png"],
            PIXI.utils.TextureCache["tile025.png"],
            PIXI.utils.TextureCache["tile026.png"],
            PIXI.utils.TextureCache["tile027.png"],
            PIXI.utils.TextureCache["tile028.png"],
            PIXI.utils.TextureCache["tile029.png"],
        ];

        const sprite = new PIXI.extras.AnimatedSprite(textures);
        const sprite2 = new PIXI.extras.AnimatedSprite(textures2);
        const sprite3 = new PIXI.extras.AnimatedSprite(textures3);
        sprite.animationSpeed = 0.1;
        sprite2.animationSpeed = 0.1;
        sprite3.animationSpeed = 0.1;
        sprite.scale = new Pixi.Point(5, 5);
        sprite2.scale = new Pixi.Point(5, 5);
        sprite3.scale = new Pixi.Point(5, 5);
        sprite.filters = [new OutlineFilter(5, 0xFF0000)];
        sprite.play();
        sprite2.play();
        sprite3.play();
        sprite3.position.x = (this.renderTarget.width / 2 - 80);
        sprite3.position.y = (this.renderTarget.height / 2 - 80);
        sprite2.position.x = (this.renderTarget.width / 2 + 80);
        sprite2.position.y = (this.renderTarget.height / 2 + 80);
        sprite.position.x = (this.renderTarget.width / 2);
        sprite.position.y = (this.renderTarget.height / 2);
        this.renderTarget.addChild(sprite);
        this.renderTarget.addChild(sprite2);
        this.renderTarget.addChild(sprite3);

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

// Lib Imports
import * as Pixi from "pixi.js";
import { v4 as uuidv4 } from "uuid";

// Local Imports
import { Game } from "../game";
import { IWorldPosition } from "../world";

export interface IBaseObject {
    id: string;
}

export class BaseObject implements IBaseObject {
    public id: string = uuidv4(); // uuid

    constructor() {}
}

export interface IGameObject extends IBaseObject {
    game: Game;
    update(dt: number): void;
    draw(interp: number): void;
}

export class GameObject extends BaseObject implements IGameObject {
    public game: Game;

    constructor(game: Game) {
        super();
        this.game = game;
    }

    public update(dt: number) {}
    public draw(interp: number) {}
}

// export class RenderableObject extends BaseObject {
//     renderTarget: Pixi.Container
//     displayObject: Pixi.DisplayObject

//     constructor(game: Game) {
//         super(game);

//         // Init render elements
//         this.renderTarget = this.game.stage;
//         this.register();
//     }

//     register() {
//         this.renderTarget.addChild(this.displayObject)
//     }
// }

// export function Renderable<T extends Constructor>(ObjectBase: T) {
    //     return class ObjectRenderable extends ObjectBase implements IObjectRenderable {
    //         renderTarget: Pixi.Container
    //         displayObject: Pixi.DisplayObject = new Pixi.Graphics();

    //         constructor(...args: any[]) {
    //             super(...args);
    //             this.register();
    //         }

    //         register() {
    //             // this.displayObject.beginFill(0xFFFF00);
    //             // this.displayObject.lineStyle(5, 0xFF0000);
    //             // this.displayObject.position.x = (this.renderTarget.width / 2) - (this.displayObject.width / 2);
    //             // this.displayObject.position.y = (this.renderTarget.height / 2) - (this.displayObject.height / 2);
    //             // this.displayObject.drawRect(0, 0, 1, 1);
    //             this.renderTarget.addChild(this.displayObject)
    //         }
    //     }
    // }

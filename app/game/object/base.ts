// Lib Imports
import * as Pixi from 'pixi.js';
import { v4 as uuidv4 } from 'uuid';

// Local Imports
import { IGameObject } from "../object";
import { Game } from "../game";
import { IWorldPosition } from '../world';


export class BaseObject {
    id: string = uuidv4(); // uuid

    constructor() {}

    update(dt: number) {}
}

export class GameObject extends BaseObject implements IGameObject {
    game: Game
    position: Pixi.Point;

    constructor(game: Game) {
        super()
        this.game = game;
    }

    // render() function as well with DT support?
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


//export function Renderable<T extends Constructor>(ObjectBase: T) {
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

    
// Lib Imports
import * as Pixi from "pixi.js";

// Local Imports
import { IWorldPosition, RandomWorldPosition } from "../world";
import { Damageable, Movable, Renderable, MouseAware } from "./mixins";
import { GameObject } from "./base";
import { IInputState } from "../../state/reducers/input";
import { Game } from "../game";
import { IInputManagerState } from "../input";

// Mixins
const MouseAwareMovableDamageableRenderableGameObject = MouseAware(Movable(Damageable(Renderable(GameObject))));


export class Player extends MouseAwareMovableDamageableRenderableGameObject {
    constructor(game: Game) {
        super(game);
        this.init();
    }

    init() {
        this.displayObject.beginFill(0xFFFF00);
        this.displayObject.lineStyle(1, 0xFF0000);
        this.displayObject.pivot.set(0.5, 0.5);
        this.displayObject.position.x = (this.renderTarget.width / 2);
        this.displayObject.position.y = (this.renderTarget.height / 2);
        this.displayObject.drawRect(-10, -10, 20, 20);

        this.position = this.displayObject.position as Pixi.Point;
    }

    update(dt: number) {
        // Prepare state
        let state = this.game.input.getState();
        this.direction = state.directionVector;
        if (state.shift) {
            this.speed = 0.3;
        } else {
            this.speed = 0.1;
        }
        let globalPos = this.renderTarget.toGlobal(this.position);
        this.angle = Math.atan2(state.mousePosition.y - globalPos.y, state.mousePosition.x - globalPos.x);
        
        // Compute
        super.update(dt);

        // Update
        this.displayObject.position = new Pixi.Point(this.position.x, this.position.y);
        this.displayObject.rotation = this.angle;
    }
}






//console.log(this.displayObject.toGlobal(this.displayObject.position));
    
    // // Mixin Moveable
    // position: IWorldPosition;
    // facing: number;
    // move: (dt: number, input: IInputManagerState) => void

    // // Mixin Renderable
    // displayObject: Pixi.Graphics;

// Modify composed class
// let proto = Player.prototype;
// proto.onConstruct = () => {
//     //debugger;
//     //proto.renderTarget = this.game.stage;
// }
// proto.update = (dt: number) => {
//     proto.move(dt, proto.game.input.getState());
//     proto.displayObject.position = new Pixi.Point(proto.position.x, proto.position.y);
// }

//this.position.r = Math.atan2(input.mousePosition.y - this.position.y, input.mousePosition.x - this.position.x) // * (180 / Math.PI);

//displayObject: Pixi.Graphics = new Pixi.Graphics();
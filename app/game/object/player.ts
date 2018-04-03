// Lib Imports
import * as Pixi from "pixi.js";

// Local Imports
import { IWorldPosition, RandomWorldPosition } from "../world";
import { Damagable, Moveable, Renderable } from "./mixins";
import { BaseObject } from "./base";
import { applyMixins } from "../util";
import { IInputState } from "../../state/reducers/input";
import { Game } from "../game";

export class Player extends BaseObject implements Moveable, Damagable, Renderable {

    constructor(game: Game) {
        super(game);
        this.register();
    }

    update(dt: number) {
        this.move(dt, this.game.input.getState());
        //debugger;
        this.displayObject.position = new Pixi.Point(this.position.x, this.position.y);
        //this.heal();
    }

    // Moveable
    position: IWorldPosition = RandomWorldPosition();
    speed: number = 0.5;
    SPEED_MAX: number = 5;
    SPEED_MIN: number = 0;
    move: (dt: number, input: IInputState) => void

    // Damagable
    health: number
    HEALTH_MAX: number
    HEALTH_MIN: number
    damage: (amount: number) => void
    heal: (amount: number) => void
    clampHealth: () => void

    // Renderable
    renderTarget: Pixi.Container = this.game.stage;
    displayObject: Pixi.Graphics = new Pixi.Graphics();
    register: () => void
}

applyMixins(Player, [Moveable, Damagable, Renderable]);

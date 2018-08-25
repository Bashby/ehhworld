// Lib Imports
import * as Pixi from "pixi.js";

// Local Imports
import { IInputState } from "../state/reducers/input";
import { Game } from "./game";
import { UnitVector, UnitVectorValue } from "./util";

export interface IInputManagerState extends IInputState {
    directionVector: UnitVector;
    mousePosition: Pixi.Point;
}

export class InputManager {
    public game: Game;
    public inputState: IInputState;
    public directionVector: UnitVector;

    constructor(game: Game) {
        this.game = game;
        this.inputState = {
            left: false,
            right: false,
            up: false,
            down: false,
            shift: false,
        };
        this.directionVector = {
            x: UnitVectorValue.Zero,
            y: UnitVectorValue.Zero,
        };
    }

    public getMousePosition(): Pixi.Point {
        return this.game.renderer.plugins.interaction.mouse.global;
    }

    public setInputState(newState: IInputState): void {
        this.inputState = newState;

        // Derive
        let x = 0, y = 0;
        if (this.inputState.left) {
            x -= 1;
        }
        if (this.inputState.right) {
            x += 1;
        }
        if (this.inputState.up) {
            y -= 1;
        }
        if (this.inputState.down) {
            y += 1;
        }
        this.directionVector = {x, y};
    }

    public getState(): IInputManagerState {
        return {
            ...this.inputState,
            directionVector: this.directionVector,
            mousePosition: this.getMousePosition(),
        };
    }
}

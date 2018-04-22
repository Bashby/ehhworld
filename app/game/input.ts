// Lib Imports
import * as Pixi from "pixi.js";

// Local Imports
import { IInputState } from "../state/reducers/input";
import { Game } from "./game";
import { SimpleDirectionVector, DirectionVectorValue } from "./util";


export class InputManager {
    inputState: IInputState = {
        left: false,
        right: false,
        up: false,
        down: false,
        shift: false,
    }
    directionVector: SimpleDirectionVector = { x: DirectionVectorValue.Zero, y: DirectionVectorValue.Zero }
    getMousePosition: () => Pixi.Point

    constructor(game: Game) {
        this.getMousePosition = () => game.renderer.plugins.interaction.mouse.global;
    }

    setInputState(newState: IInputState) {
        this.inputState = newState;
        this.computeState();
    }

    computeState() {
        let x = 0
        let y = 0
        if (this.inputState.left) {
            x -= 1
        }
        if (this.inputState.right) {
            x += 1
        }
        if (this.inputState.up) {
            y -= 1
        }
        if (this.inputState.down) {
            y += 1
        }
        this.directionVector = {x, y};
    }

    getState(): IInputManagerState {
        return {
            ...this.inputState,
            directionVector: this.directionVector,
            mousePosition: this.getMousePosition(),
        }
    }
}

export interface IInputManagerState extends IInputState {
    directionVector: SimpleDirectionVector
    mousePosition: Pixi.Point
}
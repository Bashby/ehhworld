import { IInputState } from "../state/reducers/input";

export class InputManager {
    inputState: IInputState = {
        left: false,
        right: false,
        up: false,
        down: false,
        shift: false,
    }
    directionVector: SimpleVector = {x: 0, y: 0}

    constructor() {}

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
            directionVector: this.directionVector
        }
    }
}

interface SimpleVector {
    x: number
    y: number
}

export interface IInputManagerState extends IInputState {
    directionVector: SimpleVector
}
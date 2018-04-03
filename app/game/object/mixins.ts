// Lib Imports
import * as Pixi from "pixi.js";

// Local Imports
import { IWorldPosition, RandomWorldPosition } from "../world";
import { IInputState } from "../../state/reducers/input";
import { clamp } from "../util";
import { IInputManagerState } from "../input";


export class Moveable {
    position: IWorldPosition;
    speed: number;
    SPEED_MAX: number;
    SPEED_MIN: number;

    move(dt: number, input: IInputManagerState) {
        let clampedSpeed = clamp(this.SPEED_MAX, this.SPEED_MIN, this.speed);
        this.position.x += input.directionVector.x * clampedSpeed * dt;
        this.position.y += input.directionVector.y * clampedSpeed * dt;
        console.log('position: ' + this.position.x, this.position.y);
    }
}

export class Damagable {
    health: number = 100;
    HEALTH_MAX: number = 100;
    HEALTH_MIN: number = 0;

    damage(amount: number) {
        this.health -= amount;
        this.clampHealth();
    }

    heal(amount: number) {
        this.health += amount;
        this.clampHealth();
    }

    clampHealth() {
        this.health = clamp(this.HEALTH_MAX, this.HEALTH_MIN, this.health);
    }
}

export class Renderable {
    renderTarget: Pixi.Container
    displayObject: Pixi.Graphics

    register() {
        //debugger;
        this.displayObject.beginFill(0xFFFF00);
        this.displayObject.lineStyle(5, 0xFF0000);
		this.displayObject.position.x = (this.renderTarget.width / 2) - (this.displayObject.width / 2);
		this.displayObject.position.y = (this.renderTarget.height / 2) - (this.displayObject.height / 2);
		this.displayObject.drawRect(0, 0, 1, 1);
        this.renderTarget.addChild(this.displayObject)
    }
}

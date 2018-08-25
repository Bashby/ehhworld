// // Lib Imports
// import * as Pixi from "pixi.js";

// // Local Imports
// import { IWorldPosition, RandomWorldPosition } from "../world";
// import { IInputState } from "../../state/reducers/input";
// import { clamp, SimpleDirectionVector, DirectionVectorValue } from "../util";
// import { IInputManagerState } from "../input";
// import { Constructor } from "./util";
// import { IGameObject } from "../object";


// // Mixins
// export function Movable<T extends Constructor<IGameObject>>(ObjectBase: T) {
//     return class ObjectMovable extends ObjectBase {
//         lastPosition: Pixi.Point;
//         position: Pixi.Point;
//         speed: number = 0.1;
//         direction: SimpleDirectionVector = { x: DirectionVectorValue.Zero, y: DirectionVectorValue.Zero }
//         angle: number = 0;
//         SPEED_MAX: number = 1;
//         SPEED_MIN: number = 0;
        

//         constructor(...args: any[]) {
//             super(...args);
//         }

//         update(dt: number) {
//             super.update(dt);

//             this.move(dt)
//         }

//         move(dt: number) {
//             let clampedSpeed = clamp(this.SPEED_MAX, this.SPEED_MIN, this.speed);
//             this.lastPosition = this.position;
//             this.position.x += this.direction.x * clampedSpeed * dt;
//             this.position.y += this.direction.y * clampedSpeed * dt;
            
            
//             // if (Math.random() > 0.99) {
//             //     console.log(
//             //         'position: ' +
//             //         this.position.x,
//             //         this.position.y,
//             //         this.angle,
//             //     );
//             // }
//         }
//     }
// }

// // export function Unmovable<T extends Constructor<IGameObject>>(ObjectBase: T) {
// //     return class ObjectMovable extends ObjectBase {
// //         position: IWorldPosition;
// //     }
// // }

// export function Damageable<T extends Constructor<IGameObject>>(ObjectBase: T) {
//     return class ObjectDamageable extends ObjectBase {
//         health: number = 100;
//         HEALTH_MAX: number = 100;
//         HEALTH_MIN: number = 0;

//         damage(amount: number) {
//             this.health -= amount;
//             this.clampHealth();
//         }

//         heal(amount: number) {
//             this.health += amount;
//             this.clampHealth();
//         }

//         clampHealth() {
//             this.health = clamp(this.HEALTH_MAX, this.HEALTH_MIN, this.health);
//         }
//     }
// }

// export function Renderable<T extends Constructor<IGameObject>>(ObjectBase: T) {
//     return class ObjectRenderable extends ObjectBase {
//         renderTarget: Pixi.Container = this.game.stage;
//         displayObject: Pixi.Graphics = new Pixi.Graphics();

//         constructor(...args: any[]) {
//             super(...args);
//             this.register();
//         }

//         register() {
//             this.renderTarget.addChild(this.displayObject)
//         }
//     }
// }

// export function MouseAware<T extends Constructor<IGameObject>>(ObjectBase: T) {
//     return class ObjectMouseAware extends ObjectBase {
//         mouseData: MouseData

//         constructor(...args: any[]) {
//             super(...args);
//         }

//         update(dt: number) {
//             super.update(dt);
//         }
//     }
// }

// type MouseData = {
//     screenPosition: Pixi.Point, // Screen position of mouse
//     worldPosition: Pixi.Point, // World position of mouse
//     distance: number, // Distance from me to mouse
//     angle: number // Angle from me to mouse
// }

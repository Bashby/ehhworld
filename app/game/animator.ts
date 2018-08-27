// Lib imports
import * as PIXI from "pixi.js";

// Local imports

export interface IAnimationFrameConfig {
    name: string;
    mirrored?: boolean;
}

export interface IAnimationConfig {
    name: string;
    frames: IAnimationFrameConfig[];
    loop: boolean;

    root?: boolean; // If true, fall back to this animation when any non-looped animation ends
    offset?: number; // Start playing the animation from this offset
}

interface IAnimation {
    name: string;
    sprites: PIXI.Sprite[];
    index: number;
    loop: boolean;
    offset: number;
}

export interface IAnimatorConfig {
    animations: IAnimationConfig[];
}

export default class Animator {
    public animations: { [key: string]: IAnimation } = {};
    public currentAnimation: IAnimation;
    private running: boolean = true;
    private rootAnimation: IAnimation;

    constructor(config: IAnimatorConfig) {
        if (!config.animations.length) {
            return;
        }

        // Parse
        config.animations.forEach((animation) => {
            const { name, loop, offset, frames, root} = animation;
            const sprites: PIXI.Sprite[] = frames.map((frame) => {
                const sprite = new PIXI.Sprite(PIXI.utils.TextureCache[name]);
                if (frame.mirrored) {
                    sprite.scale.x = -1;
                }
                return sprite;
            });
            this.animations[name] = {
                name,
                sprites,
                index: 0,
                loop,
                offset: offset || 0,
            };
            if (root) {
                this.rootAnimation = this.animations[name];
            }
        });
        if (!this.rootAnimation) {
            this.rootAnimation = this.animations[0]; // Note: Default to first animation when no defined root animation
        }
    }

    public pause(): void {
        this.running = false;
    }

    public unpause(): void {
        this.running = true;
    }

    public getAllAnimations(): string[] {
        return Object.values(this.animations).map((animation) => animation.name);
    }

    public setAnimation(name: string) {
        if (name in this.animations) {
            this.currentAnimation = this.animations[name];
            this.currentAnimation.index = this.currentAnimation.offset;
        }
    }

    public getFrame(): PIXI.Sprite {
        if (this.running) {
            this.stepAnimationFrame();
        }

        return this.currentAnimation.sprites[this.currentAnimation.index];
    }

    private stepAnimationFrame() {
        // Tick
        this.currentAnimation.index += 1;

        // Handle looping
        if (this.currentAnimation.index >= this.currentAnimation.sprites.length) {
            this.currentAnimation.index = 0;
            if (!this.currentAnimation.loop) {
                this.setAnimation(this.rootAnimation.name);
            }
        }
    }
}

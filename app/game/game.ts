// Lib Imports
import MainLoop from "mainloop.js";
import * as Pixi from "pixi.js";

// Local imports
import { Hub } from "../network";
import { InputManager } from "./input";
import { ObjectManager } from "./object";
import { SoundManager } from "./sound";
import { TextureManager } from "./texture";
import { DEBUG_MODE, RENDER_FPS_TARGET, SERVER_URL } from "./util/constant";
import { Viewport } from "./viewport";

export class Game {
    // Rendering
    public renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    public stage: Pixi.Container;
    public fpsMeterView: HTMLDivElement;

    // Sub-system Managers
    public network: Hub;
    public objects: ObjectManager;
    public input: InputManager;
    public viewport: Viewport;
    public sound: SoundManager;
    public texture: TextureManager;

    // Game state
    public debug: boolean = DEBUG_MODE;

    // Game loop
    public loop: MainLoop;
    public targetFPS: number = RENDER_FPS_TARGET;
    public timeStep: number = 1000 / this.targetFPS;

    constructor(stage: Pixi.Container) {
        this.stage = stage;

        // Init Sub-systems
        this.objects = new ObjectManager(this);
        this.input = new InputManager(this);
        this.sound = new SoundManager();
        this.texture = new TextureManager();
        this.network = new Hub();
        this.network.connect(SERVER_URL);

        // Setup game loop
        this.loop = MainLoop
            .setSimulationTimestep(this.timeStep)
            .setUpdate(this.update.bind(this))
            .setDraw(this.draw.bind(this))
            .setEnd(this.end.bind(this));
    }

    public setRenderer(renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer) {
        this.renderer = renderer;
    }

    public setFpsMeterView(view: HTMLDivElement) {
        this.fpsMeterView = view;
    }

    public start() {
        this.texture.init(this.loopStart.bind(this));
    }

    public loopStart() {
        this.loop.start();
    }

    public stop() {
        this.loop.stop();
    }

    public update(dt: number) {
        this.objects.update(dt);
    }

    public draw(interp: number) {
        this.objects.draw(interp);
        this.renderer.render(this.stage);
    }

    public end(fps: number, panic: boolean) {
        if (this.fpsMeterView) {
            this.fpsMeterView.textContent = Math.round(fps) + " FPS";
        }
        if (panic) {
            const discardedTime = Math.round(MainLoop.resetFrameDelta());
            // tslint:disable-next-line:no-console
            console.warn("Main loop panicked. Discarding " + discardedTime + "ms");
        }
    }
}

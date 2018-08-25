// Lib Imports
import * as MainLoop from "mainloop.js";
import * as Pixi from "pixi.js";

// Local Imports
import { Hub } from "../network";
import { IInputState } from "../state/reducers/input";
import { config, SERVER_URL } from "./config";
import { InputManager } from "./input";
import { ObjectManager } from "./object";
import { Player } from "./object/player";
import { SoundManager } from "./sound";
import { TextureManager } from "./texture";
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
	public debug: boolean = config.get("debug");

	// Game loop
	public loop: MainLoop;
	public targetFPS: number = config.get("render.fps");
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
		if (!this.renderer) {
			console.error("No renderer defined for game!");
		} else {
			this.texture.init(this.loopStart.bind(this));
			// this.loop.start();
			// this.running = true
			// requestAnimationFrame(this.tick.bind(this));
		}
	}

	public loopStart() {
		this.objects.debug();
		this.loop.start();
	}

	public stop() {
		this.loop.stop();
	}

	// restart() {
	// 	this.shouldRestart = true;
	// 	this.stop();
	// }

	// tick(currentFrameTime) {
	// 	if (this.running) {
	// 		// Show FPS
	// 		this.fpsMeter.tickStart();

	// 		// Calculate delta time
	// 		this.deltaTime = this.deltaTime + (currentFrameTime - this.lastFrameTime);

	// 		// Save current frame time
	// 		this.lastFrameTime = currentFrameTime;

	// 		// Update game state using fixed timestep
	// 		while (this.deltaTime >= this.MS_PER_UPDATE) {
	// 			this.deltaTime = this.deltaTime - this.MS_PER_UPDATE;
	// 			this.update(this.MS_PER_UPDATE);
	// 		}

	// 		// Render game
	// 		this.renderer.render(this.stage);

	// 		// Show FPS
	// 		this.fpsMeter.tick();

	// 		// Request next frame
	// 		requestAnimationFrame(this.tick.bind(this));
	// 	} else if (this.shouldRestart) {
	// 		this.shouldRestart = false;
	// 		this.start();
	// 	}
	// }

	public update(dt: number) {
		this.objects.step(dt);
	}

	public draw(interp: number) {
		this.objects.draw(interp);
		this.renderer.render(this.stage);
	}

	public end(fps: number, panic: boolean) {
		// console.log(this.loop.getMaxAllowedFPS(), this.loop.getSimulationTimestep());
		if (this.fpsMeterView) {
			this.fpsMeterView.textContent = Math.round(fps) + " FPS";
		}
		if (panic) {
			const discardedTime = Math.round(MainLoop.resetFrameDelta());
			console.warn("Main loop panicked. Discarding " + discardedTime + "ms");
		}
	}
}

// Lib Imports
require('fpsmeter');
import * as Pixi from "pixi.js";

// Local Imports
import { Hub } from '../network';
import { ObjectManager } from './object';
import { IInputState } from "../state/reducers/input";
import { InputManager } from "./input";
import { Player } from "./object/player";
import { Viewport } from "./viewport";

// Constants TODO: Replace with a config system
const SERVER_HOST: string = 'localhost';
const SERVER_PROTOCOL: string = 'ws';
const SERVER_PORT: number = 8081
const SERVER_PATH: string = 'ws';
const SERVER_CONNECT_PATH: string = `${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}/${SERVER_PATH}`


export class Game {
	// Rendering
	renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
	stage: Pixi.Container;
	fpsMeter: FPSMeter = new FPSMeter();

	// Sub-system Managers
	network: Hub
	objects: ObjectManager
	input: InputManager
	viewport: Viewport

	// Game state
	running: boolean = false;
	shouldRestart: boolean = false;
	debug: boolean = true;

	// Game loop vars
	now: number;
	deltaTime: number = 0;
	lastFrameTime: number = performance.now();
	// FPS: number = 60.0;
	// step: number = 1.0 / this.FPS;
	MS_PER_UPDATE: number = 10.0;

	constructor(stage: Pixi.Container) {
		this.stage = stage;

		// Init Sub-systems
		this.objects = new ObjectManager(this);
		this.input = new InputManager(this);
		this.network = new Hub()
		this.network.connect(SERVER_CONNECT_PATH);
	}

	setRenderer(renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer) {
		this.renderer = renderer;
	}

	start() {
		if (!this.renderer) {
			console.error("No renderer defined for game!");
		} else {
			this.running = true
			requestAnimationFrame(this.tick.bind(this));
		}
	}

	stop() {
		// TODO: Need to blank state or something here
		this.running = false
	}

	restart() {
		this.shouldRestart = true;
		this.stop();
	}

	tick(currentFrameTime) {
		if (this.running) {
			// Show FPS
			this.fpsMeter.tickStart();

			// Calculate delta time
			this.deltaTime = this.deltaTime + (currentFrameTime - this.lastFrameTime);

			// Save current frame time
			this.lastFrameTime = currentFrameTime;

			// Update game state using fixed timestep
			while (this.deltaTime >= this.MS_PER_UPDATE) {
				this.deltaTime = this.deltaTime - this.MS_PER_UPDATE;
				this.update(this.MS_PER_UPDATE);
			}

			// Render game
			this.renderer.render(this.stage);

			// Show FPS
			this.fpsMeter.tick();

			// Request next frame
			requestAnimationFrame(this.tick.bind(this));
		} else if (this.shouldRestart) {
			this.shouldRestart = false;
			this.start();
		}
	}

	update(dt: number) {
		this.objects.step(dt);
	}
}

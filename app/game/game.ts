// Lib Imports
import * as Pixi from 'pixi.js';
import * as MainLoop from 'mainloop.js';

// Local Imports
import { config, SERVER_URL } from './config';
import { Hub } from '../network';
import { ObjectManager } from './object';
import { IInputState } from '../state/reducers/input';
import { InputManager } from './input';
import { SoundManager } from './sound';
import { Player } from './object/player';
import { Viewport } from './viewport';
import { TextureManager } from './texture';


export class Game {
	// Rendering
	renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
	stage: Pixi.Container;
	fpsMeterView: HTMLDivElement;

	// Sub-system Managers
	network: Hub
	objects: ObjectManager
	input: InputManager
	viewport: Viewport
	sound: SoundManager
	texture: TextureManager

	// Game state
	debug: boolean = config.get('debug');

	// Game loop
	loop: MainLoop
	targetFPS: number = config.get('render.fps');
	timeStep: number = 1000 / this.targetFPS;

	constructor(stage: Pixi.Container) {
		this.stage = stage; 

		// Init Sub-systems
		this.objects = new ObjectManager(this);
		this.input = new InputManager(this);
		this.sound = new SoundManager();
		this.texture = new TextureManager();
		this.network = new Hub()
		this.network.connect(SERVER_URL);

		// Setup game loop
		this.loop = MainLoop
			.setSimulationTimestep(this.timeStep)
			.setUpdate(this.update.bind(this))
			.setDraw(this.draw.bind(this))
			.setEnd(this.end.bind(this));
	}

	setRenderer(renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer) {
		this.renderer = renderer;
	}

	setFpsMeterView(view: HTMLDivElement) {
		this.fpsMeterView = view;
	}

	start() {
		if (!this.renderer) {
			console.error("No renderer defined for game!");
		} else {
			this.texture.init(this.loopStart.bind(this));
			//this.loop.start();
			// this.running = true
			// requestAnimationFrame(this.tick.bind(this));
		}
	}

	loopStart() {
		this.objects.debug();
		this.loop.start();
	}

	stop() {
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

	update(dt: number) {
		this.objects.step(dt);
	}

	draw(interp: number) {
		this.objects.draw(interp);
		this.renderer.render(this.stage);
	}

	end(fps: number, panic: boolean) {
		//console.log(this.loop.getMaxAllowedFPS(), this.loop.getSimulationTimestep());
		if (this.fpsMeterView) {
			this.fpsMeterView.textContent = Math.round(fps) + ' FPS';
		}
		if (panic) {
			var discardedTime = Math.round(MainLoop.resetFrameDelta());
			console.warn('Main loop panicked. Discarding ' + discardedTime + 'ms');
		}
	}
}

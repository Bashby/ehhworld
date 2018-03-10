// Lib Imports
require('fpsmeter');

import * as Pixi from "pixi.js";

// Local Imports


export class Game {
	renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
	stage: Pixi.Container;
	
	running: boolean = false;
	shouldRestart: boolean = false;

	now: number;
	deltaTime: number = 0;
	lastFrameTime: number = performance.now();
	fps: number = 60.0;
	step: number = 1.0 / this.fps;
	MS_PER_UPDATE: number = 10.0;


	fpsMeter: FPSMeter;

	constructor(stage: Pixi.Container) {
		this.stage = stage;
		
		// Debug
		this.debugInit();
	}

	debugInit() {
		// Start a FPS monitor
		this.fpsMeter = new FPSMeter();

		// Put some stuff into the stage
		var background = new PIXI.Graphics();  
		background.beginFill(0x123456);  
		background.drawRect(0,0,1920,1080);  
		background.endFill();  
		this.stage.addChild(background);

		var square = new PIXI.Graphics();
		square.beginFill(0xFFFF00);
		square.lineStyle(5, 0xFF0000);
		square.drawRect(2.5, 2.5, 250, 250);
		this.stage.addChild(square);

		var basicText = new PIXI.Text('Basic text testing. The quick brown fox jumped over the lazy dog');
		basicText.x = 50;
		basicText.y = 100;
		this.stage.addChild(basicText);

		var square2 = new PIXI.Graphics();
		square2.beginFill(0xFFFF00);
		square2.lineStyle(5, 0xFFF00F);
		square2.position.x = (this.stage.width / 2) - (square2.width / 2);
		square2.position.y = (this.stage.height / 2) - (square2.height / 2);
		square2.drawRect(0, 0, 1, 1);
		this.stage.addChild(square2);
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
	}
}

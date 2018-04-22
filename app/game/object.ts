// Lib Imports
import * as Pixi from 'pixi.js';
import { remove } from 'lodash';

// Local Imports
import { IWorldPosition, RandomWorldPosition } from './world';
import { Game } from './game';
import { Player } from './object/player';
import { Viewport } from './viewport';

export interface IGameObject {
    id: string
    game: Game
    position: Pixi.Point
    update(dt: number): void
}

export class ObjectManager {
    children: IGameObject[] = [];
    game: Game;

    constructor(game: Game) {
        this.game = game;

        if (this.game.debug) {
            this.debug()
        }
    }

    debug() {
        this.createPlayer();
        for (let i of Array(100).keys()) {
            console.log(i);
        }
    }

    step(dt: number) {
        this.children.forEach((child) => child.update(dt))
        if (Math.random() > 0.99) {
            // console.info(
            //     this.game.stage.width,
            //     this.game.stage.height,
            //     this.game.stage.position.x,
            //     this.game.stage.position.y,
            //     this.game.stage.scale.x,
            //     this.game.stage.scale.y,
            // );
            // console.log(
            //     "Stage Size:", this.game.stage.width, this.game.stage.height, this.game.stage.scale.x, this.game.stage.scale.y
            //     + "\nRenderer Size: ", this.game.renderer.width, this.game.renderer.height
            // );
        }
    }

    addObject(object: IGameObject): string {
        this.children.push(object);
        return object.id;
    }

    removeObject(objectId: string): boolean {
        const removed = remove(this.children, (item) => item.id === objectId); // TODO: This seems.... not performant
        return removed.length >= 1;
    }

    createPlayer() {
        let player = new Player(this.game);
        this.addObject(player);
        return player;
    }

    // createViewport() {
    //     let viewport = new Viewport({
    //         screenWidth: window.innerWidth,
    //         screenHeight: window.innerHeight,
    //         worldWidth: 5000,
    //         worldHeight: 5000
    //     });
    //     this.addObject(viewport);
    //     return viewport;
    // }
}



// debugInit() {
//     // Put some stuff into the stage
//     // var background = new PIXI.Graphics();  
//     // background.beginFill(0x123456);  
//     // background.drawRect(0,0,100,100);  
//     // background.endFill();  
//     // this.stage.addChild(background);

//     // var square = new PIXI.Graphics();
//     // square.beginFill(0xFFFF00);
//     // square.lineStyle(5, 0xFF0000);
//     // square.drawRect(2.5, 2.5, 250, 250);
//     // this.stage.addChild(square);

//     var basicText = new PIXI.Text('Basic text testing. The quick brown fox jumped over the lazy dog');
//     basicText.x = 5;
//     basicText.y = 5;
//     //this.stage.addChild(basicText);

//     var square2 = new PIXI.Graphics();
//     square2.beginFill(0xFFFF00);
//     square2.lineStyle(5, 0xFFF00F);
//     square2.position.x = (this.stage.width / 2) - (square2.width / 2);
//     square2.position.y = (this.stage.height / 2) - (square2.height / 2);
//     square2.drawRect(0, 0, 1, 1);
//     //this.stage.addChild(square2);

//     // Simulate a player object
//     //this.objects.createPlayer();

//     console.info(this.stage.scale.x, this.stage.scale.y, this.stage.position.x, this.stage.position.y);
// }
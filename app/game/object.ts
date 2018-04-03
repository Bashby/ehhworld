// Lib Imports
import { remove } from 'lodash';
// Local Imports
import { IWorldPosition, RandomWorldPosition } from './world';
import { Game } from './game';
import { Player } from './object/player';
import { applyMixins } from './util';


export class ObjectManager {
    children: IGameObject[] = [];
    game: Game;

    constructor(game: Game) {
        this.game = game;
    }

    step(dt: number) {
        this.children.forEach((child) => child.update(dt))
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
}

export interface IGameObject {
    id: string
    update(dt: number): void
}


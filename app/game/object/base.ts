// Lib Imports
import { v4 as uuidv4 } from 'uuid';

// Local Imports
import { IGameObject } from "../object";
import { Game } from "../game";

export class BaseObject implements IGameObject {
    id: string = uuidv4(); // uuid
    game: Game
    constructor(game: Game) {
        this.game = game;
    }
    update(dt: number) {}
}

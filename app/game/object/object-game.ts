// Local imports
import { Game } from "../game";
import { BaseObject, IBaseObject } from "./object-base";

export interface IGameObject extends IBaseObject {
    game: Game;
    update(dt: number): void;
    draw(interp: number): void;
}

export class GameObject extends BaseObject implements IGameObject {
    public game: Game;

    constructor(game: Game) {
        super();
        this.game = game;
    }

    public update(dt: number) {}
    public draw(interp: number) {}
}

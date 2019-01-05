// Lib imports

// Local imports
import { Game } from "./game";
import { IGameObject } from "./object/object-game";
import { Player } from "./object/object-player";
import { UUID } from "./util/types";

export class ObjectManager {
    public objects: { [key: string]: IGameObject; } = {};
    public game: Game;

    constructor(game: Game) {
        this.game = game;
    }

    public update(dt: number) {
        Object.values(this.objects).forEach((obj) => obj.update(dt));
    }

    public draw(interp: number) {
        Object.values(this.objects).forEach((obj) => obj.draw(interp));
    }

    public addObject(object: IGameObject): UUID {
        this.objects[object.id] = object;
        return object.id;
    }

    public removeObject(objectId: UUID): boolean {
        return delete this.objects[objectId];
    }

    public createPlayer() {
        const player = new Player(this.game);
        this.addObject(player);
        return player;
    }
}

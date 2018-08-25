// // Lib imports
// import { Record } from 'immutable';

// // Local imports

// interface IWorldPositionParams {
// 	x: number
// 	y: number
// 	d: number // 0 - 359 degrees; 0 is facing north
// }

// const worldPositionDefaults = {
// 	x: 0.0,
// 	y: 0.0,
// 	d: 0.0
// }

// export class WorldPositionRecord extends Record(worldPositionDefaults) implements IWorldPositionParams {
// 	constructor(params: IWorldPositionParams) {
// 		super(params);
// 	}

// 	get<T extends keyof IWorldPositionParams>(value: T): IWorldPositionParams[T] {
// 		return super.get(value)
// 	}

// 	set<
    //     K extends keyof IWorldPositionParams,
    //     V extends IWorldPositionParams[K]
    // >(key: K, value: V): IWorldPositionParams {
// 		return super.set(key, value)
// 	}
// }

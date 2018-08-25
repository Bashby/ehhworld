export interface IWorldPosition {
	x: number;
	y: number;
	r: number; // radians
}

export function RandomWorldPosition(): IWorldPosition {
    return {x: 0, y: 0, r: 0};
}

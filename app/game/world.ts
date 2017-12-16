export interface IWorldPosition {
	x: number
	y: number
	d: number // 0 - 359 degrees; 0 is facing north
}

export function RandomWorldPosition(): IWorldPosition {
    return {x: 0, y: 0, d: 0}
}

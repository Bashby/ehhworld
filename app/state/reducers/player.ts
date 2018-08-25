// Lib Imports
import { fromJS, Map } from "immutable";
import { reducerWithInitialState } from "typescript-fsa-reducers";

// Local Imports
import { getRandomInt } from "../../game/util";
import { IWorldPosition, RandomWorldPosition } from "../../game/world";
import { PlayerActionCreators } from "../actions/player";

// Player state interface
export interface IPlayerState {
	name: string;
	authenticated: boolean;
	level: number;
	position: IWorldPosition;
}

// Player initial state
export const PLAYER_INITIAL_STATE: IPlayerState = {
	name: "Anon" + getRandomInt(100, 999),
	authenticated: false,
	level: 0,
	position: RandomWorldPosition(),
};

// Player state reducer
export const playerReducer = reducerWithInitialState(PLAYER_INITIAL_STATE)
	.case(PlayerActionCreators.updateName, (state, payload) => {
		return {
			...state,
			name: payload,
		};
	})
	.case(PlayerActionCreators.updateAuthenticated, (state, payload) => {
		return {
			...state,
			authenticated: payload,
		};
	})
	.case(PlayerActionCreators.updateLevel, (state, payload) => {
		return {
			...state,
			level: payload,
		};
	})
	.case(PlayerActionCreators.updatePosition, (state, payload) => {
		return {
			...state,
			position: fromJS(state.position).merge(payload),
		};
	})
	.build();

// Lib Imports
import { reducerWithInitialState } from "typescript-fsa-reducers";

// Local Imports
import { InputActionCreators } from "../actions/input";

// Input state interface
export interface IInputState {
	left: boolean;
	right: boolean;
	up: boolean;
	down: boolean;
	shift: boolean;
}

// Input initial state
export const INPUT_INITIAL_STATE: IInputState = {
	left: false,
	right: false,
	up: false,
	down: false,
	shift: false,
};

// Input state reducer
export const inputReducer = reducerWithInitialState(INPUT_INITIAL_STATE)
	.case(InputActionCreators.setLeft, (state, payload) => {
		return {
			...state,
			left: payload,
		};
	})
	.case(InputActionCreators.setRight, (state, payload) => {
		return {
			...state,
			right: payload,
		};
	})
	.case(InputActionCreators.setUp, (state, payload) => {
		return {
			...state,
			up: payload,
		};
	})
	.case(InputActionCreators.setDown, (state, payload) => {
		return {
			...state,
			down: payload,
		};
	})
	.case(InputActionCreators.setShift, (state, payload) => {
		return {
			...state,
			shift: payload,
		};
	})
	.build();

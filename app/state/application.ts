// Lib Imports
import { Reducer, combineReducers } from "redux";

// Local Imports
import { IPlayerState, PLAYER_INITIAL_STATE, playerReducer } from "./reducers/player";
import { IInventoryState, INVENTORY_INITIAL_STATE, inventoryReducer } from "./reducers/inventory";
import { IUiState, UI_INITIAL_STATE, uiReducer } from "./reducers/ui";


// Entire Application state interface
export interface IApplicationState {
	playerState: IPlayerState
	inventoryState: IInventoryState
	uiState: IUiState
	// minimapState: IMinimapState
};

// Entire Application initial state
export const APPLICATION_INITIAL_STATE: IApplicationState = {
	playerState: PLAYER_INITIAL_STATE,
	inventoryState: INVENTORY_INITIAL_STATE,
	uiState: UI_INITIAL_STATE,
	// minimapState: MINIMAP_INITIAL_STATE,
}

// Entire Application state reducer
export const applicationReducer: Reducer<IApplicationState> = combineReducers<IApplicationState>({
	playerState: playerReducer,
	inventoryState: inventoryReducer,
	uiState: uiReducer,
	// minimapState: minimapReducer
});
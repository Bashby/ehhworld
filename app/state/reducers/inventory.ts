// Lib Imports
import { reducerWithInitialState } from "typescript-fsa-reducers";

// Local Imports
import { InventoryActionCreators } from "../actions/inventory";
import { InventorySlot } from "../../game/inventory";


// Inventory state interface
export interface IInventoryState {
	totalSlots: number
	slots: InventorySlot[]
}

// Inventory initial state
export const INVENTORY_INITIAL_STATE: IInventoryState = {
	totalSlots: 20,
	slots: [],
}

// Inventory state reducer
export const inventoryReducer = reducerWithInitialState(INVENTORY_INITIAL_STATE)
	.case(InventoryActionCreators.updateTotalSlots, (state, payload) => {
		return {
			...state,
			totalSlots: payload
		};
	})
	.case(InventoryActionCreators.updateInventorySlot, (state, payload) => {
		return {
			...state,
			slots[payload.index]: payload.item
		};
	})
	.case(InventoryActionCreators.updateLevel, (state, payload) => {
		return {
			...state,
			level: payload
		};
	})
	.case(InventoryActionCreators.updatePosition, (state, payload) => {
		return {
			...state,
			position: payload
		};
	})
	.build();

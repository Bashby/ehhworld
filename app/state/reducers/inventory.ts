// Lib Imports
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { fromJS } from "immutable";

// Local Imports
import { InventoryActionCreators } from "../actions/inventory";
import { Item } from "../structures/item";


// Inventory state interface
export interface IInventoryState {
	slots: {
		[id: string] : Item
	}
}

// Inventory initial state
export const INVENTORY_INITIAL_STATE: IInventoryState = {
	slots: {},
}

// Inventory state reducer
export const inventoryReducer = reducerWithInitialState(INVENTORY_INITIAL_STATE)
	.case(InventoryActionCreators.setSlots, (state, payload) => {
		return {
			...state,
			slots: payload
		};
	})
	.case(InventoryActionCreators.setSlot, (state, payload) => {
		return {
			...state,
			slots: {
				...state.slots,
				[payload.id] : payload
			}
		};
	})
	.case(InventoryActionCreators.updateSlot, (state, payload) => {
		return {
			...state,
			slots: {
				...state.slots,
				[payload.id] : fromJS(state.slots[payload.id]).merge(payload)
			}
		};
	})
	.build();

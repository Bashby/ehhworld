// Lib Imports
import actionCreatorFactory from 'typescript-fsa';

// Local Imports
import { Item, ItemUpdate } from '../structures/item';


// Prepare action creator
const inventoryActionCreator = actionCreatorFactory("Inventory");

// Create actions
const SetSlots = inventoryActionCreator<{[id: string] : Item}>('SET_SLOTS');
const SetSlot = inventoryActionCreator<Item>('SET_SLOT');
const UpdateSlot = inventoryActionCreator<ItemUpdate>('UPDATE_SLOT');

// Custom action payloads


// Bundle and export action creators
export const InventoryActionCreators = {
    setSlots: SetSlots,
    setSlot: SetSlot,
	updateSlot: UpdateSlot
};

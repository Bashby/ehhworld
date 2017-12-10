// Lib Imports
import actionCreatorFactory from 'typescript-fsa';

// Local Imports


// Prepare action creator
const inventoryActionCreator = actionCreatorFactory("Inventory");

// Create actions
const UpdateName = inventoryActionCreator<string>('UPDATE_NAME');
const UpdateAuthenticated = inventoryActionCreator<boolean>('UPDATE_AUTHENTICATED');
const UpdateLevel = inventoryActionCreator<number>('UPDATE_LEVEL');
const UpdatePosition = inventoryActionCreator<WorldPosition>('UPDATE_POSITION');

// Bundle and export action creators
export const inventoryActionCreators = {
	updateName: UpdateName,
	updateAuthenticated: UpdateAuthenticated,
    updateLevel: UpdateLevel,
    updatePosition: UpdatePosition
};

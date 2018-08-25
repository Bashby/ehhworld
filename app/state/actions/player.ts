// Lib Imports
import actionCreatorFactory from "typescript-fsa";

// Local Imports
import { IWorldPosition } from "../../game/world";

// Prepare action creator
const playerActionCreator = actionCreatorFactory("Player");

// Create actions
const UpdateName = playerActionCreator < string > ("UPDATE_NAME");
const UpdateAuthenticated = playerActionCreator < boolean > ("UPDATE_AUTHENTICATED");
const UpdateLevel = playerActionCreator < number > ("UPDATE_LEVEL");
const UpdatePosition = playerActionCreator < IWorldPosition > ("UPDATE_POSITION");

// Bundle and export action creators
export const PlayerActionCreators = {
    updateName: UpdateName,
    updateAuthenticated: UpdateAuthenticated,
    updateLevel: UpdateLevel,
    updatePosition: UpdatePosition,
};

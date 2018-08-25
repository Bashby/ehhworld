// Lib Imports
import actionCreatorFactory from "typescript-fsa";

// Local Imports

// Prepare action creator
const inputActionCreator = actionCreatorFactory("Input");

// Create actions
const SetLeft = inputActionCreator < boolean > ("SET_LEFT");
const SetRight = inputActionCreator < boolean > ("SET_RIGHT");
const SetUp = inputActionCreator < boolean > ("SET_UP");
const SetDown = inputActionCreator < boolean > ("SET_DOWN");
const SetShift = inputActionCreator < boolean > ("SET_SHIFT");

// Bundle and export action creators
export const InputActionCreators = {
  setLeft: SetLeft,
  setRight: SetRight,
  setUp: SetUp,
  setDown: SetDown,
  setShift: SetShift,
};

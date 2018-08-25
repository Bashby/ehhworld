// Lib Imports
import actionCreatorFactory from "typescript-fsa";
import { bindThunkAction } from "typescript-fsa-redux-thunk";

// Local Imports
import { IApplicationState } from "../application";
import { UiVisibilityUpdate } from "../structures/ui";

// Prepare action creator
const UIActionCreator = actionCreatorFactory("UI");

// Create actions
const SetVisibility = UIActionCreator<UiVisibilityUpdate>("SET_VISIBILITY");
const ToggleVisibility = UIActionCreator<string>("TOGGLE_VISIBILITY");
const ToggleVisibilityVisGroup = UIActionCreator.async<
    IApplicationState,
    { id: string, visGroups?: string[] }, // input parameter type
    void,
    Error
>("TOGGLE_VISIBILITY_VISGROUP");

// Define Thunks
const toggleVisibilityVisGroupWorker = bindThunkAction(ToggleVisibilityVisGroup,
    async (params, dispatch, getState, extraArg) => { // `extraArg` is always `any` (for now)
        const state = getState();

        // Input validation
        if (state.uiState.visibility[params.id] === undefined) {
            return;
        }

        // Determine target state
        const targetState: boolean = !state.uiState.visibility[params.id].visible;

        // If turning off, no need to worry about exclusive visGroups
        if (!targetState) {
            dispatch(ToggleVisibility(params.id));
            return;
        }

        // Apply visGroup exclusivity, when applicable
        const targetAllVisGroups: boolean = params.visGroups === undefined;
        const targetVisGroups: string[] = state.uiState.visibility[params.id].visGroups
            .filter((group) => group.exclusive)
            .filter((group) => targetAllVisGroups ? true : params.visGroups.includes(group.name))
            .map((group) => group.name);
        const targetUiElements: string[] = [];
        Object.entries(state.uiState.visibility).forEach(([key, value]) => {
            if (
                key !== params.id // don't target ourselves
                && value.visible // if visible
                && targetVisGroups.some( // within any of the targeted visGroups
                    (targetGroup) => value.visGroups.map(
                        (group) => group.name,
                    ).includes(targetGroup),
                )
            ) {
                targetUiElements.push(key);
            }
        });

        // Emit state changes
        targetUiElements.map((element) => {
            dispatch(SetVisibility({id: element, visible: false}));
        });
        dispatch(SetVisibility({id: params.id, visible: true}));

        return;
    },
);

// Bundle and export action creators
export const UIActionCreators = {
    setVisibility: SetVisibility,
    toggleVisibility: ToggleVisibility,
    toggleVisibilityVisGroup: toggleVisibilityVisGroupWorker,
};

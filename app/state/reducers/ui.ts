// Lib Imports
import { reducerWithInitialState } from "typescript-fsa-reducers";

// Local Imports
import { UIActionCreators } from "../actions/ui";
import { AnonymousUiVisibility, IUiVisibilityGroup } from "../structures/ui";

// UI state interface
export interface IUiState {
    visible: boolean;
    visibility: {
        [id: string]: AnonymousUiVisibility,
    };
}

// UI initial state
const visGlobalUI: IUiVisibilityGroup = {
    name: "globalUI",
    exclusive: false,
    zIndex: 1,
};
const visOverlays: IUiVisibilityGroup = {
    name: "globalOverlays",
    exclusive: true,
    zIndex: 100,
};
export const UI_INITIAL_STATE: IUiState = {
    visible: true,
    visibility: {
        // Vis Overlays
        blank: { visible: false, visGroups: [visOverlays, visGlobalUI] },
        character: { visible: false, visGroups: [visOverlays, visGlobalUI] },
        worldmap: { visible: false, visGroups: [visOverlays, visGlobalUI] },
        questlog: { visible: false, visGroups: [visOverlays, visGlobalUI] },
        inventory: { visible: false, visGroups: [visOverlays, visGlobalUI] },
        social: { visible: false, visGroups: [visOverlays, visGlobalUI] },
        crafting: { visible: false, visGroups: [visOverlays, visGlobalUI] },
        // Top-level GUI elements
        chat: { visible: true, visGroups: [visGlobalUI] },
        actionbar: { visible: true, visGroups: [visGlobalUI] },
        minimap: { visible: true, visGroups: [visGlobalUI] },
        eventlog: { visible: true, visGroups: [visGlobalUI] },
    },
};

// UI state reducer
export const uiReducer = reducerWithInitialState(UI_INITIAL_STATE)
    .case(UIActionCreators.setVisibility, (state, payload) => {
        // Short, if you didn't give me anything useful
        if (payload.visible === undefined) {
            return state;
        }

        const newState = {
            ...state,
            visibility: {
                ...state.visibility,
                [payload.id] : {
                    ...state.visibility[payload.id],
                    visible: payload.visible,
                },
            },
        };

        return newState;
    })
    .case(UIActionCreators.toggleVisibility, (state, payload) => {
        // Toggle top-level visibility if global
        if (payload === "global") {
            return {
                ...state,
                visible: !state.visible,
            };
        }

        // Short, if you didn't give me anything useful
        if (state.visibility[payload] === undefined) {
            return state;
        }

        return {
            ...state,
            visibility: {
                ...state.visibility,
                [payload] : {
                    ...state.visibility[payload],
                    visible: !state.visibility[payload].visible,
                },
            },
        };
    })
    .build();

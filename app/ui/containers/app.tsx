// Lib Imports
import { History } from "history";
import React from "react";
import { HotKeys } from "react-hotkeys";
import { connect, Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { bindActionCreators, Dispatch, Store } from "redux";
import styled from "styled-components";

// Local Imports
import { InputActionCreators } from "../../state/actions/input";
import { UIActionCreators } from "../../state/actions/ui";
import { IApplicationState } from "../../state/application";
import { GameContainer } from "./game";
import { GUIContainer } from "./gui";

// Interfaces
interface IAllProps extends IMyStateProps, IMyDispatchProps, IMyOwnProps {}

interface IMyStateProps {
    uiVisible: boolean;
}

interface IMyDispatchProps {
    toggleVisibility: any;
    toggleVisibilityVisGroup: any;
    setInput: any;
}

interface IMyOwnProps {
    store: Store<IApplicationState>;
    history: History;
}

interface IState {
}

// State mappings
function mapStateToProps(state: IApplicationState): IMyStateProps {
    return {
        uiVisible: state.uiState.visible,
    };
}

function mapDispatchToProps(dispatch: Dispatch<IApplicationState>): IMyDispatchProps {
    return {
        toggleVisibilityVisGroup: bindActionCreators(UIActionCreators.toggleVisibilityVisGroup, dispatch),
        toggleVisibility: bindActionCreators(UIActionCreators.toggleVisibility, dispatch),
        setInput: bindActionCreators(InputActionCreators, dispatch),
    };
}

// HotKey map
const keyMap = {
    UI_VISIBILITY_TOGGLE_Global: ["ctrl+u", "ctrl+U"],
    UI_VISIBILITY_HIDE_Overlays: "esc",
    UI_VISIBILITY_TOGGLE_ActionBar: ["ctrl+a", "ctrl+A"],
    UI_VISIBILITY_TOGGLE_MiniMap: ["ctrl+m", "ctrl+M"],
    UI_VISIBILITY_TOGGLE_Chat: ["ctrl+c", "ctrl+C"],
    UI_VISIBILITY_TOGGLE_EventLog: ["ctrl+e", "ctrl+E"],
    UI_VISIBILITY_TOGGLE_Inventory: ["i", "I"],
    UI_VISIBILITY_TOGGLE_WorldMap: ["m", "M"],
    UI_VISIBILITY_TOGGLE_Character: ["c", "C"],
    UI_VISIBILITY_TOGGLE_QuestLog: ["l", "L"],
    UI_VISIBILITY_TOGGLE_Social: ["o", "O"],
    UI_VISIBILITY_TOGGLE_Crafting: ["p", "P"],
    INPUT_KEYDOWN_LEFT: [
        {sequence: "a", action: "keydown"},
        {sequence: "shift+a", action: "keydown"},
        {sequence: "left", action: "keydown"},
    ],
    INPUT_KEYUP_LEFT: [
        {sequence: "a", action: "keyup"},
        {sequence: "shift+a", action: "keyup"},
        {sequence: "left", action: "keyup"},
    ],
    INPUT_KEYDOWN_RIGHT: [
        {sequence: "d", action: "keydown"},
        {sequence: "shift+d", action: "keydown"},
        {sequence: "right", action: "keydown"},
    ],
    INPUT_KEYUP_RIGHT: [
        {sequence: "d", action: "keyup"},
        {sequence: "shift+d", action: "keyup"},
        {sequence: "right", action: "keyup"},
    ],
    INPUT_KEYDOWN_UP: [
        {sequence: "w", action: "keydown"},
        {sequence: "shift+w", action: "keydown"},
        {sequence: "up", action: "keydown"},
    ],
    INPUT_KEYUP_UP: [
        {sequence: "w", action: "keyup"},
        {sequence: "shift+w", action: "keyup"},
        {sequence: "up", action: "keyup"},
    ],
    INPUT_KEYDOWN_DOWN: [
        {sequence: "s", action: "keydown"},
        {sequence: "shift+s", action: "keydown"},
        {sequence: "down", action: "keydown"},
    ],
    INPUT_KEYUP_DOWN: [
        {sequence: "s", action: "keyup"},
        {sequence: "shift+s", action: "keyup"},
        {sequence: "down", action: "keyup"},
    ],
    INPUT_KEYDOWN_SHIFT: [{sequence: "shift", action: "keydown"}],
    INPUT_KEYUP_SHIFT: [{sequence: "shift", action: "keyup"}],
    // INPUT_SET_RIGHT: ['d', 'right'],
    // INPUT_SET_UP: ['w', 'up'],
    // INPUT_SET_DOWN: ['s', 'down'],
    // INPUT_SET_SHIFT: ['shift'],
};

// Styles
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
    display: block;
    overflow: hidden;
`;

// Component class
class AppComponent extends React.Component<IAllProps, IState> {
    public readonly state: IState;

    // Hotkey handlers
    public handlers = {
        // Individual GUI Toggles
        UI_VISIBILITY_TOGGLE_Global: (event) => {this.props.toggleVisibility("global"); return false; },
        UI_VISIBILITY_TOGGLE_ActionBar: (event) => {this.props.toggleVisibility("actionbar"); return false; },
        UI_VISIBILITY_TOGGLE_MiniMap: (event) => {this.props.toggleVisibility("minimap"); return false; },
        UI_VISIBILITY_TOGGLE_Chat: (event) => {this.props.toggleVisibility("chat"); return false; },
        UI_VISIBILITY_TOGGLE_EventLog: (event) => {this.props.toggleVisibility("eventlog"); return false; },
        // Vis Group Aware GUI Toggles
        UI_VISIBILITY_HIDE_Overlays: (event) => {this.props.toggleVisibilityVisGroup({id: "blank"}); },
        UI_VISIBILITY_TOGGLE_Inventory: (event) => {this.props.toggleVisibilityVisGroup({id: "inventory"}); },
        UI_VISIBILITY_TOGGLE_WorldMap: (event) => {this.props.toggleVisibilityVisGroup({id: "worldmap"}); },
        UI_VISIBILITY_TOGGLE_Character: (event) => {this.props.toggleVisibilityVisGroup({id: "character"}); },
        UI_VISIBILITY_TOGGLE_QuestLog: (event) => {this.props.toggleVisibilityVisGroup({id: "questlog"}); },
        UI_VISIBILITY_TOGGLE_Social: (event) => {this.props.toggleVisibilityVisGroup({id: "social"}); },
        UI_VISIBILITY_TOGGLE_Crafting: (event) => {this.props.toggleVisibilityVisGroup({id: "crafting"}); },
        // Input Handlers
        INPUT_KEYDOWN_LEFT: (event) => {this.props.setInput.setLeft(true); },
        INPUT_KEYUP_LEFT: (event) => {this.props.setInput.setLeft(false); },
        INPUT_KEYDOWN_RIGHT: (event) => {this.props.setInput.setRight(true); },
        INPUT_KEYUP_RIGHT: (event) => {this.props.setInput.setRight(false); },
        INPUT_KEYDOWN_UP: (event) => {this.props.setInput.setUp(true); },
        INPUT_KEYUP_UP: (event) => {this.props.setInput.setUp(false); },
        INPUT_KEYDOWN_DOWN: (event) => {this.props.setInput.setDown(true); },
        INPUT_KEYUP_DOWN: (event) => {this.props.setInput.setDown(false); },
        INPUT_KEYDOWN_SHIFT: (event) => {this.props.setInput.setShift(true); },
        INPUT_KEYUP_SHIFT: (event) => {this.props.setInput.setShift(false); },
        // '': (event) => {},
        // '': (event) => {},
        // '': (event) => {},
        // '': (event) => {},
        // '': (event) => {},
        // '': (event) => {},
        // '': (event) => {},
        // 'toggleFullScreen': (event) => {console.log('Fullscreen hotkey called!'); this.props.toggleFullscreen()},
    };
    private focusCatch: HTMLDivElement;

    constructor(props: IAllProps) {
        super(props);
        this.state = {
        };
    }

    public componentDidUpdate(prevProps) {
        this.focusCatch.focus();
    }

    public render() {
        return (
            <Provider store={this.props.store}>
                <ConnectedRouter history={this.props.history}>
                    <HotKeys keyMap={keyMap} handlers={this.handlers}>
                        <div tabIndex={-1} ref={(c) => this.focusCatch = c}>
                            <Wrapper>
                                <Switch>
                                    <Route component={GameContainer} />
                                </Switch>
                                {this.props.uiVisible && <GUIContainer />}
                            </Wrapper>
                        </div>
                    </HotKeys>
                </ConnectedRouter>
            </Provider>
        );
    }
}

// Container
export const AppContainer = connect<IMyStateProps, IMyDispatchProps, IMyOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(AppComponent);

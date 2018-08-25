// Lib Imports
import _ from "lodash";
import React, {Component } from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import styled from "styled-components";

// Local Imports
import { IApplicationState } from "../../state/application";
import { AnonymousUiVisibility } from "../../state/structures/ui";
import { ActionBarContainer } from "./actionbar";
import { CharacterContainer } from "./character";
import { ChatContainer } from "./chat";
import { CraftingContainer } from "./crafting";
import { EventLogContainer } from "./eventlog";
import { InventoryContainer } from "./inventory";
import { MiniMapContainer } from "./minimap";
import { QuestLogContainer } from "./questlog";
import { SocialContainer } from "./social";
import { WorldMapContainer } from "./worldmap";
import { ThunkDispatch } from "redux-thunk";

// Interfaces
interface IAllProps extends IMyStateProps, IMyDispatchProps, IMyOwnProps {}

interface IMyStateProps {
    uiVisibility: {
        [id: string]: AnonymousUiVisibility,
    };
}

interface IMyDispatchProps {
}

interface IMyOwnProps {
}

interface IState {
}

// State mappings
function mapStateToProps(state: IApplicationState): IMyStateProps {
    return {
        uiVisibility: state.uiState.visibility,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<IApplicationState, any, AnyAction>): IMyDispatchProps {
    return {

    };
}

// Styles
const GUIContainerView = styled.div`
`;

// Component
class GUIComponent extends Component<IAllProps, IState> {
    public readonly state: IState;
    private uiContainerMapping: { [key: string]: JSX.Element };

    constructor(props: IAllProps) {
        super(props);

        this.uiContainerMapping = {
            actionbar: <ActionBarContainer key={"actionbar"} />,
            character: <CharacterContainer key={"character"} />,
            chat: <ChatContainer key={"chat"} />,
            crafting: <CraftingContainer key={"crafting"} />,
            eventlog: <EventLogContainer key={"eventlog"} />,
            inventory: <InventoryContainer key={"inventory"} />,
            minimap: <MiniMapContainer key={"minimap"} />,
            questlog: <QuestLogContainer key={"questlog"} />,
            social: <SocialContainer key={"social"} />,
            worldmap: <WorldMapContainer key={"worldmap"} />,
        };

        this.state = {
        };
    }

    public render() {
        const visibleUIContainers = [];
        for (const key in this.props.uiVisibility) {
            if (this.props.uiVisibility[key].visible && _.has(this.uiContainerMapping, key)) {
                visibleUIContainers.push(this.uiContainerMapping[key]);
            }
        }

        return (
            <GUIContainerView>
                {visibleUIContainers}
            </GUIContainerView>
        );
    }
}

// Container
export const GUIContainer = connect<IMyStateProps, IMyDispatchProps, IMyOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(GUIComponent);

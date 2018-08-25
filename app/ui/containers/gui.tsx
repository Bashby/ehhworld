// Lib Imports
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
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

function mapDispatchToProps(dispatch: Dispatch<IApplicationState>): IMyDispatchProps {
    return {

    };
}

// Styles
const GUIContainerView = styled.div`
`;

// Component
class GUIComponent extends React.Component<IAllProps, IState> {
    public readonly state: IState;
    private uiContainerMapping: { [key: string]: JSX.Element };

    constructor(props: IAllProps) {
        super(props);

        this.uiContainerMapping = {
            actionbar: <ActionBarContainer />,
            character: <CharacterContainer />,
            chat: <ChatContainer />,
            crafting: <CraftingContainer />,
            eventlog: <EventLogContainer />,
            inventory: <InventoryContainer />,
            minimap: <MiniMapContainer />,
            questlog: <QuestLogContainer />,
            social: <SocialContainer />,
            worldmap: <WorldMapContainer />,
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
                {this.props.uiVisibility.character.visible && <CharacterContainer/>}
                {this.props.uiVisibility.worldmap.visible && <WorldMapContainer />}
                {this.props.uiVisibility.questlog.visible && }
                {this.props.uiVisibility.inventory.visible && <InventoryContainer />}
                {this.props.uiVisibility.social.visible && <SocialContainer />}
                {this.props.uiVisibility.crafting.visible && <CraftingContainer />}
                {this.props.uiVisibility.chat.visible && <ChatContainer />}
                {this.props.uiVisibility.minimap.visible && <MiniMapContainer />}
                {this.props.uiVisibility.actionbar.visible && <ActionBarContainer />}
                {this.props.uiVisibility.eventlog.visible && <EventLogContainer />}
            </GUIContainerView>
        );
    }
}

// Container
export const GUIContainer = connect<IMyStateProps, IMyDispatchProps, IMyOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(GUIComponent);

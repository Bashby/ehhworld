// Lib Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

// Local Imports
import { IApplicationState } from "../../state/application";
import { GUIBaseView } from "../styled";

// Interfaces
interface IAllProps extends IMyStateProps, IMyDispatchProps, IMyOwnProps {}

interface IMyStateProps {
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
    };
}

function mapDispatchToProps(dispatch: Dispatch): IMyDispatchProps {
    return {
    };
}

// Styles
const ChatContainerView = styled(GUIBaseView)`
    width: 20vw;
    height: 25vh;
    bottom: 6vh;
    left: 0.29vw;
`;

// Component
class ChatComponent extends Component<IAllProps, IState> {
    public readonly state: IState;

    constructor(props: IAllProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <ChatContainerView>
                Chat Container!
            </ChatContainerView>
        );
    }
}

// Container
export const ChatContainer = connect<IMyStateProps, IMyDispatchProps, IMyOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(ChatComponent);

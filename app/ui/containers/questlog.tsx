// Lib Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

// Local Imports
import { IApplicationState } from "../../state/application";
import { GUIOverlayView } from "../styled";

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
const QuestLogContainerView = styled(GUIOverlayView)`
    background-color: red;
`;

// Component
class QuestLogComponent extends Component<IAllProps, IState> {
    public readonly state: IState;

    constructor(props: IAllProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <QuestLogContainerView>
                QuestLog Container!
            </QuestLogContainerView>
        );
    }
}

// Container
export const QuestLogContainer = connect<IMyStateProps, IMyDispatchProps, IMyOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(QuestLogComponent);

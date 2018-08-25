// Lib Imports
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

// Local Imports
import { IApplicationState } from "../../state/application";
import { GUIBaseView } from "../styles";

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

function mapDispatchToProps(dispatch: Dispatch<IApplicationState>): IMyDispatchProps {
    return {
    };
}

// Styles
const ActionBarContainerView = styled(GUIBaseView)`
    width: 99.42vw;
    height: 5vh;
    bottom: 0.5vh;
    left: 0.29vw;
`;

// Component
class ActionBarComponent extends React.Component<IAllProps, IState> {
    public readonly state: IState;

    constructor(props: IAllProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <ActionBarContainerView>
                ActionBar Container!
            </ActionBarContainerView>
        );
    }
}

// Container
export const ActionBarContainer = connect<IMyStateProps, IMyDispatchProps, IMyOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(ActionBarComponent);

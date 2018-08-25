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
const MiniMapContainerView = styled(GUIBaseView)`
    width: 18vw;
    height: 15vh;
    top: 0.5vh;
    right: 0.29vw;
`;

// Component
class MiniMapComponent extends React.Component<IAllProps, IState> {
    public readonly state: IState;

    constructor(props: IAllProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <MiniMapContainerView>
                MiniMap Container!
            </MiniMapContainerView>
        );
    }
}

// Container
export const MiniMapContainer = connect<IMyStateProps, IMyDispatchProps, IMyOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(MiniMapComponent);

// Lib Imports
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

// Local Imports
import { IApplicationState } from "../../state/application";
import { GUIOverlayView } from "../styles";

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
const CraftingContainerView = styled(GUIOverlayView)`
    background-color: purple;
`;

// Component
class CraftingComponent extends React.Component<IAllProps, IState> {
    public readonly state: IState;

    constructor(props: IAllProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <CraftingContainerView>
                Crafting Container!
            </CraftingContainerView>
        );
    }
}

// Container
export const CraftingContainer = connect<IMyStateProps, IMyDispatchProps, IMyOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(CraftingComponent);

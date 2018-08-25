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
const CharacterContainerView = styled(GUIOverlayView)`
    background-color: yellow;
`;

// Component
class CharacterComponent extends React.Component<IAllProps, IState> {
    public readonly state: IState;

    constructor(props: IAllProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <CharacterContainerView>
                Character Container!
            </CharacterContainerView>
        );
    }
}

// Container
export const CharacterContainer = connect<IMyStateProps, IMyDispatchProps, IMyOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(CharacterComponent);

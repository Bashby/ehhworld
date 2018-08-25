// Lib Imports
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ActionCreator } from "typescript-fsa";

import styled, { StyledComponentClass } from "styled-components";

import { Redirect, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { push } from "react-router-redux";

// Local Imports
import { IApplicationState } from "../../state/application";
import { GUIOverlayView } from "../styles";

// Interfaces
interface AllProps extends MyStateProps, MyDispatchProps, MyOwnProps {}

interface MyStateProps {

}

interface MyDispatchProps {

}

interface MyOwnProps {

}

interface State {

}

// State mappings
function mapStateToProps(state: IApplicationState): MyStateProps {
	return {
	};
}

function mapDispatchToProps(dispatch: Dispatch<IApplicationState>): MyDispatchProps {
	return {
	};
}

// Styled-components
const CharacterContainerView = styled(GUIOverlayView)`
	background-color: yellow;
`;

// Component class
class CharacterComponent extends React.Component<AllProps, State> {
	constructor(props: AllProps) {
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

// State-aware container
export const CharacterContainer = connect<MyStateProps, MyDispatchProps, MyOwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(CharacterComponent);

// Lib Imports
import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { connect } from 'react-redux';
import { ActionCreator } from 'typescript-fsa';

import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { push } from 'react-router-redux'
import { Route, Switch, Redirect } from "react-router";

// Local Imports
import { IApplicationState } from '../../state/application';
import { GUIOverlayView } from '../styles';


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
	}
}

function mapDispatchToProps(dispatch: Dispatch<IApplicationState>): MyDispatchProps {
	return {
	}
}

// Styled-components
const CraftingContainerView = styled(GUIOverlayView)`
	background-color: purple;
`;

// Component class
class CraftingComponent extends React.Component<AllProps, State> {
	constructor(props: AllProps) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<CraftingContainerView>
				Crafting Container!
			</CraftingContainerView>
		);
	}
}

// State-aware container
export const CraftingContainer = connect<MyStateProps, MyDispatchProps, MyOwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(CraftingComponent);
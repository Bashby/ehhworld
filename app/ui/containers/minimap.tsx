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
import { GUIBaseView } from '../styles';


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
const MiniMapContainerView = styled(GUIBaseView)`
	width: 18vw;
	height: 15vh;
	top: 0.5vh;
	right: 0.29vw;
`;

// Component class
class MiniMapComponent extends React.Component<AllProps, State> {
	constructor(props: AllProps) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<MiniMapContainerView>
				MiniMap Container!
			</MiniMapContainerView>
		);
	}
}

// State-aware container
export const MiniMapContainer = connect<MyStateProps, MyDispatchProps, MyOwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(MiniMapComponent);

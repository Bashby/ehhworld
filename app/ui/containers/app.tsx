/// Lib Imports
import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { connect } from 'react-redux';
import { ActionCreator } from 'typescript-fsa';
import { HotKeys } from 'react-hotkeys';

import { Link } from 'react-router-dom';
import { push } from 'react-router-redux'
import { Route, Switch, Redirect } from "react-router";

// Local Imports
import { IApplicationState } from '../../state/application';
import { GameContainer } from './game';


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

// HotKey maps and handlers
const keyMap = {
	showInventory: ['i', "I"],
	showWorldMap: ['m', 'M'],
	showCharacter: ['c', 'C'],
};

const handlers = {
	'moveUp': (event) => console.log('Move up hotkey called!')
};

// Component class
class AppComponent extends React.Component<AllProps, State> {
	constructor(props: AllProps) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="full-height">
				<HotKeys keyMap={keyMap} handlers={handlers}>
					<Switch>
						<Route component={GameContainer} />
					</Switch>
				</HotKeys>
			</div>
		);
	}
}

// State-aware Container
export const AppContainer = connect<MyStateProps, MyDispatchProps, MyOwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);

// Lib Imports
import * as React from 'react';
import { Store, Dispatch, bindActionCreators } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { ActionCreator } from 'typescript-fsa';
import { HotKeys } from 'react-hotkeys';
import { History } from 'history';

import { Link } from 'react-router-dom';
import { push, ConnectedRouter } from 'react-router-redux'
import { Route, Switch, Redirect } from "react-router";

import styled from 'styled-components';

// Local Imports
import { IApplicationState } from '../../state/application';
import { GameContainer } from './game';
import { UiActionCreators } from '../../state/actions/ui';
import { GUIContainer } from './gui';


// Interfaces
interface AllProps extends MyStateProps, MyDispatchProps, MyOwnProps {}

interface MyStateProps {
	uiVisible: boolean
}

interface MyDispatchProps {
	toggleVisibility: any
	toggleVisibilityVisGroup: any
}

interface MyOwnProps {
	store: Store<IApplicationState>;
	history: History;
}

interface State {

}

// State mappings
function mapStateToProps(state: IApplicationState): MyStateProps {
	return {
		uiVisible: state.uiState.visible
	}
}

function mapDispatchToProps(dispatch: Dispatch<IApplicationState>): MyDispatchProps {
	return {
		toggleVisibilityVisGroup: bindActionCreators(UiActionCreators.toggleVisibilityVisGroup, dispatch),
		toggleVisibility: bindActionCreators(UiActionCreators.toggleVisibility, dispatch),
	}
}

// HotKey map
const keyMap = {
	UI_VISIBILITY_TOGGLE_Global: ['ctrl+u', 'ctrl+U'],
	UI_VISIBILITY_HIDE_Overlays: 'esc',
	UI_VISIBILITY_TOGGLE_ActionBar: ['ctrl+a', 'ctrl+A'],
	UI_VISIBILITY_TOGGLE_MiniMap: ['ctrl+m', 'ctrl+M'],
	UI_VISIBILITY_TOGGLE_Chat: ['ctrl+c', 'ctrl+C'],
	UI_VISIBILITY_TOGGLE_EventLog: ['ctrl+e', 'ctrl+E'],
	UI_VISIBILITY_TOGGLE_Inventory: ['i', 'I'],
	UI_VISIBILITY_TOGGLE_WorldMap: ['m', 'M'],
	UI_VISIBILITY_TOGGLE_Character: ['c', 'C'],
	UI_VISIBILITY_TOGGLE_QuestLog: ['l', 'L'],
	UI_VISIBILITY_TOGGLE_Social: ['o', 'O'],
	UI_VISIBILITY_TOGGLE_Crafting: ['p', 'P'],
};

// Styled-componenets
const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: black;
	display: block;
	overflow: hidden;
`;

// Component class
class AppComponent extends React.Component<AllProps, State> {
	private focusCatch: HTMLDivElement

	constructor(props: AllProps) {
		super(props);
		this.state = {
		};
	}

	componentDidUpdate(prevProps) {
		this.focusCatch.focus();
	}

	// Hotkey handlers
	handlers = {
		// Individual GUI Toggles
		'UI_VISIBILITY_TOGGLE_Global': (event) => {this.props.toggleVisibility('global'); return false;},
		'UI_VISIBILITY_TOGGLE_ActionBar': (event) => {this.props.toggleVisibility('actionbar'); return false;},
		'UI_VISIBILITY_TOGGLE_MiniMap': (event) => {this.props.toggleVisibility('minimap'); return false;},
		'UI_VISIBILITY_TOGGLE_Chat': (event) => {this.props.toggleVisibility('chat'); return false;},
		'UI_VISIBILITY_TOGGLE_EventLog': (event) => {this.props.toggleVisibility('eventlog'); return false;},
		// Vis Group Aware GUI Toggles
		'UI_VISIBILITY_HIDE_Overlays': (event) => {this.props.toggleVisibilityVisGroup({id: 'blank'})},
		'UI_VISIBILITY_TOGGLE_Inventory': (event) => {this.props.toggleVisibilityVisGroup({id: 'inventory'})},
		'UI_VISIBILITY_TOGGLE_WorldMap': (event) => {this.props.toggleVisibilityVisGroup({id: 'worldmap'})},
		'UI_VISIBILITY_TOGGLE_Character': (event) => {this.props.toggleVisibilityVisGroup({id: 'character'})},
		'UI_VISIBILITY_TOGGLE_QuestLog': (event) => {this.props.toggleVisibilityVisGroup({id: 'questlog'})},
		'UI_VISIBILITY_TOGGLE_Social': (event) => {this.props.toggleVisibilityVisGroup({id: 'social'})},
		'UI_VISIBILITY_TOGGLE_Crafting': (event) => {this.props.toggleVisibilityVisGroup({id: 'crafting'})},
		// '': (event) => {},
		// '': (event) => {},
		// '': (event) => {},
		// '': (event) => {},
		// '': (event) => {},
		// '': (event) => {},
		// '': (event) => {},
		//'toggleFullScreen': (event) => {console.log('Fullscreen hotkey called!'); this.props.toggleFullscreen()},
	};

	render() {
		return (
			<Provider store={this.props.store}>
				<ConnectedRouter history={this.props.history}>
					<HotKeys keyMap={keyMap} handlers={this.handlers}>
						<div tabIndex={-1} ref={ (c) => this.focusCatch = c }>
							<Wrapper>
								<Switch>
									<Route component={GameContainer} />
								</Switch>
								{this.props.uiVisible && <GUIContainer />}
							</Wrapper>
						</div>
					</HotKeys>
				</ConnectedRouter>
			</Provider>
		);
	}
}

// State-aware Container
export const AppContainer = connect<MyStateProps, MyDispatchProps, MyOwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);

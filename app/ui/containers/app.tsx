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
import { AnonymousUiVisibility } from '../../state/structures/ui';
import { GameContainer } from './game';
import { CharacterContainer } from './character';
import { UiActionCreators } from '../../state/actions/ui';
import { WorldMapContainer } from './worldmap';
import { InventoryContainer } from './inventory';


// Interfaces
interface AllProps extends MyStateProps, MyDispatchProps, MyOwnProps {}

interface MyStateProps {
	uiVisibility: {
		[id: string] : AnonymousUiVisibility
	}
}

interface MyDispatchProps {
	toggleVisibility: any
	//toggleVisibility: (params: any) => ThunkAction<Promise<void>, IApplicationState, any>;
	//toggleVisibility: (id: string, visGroups?: string[]) => void
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
		uiVisibility: state.uiState.visibility
	}
}

function mapDispatchToProps(dispatch: Dispatch<IApplicationState>): MyDispatchProps {
	return {
		toggleVisibility: bindActionCreators(UiActionCreators.toggleVisibilityVisGroup, dispatch),
	}
}

// HotKey maps and handlers
const keyMap = {
	showInventory: ['i', "I"],
	showWorldMap: ['m', 'M'],
	showCharacter: ['c', 'C'],
};



// Styled-componenets
const Wrapper = styled.section`
	height: 100vh;
	width: 100vw;
	background-color: black;
`;

// Component class
class AppComponent extends React.Component<AllProps, State> {
	constructor(props: AllProps) {
		super(props);
		this.state = {
		};
	}

	handlers = {
		'showInventory': (event) => {console.log('Inventory hotkey called!'); this.props.toggleVisibility({id: 'inventory'})},
		'showWorldMap': (event) => {console.log('WorldMap hotkey called!'); this.props.toggleVisibility({id: 'worldmap'})},
		'showCharacter': (event) => {console.log('Character hotkey called!'); this.props.toggleVisibility({id: 'character'})},
	};

	render() {
		return (
			<Provider store={this.props.store}>
				<ConnectedRouter history={this.props.history}>
					<HotKeys keyMap={keyMap} handlers={this.handlers}>
						<Wrapper>
							<Switch>
								<Route component={GameContainer} />
							</Switch>
							{this.props.uiVisibility.character && this.props.uiVisibility.character.visible && <CharacterContainer />}
							{this.props.uiVisibility.worldmap && this.props.uiVisibility.worldmap.visible && <WorldMapContainer />}
							{this.props.uiVisibility.inventory && this.props.uiVisibility.inventory.visible && <InventoryContainer />}
							{/* {showWorldMap && <WorldMapContainer />}
							{showInventory && <InventorContainer />}
							{showCrafting && <CraftingContainer />}
							{showQuests && <QuestContainer />}
							{showChat && <ChatContainer />}
							{showMinimap && <MinimapContainer />}
							{showActionBar && <ActionBarContainer />} */}
						</Wrapper>
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

// Lib Imports
import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { connect } from 'react-redux';
import { ActionCreator } from 'typescript-fsa';

import { HotKeys } from 'react-hotkeys';

import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { push } from 'react-router-redux'
import { Route, Switch, Redirect } from "react-router";

// Local Imports
import { IApplicationState } from '../../state/application';
import { UIActionCreators } from '../../state/actions/ui';
import { AnonymousUiVisibility } from '../../state/structures/ui';
import { CharacterContainer } from './character';
import { WorldMapContainer } from './worldmap';
import { InventoryContainer } from './inventory';
import { CraftingContainer } from './crafting';
import { QuestLogContainer } from './questlog';
import { ChatContainer } from './chat';
import { ActionBarContainer } from './actionbar';
import { MiniMapContainer } from './minimap';
import { EventLogContainer } from './eventlog';
import { SocialContainer } from './social';


// Interfaces
interface AllProps extends MyStateProps, MyDispatchProps, MyOwnProps {}

interface MyStateProps {
	uiVisibility: {
		[id: string] : AnonymousUiVisibility
	}
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
		uiVisibility: state.uiState.visibility
	}
}

function mapDispatchToProps(dispatch: Dispatch<IApplicationState>): MyDispatchProps {
	return {

	}
}

// Styled-components
const GUIContainerView = styled.div`
`;

// Component class
class GUIComponent extends React.Component<AllProps, State> {
	constructor(props: AllProps) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<GUIContainerView>
				{this.props.uiVisibility.character && this.props.uiVisibility.character.visible && <CharacterContainer/>}
				{this.props.uiVisibility.worldmap && this.props.uiVisibility.worldmap.visible && <WorldMapContainer />}
				{this.props.uiVisibility.questlog && this.props.uiVisibility.questlog.visible && <QuestLogContainer />}
				{this.props.uiVisibility.inventory && this.props.uiVisibility.inventory.visible && <InventoryContainer />}
				{this.props.uiVisibility.social && this.props.uiVisibility.social.visible && <SocialContainer />}
				{this.props.uiVisibility.crafting && this.props.uiVisibility.crafting.visible && <CraftingContainer />}
				
				{this.props.uiVisibility.chat && this.props.uiVisibility.chat.visible && <ChatContainer />}
				{this.props.uiVisibility.minimap && this.props.uiVisibility.minimap.visible && <MiniMapContainer />}
				{this.props.uiVisibility.actionbar && this.props.uiVisibility.actionbar.visible && <ActionBarContainer />}
				{this.props.uiVisibility.eventlog && this.props.uiVisibility.eventlog.visible && <EventLogContainer />}
			</GUIContainerView>
		);
	}
}

// State-aware container
export const GUIContainer = connect<MyStateProps, MyDispatchProps, MyOwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(GUIComponent);

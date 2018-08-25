// Lib Imports
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ActionCreator } from "typescript-fsa";

import styled from "styled-components";

import { Redirect, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { push } from "react-router-redux";

// Local Imports
import { IApplicationState } from "../../state/application";
import { GUIBaseView } from "../styles";

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
const EventLogContainerView = styled(GUIBaseView)`
	width: 20vw;
	height: 25vh;
	bottom: 6vh;
	right: 0.29vw;
`;

// Component class
class EventLogComponent extends React.Component<AllProps, State> {
	constructor(props: AllProps) {
		super(props);
		this.state = {
		};
	}

	public render() {
		return (
			<EventLogContainerView>
				EventLog Container!
			</EventLogContainerView>
		);
	}
}

// State-aware container
export const EventLogContainer = connect<MyStateProps, MyDispatchProps, MyOwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(EventLogComponent);

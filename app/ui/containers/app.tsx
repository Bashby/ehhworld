/// Lib Imports
import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { connect } from 'react-redux';
import { ActionCreator } from 'typescript-fsa';

import { Link } from 'react-router-dom';
import { push } from 'react-router-redux'
import { Route, Switch, Redirect } from "react-router";

// Local Imports


// Interfaces
interface AllProps extends MyStateProps, MyDispatchProps, MyOwnProps {}

interface State {

}

interface MyStateProps {

}

interface MyDispatchProps {

}

interface MyOwnProps {

}

// State mappings
function mapStateToProps(state: IState): MyStateProps {
	return {
	}
}

function mapDispatchToProps(dispatch: Dispatch<IState>): MyDispatchProps {
	return {
	}
}

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
				<TopNavigationBar changePage={this.props.changePage} authenticated={this.props.authenticated} updateAuthenticated={this.props.updateAuthenticated} />
							<Switch>
								{/* <ProtectedRoute path="/account/people/add" component={AddPersonContainer} authenticated={this.props.authenticated} /> */}
								<ProtectedRoute path="/account/people/:id" component={AccountContainer} authenticated={this.props.authenticated} innerProps={{showPeople: true}} />
								<ProtectedRoute path="/account/people" component={AccountContainer} authenticated={this.props.authenticated} innerProps={{showPeople: true}} />
								<ProtectedRoute path="/account" component={AccountContainer} authenticated={this.props.authenticated} />
								<ProtectedRoute path="/mealplan/recipes/:id" component={RecipeContainer} authenticated={this.props.authenticated} />
								<ProtectedRoute path="/mealplan/recipes" component={RecipeContainer} authenticated={this.props.authenticated} />
								<ProtectedRoute path="/mealplan/participants" component={ParticipantsContainer} authenticated={this.props.authenticated} />
								<ProtectedRoute path="/mealplan/grocerylist" component={GroceryListContainer} authenticated={this.props.authenticated} />
								<ProtectedRoute path="/mealplan/alerts" component={AlertsContainer} authenticated={this.props.authenticated} />
								<ProtectedRoute path="/mealplan" component={MealplanContainer} authenticated={this.props.authenticated} />
								<Route path="/login" component={LoginContainer} />
								<Route path="/signup" component={SignupContainer} />
								<Route component={SelectionsContainer} />
							</Switch>
				{this.props.authenticated && <BottomNavigationBar changePage={this.props.changePage} setBottomNavigation={this.props.setBottomNavigation} index={this.props.bottomNavigationIndex} />}
			</div>
		);
	}
}

// State-aware Container
export const AppContainer = connect<MyStateProps, MyDispatchProps, MyOwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);

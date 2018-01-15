// Lib Imports
import { applyMiddleware, createStore, compose, Store, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Local Imports
import { IApplicationState, applicationReducer } from './application';


// Prepare store middleware
export const history = createHistory();
const routerHistoryMiddleware = applyMiddleware(routerMiddleware(history));
const thunkMiddleware = applyMiddleware(thunk)
const enhancer: StoreEnhancer<IApplicationState> = composeWithDevTools(routerHistoryMiddleware, thunkMiddleware);

// Create store
export function configureStore(initialState?: IApplicationState): Store<IApplicationState> {
	return createStore(
		applicationReducer,
		initialState,
		enhancer
	);
}

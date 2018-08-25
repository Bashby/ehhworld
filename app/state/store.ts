// Lib Imports
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, compose, createStore, Store, StoreEnhancer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

// Local Imports
import { applicationReducer, IApplicationState } from "./application";

// Prepare store middleware
export const history = createHistory();
const routerHistoryMiddleware = applyMiddleware(routerMiddleware(history));
const thunkMiddleware = applyMiddleware(thunk);
const enhancer: StoreEnhancer<IApplicationState> = composeWithDevTools(routerHistoryMiddleware, thunkMiddleware);

// Create store
export function configureStore(initialState?: IApplicationState): Store<IApplicationState> {
	return createStore(
		applicationReducer,
		initialState,
		enhancer,
	);
}

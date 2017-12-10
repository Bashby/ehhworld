// Lib Imports
import * as React from 'react';
import { render } from 'react-dom';

// Local Imports
import { AppContainer } from './containers/app';
import { configureStore, history } from './state/store';
import { INITIAL_STATE } from './state/reducers/root';

// App Constants
export const APP_VERSION: string = "0.1.0";

// Hydrate state
const store = configureStore(INITIAL_STATE);

// Render application
const renderTarget = document.getElementById('application');
render(<AppContainer store={store} history={history} />, renderTarget, () => console.info(
	"┌─┐┬ ┬┬ ┬┬ ┬┌─┐┬─┐┬  ┌┬┐\n" +
	"├┤ ├─┤├─┤││││ │├┬┘│   ││\n" +
	"└─┘┴ ┴┴ ┴└┴┘└─┘┴└─┴─┘─┴┘\n" +
	"\t\t\u2764 v" + APP_VERSION
));

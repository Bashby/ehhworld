// Lib imports
import * as React from 'react';
import { render } from 'react-dom';
import 'normalize.css';

// Local imports
import { CLIENT_VERSION } from './game/config';
import { AppContainer } from './ui/containers/app';
import { configureStore, history } from './state/store';
import { APPLICATION_INITIAL_STATE } from './state/application';
import './styles.css';


// Render application
const renderTarget = document.getElementById('application');
render(
	<AppContainer
		store={ configureStore(APPLICATION_INITIAL_STATE) }
		history={ history }
	/>,
	renderTarget,
	() => console.info(
		"┌─┐┬ ┬┬ ┬┬ ┬┌─┐┬─┐┬  ┌┬┐\n" +
		"├┤ ├─┤├─┤││││ │├┬┘│   ││\n" +
		"└─┘┴ ┴┴ ┴└┴┘└─┘┴└─┴─┘─┴┘\n" +
		"\t\t\u2764 v" + CLIENT_VERSION
	)
);

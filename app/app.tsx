// Lib imports
import "normalize.css";
import * as React from "react";
import { render } from "react-dom";

// Local imports
import { CLIENT_VERSION } from "./game/config";
import { APPLICATION_INITIAL_STATE } from "./state/application";
import { configureStore, history } from "./state/store";
import "./styles.css";
import { AppContainer } from "./ui/containers/app";

// Render application
const renderTarget = document.getElementById("application");
render(
  <AppContainer
    store={configureStore(APPLICATION_INITIAL_STATE)}
    history={history}
  />,
  renderTarget,
  // tslint:disable-next-line:no-console
  () => console.info(
    `${"┌─┐┬ ┬┬ ┬┬ ┬┌─┐┬─┐┬  ┌┬┐\n"
    + "├┤ ├─┤├─┤││││ │├┬┘│   ││\n"
    + "└─┘┴ ┴┴ ┴└┴┘└─┘┴└─┴─┘─┴┘\n"
    + "\t\t\u2764 v"}${CLIENT_VERSION}`,
  ),
);

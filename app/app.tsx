// Lib imports
import "normalize.css";
import React from "react";
import { render } from "react-dom";

// Local imports
import { APP_VERSION } from "./game/util/constant";
import { APPLICATION_INITIAL_STATE } from "./state/application";
import { configureStore, history } from "./state/store";
import { AppContainer } from "./ui/containers/app";
import "./ui/style.scss";

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
    + "\t\t\u2764 v"}${APP_VERSION}`,
  ),
);

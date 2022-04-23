import React, { Fragment, FunctionComponent } from "react";
import { Game } from "./components/Game";
import { Header } from "./components/Header";

import GlobalStyles from "./styles/globalStyle";

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <Header />
      <Game />
      <GlobalStyles />
    </Fragment>
  );
};

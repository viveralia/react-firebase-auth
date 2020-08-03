import React from "react";

import "fontsource-roboto";
import { render } from "react-dom";
import { CssBaseline } from "@material-ui/core";

import App from "./App";
import { MainContextProvider } from "./context";

render(
  <MainContextProvider>
    <CssBaseline />
    <App />
  </MainContextProvider>,
  document.querySelector("#root")
);

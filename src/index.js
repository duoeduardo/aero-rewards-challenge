import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalStyle from "./style/globalStyles";

import { AppProvider } from "./context";

ReactDOM.render(
  <AppProvider>
    <GlobalStyle />
    <App />
  </AppProvider>,
  document.getElementById("root")
);

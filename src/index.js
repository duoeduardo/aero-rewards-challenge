import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./style/globalStyles";
import theme from './style/theme';

import { AppProvider } from "./context/context";

ReactDOM.render(
  <AppProvider>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
  </AppProvider>,
  document.getElementById("root")
);

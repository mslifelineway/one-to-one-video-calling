import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { ContextProvider } from "./Context/socket.context";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
reportWebVitals();

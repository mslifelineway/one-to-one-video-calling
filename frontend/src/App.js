import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Room from "./containers/Room";
import { pagePaths } from "./utils/constants";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact path={pagePaths.root} to={pagePaths.room} />
        <Route path={`${pagePaths.room}/:id`} component={Room} />
      </Switch>
    </Router>
  );
}

export default App;

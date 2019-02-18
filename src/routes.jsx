import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Layout";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </Router>
  );
};

export default Routes;

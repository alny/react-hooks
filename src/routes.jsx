import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";

import Navbar from "./components/Layout";

const Routes = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/projects" component={Projects} />

          <Route component={() => <div>Not Found</div>} />
        </Switch>
      </>
    </Router>
  );
};

export default Routes;

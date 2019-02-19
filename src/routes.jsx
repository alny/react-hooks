import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import Tasks from "./components/Tasks";
import Developers from "./components/Developers";
import Customers from "./components/Customers";

import Navbar from "./components/Layout";

const Routes = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/projects/:id" component={Projects} />
          <Route path="/tasks/:id" component={Tasks} />
          <Route path="/developers" component={Developers} />
          <Route path="/customers" component={Customers} />
          <Route component={() => <div>Not Found</div>} />
        </Switch>
      </>
    </Router>
  );
};

export default Routes;

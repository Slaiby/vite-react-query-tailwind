import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import history from "./history";
import { CartDrawer } from "./component/withReactQuery/cartDrawer";

const CartDisplay = (
  <div className="flex flex-col">
    <CartDrawer />
  </div>
);

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;

import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Login from "./Login";
import Dashboard from "./Dashboard";
// import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import history from "./history";
import { CartDrawer } from "./component/withReactQuery/cartDrawer";

const CartDisplay = () => (
  <div className="flex flex-col">
    <CartDrawer />
  </div>
);

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/cart" component={CartDisplay} />
        {/* <RestrictedRoute
          path="/dashboard"
          component={Dashboard}
          rolesToShowFor={["admin"]}
        />
        <RestrictedRoute
          path="/test"
          component={CartDisplay}
          rolesToShowFor={["Noob developer"]}
        /> */}
      </Switch>
    </Router>
  );
};

export default Routes;

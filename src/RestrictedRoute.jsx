import React, { Component } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAuthState } from "./auth-context";

const RestrictedRoute = ({ component: Component, rolesToShowFor, ...rest }) => {
  const { user } = useAuthState();
  let location = useLocation();

  if (!!user) {
    const userHasRequiredRole =
      user && rolesToShowFor.includes(user.role) ? true : false;
    return userHasRequiredRole ? (
      <Component />
    ) : (
      <p>No Privilage to see page</p>
    );
  } else {
    return <Redirect to="/login" state={{ from: location }} />;
  }
};
export default RestrictedRoute;

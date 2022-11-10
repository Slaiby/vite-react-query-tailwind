import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "./auth-context";
import useLocalStorage from "./uselocalStorageHook";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuthState();
  const [token] = useLocalStorage("refersh_token");
  console.log(
    "🚀 ~ file: PrivateRoute.tsx ~ line 9 ~ PrivateRoute ~ token",
    token
  );

  return (
    <Route
      {...rest}
      render={(props) =>
        !!user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

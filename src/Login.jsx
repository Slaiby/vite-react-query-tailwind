import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import {
  useAuthState,
  useAuthDispatch,
  doLogin,
  isAuthenticated,
  doLogout,
} from "./auth-context";

function Login() {
  const { user: loggedUser, status, error } = useAuthState();
  const dispatch = useAuthDispatch();
  const location = useLocation();
  const [user, setUser] = useState("");
  // if (isAuthenticated()) {
  //   doLogout(dispatch);
  // }
  // useEffect(() => {
  //   if (isAuthenticated()) {
  //     doLogout(dispatch);
  //   }
  // }, [user]);
  if (loggedUser)
    return <Navigate to="/dashboard" state={{ from: location }} replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin(dispatch, user);
    setUser("");
  };

  const handleChange = (e) => setUser(e.target.value);
  return (
    <div>
      <ul>
        <li>Usernames other than users of the system returns an error.</li>
        <li>After successful login, page is redirected to "Dashboard"</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter username"
            className="login-input"
            value={user}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </div>
      </form>
      {status === "rejected" && (
        <p style={{ color: "maroon", marginTop: "10px" }}>Error: {error}</p>
      )}
    </div>
  );
}

export default Login;

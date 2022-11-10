import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h3>Landing Page</h3>
      <hr />
      <div className="flex flex-col">
        If you try to go to
        <Link to="/dashboard" className="simple-link">
          Dashboard
        </Link>
        without logging in, it redirects you to
        <Link className="simple-link" to="/login">
          Login page.
        </Link>
      </div>
    </div>
  );
}

export default Landing;

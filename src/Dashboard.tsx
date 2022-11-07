import React from "react";
import { useAuthState } from "./auth-context";
import { Link } from "react-router-dom";
import { ProductDisplay } from "./component/withReactQuery/ProductDisplay";
import { Info } from "./component/withReactQuery/info";

function Dashboard() {
  const { user } = useAuthState();
  const { id, name, job, place } = user;

  return (
    <div>
      <ul>
        User
        <hr />
        <li>ID: {id}</li>
        <li>Name: {name}</li>
        <li>Job: {job}</li>
        <li>From: {place}</li>
      </ul>
      <div className="flex flex-col">
        <Info />
        <ProductDisplay />
      </div>
    </div>
  );
}

export default Dashboard;

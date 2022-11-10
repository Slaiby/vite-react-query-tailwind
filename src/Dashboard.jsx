import React from "react";
import { useAuthState } from "./auth-context";
import { ProductDisplay } from "./component/withReactQuery/ProductDisplay";
import { Info } from "./component/withReactQuery/info";

const Dashboard = () => {
  const { user } = useAuthState();
  // const { id, name, role, place } = user;

  return (
    <div>
      {/* <ul>
        User
        <hr />
        <li>ID: {id}</li>
        <li>Name: {name}</li>
        <li>Role: {role}</li>
        <li>From: {place}</li>
      </ul> */}
      <div className="flex flex-col">
        <Info />
        <ProductDisplay />
      </div>
    </div>
  );
};

export default Dashboard;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth-context";
import RequireAuth from "./required-auth";
import Landing from "./Landing";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { CartDrawer } from "./component/withReactQuery/cartDrawer";
const Layout = ({ children }) => {
  <div className="min-w-full">{children}</div>;
};
const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Landing />}> */}
      {/* public routes */}
      {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      <Route path="login" element={<Login />} />
      {/* <Route path="register" element={<Register />} /> */}
      {/* <Route path="linkpage" element={<LinkPage />} /> */}
      {/* <Route path="unauthorized" element={<Unauthorized />} /> */}

      {/* we want to protect these routes */}
      <Route element={<RequireAuth allowedRoles={["admin"]} />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<CartDrawer />} />
      </Route>
      {/* catch all */}
      <Route path="*" element={<p>missing</p>} />
      {/* </Route> */}
    </Routes>
  );
};

export default App;

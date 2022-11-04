import "./App.css";
import { ProductDisplay } from "./component/withReactQuery/ProductDisplay";
import { Info } from "./component/withReactQuery/info";
import { CartDrawer } from "./component/withReactQuery/cartDrawer";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const ProductDisplayContainer = (
  <div className="flex flex-col">
    <Info />
    <ProductDisplay />
  </div>
);

const CartDisplay = (
  <div className="flex flex-col">
    <CartDrawer />
  </div>
);

const App = () => {
  return (
    <div className="flex min-w-full justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={ProductDisplayContainer} />
          <Route path="/cart" element={CartDisplay} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

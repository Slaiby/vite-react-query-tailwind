import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchCart, fetchProducts } from "../../fetchers/products";
import { Product } from "./product";

export function CartDrawer(props) {
  const [
    { data: cart, isLoading: cartLoading },
    { data: products, isLoading: productLoading },
  ] = useQueries({
    queries: [
      {
        queryKey: ["cart"],
        queryFn: fetchCart,
      },
      {
        queryKey: ["products"],
        queryFn: fetchProducts,
        refetchOnMount: false,
        staleTime: 60 * 1000, // 1 minutes
      },
    ],
  });

  const cartProducts = useMemo(
    () =>
      products &&
      products.filter((product) => cart?.some((c) => c.id === product.id))
  );

  if (cartLoading) return <div>Loading...</div>;

  return (
    <div>
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <svg
          className="w-5 h-5 mr-2"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Your Cart
      </h5>
      <div className="flex flex-col">
        <div className="w-full h-full flex gap-x-8 gap-y-10 ml-0 flex-wrap items-center justify-center">
          {/* <p>Expensive calculation - {n}</p> */}
          {cartProducts &&
            cartProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}

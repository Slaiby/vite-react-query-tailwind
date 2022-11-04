import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../fetchers/products";
import { Product } from "./product";

export const ProductDisplay = () => {
  console.log("Render product dispaly");

  const { isError, isSuccess, isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    refetchOnMount: false,
    staleTime: 60 * 1000, // 1 minutes
  });

  if (isLoading) {
    console.log("Loading...");
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log("Error: ", error);
    return <div>Error...</div>;
  }

  return (
    <div className="w-full h-full flex gap-x-8 gap-y-10 ml-0 flex-wrap items-center justify-center">
      {data &&
        data.map((product) => <Product key={product.id} product={product} />)}
    </div>
  );
};

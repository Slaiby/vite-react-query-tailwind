import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../fetchers/products";

export function Info() {
  const { isError, isSuccess, isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    refetchOnMount: false,
    staleTime: 60 * 1000, // 1 minutes
  });
  const products = data;
  console.log("Products, from info", products);

  const TotalNumberOfProducts = products?.length;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-black">Products Info:</h1>
      <span className="text-xl font-bold text-blue-500">
        Toltal Products: {TotalNumberOfProducts}
      </span>
    </div>
  );
}

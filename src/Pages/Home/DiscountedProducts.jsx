import React from "react";
import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../axiosSecure/AxiosSecure";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router";

const DiscountedProducts = () => {
  const axiosSecure = AxiosSecure();
  const fetchDiscountedProducts = async () => {
    const res = await axiosSecure.get("/discounted");
    return res.data;
  };

  const {
    data: discountedProducts = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["discounted-products"],
    queryFn: fetchDiscountedProducts,
  });
console.log("Discounted Products Data:", discountedProducts);
  if (isLoading) return <Loader/>;
  if (isError) return <p className="text-red-500">{error.message}</p>;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-start text-[#1B365D]">
        Discounted Products
      </h2>
      <p className="mb-8 text-gray-600">Discover incredible savings on a curated selection of our best products, available now at discounted prices.</p>

      {discountedProducts.length === 0 ? (
        <p className="text-center text-gray-600">
          No discounted products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {discountedProducts.map((product) => (
             <Link to={`/products/${product._id}`} className="block"> 
            <div
              key={product._id}
              className=" bg-white rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600 line-through">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-red-600 font-bold">
                ${product.discountPrice.toFixed(2)}
              </p>
            </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default DiscountedProducts;

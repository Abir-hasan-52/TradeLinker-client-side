import React from "react";
import { useQuery } from "@tanstack/react-query";

import AxiosSecure from "../../axiosSecure/AxiosSecure";
import { Link } from "react-router";

const NewArrivals = () => {
  const axiosSecure = AxiosSecure();

  const fetchNewArrivals = async () => {
    const res = await axiosSecure.get("/new-arrivals");
    return res.data;
  };
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["new-arrivals"],
    queryFn: fetchNewArrivals,
  });
  console.log("New Arrivals Data:", products);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1B365D] mb-6">New Arrivals</h2>
        <p className="mb-8 text-gray-600">
          Explore our latest products that have just hit the shelves. Fresh styles and innovative designs await you
            in our new arrivals section.
        </p>
        {isLoading && <p>Loading...</p>}
        {isError && <p className="text-red-500">{error.message}</p>}

        {!isLoading && !isError && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.length === 0 && <p>No new arrivals available.</p>}
            {products.map((product) => (
              <Link to={`/products/${product._id}`} className="block">
                <div
                  key={product._id}
                  className="border-white rounded-lg p-4 hover:shadow-xl transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="font-semibold text-lg text-[#1B365D]">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;

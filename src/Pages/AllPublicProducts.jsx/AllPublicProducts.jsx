import React from "react";
import AxiosPublic from "../../axiosPublic/AxiosPublic";
import Loader from "../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const AllPublicProducts = () => {
  const axiosPublic = AxiosPublic();

  const fetchProducts = async () => {
    const res = await axiosPublic.get("/products");

    console.log("Products fetched:", res.data);
    return res.data;
  };

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log("Products fetched:", products);
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    console.log("Error fetching products:", error);
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-red-50">
        <h3 className="text-lg font-semibold text-red-700">
          Error loading products
        </h3>
        <p className="text-sm text-red-500 mt-2">{error.message}</p>
      </div>
    );
  }

  return (
    <div className=" max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">
        All Products
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>

                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-sm">
                    Stock: {product.main_quantity}
                  </span>
                  <span className="text-yellow-500 flex items-center">
                    {/* Simple star rating display */}
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 fill-current ${
                          i < product.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09L5.64 11.18 1 7.545l6.061-.545L10 2l2.939 5 6.061.545-4.64 3.636 1.518 6.91z" />
                      </svg>
                    ))}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    min_buying_quantity: {product.min_selling_quantity}
                  </span>
                </div>

                <p className="text-primary font-bold text-lg mb-4">
                  ${product.price?.toFixed(2) || "N/A"}
                </p>

                <div className="flex justify-between mt-auto gap-3">
                  <Link
                    to={`/products/${product._id}`}
                    className="btn btn-outline btn-sm flex-grow"
                  >
                    Details
                  </Link>

                  <button
                    className="btn btn-primary btn-sm flex-grow"
                    onClick={() => {
                      // Handle buy button click
                      alert(`Buy ${product.name}`);
                    }}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPublicProducts;

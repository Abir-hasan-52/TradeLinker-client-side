import React, { useState } from "react";
import AxiosPublic from "../../axiosPublic/AxiosPublic";
import Loader from "../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { FaTable, FaThLarge } from "react-icons/fa";

const AllPublicProducts = () => {
  const axiosPublic = AxiosPublic();

  const [viewMode, setViewMode] = useState("card"); // "card" or "table"
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Query will not automatically refetch when params change
  const {
    data: products = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const params = {};
      if (search) params.search = search;
      if (minPrice) params.minPrice = minPrice;
      if (maxPrice) params.maxPrice = maxPrice;
      const res = await axiosPublic.get("/products", { params });
      return res.data;
    },
    enabled: false, // disable automatic fetch
  });

  // Fetch all products initially on mount
  React.useEffect(() => {
    refetch();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    refetch(); // fetch with current filter params
  };

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-red-50">
        <h3 className="text-lg font-semibold text-red-700">
          Error loading products
        </h3>
        <p className="text-sm text-red-500 mt-2">{error.message}</p>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        All Products
      </h2>

      {/* Search + Filter */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row gap-4 mb-6 justify-center"
      >
        <input
          type="text"
          placeholder="Search by name or brand"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full md:w-1/3"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="input input-bordered w-32"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="input input-bordered w-32"
        />
        <button className="btn btn-primary">Search</button>
      </form>

      {/* View Toggle */}
      <div className="flex justify-end gap-2 mb-4">
        <button
          onClick={() => setViewMode("card")}
          className={`btn btn-sm ${
            viewMode === "card" ? "btn-primary" : "btn-outline"
          }`}
        >
          <FaThLarge /> Card
        </button>
        <button
          onClick={() => setViewMode("table")}
          className={`btn btn-sm ${
            viewMode === "table" ? "btn-primary" : "btn-outline"
          }`}
        >
          <FaTable /> Table
        </button>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No products found.</p>
      ) : viewMode === "card" ? (
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
                <p className="text-sm text-gray-500 mb-1">
                  Brand: {product.brandName}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Stock: {product.main_quantity}
                </p>
                <p className="text-md text-gray-400 mb-2">
                  Min_selling: {product.min_selling_quantity}
                </p>
                <p className="text-primary font-bold text-lg mb-4">
                  {product.discountPrice ? (
                    <>
                      <span className="line-through text-gray-500 mr-2">
                        ${product.price?.toFixed(2)}
                      </span>
                      <span className="text-red-600">
                        ${product.discountPrice.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <>${product.price?.toFixed(2)}</>
                  )}
                </p>
                <Link
                  to={`/products/${product._id}`}
                  className="btn btn-outline btn-sm mt-auto"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Stock</th>
                <th>Min_Selling</th>
                <th>Price</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.brandName}</td>
                  <td>{product.main_quantity}</td>
                  <td>{product.min_selling_quantity}</td>
                  <td>
                    {" "}
                    <p className="text-primary font-bold text-lg mb-4">
                      {product.discountPrice ? (
                        <>
                          <span className="line-through text-gray-500 mr-2">
                            ${product.price?.toFixed(2)}
                          </span>
                          <span className="text-red-600">
                            ${product.discountPrice.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <>${product.price?.toFixed(2)}</>
                      )}
                    </p>
                  </td>
                  <td>
                    <Link
                      to={`/products/${product._id}`}
                      className="btn btn-outline btn-xs"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllPublicProducts;

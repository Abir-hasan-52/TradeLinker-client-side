import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
 
import ProductCard from "./ProductCard";
import ProductsTable from "./ProductsTable";
import { MdViewModule, MdTableRows } from "react-icons/md";
import AxiosPublic from "../../axiosPublic/AxiosPublic";

const AllProducts = () => {
  const [view, setView] = useState("card");
  const axiosInstance= AxiosPublic();

  const fetchProducts = async () => {
    const res = await axiosInstance.get("/all-products");
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

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-500 mb-4"></div>
        <h3 className="text-lg font-semibold text-gray-700">Loading products...</h3>
        <p className="text-sm text-gray-500 mt-2">Please wait while we fetch the data</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-red-50">
        <h3 className="text-lg font-semibold text-red-700">Error loading products</h3>
        <p className="text-sm text-red-500 mt-2">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center font-bold my-5 text-[#1B365D]">All Products</h1>

      {/* View Toggle Buttons */}
      <div className="flex justify-end mb-4 space-x-4">
        <button
          onClick={() => setView("card")}
          className={`p-2 rounded-md text-2xl ${
            view === "card" ? "bg-blue-600 text-white" : "text-gray-500 hover:text-blue-600"
          }`}
          aria-label="Card View"
          title="Card View"
        >
          <MdViewModule />
        </button>
        <button
          onClick={() => setView("table")}
          className={`p-2 rounded-md text-2xl ${
            view === "table" ? "bg-blue-600 text-white" : "text-gray-500 hover:text-blue-600"
          }`}
          aria-label="Table View"
          title="Table View"
        >
          <MdTableRows />
        </button>
      </div>

      {/* Card View */}
      {view === "card" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      {/* Table View */}
      {view === "table" && (
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border rounded-xl shadow text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Brand</th>
                <th className="p-3">Category</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Qty</th>
                <th className="p-3">Min Qty</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductsTable key={product._id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllProducts;

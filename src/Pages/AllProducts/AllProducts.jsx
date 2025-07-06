import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard";
import ProductsTable from "./ProductsTable";

const AllProducts = () => {
  const products = useLoaderData();
  const [view, setView] = useState("card"); // 'card' or 'table'

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center font-bold my-5">All Products</h1>

      {/* View Toggle Dropdown */}
      <div className="flex justify-end mb-4">
        <select
          value={view}
          onChange={(e) => setView(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
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
                 <ProductsTable product={product}></ProductsTable>
              ))}
              
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllProducts;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import MyProductCard from "./MyProductCard";
import AxiosSecure from "../../axiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const accessToken = user?.accessToken;
  const userEmail = user?.email;
  const axiosInstance = AxiosSecure();

  const fetchProducts = async () => {
    const res = await axiosInstance.get(`/my-products?createdBy=${userEmail}`);
    return res.data;
  };

  const {
    data: MyProducts = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-products", userEmail],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-primary mb-8 hover:underline">
        My Products
      </h2>

      {MyProducts.length === 0 ? (
        <div className="text-center py-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No Products"
            className="w-24 mx-auto opacity-50 mb-4"
          />
          <p className="text-lg font-medium text-gray-600">
            No products found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {MyProducts.map((product) => (
            <MyProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProducts;

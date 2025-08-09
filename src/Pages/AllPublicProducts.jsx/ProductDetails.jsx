import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../../axiosPublic/AxiosPublic";
import Loader from "../../Components/Loader/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const axiosPublic = AxiosPublic();

  const fetchProductDetails = async () => {
    const res = await axiosPublic.get(`/products/${id}`);
    return res.data;
  };

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: fetchProductDetails,
  });

  if (isLoading) return <Loader />;

  if (isError) {
    return (
      <div className="text-center py-20 text-red-600">
        <p className="font-semibold">Error: {error.message}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">Product not found.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          <p className="text-lg">
            <span className="font-semibold">Brand:</span> {product.brandName}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Category:</span> {product.category}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Main Quantity:</span>{" "}
            {product.main_quantity}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Rating:</span> ⭐ {product.rating}
          </p>

          <p className="text-2xl font-bold text-primary">
            ${product.price?.toFixed(2)}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
            <Link
              to="/products"
              className="btn btn-outline btn-sm flex-grow"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

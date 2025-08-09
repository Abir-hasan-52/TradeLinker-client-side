// ProductDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../../axiosPublic/AxiosPublic";
import Loader from "../../Components/Loader/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosPublic = AxiosPublic();

  // fetch only when `id` exists
  const { data: product, isLoading, isError, error } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: async () => {
      // defensive - ensure id exists
      if (!id) return null;
      const res = await axiosPublic.get(`/products/${id}`);
      // log response for debugging
      console.log("GET /products/:id response:", res.data);
      return res.data || null;
    },
    enabled: !!id, // don't run until id is defined
    retry: 1,
  });

  // Debugging tip: if product is undefined, open devtools -> Network to inspect response
  // console.log("product:", product);

  if (isLoading) return <Loader />;

  if (isError) {
    console.error("Product details error:", error);
    return (
      <div className="text-center py-20 text-red-600">
        <p className="font-semibold">Error: {error?.message || "Failed to load product."}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p className="font-semibold">Product not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Now safe to read properties — product is guaranteed non-null here
  const {
    _id,
    name,
    image,
    description,
    brandName,
    category,
    main_quantity,
    rating,
    price,
  } = product;

  const handleBuyNow = () => {
    // implement buy flow: open modal / redirect to checkout / check stock etc.
    alert(`Buying ${name} (id: ${_id})`);
  };

  const handleAddToCart = () => {
    // implement add-to-cart
    alert(`Add ${name} to cart`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img
            src={image}
            alt={name}
            className="w-full h-96 object-cover rounded-lg shadow"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-600">{description || "No description available."}</p>

          <p className="text-lg">
            <span className="font-semibold">Brand:</span> {brandName || "—"}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Category:</span> {category || "—"}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Stock:</span> {main_quantity ?? "N/A"}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Rating:</span> ⭐ {rating ?? "N/A"}
          </p>

          <p className="text-2xl font-bold text-primary">
            ${typeof price === "number" ? price.toFixed(2) : "N/A"}
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleBuyNow}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

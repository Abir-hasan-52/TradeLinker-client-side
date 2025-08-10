import React, { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import AxiosPublic from "../../axiosPublic/AxiosPublic";
import Loader from "../../Components/Loader/Loader";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext";
import { FaArrowLeft } from "react-icons/fa";

const BuyModal = ({ product, onClose, onConfirm }) => {
  const [quantity, setQuantity] = useState(product.min_selling_quantity || 1);

  const handleChange = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) val = product.min_selling_quantity || 1;

    if (val < product.min_selling_quantity) val = product.min_selling_quantity;
    if (val > product.main_quantity) val = product.main_quantity;

    setQuantity(val);
  };

  const handleConfirm = () => {
    onConfirm(quantity);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Buy Product</h2>
        <p className="mb-2">
          <strong>Name:</strong> {product.name}
        </p>
        <p className="mb-4">
          <strong>Price:</strong>{" "}
          {product.discountPrice ? (
            <>
              <span className="line-through text-gray-500 mr-2">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-red-600">
                ${product.discountPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <>${product.price.toFixed(2)}</>
          )}
        </p>

        <label className="block mb-2 font-medium" htmlFor="quantity">
          Quantity (min {product.min_selling_quantity}, max{" "}
          {product.main_quantity})
        </label>
        <input
          id="quantity"
          type="number"
          min={product.min_selling_quantity}
          max={product.main_quantity}
          value={quantity}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          onClick={handleConfirm}
          className="btn btn-primary w-full"
          disabled={
            quantity < product.min_selling_quantity ||
            quantity > product.main_quantity
          }
        >
          Confirm Purchase
        </button>
      </div>
    </div>
  );
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosPublic = AxiosPublic();
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);

  const [showBuyModal, setShowBuyModal] = useState(false);

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: async () => {
      if (!id) return null;
      const res = await axiosPublic.get(`/products/${id}`);
      return res.data || null;
    },
    enabled: !!id,
    retry: 1,
  });

  const openBuyModal = () => {
    setShowBuyModal(true);
  };

  const closeBuyModal = () => {
    setShowBuyModal(false);
  };

  const handleConfirmPurchase = async (quantity) => {
    try {
      // Confirm with user before purchase
      const result = await Swal.fire({
        title: "Confirm Purchase",
        text: `Buy ${quantity} unit(s) of ${product.name}?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Buy",
      });

      if (!result.isConfirmed) return;

      // Prepare cart item data
      const cartItem = {
        userEmail: user?.email, // Replace with actual logged-in user's email
        productId: product._id,
        productName: product.name,
        price: product.discountPrice || product.price,
        min_buying_quantity: quantity,
        buyDate: new Date().toISOString(),
        category: product.category,
        description: product.description,
        image: product.image,
      };

      // Add to cart API
      const addCartRes = await axiosPublic.post("/cart", cartItem);

      if (addCartRes.status !== 200 && addCartRes.status !== 201) {
        throw new Error("Failed to add product to cart");
      }

      // Decrease product stock API
      const decStockRes = await axiosPublic.patch(
        `/decrease-quantity/${product._id}`,
        {
          quantityToBuy: quantity,
        }
      );

      if (decStockRes.status !== 200) {
        throw new Error("Failed to decrease product stock");
      }

      Swal.fire("Success", "Product added to cart!", "success");
      closeBuyModal();

      // Refresh product details so stock updates on UI
      queryClient.invalidateQueries(["productDetails", id]);
      queryClient.invalidateQueries(["products"]); // optional: refresh product list too
    } catch (err) {
      Swal.fire("Error", err.message || "Something went wrong.", "error");
    }
  };

  if (isLoading) return <Loader />;

  if (isError) {
    return (
      <div className="text-center py-20 text-red-600">
        <p className="font-semibold">
          {error?.message || "Failed to load product."}
        </p>
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

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">
            {product.description || "No description available."}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Brand:</span>{" "}
            {product.brandName || "—"}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Category:</span>{" "}
            {product.category || "—"}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Stock:</span>{" "}
            {product.main_quantity ?? "N/A"}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Rating:</span> ⭐{" "}
            {product.rating ?? "N/A"}
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

          <div className="flex gap-4 mt-6">
            <Link
              to="/products"
              className="btn btn-outline btn-sm flex-grow flex items-center gap-2"
            >
              <FaArrowLeft />
              Back
            </Link>
            <button
              onClick={openBuyModal}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {showBuyModal && (
        <BuyModal
          product={product}
          onClose={closeBuyModal}
          onConfirm={handleConfirmPurchase}
        />
      )}
    </div>
  );
};

export default ProductDetails;

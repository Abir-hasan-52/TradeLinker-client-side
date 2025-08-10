import React, { useState } from "react";
import AxiosSecure from "../../axiosSecure/AxiosSecure";
import Swal from "sweetalert2";

const DiscountModal = ({ product, onClose, onSave }) => {
  const [discountPrice, setDiscountPrice] = useState("");
  const axiosSecure = AxiosSecure();

  if (!product) return null;

  const handleSubmitDiscount = async () => {
    try {
      const discountNum = parseFloat(discountPrice);
      if (
        isNaN(discountNum) ||
        discountNum <= 0 ||
        discountNum >= product.price
      ) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Please enter a valid discount price less than the original price (${product.price})`,
          showConfirmButton: false,
          timer: 1500,
        });

        return;
      }

      await axiosSecure.patch(`/products/${product._id}/discount`, {
        discountPrice: discountNum,
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Discount updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      onSave(); // notify parent to refresh or update UI
      onClose(); // close modal
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to update discount",
        showConfirmButton: false,
        timer: 1500,
      });

      console.error(err);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Add Discount</h2>
        <p className="mb-2">
          <strong>Product:</strong> {product.name}
        </p>
        <p className="mb-4">
          <strong>Original Price:</strong> ${product.price.toFixed(2)}
        </p>
        <label className="block mb-2 font-medium" htmlFor="discountPrice">
          Discount Price
        </label>
        <input
          id="discountPrice"
          type="number"
          min="0"
          step="0.01"
          placeholder="Enter discount price"
          value={discountPrice}
          onChange={(e) => setDiscountPrice(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={handleSubmitDiscount}
          className="btn btn-primary w-full"
        >
          Save Discount
        </button>
      </div>
    </div>
  );
};

export default DiscountModal;

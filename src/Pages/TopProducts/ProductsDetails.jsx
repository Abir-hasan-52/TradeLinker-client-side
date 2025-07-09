import { useLoaderData } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";

const ProductsDetails = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [buyQuantity, setBuyQuantity] = useState(1);
  const [productData, setProductData] = useState(product);

  const {
    _id,
    image,
    name,
    brandName,
    category,
    price,
    rating,
    description,
    min_selling_quantity,
    main_quantity,
  } = productData; // <-- use productData here

  const handleBuyNow = async () => {
    if (buyQuantity < min_selling_quantity) {
      return Swal.fire({
        icon: "warning",
        title: "Minimum Quantity Required",
        text: `You must order at least ${min_selling_quantity} units.`,
      });
    }

    const response = await fetch(
      `https://trade-linker-server-side.vercel.app/decrease-quantity/${_id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantityToBuy: buyQuantity }),
      }
    );

    const result = await response.json();

    if (result.modifiedCount > 0) {
      // Update local state so UI reflects updated quantity immediately
      setProductData((prev) => ({
        ...prev,
        main_quantity: prev.main_quantity - buyQuantity,
      }));

      // Save order to cart collection
      const cartItem = {
        userEmail: user.email,
        name,
        image,
        brandName,
        category,
        description,
        min_buying_quantity: buyQuantity,
        buyDate: new Date(),
        productId: _id, // required to increase quantity on remove
      };

      await fetch("https://trade-linker-server-side.vercel.app/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItem),
      });

      Swal.fire({
        icon: "success",
        title: "Order Placed!",
        text: `You successfully ordered ${buyQuantity} items.`,
      });

      setShowModal(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed to place order",
        text: "Please try again later.",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-6">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm text-gray-500 mb-1">Brand: {brandName}</p>
      <p className="text-sm text-gray-500 mb-1">Category: {category}</p>
      <p className="text-gray-700 my-2">{description}</p>
      <p className="text-blue-600 font-semibold">Price: ${price}</p>
      <p>Available Quantity: {main_quantity}</p>
      <p>Minimum Order Quantity: {min_selling_quantity}</p>
      <p className="text-yellow-500 font-medium">Rating: {rating}⭐</p>

      <div className="mt-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Buy
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-2">Checkout: {name}</h3>
            <p>
              <strong>User:</strong> {user?.displayName}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <div className="flex items-center mt-3 space-x-3">
              <button
                className="px-3 py-1 bg-red-500 text-white rounded"
                onClick={() => setBuyQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="text-xl">{buyQuantity}</span>
              <button
                className="px-3 py-1 bg-green-500 text-white rounded"
                onClick={() => setBuyQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              onClick={handleBuyNow}
            >
              Confirm Buy
            </button>
            <button
              className="mt-2 w-full bg-gray-300 py-1 rounded"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDetails;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import { BsCart4 } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const userEmail = user?.email;
  const accessToken = user?.accessToken;

  useEffect(() => {
    if (!userEmail) return;

    fetch(`https://trade-linker-server-side.vercel.app/cart?userEmail=${userEmail}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCartProducts(data);
        setLoading(false);
      });
  }, [userEmail]);

  const handleRemove = async (product) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: `You are about to remove ${product.name} from cart.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
    });

    if (!confirm.isConfirmed) return;

    await fetch(`https://trade-linker-server-side.vercel.app/increase-quantity/${product.productId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: product.min_selling_quantity }),
    });

    const deleteRes = await fetch(`https://trade-linker-server-side.vercel.app/cart/${product._id}`, {
      method: "DELETE",
    });

    const deleteData = await deleteRes.json();
    if (deleteData.deletedCount > 0) {
      Swal.fire("Removed!", "Product has been removed from your cart.", "success");
      setCartProducts((prev) => prev.filter((item) => item._id !== product._id));
    } else {
      Swal.fire("Error", "Failed to remove product from cart.", "error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-primary flex items-center justify-center gap-2 mb-6">
        <BsCart4 size={32} />
        Your Cart
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <span className="loading loading-bars loading-lg text-primary"></span>
        </div>
      ) : cartProducts.length === 0 ? (
        <div className="text-center py-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="empty cart"
            className="mx-auto w-28 mb-4 opacity-50"
          />
          <p className="text-lg font-semibold text-gray-600">Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartProducts.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 shadow-md hover:shadow-xl transition border"
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-semibold">{product.name}</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="badge badge-outline badge-info">Brand: {product.brandName}</div>
                  <div className="badge badge-outline badge-secondary">Category: {product.category}</div>
                </div>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
                <div className="text-sm mt-1">Quantity: <span className="font-semibold">{product.min_buying_quantity}</span></div>
                <div className="text-sm">Date: <span className="text-gray-500">{new Date(product.buyDate).toLocaleDateString()}</span></div>
                <div className="card-actions justify-end mt-4">
                  <button
                    onClick={() => handleRemove(product)}
                    className="btn btn-sm btn-error text-white"
                  >
                    <FaTrashAlt className="mr-1" /> Remove
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

export default CartPage;

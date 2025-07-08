import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cartProducts, setCartProducts] = useState([]);
//   const [product, setProduct] = useState(product);
  const userEmail = user?.email;

  useEffect(() => {
    if (!userEmail) return;
    fetch(`http://localhost:3000/cart?userEmail=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setCartProducts(data));
  }, [userEmail]);

 const handleRemove = async (product) => {
  const confirm = await Swal.fire({
    title: "Are you sure?",
    text: `You are about to remove ${product.name} from cart`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, remove it!",
  });

  if (!confirm.isConfirmed) return;

//     Increase product quantity
  await fetch(`http://localhost:3000/increase-quantity/${product.productId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity: product.min_selling_quantity }),
  });

  // ✅ STEP 2: DELETE cart item
  const deleteRes = await fetch(`http://localhost:3000/cart/${product._id}`, {
    method: "DELETE",
  });

  const deleteData = await deleteRes.json();
  if (deleteData.deletedCount > 0) {
    Swal.fire("Removed!", "The product has been removed from your cart.", "success");
    setCartProducts((prev) => prev.filter((item) => item._id !== product._id));
  } else {
    Swal.fire("Error", "Failed to remove product from cart.", "error");
  }
};


  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
      {cartProducts.length === 0 ? (
        <p>No products in your cart.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded shadow border hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-gray-500">
                Brand: {product.brandName}
              </p>
              <p className="text-sm text-gray-500">
                Category: {product.category}
              </p>
              <p className="text-sm">Description: {product.description}</p>
              <p className="text-sm">
                Bought Quantity: {product.min_buying_quantity}
              </p>
              <p className="text-sm">
                Date: {new Date(product.buyDate).toLocaleDateString()}
              </p>
              <button
                onClick={() => handleRemove(product)}
                className="mt-3 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import MyProductCard from "./MyProductCard";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const accessToken = user?.accessToken;
  const userEmail = user?.email;

  useEffect(() => {
    if (!userEmail) return;

    fetch(
      `https://trade-linker-server-side.vercel.app/my-products?createdBy=${userEmail}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [userEmail, accessToken]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-primary mb-8 hover:underline">
        My Products
      </h2>

      {products.length === 0 ? (
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
          {products.map((product) => (
            <MyProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProducts;

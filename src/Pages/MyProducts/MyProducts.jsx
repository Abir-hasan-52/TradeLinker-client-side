import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import MyProductCard from "./MyProductCard";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
   const { user } = useContext(AuthContext);
    const userEmail = user?.email;

  useEffect(() => {
    if (!userEmail) return;

    fetch(`http://localhost:3000/my-products?createdBy=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [userEmail]);

  return (
    <div>
      <h2 className="text-2xl font-bold">My Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <MyProductCard key={product._id} product={product} ></MyProductCard>
             
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyProducts;

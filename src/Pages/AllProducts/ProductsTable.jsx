import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const ProductsTable = ({ product }) => {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="p-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-12 object-cover rounded"
        />
      </td>
      <td className="p-3">{product.name}</td>
      <td className="p-3">{product.brandName}</td>
      <td className="p-3">{product.category}</td>
      <td className="p-3">⭐ {product.rating}</td>
      <td className="p-3">{product.main_quantity}</td>
      <td className="p-3">{product.min_selling_quantity}</td>
      <td className="p-3">
        <Link
            to={`/all-products/${product._id}`}
          className="text-blue-600 hover:underline"
        >
          Update
        </Link>
      </td>
    </tr>
  );
};

export default ProductsTable;

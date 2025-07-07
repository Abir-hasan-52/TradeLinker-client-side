import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    brandName,
    category,
    image,
    description,
    price,
    main_quantity,
    min_selling_quantity,
    rating,
  } = product;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition w-full max-w-sm mx-auto">
      {/* Product Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-xl"
        />
        <span className="absolute top-2 left-2 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
          {category}
        </span>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-600">Brand: {brandName}</p>
        <p className="text-yellow-500 text-sm">⭐ {rating} / 5</p>
        <p className="text-green-600 font-semibold text-sm">৳ {price}</p>
        <p className="text-gray-500 text-sm line-clamp-2">{description}</p>
        <p className="text-sm mt-1">
          🟢 <strong>{main_quantity}</strong> in stock | Min Order:{" "}
          <strong>{min_selling_quantity}</strong>
        </p>
      </div>

      {/* Update Button */}
      <div className="mt-4">
        <Link to={`/all-products/${_id}`}>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

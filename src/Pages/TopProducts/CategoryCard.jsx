import React from "react";
import { Link } from "react-router";

const CategoryCard = ({ product }) => {
  const {
    _id,
    name,
    image,
    price,
    brandName,
    category,
    rating,
    main_quantity,
    min_selling_quantity,
    discountPrice,
  } = product;

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
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
        <div>
          {discountPrice && discountPrice < price ? (
            <>
              <span className="text-sm text-gray-500 line-through mr-2">
                ${price.toFixed(2)}
              </span>
              <span className="text-base font-bold text-blue-600">
                ${discountPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-base font-bold text-blue-600">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
        <p className="text-sm mt-1">
          🟢 <strong>{main_quantity}</strong> in stock | Min Order:{" "}
          <strong>{min_selling_quantity}</strong>
        </p>
      </div>

      {/* Update Button */}
      <div className="mt-4">
        <Link
          to={`/category-products/${encodeURIComponent(category)}/${_id}`}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition block text-center"
        >
          Details
        </Link>
      </div>
    </div>

     
  );
};

export default CategoryCard;

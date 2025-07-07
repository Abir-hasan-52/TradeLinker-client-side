import React from "react";
import { FaStar } from "react-icons/fa";

const MyProductCard = ({ product }) => {
  const {
    image,
    name,
    brandName,
    category,
    main_quantity,
    min_selling_quantity,
    description,
    price,
    rating,
  } = product;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col md:flex-row gap-4 border border-gray-100">
      {/* Image */}
      <div className="w-full md:w-40 h-40">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mb-1">Brand: <span className="font-medium">{brandName}</span></p>
        <p className="text-sm text-gray-500 mb-1">Category: {category}</p>
        <p className="text-sm text-gray-500 mb-1">
          Quantity: {main_quantity} | Minimum: {min_selling_quantity}
        </p>
        <p className="text-sm text-gray-700 mt-2">{description}</p>

        {/* Price and Rating */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-semibold text-blue-600">${price}</span>
          <div className="flex items-center text-yellow-500 gap-1">
            <FaStar />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;

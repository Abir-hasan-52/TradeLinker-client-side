import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import DiscountModal from "./DiscountModal";

const MyProductCard = ({ product, onDiscountUpdate }) => {
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
    discountPrice,
  } = product;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDiscountModal = () => setIsModalOpen(true);
  const closeDiscountModal = () => setIsModalOpen(false);

  // After discount is saved, notify parent to refresh
  const handleDiscountSave = () => {
    if (onDiscountUpdate) onDiscountUpdate();
    closeDiscountModal();
  };

  return (
    <>
      <div className="card md:card-side bg-base-100  shadow-md hover:shadow-xl transition duration-200">
        <figure className="md:w-48 h-48 p-4">
          <img
            src={image}
            alt={name}
            className="rounded-xl w-full h-full object-cover"
          />
        </figure>

        <div className="card-body py-4 px-4 flex-1">
          <h2 className="card-title text-lg md:text-xl font-semibold text-neutral-800">
            {name}
          </h2>
          <p className="text-sm text-gray-600">
            Brand: <span className="font-medium">{brandName}</span>
          </p>
          <p className="text-sm text-gray-600">Category: {category}</p>
          <p className="text-sm text-gray-600">
            Quantity: <span className="font-medium">{main_quantity}</span> | Min:{" "}
            <span className="font-medium">{min_selling_quantity}</span>
          </p>
          <p className="text-sm text-gray-700 mt-1 line-clamp-2">{description}</p>

          <div className="mt-2 flex items-center justify-between">
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

            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar className="text-sm" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>

          {/* Discount Button */}
          <button
            onClick={openDiscountModal}
            className="btn btn-outline btn-sm mt-4"
          >
            Add Discount
          </button>
        </div>
      </div>

      {isModalOpen && (
        <DiscountModal
          product={product}
          onClose={closeDiscountModal}
          onSave={handleDiscountSave}
        />
      )}
    </>
  );
};

export default MyProductCard;

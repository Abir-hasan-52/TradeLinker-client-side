import React from "react";

const DiscountedProducts = ({ products }) => {
  products= products || []; // Fallback to empty array if no products are passed
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1B365D] mb-6">Discounted Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.length === 0 && <p>No discounted products available.</p>}
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 hover:shadow-lg transition relative"
            >
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                SALE
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-lg text-[#1B365D]">
                {product.name}
              </h3>
              <p className="text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </p>
              <p className="text-red-600 font-bold">
                ${product.discountedPrice.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountedProducts;

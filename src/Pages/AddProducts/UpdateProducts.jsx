import axios from "axios";
import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  const { user } = useContext(AuthContext);
  const UpdateProducts = useLoaderData();
  // console.log(UpdateProducts);
  const navigate = useNavigate();
  const categories = [
    "Electronics & Gadgets",
    "Home & Kitchen Appliances",
    "Fashion & Apparel",
    "Industrial Machinery & Tools",
    "Health & Beauty",
    "Automotive Parts & Accessories",
    "Office Supplies & Stationery",
  ];

  const {
    _id,
    image,
    name,
    brandName,
    category,
    main_quantity,
    min_selling_quantity,
    description,
    price,
    rating,
  } = UpdateProducts;
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedProduct = {
      image: form.image.value,
      name: form.name.value,
      brandName: form.brand.value,
      min_selling_quantity: parseInt(form.minQuantity.value),
      main_quantity: parseInt(form.quantity.value),
      category: form.category.value,
      description: form.shortDesc.value,
      price: parseFloat(form.price.value),
      rating: parseFloat(form.rating.value),
      hrName: form.hrName.value,
      createdBy: form.createdBy.value,
    };

    // console.log("Updated Product:", updatedProduct);

    // post api
    axios
      .put(`https://trade-linker-server-side.vercel.app/update-product/${_id}`, updatedProduct)
      .then((response) => {
        // console.log("Product updated successfully:", response.data);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/all-products");
      })
      .catch((error) => {
        // console.error("Error updating product:", error);

        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `Failed to update product: ${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10 mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#1E293B] underline underline-offset-4">
        Update Product
      </h2>

      <form
        onSubmit={handleUpdateProduct}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Image URL */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[#1E293B]">
            Product Image URL
          </label>
          <input
            type="text"
            name="image"
            defaultValue={image}
            placeholder="https://example.com/image.jpg"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FB3E8] outline-none"
            required
          />
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-[#1E293B]">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm font-medium text-[#1E293B]">
            Brand Name
          </label>
          <input
            type="text"
            name="brand"
            defaultValue={brandName}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-[#1E293B]">
            Main Quantity
          </label>
          <input
            type="number"
            name="quantity"
            defaultValue={main_quantity}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Min Selling Quantity */}
        <div>
          <label className="block text-sm font-medium text-[#1E293B]">
            Min Selling Quantity
          </label>
          <input
            type="number"
            name="minQuantity"
            defaultValue={min_selling_quantity}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Category */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[#1E293B]">
            Category
          </label>
          <select
            name="category"
            defaultValue={category}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FB3E8]"
            required
          >
            <option value="">Select category</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[#1E293B]">
            Short Description
          </label>
          <textarea
            name="shortDesc"
            defaultValue={description}
            rows="4"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-[#1E293B]">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            step="0.01"
            defaultValue={price}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-[#1E293B]">
            Rating (1–5)
          </label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            defaultValue={rating}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* HR Info Header */}
        <div className="md:col-span-2 text-center mt-4">
          <h4 className="text-lg font-semibold text-[#1E293B]">
            HR Information
          </h4>
        </div>

        {/* HR Name */}
        <div>
          <label className="block text-sm font-medium text-[#1E293B]">
            HR Name
          </label>
          <input
            type="text"
            name="hrName"
            defaultValue={user?.displayName}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* HR Email */}
        <div>
          <label className="block text-sm font-medium text-[#1E293B]">
            HR Email
          </label>
          <input
            type="email"
            name="createdBy"
            defaultValue={user?.email}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#4FB3E8] hover:bg-[#38A5D3] text-white font-semibold px-6 py-2 rounded-md shadow transition"
          >
            Update Product
          </button>
        </div>
      </form>

      {/* Bottom Static Info */}
      <div className="mt-10 p-5 bg-[#F1F5F9] border border-gray-200 rounded-md">
        <h3 className="text-lg font-semibold mb-2 text-[#1E293B]">
          Why Update Product?
        </h3>
        <p className="text-sm text-gray-700">
          Keeping your product info updated ensures accurate pricing, stock
          levels, and business credibility. Be clear and honest about your
          items. Wholesale buyers rely on this data to make decisions.
        </p>
      </div>
    </div>
  );
};

export default UpdateProducts;

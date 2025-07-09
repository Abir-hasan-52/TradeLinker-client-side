import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const categories = [
    "Electronics & Gadgets",
    "Home & Kitchen Appliances",
    "Fashion & Apparel",
    "Industrial Machinery & Tools",
    "Health & Beauty",
    "Automotive Parts & Accessories",
    "Office Supplies & Stationery",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const newProduct = {
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

    // console.log("Submitted Product:", newProduct);

    // Optional: reset form
    // form.reset();

    // post api
    axios
      .post(
        "https://trade-linker-server-side.vercel.app/add-product",
        newProduct
      )
      .then((response) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Product added successfully!${response.data}`,
          showConfirmButton: false,
          timer: 1500,
        });
        // console.log("Product added successfully:", response.data);
        // alert("Product added successfully!");
      })
      .catch((error) => {
        
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Failed to add product. Please try again.",
          showConfirmButton: false,
          timer: 1500,
        });
        // console.error("Error adding product:", error);
        // alert("Failed to add product. Please try again.");
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-6 underline underline-offset-4">
        Add New Product
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Image URL */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-sm text-[#1E293B]">Product Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="https://example.com/image.jpg"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Product Name */}
        <div>
          <label className="text-sm text-[#1E293B]">Product Name</label>
          <input
            type="text"
            name="name"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Brand */}
        <div>
          <label className="text-sm text-[#1E293B]">Brand Name</label>
          <input
            type="text"
            name="brand"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="text-sm text-[#1E293B]">Main Quantity</label>
          <input
            type="number"
            name="quantity"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Minimum Selling Quantity */}
        <div>
          <label className="text-sm text-[#1E293B]">
            Minimum Selling Quantity
          </label>
          <input
            type="number"
            name="minQuantity"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-sm text-[#1E293B]">Category</label>
          <select
            name="category"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB3E8]"
            required
          >
            <option value="">Select category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Short Description */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-sm text-[#1E293B]">Short Description</label>
          <textarea
            name="shortDesc"
            rows="3"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="text-sm text-[#1E293B]">Price (per unit)</label>
          <input
            type="number"
            step="0.01"
            name="price"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="text-sm text-[#1E293B]">Rating (1–5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>
        <div className="mt-3 col-span-1 flex justify-center items-center md:col-span-2">
          <label className=" block font-medium mb-1">HR Information</label>
        </div>
        {/* HR Name */}
        <div>
          <label className="text-sm text-[#1E293B]">HR Name </label>
          <input
            type="text"
            name="hrName"
            placeholder="Enter HR Name"
            defaultValue={user?.displayName}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* HR email */}
        <div>
          <label className="text-sm text-[#1E293B]">HR Email</label>
          <input
            type="email"
            name="createdBy"
            placeholder=""
            defaultValue={user?.email}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB3E8]"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-[#4FB3E8] hover:bg-[#38a1d8] text-white font-semibold px-6 py-2 rounded-md transition"
          >
            Add Product
          </button>
        </div>
      </form>

      {/* Static Info */}
      <div className="mt-10 p-4 bg-gray-50 border rounded">
        <h3 className="text-lg font-semibold mb-2">Why Add Products?</h3>
        <p className="text-sm text-gray-700">
          Add your products to reach wholesale buyers worldwide. Ensure image
          URLs are valid and descriptions are accurate. Minimum selling quantity
          helps maintain large-scale business structure.
        </p>
      </div>
    </div>
  );
};

export default AddProducts;

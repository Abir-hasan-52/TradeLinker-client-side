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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const newProduct = {
      image: form.image.value.trim(),
      name: form.name.value.trim(),
      brandName: form.brand.value.trim(),
      min_selling_quantity: parseInt(form.minQuantity.value),
      main_quantity: parseInt(form.quantity.value),
      category: form.category.value,
      description: form.shortDesc.value.trim(),
      price: parseFloat(form.price.value),
      rating: parseFloat(form.rating.value),
      hrName: form.hrName.value.trim(),
      createdBy: form.createdBy.value.trim(),
    };

    try {
      const res = await axios.post(
        "https://trade-linker-server-side.vercel.app/add-product",
        newProduct
      );

      if (res?.data?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset(); // reset form on success
      } else {
        throw new Error("Insert failed");
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to add product. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center text-primary mb-6 underline underline-offset-4">
        Add New Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Image URL */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Product Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="https://example.com/image.jpg"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Brand Name</label>
          <input
            type="text"
            name="brand"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Main Quantity</label>
          <input
            type="number"
            name="quantity"
            min={1}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Minimum Selling Quantity</label>
          <input
            type="number"
            name="minQuantity"
            min={1}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          >
            <option value="">-- Select a category --</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Short Description</label>
          <textarea
            name="shortDesc"
            rows="3"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Price (USD)</label>
          <input
            type="number"
            name="price"
            step="0.01"
            min="0"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Rating (1–5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="mt-3 col-span-1 md:col-span-2 flex justify-center">
          <span className="text-sm font-semibold text-gray-700">HR Information</span>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">HR Name</label>
          <input
            type="text"
            name="hrName"
            defaultValue={user?.displayName || ""}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">HR Email</label>
          <input
            type="email"
            name="createdBy"
            defaultValue={user?.email || ""}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-2 rounded transition-all"
          >
            Add Product
          </button>
        </div>
      </form>

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

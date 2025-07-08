import axios from "axios";
import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const UpdateProducts = () => {
  const { user } = useContext(AuthContext);
  const UpdateProducts = useLoaderData();
  console.log(UpdateProducts);
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
    
        console.log("Updated Product:", updatedProduct);
    
        // post api
        axios.put(`http://localhost:3000/update-product/${_id}`, updatedProduct)
        .then((response) => {
            console.log("Product updated successfully:", response.data);
            alert("Product updated successfully!");
        })
        .catch((error) => {
            console.error("Error updating product:", error);
            alert("Failed to update product. Please try again.");
        });
         
    };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-6 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Product</h2>
      <form
        onSubmit={handleUpdateProduct}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Image URL */}
        <div className="col-span-1 md:col-span-2">
          <label className="block font-medium mb-1">Product Image URL</label>
          <input
            type="text"
            name="image"
            defaultValue={image}
            placeholder="https://example.com/image.jpg"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Product Name */}
        <div>
          <label className="block font-medium mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block font-medium mb-1">Brand Name</label>
          <input
            type="text"
            name="brand"
            defaultValue={brandName}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-medium mb-1">Main Quantity</label>
          <input
            type="number"
            name="quantity"
            defaultValue={main_quantity}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Minimum Selling Quantity */}
        <div>
          <label className="block font-medium mb-1">
            Minimum Selling Quantity
          </label>
          <input
            type="number"
            name="minQuantity"
            defaultValue={min_selling_quantity}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div className="col-span-1 md:col-span-2">
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            defaultValue={category}
            className="w-full border p-2 rounded"
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
          <label className="block font-medium mb-1">Short Description</label>
          <textarea
            name="shortDesc"
            defaultValue={description}
            rows="3"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price (per unit)</label>
          <input
            type="number"
            step="0.01"
            name="price"
            defaultValue={price}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block font-medium mb-1">Rating (1–5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            defaultValue={rating}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="mt-3 col-span-1 flex justify-center items-center md:col-span-2">
          <label className=" block font-medium mb-1">HR Information</label>
        </div>
        {/* HR Name */}
        <div>
          <label className="block font-medium mb-1">HR Name </label>
          <input
            type="text"
            name="hrName"

            placeholder="Enter HR Name"
            defaultValue={user?.displayName}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* HR email */}
        <div>
          <label className="block font-medium mb-1">HR Email</label>
          <input
            type="email"
            name="createdBy"
            placeholder=""
            defaultValue={user?.email}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Update
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

export default UpdateProducts;

import React, { useState } from "react";
import { useNavigate } from "react-router";

const AllCategory = () => {
  const [loadingCategory, setLoadingCategory] = useState(null);
  const navigate = useNavigate();

  const categories = [
    {
      name: "Electronics & Gadgets",
      image:
        "https://i.ibb.co/nMFjPjk9/high-angle-view-digital-camera-table-1-1024x683-jpg.webp",
    },
    {
      name: "Home & Kitchen Appliances",
      image: "https://i.ibb.co/Sw5s8NjV/1690969614632.png",
    },
    {
      name: "Fashion & Apparel",
      image: "https://i.ibb.co/KjPSN1zW/images-5.jpg",
    },
    {
      name: "Industrial Machinery & Tools",
      image: "https://i.ibb.co/53QDTQW/machine-tool.jpg",
    },
    {
      name: "Health & Beauty",
      image: "https://i.ibb.co/4ZWycvqY/health-and-beauty.jpg",
    },
    {
      name: "Automotive Parts & Accessories",
      image: "https://i.ibb.co/TDtb0F5k/Car-Accessories.webp",
    },
    {
      name: "Office Supplies & Stationery",
      image: "https://i.ibb.co/b5YWkKx1/shahjahan-brothers-pic-jpg1.jpg",
    },
  ];

  const handleCategoryClick = (name) => {
    setLoadingCategory(name);
    setTimeout(() => {
      navigate(`/category-products/${encodeURIComponent(name)}`);
    }, 1000); 
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() => handleCategoryClick(cat.name)}
          className="cursor-pointer shadow rounded overflow-hidden hover:shadow-lg transition relative"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-3 font-semibold text-center">
            {loadingCategory === cat.name ? "Loading..." : cat.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCategory;

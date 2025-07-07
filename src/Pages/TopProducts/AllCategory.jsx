import React from 'react';
import { Link } from 'react-router'; 

const AllCategory = () => {
  const categories = [
  {
    name: "Electronics & Gadgets",
    image: "https://i.ibb.co/nMFjPjk9/high-angle-view-digital-camera-table-1-1024x683-jpg.webp",
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {categories.map((cat) => (
        <Link key={cat.name} to={`category-products/${encodeURIComponent(cat.name)}`}>
          <div className="shadow rounded overflow-hidden hover:shadow-lg transition">
            <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover" />
            <div className="p-3 font-semibold text-center">{cat.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllCategory;
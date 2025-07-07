import { useParams } from "react-router"; // ঠিক import
import { useEffect, useState } from "react";

import CategoryCard from "./CategoryCard";
 

const TopProducts = () => {
  const { categoryName } = useParams();
   
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/category-products?category=${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);  
        setProducts(data);
      });
  }, [categoryName]);
 



  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Products in: {decodeURIComponent(categoryName)}
      </h2>

      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <CategoryCard key={product._id} product={product} />
             
          ))}
        </div>
      )}
    </div>
  );
};

export default TopProducts;

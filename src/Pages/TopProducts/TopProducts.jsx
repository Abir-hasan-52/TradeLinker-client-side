import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import CategoryCard from "./CategoryCard";
import Loader from "../../Components/Loader/Loader";

const TopProducts = () => {
  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFiltered, setShowFiltered] = useState(false);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    setLoading(true); // Start loading
    fetch(
      `https://trade-linker-server-side.vercel.app/category-products?category=${categoryName}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setShowFiltered(false);
        setLoading(false);  
      });
  }, [categoryName]);

  // const handleFilterToggle = () => {
  //   if (!showFiltered) {
  //     const filtered = products.filter(
  //       (product) => product.minimum_selling_quantity > 100
  //     );
  //     setFilteredProducts(filtered);
  //     Swal.fire({
  //       icon: "info",
  //       title: "Filter Applied",
  //       text: "Showing products with Minimum Selling Quantity greater than 100",
  //       timer: 2000,
  //       showConfirmButton: false,
  //     });
  //   } else {
  //     setFilteredProducts(products);
  //     Swal.fire({
  //       icon: "info",
  //       title: "Filter Removed",
  //       text: "Showing all products in this category",
  //       timer: 2000,
  //       showConfirmButton: false,
  //     });
  //   }
  //   setShowFiltered(!showFiltered);
  // };

  return (
    <div className="p-6">
      <h2 className="max-w-7xl mx-auto text-2xl font-bold mb-4">
        Products in: {decodeURIComponent(categoryName)}
      </h2>

      {/* <button
        onClick={handleFilterToggle}
        className="mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {showFiltered ? "Show All Products" : "Show Available Products"}
      </button> */}

      {showFiltered && (
        <p className="text-sm text-gray-600 mb-4">
          Showing only products with{" "}
          <strong>Minimum Selling Quantity &gt; 100</strong>.
        </p>
      )}

      {loading ? (
        <Loader/>
      ) : filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <CategoryCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopProducts;

import Navbar from "../components/Navbar/Navbar.jsx";
import { getAllproducts } from "../api/getallproducts.js";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard.jsx";
import { useCart } from "../context/CartContext.jsx";
import { getAllcategories } from "../api/getAllCategories.js";
import { getProductsbyCategory } from "../utils/getProductsbyCategory.js";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("All");
  const { cart } = useCart();
  console.log({ cart });

  useEffect(() => {
    (async () => {
      const products = await getAllproducts();
      const categories = await getAllcategories();
      const updatedCategories = [...categories, { id: "1a", name: "All" }];
      setProducts(products);
      setcategories(updatedCategories);
    })();
  }, []);

  const onCategoryClick = (category) => {
    setselectedCategory(category)
  };

  const filteredCategories = getProductsbyCategory(products, selectedCategory);

  return (
    <>
      <Navbar />
      <main className="!pt-8 !px-2 sm:!px-4 md:!px-6 lg:!px-8">
        <div className="flex flex-wrap gap-4 justify-center !mb-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-green-400 !p-1 hover:cursor-pointer rounded-full font-semibold rounded !px-4 !py-2"
              onClick={() => onCategoryClick(category.name)}
            >
              {category.name}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center">
          {filteredCategories.length > 0 ?
            filteredCategories.map((product) => (
              <ProductCard key={product.id} product={product} />
            )) : <h2 className="text-center w-full">No products found.</h2>}
        </div>
      </main>
    </>
  );
}


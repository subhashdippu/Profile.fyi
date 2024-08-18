import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products.json";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20">
      <div className="text-left">
        <h2 className="title">Best food in Delhi NCR</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

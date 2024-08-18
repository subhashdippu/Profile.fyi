import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>

        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm bg-green text-blue">$ </span>{" "}
            {product.price.toFixed(2)}
          </h5>
          <button
            className="btn bg-green text-white"
            onClick={() => addToCart(product)}
          >
            Add to Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

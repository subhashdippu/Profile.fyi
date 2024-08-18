import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={item.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}!</h2>
        <p>{item.recipe}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm bg-green text-blue">$ </span> {item.price}
          </h5>
          <button className="btn bg-green text-white">Add to Cart </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

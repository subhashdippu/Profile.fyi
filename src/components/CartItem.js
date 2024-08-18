import React from "react";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex items-center justify-between border-b py-2">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-700">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          value={item.quantity}
          min="1"
          className="w-16 text-center border rounded mr-4"
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

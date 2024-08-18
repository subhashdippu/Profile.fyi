import React from "react";

const CartPage = ({ cart, updateQuantity, removeItem }) => {
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item._id}
                className="border p-4 rounded-lg flex items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-700">{item.recipe}</p>
                  <p className="text-green-500">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity - 1)
                      }
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item._id, parseInt(e.target.value))
                      }
                      className="mx-2 w-12 text-center"
                    />
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity + 1)
                      }
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item._id)}
                      className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <h2 className="text-2xl font-bold">
              Subtotal: ${calculateSubtotal().toFixed(2)}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

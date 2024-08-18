import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart(
      cart.map((item) => (item._id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Banner />
      <Categories />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route
          path="/cart-page"
          element={
            <CartPage
              cart={cart}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

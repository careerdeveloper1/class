import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Grocery from "./pages/Grocery";
import Electronics from "./pages/Electronics";
import Furniture from "./pages/Furniture";
import Contact from "./pages/Contact";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/grocery" element={<Grocery addToCart={addToCart} />} />
        <Route path="/electronics" element={<Electronics addToCart={addToCart} />} />
        <Route path="/furniture" element={<Furniture addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="navbar">
        <h1 className="logo">🛒 Vishal's Store</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Grocery</a></li>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Cart (0)</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to Vishal's Mega Store 🎉</h2>
        <p>Best Deals on Grocery, Electronics & Furniture!</p>
        <button className="shop-btn">Start Shopping</button>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>🔥 Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2" alt="Fresh Apples" />
            <h3>Fresh Apples</h3>
            <p>₹120</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8" alt="Laptop" />
            <h3>Laptop Pro X</h3>
            <p>₹55,000</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7" alt="Luxury Sofa" />
            <h3>Luxury Sofa</h3>
            <p>₹18,000</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1580894908361-967195033215" alt="Wireless Headphones" />
            <h3>Wireless Headphones</h3>
            <p>₹1,999</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1600490054357-26a4c93a43e2" alt="Dining Table" />
            <h3>Dining Table</h3>
            <p>₹9,500</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1568640347023-25d58b234d4d" alt="Organic Milk" />
            <h3>Organic Milk Pack</h3>
            <p>₹60</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Vishal's Store. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

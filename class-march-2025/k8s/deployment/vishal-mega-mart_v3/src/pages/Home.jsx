import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import apple from "../assets/images/apple.jpg";
import laptop from "../assets/images/laptop.jpg";
import sofa from "../assets/images/sofa.jpg";

const featuredProducts = [
  { name: "Fresh Apples", price: 120, image: apple },
  { name: "Laptop Pro X", price: 55000, image: laptop },
  { name: "Luxury Sofa", price: 18000, image: sofa },
];

function Home({ addToCart }) {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-4">🛒 Welcome to Vishal's Mega Store</h1>
        <p className="text-xl mb-6">Great Deals on Grocery, Electronics & Furniture!</p>
        <Link to="/grocery">
          <button className="bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-200">
            Start Shopping →
          </button>
        </Link>
      </div>

      {/* Featured Products */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">🔥 Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((p, i) => (
            <ProductCard key={i} product={p} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">🛍 Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <Link to="/grocery">
            <div className="bg-green-200 rounded-xl p-8 text-center hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-2">Grocery</h3>
              <p>Fresh food, fruits, and daily needs</p>
            </div>
          </Link>
          <Link to="/electronics">
            <div className="bg-blue-200 rounded-xl p-8 text-center hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-2">Electronics</h3>
              <p>Latest gadgets & accessories</p>
            </div>
          </Link>
          <Link to="/furniture">
            <div className="bg-purple-200 rounded-xl p-8 text-center hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-2">Furniture</h3>
              <p>Stylish and comfortable</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Deals Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">⚡ Deals of the Day</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <ProductCard product={{ name: "Wireless Headphones", price: 1999, image: laptop }} addToCart={addToCart} />
          <ProductCard product={{ name: "Dining Table", price: 9500, image: sofa }} addToCart={addToCart} />
          <ProductCard product={{ name: "Organic Milk Pack", price: 60, image: apple }} addToCart={addToCart} />
        </div>
      </section>
    </div>
  );
}
export default Home;

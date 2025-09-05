import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white min-h-[70vh] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to Vishal's Store</h1>
      <p className="text-xl mb-8">✨ Best Grocery, Electronics, and Furniture at your fingertips ✨</p>
      <div className="flex gap-6">
        <Link to="/grocery">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl shadow-md hover:bg-yellow-500">
            Shop Grocery
          </button>
        </Link>
        <Link to="/electronics">
          <button className="bg-green-400 text-black px-6 py-3 rounded-xl shadow-md hover:bg-green-500">
            Shop Electronics
          </button>
        </Link>
        <Link to="/furniture">
          <button className="bg-blue-400 text-black px-6 py-3 rounded-xl shadow-md hover:bg-blue-500">
            Shop Furniture
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Home;

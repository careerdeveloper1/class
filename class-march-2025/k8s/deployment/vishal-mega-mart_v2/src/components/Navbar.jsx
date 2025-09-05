import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="bg-indigo-600 shadow-md p-4 flex justify-between items-center">
      <h2 className="text-white font-bold text-xl">🛒 Vishal's Store</h2>
      <ul className="flex gap-6 text-white">
        <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
        <li><Link to="/grocery" className="hover:text-yellow-300">Grocery</Link></li>
        <li><Link to="/electronics" className="hover:text-yellow-300">Electronics</Link></li>
        <li><Link to="/furniture" className="hover:text-yellow-300">Furniture</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
        <li><Link to="/cart" className="hover:text-yellow-300 font-semibold">Cart ({cartCount})</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/grocery">Grocery</Link>
      <Link to="/electronics">Electronics</Link>
      <Link to="/furniture">Furniture</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cart">Cart (0)</Link>
    </nav>
  );
}

export default Navbar;

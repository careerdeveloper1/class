import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>Vishal's Store</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
        <li><Link to="/electronics">Electronics</Link></li>
        <li><Link to="/furniture">Furniture</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;

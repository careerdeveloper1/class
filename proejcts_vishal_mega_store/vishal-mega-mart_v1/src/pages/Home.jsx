import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Vishal's Store</h1>
      <p>Find the best Grocery, Electronics, and Furniture products here!</p>
      <div className="categories">
        <Link to="/grocery"><button>Shop Grocery</button></Link>
        <Link to="/electronics"><button>Shop Electronics</button></Link>
        <Link to="/furniture"><button>Shop Furniture</button></Link>
      </div>
    </div>
  );
}
export default Home;

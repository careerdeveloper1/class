import ProductCard from "../components/ProductCard";
import laptop from "../assets/images/laptop.jpg";

const products = [
  { name: "Laptop", price: 50000, image: laptop },
  { name: "Headphones", price: 2000, image: laptop },
];

function Electronics({ addToCart }) {
  return (
    <div>
      <h2>Electronics</h2>
      <div className="product-list">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} addToCart={addToCart}/>
        ))}
      </div>
    </div>
  );
}
export default Electronics;

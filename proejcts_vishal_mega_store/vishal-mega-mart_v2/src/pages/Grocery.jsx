import ProductCard from "../components/ProductCard";
import apple from "../assets/images/apple.jpg";

const products = [
  { name: "Apples", price: 100, image: apple },
  { name: "Milk", price: 50, image: apple },
];

function Grocery({ addToCart }) {
  return (
    <div>
      <h2>Grocery Products</h2>
      <div className="product-list">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} addToCart={addToCart}/>
        ))}
      </div>
    </div>
  );
}
export default Grocery;

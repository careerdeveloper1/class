import ProductCard from "../components/ProductCard";
import sofa from "../assets/images/sofa.jpg";

const products = [
  { name: "Sofa", price: 15000, image: sofa },
  { name: "Table", price: 7000, image: sofa },
];

function Furniture({ addToCart }) {
  return (
    <div>
      <h2>Furniture</h2>
      <div className="product-list">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} addToCart={addToCart}/>
        ))}
      </div>
    </div>
  );
}
export default Furniture;

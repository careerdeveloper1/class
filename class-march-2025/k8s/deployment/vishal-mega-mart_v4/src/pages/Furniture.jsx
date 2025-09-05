import ProductCard from "../components/ProductCard";

function Furniture() {
  return (
    <div>
      <h2>🛋️ Furniture Section</h2>
      <div className="products">
        <ProductCard image="https://images.unsplash.com/photo-1540574163026-643ea20ade25" name="Modern Sofa" price="22000" />
        <ProductCard image="https://images.unsplash.com/photo-1524758631624-e2822e304c36" name="Office Chair" price="7500" />
        <ProductCard image="https://images.unsplash.com/photo-1615874959474-d609969a20ed" name="Wooden Bed" price="30000" />
      </div>
    </div>
  );
}

export default Furniture;

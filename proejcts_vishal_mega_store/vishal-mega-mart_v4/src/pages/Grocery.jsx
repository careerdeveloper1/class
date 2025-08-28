import ProductCard from "../components/ProductCard";

function Grocery() {
  return (
    <div>
      <h2>🥦 Grocery Section</h2>
      <div className="products">
        <ProductCard image="https://images.unsplash.com/photo-1572441710130-6b2e1d89f03e" name="Fresh Vegetables" price="200" />
        <ProductCard image="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2" name="Organic Fruits" price="300" />
        <ProductCard image="https://images.unsplash.com/photo-1605478039774-97a3c4cecb6d" name="Rice Pack" price="1200" />
      </div>
    </div>
  );
}

export default Grocery;

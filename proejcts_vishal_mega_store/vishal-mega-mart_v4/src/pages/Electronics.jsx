import ProductCard from "../components/ProductCard";

function Electronics() {
  return (
    <div>
      <h2>📱 Electronics Section</h2>
      <div className="products">
        <ProductCard image="https://images.unsplash.com/photo-1518770660439-4636190af475" name="Smartphone" price="25000" />
        <ProductCard image="https://images.unsplash.com/photo-1502877338535-766e1452684a" name="Smartwatch" price="5999" />
        <ProductCard image="https://images.unsplash.com/photo-1580894908361-9671950336e8" name="Tablet" price="15000" />
      </div>
    </div>
  );
}

export default Electronics;

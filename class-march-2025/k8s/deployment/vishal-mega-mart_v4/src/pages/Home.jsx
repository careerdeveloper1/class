import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Vishal's Mega Store</h1>
        <p>Best deals on Grocery, Electronics & Furniture!</p>
      </section>

      <h2>🔥 Featured Products</h2>
      <div className="products">
        <ProductCard
          image="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
          name="Fresh Apples"
          price="120"
        />
        <ProductCard
          image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          name="Laptop Pro X"
          price="55000"
        />
        <ProductCard
          image="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          name="Luxury Sofa"
          price="18000"
        />
        <ProductCard
          image="https://images.unsplash.com/photo-1512499617640-c2f999098b52"
          name="Wireless Headphones"
          price="1999"
        />
        <ProductCard
          image="https://images.unsplash.com/photo-1582582421894-f8c2a7bfa7a7"
          name="Dining Table"
          price="9500"
        />
        <ProductCard
          image="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
          name="Organic Milk Pack"
          price="60"
        />
      </div>
    </div>
  );
}

export default Home;

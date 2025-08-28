function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 m-3 w-60 hover:scale-105 transform transition duration-300">
      <img src={product.image} alt={product.name} className="rounded-lg w-full h-40 object-cover" />
      <h3 className="text-lg font-bold mt-3">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <button 
        onClick={() => addToCart(product)} 
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-indigo-800 w-full">
        Add to Cart
      </button>
    </div>
  );
}
export default ProductCard;

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">🛍 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div className="bg-white shadow-lg rounded-xl p-6">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-xl mt-4">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
          <button className="bg-green-500 text-white w-full mt-4 py-3 rounded-lg hover:bg-green-600">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
export default Cart;

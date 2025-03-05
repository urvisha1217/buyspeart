import { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Organizer for Mackup", price: 6500, quantity: 1 },
    { id: 2, name: "Organizer for Mackup", price: 6500, quantity: 2 },
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-gray-500 mb-4">Home / <span className="text-black">Cart</span></div>
      <div className="bg-white p-4">
        <table className="w-full ">
          <thead >
            <tr className="bg-gray-100 text-left ">
              <th className="p-3 font-semibold">Product</th>
              <th className="p-3 font-semibold">Price</th>
              <th className="p-3 font-semibold">Quantity</th>
              <th className="p-3 font-semibold">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="">
                <td className="p-3 flex items-center relative">
                  <img src="/images/product.png" alt="Product" className="w-12 h-12 mr-2" />
                  <button 
                    className="absolute top-2 left-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                    onClick={() => removeItem(item.id)}
                  >
                    ✖
                  </button>
                  {item.name}
                </td>
                <td className="p-3">₹{item.price}</td>
                <td className="p-3">
                  <select
                    className="border p-1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-3">₹{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button className="border border-gray-400 px-6 py-3 rounded-sm">Return To Shop</button>
          <button className="border border-gray-400 px-6 py-3 rounded-sm">Update Cart</button>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="flex items-center">
          <input type="text" placeholder="Coupon Code" className="border p-2 mr-2 w-48" />
          <button className="bg-blue-600 text-white px-4 py-2">Apply Coupon</button>
        </div>
        <div className="border p-4 w-100  bg-gray-50">
          <h2 className="font-bold text-lg">Cart Total</h2>
          <div className="flex justify-between mt-2">
            <span>Subtotal:</span> <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Shipping:</span> <span>Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Total:</span> <span>₹{subtotal}</span>
          </div>
          <button className="bg-blue-600 text-white w-full mt-4 py-2">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

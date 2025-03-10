import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Header from "./Header";
import Footer from "./Footer";

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

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
    <Header />
      <div className="p-6 max-w-[78rem] mx-auto">
        {/* Breadcrumb */}
        <div className="text-gray-500 mb-4 text-sm sm:text-base md:text-lg">
          Home / <span className="text-black">Cart</span>
        </div>

        {/* Cart Table */}
        <div className="bg-white p-6">
          <div className="overflow-x-auto md:overflow-hidden">
            <table className="w-full md:w-[120%] min-w-[600px] border-collapse border-spacing-y-4">
              <thead>
                <tr className="text-left text-base sm:text-md lg:text-xl">
                  <th className="p-4 w-1/4 font-semibold">Product</th>
                  <th className="p-4 w-1/4 font-semibold">Price</th>
                  <th className="p-4 w-1/4 font-semibold">Quantity</th>
                  <th className="sm:p-0 p-4 w-1/4 font-semibold">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="text-sm sm:text-base lg:text-lg">
                    <td className="p-4 flex items-center relative">
                      <button
                        className="absolute top-4 left-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <RxCross2 />
                      </button>
                      <img
                        src="/images/product.png"
                        alt="Product"
                        className="w-16 h-16 mr-4"
                      />
                      {item.name}
                    </td>
                    <td className="p-4">₹{item.price}</td>
                    <td className="p-4">
                      <select
                        className="border p-2 rounded-md"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                      >
                        {[...Array(10).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="sm:p-0 p-4">
                      ₹{item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons Below Table */}
          <div className="flex flex-col sm:flex-row justify-between mt-6 text-sm sm:text-base">
            <button className="border border-gray-400 px-6 py-3 rounded-sm mb-2 sm:mb-0">
              Return To Shop
            </button>
            <button className="border border-gray-400 px-6 py-3 rounded-sm">
              Update Cart
            </button>
          </div>
        </div>

        {/* Coupon and Cart Total Section */}
        <div className="flex flex-col lg:flex-row justify-between mt-6 items-start">
          {/* Coupon Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start w-full lg:w-auto text-sm sm:text-base">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-gray-400 rounded-sm p-3 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-80"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-sm w-full sm:w-auto">
              Apply Coupon
            </button>
          </div>

          {/* Cart Total Section */}
          <div className="w-full lg:w-[40%] mt-6 lg:mt-0">
            <div className="border border-gray-400 rounded-sm p-6 bg-gray-50 text-sm sm:text-base">
              <h2 className="font-bold text-base sm:text-lg mb-4">
                Cart Total
              </h2>
              <div className="flex justify-between mt-2">
                <span>Subtotal:</span> <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Shipping:</span> <span>Free</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-bold text-base sm:text-lg">
                <span>Total:</span> <span>₹{subtotal}</span>
              </div>
              <button className="bg-blue-600 text-white w-full mt-4 py-3 rounded-md">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

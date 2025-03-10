import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("COD");

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row gap-8 p-8 bg-white max-w-7xl mx-auto">
        {/* Billing Details */}
        <div className="flex-1 bg-white p-6  ">
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Billing Details
          </h2>
          <form className="space-y-4">
            {[
              { label: "First Name*", type: "text" },
              { label: "Company Name", type: "text" },
              { label: "Street Address*", type: "text" },
              { label: "Apartment, floor, etc. (optional)", type: "text" },
              { label: "Town/City*", type: "text" },
              { label: "Phone Number*", type: "text" },
              { label: "Email Address*", type: "email" },
            ].map((field, index) => (
              <div key={index}>
                <label className="block  text-gray-400 mb-2">
                  {field.label}
                </label>
                <input type={field.type} className="w-full p-3 bg-gray-200 " />
              </div>
            ))}
            <label className="flex items-center space-x-2 text-black">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span>Save this information for faster check-out next time</span>
            </label>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/2 bg-white p-6 mt-[8%] ">
          <div className="space-y-4">
            {/* Product List */}
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-black"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10  rounded-md">
                    <img src="./images/product.png" alt="" />
                  </div>
                  <span>Organizer for Mockup</span>
                </div>
                <span className="font-semibold">₹6500</span>
              </div>
            ))}
            <div className="flex justify-between text-black">
              <span>Subtotal:</span>
              <span>₹6500</span>
            </div>
            <hr />
            <div className="flex justify-between text-black">
              <span>Shipping:</span>
              <span className="text-black font-semibold">Free</span>
            </div>
            <hr />

            <div className="flex justify-between font-semibold text-black text-lg">
              <span>Total:</span>
              <span>₹6500</span>
            </div>

            {/* Payment Options */}
            <div className="space-y-2 text-black">
              {[
                { label: "Online / Net Banking", value: "Online" },
                { label: "Cash on delivery", value: "COD" },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={option.value}
                    checked={paymentMethod === option.value}
                    onChange={() => setPaymentMethod(option.value)}
                    className="text-blue-600"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>

            {/* Coupon and Place Order */}
            {/* <div className="flex items-center md:space-x-2 space-x-1 w-full">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 p-3 border border-gray-300 rounded-md"
              />
              <button className="bg-blue-600 text-white md:px-7 md:py-3 rounded-md">
                Apply Coupon
              </button>
            </div> */}
            <div className="flex lg:flex-row flex-col md:items-center space-x-1 lg:space-x-2 w-full gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 p-2 md:p-3 border border-gray-300 rounded-md w-full lg:w-fit"
              />
              <button className="bg-blue-600 text-white px-4 py-2 lg:px-7 md:py-3 rounded-md w-full lg:w-fit">
                Apply Coupon
              </button>
            </div>

            <div className="flex">
              <button className="bg-blue-600 text-white md:px-6 py-3 rounded-md mt-4 w-full lg:w-fit">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import React from "react";
import { FaRegHeart, FaEye, FaStar, FaRegStar } from "react-icons/fa";

const products = [
  { price: 260, oldPrice: 360, rating: 4.5 },
  { price: 960, oldPrice: 1160, rating: 4.2 },
  { price: 160, oldPrice: 170, rating: 4.3 },
  { price: 360, oldPrice: null, rating: 5 },
];

const ProductCard = ({ price, oldPrice, rating }) => (
  <div className="p-4 bg-white">
    <div className="bg-gray-100 h-65 w-[105%] flex items-center justify-center  relative">
      <img
        src="/images/product.png"
        alt="Product"
        className="w-full h-full object-contain"
      />
      <div className="absolute top-2 right-2 flex flex-col gap-2">
        <button className="bg-white p-2 rounded-full shadow text-gray-600 hover:text-red-500">
          <FaRegHeart size={18} />
        </button>
        <button className="bg-white p-2 rounded-full shadow text-gray-600 hover:text-blue-500">
          <FaEye size={18} />
        </button>
      </div>
    </div>
    <h3 className="mt-2 text-gray-700 font-medium text-center">
      Organizer for Mockup
    </h3>
    <div className="flex justify-center items-center gap-2 mt-1">
      <span className="text-blue-600 font-semibold text-lg">₹{price}</span>
      {oldPrice && (
        <span className="text-gray-400 line-through text-sm">₹{oldPrice}</span>
      )}
    </div>
    <div className="flex justify-center items-center gap-1 mt-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-500">
          {i + 1 <= Math.round(rating) ? <FaStar /> : <FaRegStar />}
        </span>
      ))}
      <span className="text-gray-500 text-sm">(65)</span>
    </div>
  </div>
);

const BestSellingProducts = () => {
  return (
    <>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 h-8 w-4 rounded-sm"></span>
            <span className="text-blue-600 font-semibold text-lg">This Month</span>
          </div>
        </div>
        <div className="flex flex-cols  lg:gap-[54%] xl:gap-[59%] md:gap-[37%]  gap-[6%]">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold mt-4  md:text-left ">
            Best Selling Products
          </h2>
          {/* <button className="bg-blue-600 text-white md:px-6 md:py-3 px-5 py-2 rounded-md mt-4 md:mt-0 hover:bg-blue-700 text-sm">
          View All
        </button> */}
          <div className="flex items-center ">
            <button className="bg-blue-600 text-white md:px-12 md:py-3 px-2 py-2  rounded-md  hover:bg-blue-700 text-md mt-4">
              View All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="bg-black text-white p-6 md:p-12  max-w-[78rem] mx-auto mt-12">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-blue-500 font-medium mb-2">Categories</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Enhance Your Music Experience
            </h1>
            <button className="bg-red-500 text-white px-10 py-3  md:mt-[20%] mt-4 hover:bg-red-600">
              Buy Now!
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="/images/hero2.png"
              alt="JBL Speaker"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>

    </>
  );
};

export default BestSellingProducts;

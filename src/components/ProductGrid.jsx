import React from "react";
import { Heart, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    price: 100,
    rating: 3,
    reviews: 35,
    isNew: false,
    colors: ["red", "black"],
  },
  { id: 2, price: 360, rating: 4, reviews: 95, isNew: false },
  { id: 3, price: 700, rating: 5, reviews: 325, isNew: false },
  { id: 4, price: 700, rating: 5, reviews: 325, isNew: false },
  {
    id: 5,
    price: 960,
    rating: 5,
    reviews: 65,
    isNew: true,
    colors: ["yellow", "blue"],
  },
  {
    id: 6,
    price: 1160,
    rating: 4,
    reviews: 35,
    isNew: false,
    colors: ["blue"],
  },
  {
    id: 7,
    price: 660,
    rating: 4.5,
    reviews: 55,
    isNew: true,
    colors: ["black", "blue"],
  },
  { id: 8, price: 660, rating: 4.5, reviews: 55, isNew: false },
];

const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 relative mt-8">
      {/* Title */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 h-8 w-4 rounded-sm "></span>
            <span className="text-blue-600 font-semibold text-lg">Our Products</span>
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold mt-4  md:text-left">Explore Our Products</h1>
        </div>
        {/* Navigation Arrows */}
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <ChevronLeft size={20} />
          </button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 rounded-lg relative group"
          >
            {/* New Badge */}
            {product.isNew && (
              <span className="absolute top-3 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                NEW
              </span>
            )}

            {/* Wishlist & Quick View Icons */}
            {/* <div className="absolute top-2 right-2 flex space-x-2">
              <button className="bg-white p-1 rounded-full shadow-md hover:bg-gray-200">
                <Heart size={16} />
              </button>
              <button className="bg-white p-1 rounded-full shadow-md hover:bg-gray-200">
                <Eye size={16} />
              </button>
            </div> */}
            <div className="bg-gray-100 ">
            <div className="absolute top-6 right-6 flex flex-col gap-2">
              <button className="bg-white p-2 rounded-full shadow text-gray-600 hover:text-red-500">
                <Heart size={18} />
              </button>
              <button className="bg-white p-2 rounded-full shadow text-gray-600 hover:text-blue-500">
                <Eye size={18} />
              </button>
            </div>

            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src="/images/product.png"
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="hidden group-hover:block w-full bg-black text-white py-2 mt-2">
              Add To Cart
            </button>
            </div>
            {/* Product Details */}
            <h2 className="text-sm mt-2">Organizer for Mockup</h2>
            <p className="text-blue-600 font-semibold">₹{product.price}</p>
            <div className="flex items-center space-x-1 text-yellow-400 text-sm">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>{i < product.rating ? "★" : "☆"}</span>
              ))}
            </div>
            <p className="text-gray-500 text-xs">({product.reviews} reviews)</p>

            {/* Color Variants */}
            {product.colors && (
              <div className="flex space-x-1 mt-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className={`w-4 h-4 rounded-full border-2 ${
                      color === "red" ? "bg-red-500" : ""
                    } ${color === "black" ? "bg-black" : ""} ${
                      color === "blue" ? "bg-blue-500" : ""
                    } ${color === "yellow" ? "bg-yellow-500" : ""}`}
                  ></span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-blue-600 text-white px-7 py-3 rounded-md hover:bg-blue-700">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;

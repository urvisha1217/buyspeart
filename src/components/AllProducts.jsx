import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";
import Header from "./Header";
import Footer from "./Footer";

const products = [
  {
    id: 1,
    name: "Organizer for Mockup",
    price: "₹960",
    oldPrice: "₹1160",
    rating: 4.8,
    reviews: 65,
    discount: "-35%",
    isNew: false,
    image: "/images/product.png",
  },
  {
    id: 2,
    name: "Organizer for Mockup",
    price: "₹1160",
    oldPrice: null,
    rating: 4.8,
    reviews: 65,
    discount: null,
    isNew: false,
    image: "/images/product.png",
  },
  {
    id: 3,
    name: "Organizer for Mockup",
    price: "₹560",
    oldPrice: null,
    rating: 4.8,
    reviews: 65,
    discount: null,
    isNew: true,
    image: "/images/product.png",
  },
  {
    id: 4,
    name: "Organizer for Mockup",
    price: "₹200",
    oldPrice: null,
    rating: 4.8,
    reviews: 65,
    discount: null,
    isNew: false,
    image: "/images/product.png",
  },
  {
    id: 5,
    name: "Organizer for Mockup",
    price: "₹960",
    oldPrice: "₹1160",
    rating: 4.8,
    reviews: 65,
    discount: "-35%",
    isNew: false,
    image: "/images/product.png",
  },
  {
    id: 6,
    name: "Organizer for Mockup",
    price: "₹1160",
    oldPrice: null,
    rating: 4.8,
    reviews: 65,
    discount: null,
    isNew: false,
    image: "/images/product.png",
  },
  {
    id: 7,
    name: "Organizer for Mockup",
    price: "₹560",
    oldPrice: null,
    rating: 4.8,
    reviews: 65,
    discount: null,
    isNew: true,
    image: "/images/product.png",
  },
  {
    id: 8,
    name: "Organizer for Mockup",
    price: "₹200",
    oldPrice: null,
    rating: 4.8,
    reviews: 65,
    discount: null,
    isNew: false,
    image: "/images/product.png",
  },
  {
    id: 9,
    name: "Organizer for Mockup",
    price: "₹960",
    oldPrice: "₹1160",
    rating: 4.8,
    reviews: 65,
    discount: "-35%",
    isNew: false,
    image: "/images/product.png",
  },
  {
    id: 10,
    name: "Organizer for Mockup",
    price: "₹1160",
    oldPrice: null,
    rating: 4.8,
    reviews: 65,
    discount: null,
    isNew: false,
    image: "/images/product.png",
  },
  {
    id: 11,
    name: "Organizer for Mockup",
    price: "₹560",
    oldPrice: null,
    rating: 4.8,
    reviews: 65,
    discount: null,
    isNew: true,
    image: "/images/product.png",
  },
  {
    id: 12,
    name: "Organizer for Mockup",
    price: "₹200",
    oldPrice: null,
    rating: 4.8,
    reviews: 65,
    discount: null,
    isNew: false,
    image: "/images/product.png",
  },
];

// const categories = [
//   { title: "Kitchen Products" },
//   { title: "Beauty Products" },
//   { title: "Kids Products" },
// ];

const AllProducts = () => {
  return (
    <>
    <Header />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          {/* Category Title */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg flex items-center gap-2">
              <span className="bg-blue-600 h-8 w-4 rounded-sm "></span>
              Beauty Products
            </h2>

            <button className="border px-8 py-2 text-sm bg-[#EA4335] text-white rounded-sm border-gray-400">
              Short By
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="relative  overflow-hidden p-4">
                {/* Discount & New Tags */}
                {product.discount && (
                  <span className="absolute top-4 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-4 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                <div className=" bg-gray-100 ">
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-50 object-contain  "
                  />

                  {/* Eye Icon */}
                  <div className="absolute top-6 right-6 bg-white p-2 rounded-full cursor-pointer">
                    <HiOutlineEye className="text-gray-600" />
                  </div>

                  {/* Add to Cart Button */}
                  <button className="flex items-center justify-center bg-black text-white w-full py-2 mt-2">
                    <FaShoppingCart className="mr-2" />
                    Add To Cart
                  </button>
                </div>
                {/* Product Info */}
                <h3 className="text-sm font-medium mt-2">{product.name}</h3>
                {/* <p className="text-blue-600 font-semibold ">{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-gray-400 line-through text-sm">
                    {product.oldPrice}
                    </p>
                    )} */}
                <div className="flex items-center space-x-2">
                  <p className="text-blue-600 font-semibold">{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-gray-400 line-through text-sm">
                      {product.oldPrice}
                    </p>
                  )}
                </div>
                <div className="flex items-center text-yellow-500 text-sm">
                  ★★★★★ ({product.reviews})
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";
import Header from "./Header";
import Footer from "./Footer";
import { FaRegTrashAlt } from "react-icons/fa";
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
];

const wishlistProducts = [
  {
    id: 1,
    title: "Organizer for Mockup",
    price: "₹960",
    oldPrice: "₹1160",
    image: "/images/product1.png",
    discount: "-35%",
  },
  {
    id: 2,
    title: "Organizer for Mockup",
    price: "₹1960",
    oldPrice: "",
    image: "/images/product2.png",
  },
  {
    id: 3,
    title: "Organizer for Mockup",
    price: "₹550",
    oldPrice: "",
    image: "/images/product3.png",
  },
  {
    id: 4,
    title: "Organizer for Mockup",
    price: "₹750",
    oldPrice: "",
    image: "/images/product4.png",
  },
];
const Wishlist = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">
              Wishlist ({wishlistProducts.length})
            </h3>
            <button className="border border-gray-400 px-4 py-3 rounded ">
              Move All To Bag
            </button>
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="relative  overflow-hidden p-4">
                {product.discount && (
                  <span className="absolute top-4 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}
                  </span>
                )}
                {/* {product.isNew && (
                <span className="absolute top-4 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                  NEW
                </span>
              )} */}
                <div className=" bg-gray-100 ">
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-50 object-contain  "
                  />

                  {/* Eye Icon */}
                  <div className="absolute top-6 right-6 bg-white p-2 rounded-full cursor-pointer">
                    <FaRegTrashAlt className="text-gray-600" />
                  </div>

                  {/* Add to Cart Button */}
                  <button className="flex items-center justify-center bg-black text-white w-full py-2 mt-2">
                    <FaShoppingCart className="mr-2" />
                    Add To Cart
                  </button>
                </div>
                {/* Product Info */}
                <h3 className="text-sm font-medium mt-2">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <p className="text-blue-600 font-semibold">{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-gray-400 line-through text-sm">
                      {product.oldPrice}
                    </p>
                  )}
                </div>
                {/* <div className="flex items-center text-yellow-500 text-sm">
                ★★★★★ ({product.reviews})
              </div> */}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <span className="bg-blue-600 h-8 w-4 rounded-sm "></span>
            <h3 className="text-lg font-semibold">Just For You</h3>
          </div>
          <button className="border border-gray-400 px-4 py-2 rounded">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative  overflow-hidden p-4">
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
      <Footer />
    </>
  );
};

export default Wishlist;

import { AiOutlineHeart } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { LuRefreshCcw } from "react-icons/lu";
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
];

export default function ProductPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4 sm:p-6 xl:pl-[10%] ">
        <div className="flex flex-col lg:flex-row gap-10 py-[5%]">
          {/* Left Section - Images */}
          <div className="flex flex-col-reverse lg:flex-row gap-8">
            {/* Thumbnail Images */}
            <div className="flex lg:flex-col gap-4">
              <img
                src="/images/img.png"
                alt="Thumbnail"
                className="md:w-40 md:h-34 w-16 h-16 object-cover "
              />
              <img
                src="/images/img.png"
                alt="Thumbnail"
                className="md:w-40 md:h-34 w-16 h-16 object-cover "
              />
              <img
                src="/images/img.png"
                alt="Thumbnail"
                className="md:w-40 md:h-34 w-16 h-16 object-cover "
              />
              <img
                src="/images/img.png"
                alt="Thumbnail"
                className="md:w-40 md:h-34 w-16 h-16 object-cover "
              />
            </div>
            {/* Main Image */}
            <div>
              <img
                src="/images/img.png"
                alt="Product"
                className="w-full max-w-[700px] h-auto xl:h-[600px] md:h-[580px] object-cover "
              />
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="">
            <h1 className="text-2xl font-bold">Organizer for Mackup</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-gray-500 text-sm">(150 Reviews)</span>
              <span className="text-red-500 text-sm">| In Stock</span>
            </div>
            <p className="text-2xl font-semibold mt-4">₹560.00</p>
            <p className="text-gray-600 mt-2 text-base border-b pb-4">
              PlayStation 5 Controller Skin High quality vinyl with air <br />{" "}
              channel adhesive for easy bubble free install & mess <br /> free
              removal Pressure sensitive.
            </p>

            {/* Color Selection */}
            <div className="mt-4">
              <h3 className="font-medium">Colours:</h3>
              <div className="flex gap-2 mt-2">
                <span className="w-6 h-6 bg-black rounded-full border"></span>
                <span className="w-6 h-6 bg-red-600 rounded-full border"></span>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-4">
              <h3 className="font-medium">Size:</h3>
              <div className="flex gap-2 mt-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="border px-4 py-1 rounded-md text-sm"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Buy Button */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center border px-3 py-2 rounded-md">
                <button className="px-2 border-r">-</button>
                <span className="px-4">2</span>
                <button className="px-2 border-l">+</button>
              </div>
              <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                Buy Now
              </button>
              <AiOutlineHeart className="text-4xl p-2 border rounded-lg  transition hover:scale-105" />
            </div>

            {/* Delivery & Return Details */}
            <div className="mt-6 border p-4 ">
              <p className="flex items-center font-medium gap-2">
                <BsTruck className="font-bold text-xl" /> Free Delivery
              </p>
              <p className="text-sm text-gray-500">
                Enter your postal code for Delivery Availability
              </p>
            </div>
            <div className="mt-  border-r border-l border-b p-4 ">
              <p className="flex items-center font-medium gap-2">
                <LuRefreshCcw className="font-bold text-xl" /> Return Delivery
              </p>
              <p className="text-sm text-gray-500">
                Free 7 Days Delivery Returns.{" "}
                <a href="#" className="text-blue-500">
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div>
          <h2 className="text-2xl font-semibold">Description</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 text-md">
            <li className="mb-2">
              Georgette lucknowi sequence work rosy brown lehenga choli for
              pretest younger women.
            </li>
            <li className="mb-2">
              This delightful and charming rosy pink lehenga is made of
              georgette material decorated with thread zari sequence embroidered
              work.
            </li>
            <li className="mb-2">
              Completed with full sleeves georgette choli in a rosy brown color
              made of thread zari sequence embroidered work.
            </li>
            <li className="mb-2">
              This functional lehenga choli also comes with a similar color
              georgette dupatta garnished with moti lace border stone work.
            </li>
            <li className="mb-2">
              Georgette lucknowi sequence work rosy brown lehenga choli for
              pretest younger women.
            </li>
            <li className="mb-2">
              This delightful and charming rosy pink lehenga is made of
              georgette material decorated with thread zari sequence embroidered
              work.
            </li>
            <li className="mb-2">
              Completed with full sleeves georgette choli in a rosy brown color
              made of thread zari sequence embroidered work
            </li>
            <li className="mb-2">
              This functional lehenga choli also comes with a similar color
              georgette dupatta garnished with moti lace border stone work.
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold">Keywords</h2>
        </div>
        {/* Keywords Section */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Women's Fashion",
            "Marriage",
            "Colorful Accessory",
            "Warm Headwear",
          ].map((keyword) => (
            <span
              key={keyword}
              className="flex items-center gap-2 px-4 py-1 text-sm border rounded-lg"
            >
              <img src="/images/svg.png" alt="" className="w-4 h-4" />
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-[76rem] mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <span className="bg-blue-600 h-8 w-4 rounded-sm "></span>
            <h3 className="text-lg font-semibold">Kitchen Products</h3>
          </div>
          <button className="border border-gray-400 px-[4%] py-2 rounded">
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
}

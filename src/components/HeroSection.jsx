import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const categories = [
  "Kitchen Products",
  "Beauty Products",
  "Kids Products",
  "Order Details",
  "Manage Account",
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-6 border-r">
        <ul className="space-y-4">
          {categories.map((category, index) => (
            <li key={index} className="flex justify-between items-center cursor-pointer hover:text-gray-600">
              {category} <span>&gt;</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <p className="font-semibold">Follow us on</p>
          <div className="flex space-x-4 mt-2 text-xl">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-3/4 p-6 flex flex-col items-center">
        <div className="relative w-full max-w-3xl">
          <img
            src="/images"
            alt="iPhone 14"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[0, 1, 2, 3].map((index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full ${activeIndex === index ? "bg-red-500" : "bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

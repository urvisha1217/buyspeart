import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full px-4 sm:px-6 md:px-[10%] lg:px-[18%]">
      {/* Sidebar Section */}
      <div className="w-full md:w-[260px] md:border-r border-gray-300 pr-4 py-6 md:py-10">
        <ul className="space-y-3 md:space-y-5 text-sm md:text-lg font-medium">
          {["Kitchen Products", "Beauty Products", "Kids Products", "Order Details", "Manage Account"].map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center cursor-pointer hover:text-gray-600"
            >
              {item} 
              <span className="text-lg md:text-2xl">
                <MdOutlineKeyboardArrowRight />
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6 md:mt-12">
          <p className="text-sm md:text-lg font-semibold mb-2 md:mb-3">Follow us on</p>
          <div className="flex space-x-3 text-lg md:text-xl text-gray-700">
            <FaFacebookF className="cursor-pointer hover:text-gray-500" />
            <FaTwitter className="cursor-pointer hover:text-gray-500" />
            <FaInstagram className="cursor-pointer hover:text-gray-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-500" />
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="w-full md:w-[90%] pl-0 md:pl-[4%] py-6 md:py-10">
        <div className="relative bg-black overflow-hidden flex flex-col items-center md:items-start">
          <div className="w-full flex justify-center md:justify-end">
            <img
              src="/images/h1.png"
              alt="iPhone 14"
              className="h-[150px] sm:h-[200px] md:h-[320px] lg:h-[380px] w-auto object-contain"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { TbUser } from "react-icons/tb";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Announcement Bar */}
      <div className="bg-black text-white text-center text-xs md:text-sm py-2">
        Free Express Delivery - OFF 50%!{" "}
        <span className="font-bold cursor-pointer underline">ShopNow</span>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-300">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-16 py-7">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Buyspeart" className="h-8 md:h-10" />
            <span className="text-xl md:text-2xl font-bold">Buyspeart</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            <IoMenu />
          </button>

          {/* Navigation Links (Hidden on mobile) */}
          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none space-y-3 md:space-y-0 md:space-x-6 text-lg z-50`}
          >
            <a href="#" className="text-black hover:text-gray-700 text-2xl">Home</a>
            <a href="#" className="text-black hover:text-gray-700 text-2xl">Our Products</a>
            <a href="#" className="text-black hover:text-gray-700 text-2xl">Contact</a>
          </nav>

          {/* Search Bar & Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Search Bar (Hidden on small screens) */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 px-3 py-2 w-40 md:w-64 focus:outline-none rounded"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700" />
            </div>

            {/* Icons */}
            <GoHeart className="text-2xl md:text-3xl cursor-pointer text-gray-700 hover:text-black" />
            <div className="relative">
              <IoCartOutline className="text-2xl md:text-3xl cursor-pointer text-gray-700 hover:text-black" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">2</span>
            </div>
            <div className="bg-red-500 p-1 md:p-2 rounded-md cursor-pointer hover:bg-red-600">
              <TbUser className="text-white text-2xl md:text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

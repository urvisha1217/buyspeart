import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { TbUser } from "react-icons/tb";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <div className="bg-black text-white text-center text-xs md:text-sm py-2">
        Free Express Delivery - OFF 50%!{" "}
        <span className="font-bold cursor-pointer underline">ShopNow</span>
      </div>

      <div className="border-b border-gray-300">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-[8%] py-7">
          <div className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Buyspeart" className="h-8" />
            <span className="xl:text-2xl text-lg font-bold pr-3">
              Buyspeart
            </span>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl"
          >
            <IoMenu />
          </button>

          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row fixed md:relative top-0 left-0 w-full md:w-auto h-full md:h-auto bg-white md:bg-transparent p-6 md:p-0 shadow-md md:shadow-none space-y-6 md:space-y-0 md:space-x-6 text-lg z-50`}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="md:hidden absolute top-4 right-6 text-3xl"
            >
              <IoClose />
            </button>
            {/* <a href="#" className="text-black hover:text-gray-700 text-md xl:text-2xl">
              Home
            </a>
            <a href="#" className="text-black hover:text-gray-700 text-md xl:text-2xl">
              Our Products
            </a>
            <a href="#" className="text-black hover:text-gray-700 text-md xl:text-2xl">
              Contact
            </a> */}
            <Link
              to="/"
              className="text-black hover:text-gray-700 text-md xl:text-2xl"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-black hover:text-gray-700 text-md xl:text-2xl"
            >
              Our Products
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-gray-700 text-md xl:text-2xl"
            >
              Contact
            </Link>
            <div className="flex md:hidden justify-center gap-6 mt-4">
              <button onClick={() => navigate("/wishlist")}>
                <GoHeart className="text-3xl cursor-pointer text-gray-700 hover:text-black" />
              </button>
              <div className="relative">
                <button onClick={() => navigate("/cart")}>
                  <IoCartOutline className="text-2xl md:text-3xl cursor-pointer text-gray-700 hover:text-black" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                    2
                  </span>
                </button>
              </div>
              <div className="relative">
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="bg-red-500 p-1 rounded-md cursor-pointer hover:bg-red-600"
                >
                  <TbUser className="text-white text-2xl" />
                </div>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-black text-white shadow-lg rounded-md p-3 space-y-2">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 hover:text-gray-400"
                    >
                      <TbUser className="text-2xl" />{" "}
                      <span>Manage My Account</span>
                    </Link>
                    <Link
                      to="/orders"
                      className="flex items-center space-x-2 hover:text-gray-400"
                    >
                      <LuShoppingBag className="text-2xl" />{" "}
                      <span>My Order</span>
                    </Link>
                    <Link
                      to="/cancellations"
                      className="flex items-center space-x-2 hover:text-gray-400"
                    >
                      <MdOutlineCancel className="text-2xl" />{" "}
                      <span>My Cancellations</span>
                    </Link>
                    <Link
                      to="/reviews"
                      className="flex items-center space-x-2 hover:text-gray-400"
                    >
                      <FaRegStar className="text-2xl" /> <span>My Reviews</span>
                    </Link>
                    <Link
                      to="/logout"
                      className="flex items-center space-x-2 hover:text-gray-400"
                    >
                      <CiLogout className="text-2xl" /> <span>Logout</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4 md:space-x-6">
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 px-3 py-2 w-40 md:w-64 focus:outline-none rounded"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700" />
            </div>
            <button onClick={() => navigate("/wishlist")}>
                <GoHeart className="text-3xl cursor-pointer text-gray-700 hover:text-black" />
              </button>
            <div className="relative">
              <button onClick={() => navigate("/cart")}>
                <IoCartOutline className="text-2xl md:text-3xl cursor-pointer text-gray-700 hover:text-black" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                  2
                </span>
              </button>
            </div>
            <div className="relative">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-red-500 p-1 md:p-1 rounded-md cursor-pointer hover:bg-red-600"
              >
                <TbUser className="text-white text-2xl md:text-2xl" />
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black text-white shadow-lg rounded-md p-3 space-y-2 z-10">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 hover:text-gray-400"
                  >
                    <TbUser className="text-2xl" />{" "}
                    <span>Manage My Account</span>
                  </Link>
                  <Link
                    to="/orders"
                    className="flex items-center space-x-2 hover:text-gray-400"
                  >
                    <LuShoppingBag className="text-2xl" /> <span>My Order</span>
                  </Link>
                  <Link
                    to="/cancellations"
                    className="flex items-center space-x-2 hover:text-gray-400"
                  >
                    <MdOutlineCancel className="text-2xl" />{" "}
                    <span>My Cancellations</span>
                  </Link>
                  <Link
                    to="/reviews"
                    className="flex items-center space-x-2 hover:text-gray-400"
                  >
                    <FaRegStar className="text-2xl" /> <span>My Reviews</span>
                  </Link>
                  <Link
                    to="/logout"
                    className="flex items-center space-x-2 hover:text-gray-400"
                  >
                    <CiLogout className="text-2xl" /> <span>Logout</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

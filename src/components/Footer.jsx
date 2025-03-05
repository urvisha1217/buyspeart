import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
          {/* Exclusive Section */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold">Exclusive</h2>
            <p className="mt-2 font-medium md:text-sm">Subscribe</p>
            <p className="text-sm mt-3 md:text-sm">Get 10% off your first order</p>
            <div className="relative mt-4 max-w-sm w-full xl:w-50">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border px-4 py-2 pr-12 w-full focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white">
                <IoIosSend size={22} />
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold">Support</h2>
            <p className="mt-3 md:text-sm ">Surat, Gujarat</p>
            <p className="mt-3 md:text-sm">buyspeart@gmail.com</p>
            <p className="mt-3 md:text-sm">+91 99091 93962</p>
          </div>

          {/* Account Section */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold">Account</h2>
            <ul className="mt-3 space-y-1 md:text-sm">
              <li>
                <a href="#">My Account</a>
              </li>
              <li className="mt-2">
                <a href="#">Login / Register</a>
              </li>
              <li className="mt-2">
                <a href="#">Cart</a>
              </li>
              <li className="mt-2">
                <a href="#">Wishlist</a>
              </li>
              <li className="mt-2">
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold">Quick Link</h2>
            <ul className="mt-3 space-y-1 md:text-sm ">
              <li className="mt-2 ">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mt-2">
                <a href="#">Terms Of Use</a>
              </li>
              <li className="mt-2">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold">Follow us on</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a href="#">
                <FaFacebookF size={18} />
              </a>
              <a href="#">
                <FaTwitter size={18} />
              </a>
              <a href="#">
                <FaInstagram size={18} />
              </a>
              <a href="#">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

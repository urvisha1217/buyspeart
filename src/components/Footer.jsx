import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
          {/* Exclusive Section */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold">Exclusive</h2>
            <p className="mt-2 font-medium">Subscribe</p>
            <p className="text-sm mt-1">Get 10% off your first order</p>
            <div className="relative mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border  px-3 py-2 pr-10 w-full focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2  hover:text-white">
                <IoIosSend size={20} />
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold">Support</h2>
            <p className=" mt-2">Surat, Gujarat</p>
            <p className=" mt-1">buyspeart@gmail.com</p>
            <p className=" mt-1">+91 99091 93962</p>
          </div>

          {/* Account Section */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold">Account</h2>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-white">My Account</a></li>
              <li><a href="#" className="hover:text-white">Login / Register</a></li>
              <li><a href="#" className="hover:text-white">Cart</a></li>
              <li><a href="#" className="hover:text-white">Wishlist</a></li>
              <li><a href="#" className="hover:text-white">Shop</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold">Quick Link</h2>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms Of Use</a></li>
              <li><a href="#" className=" hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold">Follow us on</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a href="#" className=" hover:text-white"><FaFacebookF size={18} /></a>
              <a href="#" className=" hover:text-white"><FaTwitter size={18} /></a>
              <a href="#" className=" hover:text-white"><FaInstagram size={18} /></a>
              <a href="#" className=" hover:text-white"><FaLinkedinIn size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import {   FaInstagram } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { RiFacebookLine,RiLinkedinLine  } from "react-icons/ri";
import { PiTwitterLogo } from "react-icons/pi";
import { FaChevronRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Sidebar */}
      <aside className="w-1/4 p-6  border-r border-gray-300 hidden md:block font-semibold">
        <ul className="space-y-4 text-xl text-gray-800 pl-[40%]">
          <li className="flex justify-between items-center cursor-pointer hover:text-blue-600">
            Kitchen Products <span><MdArrowForwardIos /></span>
          </li>
          <li className="flex justify-between items-center cursor-pointer hover:text-blue-600">
            Beauty Products <span><MdArrowForwardIos /></span>
          </li>
          <li className="flex justify-between items-center cursor-pointer hover:text-blue-600">
            Kids Products <span><MdArrowForwardIos /></span>
          </li>
          <li className="flex justify-between items-center cursor-pointer hover:text-blue-600">
            Order Details <span><MdArrowForwardIos /></span>
          </li>
          <li className="flex justify-between items-center cursor-pointer hover:text-blue-600">
            Manage Account <span><MdArrowForwardIos /></span>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="mt-[12%] pl-[40%] text-xl font-semibold ">
          <p className="text-gray-800 mb-3">Follow us on</p>
          <div className="flex space-x-4 ">
            <RiFacebookLine className="cursor-pointer hover:text-blue-600" />
            <PiTwitterLogo className="cursor-pointer hover:text-blue-600" />
            <FaInstagram className="cursor-pointer hover:text-blue-600" />
            <RiLinkedinLine  className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      {/* <main className="w-3/4 p-6">
        <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
          <img
            src="/images/hero.png"
            alt="iPhone 14 Series"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </main> */}
      
    </div>
  );
}

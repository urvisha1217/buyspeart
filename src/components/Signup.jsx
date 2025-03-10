import { FcGoogle } from "react-icons/fc";
import Header from "./Header";
import { FaOtter } from "react-icons/fa";
import Footer from "./Footer";

export default function Signup() {
  return (
    <>
    <Header />
      <div className="flex items-center justify-center  px-4 py-[3%] bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-semibold  mb-5">Create an account</h2>
          <p className=" mb-6">Enter your details below</p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full pt-3 pb-3 border-b border-gray-400 outline-none focus:border-black"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full pt-3 pb-3 border-b border-gray-400 outline-none focus:border-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full pt-3 pb-3 border-b border-gray-400 outline-none focus:border-black"
            />
          </div>

          <button className="w-full bg-[#0052F3] text-white p-3  mt-6 hover:bg-blue-800 transition">
            Create Account
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center"></div>
          </div>

          <button className="w-full flex items-center justify-center border border-gray-300 p-3  hover:bg-gray-100 transition">
            <FcGoogle className="mr-2 text-xl" />
            Sign up with Google
          </button>

          <p className="text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <a
              href="#"
              className="text-black font-medium border-b border-gray-400"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

import Footer from "./Footer";
import Header from "./Header";

export default function SignIn() {
    return (
      <>
      <Header />
      <div className="flex items-center justify-center h-full py-[5%] bg-white px-4">
        <div className="w-full max-w-sm">
          <h2 className="text-4xl font-semibold  mb-5">Log in to Exclusive</h2>
          <p className="mb-6">Enter your details below</p>
          
          <div className="space-y-4">
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
          
          <div className="flex justify-between items-center mt-6">
            <button className="bg-[#0052F3] text-white px-8 py-3  hover:bg-blue-800 transition">
              Log In
            </button>
            <a href="#" className="text-red-500 text-sm">Forget Password?</a>
          </div>
          
          <p className="text-center text-gray-600 mt-6">
            Don't have an account? <a href="#" className="text-black font-medium border-b border-gray-400">Sign up</a>
          </p>
        </div>
      </div>
      <Footer />
      </>
    );
  }
  
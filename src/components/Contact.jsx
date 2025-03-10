import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact() {
    return (
      <>
      <Header />
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-8 py-[8%]">
        {/* Contact Information */}
        <div className="md:p-6 w-full md:w-1/3 xl:w-1/5">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#0052F3] p-3 rounded-full text-white ">
                <FaPhoneAlt className="text-lg" />
              </div>
              <h3 className="text-xl font-semibold ">Call To Us</h3>
            </div>
            <p className=" text-md mb-3">We are available 24/7, 7 days a week.</p>
            <p className="  text-md">Phone: +91 99091 93962</p>
          </div>
          <hr className="my-4 " />
          <div>
            <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#0052F3] p-3 rounded-full text-white">
                <MdEmail className="text-lg" />
              </div>
              <h3 className="text-xl font-semibold">Write To Us</h3>
            </div>
            <p className=" text-md mb-3">Fill out our form and we will contact you within 24 hours.</p>
            <p className=" text-md mb-3">Emails: customer@buyspeart.com</p>
            <p className=" text-md mb-3">Emails: support@buyspeart.com</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white md:p-6 w-full md:w-2/3 lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <input className="p-4  bg-gray-100 w-full mb-2" type="text" placeholder="Your Name *" />
            <input className="p-4  bg-gray-100 w-full mb-2" type="email" placeholder="Your Email *" />
            <input className="p-4  bg-gray-100 w-full mb-2" type="tel" placeholder="Your Phone *" />
          </div>
          <textarea className="w-full p-6  bg-gray-100  mb-3" placeholder="Your Message" rows="7"></textarea>
          <div className="flex justify-end">
          <button className="bg-[#0052F3] text-white px-10 py-3 ">Send Message</button>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
  }
  
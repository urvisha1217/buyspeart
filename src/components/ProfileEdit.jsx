import Footer from "./Footer";
import Header from "./Header";

export default function ProfileEdit() {
  return (
    <>
    <Header />
      <div className="flex py-[3%] items-center justify-center p-6 ">
        <div className="bg-white w-full max-w-5xl flex flex-col md:flex-row gap-[15%] p-6 md:p-8 ">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <h3 className="text-gray-900 font-semibold text-xl mb-4">
              Manage My Account
            </h3>
            <ul className="space-y-2 mx-auto w-[70%] text-gray-400">
              <li className="text-blue-600">My Profile</li>
              <li>Address Book</li>
            </ul>
            <h3 className="text-gray-900 font-semibold text-xl mt-6 mb-4">
              My Orders
            </h3>
            <ul className="space-y-2 mx-auto w-[70%] text-gray-400">
              <li>All Orders</li>
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>
          </div>

          {/* Profile Form */}
          <div className="w-full md:w-3/4 pl-0 md:pl-10 pt-[5%]">
            <h2 className="text-xl font-bold text-blue-600 mb-6">
              Edit Your Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-800 text-md font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3  bg-gray-100 text-sm text-gray-600"
                />
              </div>
              <div>
                <label className="block text-gray-800 text-md font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3  bg-gray-100 text-sm text-gray-600"
                />
              </div>
              <div>
                <label className="block text-gray-800 text-md font-medium mb-1">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-3  bg-gray-100 text-sm text-gray-600"
                />
              </div>
              <div>
                <label className="block text-gray-800 text-md font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3  bg-gray-100 text-sm text-gray-600"
                />
              </div>
            </div>
            <h3 className="text-md font-semibold text-gray-800 mt-6">
              Password Changes
            </h3>
            <div className="mt-2 space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full p-3  bg-gray-100 text-sm text-gray-600"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full p-3  bg-gray-100 text-sm text-gray-600"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full p-3  bg-gray-100 text-sm text-gray-600"
              />
            </div>
            <div className="mt-6 flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-6">
              <button className="text-gray-600 text-md font-medium">
                Cancel
              </button>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-md font-semibold shadow-md hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

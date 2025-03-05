import React from "react";
import { FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaTruck className="text-white text-2xl" />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over £499",
  },
  {
    id: 2,
    icon: <FaHeadset className="text-white text-2xl" />,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: <FaShieldAlt className="text-white text-2xl" />,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const FeaturesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center">
            {/* Icon with Circular Background */}
            <div className="w-16 h-16 flex items-center justify-center bg-gray-300 rounded-full">
              <div className="w-12 h-12 flex items-center justify-center bg-black rounded-full">
                {feature.icon}
              </div>
            </div>

            {/* Text Content */}
            <h2 className="text-lg font-bold mt-4">{feature.title}</h2>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

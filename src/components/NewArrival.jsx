import React from "react";

const categories = [
  {
    id: 1,
    title: "Women's Collections",
    description: "Featured woman collections that give you another vibe.",
    image: "/images/na2.png", // Replace with actual image
  },
  {
    id: 2,
    title: "Speakers",
    description: "Amazon wireless speakers",
    image: "/images/na3.png", // Replace with actual image
  },
  {
    id: 3,
    title: "Perfume",
    description: "GUCCI INTENSEOUD EDP",
    image: "/images/na4.png", // Replace with actual image
  },
];

const NewArrival = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Title Section */}
      <div className="mb-6">
      <div className="flex items-center gap-2">
            <span className="bg-blue-600 h-8 w-4 rounded-sm"></span>
            <span className="text-blue-600 font-semibold text-lg">Featured</span>
          </div>
        {/* <h3 className="text-blue-600 font-medium flex items-center">
          <span className="w-2 h-6 bg-blue-600 mr-2"></span> Featured
        </h3> */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold mt-4  md:text-left">New Arrival</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Large Featured Item */}
        <div className="relative col-span-1 bg-black">
          <img
            src="/images/na1.png" // Replace with actual image
            alt="PlayStation 5"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold">PlayStation 5</h2>
            <p className="text-sm max-w-xs">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a
              href="#"
              className="inline-block mt-2 text-white border-b px-4 py-2 rounded font-semibold"
            >
              Shop Now
            </a>
          </div>
        </div>

      
        <div className="flex flex-col gap-6">
          {/* Women's Collections (Large, Top Full Width) */}
          <div className="relative h-[200px] md:h-[280px]  overflow-hidden shadow-lg bg-black">
            <img
              src={categories[0].image}
              alt={categories[0].title}
              className="w-full h-full object-cover "
            />
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-lg font-bold">{categories[0].title}</h2>
              <p className="text-sm">{categories[0].description}</p>
              <a
                href="#"
                className="inline-block mt-2 text-white border-b px-3 py-1 rounded font-semibold"
              >
                Shop Now
              </a>
            </div>
          </div>

          {/* Speakers & Perfume (Side-by-Side) */}
          <div className="grid grid-cols-2 gap-6  h-full">
            {categories.slice(1).map((item) => (
              <div
                key={item.id}
                className="relative h-[140px] md:h-full overflow-hidden bg-black "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-sm">{item.description}</p>
                  <a
                    href="#"
                    className="inline-block mt-2  text-white border-b px-3 py-1 rounded font-semibold"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;

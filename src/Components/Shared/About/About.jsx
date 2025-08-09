import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-6">
          About TradeLinker
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          TradeLinker is a next-generation B2B wholesale platform designed to
          connect suppliers, manufacturers, and retailers in a seamless and
          trusted environment. Our mission is to simplify bulk trade, provide
          transparency in transactions, and empower businesses to grow faster.
        </p>

        {/* Who We Are */}

        <div className="bg-white p-6 sm:p-8 rounded-lg shadow mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            {/* Left: Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.ibb.co.com/C5gdbMXL/images-6.jpg"
                alt="About Us"
                className="w-full h-32 sm:h-40 md:h-44 lg:h-48 object-cover rounded-lg"
              />
              <img
                src="https://i.ibb.co.com/TxtvXcqW/51324991243-914fb4f97e-k.webp"
                alt="About Us"
                className="w-full h-32 sm:h-40 md:h-44 lg:h-48 object-cover rounded-lg"
              />
              <img
                src="https://i.ibb.co.com/chJwB2YB/5ed0bfc3d2b21c702824e26d-100-Store-Party9789.jpg"
                alt="About Us"
                className="w-full h-32 sm:h-40 md:h-44 lg:h-48 object-cover rounded-lg"
              />
              <img
                src="https://i.ibb.co.com/Q3nn6tNd/9cd9ef7a21232b71-800x800ar.jpg"
                alt="About Us"
                className="w-full h-32 sm:h-40 md:h-44 lg:h-48 object-cover rounded-lg"
              />
            </div>

            {/* Right: Text */}
            <div>
              <h3 className="text-xl text-left sm:text-2xl font-semibold text-[#4FB3E8] mb-3 sm:mb-4">
                Who We Are ?              </h3>
              <h4 className="text-xl text-left sm:text-2xl font-semibold text-gray-400 mb-3 sm:mb-4">Building Smarter Business Connections for a Thriving Wholesale Future</h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We are a dedicated team of innovators, industry experts, and
                technology enthusiasts committed to transforming the way
                businesses connect and trade. At TradeLinker, we believe that
                seamless collaboration and transparent communication are the
                cornerstones of successful wholesale partnerships. Our platform
                is meticulously designed to cater to the unique needs of both
                small businesses and large enterprises, providing robust tools
                that simplify sourcing, inventory management, and order
                fulfillment. With a deep understanding of the challenges faced
                by suppliers and buyers in the wholesale market, we strive to
                bridge the gap by offering a secure, user-friendly marketplace
                that fosters trust and efficiency. 
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-5xl font-extrabold text-gray-300 ">1,200+</h4>
            <p className="text-[#1B365D] text-xl mt-2 font-medium">Vendors</p>
            <p className="text-sm text-gray-500 mt-1">
              Trusted suppliers from various industries across the globe.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-5xl font-extrabold text-gray-300 ">$2.5M+</h4>
            <p className="text-[#1B365D] text-xl mt-2 font-medium">Earnings</p>
            <p className="text-sm text-gray-500 mt-1">
              Revenue generated through successful business transactions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-5xl font-extrabold text-gray-300 ">35K+</h4>
            <p className="text-[#1B365D] text-xl mt-2 font-medium">Products Sold</p>
            <p className="text-sm text-gray-500 mt-1">
              High-volume sales across multiple categories and regions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-5xl font-extrabold text-gray-300 ">8,500+</h4>
            <p className="text-[#1B365D] text-xl mt-2 font-medium">Products Listed</p>
            <p className="text-sm text-gray-500 mt-1">
              Verified wholesale products available for bulk purchase.
            </p>
          </div>
        </div>

        {/* Mission / Vision / Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#4FB3E8] mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To make B2B trade simpler, safer, and more efficient through
              innovative technology and trusted partnerships.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#4FB3E8] mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be the leading global platform for wholesale trade, empowering
              businesses of all sizes to thrive in the digital economy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#4FB3E8] mb-3">
              Why Choose Us?
            </h3>
            <ul className="text-gray-600 space-y-2 text-left">
              <li>✔ Verified suppliers & secure transactions</li>
              <li>✔ Real-time inventory updates</li>
              <li>✔ Easy product management tools</li>
              <li>✔ Transparent pricing & bulk discounts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

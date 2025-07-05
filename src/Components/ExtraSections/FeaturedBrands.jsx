import React from "react";

const FeaturedBrands = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1B365D] mb-6">
          Top Featured Brands
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Our marketplace features top-rated global brands trusted by businesses
          around the world.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          <img
            src="https://i.ibb.co/8D0g9wrZ/samsung-logo-png-seeklogo-122017.png"
            alt="Samsung"
            className="h-16 mx-auto grayscale hover:grayscale-0 transition duration-300"
          />
          <img
            src="https://i.ibb.co/rGQvqcS0/sony-logo-png-seeklogo-129420.png"
            alt="Sony"
            className="h-16 mx-auto grayscale hover:grayscale-0 transition duration-300"
          />
          <img
            src="https://i.ibb.co/R8cvrLw/lg-electronics-logo-png-seeklogo-83711.png"
            alt="LG"
            className="h-16 mx-auto grayscale hover:grayscale-0 transition duration-300"
          />
          <img
            src="https://i.ibb.co/Hj9jZHG/panasonic-logo-png-seeklogo-105708.png"
            alt="Panasonic"
            className="h-16 mx-auto grayscale hover:grayscale-0 transition duration-300"
          />
          <img
            src="https://i.ibb.co/ccVMdrLY/png-transparent-philips-hd-logo-thumbnail.png"
            alt="Philips"
            className="h-16 mx-auto grayscale hover:grayscale-0 transition duration-300"
          />
          <img
            src="https://i.ibb.co/TMcpNXFG/whirlpool-logo-png-seeklogo-152594.png"
            alt="Whirlpool"
            className="h-16 mx-auto grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;

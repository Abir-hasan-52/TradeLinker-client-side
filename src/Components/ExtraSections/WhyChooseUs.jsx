import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f7fafc] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1B365D] mb-6">
          Why Choose TradeLinker?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We bring reliability, scale, and speed to your wholesale business.
          Here’s what makes us stand out:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1B365D] mb-2 hover:underline">
              Verified Suppliers
            </h3>
            <p className="text-gray-600">
              All our vendors go through a strict verification process to ensure
              trust and quality.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1B365D] mb-2 hover:underline">
              Bulk Discounts
            </h3>
            <p className="text-gray-600">
              Buy in bulk and save more with our exclusive business pricing
              options.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1B365D] mb-2 hover:underline">
              Global Shipping
            </h3>
            <p className="text-gray-600">
              We deliver across borders quickly and securely through trusted
              logistics partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

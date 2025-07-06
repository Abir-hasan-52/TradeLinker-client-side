import React from "react";
import { FaTruckLoading } from "react-icons/fa";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] text-center px-4 py-10">
      <FaTruckLoading className="text-7xl text-[#4FB3E8] mb-6 animate-bounce" />
      <h1 className="text-5xl font-extrabold text-[#1B365D] mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-2 font-semibold">
        Oops! Page Not Found
      </p>
      <p className="text-gray-500 max-w-md mb-6">
        It looks like the page you’re trying to reach doesn’t exist. It may have
        been moved or deleted.
      </p>
      <Link
        to="/"
        className="inline-block bg-[#1B365D] text-white px-6 py-2 rounded-xl font-semibold hover:bg-[#4FB3E8] transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error;

import React from "react";
 

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-500 mb-4"></div>
      <h3 className="text-lg font-semibold text-gray-700">
        Loading products...
      </h3>
      <p className="text-sm text-gray-500 mt-2">
        Please wait while we fetch the data
      </p>
    </div>
  );
};

export default Loader;

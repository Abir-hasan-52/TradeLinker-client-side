import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({ size = 80, color = "#4f46e5", loading = true, message = "Loading..." }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <ClipLoader
        color={color}
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p className="mt-4 text-lg text-gray-700 font-medium animate-pulse">{message}</p>
    </div>
  );
};

export default Loader;

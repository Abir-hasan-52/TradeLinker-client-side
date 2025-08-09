import React from "react";
import { Link } from "react-router";

const TradeLinkerLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 pl-2">
      {/* Icon: chain link with bright accent */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#4FB3E8] md:h-7 md:w-7"
        fill="currentColor"   // fill color to stand out
        viewBox="0 0 24 24"
        stroke="none"
      >
        <path d="M15 12a3 3 0 00-3-3H9a3 3 0 000 6h3a3 3 0 003-3z" />
        <path d="M12 15v1a3 3 0 006 0v-1a3 3 0 00-6 0z" />
      </svg>

      {/* Text: Bright color + shadow */}
      <span className="font-extrabold text-[#78c6f9] md:text-2xl tracking-wide drop-shadow-md hover:text-[#28baf9] transition-colors">
        TradeLinker
      </span>
    </Link>
  );
};

export default TradeLinkerLogo;

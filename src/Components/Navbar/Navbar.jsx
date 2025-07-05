import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = [
    <li className=" hover:bg-[#4FB3E8]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "font-bold underline text-[#4FB3E8]" : ""
        }
      >
        Home
      </NavLink>
    </li>,
    <li className="  hover:bg-[#4FB3E8]">
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "font-bold underline text-[#4FB3E8]" : ""
        }
      >
        Login
      </NavLink>
    </li>,
    <li className="  hover:bg-[#4FB3E8]">
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? "font-bold underline text-[#4FB3E8]" : ""
        }
      >
          Register
      </NavLink>
    </li>,
  ];

  return (
    <div className="navbar  bg-[#1B365D] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown m-0">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-[#333333	]  rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <a className="btn hover:bg-[#4FB3E8] text-white btn-ghost text-xl">TradeLinks</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#1B365D] hover:bg-[#007BFF] text-white px-4 py-2 rounded font-medium transition-all
">Button</a>
      </div>
    </div>
  );
};

export default Navbar;

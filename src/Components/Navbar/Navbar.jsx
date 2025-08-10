import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import TradeLinkerLogo from "../Shared/TradeLinkerLogo/TradeLinkerLogo";

const Navbar = () => {
  const { user, SignOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    SignOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign-out successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const links = (
    <>
      <li className="hover:bg-[#4FB3E8]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold underline text-[#4FB3E8]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:bg-[#4FB3E8]">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "font-bold underline text-[#4FB3E8]" : ""
          }
        >
          Products
        </NavLink>
      </li>
      <li className="hover:bg-[#4FB3E8]">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "font-bold underline text-[#4FB3E8]" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li className="hover:bg-[#4FB3E8]">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-bold underline text-[#4FB3E8]" : ""
          }
        >
          About Us
        </NavLink>
      </li>
     
    </>
  );

  return (
    <>
      {/* Navbar Full Width Background */}
      <nav className="fixed top-0 left-0 w-full bg-[#1B365D] shadow-sm z-50">
        {/* Inner Container with max-w-7xl */}
        <div className="max-w-7xl mx-auto px-4  ">
          <div className="navbar h-16 md:h-20 flex justify-between items-center">
            {/* Left Side */}
            <div className="navbar-start flex items-center">
              {/* Mobile Menu */}
              <div className="dropdown lg:hidden">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost p-2"
                  aria-label="Open menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white text-[#333333] rounded-box mt-3 w-52 p-2 shadow"
                >
                  {links}
                </ul>
              </div>
              {/* Logo */}
              <TradeLinkerLogo />
            </div>

            {/* Middle Menu (Desktop) */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal text-white px-1">{links}</ul>
            </div>

            {/* Right Side */}
            <div className="navbar-end flex items-center gap-2">
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={
                          user.photoURL ||
                          "https://i.ibb.co.com/Rpp4kRf3/Black-and-White-Simple-The-man-was-silent-Facebook-Profile-Picture.png"
                        }
                        alt="User Avatar"
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li className="font-bold text-center">
                      {user.displayName}
                    </li>
                    <li className="text-center text-sm text-gray-500">
                      {user.email}
                    </li>
                    <div className="divider my-1"></div>
                    <li>
                      <Link to="/dashboard" className="justify-between">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="text-red-500 font-semibold"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="btn bg-[#1B365D] hover:bg-[#007BFF] text-white px-4 py-2 rounded font-medium"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Push content down so navbar doesn't cover it */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;

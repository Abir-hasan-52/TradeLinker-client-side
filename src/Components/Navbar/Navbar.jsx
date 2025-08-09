import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";

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
          to="/All-Products"
          className={({ isActive }) =>
            isActive ? "font-bold underline text-[#4FB3E8]" : ""
          }
        >
          All Products
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
      {user && (
        <>
          <li className="hover:bg-[#4FB3E8]">
            <NavLink
              to="/add-products"
              className={({ isActive }) =>
                isActive ? "font-bold underline text-[#4FB3E8]" : ""
              }
            >
              Add Product
            </NavLink>
          </li>

          <li className="hover:bg-[#4FB3E8]">
            <NavLink
              to="/my-products"
              className={({ isActive }) =>
                isActive ? "font-bold underline text-[#4FB3E8]" : ""
              }
            >
              My Product
            </NavLink>
          </li>

          <li className="hover:bg-[#4FB3E8]">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "font-bold underline text-[#4FB3E8]" : ""
              }
            >
              Cart
            </NavLink>
          </li>
        </>
      )}

       
    </>
  );

  return (
    <>
      {/* Navbar */}
      <div className="navbar fixed top-0 left-0 w-full bg-[#1B365D] shadow-sm z-50 px-4">
        {/* Left Side */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
          <Link
            to="/"
            className="btn hover:bg-[#4FB3E8] text-white btn-ghost text-lg md:text-xl"
          >
            TradeLinks
          </Link>
        </div>

        {/* Middle Menu (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1">{links}</ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">
          {user ? (
            <>
              <Link
                onClick={handleSignOut}
                className="btn bg-[#1B365D] hover:bg-[#007BFF] text-white px-4 py-2 rounded font-medium"
              >
                LogOut
              </Link>
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn bg-[#1B365D] hover:bg-[#007BFF] text-white px-4 py-2 rounded font-medium"
              >
                SignIn
              </Link>
              <Link
                to="/register"
                className="btn bg-[#1B365D] hover:bg-[#007BFF] text-white px-4 py-2 rounded font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Push content down so navbar doesn't cover it */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;

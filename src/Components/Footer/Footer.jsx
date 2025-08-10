import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#E5E5E5] px-4 md:px-12 lg:px-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">TradeLinker</h2>
          <p className="text-sm mt-2 text-[#CCCCCC]">
            Where Bulk Meets Business. A global wholesale platform you can
            trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
  <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
  <ul className="space-y-2 text-sm">
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "font-bold underline text-[#4FB3E8]" : "hover:text-[#4FB3E8]"
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/category-products"
        className={({ isActive }) =>
          isActive ? "font-bold underline text-[#4FB3E8]" : "hover:text-[#4FB3E8]"
        }
      >
        Categories
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "font-bold underline text-[#4FB3E8]" : "hover:text-[#4FB3E8]"
        }
      >
        All Products
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/add-products"
        className={({ isActive }) =>
          isActive ? "font-bold underline text-[#4FB3E8]" : "hover:text-[#4FB3E8]"
        }
      >
        Add Product
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? "font-bold underline text-[#4FB3E8]" : "hover:text-[#4FB3E8]"
        }
      >
        Cart
      </NavLink>
    </li>
  </ul>
</div>


        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">📍 Dhaka, Bangladesh</p>
          <p className="text-sm">📞 +880 123 456 789</p>
          <p className="text-sm">✉️ support@tradelinker.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-[#4FB3E8]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#4FB3E8]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#4FB3E8]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-[#333]" />

      {/* Copyright */}
      <p className="text-center text-sm text-[#AAAAAA]">
        © 2025 TradeLinker. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

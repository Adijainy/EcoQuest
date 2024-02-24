import React from "react";
import { navLinks } from "../config/navLinks";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between px-6 py-3 bg-richgreen-50 text-lg font-Poppins font-semibold text-white items-center">
      <h1 className="text-2xl font-PollerOne font-normal">Ecoquest</h1>
      <div className="flex gap-4">
        {navLinks.map((link) => (
          <Link
            className="hover:text-richgreen-400 transition-all duration-150"
            to={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <button className="border-2 rounded-full py-1 px-5 text-richgreen-400  border-richgreen-400 hover:bg-richgreen-400 hover:text-white transition-all duration-150">
        Logout
      </button>
    </div>
  );
};

export default Nav;

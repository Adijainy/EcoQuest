import React from "react";
import { navLinks } from "../config/navLinks";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../service/operations/auth";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between px-6 py-3 bg-richgreen-50 text-lg font-Poppins font-semibold text-white items-center h-16">
      <h1 className="text-2xl font-PollerOne font-normal">Ecoquest</h1>
      <div className="flex gap-6">
        {navLinks.map((link, ind) => (
          <Link
            key={ind}
            className="hover:text-richgreen-400 transition-all duration-150"
            to={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <button
        onClick={() => logout(navigate, dispatch)}
        className="border-2 rounded-full py-1 px-5 text-richgreen-400  border-richgreen-400 hover:bg-richgreen-400 hover:text-white transition-all duration-150"
      >
        Logout
      </button>
    </div>
  );
};

export default Nav;

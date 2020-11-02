import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <p className="navbar__header">Personal Store</p>
      </Link>
      <ul className="navbar__navlinks">
        <li className="navbar__navlinks__link">Login</li>
        <li className="navbar__navlinks__link">Signup</li>
      </ul>
    </div>
  );
};

export default Navbar;

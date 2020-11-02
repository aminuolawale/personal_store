import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="navbar__header">Personal Store</p>
      <ul className="navbar__navlinks">
        <li className="navbar__navlinks__link">Login</li>
        <li className="navbar__navlinks__link">Signup</li>
      </ul>
    </div>
  );
};

export default Navbar;

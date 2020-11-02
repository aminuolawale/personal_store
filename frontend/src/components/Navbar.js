import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <div className="navbar">
      <Link to="/">
        <p className="navbar__header">Personal Store</p>
      </Link>
      <ul className="navbar__navlinks">
        {loggedIn ? (
          <Fragment>
            <li className="navbar__navlinks__link">
              <FaUser
                onClick={() => setDropdownActive(!dropdownActive)}
              ></FaUser>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li className="navbar__navlinks__link">
              <Link to="/login">Login</Link>
            </li>
            <li className="navbar__navlinks__link">
              <Link to="/signup">Signup</Link>
            </li>
          </Fragment>
        )}
      </ul>
      <Fragment>{dropdownActive ? <Dropdown></Dropdown> : ""}</Fragment>
    </div>
  );
};

export default Navbar;

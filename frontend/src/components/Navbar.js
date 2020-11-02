import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../redux/auth/actions";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <Link to="/">
        <p className="navbar__header">Personal Store</p>
      </Link>
      <ul className="navbar__navlinks">
        {loggedIn ? (
          <Fragment>
            <li className="navbar__navlinks__link">
              <a onClick={() => dispatch(logout())} href="#">
                Logout
              </a>
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
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../redux/auth/actions";
import { useDispatch } from "react-redux";

const Dropdown = () => {
  const dispatch = useDispatch();
  return (
    <ul className="dropdown">
      <li className="dropdown__item">
        <Link to="/account">Account</Link>
      </li>
      <li className="dropdown__item" onClick={() => dispatch(logout())}>
        Logout
      </li>
    </ul>
  );
};

export default Dropdown;

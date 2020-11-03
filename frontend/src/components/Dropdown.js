import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { logout } from "../redux/auth/actions";
import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";

const Dropdown = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (active) {
      document.addEventListener("click", (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setActive(false);
        }
      });
    }
  }, [active]);

  return (
    <ul className="dropdown">
      <span
        className="dropdown__toggler"
        ref={ref}
        onClick={(e) => {
          setActive(!active);
        }}
      >
        <FaUser></FaUser>
      </span>
      {active && (
        <div className="dropdown__list">
          <li className="dropdown__list__item">
            <Link to="/account">Account</Link>
          </li>
          <li
            className="dropdown__list__item"
            onClick={() => dispatch(logout())}
          >
            Logout
          </li>
        </div>
      )}
    </ul>
  );
};

export default Dropdown;

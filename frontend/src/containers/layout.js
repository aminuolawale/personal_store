import React from "react";
import Navbar from "../components/Navbar";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="layout__content">
        <Navbar></Navbar>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;

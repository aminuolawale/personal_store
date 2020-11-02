import React from "react";
import Navbar from "../components/Navbar";

const Layout = (props) => {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <div className="layout__content">{props.children}</div>
    </div>
  );
};

export default Layout;
